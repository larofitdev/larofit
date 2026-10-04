import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

// Only these models may be requested, and replies are capped, so a signed-in
// user can't run arbitrary workloads on our key.
const ALLOWED_MODELS = [
  "claude-haiku-4-5",
  "claude-sonnet-5-5",
];
const MAX_TOKENS_CAP = 4096;
const MAX_BODY_BYTES = 60_000;
// Calls per user per UTC day. A long workout is ~40 calls, onboarding ~10.
const DAILY_LIMIT = 150;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// Returns the user id for a signed-in user's access token, else null. The
// public anon key is a valid JWT but has no user behind it, so it is rejected.
async function getUserId(jwt: string): Promise<string | null> {
  const res = await fetch(`${Deno.env.get("SUPABASE_URL")}/auth/v1/user`, {
    headers: {
      "Authorization": `Bearer ${jwt}`,
      "apikey": Deno.env.get("SUPABASE_ANON_KEY")!,
    },
  });
  if (!res.ok) return null;
  const user = await res.json();
  return user?.id || null;
}

// Counts this call against the user's daily total (public.ai_usage_hit) and
// returns the new total. Throws if the counter can't be reached.
async function countCall(userId: string): Promise<number> {
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const res = await fetch(`${Deno.env.get("SUPABASE_URL")}/rest/v1/rpc/ai_usage_hit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${serviceKey}`,
      "apikey": serviceKey,
    },
    body: JSON.stringify({ p_user: userId }),
  });
  if (!res.ok) throw new Error(`usage counter failed (${res.status})`);
  return await res.json();
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const jwt = (req.headers.get("Authorization") || "").replace("Bearer ", "").trim();
    if (!jwt) return json({ error: "Missing auth token" }, 401);
    const userId = await getUserId(jwt);
    if (!userId) return json({ error: "Invalid or expired token" }, 401);

    const anthropicKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicKey) return json({ error: "API key not configured" }, 500);

    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return json({ error: "Request too large" }, 413);

    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    if (!ALLOWED_MODELS.includes(body?.model)) return json({ error: "Model not allowed" }, 400);
    if (!Array.isArray(body.messages) || !body.messages.length) {
      return json({ error: "messages is required" }, 400);
    }

    // Forward only the fields the app uses — never the raw body
    const maxTokens = Math.min(Math.max(parseInt(body.max_tokens) || 200, 1), MAX_TOKENS_CAP);
    const payload: Record<string, unknown> = {
      model: body.model,
      max_tokens: maxTokens,
      messages: body.messages,
    };
    if (typeof body.system === "string") {
      // Cached so multi-turn chats (onboarding) don't re-bill the long prompt each turn
      payload.system = [{ type: "text", text: body.system, cache_control: { type: "ephemeral" } }];
    }

    if ((await countCall(userId)) > DAILY_LIMIT) {
      return json({ error: "Daily AI limit reached. Try again tomorrow." }, 429);
    }

    const response = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return json(data, response.status);

  } catch (err) {
    return json({ error: err.message }, 500);
  }
});
