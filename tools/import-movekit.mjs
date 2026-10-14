// Updates the exercise library (larofit-exercises.js) from a MoveKit metadata download.
//
//   node tools/import-movekit.mjs <path to metadata.json>
//
// The licence includes a year of library additions, so this is meant to be run again
// whenever a new release is downloaded. It is safe to re-run.
//
// Rules:
// - Exercise ids never change. Programs and workout history point at them.
// - An exercise already in the library keeps its id, its name and how it is logged
//   (weight and reps, reps, time, or cardio), so history still reads the same way.
//   Everything else (muscles, equipment, instructions, video, poster) comes from MoveKit.
// - It is matched by its video name, then by a renamed video (MoveKit's aliases, or an
//   identical description), then by exercise name.
// - Exercises not in the library are added with new ids after the highest existing one.
// - Exercises that never came from MoveKit are left exactly as they are.
// - Videos and posters are expected at media.larofit.com/<slug>.mp4 and
//   media.larofit.com/posters/<slug>.jpg (tools/upload-media.mjs puts them there).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const metaPath = process.argv[2];
if (!metaPath) { console.error('usage: node tools/import-movekit.mjs <metadata.json>'); process.exit(1); }
const M = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const libPath = path.join(root, 'larofit-exercises.js');
const src = fs.readFileSync(libPath, 'utf8').replace(/\r\n/g, '\n');
const L = new Function(src + '; return LAROFIT_EXERCISES;')();

const MEDIA = 'https://media.larofit.com/';

// ── MoveKit's words → the app's categories ──
const MUSCLE = {
  Chest: 'chest', Back: 'back', 'Lower Back': 'back', Trapezius: 'back', Neck: 'shoulders',
  Shoulders: 'shoulders', Biceps: 'biceps', Triceps: 'triceps', Forearms: 'forearms', Core: 'abs',
  Glutes: 'glutes', Quadriceps: 'upper_legs', Hamstrings: 'upper_legs', Adductors: 'upper_legs',
  Calves: 'lower_legs', Tibialis: 'lower_legs'
};
// A leg exercise that also lists the thighs is filed under upper legs (a split squat, a
// Romanian deadlift); one that lists only the glutes stays under glutes (a hip thrust).
function primaryMuscle(list) {
  if (list.some(m => m === 'Quadriceps' || m === 'Hamstrings')) return 'upper_legs';
  return MUSCLE[list[0]] || 'abs';
}
const secondaryMuscles = (sec, primary) => [...new Set(sec.map(m => MUSCLE[m]).filter(m => m && m !== primary))];

const EQUIP = {
  Dumbbell: 'dumbbells', Barbell: 'barbell', 'Weight Plate': 'barbell', Kettlebell: 'kettlebells',
  Machine: 'machine_cable', 'Cable Machine': 'machine_cable', Band: 'bands',
  'Stability Ball': 'exercise_ball', 'Medicine Ball': 'exercise_ball', Bench: 'bench',
  Bicycle: 'cardio_machine', Sled: 'cardio_machine', 'Battle Ropes': 'cardio_machine',
  Bodyweight: 'bodyweight', TRX: 'bodyweight', Backpack: 'bodyweight', Towel: 'bodyweight',
  Dowel: 'bodyweight', Slider: 'bodyweight', 'Foam Roller': 'bodyweight', 'Wrist Roller': 'bodyweight'
};
// The main piece of equipment: the first one that isn't just the body or a bench
function equipment(list, name) {
  if (/\bez[- ]?bar\b/i.test(name)) return 'ez_bar';
  const main = list.find(e => e !== 'Bodyweight' && e !== 'Bench') || list[0];
  return EQUIP[main] || 'bodyweight';
}

const isCardio = ex => ex.movementPattern.includes('Cardio');
// Cardio done for time and distance: machines, bikes, running, rowing, swimming, hiking
const isDistance = ex => isCardio(ex) && (ex.equipment.some(e => e === 'Machine' || e === 'Bicycle') || /swim|run|hik|row|ride|cycl|climb/i.test(ex.name));

// How an exercise is logged: weight and reps, reps only, a time (holds), or cardio (time and distance)
function recordType(ex, equip) {
  const n = ex.name.toLowerCase();
  if (isDistance(ex)) return 'cardio';
  if (isCardio(ex) && /rope|boxing/.test(n)) return 'duration';
  if ((/\bplank\b/.test(n) && !/raise|row|reach|tap|jack|walk/.test(n)) || /\bhold\b|wall sit|dead ?hang|hollow body|l-sit/.test(n) || ex.movementPattern.includes('Stretch')) return 'duration';
  if (ex.equipment.includes('Battle Ropes') || ex.equipment.includes('Sled')) return 'duration';
  if (equip === 'bands' || equip === 'bodyweight' || equip === 'exercise_ball' || equip === 'bench') return 'reps';
  return 'weight_reps';
}

