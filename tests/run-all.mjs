// Runs every test file against the app's own code. From the project folder:
//
//   node tests/run-all.mjs
//
// Each test pulls the real functions out of workout.html (and the exercise library)
// and drives them with phrases, so a change to the app that breaks a behaviour shows
// up here before it reaches a phone. Run this before every push.
import { spawnSync } from 'child_process';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');
const files = readdirSync(here).filter(f => /^test-.*\.mjs$/.test(f)).sort();

let failed = 0;
for (const f of files) {
  const r = spawnSync(process.execPath, [path.join(here, f), 'workout.html'], { cwd: root, encoding: 'utf8' });
  const out = (r.stdout || '') + (r.stderr || '');
  const checks = (out.match(/^ok   /gm) || []).length, fails = (out.match(/^FAIL /gm) || []).length;
  const ok = r.status === 0 && !fails && !/Error/.test(r.stderr || '');
  if (!ok) failed++;
  console.log((ok ? 'ok    ' : 'FAIL  ') + f.padEnd(26) + (checks ? checks + ' checks' : out.trim().split('\n').pop()));
  if (!ok) console.log(out.split('\n').filter(l => /^FAIL |Error/.test(l)).slice(0, 12).map(l => '        ' + l).join('\n'));
}
console.log(failed ? '\n' + failed + ' test file(s) failed' : '\nall ' + files.length + ' test files pass');
process.exit(failed ? 1 : 0);
