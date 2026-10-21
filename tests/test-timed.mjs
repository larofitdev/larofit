// Timed holds and cardio by voice: understanding times, and the logging flow
import fs from 'fs';
const src = fs.readFileSync(process.argv[2] || 'workout.html', 'utf8').replace(/\r\n/g, '\n');
const a = src.indexOf('function voiceLogSet(reps, saidWeight) {'), b = src.indexOf('function prefillWeight(');
if (a < 0 || b < a) throw new Error('markers');

// kinds: one per exercise, 'timed' | 'cardio' | 'strength'
const make = (kinds, aiReply = '{"action":"none"}', groups = []) => new Function('aiReply', 'kinds', 'groups', `
  let workoutMode = 'voice', voicePhase = 'idle', voiceLastLog = null, voiceLastPrompt = '', totalPRs = 0, currentExIdx = 0, restCallback = null, voicePreAnnounced = -1;
  let exNotes = {};
  let restInterval = null, isPaused = false; const pauseWorkout = () => { isPaused = true; }, resumeWorkout = () => { isPaused = false; };
  let voiceEarbudsOut = false, voiceHadEarbuds = false, voiceAutoPaused = false; const voiceHoldMic = async () => {};
  const getExerciseHistory = id => id === 'e-hist' ? [{ sets: [{ duration: 30, distance: 2 }] }] : [];
  const _prCredited = new Set(), said = [], calls = [];
  let voiceSpeakChain = Promise.resolve(), holdShown = false, restEnd = null;
  const exercises = kinds.map((k, i) => ({ id: 'e' + i, name: k === 'timed' ? 'Plank' : k === 'cardio' ? 'Treadmill' : 'Bench Press', kind: k, sets: k === 'cardio' ? 1 : 3, reps: k === 'timed' ? 45 : 10, durationSec: k === 'timed' ? 45 : null, restSec: 60,
    loggedSets: k === 'cardio' ? [{ duration: '', speed: '', distance: '', logged: false }] : k === 'timed' ? [0,1,2].map(() => ({ holdTime: '', logged: false })) : [0,1,2].map(() => ({ weight: 100, reps: '', logged: false })) }));
  groups.forEach((g, i) => { if (g) exercises[i].group = g; });
  let voicePending = { exIdx: 0, setIdx: 0, sugWeight: 0, bw: false };
  const isTimed = ex => ex.kind === 'timed', isCardio = ex => ex.kind === 'cardio', isBW = () => false, isStrength = ex => ex.kind === 'strength';
  const store = { get: (k, d) => d }, LAROFIT_EXERCISES = [];
  const els = {}; const document = { getElementById: id => id === 'hold-overlay' ? { classList: { contains: () => holdShown } } : (els[id] = els[id] || { style: {}, value: '' }) };
  const prefillReps = (e, i, r) => { exercises[e].loggedSets[i].reps = r; };
  const prefillWeight = (e, i, w) => { exercises[e].loggedSets[i].weight = w; };
  const speakText = msg => said.push(msg);
  const voicePrompt = msg => { voiceLastPrompt = msg; said.push(msg); };
  const nextIncompleteIdx = from => exercises.findIndex((e, i) => i !== from && !e.loggedSets.every(s => s.logged));
  const startRest = (secs, cb) => { restEnd = cb; };
  const afterLog = (e, i) => { const ex = exercises[e]; if (ex.loggedSets.every(s => s.logged)) { const ni = nextIncompleteIdx(e); startRest(60, ni !== -1 ? () => goToEx(ni) : null); } else startRest(60, () => voiceNextSet(e)); };
  const logSet = (e, i) => { exercises[e].loggedSets[i].logged = true; afterLog(e, i); };
  const logBWSet = logSet;
  const logTimedSet = (e, i) => { const st = exercises[e].loggedSets[i]; if (!st.holdTime) return; st.logged = true; afterLog(e, i); };
  const logCardioSet = e => { const st = exercises[e].loggedSets[0]; if (!st.duration) return; st.logged = true; afterLog(e, 0); };
  let holdSet = null;
  const startHold = (e, i) => { holdShown = true; holdSet = [e, i]; calls.push('startHold'); };
  const finishHold = secs => { holdShown = false; const [e, i] = holdSet; exercises[e].loggedSets[i].holdTime = String(secs); exercises[e].loggedSets[i].logged = true; afterLog(e, i); voiceTimedLogged(e, i, secs); };
  const holdDoneEarly = () => finishHold(22);
  const updateVoiceHUD = () => {}, fetchSetCoaching = () => {}, voicePrefetch = () => {}, voiceUnit = () => 'pounds', voiceDbg = () => {}, voicePrefetchForExercise = () => {};
  const skipRest = () => { calls.push('skipRest'); const cb = restEnd; restEnd = null; if (cb) cb(); }, stopRest = () => { restEnd = null; };
  const getLastSession = () => null, localDateStr = () => '2026-10-12', getSuggestedWeight = () => null, pauseListening = () => {}, startListening = () => {};
  const goToEx = i => { currentExIdx = i; voiceAnnounceExercise(exercises[i]); };
  const renderSets = () => {}, updateOverallProgress = () => {}, checkAllDone = () => {}, saveSnapshot = () => {}, finishWorkout = () => calls.push('finishWorkout');
  const aiCoachFetch = async () => ({ json: async () => ({ content: [{ text: aiReply }] }) });
  const setTimeout = () => {};
  ${src.slice(src.indexOf('// First un-logged set of an exercise as a voice target'), src.indexOf('function voiceUnit()'))}
  ${src.slice(src.indexOf('// Called when an exercise comes on screen'), src.indexOf('// The opening line of the workout'))}
  ${src.slice(src.indexOf('// Rest is over — prompt for the next set of this exercise'), src.indexOf('// Log the pending set with the spoken reps'))}
  ${src.slice(a, b)}
  return { begin: () => goToEx(0), go: i => goToEx(i), hear: t => handleVoiceResult(t), said, calls, phase: () => voicePhase, current: () => exercises[currentExIdx].name, endRest: () => skipRest(), timerDone: s => finishHold(s),
           sets: e => exercises[e].loggedSets.map(s => (s.logged ? 'L' : '-') + (s.holdTime !== undefined ? s.holdTime + 's' : s.duration !== undefined ? s.duration + 'min' + (s.speed ? '@' + s.speed : '') + (s.distance ? '/' + s.distance + 'mi' : '') : s.weight + 'x' + s.reps)).join(' '),
           time: (t, unit, raw) => parseTimeSpeech(normalizeSpeech(t), unit, raw === undefined ? t : raw), cardio: t => parseCardioSpeech(normalizeSpeech(t), t), sayTime: voiceSayTime };
`)(aiReply, kinds, groups);

