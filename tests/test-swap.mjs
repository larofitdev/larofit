// Replacing an exercise by voice: phrases, name matching, and the program change
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('// ── REPLACING AN EXERCISE'), b = src.indexOf("// A phrase the quick rules didn't understand");
const n1 = src.indexOf('// ── SPEECH PARSING'), n2 = src.indexOf('function prefillWeight(');
if (a < 0 || b < a || n1 < 0 || n2 < n1) throw new Error('markers');
const LIB = new Function(fs.readFileSync('larofit-exercises.js', 'utf8') + '; return LAROFIT_EXERCISES;')();
const CUSTOM = [{ id: 'c1', name: 'Prone Rows', primaryMuscle: 'shoulders', equipment: 'dumbbells', recordType: 'weight_reps', custom: true },
                { id: 'c2', name: 'Bilateral Scaption', primaryMuscle: 'shoulders', equipment: 'dumbbells', recordType: 'weight_reps', custom: true }];

const api = new Function('LAROFIT_EXERCISES', 'store', src.slice(n1, n2) + src.slice(a, b) +
  '; return { VOICE_SWAP, voiceSwapTarget, exFindByName, exFindSimilar, exAllExercises, programSwapCount, programSwapExercise, normalizeSpeech, exWords };')
  (LIB, { get: (k, d) => k === 'custom_exercises' ? CUSTOM : d });
const all = api.exAllExercises();
const byName = n => all.find(e => e.name === n);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };

console.log('Is it a request to replace, and with what?');
for (const [phrase, want] of [
  ['Replace this exercise with machine flys', 'machine flys'],
  ['replace this with machine flies', 'machine flies'],
  ['Swap this for cable crossovers', 'cable crossovers'],
  ['swap this exercise out for the pec deck', 'the pec deck'],
  ['Switch this for incline dumbbell press', 'incline dumbbell press'],
  ['switch this to push ups', 'push ups'],
  ['Substitute this with dumbbell bench press', 'dumbbell bench press'],
  ['Change this exercise to cable chest press', 'cable chest press'],
  ['I want to replace this exercise with machine chest press', 'machine chest press'],
  ['Can I do push-ups instead?', 'push ups'],
  ["Let's do cable crossovers instead", 'cable crossovers'],
  ['Replace this exercise with another like exercise', ''],
  ['replace this exercise', ''],
  ['swap this one out', ''],
  ['Give me a different exercise', ''],
  ['I need another exercise', ''],
  ['Replace this with something similar', ''],
  ['something else please', ''],
  ["I can't do this one", ''],
  ["I don't want to do this", ''],
  ['Switch this exercise', ''],
  ['change the exercise', ''],
]) {
  const t = api.normalizeSpeech(phrase), is = api.VOICE_SWAP.test(t) && !/\bsets?\b/.test(t), got = is ? api.voiceSwapTarget(t) : null;
  check(phrase.padEnd(58) + ' -> ' + (got === null ? 'not a replace' : got === '' ? '(something similar)' : got), got === want, 'expected ' + JSON.stringify(want));
}

console.log('Things that are not a request to replace');
for (const phrase of ['switch to incline dumbbell press', 'ten', '10 at 20', 'ready', 'edit the first set', 'change set one to 20 pounds', 'no that was wrong', 'replace the first set with 20 pounds', 'repeat', 'skip', '12 reps', 'all sets were at 20 pounds', 'change that to 12']) {
  const t = api.normalizeSpeech(phrase);
  check(phrase, !(api.VOICE_SWAP.test(t) && !/\bsets?\b/.test(t)));
}

console.log('Finding the exercise that was named');
for (const [query, current, want] of [
  ['machine flys', 'Dumbbell Chest Fly', 'Machine Pec Fly'],
  ['machine flies', 'Dumbbell Chest Fly', 'Machine Pec Fly'],
  ['the pec deck', 'Dumbbell Chest Fly', 'Machine Pec Fly'],
  ['cable crossovers', 'Dumbbell Chest Fly', 'Cable Crossover'],
  ['cable flys', 'Dumbbell Chest Fly', 'Cable Pec Fly'],
  ['push ups', 'Barbell Bench Press', 'Push Up'],
  ['pushups', 'Barbell Bench Press', 'Push Up'],
  ['dumbbell bench press', 'Barbell Bench Press', 'Dumbbell Bench Press'],
  ['incline dumbbell press', 'Barbell Bench Press', 'Dumbbell Incline Bench Press'],
  ['incline press', 'Dumbbell Bench Press', 'Dumbbell Incline Bench Press'],
  ['machine chest press', 'Barbell Bench Press', 'Machine Chest Press'],
  ['chest press machine', 'Barbell Bench Press', 'Machine Chest Press'],
  ['db flys', 'Machine Pec Fly', 'Dumbbell Chest Fly'],
  ['prone rows', 'Dumbbell Lateral Raise', 'Prone Rows'],
  ['scaption', 'Dumbbell Lateral Raise', 'Bilateral Scaption'],
]) {
  const found = api.exFindByName(api.normalizeSpeech(query), byName(current), all), got = found.sure[0] ? found.sure[0].name : null;
  check(('"' + query + '" (replacing ' + current + ')').padEnd(58) + ' -> ' + got + (found.sure[1] ? '   then ' + found.sure.slice(1, 3).map(e => e.name).join(', ') : ''), got === want, 'expected ' + want);
}
{
  const found = api.exFindByName('zercher wobble', byName('Barbell Bench Press'), all);
  check('"zercher wobble" finds nothing certain (goes to the coach model)', found.sure.length === 0);
}

