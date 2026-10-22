// A program day with more than one workout on it (a morning rehab, an evening lift): every
// page lists them separately, and Builder adds, edits, repeats and removes each on its own
import fs from 'fs';
const read = f => fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
const cutOf = src => (from, to) => { const a = src.indexOf(from), b = src.indexOf(to, a); if (a < 0 || b < 0) throw new Error('marker: ' + from); return src.slice(a, b); };
const client = cutOf(read('supabase-client.js'));
const LF = {};
new Function('LF', client("// ── A DAY'S WORKOUTS", '// ── SUPERSETS AND CIRCUITS IN A LIST'))(LF);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
const ex = (...ids) => ids.map(id => ({ id, name: id, sets: 3, reps: 10 }));
const names = list => list.map(x => x.name + (x.slot != null ? '@' + x.slot : '')).join(', ');

console.log("A day's workouts");
{
  const day = { name: 'Rehab', exercises: ex('a', 'b'), more: [{ name: 'Chest', exercises: ex('c') }] };
  check('one day, two workouts: ' + LF.dayWorkouts(day).map(x => x.workout.name + '@' + x.slot).join(', '), LF.dayWorkouts(day).map(x => x.workout.name + '@' + x.slot).join() === 'Rehab@0,Chest@1');
  check('an older am / pm day is two workouts', LF.dayWorkouts({ am: { name: 'AM', exercises: ex('a') }, pm: { name: 'PM', exercises: ex('b') } }).map(x => x.workout.name + '@' + x.slot).join() === 'AM@0,PM@1');
  check('a rest day, an empty day, nothing: none', !LF.dayWorkouts({ rest: true }).length && !LF.dayWorkouts({ name: 'x', exercises: [] }).length && !LF.dayWorkouts(null).length);
  check('an empty first workout keeps the others\' slots', LF.dayWorkouts({ name: '', exercises: [], more: [{ name: 'Chest', exercises: ex('c') }] }).map(x => x.slot).join() === '1');
}

console.log('Adding a workout to a day (never merged)');
{
  const chest = { name: 'Chest', exercises: ex('c', 'd') };
  check('an empty day: it is the day', JSON.stringify(LF.withWorkout(undefined, chest)) === JSON.stringify(chest));
  const day = { name: 'Rehab', exercises: ex('a') };
  const two = LF.withWorkout(day, chest);
  check('a day with a workout: a second one beside it', two.name === 'Rehab' && two.exercises.length === 1 && two.more.length === 1 && two.more[0].name === 'Chest' && two.more[0].exercises.length === 2);
  check('the day it was given is not changed', !day.more);
  check('the same workout again: not doubled', LF.withWorkout(two, chest).more.length === 1);
  const three = LF.withWorkout(two, { name: 'Cardio', exercises: ex('e') });
  check('a third: ' + LF.dayWorkouts(three).map(x => x.workout.name).join(', '), LF.dayWorkouts(three).map(x => x.workout.name).join() === 'Rehab,Chest,Cardio');
  const old = LF.withWorkout({ am: { name: 'AM', exercises: ex('a') }, pm: { name: 'PM', exercises: ex('b') } }, chest);
  check('onto an older am / pm day: three of their own', !old.am && LF.dayWorkouts(old).map(x => x.workout.name).join() === 'AM,PM,Chest');
}

console.log("Today's workouts, each on its own");
{
  const today = '2026-10-23';
  const programs = [
    { id: 'p1', name: 'Rotator Cuff Rehab', days: { [today]: { name: 'Rehab', exercises: ex('a'), more: [{ name: 'Chest', exercises: ex('c') }] } } },
    { id: 'p2', name: 'Dumbbell Arms', days: { [today]: { name: 'Workout', exercises: ex('d') } } },
    { id: 'p3', name: 'Old', days: { [today]: { am: { name: 'Morning', exercises: ex('e') }, pm: { name: 'Evening', exercises: ex('f') } } } },
  ];
  const list = LF.workoutsOn(programs, today);
  const got = list.map(w => w.program.id + ':' + w.name + '@' + w.slot).join(', ');
  check('every workout listed separately, with its slot: ' + got, got === 'p1:Rehab@0, p1:Chest@1, p2:Dumbbell Arms@0, p3:Morning@0, p3:Evening@1');
  check('each with only its own exercises', list[0].exercises.length === 1 && list[1].exercises[0].id === 'c');
}

