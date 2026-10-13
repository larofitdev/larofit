// Gives the shared files (script, style and exercise library) a new version label and
// renames the offline cache, so every phone picks up a release straight away.
//
//   node tools/bump-version.mjs
//
// Why: browsers are told to keep .js and .css files for four hours. A page asks for
// "supabase-client.js?v=97"; changing the number makes it a new address, so the old
// copy is not used. Run this whenever one of the shared files changes (it is harmless
// to run on every release).
import fs from 'fs';

const SHARED = ['supabase-client.js', 'larofit-nav.js', 'larofit.css', 'larofit-exercises.js'];

let sw = fs.readFileSync('sw.js', 'utf8');
const current = sw.match(/const CACHE_NAME = 'larofit-v(\d+)'/);
if (!current) throw new Error('could not read the version from sw.js');
const next = +current[1] + 1;

// Every reference in the pages: src="supabase-client.js?v=2" → src="supabase-client.js?v=98"
const refs = new RegExp('((?:src|href)="/?(?:' + SHARED.map(f => f.replace('.', '\\.')).join('|') + '))(?:\\?v=[\\w.]+)?"', 'g');
let pages = 0;
for (const f of fs.readdirSync('.').filter(f => f.endsWith('.html'))) {
  const before = fs.readFileSync(f, 'utf8');
  const after = before.replace(refs, '$1?v=' + next + '"');
  if (after !== before) { fs.writeFileSync(f, after); pages++; }
}

// The offline cache keeps the same addresses the pages ask for
sw = sw.replace(current[0], "const CACHE_NAME = 'larofit-v" + next + "'");
for (const f of SHARED) sw = sw.replace(new RegExp("'/" + f.replace('.', '\\.') + "(?:\\?v=[\\w.]+)?'"), "'/" + f + '?v=' + next + "'");
fs.writeFileSync('sw.js', sw);

const missing = SHARED.filter(f => !sw.includes("'/" + f + '?v=' + next + "'"));
if (missing.length) throw new Error('not listed in sw.js: ' + missing.join(', '));
console.log('version ' + next + ': updated ' + pages + ' pages and sw.js');
