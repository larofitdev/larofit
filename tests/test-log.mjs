// Phrases taken from the real workout log of 2026-10-12 (build 80), through the real voice-handling code
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('function voiceLogSet(reps, saidWeight) {'), b = src.indexOf('function prefillWeight(');
if (a < 0 || b < a) throw new Error('markers');
const LIB = new Function(fs.readFileSync('larofit-exercises.js', 'utf8') + '; return LAROFIT_EXERCISES;')();

const make = (planned, phase = 'confirm_weight', aiReply = '{"ids":[]}') => new Function('LAROFIT_EXERCISES', 'aiReply', 'planned', 'startPhase', `
  let workoutMode = 'voice', voicePhase = startPhase, voiceLastLog = null, voiceLastPrompt = '', totalPRs = 0, currentExIdx = 0, restCallback = null, voicePreAnnounced = -1;
  let exNotes = { 1: 'note on the second' };
  let restInterval = null, isPaused = false; const pauseWorkout = () => { isPaused = true; }, resumeWorkout = () => { isPaused = false; };
  let voiceEarbudsOut = false, voiceHadEarbuds = false, voiceAutoPaused = false; const voiceHoldMic = async () => {};
  const startListening = () => {};
  const _prCredited = new Set(), said = [], calls = [], saved = [];
  let voiceSpeakChain = Promise.resolve();
  const byName = n => LAROFIT_EXERCISES.find(e => e.name === n);
  let exercises = planned.map(n => { const e = byName(n); return { id: e.id, name: e.name, sets: 3, reps: 10, restSec: 60, type: 'strength', loggedSets: [0,1,2].map(() => ({ weight: 25, reps: '', logged: false })) }; });
  let voicePending = { exIdx: 0, setIdx: 0, sugWeight: 25, bw: false };
  const store = { get: (k, d) => d };
  const getExerciseHistory = () => [];
  const document = { getElementById: () => ({ style: {}, classList: { contains: () => false } }) };
  const LF = { db: { saveCustomExercise: async e => { saved.push(e); return {}; }, saveProgram: async () => ({}) } };
  const prefillReps = (e, i, r) => { exercises[e].loggedSets[i].reps = r; };
  const prefillWeight = (e, i, w) => { exercises[e].loggedSets[i].weight = w; };
  const speakText = msg => said.push(msg);
  const voicePrompt = msg => { voiceLastPrompt = msg; if (voiceSayFirst) { said.push(voiceSayFirst); voiceSayFirst = ''; } said.push(msg); };
  const logSet = (e, i) => { exercises[e].loggedSets[i].logged = true; if (!exercises[e].loggedSets.every(s => s.logged)) voicePending = { exIdx: e, setIdx: i + 1, sugWeight: 25 }; };
  const logBWSet = logSet, isStrength = () => true, isBW = () => false, isTimed = () => false, isCardio = () => false, updateVoiceHUD = () => {}, fetchSetCoaching = () => {};
  const voiceTargetFor = e => { const i = exercises[e].loggedSets.findIndex(s => !s.logged); return i < 0 ? null : { exIdx: e, setIdx: i, sugWeight: 25, bw: false }; };
  const voicePrefetch = () => {}, voiceNextSetPrompt = () => ({ msg: '' }), voiceUnit = () => 'pounds', voiceDbg = () => {};
  const skipRest = () => calls.push('skipRest'), stopRest = () => {}, getLastSession = () => null, localDateStr = () => '2026-10-12';
  const exTypeOf = () => 'strength', lookupMediaUrl = () => null, coachPlanFor = () => null;
  const buildLoggedSets = p => Array.from({ length: p.sets }, () => ({ weight: '', reps: '', logged: false }));
  const goToEx = i => { currentExIdx = i; voicePhase = 'confirm_weight'; voicePending = voiceTargetFor(i) || voicePending; voicePrompt('[announce ' + exercises[i].name + ']'); };
  const renderSets = () => {}, renderDots = () => {}, updateOverallProgress = () => {}, checkAllDone = () => {}, saveSnapshot = () => {};
  const finishWorkout = () => calls.push('finishWorkout');
  const aiCoachFetch = async () => ({ json: async () => ({ content: [{ text: aiReply }] }) });
  const nextIncompleteIdx = from => { const n = exercises.length; for (let k = 1; k <= n; k++) { const i = (from + k) % n; if (i !== from && !exercises[i].loggedSets.every(s => s.logged)) return i; } return -1; };
  ${src.slice(a, b)}
  return { hear: t => handleVoiceResult(t), interpret: t => voiceInterpret(t), said, calls, names: () => exercises.map(e => e.name), current: () => exercises[currentExIdx] && exercises[currentExIdx].name,
           setPhase: p => { voicePhase = p; }, paused: () => voicePaused, clockStopped: () => isPaused, rest: cb => { restInterval = 1; restCallback = cb; }, tapBar: () => { if (voicePaused) voiceResume(); }, sets: e => exercises[e].loggedSets.map(s => s.logged ? 'L' : '-').join(''),
           phase: () => voicePhase, notes: () => exNotes, byName, settle: () => new Promise(r => setTimeout(r, 30)), offered: () => voiceSwap && voiceSwap.cands[voiceSwap.pick] && voiceSwap.cands[voiceSwap.pick].name };
`)(LIB, aiReply, planned, phase);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
const last = w => w.said[w.said.length - 1];
const PLAN = ['Dumbbell Incline Bench Press', 'Dumbbell Chest Fly', 'Dumbbell Pullover'];

