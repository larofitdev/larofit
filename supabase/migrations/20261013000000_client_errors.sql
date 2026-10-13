-- Short reports of faults in the app on a user's device (what went wrong, on which
-- page), sent automatically so they can be found and fixed.
create table if not exists public.client_errors (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  page       text,
  kind       text,
  message    text not null,
  stack      text,
  build      text,
  device     text
);

create index if not exists client_errors_created on public.client_errors (created_at desc);

alter table public.client_errors enable row level security;

-- A signed-in user can add a report for themselves. Nobody can read reports through
-- the app; they are read by the developer directly from the database.
drop policy if exists "Users can add own error reports" on public.client_errors;
create policy "Users can add own error reports" on public.client_errors
  for insert with check (auth.uid() = user_id);
