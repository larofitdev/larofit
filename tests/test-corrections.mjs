// Drives the real voice-handling code from workout.html with a fake workout
import fs from 'fs';
const src = fs.readFileSync('workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('function voiceLogSet(reps, saidWeight) {'), b = src.indexOf('function prefillWeight(');
if (a < 0 || b < a) throw new Error('markers');

const make = aiReply => new Function('aiReply', `
  let voicePhase = 'confirm_weight', voicePending = { exIdx: 0, setIdx: 0, sugWeight: 10, bw: false };
  let voiceLastLog = null, voiceFmwSkipped = false, voiceLastPrompt = '', totalPRs = 0, currentExIdx = 0, restCallback = null;
  let exNotes = {};
  let restInterval = null, isPaused = false; const pauseWorkout = () => { isPaused = true; }, resumeWorkout = () => { isPaused = false; };
  let voiceEarbudsOut = false, voiceHadEarbuds = false, voiceAutoPaused = false; const voiceHoldMic = async () => {};
  const _prCredited = new Set(), said = [], calls = [];
  const exercises = [{ id: 'e1', name: 'Lateral Raise', sets: 3, loggedSets: [0,1,2].map(() => ({ weight: 10, reps: '', logged: false })) },
                     { id: 'e2', name: 'Chest Fly',     sets: 2, reps: 10, loggedSets: [0,1].map(() => ({ weight: 30, reps: '', logged: false })) }];
  const prefillReps = (e, i, r) => { exercises[e].loggedSets[i].reps = r; };
  const prefillWeight = (e, i, w) => { exercises[e].loggedSets[i].weight = w; };
  const voicePrompt = msg => { voiceLastPrompt = msg; said.push(msg); };
  const speakText = msg => said.push(msg);
  const logSet = (e, i) => {   // like the real one: marks it logged and lines up the next set
    exercises[e].loggedSets[i].logged = true; restCallback = () => {};
    if (!exercises[e].loggedSets.every(s => s.logged)) voicePending = { exIdx: e, setIdx: i + 1, sugWeight: parseFloat(exercises[e].loggedSets[i].weight) || 0 };
  };
  const store = { get: (k, d) => d }, workoutMode = 'voice';
  const isTimed = () => false, isCardio = () => false;
  const logBWSet = logSet;
  const voiceTargetFor = e => { const i = exercises[e].loggedSets.findIndex(s => !s.logged); return i < 0 ? null : { exIdx: e, setIdx: i, sugWeight: exercises[e].loggedSets[i].weight, bw: false }; };
  const voicePrefetch = () => {}, voiceNextSetPrompt = () => ({ msg: '' }), voiceUnit = () => 'pounds', voiceDbg = () => {};
  const skipRest = () => calls.push('skipRest'), stopRest = () => calls.push('stopRest'), dismissFMW = () => {}, getFMWStartWeight = () => 20;
  const getFMW = () => ({ active: false, sets: [] }), getLastSession = () => null;
  const goToEx = i => { currentExIdx = i; calls.push('goToEx ' + i); };
  const renderSets = () => {}, renderDots = () => {}, updateOverallProgress = () => {}, checkAllDone = () => {}, saveSnapshot = () => {};
  const aiCoachFetch = async () => ({ json: async () => ({ content: [{ text: aiReply }] }) });
  let voicePreAnnounced = -1;
  const nextIncompleteIdx = from => exercises.findIndex((e, i) => i !== from && !e.loggedSets.every(s => s.logged));
  const coachPlanFor = () => ({ weight: 30, change: 'same' });
  ${src.slice(a, b)}
  return { hear: t => handleVoiceResult(t), interpret: t => voiceInterpret(t), sets: e => exercises[e].loggedSets.map(s => (s.logged ? 'L' : '-') + s.weight + 'x' + s.reps).join(' '),
           phase: () => voicePhase, said, calls, setPhase: p => { voicePhase = p; }, setEx: i => { currentExIdx = i; }, pending: () => voicePending };
`)(aiReply);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };

{ // Words that used to change the weight now do nothing
  const w = make('{"action":"none","weight":null,"reps":null}');
  for (const t of ['heavier', 'lighter', 'a bit more', 'come on up', 'too heavy', 'good', 'sure']) w.hear(t);
  check('"heavier", "lighter", "more", "up" no longer change the weight', w.sets(0) === '-10x -10x -10x' && w.said.length === 0, w.sets(0) + ' ' + JSON.stringify(w.said));
}
{ // Log, then "no you logged that wrong", then say it again
  const w = make('');
  w.hear('10 for 12');
  check('logs a set and repeats what was said', w.sets(0).startsWith('L10x12') && w.phase() === 'resting' && w.said.at(-1) === '12 reps at 10 pounds logged.', w.sets(0) + ' | ' + w.said.at(-1));
  check('"no, you logged that wrong" is understood', w.hear('No, you logged that wrong.') === true);
  check('...the set is un-logged and the rest timer stopped', w.sets(0).startsWith('-10x12') && w.calls.includes('stopRest') && w.phase() === 'count_reps', w.sets(0) + ' ' + w.phase());
  check('...and it asks for the numbers again', /set 1 removed.*weight and reps again/i.test(w.said.at(-1)), w.said.at(-1));
  w.hear('12.5 for 10');
  check('saying it again logs the right numbers', w.sets(0).startsWith('L12.5x10'), w.sets(0));
}
{ // Correction with the numbers in the same breath
  const w = make('');
  w.hear('20 for 20');
  w.hear('no 20 for 10');
  check('"no, 20 for 10" fixes it in one go', w.sets(0).startsWith('L20x10') && w.said.at(-1) === '10 reps at 20 pounds logged.', w.sets(0) + ' | ' + w.said.at(-1));
  w.hear('edit last set');
  check('"edit last set" removes it', w.sets(0).startsWith('-20x10') && w.phase() === 'count_reps', w.sets(0));
  w.hear('10');
  w.hear('correction 15 for 8');
  check('"correction, 15 for 8" replaces it', w.sets(0).startsWith('L15x8'), w.sets(0));
  w.hear('undo');
  w.hear('scratch that');
  check('a second "scratch that" with nothing to undo says so', /no set to correct/i.test(w.said.at(-1)), w.said.at(-1));
}
{ // Finishing an exercise introduces the next one straight away
  const w = make('');
  w.hear('10 for 10'); w.setPhase('confirm_weight'); w.hear('10'); w.setPhase('confirm_weight');
  const before = w.said.length;
  w.hear('10');
  const after = w.said.slice(before);
  check('after the last set it confirms, then says the next exercise and its weight', after[0] === '10 reps logged.' && after[1] === 'Next, Chest Fly, 30 pounds, 10 reps.', JSON.stringify(after));
  w.hear('kill that forty');
  check('"kill that forty" is not logged', w.sets(1) === '-30x -30x', w.sets(1));
}
{ // An unlikely rep count is checked, not logged
  const w = make('');
  w.hear('forty');
  check('a lone "forty" is questioned instead of logged as 40 reps', w.sets(0).startsWith('-10x') && /I heard 40/.test(w.said.at(-1)), w.sets(0) + ' | ' + w.said.at(-1));
  w.hear('40 reps');
  check('saying "40 reps" outright is accepted', w.sets(0).startsWith('L10x40'), w.sets(0));
}
{ // Only the weight was wrong
  const w = make('');
  w.hear('10 for 10');
  w.hear('wrong it was 12.5 pounds');
  check('"wrong, it was 12.5 pounds" keeps the reps and fixes the weight', w.sets(0).startsWith('L12.5x10'), w.sets(0));
}
{ // The app had already moved on to the next exercise
  const w = make('');
  w.hear('10 for 10'); w.setEx(1); w.setPhase('confirm_weight');
  w.hear('that is not right');
  check('correcting after the app moved on goes back to that exercise', w.calls.includes('goToEx 0') && w.sets(0).startsWith('-10x10'), JSON.stringify(w.calls));
}
{ // Bare "no" only counts right after a log
  const w = make('{"action":"none","weight":null,"reps":null}');
  check('"no" with nothing logged is not a correction', w.hear('no') === false && w.said.length === 0);
}
{ // Coach model fallback
  let w = make('{"action":"correct","weight":12.5,"reps":null}');
  w.hear('10 for 10');
  const phrase = 'actually that last one was twelve and a half';
  check('an unrecognised phrase falls through to the coach model', w.hear(phrase) === false);
  await w.interpret(phrase);
  check('coach model: "actually that last one was twelve and a half" corrects the weight', w.sets(0).startsWith('L12.5x10'), w.sets(0));

  w = make('{"action":"log","weight":135,"reps":8}');
  await w.interpret('I think that was pretty good');
  check('coach model cannot log numbers that were not said', w.sets(0) === '-10x -10x -10x', w.sets(0));

  w = make('{"action":"log","weight":null,"reps":9}');
  await w.interpret('got nine that time');
  check('coach model: "got nine that time" logs 9 reps', w.sets(0).startsWith('L10x9'), w.sets(0));

  w = make('{"action":"none","weight":null,"reps":null}');
  await w.interpret('are you using that bench');
  check('coach model: chatter does nothing', w.sets(0) === '-10x -10x -10x' && w.said.length === 0);

  w = make('not json at all');
  await w.interpret('something it cannot parse');
  check('a broken coach reply is ignored safely', w.sets(0) === '-10x -10x -10x');
}
console.log(fail ? fail + ' FAILED' : 'all correction checks pass');
process.exitCode = fail ? 1 : 0;
