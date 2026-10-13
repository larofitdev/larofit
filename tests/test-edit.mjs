// "Edit the first set" and friends, driven through the real voice-handling code
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('function voiceLogSet(reps, saidWeight) {'), b = src.indexOf('function prefillWeight(');
if (a < 0 || b < a) throw new Error('markers');

const make = (aiReply = '{"action":"none"}') => new Function('aiReply', `
  let voicePhase = 'confirm_weight', voicePending = { exIdx: 0, setIdx: 0, sugWeight: 25, bw: false };
  let voiceLastLog = null, voiceFmwSkipped = false, voiceLastPrompt = '', totalPRs = 0, currentExIdx = 0, restCallback = null;
  let exNotes = {};
  let restInterval = null, isPaused = false; const pauseWorkout = () => { isPaused = true; }, resumeWorkout = () => { isPaused = false; };
  let voiceEarbudsOut = false, voiceHadEarbuds = false, voiceAutoPaused = false; const voiceHoldMic = async () => {};
  const _prCredited = new Set(), said = [], calls = [];
  const exercises = [{ id: 'e1', name: 'Prone Rows', sets: 3, reps: 10, loggedSets: [0,1,2].map(() => ({ weight: 25, reps: '', logged: false })) },
                     { id: 'e2', name: 'Chest Fly',  sets: 2, reps: 10, loggedSets: [0,1].map(() => ({ weight: 30, reps: '', logged: false })) }];
  const prefillReps = (e, i, r) => { exercises[e].loggedSets[i].reps = r; };
  const prefillWeight = (e, i, w) => { exercises[e].loggedSets[i].weight = w; };
  const voicePrompt = msg => { voiceLastPrompt = msg; said.push(msg); };
  const speakText = msg => said.push(msg);
  const logSet = (e, i) => {
    exercises[e].loggedSets[i].logged = true; restCallback = () => {};
    if (!exercises[e].loggedSets.every(s => s.logged)) voicePending = { exIdx: e, setIdx: i + 1, sugWeight: parseFloat(exercises[e].loggedSets[i + 1].weight) || 0 };
  };
  const voiceTargetFor = e => { const i = exercises[e].loggedSets.findIndex(s => !s.logged); return i < 0 ? null : { exIdx: e, setIdx: i, sugWeight: exercises[e].loggedSets[i].weight, bw: false }; };
  const store = { get: (k, d) => d }, workoutMode = 'voice';
  const isTimed = () => false, isCardio = () => false;
  const logBWSet = logSet, isStrength = () => true, isBW = () => false, updateVoiceHUD = () => {};
  const fetchSetCoaching = () => calls.push('replan');
  const voicePrefetch = () => {}, voiceNextSetPrompt = () => ({ msg: '' }), voiceUnit = () => 'pounds', voiceDbg = () => {};
  const skipRest = () => calls.push('skipRest'), stopRest = () => calls.push('stopRest'), dismissFMW = () => {}, getFMWStartWeight = () => 20;
  const getFMW = () => ({ active: false, sets: [] }), getLastSession = () => null;
  const goToEx = i => { currentExIdx = i; calls.push('goToEx ' + i); };
  const renderSets = () => {}, renderDots = () => {}, updateOverallProgress = () => {}, checkAllDone = () => {}, saveSnapshot = () => {};
  const aiCoachFetch = async () => ({ json: async () => ({ content: [{ text: aiReply }] }) });
  let voicePreAnnounced = -1;
  const nextIncompleteIdx = from => exercises.findIndex((e, i) => i !== from && !e.loggedSets.every(s => s.logged));
  ${src.slice(a, b)}
  return { hear: t => handleVoiceResult(t), interpret: t => voiceInterpret(t), sets: e => exercises[e].loggedSets.map(s => (s.logged ? 'L' : '-') + s.weight + 'x' + s.reps).join(' '),
           phase: () => voicePhase, said, calls, setPhase: p => { voicePhase = p; }, setEx: i => { currentExIdx = i; }, pending: () => voicePending, ref: voiceSetRef };
`)(aiReply);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
// A workout two sets in (10 and 10 at 25, said without a weight), resting before set 3
const twoIn = ai => { const w = make(ai); w.hear('ten'); w.setPhase('confirm_weight'); w.hear('ten'); return w; };
const last = w => w.said[w.said.length - 1];

console.log('One phrase with the numbers in it');
for (const [phrase, want] of [
  ['Edit the first set, 20 pounds',                 'L20x10 L25x10 -25x'],
  ['edit first set 20 lbs',                         'L20x10 L25x10 -25x'],
  ['Change set one to 20 pounds',                   'L20x10 L25x10 -25x'],
  ['change the first set to twenty pounds',         'L20x10 L25x10 -25x'],
  ['The first set was at 20 pounds',                'L20x10 L25x10 -25x'],
  ['first set was 10 at 20',                        'L20x10 L25x10 -25x'],
  ['set 1 was 20 for 10',                           'L20x10 L25x10 -25x'],
  ['fix set number one, twelve and a half pounds',  'L12.5x10 L25x10 -25x'],
  ['Set one should have been 20 pounds',            'L20x10 L25x10 -25x'],
  ['the weight on the first set was 20',            'L20x10 L25x10 -25x'],
  ['correct the 1st set to 8 reps',                 'L25x8 L25x10 -25x'],
  ['Edit the second set, 9 reps at 20 pounds',      'L25x10 L20x9 -25x'],
  ['change set two to 20 pounds',                   'L25x10 L20x10 -25x'],
  ['second one was 20 pounds',                      'L25x10 L20x10 -25x'],
  ['Edit set 2. 20 pounds.',                        'L25x10 L20x10 -25x'],
  ['All sets were at 20 pounds',                    'L20x10 L20x10 -20x'],
  ['both sets were 20 pounds',                      'L20x10 L20x10 -20x'],
  ['change all the sets to 20 pounds',              'L20x10 L20x10 -20x'],
  ['every set was at 20 pounds',                    'L20x10 L20x10 -20x'],
  ['all of them were 20 pounds',                    'L20x10 L20x10 -20x'],
  ['I used 20 pounds on both sets',                 'L20x10 L20x10 -20x'],
]) {
  const w = twoIn(); const understood = w.hear(phrase);
  check(phrase.padEnd(46) + ' -> ' + w.sets(0) + '   "' + last(w) + '"', understood && w.sets(0) === want, 'expected ' + want);
}