console.log('Skipping (the log had "Skip this exercise" start a replacement instead)');
for (const phrase of ['Skip this exercise.', 'Skip.', 'skip it', 'Next exercise', 'move on', "I'll come back to this", 'Complete this exercise.', "I'm done with this exercise", 'pass on this one']) {
  const w = make(PLAN); const understood = w.hear(phrase); await w.settle();
  check(('"' + phrase + '"').padEnd(34) + ' -> on ' + w.current() + ', ' + w.names().length + ' exercises', understood && w.current() === 'Dumbbell Chest Fly' && w.names().length === 3 && w.offered() == null, 'said: ' + last(w));
}
{
  const w = make(PLAN, 'resting'); w.hear('skip');
  check('during a rest, a bare "skip" still just ends the rest', w.calls.includes('skipRest') && w.current() === 'Dumbbell Incline Bench Press');
  const w2 = make(PLAN, 'resting'); w2.hear('skip this exercise');
  check('during a rest, "skip this exercise" moves on -> ' + w2.current(), w2.current() === 'Dumbbell Chest Fly');
  const w3 = make(['Dumbbell Pullover']); w3.hear('skip this exercise');
  check('nothing to skip to: "' + last(w3) + '"', /nothing else to move on to/.test(last(w3)));
}

console.log('Removing (the log had "remove this exercise" heard as "Renew this exercise")');
for (const phrase of ['Remove this exercise', 'Delete this exercise.', 'drop this exercise', 'take this one out', 'get rid of this exercise']) {
  const w = make(PLAN); const understood = w.hear(phrase); await w.settle();
  check(('"' + phrase + '"').padEnd(34) + ' -> ' + w.names().join(' | ') + '   "' + w.said.slice(-2).join('" "') + '"', understood && w.names().length === 2 && w.current() === 'Dumbbell Chest Fly' && /Removed Dumbbell Incline Bench Press/.test(w.said.join(' ')));
}
{
  const w = make(PLAN); w.hear('remove this exercise');
  check('notes follow their exercises: ' + JSON.stringify(w.notes()), w.notes()[0] === 'note on the second' && w.notes()[1] === undefined);
  const w2 = make(PLAN); w2.hear('ten'); w2.hear('remove this exercise');
  check('with a set logged it asks first: "' + last(w2) + '"', w2.names().length === 3 && /^Remove Dumbbell Incline Bench Press and the set you logged\? Say yes or no\.$/.test(last(w2)));
  w2.hear('no');
  check('"no" keeps it: "' + last(w2) + '"', w2.names().length === 3 && last(w2) === 'Okay, it stays.');
  w2.hear('remove this exercise'); w2.hear('yes');
  check('"yes" removes it, logged set and all: ' + w2.names().join(' | ') + '   "' + w2.said.slice(-2).join('" "') + '"', w2.names().length === 2 && !w2.names().includes('Dumbbell Incline Bench Press') && /Removed Dumbbell Incline Bench Press/.test(w2.said.slice(-3).join(' ')));
  const w3 = make(['Dumbbell Pullover']); w3.hear('remove this exercise');
  check('removing the only one asks what to do: "' + last(w3) + '"', w3.names().length === 0 && /What exercise are you doing/.test(last(w3)) && w3.phase() === 'pick_exercise');
  const w4 = make(PLAN, 'confirm_weight', '{"action":"remove","weight":null,"reps":null}'); await w4.interpret('Renew this exercise.');
  check('"Renew this exercise" (as it was heard) read by the coach model as remove -> ' + w4.names().length + ' left', w4.names().length === 2);
  const w5 = make(PLAN, 'confirm_weight', '{"action":"skip","weight":null,"reps":null}'); await w5.interpret('leave that for later');
  check('the coach model can skip too -> on ' + w5.current(), w5.current() === 'Dumbbell Chest Fly' && w5.names().length === 3);
}

