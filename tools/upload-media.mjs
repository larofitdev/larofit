// Uploads exercise videos and posters to the Cloudflare R2 bucket behind media.larofit.com.
//
//   node tools/upload-media.mjs <videos folder> <posters folder> [list.json]
//
// Videos go up as <slug>.mp4 and posters (small JPEGs) as posters/<slug>.jpg, the addresses
// tools/import-movekit.mjs writes into the library. list.json (written by the import) limits
// the upload to the exercises the library uses. Needs `wrangler login` first.
// It can be stopped and run again: finished files are remembered in upload-done.txt
// next to the videos and skipped.
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const [videos, posters, listFile] = process.argv.slice(2);
if (!videos || !posters) { console.error('usage: node tools/upload-media.mjs <videos folder> <posters folder> [list.json]'); process.exit(1); }
const BUCKET = 'larofit-media';
const AT_ONCE = 6;

const files = new Map();   // slug -> file, wherever it sits in the unpacked folder
const walk = (dir, ext) => fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
  const p = path.join(dir, d.name);
  if (d.isDirectory()) walk(p, ext); else if (d.name.toLowerCase().endsWith(ext)) files.set(ext + ':' + d.name.slice(0, -ext.length), p);
});
walk(videos, '.mp4'); walk(posters, '.jpg');

const slugs = listFile ? JSON.parse(fs.readFileSync(listFile, 'utf8'))
                       : [...files.keys()].filter(k => k.startsWith('.mp4:')).map(k => k.slice(5));
const jobs = [];
for (const s of slugs) {
  const v = files.get('.mp4:' + s), p = files.get('.jpg:' + s);
  if (!v || !p) { console.error('missing the ' + (v ? 'poster' : 'video') + ' for ' + s); process.exit(1); }
  jobs.push({ key: s + '.mp4', file: v, type: 'video/mp4' }, { key: 'posters/' + s + '.jpg', file: p, type: 'image/jpeg' });
}

const doneFile = path.join(videos, 'upload-done.txt');
const done = new Set(fs.existsSync(doneFile) ? fs.readFileSync(doneFile, 'utf8').split('\n').filter(Boolean) : []);
const todo = jobs.filter(j => !done.has(j.key));
console.log(jobs.length + ' files, ' + (jobs.length - todo.length) + ' already up, ' + todo.length + ' to go');

const put = j => new Promise(resolve => {
  const args = ['r2', 'object', 'put', BUCKET + '/' + j.key, '--file', '"' + j.file + '"', '--content-type', j.type, '--remote'];
  const p = spawn(['wrangler', ...args].join(' '), { shell: true, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '';
  p.stdout.on('data', d => out += d); p.stderr.on('data', d => out += d);
  p.on('close', code => resolve({ ok: code === 0, out }));
});

let n = 0, failed = [];
async function worker() {
  while (todo.length) {
    const j = todo.shift();
    let r = await put(j);
    if (!r.ok) r = await put(j);   // one retry for a dropped connection
    if (r.ok) { fs.appendFileSync(doneFile, j.key + '\n'); n++; if (n % 50 === 0) console.log('  ' + n + ' uploaded'); }
    else {
      failed.push(j.key);
      if (/not logged in|authentication|auth token/i.test(r.out)) { console.error('Cloudflare is not signed in: run `wrangler login` and start this again.'); process.exit(1); }
      console.error('failed: ' + j.key + '\n' + r.out.trim().split('\n').slice(-3).join('\n'));
    }
  }
}
await Promise.all(Array.from({ length: AT_ONCE }, worker));
console.log(n + ' uploaded' + (failed.length ? ', ' + failed.length + ' failed (run again to retry): ' + failed.join(', ') : ', all done'));
process.exit(failed.length ? 1 : 0);