// ── Builder ──
const builder = cutOf(read('builder.html'));
const makeBuilder = days => new Function('days', `
  const program = { name: 'Mine', weeks: 2, startDate: '2026-11-02', days };
  const els = {}, toasts = [];
  const document = { createElement: () => ({ setAttribute() {} }), getElementById: id => els[id] = els[id] || { style: {}, value: '', textContent: '', classList: { add() {}, remove() {} }, setAttribute() {}, appendChild() {}, set innerHTML(v) {} } };
  const libRecordType = () => null, flushSetupToProgram = () => {}, renderCalendar = () => {}, showToast = m => toasts.push(m);
  const localDateStr = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  ${builder("// ── A DAY'S WORKOUTS", 'function loadProgramIntoSetup() {')}
  ${builder('const WEEKDAYS =', '// ══════════════════════════════════════════════════════════════════════\n// PASTE')}
  return { program, dayList, setDayList, migrateLegacyDays, openRepeat, applyRepeat, setRepeatReplace, repeatOthers, pick: d => { repeatPicked = d; }, toasts };`)(days);

console.log('Builder: older am / pm days');
{
  const b = makeBuilder({ '2026-11-02': { am: { name: 'Rehab', exercises: ex('a') }, pm: { name: 'Chest', exercises: ex('c') } }, '2026-11-03': { am: { name: '', exercises: [] } } });
  b.migrateLegacyDays();
  const d = b.program.days['2026-11-02'];
  check('become two workouts of their own (not merged)', d.name === 'Rehab' && d.exercises.length === 1 && d.more.length === 1 && d.more[0].name === 'Chest' && !d.am);
  check('an empty one is dropped', !b.program.days['2026-11-03']);
}

console.log('Builder: removing one workout of a day');
{
  const b = makeBuilder({ '2026-11-02': { name: 'Rehab', exercises: ex('a'), more: [{ name: 'Chest', exercises: ex('c') }] } });
  b.setDayList('2026-11-02', b.dayList('2026-11-02').filter((w, i) => i !== 0));
  const d = b.program.days['2026-11-02'];
  check('the first removed: the second becomes the day', d.name === 'Chest' && !d.more);
  b.setDayList('2026-11-02', []);
  check('the last removed: the day is empty', !b.program.days['2026-11-02']);
}

console.log('Builder: repeating one workout of a day');
{
  // Mon 2 Nov: Rehab + Chest. Wed 4 Nov: Legs. Mon 9 Nov: Rehab (an older copy)
  const b = makeBuilder({
    '2026-11-02': { name: 'Rehab', exercises: ex('a', 'b'), more: [{ name: 'Chest', exercises: ex('c') }] },
    '2026-11-04': { name: 'Legs', exercises: ex('l') },
    '2026-11-09': { name: 'Rehab', exercises: ex('a') },
  });
  b.openRepeat('2026-11-02', 1);   // Chest
  b.pick(['Mon', 'Wed']);
  check('another workout on some of those days: asked (' + b.repeatOthers() + ')', b.repeatOthers() === 2);
  b.applyRepeat();
  const D = b.program.days, w = k => b.dayList(k).map(x => x.name + ':' + x.exercises.length).join(' + ');
  check('kept, Chest added beside them: 4 Nov ' + w('2026-11-04') + ', 9 Nov ' + w('2026-11-09'), w('2026-11-04') === 'Legs:1 + Chest:1' && w('2026-11-09') === 'Rehab:1 + Chest:1');
  check('an empty day gets Chest alone: 11 Nov ' + w('2026-11-11'), w('2026-11-11') === 'Chest:1');
  check('the day it came from unchanged: ' + w('2026-11-02'), w('2026-11-02') === 'Rehab:2 + Chest:1');

  b.openRepeat('2026-11-02', 0);   // Rehab: the 9 Nov copy is the same workout, updated
  b.pick(['Mon']);
  b.applyRepeat();
  check('the same workout on a day is updated, not doubled: 9 Nov ' + w('2026-11-09'), w('2026-11-09') === 'Rehab:2 + Chest:1');

  b.openRepeat('2026-11-02', 0);
  b.pick(['Wed']);
  b.setRepeatReplace(true);
  b.applyRepeat();
  check('"Replace it": 4 Nov is just Rehab now: ' + w('2026-11-04'), w('2026-11-04') === 'Rehab:2');
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
