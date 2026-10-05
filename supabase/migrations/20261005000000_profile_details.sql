-- The profile page's goals, training style and nutrition selections.
-- They were only kept in the browser, under a key the app then overwrote.
alter table public.profiles add column if not exists details jsonb not null default '{}'::jsonb;
