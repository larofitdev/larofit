// LaroFit — delete-account Edge Function
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const jwt = (req.headers.get("Authorization") || "").replace("Bearer ", "").trim();
    if (!jwt) return json({ error: "Missing auth token" }, 401);

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: userData, error: userErr } = await admin.auth.getUser(jwt);
    if (userErr || !userData?.user) return json({ error: "Invalid or expired token" }, 401);
    const uid = userData.user.id;

    const tables: Array<{ name: string; col: string }> = [
      { name: "workout_history",  col: "user_id" },
      { name: "measurements",     col: "user_id" },
      { name: "custom_exercises", col: "user_id" },
      { name: "programs",         col: "user_id" },
      { name: "profiles",         col: "id" },
    ];

    for (const t of tables) {
      const { error } = await admin.from(t.name).delete().eq(t.col, uid);
      if (error) return json({ error: `Failed deleting ${t.name}: ${error.message}` }, 500);
    }

    const { error: delErr } = await admin.auth.admin.deleteUser(uid);
    if (delErr) return json({ error: `Failed deleting auth user: ${delErr.message}` }, 500);

    return json({ success: true });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
