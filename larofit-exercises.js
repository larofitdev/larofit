/**
 * larofit-exercises.js
 * Single source of truth for all LaroFit exercise data.
 * Loaded by: builder.html, workout.html, programs.html
 *
 * Globals:
 *   MUSCLES_ALL        — 11 muscle group ids (used for validation)
 *   CATEGORIES         — 11 muscle group metadata (id, name, icon)
 *   LAROFIT_EXERCISES  — flat array of all built-in exercises
 *   EXERCISE_LIBRARY   — same exercises keyed by primaryMuscle group id
 *
 * Exercise object shape:
 * {
 *   id,                  // string — 'b1', 'b2', etc.
 *   name,                // string
 *   primaryMuscle,       // string — one of MUSCLE_IDS
 *   secondaryMuscles,    // string[] — up to 2, from MUSCLE_IDS
 *   equipment,           // string — one of EQUIPMENT_IDS
 *   recordType,          // string — one of RECORD_TYPE_IDS
 *   exerciseUrl,         // string | null
 *   instructions,        // string | null
 *   custom,              // boolean — always false for built-in
 * }
 *
 * Valid muscle ids:
 *   abs, back, biceps, chest, forearms, glutes,
 *   shoulders, triceps, upper_legs, lower_legs, cardio
 *
 * Valid equipment ids:
 *   bodyweight, bands, barbell, bench, cardio_machine,
 *   dumbbells, exercise_ball, ez_bar, kettlebells, machine_cable
 *
 * Valid recordType ids:
 *   weight_reps, reps, reps_duration, duration, cardio
 */

// ── MUSCLE GROUPS ────────────────────────────────────────────────────────────

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

// ── EQUIPMENT IDS ────────────────────────────────────────────────────────────

const EQUIPMENT_IDS = [
  'bodyweight','bands','barbell','bench','cardio_machine',
  'dumbbells','exercise_ball','ez_bar','kettlebells','machine_cable'
];

// ── RECORD TYPE IDS ──────────────────────────────────────────────────────────

const RECORD_TYPE_IDS = [
  'weight_reps','reps','reps_duration','duration','cardio'
];

// ── MASTER EXERCISE LIST ─────────────────────────────────────────────────────
// Built-in exercises. New field structure as of May 2026.
// primaryMuscle  — single muscle group id
// secondaryMuscles — array of up to 2 muscle group ids
// equipment      — single equipment id
// recordType     — how this exercise is tracked

