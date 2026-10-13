-- Produces one text document describing the public schema: tables, constraints,
-- indexes, row-level security, policies, functions and triggers.
-- Run by tools/snapshot-schema.mjs, which saves the result as supabase/schema.sql.
with tbl as (
  select c.oid, c.relname, c.relrowsecurity
  from pg_class c join pg_namespace n on n.oid = c.relnamespace
  where n.nspname = 'public' and c.relkind = 'r'
),
cols as (
  select t.relname,
    string_agg(
      '  ' || quote_ident(a.attname) || ' ' || format_type(a.atttypid, a.atttypmod)
        || case when a.attnotnull then ' not null' else '' end
        || coalesce(' default ' || pg_get_expr(d.adbin, d.adrelid), ''),
      E',\n' order by a.attnum) as body
  from tbl t
  join pg_attribute a on a.attrelid = t.oid and a.attnum > 0 and not a.attisdropped
  left join pg_attrdef d on d.adrelid = a.attrelid and d.adnum = a.attnum
  group by t.relname
),
cons as (
  select t.relname,
    string_agg('alter table public.' || quote_ident(t.relname) || ' add constraint ' || quote_ident(k.conname) || ' ' || pg_get_constraintdef(k.oid) || ';',
               E'\n' order by k.contype desc, k.conname) as body
  from tbl t join pg_constraint k on k.conrelid = t.oid
  group by t.relname
),
idx as (
  select t.relname, string_agg(pg_get_indexdef(i.indexrelid) || ';', E'\n' order by ic.relname) as body
  from tbl t
  join pg_index i on i.indrelid = t.oid
  join pg_class ic on ic.oid = i.indexrelid
  where not exists (select 1 from pg_constraint k where k.conindid = i.indexrelid)
  group by t.relname
),
pol as (
  select p.tablename as relname,
    string_agg('create policy ' || quote_ident(p.policyname) || ' on public.' || quote_ident(p.tablename)
      || ' for ' || lower(p.cmd) || ' to ' || array_to_string(p.roles, ', ')
      || coalesce(' using (' || p.qual || ')', '')
      || coalesce(' with check (' || p.with_check || ')', '') || ';',
      E'\n' order by p.policyname) as body
  from pg_policies p where p.schemaname = 'public'
  group by p.tablename
),
tables_doc as (
  select string_agg(
    '-- ── ' || t.relname || E' ──\n'
    || 'create table public.' || quote_ident(t.relname) || E' (\n' || c.body || E'\n);\n'
    || coalesce(k.body || E'\n', '')
    || coalesce(i.body || E'\n', '')
    || case when t.relrowsecurity then 'alter table public.' || quote_ident(t.relname) || E' enable row level security;\n' else E'-- (row level security is OFF)\n' end
    || coalesce(p.body || E'\n', E'-- (no policies: only the service role can read or write)\n'),
    E'\n' order by t.relname) as body
  from tbl t
  join cols c on c.relname = t.relname
  left join cons k on k.relname = t.relname
  left join idx i on i.relname = t.relname
  left join pol p on p.relname = t.relname
),
funcs as (
  select string_agg(pg_get_functiondef(p.oid) || ';', E'\n\n' order by p.proname) as body
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
  where n.nspname = 'public' and p.prokind = 'f'
),
trigs as (
  select string_agg(pg_get_triggerdef(tg.oid) || ';', E'\n' order by tg.tgname) as body
  from pg_trigger tg
  join pg_class c on c.oid = tg.tgrelid
  join pg_namespace n on n.oid = c.relnamespace
  join pg_proc p on p.oid = tg.tgfoid
  join pg_namespace pn on pn.oid = p.pronamespace
  where not tg.tgisinternal and (n.nspname = 'public' or pn.nspname = 'public')
)
select (select body from tables_doc)
  || E'\n-- ── Functions ──\n' || coalesce((select body from funcs), '-- (none)')
  || E'\n\n-- ── Triggers ──\n' || coalesce((select body from trigs), '-- (none)') || E'\n' as doc;
