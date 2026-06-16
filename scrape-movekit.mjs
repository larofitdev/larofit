/**
 * scrape-movekit.mjs
 * Scrapes 206 exercises from MoveKit and writes larofit-exercises.js
 */
import { writeFileSync } from 'fs';

const OUTPUT_PATH = 'C:\\Users\\Lyndon\\Desktop\\larofit\\larofit-exercises.js';
const BASE_URL = 'https://movekit.com/exercises';
const BATCH_SIZE = 4;
const DELAY_MS = 900;

const SLUGS = [
  'abdominals-stretch-variation-four',
  'abdominals-stretch-variation-one',
  'abdominals-stretch-variation-three',
  'abdominals-stretch-variation-two',
  'band-curl',
  'band-high-face-pull',
  'band-hip-abduction',
  'band-kneeling-pulldown',
  'band-lateral-raise',
  'band-pullover',
  'band-romanian-deadlift',
  'band-row',
  'band-seated-pulldown',
  'band-shrug',
  'band-single-arm-lateral-raise',
  'band-wood-chopper',
  'barbell-banded-back-squat',
  'barbell-behind-the-back-30-degree-shrug',
  'barbell-bench-press',
  'barbell-bent-over-row',
  'barbell-clean-and-press',
  'barbell-close-grip-bench-press',
  'barbell-curl',
  'barbell-deadlift',
  'barbell-drag-curl',
  'barbell-front-rack-step-up-knee-drive',
  'barbell-high-incline-bench-press',
  'barbell-incline-bench-press',
  'barbell-muscle-snatch',
  'barbell-overhead-press',
  'barbell-power-snatch',
  'barbell-pullover',
  'barbell-rack-pull',
  'barbell-shrug',
  'barbell-snatch',
  'barbell-spinal-jefferson-curl',
  'barbell-split-squat',
  'barbell-squat',
  'barbell-step-up-knee-drive',
  'barbell-stiff-leg-deadlifts',
  'barbell-thruster',
  'barbell-upright-row',
  'barbell-wrist-curl',
  'bench-dips',
  'bodyweight-alternating-lateral-lunge',
  'bodyweight-alternating-reverse-lunges',
  'bodyweight-box-squat',
  'bodyweight-deadlift',
  'bodyweight-donkey-calf-raise',
  'bodyweight-elevated-push-up',
  'bodyweight-hip-abduction',
  'bodyweight-knee-push-ups',
  'bodyweight-reverse-lunge',
  'bodyweight-russian-twist',
  'bodyweight-spinal-jefferson-curl',
  'bodyweight-squat',
  'box-jump',
  'bulgarian-split-squat',
  'burpee',
  'cable-30-degree-shrug',
  'cable-bar-curl',
  'cable-bar-face-pull',
  'cable-bar-pushdown',
  'cable-bench-chest-fly',
  'cable-bench-press',
  'cable-bench-straight-leg-kickback',
  'cable-chest-press',
  'cable-decline-bench-press',
  'cable-incline-bench-press',
  'cable-overhead-press',
  'cable-pec-fly',
  'cable-rope-kneeling-face-pull',
  'cable-rope-pushdown',
  'cable-row-bar-standing-row',
  'cable-seated-rope-face-pull',
  'cable-side-bend',
  'cable-single-arm-neutral-grip-row',
  'cable-single-arm-rope-pushdown',
  'cable-single-arm-underhand-grip-row',
  'cable-standing-low-to-high-wood-chopper',
  'cable-standing-single-arm-chest-press',
  'cable-supinating-row',
  'cable-wood-chopper',
  'chin-ups',
  'decline-push-up',
  'diamond-push-ups',
  'dumbbell-alternating-forward-lunge',
  'dumbbell-bench-press',
  'dumbbell-bulgarian-split-squat',
  'dumbbell-chest-fly',
  'dumbbell-concentration-curl',
  'dumbbell-cross-body-romanian-deadlift',
  'dumbbell-curl',
  'dumbbell-decline-bench-press',
  'dumbbell-decline-chest-fly',
  'dumbbell-decline-skullcrusher',
  'dumbbell-feet-elevated-glute-bridge',
  'dumbbell-figure-four-heels-elevated-hip-thrust',
  'dumbbell-front-raise',
  'dumbbell-goblet-alternating-curtsy-lunge',
  'dumbbell-goblet-bulgarian-split-squat',
  'dumbbell-goblet-forward-lunge',
  'dumbbell-goblet-reverse-lunge',
  'dumbbell-goblet-split-squat',
  'dumbbell-goblet-squat',
  'dumbbell-hammer-curl',
  'dumbbell-heels-elevated-hip-thrust',
  'dumbbell-incline-bench-press',
  'dumbbell-incline-chest-fly',
  'dumbbell-incline-curl',
  'dumbbell-incline-front-raise',
  'dumbbell-incline-hammer-curl',
  'dumbbell-lateral-raise',
  'dumbbell-laying-reverse-fly',
  'dumbbell-leg-curl',
  'dumbbell-preacher-curl',
  'dumbbell-rear-delt-fly',
  'dumbbell-row-bilateral',
  'dumbbell-row-unilateral',
  'dumbbell-russian-twist',
  'dumbbell-seated-overhead-press',
  'dumbbell-seated-overhead-tricep-extension',
  'dumbbell-seated-rear-delt-fly',
  'dumbbell-seated-shrug',
  'dumbbell-shrug',
  'dumbbell-side-bend',
  'dumbbell-single-arm-chest-press',
  'dumbbell-single-arm-clean-and-press',
  'dumbbell-single-arm-row',
  'dumbbell-single-leg-calf-raise',
  'dumbbell-situp',
  'dumbbell-skullcrusher',
  'dumbbell-spinal-jefferson-curl',
  'dumbbell-standing-single-arm-curl',
  'dumbbell-standing-single-arm-hammer-curl',
  'dumbbell-sumo-squat',
  'dumbbell-superman',
  'dumbbell-thruster',
  'dumbbell-tricep-kickback',
  'dumbbell-upright-row',
  'dumbbell-wrist-curl',
  'dumbbell-wrist-extension',
  'elbow-side-plank',
  'ez-bar-preacher-curl',
  'ez-bar-reverse-preacher-curl',
  'forward-lunge',
  'good-mornings',
  'hand-plank',
  'hanging-knee-raises',
  'incline-push-up',
  'inverted-row',
  'jump-squats',
  'kettlebell-alternating-curtsy-lunge',
  'kettlebell-assisted-bulgarian-split-squat',
  'kettlebell-bench-press',
  'kettlebell-calf-raise',
  'kettlebell-curl',
  'kettlebell-farmers-carry',
  'kettlebell-front-raise',
  'kettlebell-goblet-curl',
  'kettlebell-gorilla-row',
  'kettlebell-hip-thrust',
  'kettlebell-incline-bench-press',
  'kettlebell-push-press',
  'kettlebell-romanian-deadlift',
  'kettlebell-row',
  'kettlebell-row-single',
  'kettlebell-seated-overhead-press',
  'kettlebell-shrug',
  'kettlebell-single-arm-row',
  'kettlebell-spinal-jefferson-curl',
  'kettlebell-sumo-deadlift',
  'kettlebell-swing',
  'kettlebell-thruster',
  'kettlebell-windmill',
  'landmine-t-bar-rows',
  'lunge-walking',
  'machine-45-degree-back-extension',
  'machine-cable-v-bar-push-downs',
  'machine-chest-press',
  'machine-crunch',
  'machine-dips',
  'machine-face-pulls',
  'machine-front-military-press',
  'machine-leg-extension',
  'machine-leg-press',
  'machine-neutral-row',
  'machine-pec-fly',
  'machine-plate-loaded-leg-extension',
  'machine-plate-loaded-t-bar-row',
  'machine-pulldown',
  'machine-seated-cable-row',
  'machine-underhand-row',
  'mountain-climber',
  'narrow-pulldown',
  'parralel-bar-dips',
  'plate-forward-lunge',
  'pull-ups',
  'push-up',
  'single-legged-romanian-deadlifts',
  'smith-machine-close-grip-bench-press',
  'smith-machine-incline-bench-press',
  'smith-machine-standing-shrugs',
  'smith-machine-sumo-romanian-deadlift',
  'supermans',
  'wall-sit',
];