const LAROFIT_EXERCISES = [

  // ── CHEST ─────────────────────────────────────────────────────────────────
  { id:'b1',  name:'Barbell Bench Press',         primaryMuscle:'chest',      secondaryMuscles:['triceps','shoulders'],  equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Lie flat on bench. Grip bar slightly wider than shoulder width. Lower to chest, press up explosively.', custom:false },
  { id:'b2',  name:'Dumbbell Bench Press',        primaryMuscle:'chest',      secondaryMuscles:['triceps','shoulders'],  equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Lie flat on bench. Press dumbbells up from chest level, slight arc inward at top.', custom:false },
  { id:'b3',  name:'Incline Barbell Press',       primaryMuscle:'chest',      secondaryMuscles:['shoulders','triceps'],  equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Set bench to 30-45 degrees. Press bar from upper chest upward.', custom:false },
  { id:'b4',  name:'Incline Dumbbell Press',      primaryMuscle:'chest',      secondaryMuscles:['shoulders','triceps'],  equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Set bench to 30-45 degrees. Press dumbbells from upper chest level.', custom:false },
  { id:'b5',  name:'Decline Barbell Press',       primaryMuscle:'chest',      secondaryMuscles:['triceps'],              equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Set bench to slight decline. Targets lower chest.', custom:false },
  { id:'b6',  name:'Dumbbell Flyes',              primaryMuscle:'chest',      secondaryMuscles:['shoulders'],            equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Lie flat. Lower dumbbells in wide arc, feel chest stretch, bring back together.', custom:false },
  { id:'b7',  name:'Incline Dumbbell Flyes',      primaryMuscle:'chest',      secondaryMuscles:['shoulders'],            equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Set bench to 30 degrees. Perform fly motion targeting upper chest.', custom:false },
  { id:'b8',  name:'Cable Chest Fly',             primaryMuscle:'chest',      secondaryMuscles:['shoulders'],            equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Set cables at shoulder height. Bring handles together in front of chest with slight bend in elbows.', custom:false },
  { id:'b9',  name:'High Cable Fly',              primaryMuscle:'chest',      secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Set cables high. Pull handles down and together, targeting lower chest.', custom:false },
  { id:'b10', name:'Machine Chest Press',         primaryMuscle:'chest',      secondaryMuscles:['triceps'],              equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Adjust seat so handles align with mid-chest. Press forward until arms extended.', custom:false },
  { id:'b11', name:'Machine Pec Deck Fly',        primaryMuscle:'chest',      secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Sit upright. Bring arms together in front squeezing chest at peak.', custom:false },
  { id:'b12', name:'Push-Up',                     primaryMuscle:'chest',      secondaryMuscles:['triceps','shoulders'],  equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Hands slightly wider than shoulders. Lower chest to floor, press back up. Keep core tight.', custom:false },
  { id:'b13', name:'Wide Push-Up',                primaryMuscle:'chest',      secondaryMuscles:['shoulders'],            equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Hands wider than shoulder width to emphasise chest.', custom:false },
  { id:'b14', name:'Decline Push-Up',             primaryMuscle:'chest',      secondaryMuscles:['triceps'],              equipment:'bench',         recordType:'reps',        exerciseUrl:null, instructions:'Feet elevated on bench. Targets upper chest.', custom:false },
  { id:'b15', name:'Dips (Chest Focus)',          primaryMuscle:'chest',      secondaryMuscles:['triceps'],              equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Lean forward at bars to target chest over triceps. Lower until shoulders below elbows.', custom:false },

  // ── BACK ──────────────────────────────────────────────────────────────────
  { id:'b16', name:'Barbell Deadlift',            primaryMuscle:'back',       secondaryMuscles:['glutes','upper_legs'],  equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Hip-width stance. Hinge at hips, grip bar, drive through floor keeping back flat.', custom:false },
  { id:'b17', name:'Romanian Deadlift',           primaryMuscle:'back',       secondaryMuscles:['glutes','upper_legs'],  equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Soft knee bend. Hinge at hips lowering bar along legs, feel hamstring stretch, drive hips forward.', custom:false },
  { id:'b18', name:'Barbell Bent-Over Row',       primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Hinge forward 45 degrees. Pull bar to lower chest, squeeze shoulder blades.', custom:false },
  { id:'b19', name:'Pendlay Row',                 primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Bar starts on floor each rep. Torso parallel to floor. Explosive pull to chest.', custom:false },
  { id:'b20', name:'Single-Arm Dumbbell Row',     primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Brace on bench. Pull dumbbell to hip, lead with elbow, keep torso still.', custom:false },
  { id:'b21', name:'Dumbbell Bent-Over Row',      primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hinge forward. Pull both dumbbells to sides simultaneously.', custom:false },
  { id:'b22', name:'Pull-Up',                     primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Overhand grip. Pull chest to bar driving elbows down. Full hang between reps.', custom:false },
  { id:'b23', name:'Chin-Up',                     primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Underhand grip. Pull chest to bar. More bicep involvement than pull-up.', custom:false },
  { id:'b24', name:'Lat Pulldown',                primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Grip wide. Pull bar to upper chest driving elbows down, slight lean back.', custom:false },
  { id:'b25', name:'Close-Grip Lat Pulldown',     primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Neutral grip attachment. Pull to chest emphasising lower lats.', custom:false },
  { id:'b26', name:'Seated Cable Row',            primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Sit upright. Pull handle to abdomen squeezing shoulder blades together.', custom:false },
  { id:'b27', name:'Cable Straight-Arm Pulldown', primaryMuscle:'back',       secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Stand facing cable. With straight arms pull bar down to thighs feeling lat contraction.', custom:false },
  { id:'b28', name:'Machine Seated Row',          primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Chest against pad. Pull handles to sides squeezing back.', custom:false },
  { id:'b29', name:'T-Bar Row',                   primaryMuscle:'back',       secondaryMuscles:['biceps'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Straddle bar. Pull to chest keeping back flat and chest up.', custom:false },
  { id:'b30', name:'Dumbbell Pullover',           primaryMuscle:'back',       secondaryMuscles:['chest'],                equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Lie across bench. Lower dumbbell behind head in arc, return over chest.', custom:false },

  // ── SHOULDERS ─────────────────────────────────────────────────────────────
  { id:'b31', name:'Barbell Overhead Press',      primaryMuscle:'shoulders',  secondaryMuscles:['triceps'],              equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Stand or sit. Press bar from shoulder height overhead. Avoid excessive back arch.', custom:false },
  { id:'b32', name:'Dumbbell Shoulder Press',     primaryMuscle:'shoulders',  secondaryMuscles:['triceps'],              equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Press dumbbells from ear level overhead, slight arc inward at top.', custom:false },
  { id:'b33', name:'Arnold Press',                primaryMuscle:'shoulders',  secondaryMuscles:['triceps'],              equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Start with palms facing you. Press up while rotating palms outward.', custom:false },
  { id:'b34', name:'Dumbbell Lateral Raise',      primaryMuscle:'shoulders',  secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Slight bend in elbows. Raise arms to shoulder height leading with pinkies.', custom:false },
  { id:'b35', name:'Cable Lateral Raise',         primaryMuscle:'shoulders',  secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Single cable at hip height. Raise arm across body to shoulder height.', custom:false },
  { id:'b36', name:'Dumbbell Front Raise',        primaryMuscle:'shoulders',  secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Raise dumbbells alternating or together to shoulder height in front.', custom:false },
  { id:'b37', name:'Barbell Front Raise',         primaryMuscle:'shoulders',  secondaryMuscles:[],                       equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Raise bar to shoulder height keeping arms straight.', custom:false },
  { id:'b38', name:'Dumbbell Rear Delt Fly',      primaryMuscle:'shoulders',  secondaryMuscles:['back'],                 equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hinge forward. Raise dumbbells to sides leading with elbows.', custom:false },
  { id:'b39', name:'Cable Face Pull',             primaryMuscle:'shoulders',  secondaryMuscles:['back'],                 equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Cable at face height. Pull rope to forehead, flare elbows high.', custom:false },
  { id:'b40', name:'Machine Shoulder Press',      primaryMuscle:'shoulders',  secondaryMuscles:['triceps'],              equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Adjust seat. Press handles overhead.', custom:false },
  { id:'b41', name:'Barbell Upright Row',         primaryMuscle:'shoulders',  secondaryMuscles:['biceps'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Pull bar up along body to chin, elbows flare out.', custom:false },
  { id:'b42', name:'Shrugs',                      primaryMuscle:'shoulders',  secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hold dumbbells at sides. Shrug shoulders straight up, hold briefly, release.', custom:false },
  { id:'b43', name:'Barbell Shrugs',              primaryMuscle:'shoulders',  secondaryMuscles:[],                       equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Hold bar in front. Shrug straight up avoiding rolling motion.', custom:false },

  // ── BICEPS ────────────────────────────────────────────────────────────────
  { id:'b44', name:'Barbell Curl',                primaryMuscle:'biceps',     secondaryMuscles:['forearms'],             equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Elbows at sides. Curl bar to shoulder height squeezing at top.', custom:false },
  { id:'b45', name:'EZ Bar Curl',                 primaryMuscle:'biceps',     secondaryMuscles:['forearms'],             equipment:'ez_bar',        recordType:'weight_reps', exerciseUrl:null, instructions:'Neutral grip reduces wrist strain. Curl to shoulder height.', custom:false },
  { id:'b46', name:'Dumbbell Curl',               primaryMuscle:'biceps',     secondaryMuscles:['forearms'],             equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Alternate or simultaneous. Supinate wrist as you curl.', custom:false },
  { id:'b47', name:'Hammer Curl',                 primaryMuscle:'biceps',     secondaryMuscles:['forearms'],             equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Neutral (hammer) grip throughout. Targets brachialis.', custom:false },
  { id:'b48', name:'Incline Dumbbell Curl',       primaryMuscle:'biceps',     secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Lie on incline bench. Arms hang behind body. Full stretch at bottom.', custom:false },
  { id:'b49', name:'Concentration Curl',          primaryMuscle:'biceps',     secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Seated. Brace upper arm on inner thigh. Curl with full range.', custom:false },
  { id:'b50', name:'Cable Curl',                  primaryMuscle:'biceps',     secondaryMuscles:['forearms'],             equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Low pulley. Curl bar or handle to shoulder height.', custom:false },
  { id:'b51', name:'Preacher Curl',               primaryMuscle:'biceps',     secondaryMuscles:[],                       equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Upper arms braced on preacher bench. Full range of motion.', custom:false },
  { id:'b52', name:'EZ Bar Preacher Curl',        primaryMuscle:'biceps',     secondaryMuscles:[],                       equipment:'ez_bar',        recordType:'weight_reps', exerciseUrl:null, instructions:'EZ bar on preacher bench. Lower fully, curl to peak contraction.', custom:false },
  { id:'b53', name:'Cable Rope Hammer Curl',      primaryMuscle:'biceps',     secondaryMuscles:['forearms'],             equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Rope attachment low pulley. Neutral grip curl.', custom:false },
  { id:'b54', name:'Chin-Up (Bicep Focus)',       primaryMuscle:'biceps',     secondaryMuscles:['back'],                 equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Supinated grip. Pull chest to bar emphasising bicep contraction.', custom:false },

  // ── TRICEPS ───────────────────────────────────────────────────────────────
  { id:'b55', name:'Close-Grip Bench Press',      primaryMuscle:'triceps',    secondaryMuscles:['chest','shoulders'],    equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Hands shoulder-width on bar. Lower to chest, press up keeping elbows tucked.', custom:false },
  { id:'b56', name:'Skull Crusher',               primaryMuscle:'triceps',    secondaryMuscles:[],                       equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Lie flat. Lower bar to forehead bending only at elbows, extend back up.', custom:false },
  { id:'b57', name:'EZ Bar Skull Crusher',        primaryMuscle:'triceps',    secondaryMuscles:[],                       equipment:'ez_bar',        recordType:'weight_reps', exerciseUrl:null, instructions:'EZ bar reduces wrist strain. Lower to forehead, extend fully.', custom:false },
  { id:'b58', name:'Dumbbell Overhead Tricep Extension', primaryMuscle:'triceps', secondaryMuscles:[],                   equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hold dumbbell overhead with both hands. Lower behind head, extend up.', custom:false },
  { id:'b59', name:'Cable Rope Pushdown',         primaryMuscle:'triceps',    secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Rope attachment overhead pulley. Push down and slightly out at bottom.', custom:false },
  { id:'b60', name:'Cable Bar Pushdown',          primaryMuscle:'triceps',    secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Straight bar overhead pulley. Push down keeping elbows at sides.', custom:false },
  { id:'b61', name:'Overhead Cable Tricep Extension', primaryMuscle:'triceps', secondaryMuscles:[],                      equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Rope from low pulley. Extend arms overhead.', custom:false },
  { id:'b62', name:'Tricep Dips',                 primaryMuscle:'triceps',    secondaryMuscles:['chest','shoulders'],    equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Upright torso at bars to target triceps. Lower until 90 degree elbow bend.', custom:false },
  { id:'b63', name:'Bench Dip',                   primaryMuscle:'triceps',    secondaryMuscles:[],                       equipment:'bench',         recordType:'reps',        exerciseUrl:null, instructions:'Hands on bench behind you. Lower hips toward floor, press back up.', custom:false },
  { id:'b64', name:'Diamond Push-Up',             primaryMuscle:'triceps',    secondaryMuscles:['chest'],                equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Hands form diamond shape under chest. Lower and press.', custom:false },
  { id:'b65', name:'Kickback',                    primaryMuscle:'triceps',    secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hinge forward. Upper arm parallel to floor. Extend forearm back.', custom:false },

  // ── ABS ───────────────────────────────────────────────────────────────────
  { id:'b66', name:'Crunch',                      primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Lie on back. Curl shoulders off floor contracting abs. Do not pull neck.', custom:false },
  { id:'b67', name:'Cable Crunch',                primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Kneel at cable. Crunch elbows to knees against resistance.', custom:false },
  { id:'b68', name:'Decline Crunch',              primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bench',         recordType:'reps',        exerciseUrl:null, instructions:'Feet secured on decline bench. Crunch up with increased range of motion.', custom:false },
  { id:'b69', name:'Plank',                       primaryMuscle:'abs',        secondaryMuscles:['shoulders'],            equipment:'bodyweight',    recordType:'duration',    exerciseUrl:null, instructions:'Forearms on floor. Body straight from head to heels. Hold.', custom:false },
  { id:'b70', name:'Side Plank',                  primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'duration',    exerciseUrl:null, instructions:'One forearm on floor. Body straight sideways. Hold each side.', custom:false },
  { id:'b71', name:'Hanging Leg Raise',           primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Hang from bar. Raise legs to parallel or higher, lower controlled.', custom:false },
  { id:'b72', name:'Captain\'s Chair Leg Raise',  primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'machine_cable', recordType:'reps',        exerciseUrl:null, instructions:'Arms on pads. Raise knees to chest or legs to parallel.', custom:false },
  { id:'b73', name:'Ab Wheel Rollout',            primaryMuscle:'abs',        secondaryMuscles:['shoulders','back'],     equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Kneel. Roll wheel forward until body is low, roll back engaging core.', custom:false },
  { id:'b74', name:'Russian Twist',               primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Sit with knees bent, lean back slightly. Rotate torso side to side.', custom:false },
  { id:'b75', name:'Bicycle Crunch',              primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Alternate elbow to opposite knee while extending other leg.', custom:false },
  { id:'b76', name:'Leg Raise',                   primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Lie flat. Raise straight legs to 90 degrees, lower slowly.', custom:false },
  { id:'b77', name:'Dead Bug',                    primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Lie on back arms up. Lower opposite arm and leg simultaneously keeping back flat.', custom:false },
  { id:'b78', name:'Mountain Climber',            primaryMuscle:'abs',        secondaryMuscles:['shoulders'],            equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Push-up position. Drive knees to chest alternating rapidly.', custom:false },
  { id:'b79', name:'Sit-Up',                      primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Full range crunch bringing torso upright. Control on the way down.', custom:false },
  { id:'b80', name:'Decline Sit-Up',              primaryMuscle:'abs',        secondaryMuscles:[],                       equipment:'bench',         recordType:'reps',        exerciseUrl:null, instructions:'Feet secured on decline bench. Full sit-up with extended range.', custom:false },

  // ── GLUTES ────────────────────────────────────────────────────────────────
  { id:'b81', name:'Barbell Hip Thrust',          primaryMuscle:'glutes',     secondaryMuscles:['upper_legs'],           equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Upper back on bench. Bar across hips. Drive hips up squeezing glutes at top.', custom:false },
  { id:'b82', name:'Dumbbell Hip Thrust',         primaryMuscle:'glutes',     secondaryMuscles:['upper_legs'],           equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Upper back on bench. Dumbbell across hips. Drive up squeezing at top.', custom:false },
  { id:'b83', name:'Glute Bridge',                primaryMuscle:'glutes',     secondaryMuscles:['upper_legs'],           equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Lie on back, feet flat. Drive hips up squeezing glutes. Lower controlled.', custom:false },
  { id:'b84', name:'Cable Kickback',              primaryMuscle:'glutes',     secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Ankle strap on low pulley. Kick leg back extending at hip.', custom:false },
  { id:'b85', name:'Machine Hip Abductor',        primaryMuscle:'glutes',     secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Seated. Push legs outward against pads.', custom:false },
  { id:'b86', name:'Donkey Kick',                 primaryMuscle:'glutes',     secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'On all fours. Drive one knee up and back extending at hip.', custom:false },
  { id:'b87', name:'Banded Glute Kickback',       primaryMuscle:'glutes',     secondaryMuscles:[],                       equipment:'bands',         recordType:'reps',        exerciseUrl:null, instructions:'Band around ankles. Kick one leg back extending hip.', custom:false },
  { id:'b88', name:'Sumo Deadlift',               primaryMuscle:'glutes',     secondaryMuscles:['upper_legs','back'],    equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Wide stance toes out. Pull bar from floor targeting glutes and inner thighs.', custom:false },

  // ── UPPER LEGS ────────────────────────────────────────────────────────────
  { id:'b89', name:'Barbell Back Squat',          primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Bar on upper traps. Squat to parallel or below keeping chest up.', custom:false },
  { id:'b90', name:'Barbell Front Squat',         primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Bar on front delts. Upright torso squat emphasising quads.', custom:false },
  { id:'b91', name:'Goblet Squat',                primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hold dumbbell at chest. Squat deep with elbows tracking inside knees.', custom:false },
  { id:'b92', name:'Dumbbell Lunge',              primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Step forward lowering back knee toward floor. Return and alternate.', custom:false },
  { id:'b93', name:'Barbell Lunge',               primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Bar on back. Step forward into lunge position.', custom:false },
  { id:'b94', name:'Bulgarian Split Squat',       primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Rear foot elevated on bench. Lower front knee toward floor.', custom:false },
  { id:'b95', name:'Leg Press',                   primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Feet shoulder width on platform. Press until legs nearly straight.', custom:false },
  { id:'b96', name:'Hack Squat',                  primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Shoulders under pads. Squat deep, drive through heels to top.', custom:false },
  { id:'b97', name:'Machine Leg Extension',       primaryMuscle:'upper_legs', secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Sit with pad on lower shins. Extend legs fully, hold briefly, lower.', custom:false },
  { id:'b98', name:'Machine Leg Curl',            primaryMuscle:'upper_legs', secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Lie face down. Curl heels to glutes against resistance.', custom:false },
  { id:'b99', name:'Seated Leg Curl',             primaryMuscle:'upper_legs', secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Seated machine. Drive heels down and back.', custom:false },
  { id:'b100',name:'Kettlebell Swing',            primaryMuscle:'upper_legs', secondaryMuscles:['glutes','back'],        equipment:'kettlebells',   recordType:'weight_reps', exerciseUrl:null, instructions:'Hinge at hips. Drive hips forward swinging kettlebell to shoulder height.', custom:false },
  { id:'b101',name:'Step-Up',                     primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hold dumbbells. Step onto box driving through heel. Alternate legs.', custom:false },
  { id:'b102',name:'Bodyweight Squat',            primaryMuscle:'upper_legs', secondaryMuscles:['glutes'],               equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Feet shoulder-width. Squat to parallel keeping chest up.', custom:false },
  { id:'b103',name:'Wall Sit',                    primaryMuscle:'upper_legs', secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'duration',    exerciseUrl:null, instructions:'Back against wall. Hold 90 degree knee bend position.', custom:false },

  // ── LOWER LEGS ────────────────────────────────────────────────────────────
  { id:'b104',name:'Standing Calf Raise',         primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Rise onto toes fully. Lower slowly for full stretch at bottom.', custom:false },
  { id:'b105',name:'Seated Calf Raise',           primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Knees at 90 degrees. Rise up, lower for full stretch. Targets soleus.', custom:false },
  { id:'b106',name:'Dumbbell Calf Raise',         primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Hold dumbbells, one foot on edge of step. Full range each rep.', custom:false },
  { id:'b107',name:'Leg Press Calf Raise',        primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'machine_cable', recordType:'weight_reps', exerciseUrl:null, instructions:'Feet at bottom of leg press platform. Press through toes.', custom:false },
  { id:'b108',name:'Bodyweight Calf Raise',       primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Stand on step edge. Full range rise and lower.', custom:false },
  { id:'b109',name:'Single-Leg Calf Raise',       primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'One foot on step. Full range. Use wall for balance.', custom:false },
  { id:'b110',name:'Tibialis Raise',              primaryMuscle:'lower_legs', secondaryMuscles:[],                       equipment:'bodyweight',    recordType:'reps',        exerciseUrl:null, instructions:'Heels on floor, back against wall. Raise toes up as high as possible.', custom:false },

  // ── FOREARMS ──────────────────────────────────────────────────────────────
  { id:'b111',name:'Wrist Curl',                  primaryMuscle:'forearms',   secondaryMuscles:[],                       equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Forearms on bench, palms up. Curl wrists upward.', custom:false },
  { id:'b112',name:'Reverse Wrist Curl',          primaryMuscle:'forearms',   secondaryMuscles:[],                       equipment:'barbell',       recordType:'weight_reps', exerciseUrl:null, instructions:'Forearms on bench, palms down. Curl wrists upward.', custom:false },
  { id:'b113',name:'Dumbbell Wrist Curl',         primaryMuscle:'forearms',   secondaryMuscles:[],                       equipment:'dumbbells',     recordType:'weight_reps', exerciseUrl:null, instructions:'Forearm on thigh, palm up. Curl wrist through full range.', custom:false },
  { id:'b114',name:'Farmer\'s Carry',             primaryMuscle:'forearms',   secondaryMuscles:['shoulders','back'],     equipment:'dumbbells',     recordType:'duration',    exerciseUrl:null, instructions:'Hold heavy dumbbells at sides. Walk maintaining upright posture.', custom:false },
  { id:'b115',name:'Dead Hang',                   primaryMuscle:'forearms',   secondaryMuscles:['back','shoulders'],     equipment:'bodyweight',    recordType:'duration',    exerciseUrl:null, instructions:'Hang from bar with full grip. Hold as long as possible.', custom:false },
  { id:'b116',name:'Plate Pinch',                 primaryMuscle:'forearms',   secondaryMuscles:[],                       equipment:'barbell',       recordType:'duration',    exerciseUrl:null, instructions:'Pinch two weight plates together between fingers and thumb. Hold.', custom:false },

  // ── CARDIO ────────────────────────────────────────────────────────────────
  { id:'b117',name:'Treadmill Run',               primaryMuscle:'cardio',     secondaryMuscles:['upper_legs','lower_legs'], equipment:'cardio_machine', recordType:'cardio',   exerciseUrl:null, instructions:'Set speed and incline. Maintain consistent pace.', custom:false },
  { id:'b118',name:'Treadmill Walk (Incline)',     primaryMuscle:'cardio',     secondaryMuscles:['upper_legs','glutes'],  equipment:'cardio_machine', recordType:'cardio',    exerciseUrl:null, instructions:'Set incline 8-15%. Walk at brisk pace.', custom:false },
  { id:'b119',name:'Stationary Bike',             primaryMuscle:'cardio',     secondaryMuscles:['upper_legs'],           equipment:'cardio_machine', recordType:'cardio',    exerciseUrl:null, instructions:'Adjust seat height. Pedal at target heart rate zone.', custom:false },
  { id:'b120',name:'Rowing Machine',              primaryMuscle:'cardio',     secondaryMuscles:['back','upper_legs'],    equipment:'cardio_machine', recordType:'cardio',    exerciseUrl:null, instructions:'Drive legs first, lean back, then pull handle to abdomen.', custom:false },
  { id:'b121',name:'Elliptical',                  primaryMuscle:'cardio',     secondaryMuscles:['upper_legs'],           equipment:'cardio_machine', recordType:'cardio',    exerciseUrl:null, instructions:'Low impact. Maintain upright posture, push and pull handles.', custom:false },
  { id:'b122',name:'Stairmaster',                 primaryMuscle:'cardio',     secondaryMuscles:['upper_legs','glutes'],  equipment:'cardio_machine', recordType:'cardio',    exerciseUrl:null, instructions:'Set step rate. Avoid leaning on rails.', custom:false },
  { id:'b123',name:'Jump Rope',                   primaryMuscle:'cardio',     secondaryMuscles:['lower_legs','shoulders'], equipment:'bodyweight',  recordType:'reps_duration', exerciseUrl:null, instructions:'Keep elbows close to sides. Wrists rotate rope.', custom:false },
  { id:'b124',name:'Burpee',                      primaryMuscle:'cardio',     secondaryMuscles:['chest','upper_legs'],   equipment:'bodyweight',    recordType:'reps',       exerciseUrl:null, instructions:'Squat to floor, jump feet back, push-up, jump feet forward, jump up.', custom:false },
  { id:'b125',name:'Box Jump',                    primaryMuscle:'cardio',     secondaryMuscles:['upper_legs','glutes'],  equipment:'bodyweight',    recordType:'reps',       exerciseUrl:null, instructions:'Explosive jump onto box. Land softly with bent knees. Step down.', custom:false },
  { id:'b126',name:'Battle Ropes',                primaryMuscle:'cardio',     secondaryMuscles:['shoulders','back'],     equipment:'bands',         recordType:'duration',   exerciseUrl:null, instructions:'Alternate or simultaneous wave motions. Maintain athletic stance.', custom:false },
  { id:'b127',name:'Sled Push',                   primaryMuscle:'cardio',     secondaryMuscles:['upper_legs','glutes'],  equipment:'bodyweight',    recordType:'duration',   exerciseUrl:null, instructions:'Drive forward from hips pushing sled. Stay low and powerful.', custom:false },

];

// ── EXERCISE LIBRARY (keyed by primaryMuscle) ────────────────────────────────
// Groups exercises for quick access by muscle group.

const EXERCISE_LIBRARY = LAROFIT_EXERCISES.reduce((lib, ex) => {
  const key = ex.primaryMuscle;
  if (!lib[key]) lib[key] = [];
  lib[key].push(ex);
  return lib;
}, {});
