// Naming exercises as you go, and finishing by voice, through the real voice-handling code
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('function voiceLogSet(reps, saidWeight) {'), b = src.indexOf('function prefillWeight(');
if (a < 0 || b < a) throw new Error('markers');
const LIB = new Function(fs.readFileSync('larofit-exercises.js', 'utf8') + '; return LAROFIT_EXERCISES;')();

// A workout: planned = exercises on the card (by name); phase = where the voice is
const make = (planned, phase, aiReply = '{"ids":[]}') => new Function('LAROFIT_EXERCISES', 'aiReply', 'planned', 'startPhase', `
  let workoutMode = 'voice', voicePhase = startPhase, voiceLastLog = null, voiceLastPrompt = '', totalPRs = 0, currentExIdx = 0, restCallback = null, voicePreAnnounced = -1;
  let exNotes = {};
  let restInterval = null, isPaused = false; const pauseWorkout = () => { isPaused = true; }, resumeWorkout = () => { isPaused = false; };
  let voiceEarbudsOut = false, voiceHadEarbuds = false, voiceAutoPaused = false; const voiceHoldMic = async () => {};
  const _prCredited = new Set(), said = [], calls = [], saved = [];
  let voiceSpeakChain = Promise.resolve();
  const byName = n => LAROFIT_EXERCISES.find(e => e.name === n);
  const exercises = planned.map(n => { const e = byName(n); return { id: e.id, name: e.name, sets: 3, reps: 10, restSec: 60, type: 'strength', loggedSets: [0,1,2].map(() => ({ weight: 25, reps: '', logged: false })) }; });
  let voicePending = { exIdx: 0, setIdx: 0, sugWeight: 25, bw: false };
  const store = { get: (k, d) => k === 'workout_history' ? { '2026-10-01': { exercises: [{ id: byName('Dumbbell Curl').id, sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }] }] } } : d };
  const getExerciseHistory = (id) => id === byName('Dumbbell Curl').id ? [{ sets: [1,2,3,4].map(() => ({ weight: 20, reps: 10 })) }] : [];
  const document = { getElementById: () => ({ style: {} }) };
  const LF = { db: { saveCustomExercise: async e => { saved.push(e); return {}; }, saveProgram: async () => ({}) } };
  const prefillReps = (e, i, r) => { exercises[e].loggedSets[i].reps = r; };
  const prefillWeight = (e, i, w) => { exercises[e].loggedSets[i].weight = w; };
  const speakText = msg => said.push(msg);
  const voicePrompt = msg => { voiceLastPrompt = msg; said.push(msg); };
  const logSet = (e, i) => { exercises[e].loggedSets[i].logged = true; if (!exercises[e].loggedSets.every(s => s.logged)) voicePending = { exIdx: e, setIdx: i + 1, sugWeight: parseFloat(exercises[e].loggedSets[i + 1].weight) || 0 }; };
  const isTimed = () => false, isCardio = () => false;
  const logBWSet = logSet, isStrength = () => true, isBW = () => false, updateVoiceHUD = () => {}, fetchSetCoaching = () => {};
  const voiceTargetFor = e => { const i = exercises[e].loggedSets.findIndex(s => !s.logged); return i < 0 ? null : { exIdx: e, setIdx: i, sugWeight: parseFloat(exercises[e].loggedSets[i].weight) || 0, bw: false }; };
  const voicePrefetch = () => {}, voiceNextSetPrompt = () => ({ msg: '' }), voiceUnit = () => 'pounds', voiceDbg = () => {};
  const skipRest = () => calls.push('skipRest'), stopRest = () => {}, getLastSession = () => null, localDateStr = () => '2026-10-12';
  const exTypeOf = () => 'strength', lookupMediaUrl = () => null, coachPlanFor = () => null;
  const buildLoggedSets = p => Array.from({ length: p.sets }, () => ({ weight: '', reps: '', logged: false }));
  const goToEx = i => { currentExIdx = i; calls.push('goToEx ' + i); voicePhase = 'confirm_weight'; voicePending = voiceTargetFor(i) || voicePending; said.push('[announce ' + exercises[i].name + ']'); };
  const renderSets = () => {}, updateOverallProgress = () => {}, checkAllDone = () => {}, saveSnapshot = () => {};
  const finishWorkout = () => calls.push('finishWorkout');
  const aiCoachFetch = async () => ({ json: async () => ({ content: [{ text: aiReply }] }) });
  const nextIncompleteIdx = from => exercises.findIndex((e, i) => i !== from && !e.loggedSets.every(s => s.logged));
  ${src.slice(a, b)}
  return { hear: t => handleVoiceResult(t), said, calls, saved, names: () => exercises.map(e => e.name + ' ' + e.sets + 'x' + e.reps + '/' + e.restSec), current: () => exercises[currentExIdx] && exercises[currentExIdx].name,
           phase: () => voicePhase, sets: e => exercises[e].loggedSets.map(s => (s.logged ? 'L' : '-') + s.weight + 'x' + s.reps).join(' '), byName, finishRe: VOICE_FINISH, norm: normalizeSpeech,
           settle: () => new Promise(r => setTimeout(r, 30)) };
`)(LIB, aiReply, planned, phase);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
const last = w => w.said[w.said.length - 1];

