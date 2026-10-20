// Checks the progression rule in workout.html against the rule as agreed
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('const PROG_STRETCH'), b = src.indexOf('// Progression is part of every workout');
if (a < 0 || b < a) throw new Error('markers');

const S = (...pairs) => pairs.map(([weight, reps]) => ({ weight, reps }));
const three = (w, r = 10) => S([w, r], [w, r], [w, r]);
const make = (history, unit = 'lbs', pace = 'standard') => new Function('store', 'todayKey', 'aiProgressionOn', 'voiceUnit', 'weightUnit', src.slice(a, b) + '; return { coachPlanFor, progressionFor, progressionNote, holdTargetFor, holdProgression };')({ get: k => k === 'settings' ? { progression: pace } : history }, '2026-10-10', () => true, () => unit === 'kg' ? 'kilos' : 'pounds', () => unit);
const EX = { id: 'x', name: 'x', sets: 3, reps: 10 };
// sessions: newest first
const plan = (sessions, ex = EX, pace) => {
  const history = {}; sessions.forEach((sets, i) => { history['2026-10-0' + (9 - i)] = { exercises: [{ id: 'x', name: 'x', sets }] }; });
  return make(history, 'lbs', pace).coachPlanFor(ex);
};

let fail = 0;
const check = (name, sessions, want, ex, pace) => {
  const p = plan(sessions, ex, pace), got = p ? p.weight + ' x ' + p.reps + ' ' + p.stage : null;
  const ok = got === want; if (!ok) fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + got + (ok ? '' : '   expected ' + want));
};

console.log('Hit the target on every set: same weight, aim for 2 more');
check('3x10 at 10', [three(10)], '10 x 12 stretch');
check('3x10 at 135', [three(135)], '135 x 12 stretch');
check('12, 11, 10 at 20 (part way to the extra reps)', [S([20, 12], [20, 11], [20, 10])], '20 x 12 stretch');
check('3x11 at 20', [three(20, 11)], '20 x 12 stretch');

console.log('Hit target + 2 on every set: weight goes up, back to the target');
check('3x12 at 10', [three(10, 12)], '12.5 x 10 up');
check('3x12 at 22.5', [three(22.5, 12)], '25 x 10 up');
check('3x12 at 25', [three(25, 12)], '30 x 10 up');
check('3x12 at 135 (no second session needed)', [three(135, 12)], '140 x 10 up');
check('3x13 at 40', [three(40, 13)], '45 x 10 up');
check('3x12 at 30 today, 3x8 at 30 before', [three(30, 12), three(30, 8)], '35 x 10 up');

console.log('Anything less: same weight, same target');
check('10, 8, 8 at 10', [S([10, 10], [10, 8], [10, 8])], '10 x 10 same');
check('3x9 at 15', [three(15, 9)], '15 x 10 same');
check('12, 10, 9 at 20 (slipped below the target on one set)', [S([20, 12], [20, 10], [20, 9])], '20 x 10 same');
check('only two sets logged, both 12, at 10', [S([10, 12], [10, 12])], '10 x 10 same');
check('ramped 5 / 7.5 / 10, twelve reps each', [S([5, 12], [7.5, 12], [10, 12])], '10 x 10 same');
check('just moved up: 3x9 at 30 today, 3x12 at 25 before', [three(30, 9), three(25, 12)], '30 x 10 same');

console.log('Dropping back: a set more than 2 short of the target, two sessions running');
check('3x7 at 30 once', [three(30, 7)], '30 x 10 same');
check('3x7 at 30, twice running', [three(30, 7), three(30, 7)], '25 x 10 down');
check('10, 8, 7 at 30 twice running (one set short each time)', [S([30, 10], [30, 8], [30, 7]), S([30, 9], [30, 7], [30, 6])], '25 x 10 down');
check('3x8 at 30, twice running (8 is within 2)', [three(30, 8), three(30, 8)], '30 x 10 same');
check('3x7 at 30 today, 3x7 at 25 before (different weights)', [three(30, 7), three(25, 7)], '30 x 10 same');
check('3x7 at 25, twice running', [three(25, 7), three(25, 7)], '22.5 x 10 down');
check('3x6 at 12.5, twice running', [three(12.5, 6), three(12.5, 6)], '10 x 10 down');
check('3x6 at 2.5, twice running (nothing lower to go to)', [three(2.5, 6), three(2.5, 6)], '2.5 x 10 same');
check('3x7 at 30 today, 3x10 at 30 before', [three(30, 7), three(30)], '30 x 10 same');