function fromMoveKit(ex) {
  const primary = isCardio(ex) ? 'cardio' : primaryMuscle(ex.primaryMuscles);
  const equip = isDistance(ex) && !ex.equipment.includes('Bodyweight') ? 'cardio_machine' : equipment(ex.equipment, ex.name);
  return {
    primaryMuscle: primary,
    secondaryMuscles: secondaryMuscles([...ex.primaryMuscles.slice(1), ...ex.secondaryMuscles], primary),
    equipment: equip,
    recordType: recordType(ex, equip),
    difficulty: ex.difficulty || 'beginner',
    movement: ex.movementPattern[0] || '',
    description: ex.shortDescription || '',
    benefits: ex.benefits || [],
    instructions: ex.instructions || [],
    commonMistakes: ex.commonMistakes || [],
    mediaUrl: MEDIA + ex.videoFile,
    posterUrl: MEDIA + 'posters/' + ex.posterFile.replace(/^posters\//, '').replace(/\.png$/i, '.jpg'),
    exerciseUrl: '',
    custom: false,
    source: 'movekit',
    slug: ex.slug
  };
}

// ── Match the existing library to MoveKit ──
const bySlug = new Map(M.map(e => [e.slug, e]));
const byAlias = new Map(); M.forEach(e => (e.aliases || []).forEach(a => byAlias.set(a, e)));
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
// The same words in any order (Wide Push-Ups = Push-Up Wide), but "low-to-high" stays one word
const words = s => [...new Set(s.toLowerCase().replace(/(\w+)-to-(\w+)/g, '$1to$2').replace(/[^a-z0-9 ]/g, ' ').split(' ').filter(Boolean).map(w => w.replace(/(es|s)$/, '')))].sort().join(' ');
const byName = new Map(M.map(e => [norm(e.name), e])), byWords = new Map(M.map(e => [words(e.name), e]));
const textWords = s => new Set(String(s).toLowerCase().replace(/[^a-z ]/g, ' ').split(' ').filter(w => w.length > 3));
const sameText = (a, b) => { const A = textWords(a), B = textWords(b); let n = 0; A.forEach(w => B.has(w) && n++); return n / Math.max(1, Math.min(A.size, B.size)) >= 0.95; };
const slugOf = e => e.slug || (e.mediaUrl ? e.mediaUrl.split('/').pop().replace(/\.mp4$/, '') : '');

const taken = new Set();
const how = { video: 0, renamed: 0, name: 0, kept: 0 };
const updated = L.map(old => {
  let mk = null, kind = '';
  const s = slugOf(old);
  if (s && bySlug.has(s)) { mk = bySlug.get(s); kind = 'video'; }
  else if (s && byAlias.has(s)) { mk = byAlias.get(s); kind = 'renamed'; }
  else if (s) {   // a renamed video with no alias: the same description
    const text = (old.description || '') + ' ' + (old.instructions || []).join(' ');
    mk = M.find(e => !taken.has(e.slug) && sameText(text, e.shortDescription + ' ' + e.instructions.join(' ')));
    if (mk) kind = 'renamed';
  }
  if (!mk) { mk = byName.get(norm(old.name)) || byWords.get(words(old.name)) || null; if (mk) kind = 'name'; }
  if (!mk || taken.has(mk.slug)) { how.kept++; return old; }
  taken.add(mk.slug); how[kind]++;
  // Keeps its id, name, way of logging, and where it is filed (muscle group and equipment,
  // which the pickers and the equipment checklist go by); the rest is MoveKit's
  const fresh = fromMoveKit(mk);
  return { id: old.id, name: old.name, ...fresh, recordType: old.recordType, primaryMuscle: old.primaryMuscle, equipment: old.equipment,
           secondaryMuscles: fresh.secondaryMuscles.filter(m => m !== old.primaryMuscle) };
});

let next = Math.max(...L.map(e => parseInt(String(e.id).slice(1)) || 0)) + 1;
// MoveKit sometimes films the same exercise twice under a reworded name (Push-Up Wide and
// Wide Push-Ups); the second one isn't added, so the coach never has two to choose between
const have = new Set(updated.map(e => words(e.name)));
const doubles = [];
const added = M.filter(e => !taken.has(e.slug)).sort((a, b) => a.name.localeCompare(b.name))
  .filter(e => { const w = words(e.name); if (have.has(w)) { doubles.push(e.name); return false; } have.add(w); return true; })
  .map(e => ({ id: 'b' + next++, name: e.name, ...fromMoveKit(e) }));
const library = updated.concat(added);

// ── Checks before writing ──
const ids = library.map(e => e.id);
if (new Set(ids).size !== ids.length) throw new Error('duplicate ids');
for (const old of L) if (!library.some(e => e.id === old.id)) throw new Error('lost exercise ' + old.id);
const slugs = library.map(e => e.slug).filter(Boolean);
if (new Set(slugs).size !== slugs.length) throw new Error('a MoveKit exercise used twice');

// ── Write: the file's own header and footer stay; only the list is replaced ──
const a = src.indexOf('const LAROFIT_EXERCISES = [');
const b = src.indexOf('\n];', a) + 3;
if (a < 0 || b < a) throw new Error('could not find the exercise list in larofit-exercises.js');
const body = 'const LAROFIT_EXERCISES = ' + JSON.stringify(library, null, 2) + ';';
const out = src.slice(0, a) + body + src.slice(b);
new Function(out + '; return LAROFIT_EXERCISES;')();   // it still loads
fs.writeFileSync(libPath, out);

console.log('library: ' + library.length + ' exercises (was ' + L.length + ')');
console.log('  matched by video ' + how.video + ', by a renamed video ' + how.renamed + ', by name ' + how.name +
            ', not from MoveKit and left as they were ' + how.kept + ', new ' + added.length);
if (doubles.length) console.log('  not added, same exercise as one already in the library: ' + doubles.join(', '));
console.log('  with a video: ' + library.filter(e => e.mediaUrl).length);
fs.writeFileSync(path.join(path.dirname(metaPath), 'media-list.json'), JSON.stringify(library.filter(e => e.slug).map(e => e.slug)));
