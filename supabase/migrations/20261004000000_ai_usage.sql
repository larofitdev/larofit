-- Per-user daily counter for the ai-coach Edge Function's rate limit.
create table if not exists public.ai_usage (
  user_id uuid not null references auth.users (id) on delete cascade,
  day     date not null default (now() at time zone 'utc')::date,
  count   integer not null default 0,
  primary key (user_id, day)
);

-- No policies: only the service role (the Edge Function) can touch it.
alter table public.ai_usage enable row level security;

-- Counts one call for today and returns the new total, atomically.
create or replace function public.ai_usage_hit(p_user uuid)
returns integer
language sql
set search_path = public
as $$
  insert into public.ai_usage (user_id, day, count)
  values (p_user, (now() at time zone 'utc')::date, 1)
  on conflict (user_id, day) do update set count = public.ai_usage.count + 1
  returning count;
$$;

revoke all on function public.ai_usage_hit(uuid) from public, anon, authenticated;
grant execute on function public.ai_usage_hit(uuid) to service_role;
