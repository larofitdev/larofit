// "Give me a six-exercise chest routine": the workout the coach builds on the spot
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const cut = (from, to) => { const a = src.indexOf(from), b = src.indexOf(to, a); if (a < 0 || b < 0) throw new Error('marker: ' + from); return src.slice(a, b); };
const code = cut('// ── "GIVE ME A CHEST ROUTINE"', '// Nothing on the card to do: ask');
const LIB = new Function(fs.readFileSync('larofit-exercises.js', 'utf8') + '; return LAROFIT_EXERCISES;')();
const byName = n => { const e = LIB.find(x => x.name === n); if (!e) throw new Error('no ' + n); return e; };

// mine: the equipment ticked in Profile (null: anything)
const make = (reply, mine = ['dumbbells'], planned = [], programs = [], fromProgram = null) => new Function('LIB', 'reply', 'mine', 'planned', 'programs', 'fromProgram', `
  let voicePhase = 'pick_exercise', voiceSwap = null, voiceEdit = null, voiceAskName = null, restCallback = null, voiceSayFirst = '', voicePreAnnounced = -1, isFreeForm = true;
  const exercises = planned.map(e => ({ id: e.id, name: e.name, loggedSets: [{ logged: true }] }));
  const said = [], log = [], sent = [];
  let current = null;
  const normalizeSpeech = t => t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\\s+/g, ' ').trim();
  const exAllExercises = () => LIB;
  const saved = [], stored = { programs };
  const store = { get: (k, d) => k in stored ? stored[k] : d };
  const workoutProgramId = fromProgram, workoutProgram = () => programs.find(p => p.id === fromProgram) || null;
  const localDateStr = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const escHtml = x => String(x);
  const LF = { ready: () => Promise.resolve(), db: { saveProgram: async p => { saved.push(p); return {}; } }, equipment: { kindOf: e => /\\bsmith\\b/i.test(e.name) ? 'smith' : e.equipment, allows: e => !mine || mine.includes(e.equipment) } };
  const aiCoachFetch = async body => { sent.push(body); return { json: async () => ({ content: [{ text: reply }] }) }; };
  const voicePrompt = m => said.push(m), voiceDbg = m => log.push(m), stopRest = () => {}, saveSnapshot = () => {};
  const goToEx = i => { current = i; said.push((voiceSayFirst ? voiceSayFirst + ' ' : '') + '[' + exercises[i].name + ']'); voiceSayFirst = ''; };
  const workoutExerciseFrom = p => ({ id: p.id, name: p.name, sets: p.group ? p.group.rounds : p.sets, group: p.group, loggedSets: [] });
  const els = {}; const document = { getElementById: id => els[id] = els[id] || { style: {}, value: '' } };
  ${code}
  return { save: t => voiceSaveRoutine(normalizeSpeech(t)), answer: t => voiceSaveAnswer(normalizeSpeech(t)), days: t => routineDaysFrom(normalizeSpeech(t)), saveRe: t => VOICE_SAVE_ROUTINE.test(normalizeSpeech(t)), saved, setName: n => { els['free-workout-name'] = { value: n, style: {} }; }, ask: t => voiceBuildRoutine(t), exercises, said, sent, log, current: () => current, phase: () => voicePhase, lib: t => routineLibrary(t), name: () => els['free-workout-name'].value };`)(LIB, reply, mine, planned, programs, fromProgram);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };

console.log('What the coach builds from');
{
  const w = make('{}', ['dumbbells']);
  const lib = w.lib('give me a workout');
  check('only the equipment they use: ' + lib.length + ' exercises, all dumbbells', lib.length > 100 && lib.every(e => e.equipment === 'dumbbells'));
  const chest = w.lib('give me a chest routine');
  check('and the muscle asked for: ' + chest.length + ' dumbbell chest exercises', chest.length > 5 && chest.length < 40 && chest.every(e => e.equipment === 'dumbbells' && e.primaryMuscle === 'chest'));
  const arms = w.lib('give me a quick arm superset');
  check('"arms" is biceps, triceps and forearms: ' + [...new Set(arms.map(e => e.primaryMuscle))].sort().join(', '), [...new Set(arms.map(e => e.primaryMuscle))].sort().join() === 'biceps,forearms,triceps');
  const named = w.lib('give me a barbell workout');
  check('equipment the request names wins: ' + named.length + ' barbell exercises', named.length > 10 && named.every(e => e.equipment === 'barbell'));
  const any = make('{}', null).lib('give me a full body workout');
  check('no equipment ticked, full body: the whole library (' + any.length + ')', any.length === LIB.length);
}