console.log('Programs that are not 3x10');
check('4 sets planned, only 3x10 at 10', [three(10)], '10 x 10 same', { ...EX, sets: 4 });
check('4x12 planned, 4x12 at 50', [S([50, 12], [50, 12], [50, 12], [50, 12])], '50 x 14 stretch', { ...EX, sets: 4, reps: 12 });
check('4x12 planned, 4x14 at 50', [S([50, 14], [50, 14], [50, 14], [50, 14])], '55 x 12 up', { ...EX, sets: 4, reps: 12 });
check('3x5 planned, 3x5 at 185', [three(185, 5)], '185 x 7 stretch', { ...EX, reps: 5 });
check('3x5 planned, 3x7 at 185', [three(185, 7)], '190 x 5 up', { ...EX, reps: 5 });
check('3x12 planned, 3x10 at 10', [three(10)], '10 x 12 same', { ...EX, reps: 12 });
check('no history', [], null);

console.log('Workouts on the same day');
{
  const day = (...sessions) => ({ exercises: sessions.map(sets => ({ id: 'x', name: 'x', sets })) });
  const sameDay = (name, history, want) => {
    const p = make(history).coachPlanFor(EX), got = p ? p.weight + ' x ' + p.reps + ' ' + p.stage : null, ok = got === want; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + got + (ok ? '' : '   expected ' + want));
  };
  sameDay('this morning 3x12 at 12.5, yesterday 3x10 at 12.5', { '2026-10-10': day(three(12.5, 12)), '2026-10-09': day(three(12.5)) }, '15 x 10 up');
  sameDay('morning 3x10 at 25, evening 3x12 at 25', { '2026-10-10': day(three(25), three(25, 12)) }, '30 x 10 up');
  sameDay('morning 3x12 at 30, evening 3x8 at 30 (evening counts)', { '2026-10-10': day(three(30, 12), three(30, 8)) }, '30 x 10 same');
  sameDay('morning and evening both 3x7 at 30', { '2026-10-10': day(three(30, 7), three(30, 7)) }, '25 x 10 down');
}

console.log('Working in kilograms: +1 kg under 10 kg, +2.5 kg from 10 kg');
{
  const kg = (name, sessions, want) => {
    const history = {}; sessions.forEach((sets, i) => { history['2026-10-0' + (9 - i)] = { exercises: [{ id: 'x', name: 'x', sets }] }; });
    const p = make(history, 'kg').coachPlanFor(EX), got = p ? p.weight + ' x ' + p.reps + ' ' + p.stage : null, ok = got === want; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + got + (ok ? '' : '   expected ' + want));
  };
  kg('3x12 at 5 kg', [three(5, 12)], '6 x 10 up');
  kg('3x12 at 9 kg', [three(9, 12)], '10 x 10 up');
  kg('3x12 at 10 kg', [three(10, 12)], '12.5 x 10 up');
  kg('3x12 at 60 kg', [three(60, 12)], '62.5 x 10 up');
  kg('3x10 at 20 kg (aim for 2 more, as in pounds)', [three(20)], '20 x 12 stretch');
  kg('3x6 at 12.5 kg, twice running', [three(12.5, 6), three(12.5, 6)], '10 x 10 down');
  kg('3x6 at 10 kg, twice running', [three(10, 6), three(10, 6)], '9 x 10 down');
  const note = make({}, 'kg'); const said = note.progressionNote({ ...EX, targetReps: 12 }, note.progressionFor(EX, three(60, 12), null));
  const ok = said === 'Next time, go up to 62.5 kilos.'; if (!ok) fail++;
  console.log((ok ? 'ok   ' : 'FAIL ') + 'the coach says kilos'.padEnd(64) + '-> ' + JSON.stringify(said));
}

console.log('Holds: 5 seconds more when every set reaches the target');
{
  const H = (...secs) => secs.map(s => ({ holdTime: s }));
  const api = make({});
  const hold = (name, ex, sets, earlier, want) => {
    const r = api.holdProgression(ex, sets, earlier), got = r ? r.nextHold + 's ' + r.stage : null, ok = got === want; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + got + (r && r.note ? '   "' + r.note + '"' : '') + (ok ? '' : '   expected ' + want));
    return r;
  };
  const PLANK = { id: 'p', name: 'Plank', sets: 3, durationSec: 45, planHold: 45 };
  hold('45, 45, 45 with a 45s target', PLANK, H(45, 45, 45), null, '50s up');
  hold('50, 47, 45 with a 45s target', PLANK, H(50, 47, 45), null, '50s up');
  hold('45, 45, 40 (one set short)', PLANK, H(45, 45, 40), null, '45s same');
  hold('only two of three sets done', PLANK, H(45, 45), null, '45s same');
  const first = hold('45, 30, 25 (well short, first time)', PLANK, H(45, 30, 25), null, '45s same');
  hold('well short again the next session', PLANK, H(40, 30, 28), { coach: first }, '40s down');
  hold('short, but the session before was fine', PLANK, H(40, 30, 28), { coach: { struggled: false } }, '45s same');
  hold('a 10s hold cannot drop further', { ...PLANK, durationSec: 10, planHold: 10 }, H(5, 5, 5), { coach: { struggled: true } }, '10s same');

  // carried to the next workout
  const hist = coach => ({ '2026-10-09': { exercises: [{ id: 'p', name: 'Plank', sets: H(45, 45, 45), coach }] } });
  const target = (name, history, ex, want) => { const got = make(history).holdTargetFor(ex), ok = got === want; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + got + 's' + (ok ? '' : '   expected ' + want)); };
  target("never done: the program's own time", {}, { id: 'p', planHold: 45 }, 45);
  target('after a session that earned 5 more', hist({ nextHold: 50, planHold: 45, stage: 'up' }), { id: 'p', planHold: 45 }, 50);
  target("the program's time was changed since: start from that", hist({ nextHold: 50, planHold: 45 }), { id: 'p', planHold: 60 }, 60);
  target('a session saved before this rule existed', hist(null), { id: 'p', planHold: 45 }, 45);
}