let fail = 0;
const check = (name, ok, extra = '') => { console.log((ok ? 'ok   ' : 'FAIL ') + name + (ok ? '' : '   ' + extra)); if (!ok) fail++; };
const last = w => w.said[w.said.length - 1];
const P = make(['timed']);

console.log('Hold times (a number on its own is seconds)');
for (const [phrase, want] of [['45 seconds', 45], ['forty five seconds', 45], ['45', 45], ['forty five', 45], ['a minute', 60], ['one minute', 60], ['1 minute', 60], ['two minutes', 120],
  ['a minute thirty', 90], ['one minute thirty', 90], ['1 minute 30 seconds', 90], ['a minute and a half', 90], ['one and a half minutes', 90], ['90 seconds', 90], ['1:30', 90], ['0:45', 45],
  ['half a minute', 30], ['I held it for 50 seconds', 50], ['that was thirty', 30], ['thirty seconds done', 30], ['ready', null], ['start', null], ['that was hard', null]]) {
  const got = P.time(phrase, 'sec');
  check(('"' + phrase + '"').padEnd(30) + ' -> ' + got, got === want, 'expected ' + want);
}

console.log('Cardio (a number on its own is minutes)');
for (const [phrase, min, dist] of [['30 minutes', 30, null], ['thirty minutes', 30, null], ['20', 20, null], ['twenty', 20, null], ['30 minutes, 2 miles', 30, 2], ['thirty minutes two miles', 30, 2],
  ['2 miles in 18 minutes', 18, 2], ['twenty minutes and a mile and a half', 20, 1.5], ['an hour', 60, null], ['half an hour', 30, null], ['an hour and a half', 90, null], ['1 hour 15 minutes', 75, null],
  ['45 minutes 3.2 miles', 45, 3.2], ['25:30', 25.5, null], ['20 minutes 5 kilometers', 20, 3.11], ['I ran for 22 minutes', 22, null], ['12 and a half minutes', 12.5, null], ['2 miles', null, 2], ['ready', null, null],
  ['20 minutes 30', 20.5, null]]) {
  const got = P.cardio(phrase);
  check(('"' + phrase + '"').padEnd(40) + ' -> ' + got.minutes + ' min' + (got.distance !== null ? ', ' + got.distance + ' mi' : ''), got.minutes === min && got.distance === dist, 'expected ' + min + ' / ' + dist);
}