const MUSCLE_MAP = {
  'Core': 'abs',
  'Quadriceps': 'upper_legs',
  'Hamstrings': 'upper_legs',
  'Calves': 'lower_legs',
  'Trapezius': 'back',
  'Glutes': 'glutes',
  'Chest': 'chest',
  'Back': 'back',
  'Biceps': 'biceps',
  'Triceps': 'triceps',
  'Shoulders': 'shoulders',
  'Forearms': 'forearms',
  'Cardio': 'cardio',
  'Full Body': 'abs',
};

const EQUIPMENT_MAP = {
  'Barbell': 'barbell',
  'Dumbbell': 'dumbbells',
  'Dumbbells': 'dumbbells',
  'Band': 'bands',
  'Bands': 'bands',
  'Bodyweight': 'bodyweight',
  'Bench': 'bench',
  'Cable': 'machine_cable',
  'Machine': 'machine_cable',
  'Kettlebell': 'kettlebells',
  'Kettlebells': 'kettlebells',
  'EZ Bar': 'ez_bar',
  'Exercise Ball': 'exercise_ball',
  'Cardio Machine': 'cardio_machine',
};

// ── HTML utilities ────────────────────────────────────────────────────────────

function decodeHTML(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x2019;|&#8217;|&rsquo;/g, '’')
    .replace(/&#x2018;|&#8216;|&lsquo;/g, '‘')
    .replace(/&#x201C;|&#8220;|&ldquo;/g, '“')
    .replace(/&#x201D;|&#8221;|&rdquo;/g, '”')
    .replace(/&#x2014;|&#8212;|&mdash;/g, '—')
    .replace(/&#x2013;|&#8211;|&ndash;/g, '–')
    .trim();
}

function stripTags(str) {
  return str.replace(/<[^>]+>/g, '');
}

// Extract all <p> text nodes from a section of HTML using exact class match
function extractParas(sectionHtml, cls) {
  const escaped = cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
  const re = new RegExp(`<p[^>]*class="${escaped}"[^>]*>([\\s\\S]*?)<\\/p>`, 'g');
  const items = [];
  let m;
  while ((m = re.exec(sectionHtml)) !== null) {
    const text = decodeHTML(stripTags(m[1])).trim();
    if (text.length > 8) items.push(text);
  }
  return items;
}

// ── Parser ────────────────────────────────────────────────────────────────────

function parseExercise(html, slug) {
  const out = {
    name: null,
    description: null,
    primaryMuscle: null,
    secondaryMuscles: [],
    equipment: null,
    difficulty: null,
    movement: null,
    benefits: [],
    instructions: [],
    commonMistakes: [],
  };

  // name ── <h1 class="...text-foreground...">NAME</h1>
  const h1m = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (h1m) out.name = decodeHTML(h1m[1]);

  // description ── first text-sm leading-relaxed text-muted-foreground <p> after </h1>
  const h1end = html.indexOf('</h1>');
  if (h1end > -1) {
    const window = html.slice(h1end, h1end + 400);
    const dm = window.match(/<p class="text-sm leading-relaxed text-muted-foreground">([^<]+)<\/p>/);
    if (dm) out.description = decodeHTML(dm[1]);
  }

  // primaryMuscle ── bg-secondary span after ">Primary</span>"
  const primIdx = html.indexOf('>Primary</span>');
  if (primIdx > -1) {
    const chunk = html.slice(primIdx, primIdx + 500);
    const m = chunk.match(/bg-secondary[^>]*>([^<]+)<\/span>/);
    if (m) out.primaryMuscle = MUSCLE_MAP[decodeHTML(m[1]).trim()] ?? null;
  }

  // secondaryMuscles ── data-slot="badge" spans after ">Secondary</span>"
  const secIdx = html.indexOf('>Secondary</span>');
  if (secIdx > -1) {
    const chunk = html.slice(secIdx, secIdx + 1200);
    const badgeRe = /data-slot="badge"[^>]*>([^<]+)<\/span>/g;
    let m;
    const seen = new Set();
    while ((m = badgeRe.exec(chunk)) !== null) {
      const name = decodeHTML(m[1]).trim();
      const id = MUSCLE_MAP[name];
      if (id && id !== out.primaryMuscle && !seen.has(id)) {
        seen.add(id);
        out.secondaryMuscles.push(id);
        if (out.secondaryMuscles.length >= 2) break;
      }
    }
  }

  // equipment / movement / difficulty ── label+value span pairs
  const equipM = html.match(/>Equipment<\/span><span[^>]*>([^<]+)<\/span>/);
  if (equipM) out.equipment = EQUIPMENT_MAP[decodeHTML(equipM[1]).trim()] ?? 'bodyweight';

  const moveM = html.match(/>Movement<\/span><span[^>]*>([^<]+)<\/span>/);
  if (moveM) out.movement = decodeHTML(moveM[1]).trim();

  const diffM = html.match(/>Difficulty<\/span><span[^>]*>([^<]+)<\/span>/);
  if (diffM) out.difficulty = decodeHTML(diffM[1]).trim().toLowerCase();

  // Section indices
  const gainIdx    = html.indexOf('ll gain</h2>');       // "What you'll gain"
  const stepIdx    = html.indexOf('Step-by-Step');
  const mistakeIdx = html.indexOf('Common Mistakes');

  // benefits ── text-sm leading-relaxed text-muted-foreground (no pt-0.5)
  if (gainIdx > -1) {
    const end = (stepIdx > gainIdx) ? stepIdx : gainIdx + 2500;
    out.benefits = extractParas(html.slice(gainIdx, end), 'text-sm leading-relaxed text-muted-foreground');
  }

  // instructions ── pt-0.5 text-sm leading-relaxed text-muted-foreground
  if (stepIdx > -1) {
    const end = (mistakeIdx > stepIdx) ? mistakeIdx : stepIdx + 6000;
    out.instructions = extractParas(html.slice(stepIdx, end), 'pt-0.5 text-sm leading-relaxed text-muted-foreground');
  }

  // commonMistakes ── bound by the </ul> that closes the mistakes list
  if (mistakeIdx > -1) {
    const ulOpen = html.indexOf('<ul', mistakeIdx);
    const ulClose = html.indexOf('</ul>', ulOpen > -1 ? ulOpen : mistakeIdx);
    const mistakeEnd = ulClose > -1 ? ulClose + 5 : mistakeIdx + 3500;
    out.commonMistakes = extractParas(html.slice(mistakeIdx, mistakeEnd), 'text-sm leading-relaxed text-muted-foreground');
  }

  return out;
}

function getRecordType(primaryMuscle, movement, equipment, name) {
  if (primaryMuscle === 'cardio') return 'cardio';
  if (movement && /duration|hold|isometric/i.test(movement)) return 'duration';
  if (movement && /carry/i.test(movement)) return 'duration';
  if (name && /plank|wall.?sit|\bhold\b/i.test(name)) return 'duration';
  if (equipment === 'bodyweight') return 'reps';
  return 'weight_reps';
}

// ── Fetch ─────────────────────────────────────────────────────────────────────

async function fetchWithRetry(url, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml',
        },
      });
      if (res.status === 404) return { ok: false, status: 404, html: null };
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { ok: true, status: res.status, html: await res.text() };
    } catch (err) {
      if (i === attempts - 1) return { ok: false, status: 0, html: null };
      await new Promise(r => setTimeout(r, 1200 * (i + 1)));
    }
  }
}