console.log('A routine built and started');
{
  const ids = ['Dumbbell Bench Press', 'Dumbbell Incline Bench Press', 'Dumbbell Chest Fly', 'Dumbbell Pullover'].map(n => byName(n).id);
  const reply = 'Here you go! {"name":"Chest","exercises":[' + ids.map(id => '{"id":"' + id + '","sets":3,"reps":10}').join(',') +
    ',{"id":"b99999","sets":3,"reps":10}],"groups":[{"ids":["' + ids[2] + '","' + ids[3] + '"],"timed":false,"rounds":4}]}';
  const w = make(reply);
  await w.ask('Give me a four exercise chest routine with a superset at the end');
  check('said it was on it first: "' + w.said[0] + '"', w.said[0] === 'Putting that together.');
  check('only the library\'s exercises (a made-up id left out): ' + w.exercises.map(e => e.name).join(', '), w.exercises.length === 4);
  check('the last two are a superset of 4 rounds', w.exercises[2].group && w.exercises[2].group.id === w.exercises[3].group.id && w.exercises[3].sets === 4 && !w.exercises[0].group);
  check('read out, then the first exercise: "' + w.said.at(-1) + '"', w.said.at(-1) === 'Here is your Chest workout, 4 exercises: Dumbbell Bench Press, Dumbbell Incline Bench Press, Dumbbell Chest Fly, and Dumbbell Pullover. [Dumbbell Bench Press]');
  check('the workout is named after it', w.name() === 'Chest');
  check('the request carried the library and the ask', /Dumbbell Bench Press \[/.test(w.sent[0].system) && w.sent[0].messages[0].content === 'Give me a four exercise chest routine with a superset at the end');
}
{
  // After a plan: added on the end
  const ab = byName('Plank').id;
  const w = make('{"name":"Ab finisher","exercises":[{"id":"' + ab + '","sets":3,"durationSec":45}]}', ['dumbbells', 'bodyweight'], [byName('Dumbbell Bench Press')]);
  await w.ask('build me a quick ab finisher');
  check('after the plan, it goes on the end: ' + w.exercises.map(e => e.name).join(', '), w.exercises.length === 2 && w.current() === 1 && w.exercises[1].name === 'Plank');
}
{
  // A superset with one exercise left out isn't a group
  const id = byName('Dumbbell Curl').id;
  const w = make('{"exercises":[{"id":"' + id + '"}],"groups":[{"ids":["' + id + '","b99999"]}]}');
  await w.ask('give me a quick arm superset');
  check('a group of one is no group', w.exercises.length === 1 && !w.exercises[0].group);
}

console.log('When it can\'t be built');
for (const reply of ['Sorry, I am not sure.', '{"exercises":[{"id":"b99999"}]}']) {
  const w = make(reply);
  await w.ask('give me a chest routine');
  check('"' + reply.slice(0, 30) + '": says so, adds nothing: "' + w.said.at(-1) + '"', w.exercises.length === 0 && /could not put that together/.test(w.said.at(-1)) && w.phase() === 'pick_exercise');
}

console.log('"Save this as a routine"');
{
  const w = make('{}');
  for (const p of ['Save this as a routine', 'make this a routine', 'save this workout as a routine', 'add this to my program', 'save this for mondays and thursdays', 'Keep this as a template']) check('asks to save: ' + p, w.saveRe(p));
  for (const p of ['save the workout', 'finish workout', 'give me a chest routine', 'make me a chest routine', 'this routine is hard']) check('not a save: ' + p, !w.saveRe(p));
  const d = t => w.days(t).join(' ');
  check('days: "Monday and Thursday" -> ' + d('Monday and Thursday'), d('Monday and Thursday') === 'Mon Thu');
  check('days: "tuesdays and saturdays" -> ' + d('tuesdays and saturdays'), d('tuesdays and saturdays') === 'Tue Sat');
  check('days: "weekdays" -> ' + d('weekdays'), d('weekdays') === 'Mon Tue Wed Thu Fri');
  check('days: "every day" -> ' + d('every day'), d('every day') === 'Mon Tue Wed Thu Fri Sat Sun');
  check('days: "the weekend" -> ' + d('the weekend'), d('the weekend') === 'Sat Sun');
}
const weekday = key => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(key + 'T00:00:00').getDay()];
{
  // A workout built as it went, with a superset, saved as a new program
  const [curl, kick, row] = ['Dumbbell Curl', 'Dumbbell Tricep Kickback', 'Dumbbell Single Arm Row'].map(byName);
  const w = make('{}', ['dumbbells'], [curl, kick, row]);
  const G = { id: 'g1', rounds: 3, roundRestSec: 60 };
  w.exercises[0].group = { ...G }; w.exercises[1].group = { ...G };
  w.exercises.forEach(e => { e.loggedSets = [{ weight: 20, reps: 12, logged: true }, { weight: 25, reps: 10, logged: true }, { weight: 25, reps: 10, logged: true }]; });
  w.setName('Arms');
  w.save('save this as a routine');
  check('no days said: it asks "' + w.said.at(-1) + '"', /^Which days do you want it on\?/.test(w.said.at(-1)) && !w.saved.length);
  w.answer('Monday and Thursday'); await new Promise(r => setTimeout(r, 5));
  const p = w.saved[0], keys = p ? Object.keys(p.days) : [];
  check('saved: "' + w.said.at(-1) + '"', w.said.at(-1) === 'Saved Arms as a routine on Mondays and Thursdays, for 8 weeks. It is in Programs.');
  check('a new program named Arms on Mondays and Thursdays only: ' + keys.length + ' days', p && p.name === 'Arms' && keys.length >= 15 && keys.length <= 17 && keys.every(k => ['Mon', 'Thu'].includes(weekday(k))));
  const day = p.days[keys[0]].exercises;
  check('the exercises as done: ' + day.map(e => e.name + ' ' + e.sets + 'x' + e.reps + (e.weight ? ' @' + e.weight : '')).join(', '), day.length === 3 && day[0].sets === 3 && day[0].weight === 25 && day[0].recordType === 'weight_reps');
  check('the superset kept', day[0].group && day[0].group.id === day[1].group.id && !day[2].group);
  check('from tomorrow, not today', keys[0] > new Date().toISOString().slice(0, 10) || keys[0] !== new Date().toISOString().slice(0, 10));
}
{
  // "Add this to my program on Fridays": into the program today's workout came from, after what's planned
  const bench = byName('Dumbbell Bench Press'), curl = byName('Dumbbell Curl');
  const days = {};
  for (let i = 1; i <= 28; i++) { const d = new Date(); d.setDate(d.getDate() + i); const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); if (weekday(k) === 'Fri') days[k] = { name: 'Push', exercises: [{ id: bench.id, name: bench.name, sets: 3, reps: 10 }] }; }
  const prog = { id: 'p1', name: 'Rotator Cuff Rehab', savedAt: '2026-10-01', days };
  const w = make('{}', ['dumbbells'], [curl], [prog], 'p1');
  w.save('add this to my program on fridays'); await new Promise(r => setTimeout(r, 5));
  const p = w.saved[0], fri = Object.keys(p.days).filter(k => weekday(k) === 'Fri');
  check('said: "' + w.said.at(-1) + '"', /^Added to Rotator Cuff Rehab on Fridays, \d+ workouts\. It is in Programs\.$/.test(w.said.at(-1)));
  check('the same program, Fridays only, up to its end: ' + fri.length, p.id === 'p1' && fri.length === Object.keys(days).length && Object.keys(p.days).every(k => weekday(k) === 'Fri'));
  check('after what was planned on those days', fri.every(k => p.days[k].exercises.map(e => e.name).join() === 'Dumbbell Bench Press,Dumbbell Curl'));
  check('the original left alone until saved', prog.days[fri[0]].exercises.length === 1);
}
{
  const w = make('{}', ['dumbbells'], [byName('Dumbbell Curl')]);
  w.save('save this as a routine'); w.answer('never mind'); await new Promise(r => setTimeout(r, 5));
  check('"never mind" when asked the days: not saved', !w.saved.length && w.said.at(-1) === 'Okay, not saved.');
  const e = make('{}');
  e.save('save this as a routine');
  check('nothing to save: says so', /nothing in this workout to save/.test(e.said.at(-1)));
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