console.log('Replacing');
{
  const w = make(PLAN); w.hear('Give me a different exercise.'); await w.settle();
  const first = w.offered();
  check('"Give me a different exercise." offers ' + first, !!first);
  w.hear('Another, nothing incline.'); await w.settle();
  check('"Another, nothing incline." offers ' + w.offered(), !!w.offered() && !/incline/i.test(w.offered()), 'said: ' + last(w));
  w.hear('another'); await w.settle();
  check('and the next one after that: ' + w.offered(), !!w.offered() && !/incline/i.test(w.offered()));
}
{
  const w = make(PLAN); w.hear('something else, not incline and not a machine'); await w.settle();
  check('"something else … not a machine" offers ' + w.offered(), !!w.offered() && !/machine/i.test(w.offered()));
}
{
  const press = LIB.find(e => e.name === 'Machine Chest Press');
  const w = make(PLAN, 'confirm_weight', '{"ids":["' + press.id + '"]}'); w.hear('Replace those fishing chest press.'); await w.settle();
  check('"Replace those fishing chest press." (as it was heard) offers ' + w.offered(), w.offered() === 'Machine Chest Press', 'said: ' + last(w));
}
{
  const w = make(PLAN); w.hear('And place this exercise.'); await w.settle();
  check('"And place this exercise." (as it was heard) starts a replacement: ' + w.offered(), !!w.offered());
  w.hear('no thanks'); await w.settle();
  check('"no thanks" keeps the original: "' + last(w) + '"', w.offered() == null && /keeping Dumbbell Incline Bench Press/.test(last(w)));
}
{
  const w = make(PLAN); w.hear('Replace with machine chest press.'); await w.settle();
  check('"Replace with machine chest press." offers ' + w.offered(), w.offered() === 'Machine Chest Press');
}

console.log('Other people talking (the log had a bystander\'s "Are the five." logged as 5 reps)');
{
  const w = make(PLAN, 'confirm_weight', '{"action":"log","weight":null,"reps":5}'); await w.interpret('Are the five.');
  check('a far-off number from a vague phrase is asked about, not logged: "' + last(w) + '"', /I heard 5\. If that is your reps, say 5 reps/.test(last(w)) && !w.said.some(x => /reps logged/.test(x)));
  const w2 = make(PLAN, 'confirm_weight', '{"action":"log","weight":null,"reps":9}'); await w2.interpret('I got nine that time');
  check('a number near the plan from a natural phrase still logs: "' + last(w2) + '"', /9 reps logged/.test(w2.said.join(' ')));
  const w3 = make(PLAN, 'confirm_weight', '{"action":"none","weight":null,"reps":null}');
  await w3.interpret('How you doing, bro?'); await w3.interpret('That is cool how you do that');
  const w3b = w3.said.length; await w3.interpret('remove this one would you');
  check('after two phrases in a row that were not for the app, the coach model is left alone for a while', w3.names().length === 3 && w3.said.length === w3b);
}

console.log('Pausing: phrases that pause');
for (const phrase of ['Pause.', 'pause workout', 'Pause the workout', 'Hold on.', 'hang on', 'Hang on a second', 'Give me a second', 'give me a minute', 'Just a minute', 'wait', 'Wait a second.', 'Be right back', 'Time out', 'stop listening', "I'm taking a break", 'Coach, pause']) {
  const w = make(PLAN); const understood = w.hear(phrase);
  check(('"' + phrase + '"').padEnd(26) + ' -> "' + last(w) + '"', understood && w.paused() && w.clockStopped() && /Paused\. Say resume/.test(last(w)));
}
console.log('Pausing: while paused, nothing is acted on');
{
  const w = make(PLAN); w.hear('pause'); const n = w.said.length;
  for (const phrase of ['ten', '12 reps', '10 at 20', 'skip this exercise', 'remove this exercise', 'finish workout', 'replace this with push ups', 'how you doing bro', 'that is cool how you do that by the way', "I'm doing leg press", 'yes', 'edit the first set']) w.hear(phrase);
  await w.settle();
  check('sets, skips, removals, replacements and finishing are all ignored', w.paused() && w.sets(0) === '---' && w.names().length === 3 && w.current() === 'Dumbbell Incline Bench Press' && !w.calls.includes('finishWorkout') && w.said.length === n && w.offered() == null);
}
console.log('Pausing: phrases that resume');
for (const phrase of ['Resume.', 'resume workout', 'Continue', "I'm back", "Okay, I'm back", "Let's go", 'keep going', 'carry on', 'unpause', 'back to it', 'Ready.', 'go']) {
  const w = make(PLAN); w.hear('pause'); const understood = w.hear(phrase);
  check(('"' + phrase + '"').padEnd(26) + ' -> "' + last(w) + '"', understood && !w.paused() && !w.clockStopped() && /^Resuming\./.test(last(w)));
}
{
  const w = make(PLAN); w.hear('pause'); w.hear("so anyway let's go and get some lunch after this");
  check('a long sentence that happens to contain "let\'s go" does not resume', w.paused());
  w.tapBar();
  check('tapping the voice bar resumes', !w.paused() && /^Resuming\./.test(last(w)));
  w.hear('ten');
  check('and the next "ten" logs a set as normal: ' + w.sets(0), w.sets(0) === 'L--');
}
{
  const w = make(PLAN, 'resting'); let ran = 0; w.rest(() => { ran++; }); w.hear('hold on');
  check('pausing during a rest ends the rest quietly', w.paused() && ran === 0);
  w.hear('resume');
  check('and resuming goes on to what the rest was leading to (the next set or exercise)', !w.paused() && ran === 1);
}

