// Saves a description of the live database's structure to supabase/schema.sql, so the
// project holds a record of every table, rule and function (the early tables were made
// by hand and are not in supabase/migrations). Run it after any change to the database:
//
//   node tools/snapshot-schema.mjs
//
// Needs the Supabase CLI, linked to the project (supabase link).
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = execFileSync('supabase', ['db', 'query', '--linked', '-o', 'json', '-f', path.join(here, 'schema-snapshot.sql')],
  { encoding: 'utf8', shell: true, stdio: ['ignore', 'pipe', 'ignore'] });
const parsed = JSON.parse(out.slice(out.indexOf('{')));
const doc = (parsed.rows || parsed)[0].doc;
if (!doc || !doc.includes('create table')) throw new Error('unexpected result');

const header = `-- LaroFit database structure (schema "public"), as it is in the live project.
-- A record for reference and for rebuilding: it is written by tools/snapshot-schema.mjs
-- from the database itself. Do not edit by hand; change the database with a file in
-- supabase/migrations, then run the tool again.
--
-- Snapshot taken ${new Date().toISOString().slice(0, 10)}.

`;
fs.writeFileSync(path.join(here, '..', 'supabase', 'schema.sql'), header + doc);
console.log('wrote supabase/schema.sql: ' + (doc.match(/create table/g) || []).length + ' tables, ' +
  (doc.match(/create policy/g) || []).length + ' policies, ' + (doc.match(/CREATE OR REPLACE FUNCTION/g) || []).length + ' functions');
