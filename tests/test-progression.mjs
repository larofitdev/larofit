// Checks the progression rule in workout.html against the rule as agreed
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('const PROG_HEAVY_FROM'), b = src.indexOf('// Progression is part of every workout');
if (a < 0 || b < a) throw new Error('markers');

const S = (...pairs) => pairs.map(([weight, reps]) => ({ weight, reps }));
const three = (w, r = 10) => S([w, r], [w, r], [w, r]);
const make = history => new Function('store', 'todayKey', 'aiProgressionOn', 'voiceUnit', src.slice(a, b) + '; return { coachPlanFor, progressionFor, progressionNote };')({ get: () => history }, '2026-10-10', () => true, () => 'pounds');
const EX = { id: 'x', name: 'x', sets: 3, reps: 10 };
// sessions: newest first
const plan = (sessions, ex = EX) => {
  const history = {}; sessions.forEach((sets, i) => { history['2026-10-0' + (9 - i)] = { exercises: [{ id: 'x', name: 'x', sets }] }; });
  return make(history).coachPlanFor(ex);
};

let fail = 0;
const check = (name, sessions, want, ex) => {
  const p = plan(sessions, ex), got = p ? p.weight + ' x ' + p.reps + ' ' + p.stage : null;
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

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
