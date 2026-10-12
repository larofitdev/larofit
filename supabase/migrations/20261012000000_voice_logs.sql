-- Diagnostic logs from voice workouts (what the mic and speech did), sent by the
-- app when a voice workout finishes or the LOG button is tapped.
create table if not exists public.voice_logs (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  build      text,
  reason     text,
  log        text not null
);

create index if not exists voice_logs_user_created on public.voice_logs (user_id, created_at desc);

alter table public.voice_logs enable row level security;

create policy "Users can add own voice logs" on public.voice_logs
  for insert with check (auth.uid() = user_id);
create policy "Users can view own voice logs" on public.voice_logs
  for select using (auth.uid() = user_id);
