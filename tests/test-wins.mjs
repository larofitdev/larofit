// The end-of-workout wins: counted by the app, and what the summary is told
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const cut = (from, to) => { const a = src.indexOf(from), b = src.indexOf(to, a); if (a < 0 || b < 0) throw new Error('marker: ' + from); return src.slice(a, b); };
const code = cut('// ── WHAT WENT WELL', '// ── FORMAT HELPERS');

const L = (w, r) => ({ weight: w, reps: r, logged: true }), open = { weight: 20, reps: '', logged: false };
const make = (exercises, credited = [], first = []) => new Function('exercises', 'credited', 'first', `
  const _prCredited = new Set(credited), _prFirst = new Set(first), todayKey = '2026-10-22';
  const weightUnit = () => 'lbs', progPace = () => 'standard';
  const isStrength = ex => !ex.k, isTimed = ex => ex.k === 'hold', isCardio = ex => ex.k === 'cardio';
  const escHtml = x => String(x), store = { set() {} };
  let said = null, shown = '';
  const document = { getElementById: id => id === 'completion-wins' ? { set innerHTML(v) { shown = v; } } : { style: {}, set textContent(v) {} } };
  const aiCoachFetch = async body => { said = body.messages[0].content; return { json: async () => ({ content: [{ text: 'ok' }] }) }; };
  ${code}
  return { wins: (name, vol, hist) => workoutWins(name, vol, hist), lines: w => winsLines(w), render: w => { renderWins(w); return shown; },
           prompt: async w => { await fetchAIAnalysis(50, 4000, 1, exercises, w); return said; } };`)(exercises, credited, first);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };

const exercises = [
  { id: 'a', name: 'Dumbbell Bench Press', reps: 10, loggedSets: [L(45, 12), L(45, 12), L(45, 12)], coachNext: { stage: 'up', nextWeight: 50, nextReps: 10 } },
  { id: 'b', name: 'Dumbbell Chest Fly', reps: 10, loggedSets: [L(25, 10), L(25, 10), L(25, 10)], coachNext: { stage: 'stretch', nextWeight: 25, nextReps: 12 } },
  { id: 'c', name: 'Machine Pec Fly', reps: 10, targetReps: 15, loggedSets: [L(90, 15), L(90, 15), L(90, 15)], coachNext: { stage: 'confirm', nextWeight: 90, nextReps: 15 } },
  { id: 'd', name: 'Dumbbell Pullover', reps: 12, loggedSets: [L(40, 12), L(40, 10), L(40, 9)], coachNext: { stage: 'same', nextWeight: 40, nextReps: 12 } },
  { id: 'e', name: 'Plank', k: 'hold', reps: 3, loggedSets: [{ holdTime: 45, logged: true }], coachNext: { stage: 'up', nextHold: 50 } },
  { id: 'f', name: 'Cable Crossover', reps: 10, loggedSets: [L(30, 10), open, open] },
];
const history = {
  '2026-10-20': { name: 'Chest Day', totalVolume: 3500 },
  '2026-10-21': { name: 'Arms', sessionList: [{ name: 'Arms', totalVolume: 2000 }] },
};
const api = make(exercises, ['a', 'b'], ['b']);
const w = api.wins('Chest Day', 3800, history);

console.log('Counted by the app');
check('PRs: records beaten, not a first time: ' + JSON.stringify(w.prs), JSON.stringify(w.prs) === '["Dumbbell Bench Press"]');
check('targets hit on finished weight exercises: ' + w.hit + ' of ' + w.of, w.hit === 3 && w.of === 4);
check('weight up: ' + JSON.stringify(w.weightUp), JSON.stringify(w.weightUp) === '["Dumbbell Bench Press to 50 lbs"]');
check('more reps: ' + JSON.stringify(w.repsUp), JSON.stringify(w.repsUp) === '["Dumbbell Chest Fly to 12 reps"]');
check('one more session away: ' + JSON.stringify(w.oneMore), JSON.stringify(w.oneMore) === '["Machine Pec Fly"]');
check('longer hold: ' + JSON.stringify(w.holdUp), JSON.stringify(w.holdUp) === '["Plank to 50 seconds"]');
check('more lifted than the last "Chest Day": ' + w.moreVolume, w.moreVolume === 300);
check('exercises done: ' + w.done + ' of ' + w.total, w.done === 5 && w.total === 6);
check('less than last time is never mentioned', api.wins('Chest Day', 3000, history).moreVolume === 0);

console.log('Shown and said');
const lines = api.lines(w).map(([, t]) => t);
lines.forEach(t => console.log('     ' + t));
check('the list starts with the PR and ends with what was done', /^Personal record: Dumbbell Bench Press/.test(lines[0]) && lines[lines.length - 1] === '5 of 6 exercises done');
check('shown on the completion screen', /ti-trophy/.test(api.render(w)) && /5 of 6 exercises done/.test(api.render(w)));
const p = await api.prompt(w);
check('the summary is given the list', p.includes('- Personal record: Dumbbell Bench Press') && p.includes('- Weight goes up next time: Dumbbell Bench Press to 50 lbs'));
check('...told to lead with it and be motivating', /Lead with what went well/.test(p) && /motivating/.test(p));
check('...and still told not to invent targets', /Never suggest different weights, reps, sets, rep ranges or rest/.test(p));
const quiet = make([{ id: 'x', name: 'Row', reps: 10, loggedSets: [L(50, 8), L(50, 8), L(50, 8)], coachNext: { stage: 'same', nextWeight: 50 } }]).wins('Back', 1200, {});
check('a hard day still gets something good: ' + JSON.stringify(make([]).lines(quiet).map(([, t]) => t)), make([]).lines(quiet).map(([, t]) => t).join('|') === 'Exercise done');

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
