-- Count voice transcription separately from AI coaching, so a voice workout
-- doesn't use up the user's daily coaching calls.
alter table public.ai_usage add column if not exists kind text not null default 'ai';
alter table public.ai_usage drop constraint ai_usage_pkey;
alter table public.ai_usage add primary key (user_id, day, kind);

-- Counts one call of the given kind for today and returns the new total, atomically.
create or replace function public.ai_usage_hit(p_user uuid, p_kind text)
returns integer
language sql
set search_path = public
as $$
  insert into public.ai_usage (user_id, day, kind, count)
  values (p_user, (now() at time zone 'utc')::date, p_kind, 1)
  on conflict (user_id, day, kind) do update set count = public.ai_usage.count + 1
  returning count;
$$;

revoke all on function public.ai_usage_hit(uuid, text) from public, anon, authenticated;
grant execute on function public.ai_usage_hit(uuid, text) to service_role;

-- The original one-argument form (used by ai-coach) keeps working
create or replace function public.ai_usage_hit(p_user uuid)
returns integer
language sql
set search_path = public
as $$
  select public.ai_usage_hit(p_user, 'ai');
$$;

revoke all on function public.ai_usage_hit(uuid) from public, anon, authenticated;
grant execute on function public.ai_usage_hit(uuid) to service_role;
