import fs from 'fs';
const src = fs.readFileSync(process.argv[2], 'utf8');
const a = src.indexOf('const VOICE_ONES'), b = src.indexOf('function prefillWeight');
const { normalizeSpeech, parseSetSpeech } = new Function(src.slice(a, b) + '; return { normalizeSpeech, parseSetSpeech };')();
const cases = [
  ['Eight reps at 135', 135, 8], ['Eight reps at 1:35', 135, 8], ['Reps at 1:35', 135, null], ['Wraps at 1:35', 135, null],
  ['135 for 8', 135, 8], ['one thirty five for eight', 135, 8], ['135 4 8', 135, 8], ['135×8', 135, 8], ['135 x 8', 135, 8],
  ['eight', null, 8], ['ate', null, 8], ['8', null, 8], ['Eight.', null, 8], ['twelve reps', null, 12], ['for', null, 4], ['to', null, 2],
  ['twenty five pounds', 25, null], ['135', 135, null], ['two hundred and ten for five', 210, 5], ['one oh five for ten', 105, 10],
  ['22.5 for 12', 22.5, 12], ['ten reps with forty five', 45, 10], ['yes', null, null], ['lighter', null, null], ['say yes to start', null, null],
  ['10 £ 15 reps', 10, 15], ['10 pounds 10 reps', 10, 10], ['10 reps 10 pounds', 10, 10], ['135 pounds 8', 135, 8], ['8 reps 135', 135, 8],
  ['£20 for 12', 20, 12], ['135 pounds for 8', 135, 8], ['15 reps', null, 15], ['10 15 reps', 10, 15], ['12.5 lbs', 12.5, null],
  ['Twelve and a half for eight.', 12.5, 8], ['Twelve and a half or eight.', 12.5, 8], ['22 and a half for 10.', 22.5, 10],
  ['10 at twenty-seven and a half pounds.', 27.5, 10], ['Ten and ten.', 10, 10], ['Log ten and ten.', 10, 10], ['10 at 27.5', 27.5, 10],
  ['twelve point five for ten', 12.5, 10], ['And at 27.5.', 27.5, null], ['20 for 20.', 20, 20], ['Ten pounds, ten reps.', 10, 10],
  ['Ten reps at fifteen pounds.', 15, 10], ['7.5 for 10.', 7.5, 10], ['ten', null, 10], ['Skip.', null, null],
  ['Kill that forty.', null, null], ['Lift heavier weights.', null, null], ['Bench press.', null, null], ['Breathe.', null, null], ['OK.', null, null],
  ['I got ten', null, 10], ["That's ten, done.", null, 10], ['Ten.', null, 10], ['just eight', null, 8], ['40 pounds, 10 reps.', 40, 10], ['at 40', 40, null],
  ['two twenty five for three', 225, 3], ['one fifteen', 115, null], ['fifteen', null, 15], ['a hundred pounds', 100, null],
];
let fail = 0;
for (const [said, w, r] of cases) {
  const n = normalizeSpeech(said), p = parseSetSpeech(n);
  const ok = p.weight === w && p.reps === r;
  if (!ok) { fail++; console.log('FAIL', JSON.stringify(said), '->', JSON.stringify(n), JSON.stringify(p), 'expected', w, r); }
}
console.log((cases.length - fail) + '/' + cases.length + ' parse cases pass');