console.log('Cardio with speed (the distance is worked out)');
for (const [phrase, min, speed, dist] of [['30 minutes at 3.5', 30, 3.5, 1.75], ['thirty minutes at three point five', 30, 3.5, 1.75], ['30 minutes 3.5 mph', 30, 3.5, 1.75],
  ['30 minutes at 3.5 miles an hour', 30, 3.5, 1.75], ['30 minutes 3.5 miles per hour', 30, 3.5, 1.75], ['30 minutes, 3.5', 30, 3.5, 1.75], ['3.5 for 30 minutes', 30, 3.5, 1.75],
  ['at 3.5 for 30 minutes', 30, 3.5, 1.75], ['twenty five minutes at 4', 25, 4, 1.67], ['20 at 3', 20, 3, 1], ['speed 3.5 for 40 minutes', 40, 3.5, 2.33],
  ['30 minutes at three and a half', 30, 3.5, 1.75], ['an hour at 3', 60, 3, 3], ['20 minutes at 10 kilometers an hour', 20, 6.2, 2.07], ['30 minutes, 2 miles', 30, 4, 2],
  ['at 3.5', null, 3.5, null], ['30 minutes', 30, null, null], ['30x3.7', 30, 3.7, 1.85], ['30 x 3.7', 30, 3.7, 1.85]]) {
  const got = P.cardio(phrase);
  check(('"' + phrase + '"').padEnd(40) + ' -> ' + got.minutes + ' min at ' + got.speed + ', ' + got.distance + ' mi', got.minutes === min && got.speed === speed && got.distance === dist, 'expected ' + min + ' / ' + speed + ' / ' + dist);
}

console.log('Reading a time back');
for (const [secs, want] of [[45, '45 seconds'], [60, '1 minute'], [90, '1 minute 30 seconds'], [120, '2 minutes'], [1, '1 second'], [1800, '30 minutes']]) check(secs + ' -> ' + P.sayTime(secs), P.sayTime(secs) === want);

