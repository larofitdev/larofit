-- LaroFit database structure (schema "public"), as it is in the live project.
-- A record for reference and for rebuilding: it is written by tools/snapshot-schema.mjs
-- from the database itself. Do not edit by hand; change the database with a file in
-- supabase/migrations, then run the tool again.
--
-- Snapshot taken 2026-10-13.

-- ── ai_usage ──
create table public.ai_usage (
  user_id uuid not null,
  day date not null default ((now() AT TIME ZONE 'utc'::text))::date,
  count integer not null default 0,
  kind text not null default 'ai'::text
);
alter table public.ai_usage add constraint ai_usage_pkey PRIMARY KEY (user_id, day, kind);
alter table public.ai_usage add constraint ai_usage_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
alter table public.ai_usage enable row level security;
-- (no policies: only the service role can read or write)

-- ── client_errors ──
create table public.client_errors (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null,
  created_at timestamp with time zone not null default now(),
  page text,
  kind text,
  message text not null,
  stack text,
  build text,
  device text
);
alter table public.client_errors add constraint client_errors_pkey PRIMARY KEY (id);
alter table public.client_errors add constraint client_errors_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
CREATE INDEX client_errors_created ON public.client_errors USING btree (created_at DESC);
alter table public.client_errors enable row level security;
create policy "Users can add own error reports" on public.client_errors for insert to public with check ((auth.uid() = user_id));

-- ── custom_exercises ──
create table public.custom_exercises (
  id text not null,
  user_id uuid not null,
  name text not null,
  primary_muscle text not null,
  secondary_muscles text[] not null default '{}'::text[],
  equipment text not null,
  record_type text not null default 'weight_reps'::text,
  instructions text,
  exercise_url text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);
alter table public.custom_exercises add constraint custom_exercises_pkey PRIMARY KEY (id, user_id);
alter table public.custom_exercises add constraint custom_exercises_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
alter table public.custom_exercises enable row level security;
create policy "Users can manage their own custom exercises" on public.custom_exercises for all to public using ((auth.uid() = user_id)) with check ((auth.uid() = user_id));

-- ── measurements ──
create table public.measurements (
  id uuid not null default uuid_generate_v4(),
  user_id uuid not null,
  entry_date date not null,
  weight_lbs numeric,
  body_fat_pct numeric,
  neck_in numeric,
  chest_in numeric,
  bicep_l_in numeric,
  bicep_r_in numeric,
  forearm_l_in numeric,
  forearm_r_in numeric,
  waist_in numeric,
  hips_in numeric,
  thigh_l_in numeric,
  thigh_r_in numeric,
  calf_l_in numeric,
  calf_r_in numeric,
  notes text,
  created_at timestamp with time zone default now()
);
alter table public.measurements add constraint measurements_pkey PRIMARY KEY (id);
alter table public.measurements add constraint measurements_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
CREATE UNIQUE INDEX measurements_user_date ON public.measurements USING btree (user_id, entry_date);
alter table public.measurements enable row level security;
create policy "Users can delete own measurements" on public.measurements for delete to public using ((auth.uid() = user_id));
create policy "Users can insert own measurements" on public.measurements for insert to public with check ((auth.uid() = user_id));
create policy "Users can update own measurements" on public.measurements for update to public using ((auth.uid() = user_id));
create policy "Users can view own measurements" on public.measurements for select to public using ((auth.uid() = user_id));

-- ── profiles ──
create table public.profiles (
  id uuid not null,
  email text,
  full_name text,
  name text,
  initials text,
  dob date,
  sex text,
  height_in numeric,
  weight_lbs numeric,
  level text,
  goal text,
  units text default 'imperial'::text,
  onboarded boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  details jsonb not null default '{}'::jsonb
);
alter table public.profiles add constraint profiles_pkey PRIMARY KEY (id);
alter table public.profiles add constraint profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;
alter table public.profiles enable row level security;
create policy "Users can insert own profile" on public.profiles for insert to public with check ((auth.uid() = id));
create policy "Users can update own profile" on public.profiles for update to public using ((auth.uid() = id));
create policy "Users can view own profile" on public.profiles for select to public using ((auth.uid() = id));

-- ── programs ──
create table public.programs (
  id uuid not null default uuid_generate_v4(),
  user_id uuid not null,
  name text not null,
  overview text,
  weeks integer default 8,
  goal text,
  ai_generated boolean default false,
  is_active boolean default false,
  program_data jsonb not null,
  saved_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
alter table public.programs add constraint programs_pkey PRIMARY KEY (id);
alter table public.programs add constraint programs_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
alter table public.programs enable row level security;
create policy "Users can delete own programs" on public.programs for delete to public using ((auth.uid() = user_id));
create policy "Users can insert own programs" on public.programs for insert to public with check ((auth.uid() = user_id));
create policy "Users can update own programs" on public.programs for update to public using ((auth.uid() = user_id));
create policy "Users can view own programs" on public.programs for select to public using ((auth.uid() = user_id));

-- ── voice_logs ──
create table public.voice_logs (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null,
  created_at timestamp with time zone not null default now(),
  build text,
  reason text,
  log text not null
);
alter table public.voice_logs add constraint voice_logs_pkey PRIMARY KEY (id);
alter table public.voice_logs add constraint voice_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
CREATE INDEX voice_logs_user_created ON public.voice_logs USING btree (user_id, created_at DESC);
alter table public.voice_logs enable row level security;
create policy "Users can add own voice logs" on public.voice_logs for insert to public with check ((auth.uid() = user_id));
create policy "Users can view own voice logs" on public.voice_logs for select to public using ((auth.uid() = user_id));

-- ── workout_history ──
create table public.workout_history (
  id uuid not null default uuid_generate_v4(),
  user_id uuid not null,
  workout_date date not null,
  name text,
  duration_min integer,
  total_volume numeric,
  prs integer default 0,
  session_data jsonb not null,
  created_at timestamp with time zone default now()
);
alter table public.workout_history add constraint workout_history_pkey PRIMARY KEY (id);
alter table public.workout_history add constraint workout_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
CREATE UNIQUE INDEX workout_history_user_date ON public.workout_history USING btree (user_id, workout_date);
alter table public.workout_history enable row level security;
create policy "Users can delete own workout history" on public.workout_history for delete to public using ((auth.uid() = user_id));
create policy "Users can insert own workout history" on public.workout_history for insert to public with check ((auth.uid() = user_id));
create policy "Users can update own workout history" on public.workout_history for update to public using ((auth.uid() = user_id));
create policy "Users can view own workout history" on public.workout_history for select to public using ((auth.uid() = user_id));

-- ── Functions ──
CREATE OR REPLACE FUNCTION public.ai_usage_hit(p_user uuid, p_kind text)
 RETURNS integer
 LANGUAGE sql
 SET search_path TO 'public'
AS $function$
  insert into public.ai_usage (user_id, day, kind, count)
  values (p_user, (now() at time zone 'utc')::date, p_kind, 1)
  on conflict (user_id, day, kind) do update set count = public.ai_usage.count + 1
  returning count;
$function$
;

CREATE OR REPLACE FUNCTION public.ai_usage_hit(p_user uuid)
 RETURNS integer
 LANGUAGE sql
 SET search_path TO 'public'
AS $function$
  select public.ai_usage_hit(p_user, 'ai');
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.profiles (id, email, full_name, name, initials)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    upper(left(coalesce(new.raw_user_meta_data->>'name', new.email), 1))
  );
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  new.updated_at = now();
  return new;
end;
$function$
;

-- ── Triggers ──
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION handle_new_user();
CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER programs_updated_at BEFORE UPDATE ON public.programs FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