console.log('Asked first, numbers second');
{
  const w = twoIn(); w.hear('edit the first set');
  check('"edit the first set" reads it back and asks: "' + last(w) + '"', /Set 1 was 10 reps at 25 pounds/.test(last(w)) && w.sets(0) === 'L25x10 L25x10 -25x');
  w.hear('20 pounds');
  check('then "20 pounds" -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L20x10 L25x10 -25x' && /Set 1 changed to 10 reps at 20 pounds/.test(last(w)));
  check('the workout is still waiting on set 3', w.pending().setIdx === 2 && w.pending().sugWeight === 25);
}
{
  const w = twoIn(); w.hear('edit the second set'); w.hear('8 at 20');
  check('"edit the second set" then "8 at 20" -> ' + w.sets(0), w.sets(0) === 'L25x10 L20x8 -25x');
}
{
  const w = twoIn(); w.hear('edit set one'); w.hear('twenty');
  check('a bare "twenty" is asked about: "' + last(w) + '"', /weight or the reps/.test(last(w)) && w.sets(0) === 'L25x10 L25x10 -25x');
  w.hear('20 pounds');
  check('then "20 pounds" -> ' + w.sets(0), w.sets(0) === 'L20x10 L25x10 -25x');
}
{
  const w = twoIn(); w.hear('change the first set'); w.hear('never mind');
  check('"never mind" leaves it alone: "' + last(w) + '"', w.sets(0) === 'L25x10 L25x10 -25x' && /left as it was/.test(last(w)));
  w.setPhase('confirm_weight'); w.hear('ten');
  check('and the next "ten" logs set 3 as normal -> ' + w.sets(0), w.sets(0) === 'L25x10 L25x10 L25x10');
}

console.log('Things that must not be taken as an edit');
{
  const w = twoIn(); w.setPhase('confirm_weight'); w.hear('set 3, ten reps');
  check('"set 3, ten reps" logs the set being done -> ' + w.sets(0), w.sets(0) === 'L25x10 L25x10 L25x10');
}
{
  const w = twoIn(); w.hear('edit the third set');
  check('"edit the third set" before it is logged: "' + last(w) + '"', /Set 3 has not been logged yet/.test(last(w)) && w.sets(0) === 'L25x10 L25x10 -25x');
}
{
  const w = twoIn(); w.setPhase('confirm_weight'); w.hear('ten');
  check('a plain "ten" still logs -> ' + w.sets(0), w.sets(0) === 'L25x10 L25x10 L25x10');
}
{
  const w = twoIn(); w.setPhase('confirm_weight'); w.hear('10 at 20');
  check('"10 at 20" logs set 3 at 20 -> ' + w.sets(0), w.sets(0) === 'L25x10 L25x10 L20x10');
}
{
  const w = twoIn(); w.hear('edit last set');
  check('"edit last set" still takes the last set back: "' + last(w) + '"', /set 2 removed/i.test(last(w)) && w.sets(0).startsWith('L25x10 -25x'));
}
{
  const w = twoIn(); w.hear('no, that was 20 pounds');
  check('"no, that was 20 pounds" still corrects the last set -> ' + w.sets(0), w.sets(0) === 'L25x10 L20x10 -25x');
}

console.log('After the exercise is finished');
{
  const w = twoIn(); w.setPhase('confirm_weight'); w.hear('ten'); w.hear('all three sets were at 20 pounds');
  check('"all three sets were at 20 pounds" -> ' + w.sets(0) + '  (plan for next time redone: ' + w.calls.includes('replan') + ')', w.sets(0) === 'L20x10 L20x10 L20x10' && w.calls.includes('replan'));
}
{
  const w = twoIn(); w.setPhase('confirm_weight'); w.hear('ten'); w.setEx(1); w.setPhase('confirm_weight');
  w.hear('edit the first set, 20 pounds');
  check('moved on to the next exercise: the edit goes to the one just done -> ' + w.sets(0) + ' | ' + w.sets(1), w.sets(0) === 'L20x10 L25x10 L25x10' && w.sets(1) === '-30x -30x');
}

console.log('Phrases the quick rules miss, read by the coach model');
{
  const w = twoIn('{"action":"correct","weight":20,"reps":null,"set":1}');
  await w.interpret('uh my opening one I actually had 20 on the bar');
  check('model says set 1, weight 20 -> ' + w.sets(0), w.sets(0) === 'L20x10 L25x10 -25x');
}
{
  const w = twoIn('{"action":"correct","weight":20,"reps":null,"set":"all"}');
  await w.interpret('those were really done with 20 the whole way');
  check('model says all sets, weight 20 -> ' + w.sets(0), w.sets(0) === 'L20x10 L20x10 -20x');
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
