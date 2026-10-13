// LaroFit — admin-stats Edge Function
// Figures for the owner's admin page: accounts, workouts, usage, error reports and
// voice logs across every user. Only the email addresses listed in the ADMIN_EMAILS
// secret (comma-separated) may call it; everyone else gets 403.
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

const dayKey = (d: Date) => d.toISOString().slice(0, 10);

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

    const allowed = (Deno.env.get("ADMIN_EMAILS") || "").toLowerCase().split(",").map((s) => s.trim()).filter(Boolean);
    const email = (userData.user.email || "").toLowerCase();
    if (!allowed.length || !allowed.includes(email)) return json({ error: "Not available" }, 403);

    let body: { voiceLog?: string } = {};
    try { body = await req.json(); } catch { /* no body */ }

    // One voice log in full, when asked for by id
    if (body.voiceLog) {
      const { data, error } = await admin.from("voice_logs").select("id, user_id, created_at, build, reason, log").eq("id", body.voiceLog).single();
      if (error) return json({ error: error.message }, 404);
      return json({ voiceLog: data });
    }

    const now = new Date();
    const since = (days: number) => new Date(now.getTime() - days * 86400000);
    const d14 = dayKey(since(13)), iso30 = since(30).toISOString(), iso7 = since(7).toISOString();

    // Accounts (paged; fine for the thousands, to be replaced by a count query beyond that)
    const users: { id: string; email?: string; created_at: string; last_sign_in_at?: string | null }[] = [];
    for (let page = 1; page <= 20; page++) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
      if (error) return json({ error: "Could not list accounts: " + error.message }, 500);
      users.push(...data.users.map((u) => ({ id: u.id, email: u.email, created_at: u.created_at, last_sign_in_at: u.last_sign_in_at })));
      if (data.users.length < 1000) break;
    }
    const emailOf = new Map(users.map((u) => [u.id, u.email || ""]));

    const [workouts, usage, errors, logs] = await Promise.all([
      admin.from("workout_history").select("user_id, workout_date, duration_min").gte("workout_date", d14).order("workout_date"),
      admin.from("ai_usage").select("user_id, day, kind, count").gte("day", d14).order("day"),
      admin.from("client_errors").select("id, user_id, created_at, page, kind, message, build, device").order("created_at", { ascending: false }).limit(30),
      admin.from("voice_logs").select("id, user_id, created_at, build, reason").order("created_at", { ascending: false }).limit(30),
    ]);
    for (const r of [workouts, usage, errors, logs]) if (r.error) return json({ error: r.error.message }, 500);

    // The last 14 days, oldest first
    const days: string[] = [];
    for (let i = 13; i >= 0; i--) days.push(dayKey(since(i)));
    const perDay = days.map((day) => {
      const w = (workouts.data || []).filter((r) => r.workout_date === day);
      const u = (usage.data || []).filter((r) => r.day === day);
      const sum = (kind: string) => u.filter((r) => r.kind === kind).reduce((n, r) => n + (r.count || 0), 0);
      return {
        day,
        workoutDays: w.length,                                     // one row per user per day
        activeUsers: new Set([...w.map((r) => r.user_id), ...u.map((r) => r.user_id)]).size,
        signups: users.filter((x) => x.created_at.slice(0, 10) === day).length,
        ai: sum("ai"), voice: sum("voice"), tts: sum("tts"),
      };
    });

    return json({
      generatedAt: now.toISOString(),
      accounts: {
        total: users.length,
        new7: users.filter((u) => u.created_at >= iso7).length,
        new30: users.filter((u) => u.created_at >= iso30).length,
        active7: users.filter((u) => (u.last_sign_in_at || "") >= iso7).length,
        newest: users.sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 10)
          .map((u) => ({ email: u.email, created_at: u.created_at, last_sign_in_at: u.last_sign_in_at })),
      },
      perDay,
      errors: (errors.data || []).map((e) => ({ ...e, email: emailOf.get(e.user_id) || "" })),
      voiceLogs: (logs.data || []).map((l) => ({ ...l, email: emailOf.get(l.user_id) || "" })),
    });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
