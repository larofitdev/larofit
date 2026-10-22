// "Give me a six-exercise chest routine": the workout the coach builds on the spot
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const cut = (from, to) => { const a = src.indexOf(from), b = src.indexOf(to, a); if (a < 0 || b < 0) throw new Error('marker: ' + from); return src.slice(a, b); };
const code = cut('// ── "GIVE ME A CHEST ROUTINE"', '// Nothing on the card to do: ask');
const LIB = new Function(fs.readFileSync('larofit-exercises.js', 'utf8') + '; return LAROFIT_EXERCISES;')();
const byName = n => { const e = LIB.find(x => x.name === n); if (!e) throw new Error('no ' + n); return e; };

// mine: the equipment ticked in Profile (null: anything)
const make = (reply, mine = ['dumbbells'], planned = []) => new Function('LIB', 'reply', 'mine', 'planned', `
  let voicePhase = 'pick_exercise', voiceSwap = null, voiceEdit = null, voiceAskName = null, restCallback = null, voiceSayFirst = '', voicePreAnnounced = -1, isFreeForm = true;
  const exercises = planned.map(e => ({ id: e.id, name: e.name, loggedSets: [{ logged: true }] }));
  const said = [], log = [], sent = [];
  let current = null;
  const normalizeSpeech = t => t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\\s+/g, ' ').trim();
  const exAllExercises = () => LIB;
  const LF = { equipment: { kindOf: e => /\\bsmith\\b/i.test(e.name) ? 'smith' : e.equipment, allows: e => !mine || mine.includes(e.equipment) } };
  const aiCoachFetch = async body => { sent.push(body); return { json: async () => ({ content: [{ text: reply }] }) }; };
  const voicePrompt = m => said.push(m), voiceDbg = m => log.push(m), stopRest = () => {}, saveSnapshot = () => {};
  const goToEx = i => { current = i; said.push((voiceSayFirst ? voiceSayFirst + ' ' : '') + '[' + exercises[i].name + ']'); voiceSayFirst = ''; };
  const workoutExerciseFrom = p => ({ id: p.id, name: p.name, sets: p.group ? p.group.rounds : p.sets, group: p.group, loggedSets: [] });
  const els = {}; const document = { getElementById: id => els[id] = els[id] || { style: {}, value: '' } };
  ${code}
  return { ask: t => voiceBuildRoutine(t), exercises, said, sent, log, current: () => current, phase: () => voicePhase, lib: t => routineLibrary(t), name: () => els['free-workout-name'].value };`)(LIB, reply, mine, planned);

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

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
