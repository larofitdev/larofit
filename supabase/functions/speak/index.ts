// LaroFit — speak Edge Function
// Turns one short line of coaching text into natural-sounding speech (MP3).
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const OPENAI_URL = "https://api.openai.com/v1/audio/speech";
const MODEL = "gpt-4o-mini-tts";
const ALLOWED_VOICES = ["marin", "cedar", "coral", "ash"];
const INSTRUCTIONS =
  "You are a personal trainer talking to a client through their earbuds in the middle of a workout. " +
  "Sound warm, clear and upbeat, at a brisk natural pace. Say numbers and units naturally.";

const MAX_TEXT_CHARS = 700;
// Spoken lines per user per UTC day. A voice workout is roughly 100–150.
const DAILY_LIMIT = 1000;

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

// Counts this call against the user's daily speech total (public.ai_usage_hit)
// and returns the new total. Throws if the counter can't be reached.
async function countCall(userId: string): Promise<number> {
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const res = await fetch(`${Deno.env.get("SUPABASE_URL")}/rest/v1/rpc/ai_usage_hit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${serviceKey}`,
      "apikey": serviceKey,
    },
    body: JSON.stringify({ p_user: userId, p_kind: "tts" }),
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

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) return json({ error: "API key not configured" }, 500);

    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }
    const text = typeof body?.text === "string" ? body.text.trim() : "";
    if (!text) return json({ error: "text is required" }, 400);
    if (text.length > MAX_TEXT_CHARS) return json({ error: "Text too long" }, 413);
    if (!ALLOWED_VOICES.includes(body.voice)) return json({ error: "Voice not allowed" }, 400);

    if ((await countCall(userId)) > DAILY_LIMIT) {
      return json({ error: "Daily speech limit reached. Try again tomorrow." }, 429);
    }

    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        voice: body.voice,
        input: text,
        instructions: INSTRUCTIONS,
        response_format: "mp3",
      }),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return json({ error: data?.error?.message || "Speech failed" }, 502);
    }
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "audio/mpeg" },
    });

  } catch (err) {
    return json({ error: err.message }, 500);
  }
});