console.log('What the coach says after the last set');
{
  const api = make({});
  const says = (name, ex, today, earlier, want) => {
    const got = api.progressionNote(ex, api.progressionFor(ex, today, earlier)), ok = got === want; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + JSON.stringify(got) + (ok ? '' : '   expected ' + JSON.stringify(want)));
  };
  says('3x10 at 20, was aiming for 10', EX, three(20), null, 'Next time, aim for 12 reps on every set.');
  says('12, 11, 10 at 20, was already aiming for 12', { ...EX, targetReps: 12 }, S([20, 12], [20, 11], [20, 10]), null, '');
  says('3x12 at 20', { ...EX, targetReps: 12 }, three(20, 12), null, 'Next time, go up to 22.5 pounds.');
  says('3x12 at 135', { ...EX, targetReps: 12 }, three(135, 12), null, 'Next time, go up to 140 pounds.');
  says('3x9 at 20', EX, three(20, 9), null, '');
  says('3x7 at 30, first time', EX, three(30, 7), three(30), '');
  says('3x7 at 30, second time running', EX, three(30, 7), three(30, 7), 'Next time, drop back to 25 pounds.');
}

console.log('Gradual pace: 10, then 12, then 15 two sessions running, then the weight goes up');
{
  const G = 'gradual';
  check('3x10 at 20', [three(20)], '20 x 12 stretch', EX, G);
  check('3x12 at 20: on to 15, not up', [three(20, 12)], '20 x 15 stretch', EX, G);
  check('15, 13, 12 at 20 (part way to 15)', [S([20, 15], [20, 13], [20, 12])], '20 x 15 stretch', EX, G);
  check('3x15 at 20, the first time: once more', [three(20, 15), three(20, 12)], '20 x 15 confirm', EX, G);
  check('3x15 at 20, two sessions running: up', [three(20, 15), three(20, 15)], '22.5 x 10 up', EX, G);
  check('3x15 at 30, two sessions running: up by 5', [three(30, 15), three(30, 15)], '35 x 10 up', EX, G);
  check('3x15 at 20, then 15, 14, 15: back to aiming for 15', [S([20, 15], [20, 14], [20, 15]), three(20, 15)], '20 x 15 stretch', EX, G);
  check('3x15 at 22.5 today, 3x15 at 20 before: once more', [three(22.5, 15), three(20, 15)], '22.5 x 15 confirm', EX, G);
  check('3x9 at 15', [three(15, 9)], '15 x 10 same', EX, G);
  check('3x7 at 30, two sessions running: drops back', [three(30, 7), three(30, 7)], '25 x 10 down', EX, G);
  check('a 3x8 program: 8, then 10, then 13', [three(40, 10)], '40 x 13 stretch', { ...EX, reps: 8 }, G);
  check('standard is unchanged: 3x12 at 20 goes up', [three(20, 12)], '22.5 x 10 up', EX, 'standard');

  const api = make({}, 'lbs', G);
  const says = (name, ex, today, earlier, want) => {
    const got = api.progressionNote(ex, api.progressionFor(ex, today, earlier)), ok = got === want; if (!ok) fail++;
    console.log((ok ? 'ok   ' : 'FAIL ') + name.padEnd(64) + '-> ' + JSON.stringify(got) + (ok ? '' : '   expected ' + JSON.stringify(want)));
  };
  says('3x12 at 20, was aiming for 12', { ...EX, targetReps: 12 }, three(20, 12), null, 'Next time, aim for 15 reps on every set.');
  says('3x15 at 20, the first time', { ...EX, targetReps: 15 }, three(20, 15), three(20, 12), '15 on every set. Do that once more next time and you go up to 22.5 pounds.');
  says('3x15 at 20, second time running', { ...EX, targetReps: 15 }, three(20, 15), three(20, 15), 'Next time, go up to 22.5 pounds.');
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
