// LaroFit — transcribe Edge Function
// Turns one short spoken phrase (WAV) from voice logging into text.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const OPENAI_URL = "https://api.openai.com/v1/audio/transcriptions";
const MODEL = "gpt-4o-mini-transcribe";
// Context only — no example commands, so silence can't be "heard" as one
const PROMPT = "Short spoken gym workout commands in English.";

// The app sends 16 kHz mono 16-bit clips of at most 8 seconds (~256 KB)
const MAX_BODY_BYTES = 400_000;
// Phrases per user per UTC day. A voice workout is roughly 60–100.
const DAILY_LIMIT = 600;

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

// Counts this call against the user's daily voice total (public.ai_usage_hit)
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
    body: JSON.stringify({ p_user: userId, p_kind: "voice" }),
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

    const audio = new Uint8Array(await req.arrayBuffer());
    if (audio.length > MAX_BODY_BYTES) return json({ error: "Clip too large" }, 413);
    // Must be a RIFF/WAVE file
    const tag = (from: number) => String.fromCharCode(...audio.slice(from, from + 4));
    if (audio.length < 44 || tag(0) !== "RIFF" || tag(8) !== "WAVE") {
      return json({ error: "Expected a WAV clip" }, 400);
    }

    if ((await countCall(userId)) > DAILY_LIMIT) {
      return json({ error: "Daily voice limit reached. Try again tomorrow." }, 429);
    }

    const form = new FormData();
    form.append("file", new File([audio], "phrase.wav", { type: "audio/wav" }));
    form.append("model", MODEL);
    form.append("prompt", PROMPT);

    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: { "Authorization": `Bearer ${openaiKey}` },
      body: form,
    });
    const data = await response.json();
    if (!response.ok) {
      return json({ error: data?.error?.message || "Transcription failed" }, 502);
    }
    // Given silence, the model tends to repeat the prompt back
    const text = String(data.text || "").trim();
    return json({ text: text === PROMPT ? "" : text });

  } catch (err) {
    return json({ error: err.message }, 500);
  }
});