console.log('Nothing planned: "What exercise are you doing?"');
for (const [phrase, want] of [
  ['Leg press', 'Machine Leg Press'], ['bench press', 'Barbell Bench Press'], ["I'm doing lat pulldowns", null], ['dumbbell curls', 'Dumbbell Curl'],
  ['curls', 'Dumbbell Curl'], ["Let's start with push-ups", 'Push Up'], ['Barbell squat.', null], ['machine flys', 'Machine Pec Fly'], ['the pec deck', 'Machine Pec Fly'],
]) {
  const w = make([], 'pick_exercise'); const understood = w.hear(phrase); await w.settle();
  const got = w.current();
  check(phrase.padEnd(30) + ' -> ' + (got || last(w)), understood && (want ? got === want : !!got || /Did you say|could not find/.test(last(w) || '')), 'expected ' + want);
}
{
  const w = make([], 'pick_exercise'); w.hear('dumbbell curls');
  check('an exercise done before gets its usual number of sets: ' + w.names()[0], w.names()[0] === 'Dumbbell Curl 4x10/60');
  const w2 = make([], 'pick_exercise'); w2.hear('machine flys');
  check('a new one gets 3 sets of 10 with a minute\'s rest: ' + w2.names()[0], w2.names()[0] === 'Machine Pec Fly 3x10/60');
}

console.log('In the middle of a planned workout');
{
  const w = make(['Barbell Bench Press', 'Dumbbell Chest Fly'], 'confirm_weight');
  w.hear("I'm doing leg press");
  check('"I\'m doing leg press" adds it and goes to it: ' + w.names().length + ' exercises, on ' + w.current(), w.names().length === 3 && w.current() === 'Machine Leg Press');
}
{
  const w = make(['Barbell Bench Press', 'Dumbbell Chest Fly'], 'confirm_weight');
  w.hear('dumbbell chest fly');
  check('a bare name mid-workout is checked first: "' + last(w) + '"', /Switch to Dumbbell Chest Fly\? Say yes or no/.test(last(w)) && w.current() === 'Barbell Bench Press');
  w.hear('yes');
  check('"yes" jumps to the one already planned (nothing added): on ' + w.current(), w.names().length === 2 && w.current() === 'Dumbbell Chest Fly');
  const n = make(['Barbell Bench Press', 'Dumbbell Chest Fly'], 'confirm_weight'); n.hear('Push-up.');
  check('"Push-up." (a dropped dumbbell, as it was heard) only asks: "' + last(n) + '"', /Switch to Push Up\?/.test(last(n)) && n.names().length === 2);
  n.hear('no');
  check('"no" leaves everything as it was', n.names().length === 2 && n.current() === 'Barbell Bench Press');
  const q = make(['Barbell Bench Press', 'Dumbbell Chest Fly'], 'confirm_weight'); q.hear('Push-up.'); q.hear('twelve');
  check('ignoring the question and saying reps just logs the set: ' + q.sets(0), q.sets(0).startsWith('L25x12') && q.names().length === 2);
  const l = make(['Barbell Bench Press', 'Dumbbell Chest Fly'], 'confirm_weight'); l.hear("I'm doing dumbbell chest fly");
  check('with a lead-in ("I\'m doing…") it switches straight away: on ' + l.current(), l.current() === 'Dumbbell Chest Fly');
}
{
  const w = make(['Barbell Bench Press'], 'resting');
  w.hear('switch to cable crossovers');
  check('during a rest, "switch to cable crossovers" -> ' + w.current(), w.current() === 'Cable Crossover' && !w.calls.includes('skipRest'));
  const w2 = make(['Barbell Bench Press'], 'resting'); w2.hear('start');
  check('during a rest, "start" alone still just ends the rest', w2.calls.includes('skipRest') && w2.names().length === 1);
  const w3 = make(['Barbell Bench Press'], 'resting'); w3.hear('next');
  check('during a rest, "next" still just ends the rest', w3.calls.includes('skipRest') && w3.names().length === 1);
}
for (const phrase of ['ten', '10 at 20', 'twelve reps', 'yes', 'ready', 'press', 'that was hard', 'good set', 'one more', 'leg day', 'wait a second', 'heavy', "Let's do this.", "Let's do it again", 'do this one']) {
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear(phrase); await w.settle();
  check(('"' + phrase + '"').padEnd(20) + ' does not change the exercise', w.names().length === 1 && w.current() === 'Barbell Bench Press' && !/Did you say/.test(last(w) || ''));
}