// ── Scraping loop ─────────────────────────────────────────────────────────────

const exercises = [];
const failed = [];

for (let i = 0; i < SLUGS.length; i += BATCH_SIZE) {
  const batch = SLUGS.slice(i, i + BATCH_SIZE);

  const results = await Promise.all(batch.map(async (slug) => {
    const url = `${BASE_URL}/${slug}`;
    const { ok, status, html } = await fetchWithRetry(url);

    if (!ok || !html) {
      console.error(`  [FAIL ${status}] ${slug}`);
      failed.push(slug);
      return {
        slug,
        name: slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
        description: null,
        primaryMuscle: null,
        secondaryMuscles: [],
        equipment: 'bodyweight',
        difficulty: null,
        movement: null,
        benefits: [],
        instructions: [],
        commonMistakes: [],
      };
    }

    const parsed = parseExercise(html, slug);
    const label = parsed.primaryMuscle ?? 'NO_MUSCLE';
    console.log(`  [${String(i + batch.indexOf(slug) + 1).padStart(3, ' ')}] ${slug} → ${label}`);
    return { slug, ...parsed };
  }));

  exercises.push(...results);

  if (i + BATCH_SIZE < SLUGS.length) {
    await new Promise(r => setTimeout(r, DELAY_MS));
  }
}