console.log('Something similar');
for (const current of ['Dumbbell Chest Fly', 'Barbell Bench Press', 'Dumbbell Lateral Raise', 'Barbell Curl', 'Push Up', 'Prone Rows']) {
  const cur = byName(current), got = api.exFindSimilar(cur, all, [cur.id]);
  const ok = got.length > 0 && got.every(e => e.primaryMuscle === cur.primaryMuscle && e.recordType === cur.recordType && e.id !== cur.id);
  check(current.padEnd(26) + ' -> ' + got.slice(0, 4).map(e => e.name).join(', '), ok);
}
{
  const cur = byName('Dumbbell Chest Fly'), first = api.exFindSimilar(cur, all, [cur.id])[0];
  const again = api.exFindSimilar(cur, all, [cur.id, first.id]);
  check('an exercise already in today\'s workout is not offered', !again.some(e => e.id === first.id));
}

console.log('Equipment I use (ticked on Profile)');
{
  // the shared rule from supabase-client.js, with a stand-in for what is ticked
  const client = fs.readFileSync('supabase-client.js', 'utf8').split('\r').join('');
  const ea = client.indexOf('LF.equipment = {'), eb = client.indexOf('};', client.indexOf('describe()', ea)) + 2;
  let ticked = null;
  const LFx = {}; new Function('LF', 'LS', client.slice(ea, eb))(LFx, { get: () => ({ equipment: ticked }) });
  const withEquipment = new Function('LAROFIT_EXERCISES', 'store', 'LF', src.slice(n1, n2) + src.slice(a, b) + '; return { exFindSimilar };')(LIB, { get: (k, d) => k === 'custom_exercises' ? CUSTOM : d }, LFx);
  const similar = current => { const cur = byName(current); return withEquipment.exFindSimilar(cur, all, [cur.id]); };
  const kinds = list => [...new Set(list.map(e => LFx.equipment.kindOf(e)))].sort().join(', ');

  ticked = ['dumbbells', 'machine_cable'];
  let got = similar('Barbell Bench Press');
  check('dumbbells + machines ticked: replacements for Barbell Bench Press use only those -> ' + got.slice(0, 3).map(e => e.name).join(', ') + '  [' + kinds(got) + ']', got.length > 0 && got.every(e => ['dumbbells', 'machine_cable'].includes(LFx.equipment.kindOf(e))));
  check('Smith machine lifts are left out unless Smith machine is ticked', !got.some(e => /smith/i.test(e.name)));
  got = similar('Dumbbell Lateral Raise');
  check('…and for Dumbbell Lateral Raise -> ' + got.slice(0, 3).map(e => e.name).join(', '), got.length > 0 && got.every(e => e.custom || ['dumbbells', 'machine_cable'].includes(LFx.equipment.kindOf(e))));
  check('their own exercises are always offered', similar('Dumbbell Lateral Raise').length > 0 && LFx.equipment.allows(CUSTOM[0]));

  ticked = ['dumbbells'];
  got = similar('Push Up');
  check('only dumbbells ticked, replacing a bodyweight move with no dumbbell equivalent: falls back to everything -> ' + got.slice(0, 2).map(e => e.name).join(', '), got.length > 0);

  ticked = ['dumbbells', 'machine_cable', 'smith'];
  check('with Smith machine ticked, Smith lifts are allowed', LFx.equipment.allows(byName('Smith Machine Incline Bench Press')));

  ticked = [];
  got = similar('Barbell Bench Press');
  check('nothing ticked: every kind of equipment is offered  [' + kinds(got) + ']', kinds(got).split(', ').length >= 3);
  check('describe() reads naturally', (ticked = ['dumbbells', 'machine_cable'], LFx.equipment.describe()) === 'dumbbells, machines & cables');
}

console.log('Changing the program');
{
  const old = byName('Dumbbell Chest Fly'), nw = byName('Machine Pec Fly'), other = byName('Barbell Bench Press');
  const day = (...ex) => ({ name: 'Chest', exercises: ex.map(e => ({ id: e.id, name: e.name, primaryMuscle: e.primaryMuscle, secondaryMuscles: [], recordType: e.recordType, sets: 4, weight: 30, reps: 12, restSec: 75 })) });
  const program = { id: 'p', days: {
    '2026-10-05': day(other, old), '2026-10-12': day(other, old), '2026-10-14': day(other), '2026-10-19': day(old, other), '2026-10-26': day(other, old),
    '2026-11-02': { am: day(old), pm: day(other) } } };
  check('counts the workouts from today on that include it: ' + api.programSwapCount(program, old, '2026-10-12'), api.programSwapCount(program, old, '2026-10-12') === 4);
  const changed = api.programSwapExercise(program, old, nw, '2026-10-12');
  check('changes ' + changed + ' workouts', changed === 4);
  check('a workout already gone keeps the old exercise', program.days['2026-10-05'].exercises[1].id === old.id);
  const e = program.days['2026-10-19'].exercises[0];
  check('the new one keeps the place, sets, reps and rest: ' + JSON.stringify(e), e.id === nw.id && e.name === nw.name && e.sets === 4 && e.reps === 12 && e.restSec === 75 && program.days['2026-10-19'].exercises[1].id === other.id);
  check('the planned weight is dropped (it belonged to the old exercise)', !('weight' in e));
  check('other exercises are untouched', program.days['2026-10-12'].exercises[0].id === other.id && program.days['2026-10-12'].exercises[0].weight === 30 && program.days['2026-10-14'].exercises.length === 1);
  check('morning/evening style days are covered', program.days['2026-11-02'].am.exercises[0].id === nw.id);
  check('nothing left to change afterwards', api.programSwapCount(program, old, '2026-10-12') === 0);
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