console.log('A name that is not clear');
{
  const press = LIB.find(e => e.name === 'Machine Leg Press');
  const w = make([], 'pick_exercise', '{"ids":["' + press.id + '"]}'); w.hear('the leg sled thing'); await w.settle();
  check('asks first: "' + last(w) + '"', /Did you say Machine Leg Press/.test(last(w)) && !w.current());
  w.hear('yes');
  check('"yes" -> ' + w.current(), w.current() === 'Machine Leg Press');
}
{
  const press = LIB.find(e => e.name === 'Machine Leg Press');
  const w = make([], 'pick_exercise', '{"ids":["' + press.id + '"]}'); w.hear('the leg sled thing'); await w.settle();
  w.hear('no, goblet squat'); await w.settle();
  check('"no, goblet squat" -> ' + (w.current() || last(w)), /Goblet Squat/i.test(w.current() || ''));
}
{
  const w = make([], 'pick_exercise'); w.hear('flamingo wobble'); await w.settle();
  check('not in the library: "' + last(w) + '"', /could not find flamingo wobble.*add it/i.test(last(w)));
  w.hear('add it');
  check('"add it" makes it and starts it: ' + w.current() + ' / saved ' + (w.saved[0] && w.saved[0].name), w.current() === 'Flamingo Wobble' && w.saved.length === 1);
}
{
  const w = make([], 'pick_exercise'); w.hear('cable y raise'); await w.settle(); w.hear('add it');
  check('"cable y raise" added as ' + (w.saved[0] ? w.saved[0].primaryMuscle + ' / ' + w.saved[0].equipment : last(w)), w.saved[0] && w.saved[0].primaryMuscle === 'shoulders' && w.saved[0].equipment === 'machine_cable');
}

console.log('Finishing: phrases that ask to finish');
for (const phrase of ['Finish workout', 'finish the workout', 'End workout', 'end my workout', "I'm done", "I'm all done", "I'm finished", "That's it", "That's it for today", "That's all", 'All done', "Let's call it a day", "Let's call it", 'Wrap it up', 'Wrap up the workout', 'Stop the workout', 'End the session', 'Workout complete', "Workout's done", 'Done for today', "I'm done for the day", 'Finished for today', 'Save the workout', 'Finish', "We're done", 'Finish up', "That's enough for today", 'End it', 'Complete workout']) {
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear(phrase);
  check(phrase.padEnd(28) + ' -> "' + (last(w) || '') + '"', /^End the workout now/.test(last(w) || '') && !w.calls.includes('finishWorkout'));
}
console.log('Finishing: phrases that must not');
for (const phrase of ['ten', 'ten done', "that's ten done", 'done', 'finished', 'I got ten', '10 at 20', 'ready', 'I am done with this set', "I'm done with this exercise", 'finish the set', 'edit the first set', 'no that was wrong', 'skip', 'last set', 'one more set']) {
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear(phrase);
  check(('"' + phrase + '"').padEnd(32), !/End the workout/.test(last(w) || '') && !w.calls.includes('finishWorkout'), 'said: ' + last(w));
}
console.log('Finishing: the answer');
{
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear('ten'); w.hear("I'm done");
  check('the unfinished exercise is mentioned, and the question is about ending: "' + last(w) + '"', /^End the workout now, with 1 exercise not finished\? Say yes to end it, or no to keep going\.$/.test(last(w)));
  w.hear('yes'); await w.settle();
  check('"yes" finishes: "' + last(w) + '"', w.calls.includes('finishWorkout') && /Workout finished/.test(last(w)));
}
{
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear('finish workout'); w.hear('no'); await w.settle();
  check('"no" carries on: "' + last(w) + '"', !w.calls.includes('finishWorkout') && /the workout carries on/.test(last(w)));
  w.hear('ten');
  check('and the next "ten" logs a set as normal: ' + w.sets(0), w.sets(0).startsWith('L25x10'));
}
{
  // The 2026-10-14 morning: "finish", "no", "finish" again, then the answer
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear('finish'); w.hear('no'); w.hear('finish');
  check('asked again after a "no": "' + last(w) + '"', /^End the workout now/.test(last(w)) && !w.calls.includes('finishWorkout'));
  for (const answer of ['end it']) { w.hear(answer); await w.settle(); }
  check('"end it" ends it: "' + last(w) + '"', w.calls.includes('finishWorkout'));
  for (const answer of ["I'm done", 'keep going']) {
    const v = make(['Barbell Bench Press'], 'confirm_weight'); v.hear('finish workout'); v.hear(answer); await v.settle();
    check('"' + answer + '" as the answer: "' + last(v) + '"', answer === 'keep going' ? !v.calls.includes('finishWorkout') && /carries on/.test(last(v)) : v.calls.includes('finishWorkout'));
  }
}
{
  const w = make(['Barbell Bench Press'], 'confirm_weight'); w.hear('finish workout'); w.hear('ten');
  check('saying reps instead of yes/no just logs the set: ' + w.sets(0), w.sets(0).startsWith('L25x10') && !w.calls.includes('finishWorkout'));
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