console.log('A hold, saying the time');
{
  const w = make(['timed', 'strength']); w.begin();
  check('announced: "' + last(w) + '"', /^Plank, 45 seconds\. Say start and I will time you, or say your time when finished\.$/.test(last(w)) && w.phase() === 'log_time');
  w.hear('forty seconds');
  check('"forty seconds" -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L40s -s -s' && last(w) === '40 seconds logged.' && w.phase() === 'resting');
  w.endRest();
  check('after the rest: "' + last(w) + '"', last(w) === 'Set 2.' && w.phase() === 'log_time');
  w.hear('a minute'); w.endRest(); w.hear('50');
  check('three sets -> ' + w.sets(0) + '   then "' + last(w) + '"', w.sets(0) === 'L40s L60s L50s' && /^Next, Bench Press/.test(last(w)));
  w.endRest();
  check('moves on to the next exercise: ' + w.current() + ', ' + w.phase(), w.current() === 'Bench Press');
}
console.log('A hold, timed by the coach');
{
  const w = make(['timed']); w.begin(); w.hear('start');
  check('"start" starts the timer: "' + last(w) + '"', w.calls.includes('startHold') && last(w) === 'Go.');
  check('while timing, other speech is ignored', w.hear('thirty seconds') === false && w.hear('finish workout') === false && w.sets(0) === '-s -s -s');
  w.timerDone(45);
  check('timer runs out -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L45s -s -s' && last(w) === '45 seconds logged.');
  w.endRest(); w.hear('go'); w.hear('stop');
  check('"stop" ends it early -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L45s L22s -s' && last(w) === '22 seconds logged.');
}
console.log('Corrections');
{
  const w = make(['timed']); w.begin(); w.hear('thirty seconds'); w.hear('no, that was 40 seconds');
  check('"no, that was 40 seconds" -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L40s -s -s' && last(w) === '40 seconds logged.');
  w.hear('that was wrong');
  check('"that was wrong" takes it back and asks: "' + last(w) + '"', w.sets(0).startsWith('-') && /Say the time again/.test(last(w)) && w.phase() === 'log_time');
  w.hear('35');
  check('then "35" -> ' + w.sets(0), w.sets(0) === 'L35s -s -s');
}
console.log('Cardio');
{
  const w = make(['cardio', 'strength']); w.begin();
  check('announced: "' + last(w) + '"', /^Treadmill\. Say your time and speed when finished, like 30 minutes at 3\.5\.$/.test(last(w)) && w.phase() === 'log_cardio');
  w.hear('two miles');
  check('distance only asks for the time: "' + last(w) + '"', /How long/.test(last(w)) && w.sets(0) === '-min');
  w.hear('at 3.5');
  check('speed only asks for the time: "' + last(w) + '"', /How long/.test(last(w)) && w.sets(0) === '-min');
  w.hear('30 minutes, 2 miles');
  check('"30 minutes, 2 miles" -> ' + w.sets(0) + '   "' + w.said[w.said.length - 2] + '" then "' + last(w) + '"', w.sets(0) === 'L30min@4/2mi' && w.said[w.said.length - 2] === '30 minutes, 2 miles logged.' && /^Next, Bench Press/.test(last(w)));
}
{
  const w = make(['cardio', 'strength']); w.begin();
  w.hear('thirty minutes at three point five');
  check('"thirty minutes at three point five" -> ' + w.sets(0) + '   "' + w.said[w.said.length - 2] + '"', w.sets(0) === 'L30min@3.5/1.75mi' && w.said[w.said.length - 2] === '30 minutes at 3.5 logged, 1.75 miles.');
}
{
  const w = make(['cardio']); w.begin(); w.hear('twenty');
  check('a bare "twenty" is minutes -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L20min' && last(w) === '20 minutes logged.');
  w.hear('no, 25 minutes at 4');
  check('corrected -> ' + w.sets(0) + '   "' + last(w) + '"', w.sets(0) === 'L25min@4/1.67mi' && last(w) === '25 minutes at 4 logged, 1.67 miles.');
}
console.log('In a superset the coach says less once the drill is known');
{
  const G = { id: 'g', rounds: 3, roundRestSec: 60 };
  const w = make(['strength', 'strength', 'strength'], undefined, [G, G]);
  w.begin();
  check('the first exercise, first round: the full line "' + last(w) + '"', /^Bench Press, 100 pounds, 10 reps\. Say your reps when finished\.$/.test(last(w)));
  w.hear('ten'); w.go(1);
  check('the second, first round: weight and reps, no instructions "' + last(w) + '"', last(w) === 'Bench Press, 100 pounds, 10 reps.');
  w.hear('ten'); w.go(0);
  check('later rounds: just the name "' + last(w) + '"', last(w) === 'Bench Press.');
  w.hear('ten');
  check('and the reps still log: ' + w.sets(0), w.sets(0) === 'L100x10 L100x10 -100x');
  w.go(2);
  check('an exercise outside the superset: its line, without the instruction a second time "' + last(w) + '"', last(w) === 'Bench Press, 100 pounds, 10 reps.');
}

console.log('After the rest, an exercise already announced is just "Set 1."');
{
  const w = make(['strength', 'strength']); w.begin();
  w.hear('ten'); w.endRest(); w.hear('ten'); w.endRest(); w.hear('ten');
  check('the next exercise is announced during the rest: "' + last(w) + '"', /^Next, Bench Press, 100 pounds, 10 reps\.$/.test(last(w)));
  w.endRest();
  check('when the rest ends: "' + last(w) + '"', last(w) === 'Set 1.' && w.phase() === 'confirm_weight');
  w.hear('ten');
  check('and "ten" logs its first set: ' + w.sets(1), w.sets(1) === 'L100x10 -100x -100x');
}

console.log('Weight and reps are unaffected');
{
  const w = make(['strength']); w.begin(); w.hear('ten');
  check('"ten" on a weighted exercise logs reps: ' + w.sets(0), w.sets(0) === 'L100x10 -100x -100x');
}

console.log(fail ? '\n' + fail + ' FAILED' : '\nall passed');
process.exit(fail ? 1 : 0);
