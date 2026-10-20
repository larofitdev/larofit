// Supersets and circuits: the order a group is worked in, its rests, and timed stations
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const cut = (from, to) => {
  const a = src.indexOf(from), b = src.indexOf(to, a);
  if (a < 0 || b < 0) throw new Error('marker: ' + (a < 0 ? from : to));
  return src.slice(a, b);
};
const flow = [
  cut('// After a set is logged: the rest, then the next set;', 'function logBWSet('),
  cut('// ── SUPERSETS AND CIRCUITS', '// "Next, Dumbbell Chest Fly.'),
  cut('// Next exercise (after `from`, wrapping)', '// "Skip for now"'),
  cut('function nextExerciseLabel(', '// ── LAST SESSION LOOKUP'),
].join('\n');
const loading = [
  cut('function exTypeOf(ex) {', 'function isStrength('),
  cut('// Library is authoritative for built-in exercises', 'function buildExerciseList('),
  cut('function buildLoggedSets(ex) {', 'function startWorkout('),
].join('\n');

// A workout in progress. Each exercise: [name, sets, group]. Every step taken is recorded in log.
const make = (list, mode = 'manual') => new Function('list', 'mode', `
  let workoutMode = mode, voiceSayFirst = '';
  const exercises = list.map(([name, sets, group, restAfterSec]) => ({ name, sets, restSec: 60, restAfterSec, group,
    loggedSets: Array.from({ length: sets }, () => ({ weight: 20, reps: '', logged: false })) }));
  const log = []; let restCb = null;
  const startRest = (secs, cb, label) => { log.push('rest ' + secs + ' (' + label + ')'); restCb = cb; };
  const goToEx = i => log.push('go ' + exercises[i].name);
  const startHold = (i, setIdx) => log.push('timer ' + exercises[i].name + ' round ' + (setIdx + 1));
  const checkAllDone = () => log.push('all done');
  const renderSets = () => {}, voiceNextSet = i => log.push('set ' + exercises[i].name), getLastSession = () => null, isStrength = () => true;
  const weightUnit = () => 'lbs', voiceSpeakChain = Promise.resolve();
  const restAfter = ex => parseInt(ex.restAfterSec) >= 0 ? parseInt(ex.restAfterSec) : 120;
  ${flow}
  return {
    log, exercises, sayFirst: () => voiceSayFirst, restAfterAt,
    endRest: () => { const cb = restCb; restCb = null; if (cb) cb(); },
    // log the next open set of an exercise, as the LOG button or the voice coach does
    done: name => { const i = exercises.findIndex(e => e.name === name), s = exercises[i].loggedSets.findIndex(x => !x.logged); exercises[i].loggedSets[s].logged = true; afterSetLogged(i, s); },
  };
`)(list, mode);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
const steps = (w, from) => w.log.slice(from);
const tick = () => new Promise(r => setTimeout(r, 5));

console.log('Superset: straight from one to the other, the rest after each round');
{
  const S = { id: 'g1', rounds: 3, roundRestSec: 60 };
  const w = make([['Curl', 3, S], ['Triceps', 3, S], ['Row', 3]]);
  w.done('Curl');
  check('after curls, straight to triceps: ' + steps(w, 0).join(' | '), steps(w, 0).join('|') === 'go Triceps');
  w.done('Triceps');
  check('after triceps, the round rest: ' + steps(w, 1).join(' | '), steps(w, 1).join('|') === 'rest 60 (Round 2 of 3 · Curl)');
  w.endRest();
  check('then back to curls', w.log[w.log.length - 1] === 'go Curl');
  w.done('Curl'); w.done('Triceps'); w.endRest(); w.done('Curl');
  let n = w.log.length; w.done('Triceps');
  check('after the last round, the longer rest and the next exercise: ' + steps(w, n).join(' | '), steps(w, n).join('|') === 'rest 120 (Next: Row · 20 lbs)');
  w.endRest();
  check('then the row', w.log[w.log.length - 1] === 'go Row');
  n = w.log.length; w.done('Row');
  check('a normal exercise after it rests between its own sets: ' + steps(w, n).join(' | '), steps(w, n).join('|') === 'rest 60 (Set 2 of 3 up next)');
}

console.log('Circuit of three');
{
  const C = { id: 'g2', rounds: 2, roundRestSec: 90 };
  const w = make([['Squat', 2, C], ['Push-Up', 2, C], ['Plank', 2, C]]);
  w.done('Squat'); w.done('Push-Up'); w.done('Plank');
  check('one round in order, then the rest: ' + w.log.join(' | '), w.log.join('|') === 'go Push-Up|go Plank|rest 90 (Round 2 of 2 · Squat)');
  w.endRest(); w.done('Squat'); w.done('Push-Up');
  const n = w.log.length; w.done('Plank');
  check('the last exercise of the workout: ' + steps(w, n).join(' | '), steps(w, n).join('|') === 'rest 90 (Last exercise done!)|all done');
}