console.log('From the workout of 2026-10-13 evening (build 90)');
// A set logged, then the rest ends (the stand-in workout doesn't run a rest timer)
const did = (w, phrase = 'ten') => { w.hear(phrase); w.setPhase('confirm_weight'); };
{
  // The rest after the last set of the first exercise: the coach has announced the second
  const finished = () => { const w = make(PLAN); did(w); did(w); w.hear('ten'); return w; };
  const w = finished();
  check('setup: first exercise done, resting', w.sets(0) === 'LLL' && w.phase() === 'resting');
  w.hear('Replace.'); await w.settle();
  check('"Replace." in that rest is about the exercise coming up: "' + last(w) + '"', /instead of Dumbbell Chest Fly/.test(last(w)));
  const w2 = finished(); w2.hear('Skip this exercise.');
  check('"Skip this exercise." in that rest skips the one coming up -> on ' + w2.current(), w2.current() === 'Dumbbell Pullover');
  const w3 = finished(); w3.hear('Delete this exercise.');
  check('"Delete this exercise." in that rest removes the one coming up -> ' + w3.names().join(' | '), w3.names().join('|') === 'Dumbbell Incline Bench Press|Dumbbell Pullover');
  const w4 = make(PLAN); did(w4); w4.hear('Edit first set, 20 pounds');
  check('during a set, edits still go to the exercise on screen: ' + w4.sets(0), w4.sets(0) === 'L--');
}
{
  const w = make(PLAN); did(w); did(w);
  w.hear('Edit for set.');
  check('"Edit for set." (a misheard "edit first set") asks which set: "' + last(w) + '"', /Which set?/.test(last(w)) && w.sets(0) === 'LL-');
  w.hear('first set');
  check('"first set" then starts editing it: "' + last(w) + '"', /Set 1 was 10 reps/.test(last(w)));
  const w2 = make(PLAN); did(w2); w2.hear('edit last set');
  check('"edit last set" still takes back the last set', /set 1 removed/i.test(last(w2)));
  const w3 = make(PLAN); did(w3); w3.hear('no, that was wrong');
  check('"no, that was wrong" still takes back the last set', w3.sets(0) === '---');
}
{
  const w = make(PLAN); did(w); w.hear('Log, set three.');
  check('"Log, set three." is not 3 reps: ' + w.sets(0) + '   "' + (last(w) || '') + '"', w.sets(0) === 'L--' && !/I heard 3/.test(last(w) || ''));
  const w2 = make(PLAN); w2.hear('Start set three.');
  check('"Start set three." is not 3 reps: ' + w2.sets(0), w2.sets(0) === '---');
}
for (const [phrase, want] of [['Tens.', 'L--'], ['10s.', 'L--'], ['twelves', 'L--']]) {
  const w = make(PLAN); w.hear(phrase);
  check(('"' + phrase + '"').padEnd(12) + ' logs a set: ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === want);
}

console.log('Stopping');
{
  const w = make(PLAN); w.hear('Stop.');
  check('a bare "Stop." asks before finishing: "' + last(w) + '"', /^End the workout now/.test(last(w)) && !w.calls.includes('finishWorkout'));
}

console.log('Still fine');
for (const [phrase, want] of [['Twelve.', 'L'], ['12.', 'L'], ['Two.', '-'], ['Seven.', 'L'], ['4 reps', 'L'], ['Ugh.', '-'], ['Push.', '-'], ['Welcome.', '-'], ['Flow.', '-'], ['Bueno.', '-'], ['Squat.', '-'], ['Focus.', '-'], ['Starting.', '-']]) {
  const w = make(PLAN); w.hear(phrase); await w.settle();
  check(('"' + phrase + '"').padEnd(14) + (want === 'L' ? ' logs a set' : ' changes nothing'), (w.said.some(s => /reps logged/.test(s)) ? 'L' : '-') === want && w.names().length === 3 && w.current() === 'Dumbbell Incline Bench Press' && w.offered() == null, 'said: ' + w.said.join(' | '));
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