console.log(`\nDone. ${exercises.length} exercises scraped. ${failed.length} failed.`);
if (failed.length) console.log('Failed slugs:', failed);

// ── Output formatter ──────────────────────────────────────────────────────────

function esc(str) {
  if (str === null || str === undefined) return 'null';
  // Escape backslashes then single quotes
  return "'" + String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

function fmtArr(arr, pad) {
  if (!arr || arr.length === 0) return '[]';
  const lines = arr.map(s => `${pad}  ${esc(s)}`).join(',\n');
  return `[\n${lines}\n${pad}]`;
}

function fmtExercise(ex, idx) {
  const p = '    ';
  const rt = getRecordType(ex.primaryMuscle, ex.movement, ex.equipment, ex.name);
  const secStr = ex.secondaryMuscles.length === 0
    ? '[]'
    : `[${ex.secondaryMuscles.map(esc).join(', ')}]`;

  return `  {
    id: 'b${idx + 1}',
    name: ${esc(ex.name)},
    primaryMuscle: ${esc(ex.primaryMuscle)},
    secondaryMuscles: ${secStr},
    equipment: ${esc(ex.equipment)},
    recordType: ${esc(rt)},
    difficulty: ${esc(ex.difficulty)},
    movement: ${esc(ex.movement)},
    description: ${esc(ex.description)},
    benefits: ${fmtArr(ex.benefits, p)},
    instructions: ${fmtArr(ex.instructions, p)},
    commonMistakes: ${fmtArr(ex.commonMistakes, p)},
    mediaUrl: null,
    exerciseUrl: 'https://movekit.com/exercises/${ex.slug}',
    custom: false
  }`;
}

const exerciseBlock = exercises.map((ex, i) => fmtExercise(ex, i)).join(',\n');

const output = `/**
 * larofit-exercises.js — rebuilt from MoveKit library
 */

const MUSCLES_ALL = [
  'abs','back','biceps','chest','forearms',
  'glutes','shoulders','triceps','upper_legs','lower_legs','cardio'
];

const CATEGORIES = [
  { id:'all',        name:'All',         icon:'📚' },
  { id:'abs',        name:'Abs',         icon:'⭕' },
  { id:'back',       name:'Back',        icon:'🔙' },
  { id:'biceps',     name:'Biceps',      icon:'💪' },
  { id:'chest',      name:'Chest',       icon:'🏋️' },
  { id:'forearms',   name:'Forearms',    icon:'🤜' },
  { id:'glutes',     name:'Glutes',      icon:'🍑' },
  { id:'shoulders',  name:'Shoulders',   icon:'🔝' },
  { id:'triceps',    name:'Triceps',     icon:'💪' },
  { id:'upper_legs', name:'Upper Legs',  icon:'🦵' },
  { id:'lower_legs', name:'Lower Legs',  icon:'🦶' },
  { id:'cardio',     name:'Cardio',      icon:'🏃' },
];

const EQUIPMENT_IDS = [
  'bodyweight','bands','barbell','bench','cardio_machine',
  'dumbbells','exercise_ball','ez_bar','kettlebells','machine_cable'
];

const RECORD_TYPE_IDS = [
  'weight_reps','reps','reps_duration','duration','cardio'
];

const LAROFIT_EXERCISES = [
${exerciseBlock}
];

const EXERCISE_LIBRARY = LAROFIT_EXERCISES.reduce((lib, ex) => {
  const key = ex.primaryMuscle;
  if (!lib[key]) lib[key] = [];
  lib[key].push(ex);
  return lib;
}, {});
`;

writeFileSync(OUTPUT_PATH, output, 'utf8');
console.log(`\nWritten to ${OUTPUT_PATH}`);
console.log(`Total exercises: ${exercises.length}`);