console.log('Timed circuit: the timer moves you on and starts the next station');
{
  const T = { id: 'g3', rounds: 2, roundRestSec: 90, timed: true, workSec: 40, moveSec: 20 };
  const w = make([['Squat', 2, T], ['Push-Up', 2, T], ['Lunge', 2, T]]);
  w.done('Squat');
  check('time to move: ' + w.log.join(' | '), w.log.join('|') === 'rest 20 (Next: Push-Up · 20 lbs)');
  w.endRest();
  check('the next station starts by itself: ' + w.log.slice(1).join(' | '), w.log.slice(1).join('|') === 'go Push-Up|timer Push-Up round 1');
  w.done('Push-Up'); w.endRest(); w.done('Lunge');
  const n = w.log.length; w.endRest();
  check('after the round rest, round 2 starts by itself: ' + steps(w, n).join(' | '), steps(w, n).join('|') === 'go Squat|timer Squat round 2');
}
{
  const T = { id: 'g4', rounds: 2, roundRestSec: 60, timed: true, workSec: 30, moveSec: 0 };
  const w = make([['Jumping Jack', 2, T], ['Burpee', 2, T]]);
  w.done('Jumping Jack');
  check('no time to move: straight on: ' + w.log.join(' | '), w.log.join('|') === 'go Burpee|timer Burpee round 1');
}

console.log('Voice workouts');
(async () => {
  {
    const S = { id: 'g5', rounds: 3, roundRestSec: 60 };
    const w = make([['Curl', 3, S], ['Triceps', 3, S]], 'voice');
    w.done('Curl');
    check('waits for the coach to finish speaking before moving on', w.log.length === 0);
    await tick();
    check('then moves on: ' + w.log.join(' | '), w.log.join('|') === 'go Triceps');
    w.done('Triceps'); w.endRest();
    check('a new round is said first: "' + w.sayFirst() + '"', w.sayFirst() === 'Round 2 of 3.');
  }

  console.log('Rests');
  {
    const S = { id: 'g6', rounds: 2, roundRestSec: 60 };
    const w = make([['Bench', 2, S, 180], ['Row', 2, S, 90]]);
    check('the rest after a group is its longest: ' + w.restAfterAt(0), w.restAfterAt(0) === 180);
    const own = make([['Bench', 2, { ...S, restAfterSec: 45 }], ['Row', 2, { ...S, restAfterSec: 45 }]]);
    check('unless the group has its own: ' + own.restAfterAt(1), own.restAfterAt(1) === 45);
  }
  {
    const w = make([['Curl', 3, { id: 'g7', rounds: 3, roundRestSec: 60 }], ['Row', 3]]);
    w.done('Curl');
    check('a group left with one exercise works as a normal exercise: ' + w.log.join(' | '), w.log.join('|') === 'rest 60 (Set 2 of 3 up next)');
  }

  console.log('Loading a planned group');
  {
    const load = new Function(`
      const LAROFIT_EXERCISES = [];
      const lookupExType = () => null, lookupExName = id => id, lookupMediaUrl = () => null, getLastSession = () => null;
      const holdTargetFor = () => 45, coachPlanFor = () => null;
      ${loading}
      return workoutExerciseFrom;`)();
    const rep = load({ id: 'x', name: 'Curl', recordType: 'weight_reps', sets: 3, reps: 10, weight: 20, group: { id: 'a', rounds: 4, roundRestSec: 60 } });
    check('a rep group: the rounds are the sets: ' + rep.loggedSets.length + ' sets, ' + rep.type, rep.loggedSets.length === 4 && rep.type === 'strength' && rep.group.id === 'a');
    const st = load({ id: 'y', name: 'Curl', recordType: 'weight_reps', sets: 3, reps: 10, group: { id: 'b', rounds: 2, timed: true, workSec: 40, moveSec: 20 } });
    check('a timed station is worked for the circuit\'s time: ' + st.type + ', ' + st.durationSec + 's, ' + st.loggedSets.length + ' rounds',
          st.type === 'timed_bodyweight' && st.durationSec === 40 && st.loggedSets.length === 2 && 'holdTime' in st.loggedSets[0]);
    const plain = load({ id: 'z', name: 'Row', recordType: 'weight_reps', sets: 3, reps: 10 });
    check('an exercise on its own is unchanged', plain.group === null && plain.loggedSets.length === 3 && plain.type === 'strength');
  }

  console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
  process.exit(fail ? 1 : 0);
})();
