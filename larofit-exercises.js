/**
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
  {
    id: 'b1',
    name: 'Abdominals Stretch Variation Four',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Mobility',
    description: 'A floor-based ab stretch in a cobra-style position that opens the entire front of the core through spinal extension.',
    benefits: [
      'Opens the entire front of the core through deep spinal extension.',
      'Releases hip flexor tightness from sitting or running.',
      'Improves overhead and bench-press positioning by restoring thoracic mobility.'
    ],
    instructions: [
      'Lie face down on the floor with your legs extended behind you and your palms flat under your shoulders.',
      'Press through your hands to lift your chest off the floor, keeping your hips and thighs grounded.',
      'Pull your shoulders down and away from your ears to open the chest and deepen the stretch through the abs.',
      'Hold the lifted position for 15 to 30 seconds, breathing slowly and letting the stretch settle.',
      'Lower your torso back down with control, never letting your chest drop suddenly to the floor.',
      'Repeat for 3 to 4 rounds, going slightly higher each time as your body warms up.'
    ],
    commonMistakes: [
      'Shrugging the shoulders up to the ears, which compresses the neck and limits how far the chest can open.',
      'Lifting the hips off the floor early, which removes the stretch from the abdominal wall.',
      'Holding the breath through the position rather than breathing deeply into the belly to deepen the release.',
      'Forcing maximum extension on the first rep — the body needs a few warm-up rounds before deeper range is safe.'
    ],
    mediaUrl: 'https://media.larofit.com/abdominals-stretch-variation-four.mp4',
    exerciseUrl: 'https://movekit.com/exercises/abdominals-stretch-variation-four',
    custom: false
  },
  {
    id: 'b2',
    name: 'Abdominals Stretch Variation One',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Mobility',
    description: 'A controlled abdominal stretch that opens the front of the torso and resets posture after heavy core work.',
    benefits: [
      'Releases tension in the front of the core after heavy ab training.',
      'Opens up the chest and improves overhead posture.',
      'Resets the breath and prepares the body for the next exercise.'
    ],
    instructions: [
      'Start standing tall with your feet hip-width apart and your hands resting lightly on your lower back for support.',
      'Press your hips gently forward and lift your chest up toward the ceiling without forcing the bend.',
      'Drop your gaze slightly back, opening through the chest and front of the abs as you breathe deeply.',
      'Hold the position for 15 to 30 seconds, breathing into your belly and letting the stretch deepen on each exhale.',
      'Slowly return to standing by re-engaging your core and tucking your tailbone under.',
      'Repeat for 2 to 3 rounds, easing further into the stretch each time as your body warms up.'
    ],
    commonMistakes: [
      'Forcing the back bend with your shoulders instead of letting the chest lead — this strains the lower back without stretching the abs.',
      'Holding your breath through the stretch, which tightens the core and works against the lengthening you\'re after.',
      'Rushing in and out of the position rather than easing in slowly — the stretch needs time under tension to release.',
      'Dropping the head too far back, putting needless pressure on the neck instead of the abdominal wall.'
    ],
    mediaUrl: 'https://media.larofit.com/abdominals-stretch-variation-one.mp4',
    exerciseUrl: 'https://movekit.com/exercises/abdominals-stretch-variation-one',
    custom: false
  },
  {
    id: 'b3',
    name: 'Abdominals Stretch Variation Three',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Mobility',
    description: 'An ab stretch that combines extension and rotation to release both the rectus abdominis and the obliques.',
    benefits: [
      'Lengthens both the rectus abdominis and the obliques in a single position.',
      'Improves trunk mobility for rotational sports and complex lifts.',
      'Counters the postural compression of long days at a desk.'
    ],
    instructions: [
      'Start in a kneeling position with your hips stacked over your knees and your hands resting on your hips.',
      'Press your hips forward as you arc your torso back and slightly to one side, opening the front and side of the core.',
      'Keep your gaze soft and let the chest lead the movement — avoid letting the head drop too far back.',
      'Hold the position for 15 to 30 seconds, breathing into the stretch rather than holding the breath.',
      'Return to upright with control, then repeat the bend toward the opposite side.',
      'Complete 2 to 3 rounds per side, deepening the rotation gradually as your tissues warm up.'
    ],
    commonMistakes: [
      'Collapsing into the lower back instead of leading with the chest — the lift should come from the upper torso.',
      'Squeezing the glutes too hard during the bend, which tilts the pelvis and shortens the stretch on the abs.',
      'Letting the head crank back at the end of the rotation, putting unneeded strain on the cervical spine.',
      'Skipping the side-to-side variation and only bending straight back, missing the oblique component entirely.'
    ],
    mediaUrl: 'https://media.larofit.com/abdominals-stretch-variation-three.mp4',
    exerciseUrl: 'https://movekit.com/exercises/abdominals-stretch-variation-three',
    custom: false
  },
  {
    id: 'b4',
    name: 'Abdominals Stretch Variation Two',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Mobility',
    description: 'An abdominal stretch with a side-bend element that opens both the rectus abdominis and the obliques.',
    benefits: [
      'Stretches the obliques, which most core training never reaches.',
      'Improves rotational range of motion for sports and lifts.',
      'Decompresses the side body after long sitting or repeated bending.'
    ],
    instructions: [
      'Start standing with feet shoulder-width apart and your right arm reaching straight up overhead.',
      'Bend your torso gently to the left, sliding your left hand down your thigh as your right arm arcs over.',
      'Keep both hips facing forward — let the stretch travel through your obliques and the side of your waist.',
      'Hold for 15 to 30 seconds, breathing slowly and lengthening on each exhale rather than forcing depth.',
      'Return to upright with control, then switch sides and repeat with the left arm overhead.',
      'Complete 2 to 3 rounds per side, increasing the lean gradually as the obliques warm up.'
    ],
    commonMistakes: [
      'Letting the hips swing out as you lean — this kills the oblique stretch and shifts load to the lower back.',
      'Twisting the torso forward or back instead of bending purely sideways, which dulls the side-body lengthening.',
      'Forcing depth in the first few seconds rather than letting the breath ease you deeper over time.',
      'Tensing the shoulder of the raised arm — the arm should reach long but stay relaxed at the trap.'
    ],
    mediaUrl: 'https://media.larofit.com/abdominals-stretch-variation-two.mp4',
    exerciseUrl: 'https://movekit.com/exercises/abdominals-stretch-variation-two',
    custom: false
  },
  {
    id: 'b5',
    name: 'Band Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing biceps curl using a resistance band — same movement pattern as a dumbbell curl, with progressive tension through the rep.',
    benefits: [
      'Builds biceps size and strength without a gym or weights.',
      'Trains a stronger top-end contraction thanks to the band\'s progressive resistance.',
      'Travel- and home-friendly — works anywhere with a single band.'
    ],
    instructions: [
      'Stand on the middle of the band with your feet shoulder-width apart, holding one handle in each hand at your sides.',
      'Keep your elbows tucked into your ribs and your palms facing forward at the bottom of the rep.',
      'Curl both hands up toward your shoulders by squeezing the biceps, keeping the elbows pinned in place.',
      'Pause briefly at the top with the biceps fully contracted, feeling the band\'s tension at peak resistance.',
      'Lower your hands back down with control over a 2 to 3 second eccentric, fighting the band on the way down.',
      'Repeat for 10 to 15 reps, focusing on the squeeze at the top rather than the speed of the movement.'
    ],
    commonMistakes: [
      'Letting the elbows drift forward as you curl, which turns the movement into a half-rep front raise.',
      'Standing on too narrow a section of the band, which makes the tension uneven between the two arms.',
      'Rushing the eccentric and letting the band snap your hands back down — you lose half the time-under-tension.',
      'Leaning back to swing the weight up, which shifts work from the biceps to momentum and the lower back.'
    ],
    mediaUrl: 'https://media.larofit.com/band-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-curl',
    custom: false
  },
  {
    id: 'b6',
    name: 'Band High Face Pull',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['back'],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A high-anchor band pull to the face that builds rear-delt strength and balances out heavy pressing work.',
    benefits: [
      'Strengthens the rear delts and upper back to balance out heavy pressing.',
      'Improves posture and shoulder-blade control after long days at a screen.',
      'Adds a low-impact prehab piece that works anywhere with a band.'
    ],
    instructions: [
      'Anchor a band at slightly above eye level and grip both ends with your palms facing the floor.',
      'Step back until the band has tension at full arm extension and stand tall with your feet shoulder-width.',
      'Pull both hands toward your face, leading with your elbows and keeping them at or above shoulder height.',
      'Squeeze your shoulder blades together at the end of the pull, feeling the rear delts and mid-back engage.',
      'Slowly return to the starting position over 2 to 3 seconds, keeping tension on the band the whole time.',
      'Repeat for 12 to 20 reps, prioritizing a clean squeeze over heavy band tension.'
    ],
    commonMistakes: [
      'Letting the elbows drop below shoulder height, which turns the movement into a row and skips the rear delts.',
      'Pulling with the biceps instead of the elbows, leaving the upper back understimulated.',
      'Using too heavy a band so form breaks down — light tension with clean reps beats heavy ugly reps here.',
      'Shrugging the shoulders up to the ears at the end of the pull, loading the traps instead of the rear delts.'
    ],
    mediaUrl: 'https://media.larofit.com/band-high-face-pull.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-high-face-pull',
    custom: false
  },
  {
    id: 'b7',
    name: 'Band Hip Abduction',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Hip Abduction',
    description: 'A standing band-resisted hip abduction that targets the glute medius and primes the hips for squats, deadlifts, and running.',
    benefits: [
      'Activates the glute medius for better squat, deadlift, and running mechanics.',
      'Reduces knee valgus and improves single-leg stability.',
      'Travel-friendly and beginner-friendly — works with a single mini band.'
    ],
    instructions: [
      'Loop a mini band around both ankles or just above the knees, depending on resistance preference.',
      'Stand tall with feet hip-width apart and a slight bend in the knees, hands on hips for balance.',
      'Shift your weight onto your left leg and press your right leg straight out to the side against the band.',
      'Pause briefly at the top of the lift, feeling the squeeze in the side of your right hip.',
      'Lower the right leg back to the starting position with control, keeping tension on the band throughout.',
      'Complete 12 to 15 reps per side, alternating legs once the working glute is fully fatigued.'
    ],
    commonMistakes: [
      'Leaning the torso to the opposite side to swing the leg out, which removes load from the glute medius.',
      'Letting the hips rotate forward as the leg lifts, turning the movement into a hip-flexor exercise.',
      'Using a band so heavy that form breaks — start light to feel the glute working, then progress.',
      'Rushing the eccentric and letting the band snap the leg back in, losing half the time-under-tension.'
    ],
    mediaUrl: 'https://media.larofit.com/band-hip-abduction.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-hip-abduction',
    custom: false
  },
  {
    id: 'b8',
    name: 'Band Kneeling Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A kneeling pulldown using an overhead band anchor — a home-friendly alternative to the cable lat pulldown.',
    benefits: [
      'Builds the lats without needing a pull-up bar or cable machine.',
      'Trains the same vertical pull as a lat pulldown, anywhere with a band anchor.',
      'Improves shoulder-blade control and pulling strength for harder back work.'
    ],
    instructions: [
      'Anchor a band high overhead — over a door, a beam, or a pull-up bar — and grab both ends.',
      'Kneel down far enough that the band has tension at full arm extension, with arms reaching up and out.',
      'Pull both elbows down and slightly back toward your ribs, leading with the elbows rather than the hands.',
      'Squeeze your shoulder blades down and together at the bottom, feeling the lats fully contract.',
      'Slowly return to the starting position over 2 to 3 seconds, fighting the band the whole way up.',
      'Repeat for 10 to 15 reps, prioritizing a strong lat squeeze at the bottom of every rep.'
    ],
    commonMistakes: [
      'Pulling with the biceps and bending the wrists, which leaves the lats understimulated.',
      'Leaning back excessively to use bodyweight, which turns the move into a row instead of a pulldown.',
      'Letting the shoulders shrug up to the ears at the top, losing the lat-pull pattern entirely.',
      'Snapping the band back up on the eccentric and missing the most muscle-building part of the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/band-kneeling-pulldown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-kneeling-pulldown',
    custom: false
  },
  {
    id: 'b9',
    name: 'Band Lateral Raise',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing lateral raise with band resistance — builds wider, more capped shoulders without dumbbells.',
    benefits: [
      'Builds wider, more capped side delts without dumbbells.',
      'Trains the lateral delts at peak resistance through the band\'s strength curve.',
      'Travel- and home-friendly — works anywhere with a single resistance band.'
    ],
    instructions: [
      'Stand on the middle of a band with feet shoulder-width apart, holding one handle in each hand at your sides.',
      'Keep a slight bend in your elbows and your palms facing your thighs at the start of the movement.',
      'Lift both arms straight out to the sides until your hands reach shoulder height, leading with the elbows.',
      'Pause briefly at the top, feeling the side delts squeeze under the band\'s peak tension.',
      'Lower your arms back down with control over a 2 to 3 second eccentric, fighting the band the whole way.',
      'Repeat for 12 to 15 reps, prioritizing strict form over band tension.'
    ],
    commonMistakes: [
      'Swinging the torso to throw the arms up — momentum cheats the side delts out of the work.',
      'Letting the elbows lock straight, which shifts load to the wrists and forearms.',
      'Raising the arms above shoulder height, where the traps take over from the side delts.',
      'Using a band too heavy for the lift, breaking form and losing the strict isolation pattern.'
    ],
    mediaUrl: 'https://media.larofit.com/band-lateral-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-lateral-raise',
    custom: false
  },
  {
    id: 'b10',
    name: 'Band Pullover',
    primaryMuscle: 'chest',
    secondaryMuscles: ['back'],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing band pullover that trains the lats through their stretched range — a strong finisher for back day.',
    benefits: [
      'Loads the lats in their stretched range, where most growth happens.',
      'Improves overhead shoulder mobility with controlled reach.',
      'Adds a band-friendly hypertrophy piece to any back day.'
    ],
    instructions: [
      'Anchor a band overhead and grip the handle or both ends with arms reaching straight up above your head.',
      'Step back until the band has tension at full overhead extension and stand tall with feet shoulder-width.',
      'Keep a slight bend in your elbows and pull your arms down in a wide arc to your hips.',
      'Squeeze your lats hard at the bottom, feeling the contraction across the sides of your back.',
      'Slowly return your arms overhead with control over 2 to 3 seconds, fighting the band the whole way up.',
      'Repeat for 12 to 15 reps, focusing on the lat stretch at the top and the squeeze at the bottom.'
    ],
    commonMistakes: [
      'Bending the elbows too much and turning the move into a triceps extension instead of a lat pull.',
      'Pulling with the chest and shoulders rather than driving from the lats and shoulder blades.',
      'Cutting the range short at the top — the stretched overhead position is where the growth happens.',
      'Letting the lower back arch as you reach overhead, which leaks tension and risks lumbar strain.'
    ],
    mediaUrl: 'https://media.larofit.com/band-pullover.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-pullover',
    custom: false
  },
  {
    id: 'b11',
    name: 'Band Romanian Deadlift',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A hip-hinge Romanian deadlift using band resistance — trains the hamstrings and glutes without a barbell or dumbbells.',
    benefits: [
      'Builds hamstring and glute strength without a barbell or dumbbells.',
      'Trains the hip-hinge pattern that protects the lower back during heavier lifts.',
      'Travel- and home-friendly — works anywhere with a single resistance band.'
    ],
    instructions: [
      'Stand on the middle of a band with feet hip-width apart, holding one handle in each hand at your thighs.',
      'Soften your knees slightly and lock your spine in a neutral position with your chest up.',
      'Push your hips back behind you while letting your hands slide down your thighs toward your shins.',
      'Stop when you feel a strong stretch in your hamstrings — depth matters less than tension.',
      'Drive your hips forward to return to standing, squeezing your glutes at the top of the movement.',
      'Repeat for 10 to 12 reps, focusing on the hip-hinge pattern rather than band tension.'
    ],
    commonMistakes: [
      'Bending at the knees and squatting down instead of hinging at the hips — turns the move into a half-squat.',
      'Rounding the lower back as you hinge, which puts load on the spine instead of the hamstrings.',
      'Going too low and losing the hamstring stretch — stop where the stretch is strongest, not where the floor is.',
      'Standing on too narrow a band section, making the resistance uneven and twisting the bar path.'
    ],
    mediaUrl: 'https://media.larofit.com/band-romanian-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-romanian-deadlift',
    custom: false
  },
  {
    id: 'b12',
    name: 'Band Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A standing horizontal band row that trains the lats, mid-back, and biceps — the home-friendly answer to a cable row.',
    benefits: [
      'Builds the lats, mid-back, and biceps without weights or a machine.',
      'Trains the horizontal pull pattern that balances out pressing work.',
      'Travel- and home-friendly — works anywhere with a single band and an anchor point.'
    ],
    instructions: [
      'Anchor a band at chest height and grip both handles with arms straight out in front of you.',
      'Step back until the band has tension at full extension and stand tall with feet shoulder-width apart.',
      'Pull both handles toward your ribs, keeping your elbows tucked close to your sides.',
      'Squeeze your shoulder blades together at the end of the pull, feeling the mid-back engage.',
      'Slowly return your hands forward over 2 to 3 seconds, fighting the band\'s pull the whole way.',
      'Repeat for 10 to 15 reps, prioritizing the squeeze at the back rather than the speed of the pull.'
    ],
    commonMistakes: [
      'Letting the elbows flare out wide — keeps the lats out of the lift and loads the rear delts only.',
      'Leaning back to use bodyweight instead of pulling cleanly with the back.',
      'Shrugging the shoulders up at the end of the pull, swapping mid-back work for trap engagement.',
      'Snapping the band back forward and skipping the eccentric, where most of the muscle-building tension lives.'
    ],
    mediaUrl: 'https://media.larofit.com/band-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-row',
    custom: false
  },
  {
    id: 'b13',
    name: 'Band Seated Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A seated pulldown using a band anchored overhead — a stable, controlled way to train the lats from the floor.',
    benefits: [
      'Isolates the lats by removing leg and hip compensation.',
      'Builds vertical pulling strength for users not yet at a pull-up.',
      'Stable seated position works well for rehab and beginner content.'
    ],
    instructions: [
      'Anchor a band high overhead — over a door or beam — and sit on the floor or a bench beneath it.',
      'Reach up and grab both ends of the band with arms straight overhead, palms facing forward.',
      'Pull both elbows down toward your ribs, leading with the elbows rather than the hands.',
      'Squeeze your shoulder blades down and together at the bottom, fully contracting the lats.',
      'Slowly return your arms overhead with control over 2 to 3 seconds, keeping band tension throughout.',
      'Repeat for 10 to 15 reps, focusing on a clean lat squeeze at the bottom of every pull.'
    ],
    commonMistakes: [
      'Leaning back during the pull, which turns the seated pulldown into a row.',
      'Pulling with the biceps and bending the wrists rather than driving from the lats.',
      'Letting the shoulders shrug up at the top, losing the vertical-pull pattern.',
      'Releasing the band too quickly on the eccentric, missing half the time-under-tension benefit.'
    ],
    mediaUrl: 'https://media.larofit.com/band-seated-pulldown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-seated-pulldown',
    custom: false
  },
  {
    id: 'b14',
    name: 'Band Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing band shrug that isolates the upper traps — a low-impact way to build neck and upper back strength.',
    benefits: [
      'Builds upper trap strength for posture and neck stability.',
      'Improves the deadlift lockout by training a stronger trap contraction.',
      'Low-impact and travel-friendly — works anywhere with a single band.'
    ],
    instructions: [
      'Stand on the middle of a band with feet shoulder-width apart, holding one handle in each hand at your sides.',
      'Stand tall with arms straight, shoulders relaxed down, and chin slightly tucked for a neutral neck.',
      'Lift both shoulders straight up toward your ears, keeping your arms straight and elbows soft.',
      'Pause briefly at the top, squeezing the upper traps under the band\'s peak tension.',
      'Lower your shoulders back down with control over a 2 to 3 second eccentric, fighting the band.',
      'Repeat for 12 to 20 reps, focusing on the trap squeeze at the top rather than the speed.'
    ],
    commonMistakes: [
      'Rolling the shoulders forward and back rather than lifting straight up — adds nothing and risks the joint.',
      'Bending the elbows during the shrug, turning the move into a partial row.',
      'Standing on too narrow a section of band, making the tension uneven across the two arms.',
      'Rushing the eccentric and letting the band snap your shoulders down, losing the hardest part of the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/band-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-shrug',
    custom: false
  },
  {
    id: 'b15',
    name: 'Band Single Arm Lateral Raise',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A unilateral band lateral raise that builds the side delts one arm at a time — fixes side-to-side imbalances.',
    benefits: [
      'Builds side delt strength one arm at a time, exposing imbalances.',
      'Trains better side-to-side symmetry for cleaner shoulder development.',
      'Travel- and home-friendly — works with a single band, no weights.'
    ],
    instructions: [
      'Stand on one end of a band with your right foot, holding the other handle in your right hand at your thigh.',
      'Plant your feet shoulder-width apart, keeping a slight bend in your working elbow throughout.',
      'Lift your right arm straight out to the side until your hand reaches shoulder height.',
      'Pause briefly at the top, feeling the side delt squeeze under the band\'s peak tension.',
      'Lower your arm back down with control over a 2 to 3 second eccentric, fighting the band the whole way.',
      'Complete 10 to 12 reps per arm, switching sides once the working delt is fully fatigued.'
    ],
    commonMistakes: [
      'Leaning the torso to the opposite side to swing the arm up — momentum cheats the side delt.',
      'Letting the working elbow lock straight, which shifts load to the wrists and forearms.',
      'Raising the arm above shoulder height, where the traps take over from the side delts.',
      'Using a band tension that\'s too heavy and breaking form rather than dropping to clean reps.'
    ],
    mediaUrl: 'https://media.larofit.com/band-single-arm-lateral-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-single-arm-lateral-raise',
    custom: false
  },
  {
    id: 'b16',
    name: 'Band Wood Chopper',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'advanced',
    movement: 'Rotation',
    description: 'A diagonal band chop that trains rotational power through the obliques and the entire core — sport-ready strength.',
    benefits: [
      'Builds rotational power for golf, tennis, baseball, and combat sports.',
      'Strengthens the obliques and entire trunk in a single athletic pattern.',
      'Improves core control under rotation, reducing injury risk in dynamic sports.'
    ],
    instructions: [
      'Anchor a band at shoulder height or slightly above on your left side and stand perpendicular to the anchor.',
      'Grip the handle with both hands and step away until the band has tension across your body.',
      'Pull the handle down and across your body toward your right hip, rotating through the torso.',
      'Pivot your left foot as you rotate, fully turning the trunk to load the obliques explosively.',
      'Slowly return to the starting position over 2 to 3 seconds, fighting the band\'s pull the whole way.',
      'Complete 8 to 12 reps per side, then switch the anchor and work the opposite direction.'
    ],
    commonMistakes: [
      'Pulling with the arms instead of rotating through the trunk — turns the move into a one-arm row.',
      'Skipping the foot pivot, which limits the rotation range and stresses the lower back.',
      'Going too heavy and breaking form — the chop should look athletic and controlled, not rushed.',
      'Forgetting to work both sides equally, leaving the trunk imbalanced for rotational sport.'
    ],
    mediaUrl: 'https://media.larofit.com/band-wood-chopper.mp4',
    exerciseUrl: 'https://movekit.com/exercises/band-wood-chopper',
    custom: false
  },
  {
    id: 'b17',
    name: 'Barbell Banded Back Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Squat',
    description: 'A back squat with bands attached to the bar — adds resistance at the top of the rep where you\'re strongest.',
    benefits: [
      'Builds explosive lockout strength for the back squat.',
      'Trains the body to accelerate through the full range, not just out of the hole.',
      'Bridges raw strength training with athletic power development.'
    ],
    instructions: [
      'Loop bands around the bar near the sleeves and anchor them to the bottom of the squat rack.',
      'Step under the bar, position it on your upper traps, and unrack with feet shoulder-width apart.',
      'Brace your core hard and squat down with control until your hip crease drops below your knees.',
      'Drive explosively up through your heels, accelerating against the band tension as you stand.',
      'Lock out at the top with hips fully extended, then reset your breath and brace before the next rep.',
      'Complete 3 to 6 reps per set, prioritizing speed and bar control over pure load on the bar.'
    ],
    commonMistakes: [
      'Letting the chest collapse forward at the bottom, turning the squat into a good-morning.',
      'Slowing the ascent through the band tension instead of accelerating — defeats the point of accommodating resistance.',
      'Setting up bands unevenly so the bar tilts during the lift, creating dangerous side-to-side load.',
      'Using bands too heavy for the user\'s experience level, breaking form and risking the spine.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-banded-back-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-banded-back-squat',
    custom: false
  },
  {
    id: 'b18',
    name: 'Barbell Behind The Back 30 Degree Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A barbell shrug performed with the bar behind the body at a 30-degree lean — hits the lower traps and rear delts.',
    benefits: [
      'Builds the lower and mid traps that standard shrugs don\'t hit.',
      'Improves shoulder-blade retraction strength for cleaner pulls and presses.',
      'Adds detail to upper-back development for serious physique work.'
    ],
    instructions: [
      'Stand in front of a loaded barbell racked at low height, with the bar resting just behind your hips.',
      'Grab the bar with an overhand grip slightly wider than shoulder width, palms facing back.',
      'Lift the bar by extending the hips and lean forward slightly to a 30-degree angle from upright.',
      'Shrug your shoulders up and back, squeezing the shoulder blades together at the top of the lift.',
      'Lower the shoulders back down with control over a 2-second eccentric, keeping the bar path stable.',
      'Repeat for 8 to 12 reps, focusing on the squeeze between the shoulder blades rather than the bar height.'
    ],
    commonMistakes: [
      'Standing fully upright instead of leaning to 30 degrees — kills the lower-trap angle.',
      'Bending the elbows during the shrug, which turns the move into an upright row.',
      'Going too heavy and rolling the shoulders forward, exposing the front of the shoulder to strain.',
      'Skipping the squeeze at the top — the contraction is the entire point of the exercise.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-behind-the-back-30-degree-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-behind-the-back-30-degree-shrug',
    custom: false
  },
  {
    id: 'b19',
    name: 'Barbell Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'The classic horizontal press for chest, triceps, and front-delt strength — the cornerstone of every push day.',
    benefits: [
      'Builds raw horizontal pressing strength for sport and lifting.',
      'Develops chest mass, triceps thickness, and front-delt size.',
      'Reinforces full-body stability and bracing under heavy load.'
    ],
    instructions: [
      'Lie on the bench with your eyes directly under the bar and your feet planted flat on the floor.',
      'Pull your shoulder blades back and down into the bench to create a stable pressing platform.',
      'Grip the bar slightly wider than shoulder width with wrists stacked over elbows, then unrack to full arm extension.',
      'Lower the bar slowly to your lower chest with elbows tracked at about 60 to 75 degrees from your torso.',
      'Pause briefly with the bar touching the chest, keeping full-body tension and a tight upper back.',
      'Drive the bar back up explosively by pressing through the chest and triceps until the arms lock out.'
    ],
    commonMistakes: [
      'Letting the elbows flare to 90 degrees, which strains the front shoulders and reduces chest engagement.',
      'Losing the shoulder-blade squeeze mid-rep, causing the shoulders to roll forward under load.',
      'Bouncing the bar off the chest to use momentum instead of a controlled touch or pause.',
      'Lifting the glutes off the bench for leverage, which destabilizes the lift and risks back strain.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-bench-press',
    custom: false
  },
  {
    id: 'b20',
    name: 'Barbell Bent Over Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A heavy horizontal pull from a hinged position — builds the lats, mid-back, and biceps in one of the most efficient movements in the gym.',
    benefits: [
      'Builds the lats, mid-back, and biceps under heavy compound load.',
      'Trains the lower back and core to hold position under tension.',
      'Balances out heavy bench pressing and protects shoulder health.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and grip the barbell with hands just outside your knees, palms facing you.',
      'Hinge at your hips with a flat back until your torso is at about a 45-degree angle to the floor.',
      'Brace your core hard and let the bar hang directly below your shoulders at full arm extension.',
      'Pull the bar up to your lower chest, keeping your elbows tucked at about 45 degrees from your torso.',
      'Squeeze your shoulder blades together at the top, fully contracting the lats and mid-back.',
      'Lower the bar back down with control over 2 to 3 seconds, keeping the back position locked the whole time.'
    ],
    commonMistakes: [
      'Standing too upright, turning the row into a partial deadlift instead of a back exercise.',
      'Rounding the lower back as you pull, which puts the spine at serious risk under load.',
      'Pulling with the biceps and bending the wrists, leaving the lats and mid-back understimulated.',
      'Using too much momentum and swinging the bar up — the back stops working when the body cheats.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-bent-over-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-bent-over-row',
    custom: false
  },
  {
    id: 'b21',
    name: 'Barbell Clean And Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['upper_legs', 'triceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Push',
    description: 'A full-body lift that pulls the bar from the floor to overhead in two phases — power, posture, and pressing strength in one rep.',
    benefits: [
      'Builds total-body power from the floor through the shoulders.',
      'Trains coordinated strength across legs, back, and pressing muscles.',
      'Improves overhead stability and bracing under a moving load.'
    ],
    instructions: [
      'Stand with feet hip-width apart, bar over mid-foot, and grip just outside the knees with a flat back.',
      'Drive through the floor and pull the bar up the body, keeping it close as the hips and knees extend.',
      'Pull yourself under the bar quickly and catch it on the front of the shoulders with elbows pointing forward.',
      'Stand fully tall with the bar racked, brace the core, and reset your breath before the press.',
      'Press the bar straight overhead by pushing through the shoulders and triceps until the arms lock out.',
      'Lower the bar back to the shoulders, then to the floor with control to reset for the next rep.'
    ],
    commonMistakes: [
      'Yanking the bar with the arms early instead of driving the legs and hips first, which kills power.',
      'Catching the bar with low elbows, which collapses the rack position and stresses the wrists.',
      'Pressing the bar in front of the head instead of straight up, which strains the lower back and shoulders.',
      'Rounding the back on the pull from the floor, putting the spine in a weak and risky position.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-clean-and-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-clean-and-press',
    custom: false
  },
  {
    id: 'b22',
    name: 'Barbell Close Grip Bench Press',
    primaryMuscle: 'triceps',
    secondaryMuscles: ['chest'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A narrow-grip horizontal press that loads the triceps hard while still working the chest — the heaviest triceps lift in the gym.',
    benefits: [
      'Builds heavy triceps strength for stronger lockouts and overall pressing.',
      'Adds size to the triceps and inner chest with one barbell movement.',
      'Reinforces tight elbow tracking that carries over to all bench work.'
    ],
    instructions: [
      'Lie on the bench with eyes under the bar and feet planted flat on the floor for a stable base.',
      'Grip the bar with hands about shoulder-width apart, slightly inside your normal bench grip.',
      'Pull your shoulder blades back and down, then unrack the bar to full arm extension over the chest.',
      'Lower the bar slowly to the lower chest with elbows tucked close to your sides at around 30 to 45 degrees.',
      'Pause briefly at the chest, keeping the wrists stacked over the elbows and full-body tension intact.',
      'Press the bar back up by driving through the triceps until the arms are fully locked out.'
    ],
    commonMistakes: [
      'Gripping the bar too narrow, which strains the wrists without adding any extra triceps work.',
      'Letting the elbows flare out wide, turning the lift back into a regular bench and reducing triceps load.',
      'Bouncing the bar off the chest to use momentum instead of a controlled pause and press.',
      'Allowing the wrists to bend back under the bar, which leaks force and stresses the joints.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-close-grip-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-close-grip-bench-press',
    custom: false
  },
  {
    id: 'b23',
    name: 'Barbell Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'The original biceps builder — a standing two-handed curl that loads both arms heavy and trains pure elbow flexion strength.',
    benefits: [
      'Builds biceps size and strength with a heavier load than dumbbells allow.',
      'Trains both arms together for balanced symmetrical growth.',
      'Reinforces strict elbow flexion mechanics that carry over to all curls.'
    ],
    instructions: [
      'Stand tall with feet shoulder-width apart, gripping the bar underhand at shoulder width with arms fully extended.',
      'Pin your elbows to your sides and brace your core to stop your torso from swinging back.',
      'Curl the bar upward by bending only at the elbows, keeping the upper arms locked in place.',
      'Squeeze the biceps hard at the top with the bar near the front of the shoulders.',
      'Lower the bar slowly over 2 to 3 seconds, fighting the bar all the way back to full extension.',
      'Pause at the bottom in a fully straight-arm position, then repeat for clean controlled reps.'
    ],
    commonMistakes: [
      'Swinging the torso to throw the bar up, which transfers work from the biceps to the lower back.',
      'Drifting the elbows forward at the top, which turns the curl into a partial front raise.',
      'Cutting the range short and not extending the arms fully at the bottom of each rep.',
      'Gripping the bar too wide, which shifts tension off the biceps and stresses the wrists.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-curl',
    custom: false
  },
  {
    id: 'b24',
    name: 'Barbell Deadlift',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Hinge',
    description: 'The conventional pull from the floor — the gold-standard hinge that loads the back, glutes, and hamstrings heavier than any other lift.',
    benefits: [
      'Builds total-body pulling strength led by the back, glutes, and hamstrings.',
      'Trains the hinge pattern that protects the back in everyday lifting.',
      'Develops grip, core bracing, and full-body tension under heavy load.'
    ],
    instructions: [
      'Stand with feet hip-width apart, the bar over mid-foot, and shins about an inch from the bar.',
      'Hinge down and grip the bar just outside the knees with a flat back and chest tall.',
      'Pull the slack out of the bar, brace your core, and take a big breath into your stomach.',
      'Push the floor away with your legs while keeping the bar dragging close to your shins.',
      'Stand fully tall by squeezing the glutes and locking out the hips and knees together.',
      'Lower the bar by hinging at the hips first, then bending the knees once it passes them.'
    ],
    commonMistakes: [
      'Rounding the lower back on the lift-off, which puts the spine in a weak position under heavy load.',
      'Yanking the bar off the floor without pulling the slack first, leading to a jerky pull and missed reps.',
      'Letting the bar drift away from the shins, which lengthens the lever arm and crushes the lower back.',
      'Hyperextending at the top instead of finishing with a tight glute squeeze and stacked rib cage.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-deadlift',
    custom: false
  },
  {
    id: 'b25',
    name: 'Barbell Drag Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A barbell curl variation that drags the bar up the torso, pulling the elbows back to bias the long head of the biceps.',
    benefits: [
      'Targets the long head of the biceps for thicker peak development.',
      'Builds top-end biceps contraction strength missed by standard curls.',
      'Reinforces strict form by removing front-shoulder cheating.'
    ],
    instructions: [
      'Stand tall holding a barbell with an underhand grip at shoulder width and arms fully extended.',
      'Brace your core and pin your shoulders down and back to lock the upper body in place.',
      'Pull the bar straight up the front of your torso by driving your elbows back behind you.',
      'Stop the bar at the upper chest with elbows tucked back, feeling a strong biceps contraction.',
      'Lower the bar slowly down the front of the body, keeping it in contact with the torso.',
      'Finish with arms fully extended and elbows reset under the shoulders before the next rep.'
    ],
    commonMistakes: [
      'Letting the elbows drift forward like a regular curl, which removes the long-head bias.',
      'Using too much weight, which forces the body to swing and breaks the dragging path of the bar.',
      'Cutting the bottom range short and not fully straightening the arms between reps.',
      'Rounding the shoulders forward to chase the bar up, which loads the front delts instead.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-drag-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-drag-curl',
    custom: false
  },
  {
    id: 'b26',
    name: 'Barbell Front Rack Step Up Knee Drive',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A loaded single-leg step-up with a driving knee at the top — quad strength, glute power, and balance under a front-racked bar.',
    benefits: [
      'Builds single-leg quad and glute strength under a real load.',
      'Trains hip drive and knee lift power for sprinting and jumping.',
      'Reinforces balance and core bracing under a front-racked bar.'
    ],
    instructions: [
      'Set a box at about knee height and rack the barbell across the front of your shoulders with high elbows.',
      'Stand close to the box, brace your core, and place one foot fully flat on top of it.',
      'Drive through the full foot on the box to stand tall, keeping the chest up and bar steady.',
      'At the top, drive the trailing knee up and forward to hip height in a sprint-style action.',
      'Lower that leg back down and step the foot off the box under control with no thud.',
      'Reset to the starting position and repeat for the prescribed reps before switching legs.'
    ],
    commonMistakes: [
      'Pushing off the trailing leg instead of driving through the working leg on top of the box.',
      'Letting the front-rack elbows drop, which collapses the bar onto the chest and rounds the back.',
      'Choosing a box that\'s too tall, forcing a hip-shift and removing tension from the quads.',
      'Stepping down hard instead of with control, beating up the joints and breaking position.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-front-rack-step-up-knee-drive.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-front-rack-step-up-knee-drive',
    custom: false
  },
  {
    id: 'b27',
    name: 'Barbell High Incline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A steep-incline barbell press around 60 degrees that pushes most of the load into the upper chest and front shoulders.',
    benefits: [
      'Builds upper-chest size that fills out the top of the torso.',
      'Strengthens the front shoulders for better overhead press carryover.',
      'Adds a fresh pressing angle that breaks plateaus on flat bench.'
    ],
    instructions: [
      'Set the bench to a steep incline of around 60 degrees and lie back with your feet planted flat.',
      'Grip the bar slightly wider than shoulder width and pull your shoulder blades back into the pad.',
      'Unrack the bar to full arm extension and stack the wrists directly over the elbows.',
      'Lower the bar slowly to the upper chest, just below the collarbone, with elbows tracking under the bar.',
      'Pause briefly with the bar at the chest, keeping core tension and a tight upper back.',
      'Press the bar back up along the same path until the arms are fully locked out over the upper chest.'
    ],
    commonMistakes: [
      'Setting too steep an angle near vertical, which turns the lift into an overhead press and loses chest involvement.',
      'Lowering the bar to the lower chest like a flat bench, which strains the shoulders at this angle.',
      'Flaring the elbows wide, which loads the front of the shoulders instead of the upper chest.',
      'Lifting the hips off the bench to cheat the press, which ruins the angle and risks back strain.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-high-incline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-high-incline-bench-press',
    custom: false
  },
  {
    id: 'b28',
    name: 'Barbell Incline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'The 30-to-45-degree incline press that builds the upper chest, front delts, and triceps — the second pillar of any push day.',
    benefits: [
      'Builds upper-chest size for a fuller, squarer torso.',
      'Strengthens the front shoulders alongside the chest in one lift.',
      'Reinforces controlled pressing form that carries over to flat bench.'
    ],
    instructions: [
      'Set the bench to about 30 to 45 degrees and lie back with feet planted flat on the floor.',
      'Grip the bar slightly wider than shoulder width and pull the shoulder blades back into the pad.',
      'Unrack the bar to full arm extension with the wrists stacked directly over the elbows.',
      'Lower the bar slowly to the upper chest with elbows tracked at about 60 to 75 degrees from the torso.',
      'Pause briefly at the chest, keeping a tight upper back and full body tension.',
      'Drive the bar back up by pressing through the upper chest and triceps until the arms lock out.'
    ],
    commonMistakes: [
      'Setting the bench too flat or too steep, which dilutes the upper-chest target either way.',
      'Letting the elbows flare wide to 90 degrees, which strains the front shoulders.',
      'Lifting the hips off the bench for leverage, which destabilizes the press and stresses the back.',
      'Bouncing the bar off the chest to use momentum instead of a controlled touch and press.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-incline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-incline-bench-press',
    custom: false
  },
  {
    id: 'b29',
    name: 'Barbell Muscle Snatch',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['back', 'upper_legs'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A snatch variation that pulls the bar from the floor to overhead with no dip under — a strict-strength teaching lift for the snatch.',
    benefits: [
      'Builds strict pulling and pressing strength from floor to overhead.',
      'Teaches the snatch path without the demand of a deep catch.',
      'Strengthens the lower back, glutes, and shoulders as one chain.'
    ],
    instructions: [
      'Stand with feet hip-width apart and the bar over mid-foot, gripping it wide with a flat back.',
      'Pull the slack out of the bar, brace your core, and take a deep breath into your stomach.',
      'Drive through the floor and pull the bar up the body, keeping it close as the hips extend.',
      'Continue pulling the bar overhead in one smooth motion using the shoulders without dipping under.',
      'Finish standing tall with the bar locked out overhead, biceps near the ears and core braced.',
      'Lower the bar back to the front of the hips, then to the floor with control before the next rep.'
    ],
    commonMistakes: [
      'Bending the knees to dip under the bar, which turns the lift into a power snatch and loses the strict pull.',
      'Pulling the bar away from the body, which forces the lower back to compensate at lockout.',
      'Pressing the bar out at the top instead of pulling it overhead, which strains the shoulders.',
      'Using too much weight, which breaks the strict pattern and removes the teaching benefit.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-muscle-snatch.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-muscle-snatch',
    custom: false
  },
  {
    id: 'b30',
    name: 'Barbell Overhead Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['triceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'The standing strict press from shoulders to overhead — the gold-standard test of pure shoulder strength and bracing.',
    benefits: [
      'Builds strict overhead pressing strength in the shoulders and triceps.',
      'Develops core bracing and full-body stability under load.',
      'Adds shoulder size for a wider, more capped upper body.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and rack the bar across the front of the shoulders just under the chin.',
      'Grip the bar slightly wider than shoulder width with the wrists stacked over the elbows.',
      'Brace your core, squeeze the glutes, and take a big breath to lock the torso in place.',
      'Press the bar straight up by pushing through the shoulders and triceps, moving your head back slightly.',
      'Lock out the arms overhead with the bar over the middle of the foot and biceps near the ears.',
      'Lower the bar back to the front of the shoulders under control, reset your breath, and repeat.'
    ],
    commonMistakes: [
      'Pressing the bar in front of the head instead of straight up, which strains the lower back and shoulders.',
      'Leaning back excessively to turn the lift into an incline press, which overloads the spine.',
      'Failing to brace the core, which lets the rib cage flare and weakens the press.',
      'Bending the knees and using leg drive, which makes the lift a push press and not a strict press.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-overhead-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-overhead-press',
    custom: false
  },
  {
    id: 'b31',
    name: 'Barbell Power Snatch',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['back', 'upper_legs'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'An explosive pull from the floor to overhead, caught in a quarter squat — full-body power without the depth of a full snatch.',
    benefits: [
      'Builds explosive total-body power from floor to overhead.',
      'Trains hip extension speed that carries over to sprints and jumps.',
      'Develops overhead stability and quick under-the-bar mechanics.'
    ],
    instructions: [
      'Stand with feet hip-width apart and the bar over mid-foot, gripping the bar wide with a flat back.',
      'Pull the slack out of the bar, brace your core, and take a deep breath into your belly.',
      'Drive the legs into the floor and accelerate the bar up the body as the hips extend explosively.',
      'Pull yourself under the bar quickly and catch it overhead with arms locked out and elbows tight.',
      'Stop the catch in a quarter-squat position with the bar stable directly over the middle of the foot.',
      'Stand fully tall, then lower the bar back to the hips and down to the floor under control.'
    ],
    commonMistakes: [
      'Pulling with the arms early instead of driving the legs and hips first, which kills bar speed.',
      'Catching the bar with bent or soft elbows, which collapses the lockout and risks shoulder strain.',
      'Letting the bar swing away from the body, which forces the lower back to recover the lift.',
      'Catching too low into a full squat, which turns the power snatch into a regular snatch.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-power-snatch.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-power-snatch',
    custom: false
  },
  {
    id: 'b32',
    name: 'Barbell Pullover',
    primaryMuscle: 'chest',
    secondaryMuscles: ['back'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A bench-based overhead arc that stretches and loads the lats — an old-school accessory for back, chest, and rib-cage development.',
    benefits: [
      'Builds lats through a deep loaded stretch most pulls miss.',
      'Adds chest and serratus involvement as a secondary benefit.',
      'Reinforces overhead shoulder mobility under controlled load.'
    ],
    instructions: [
      'Lie back on a flat bench with your head supported and feet planted flat on the floor.',
      'Hold a barbell over your chest with a shoulder-width grip and a slight bend in the elbows.',
      'Brace your core and pull your shoulder blades back and down into the bench.',
      'Lower the bar slowly in an arc behind your head until you feel a deep stretch in the lats.',
      'Pause briefly at the bottom, keeping the elbow angle locked, then pull the bar back over the chest.',
      'Stop the bar above the chest line and reset before the next controlled rep.'
    ],
    commonMistakes: [
      'Bending and straightening the elbows mid-rep, which turns the lift into a triceps extension.',
      'Lowering the bar too fast, which strains the front shoulders without loading the lats.',
      'Lifting the lower back off the bench, which removes tension from the lats and stresses the spine.',
      'Using too much weight, which forces the elbows to collapse and breaks the overhead arc.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-pullover.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-pullover',
    custom: false
  },
  {
    id: 'b33',
    name: 'Barbell Rack Pull',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A partial deadlift pulled from a raised pin position — heavy back loading without the demand of a full lift from the floor.',
    benefits: [
      'Builds upper-back and trap thickness with heavier loads than full deadlifts.',
      'Strengthens the deadlift lockout for stronger pulls overall.',
      'Teaches the hinge pattern through a shorter, easier range.'
    ],
    instructions: [
      'Set the safety pins in a rack at about knee height and load the bar to your working weight.',
      'Stand with feet hip-width apart, bar over mid-foot, and grip just outside the knees.',
      'Pull the slack out of the bar, brace the core, and pull the chest up tall with a flat back.',
      'Drive the floor away with your legs while keeping the bar dragging close to your thighs.',
      'Stand fully tall by squeezing the glutes and locking out the hips and knees together.',
      'Lower the bar back to the pins under control, reset your breath, and repeat for clean reps.'
    ],
    commonMistakes: [
      'Setting the pins too low or too high, which removes the partial-lift benefit and risks form breakdown.',
      'Rounding the upper back hard to grind the rep, which strains the spine under heavy load.',
      'Hyperextending at the top instead of finishing with a tight glute squeeze and stacked rib cage.',
      'Bouncing the bar off the pins and using momentum instead of resetting between reps.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-rack-pull.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-rack-pull',
    custom: false
  },
  {
    id: 'b34',
    name: 'Barbell Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing two-handed shrug that loads the upper traps — the classic move for trap thickness and a stronger neck-to-shoulder line.',
    benefits: [
      'Builds upper-trap size for a thicker neck-to-shoulder line.',
      'Strengthens the shrug pattern that supports heavy carries and deadlifts.',
      'Strengthens the grip as a side benefit of holding heavy loads.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart and grip the barbell at the hips with hands shoulder-width apart.',
      'Pull your shoulders down and back to start in a neutral position with arms fully extended.',
      'Brace your core and keep the chest up so the torso stays still through the lift.',
      'Shrug your shoulders straight up toward your ears as high as you can without bending the elbows.',
      'Pause for a second at the top, squeezing the upper traps hard.',
      'Lower the bar slowly back to the start over 2 to 3 seconds, keeping tension on the traps.'
    ],
    commonMistakes: [
      'Rolling the shoulders forward and back instead of shrugging straight up, which strains the joints.',
      'Bending the elbows to help cheat the bar up, which turns the move into a partial upright row.',
      'Using too much weight and cutting the range short with tiny shrugs that miss the contraction.',
      'Letting the chin jut forward, which loads the neck instead of the upper traps.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-shrug',
    custom: false
  },
  {
    id: 'b35',
    name: 'Barbell Snatch',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['back', 'upper_legs'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Pull',
    description: 'The full Olympic snatch — bar from the floor to overhead in one pull, caught in a deep overhead squat.',
    benefits: [
      'Builds explosive power across the back, glutes, and hamstrings.',
      'Trains overhead mobility and stability under maximum speed.',
      'Develops timing and coordination that no other lift teaches.'
    ],
    instructions: [
      'Stand with feet hip-width apart and the bar over mid-foot, gripping the bar wide with a flat back.',
      'Pull the slack out of the bar, brace the core, and take a deep breath into the belly.',
      'Drive through the floor and accelerate the bar up the body as the hips extend explosively.',
      'Pull yourself under the bar fast and catch it overhead with arms locked out in a deep overhead squat.',
      'Stand up out of the squat with the bar held tight overhead and the core fully braced.',
      'Lower the bar to the front of the hips and down to the floor under control before the next rep.'
    ],
    commonMistakes: [
      'Yanking the bar with the arms early instead of letting the legs and hips drive the pull.',
      'Catching the bar with soft elbows, which collapses the lockout and risks shoulder injury.',
      'Letting the bar drift forward, which forces a missed lift or a heavy lower-back save.',
      'Skipping the squat depth and catching too high, which turns the snatch into a power snatch.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-snatch.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-snatch',
    custom: false
  },
  {
    id: 'b36',
    name: 'Barbell Spinal Jefferson Curl',
    primaryMuscle: 'back',
    secondaryMuscles: ['upper_legs'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Stretch',
    description: 'A slow loaded spinal flexion with a light barbell — a controlled mobility drill that strengthens the back through full forward bending.',
    benefits: [
      'Builds tissue tolerance through full loaded spinal flexion.',
      'Improves hamstring and back-of-body flexibility under control.',
      'Trains segmental spinal control that carries over to lifting and movement.'
    ],
    instructions: [
      'Stand on a low box holding a light barbell at the front of your hips with arms extended.',
      'Tuck your chin to your chest and slowly start rolling the spine downward one segment at a time.',
      'Continue rolling forward through the upper back, then the mid-back, then the lower back.',
      'Allow the bar to drift down toward the feet, keeping the legs straight and the bar close to the body.',
      'Pause briefly at the bottom in a deep forward fold with the spine fully rounded.',
      'Reverse the motion by stacking up segment by segment from the lower back back to the head.'
    ],
    commonMistakes: [
      'Using too heavy a load, which forces the back to grind instead of moving slowly through each segment.',
      'Bending at the hips like a stiff-leg deadlift instead of rolling through the spine.',
      'Rushing the rep, which removes the controlled tissue loading that makes the drill useful.',
      'Bending the knees to chase depth, which removes the hamstring stretch that pairs with the spinal work.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-spinal-jefferson-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-spinal-jefferson-curl',
    custom: false
  },
  {
    id: 'b37',
    name: 'Barbell Split Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A loaded split-stance squat for single-leg quad and glute strength — the staircase between regular squats and Bulgarian split squats.',
    benefits: [
      'Builds single-leg quad and glute strength with full barbell loading.',
      'Exposes and corrects strength imbalances between legs.',
      'Reinforces balance and core stability under a back-loaded bar.'
    ],
    instructions: [
      'Rack the bar across the upper back and step into a long split stance with feet hip-width apart.',
      'Brace your core and stand tall with most of your weight on the front foot.',
      'Lower the back knee straight down toward the floor, keeping the front shin close to vertical.',
      'Stop just before the back knee touches the floor, keeping the torso upright and chest up.',
      'Drive through the front foot to stand back up to the starting split-stance position.',
      'Complete all reps on one side before switching legs, keeping the same setup each time.'
    ],
    commonMistakes: [
      'Letting the front knee cave inward, which strains the knee and reduces glute engagement.',
      'Pushing off the back foot to stand up, which removes load from the front working leg.',
      'Leaning the torso too far forward, which turns the lift into a hinge and loses the quad focus.',
      'Setting the stance too short, which forces the front knee far past the toes and stresses the joint.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-split-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-split-squat',
    custom: false
  },
  {
    id: 'b38',
    name: 'Barbell Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Squat',
    description: 'The back-loaded barbell squat — the king of lower-body strength training and the standard for measuring leg power.',
    benefits: [
      'Builds total lower-body strength led by the quads and glutes.',
      'Trains core bracing and full-body stability under heavy load.',
      'Reinforces the squat pattern that carries over to sport and daily life.'
    ],
    instructions: [
      'Set the bar in a rack at about chest height and step under it to rack it across your upper back.',
      'Grip the bar slightly wider than shoulder width, brace your core, and step back from the rack.',
      'Stand with feet shoulder-width apart, toes turned slightly out, and chest tall.',
      'Push your hips back and down, bending the knees to squat down until your hips reach below the knees.',
      'Drive through the full foot to stand back up, keeping the chest tall and bar path straight.',
      'Lock out the hips and knees at the top, reset your breath and brace, and repeat for clean reps.'
    ],
    commonMistakes: [
      'Letting the knees cave inward on the way up, which strains the knees and weakens the drive.',
      'Cutting the depth short and not reaching at least parallel, missing the full quad and glute work.',
      'Rounding the lower back at the bottom, which puts the spine at risk under heavy load.',
      'Shifting the bar weight onto the toes, which throws off the balance and strains the lower back.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-squat',
    custom: false
  },
  {
    id: 'b39',
    name: 'Barbell Step Up Knee Drive',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A back-racked step-up with a driving knee at the top — single-leg quad and glute strength with explosive hip drive built in.',
    benefits: [
      'Builds single-leg strength in the quads and glutes under a real load.',
      'Trains explosive hip drive and knee lift for sprinting and jumping.',
      'Improves balance and core control under a back-racked bar.'
    ],
    instructions: [
      'Set a sturdy box at about knee height and rack the bar across your upper back.',
      'Stand close to the box, brace your core, and place one foot fully flat on top of it.',
      'Drive through the full foot on the box to stand tall, keeping the chest up and bar steady.',
      'At the top, drive the trailing knee up and forward to hip height in a sprint-style action.',
      'Lower that leg back down and step the foot off the box under control with no thud.',
      'Reset to the starting position and repeat for the prescribed reps before switching legs.'
    ],
    commonMistakes: [
      'Pushing off the trailing leg instead of driving through the working leg on top of the box.',
      'Choosing a box that\'s too tall, which forces a hip-shift and removes tension from the quads.',
      'Letting the torso fold forward under the bar, which turns the lift into a heavy good morning.',
      'Stepping down hard from the box, which beats up the joints and breaks position between reps.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-step-up-knee-drive.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-step-up-knee-drive',
    custom: false
  },
  {
    id: 'b40',
    name: 'Barbell Stiff Leg Deadlifts',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Hinge',
    description: 'A near-straight-legged hinge from the floor that loads the hamstrings and glutes through a deep stretch — a clean back-of-body builder.',
    benefits: [
      'Builds hamstring size and strength through a deep loaded stretch.',
      'Develops glute strength at the lockout for full hip-drive power.',
      'Reinforces clean hinge mechanics that carry over to deadlifts.'
    ],
    instructions: [
      'Stand with feet hip-width apart and grip the bar just outside the knees with arms extended.',
      'Stand tall holding the bar at the hips, then unlock the knees with a small soft bend.',
      'Push the hips back and lower the bar down the legs by hinging at the hips, keeping the back flat.',
      'Continue lowering until you feel a strong stretch in the hamstrings, with the bar staying close to the legs.',
      'Drive the hips forward and squeeze the glutes hard to stand back up to the starting position.',
      'Lock out the hips at the top with a tall chest, reset your breath, and repeat for clean reps.'
    ],
    commonMistakes: [
      'Locking the knees fully straight, which turns the lift into a back-stress machine instead of a hamstring builder.',
      'Rounding the lower back at the bottom, which loads the spine instead of stretching the hamstrings.',
      'Letting the bar drift away from the legs, which crushes the lower back at the bottom range.',
      'Bending the knees too much, which turns the lift back into a regular deadlift.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-stiff-leg-deadlifts.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-stiff-leg-deadlifts',
    custom: false
  },
  {
    id: 'b41',
    name: 'Barbell Thruster',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['upper_legs'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A front squat into an overhead press in one motion — the conditioning workhorse that hits legs, shoulders, and lungs at once.',
    benefits: [
      'Builds full-body strength and conditioning in a single compound movement.',
      'Trains leg drive into overhead pressing for athletic power transfer.',
      'Spikes heart rate fast, making it a high-return conditioning lift.'
    ],
    instructions: [
      'Set the bar in a front-rack position across the front of your shoulders with elbows lifted high.',
      'Stand with feet shoulder-width apart, brace your core, and keep your chest tall throughout the lift.',
      'Drop into a full front squat by sitting your hips back and tracking your knees over your toes.',
      'Drive hard out of the bottom and use that leg drive to launch the bar off your shoulders.',
      'Press the bar overhead in one fluid motion, finishing with arms locked out and biceps near your ears.',
      'Lower the bar back to the front rack under control and reset for the next rep without pausing.'
    ],
    commonMistakes: [
      'Pressing the bar with arms only instead of using the leg drive out of the squat to power the press.',
      'Dropping the elbows in the front rack, which collapses the chest and dumps the bar forward.',
      'Cutting the squat depth short to save energy, turning the lift into a half-rep push press.',
      'Catching the bar on the shoulders too hard on the way down, which beats up the front delts over volume.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-thruster.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-thruster',
    custom: false
  },
  {
    id: 'b42',
    name: 'Barbell Upright Row',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['back'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Pull',
    description: 'A vertical pull from the hips to the chest that loads the side delts and traps — the classic shoulder-width builder.',
    benefits: [
      'Builds the side delts and upper traps for a wider shoulder shape.',
      'Trains the vertical pull pattern as a complement to overhead pressing.',
      'Develops shoulder and trap thickness for a stronger upper-body silhouette.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart and grip the bar with hands slightly narrower than shoulder width.',
      'Let the bar hang at arm\'s length against your thighs with shoulders pulled back and chest up.',
      'Pull the bar straight up by leading with the elbows, keeping the bar close to your body the whole way.',
      'Stop the pull when your upper arms are roughly parallel to the floor — do not crank the elbows higher.',
      'Pause briefly at the top and feel the side delts and upper traps working under the load.',
      'Lower the bar back down under control over 2 to 3 seconds, then reset for the next rep.'
    ],
    commonMistakes: [
      'Pulling the bar too high past shoulder level, which jams the shoulder joint and risks front-shoulder strain.',
      'Using a grip that is too narrow, which forces the wrists into an awkward angle and shifts work off the delts.',
      'Heaving the bar up with body english instead of leading with the elbows in a controlled pull.',
      'Letting the bar drift away from the body, which kills side-delt tension and loads the lower back.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-upright-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-upright-row',
    custom: false
  },
  {
    id: 'b43',
    name: 'Barbell Wrist Curl',
    primaryMuscle: 'forearms',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A small-range wrist flexion that isolates the forearm flexors — the classic finisher for grip strength and forearm size.',
    benefits: [
      'Builds forearm size and grip strength through direct isolation.',
      'Strengthens wrist flexion for sport, lifting, and climbing.',
      'Improves grip endurance for heavier pulling and carrying work.'
    ],
    instructions: [
      'Sit on a bench and rest your forearms on your thighs with your wrists hanging just past the knees.',
      'Hold the bar with an underhand grip, hands shoulder-width apart, and let it roll into your fingertips.',
      'Curl the bar up by closing your fingers and flexing your wrists, keeping the forearms pinned to your thighs.',
      'Squeeze hard at the top with the wrists fully flexed and feel the forearms contract.',
      'Lower the bar back down under control, letting it roll out toward the fingertips at the bottom.',
      'Repeat for high reps, focusing on a slow tempo and a full range from fingertips to top squeeze.'
    ],
    commonMistakes: [
      'Lifting the forearms off the thighs, which lets the biceps take over instead of isolating the forearms.',
      'Using too much weight and shortening the range so the bar barely moves at the wrist.',
      'Skipping the fingertip roll at the bottom, which cuts out half the forearm and grip work.',
      'Rushing the tempo and bouncing the reps, which removes the time-under-tension that builds the forearms.'
    ],
    mediaUrl: 'https://media.larofit.com/barbell-wrist-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/barbell-wrist-curl',
    custom: false
  },
  {
    id: 'b44',
    name: 'Bench Dips',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A bodyweight triceps dip off a bench or chair that builds arm pushing strength — the go-to home and hotel-room arm exercise.',
    benefits: [
      'Builds triceps strength and size with no equipment needed.',
      'Trains the pushing pattern in any home or travel setting.',
      'Strengthens arm lockout for pressing and dipping movements.'
    ],
    instructions: [
      'Sit on the edge of a sturdy bench or chair and grip the edge with hands just outside your hips.',
      'Slide your hips off the bench and walk your feet out so your weight is supported by your arms.',
      'Lower your body slowly by bending your elbows straight back until your upper arms are roughly parallel to the floor.',
      'Keep your back close to the bench and your shoulders pulled down away from your ears the whole way.',
      'Pause briefly at the bottom with the triceps loaded, then press through your palms back up to the start.',
      'Lock out the arms at the top without shrugging the shoulders, then repeat for the prescribed reps.'
    ],
    commonMistakes: [
      'Letting the elbows flare out to the sides, which loads the front shoulders instead of the triceps.',
      'Letting the shoulders shrug up toward the ears, which strains the front shoulders under the dip.',
      'Cutting the depth short to make the reps easier, which removes most of the triceps work.',
      'Using only the legs to push off the floor, which turns the dip into an assisted leg-press motion.'
    ],
    mediaUrl: 'https://media.larofit.com/bench-dips.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bench-dips',
    custom: false
  },
  {
    id: 'b45',
    name: 'Bodyweight Alternating Lateral Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A side-to-side lunge that loads one leg at a time — builds glute and quad strength while opening up the inner thighs and hips.',
    benefits: [
      'Builds glute and quad strength through a side-to-side hip pattern.',
      'Opens up the inner thighs and improves lateral hip mobility.',
      'Trains balance and single-leg control without weights.'
    ],
    instructions: [
      'Stand tall with feet together, hands at your chest, and your core braced for balance.',
      'Take a wide step out to one side and plant the foot flat with toes pointing forward.',
      'Sit your hips back and bend the stepping leg, keeping the trailing leg straight and the chest tall.',
      'Lower until the working thigh is roughly parallel to the floor and you feel a stretch in the inner thigh.',
      'Push through the heel of the working leg to drive back up to standing in one strong motion.',
      'Repeat on the opposite side and continue alternating for the prescribed reps.'
    ],
    commonMistakes: [
      'Letting the knee of the working leg cave inward instead of tracking over the foot.',
      'Leaning the chest too far forward, which loads the lower back instead of the glutes and quads.',
      'Rounding the back when sitting into the lunge instead of hinging cleanly at the hips.',
      'Cutting the depth short and turning a real lateral lunge into a shallow side step.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-alternating-lateral-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-alternating-lateral-lunge',
    custom: false
  },
  {
    id: 'b46',
    name: 'Bodyweight Alternating Reverse Lunges',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A backward-stepping lunge that builds the glutes and quads — the knee-friendly cousin of the forward lunge.',
    benefits: [
      'Builds the glutes, quads, and hamstrings through a knee-friendly lunge pattern.',
      'Trains single-leg balance and split-stance control.',
      'Strengthens the lower body anywhere with no equipment needed.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart, hands on your hips or at your chest for balance.',
      'Take a long step back with one leg and lower the back knee straight down toward the floor.',
      'Drop until the back knee is just above the ground and the front thigh is roughly parallel to the floor.',
      'Keep the front knee tracking over the front foot and your chest tall the entire descent.',
      'Drive through the heel of the front foot to push yourself back up to standing in one strong motion.',
      'Step back with the opposite leg and continue alternating for the prescribed reps.'
    ],
    commonMistakes: [
      'Taking too short a step back, which loads the front knee instead of the front glute.',
      'Slamming the back knee into the floor instead of lowering it under control.',
      'Letting the chest collapse forward, which shifts the work to the lower back.',
      'Pushing off the back foot instead of driving through the front heel — robs the front leg of work.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-alternating-reverse-lunges.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-alternating-reverse-lunges',
    custom: false
  },
  {
    id: 'b47',
    name: 'Bodyweight Box Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Squat',
    description: 'A bodyweight squat to a bench or box — the cleanest way to teach squat depth and hip-back mechanics to beginners.',
    benefits: [
      'Teaches consistent squat depth without guesswork.',
      'Builds quad and glute strength with controlled mechanics.',
      'Improves squat confidence for new lifters before adding load.'
    ],
    instructions: [
      'Set a sturdy bench or box behind you and stand in front of it with feet shoulder-width apart.',
      'Cross your arms in front of your chest or hold them straight out for balance.',
      'Sit your hips back as if reaching for the box, keeping your chest tall and your weight in your heels.',
      'Lower under control until your glutes touch the box softly — do not crash down onto it.',
      'Pause briefly on the box without losing core or leg tension, staying ready to drive back up.',
      'Push through the floor with both feet to stand back up tall, squeezing your glutes at the top.'
    ],
    commonMistakes: [
      'Plopping down onto the box instead of touching it under control, which kills the leg tension.',
      'Squatting straight down instead of sitting the hips back, which loads the knees over the glutes.',
      'Letting the knees cave inward as you stand back up, which weakens the lift and stresses the knees.',
      'Rounding the lower back at the bottom — turns a teaching tool into a back-strain risk.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-box-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-box-squat',
    custom: false
  },
  {
    id: 'b48',
    name: 'Bodyweight Deadlift',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes', 'upper_legs'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'An unloaded hip hinge that teaches the deadlift pattern — the safest way to learn how to bend, brace, and stand back up.',
    benefits: [
      'Teaches a safe hip-hinge pattern with no equipment.',
      'Activates the glutes and hamstrings before loaded hinge work.',
      'Builds lower-back awareness for safer lifting in any program.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart, arms hanging loose at your sides, and your core lightly braced.',
      'Push your hips back as if closing a car door with your butt, letting your knees bend just slightly.',
      'Hinge forward at the hips with a flat back and let your hands slide down the front of your thighs.',
      'Lower until you feel a strong stretch in your hamstrings and your torso is roughly parallel to the floor.',
      'Drive through your heels and squeeze your glutes hard to stand back up to a tall position.',
      'Lock out at the top by squeezing the glutes — do not lean back, just stand fully upright.'
    ],
    commonMistakes: [
      'Squatting down instead of hinging back, which removes the hamstring stretch entirely.',
      'Rounding the lower back as you bend forward, which is the exact pattern a hinge teach should fix.',
      'Bending the knees too much, which turns the lift into a half-squat instead of a clean hinge.',
      'Hyperextending the back at the top instead of finishing in a tall, neutral standing position.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-deadlift',
    custom: false
  },
  {
    id: 'b49',
    name: 'Bodyweight Donkey Calf Raise',
    primaryMuscle: 'lower_legs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bent-over calf raise that targets the gastrocnemius through a deep stretch — the old-school calf builder, no machine needed.',
    benefits: [
      'Builds calf size by loading the gastrocnemius in a deep stretch.',
      'Trains the calves through a fuller range than standing variations.',
      'Develops calf shape with no machine needed.'
    ],
    instructions: [
      'Stand with the balls of your feet on the edge of a step or low platform, heels hanging off the back.',
      'Hinge forward at the hips and place your hands on a sturdy surface in front of you for support.',
      'Keep your back flat and your legs nearly straight with just a soft bend in the knees.',
      'Lower your heels slowly below the platform until you feel a deep stretch through the calves.',
      'Press through the balls of your feet to rise up as high as possible onto your toes.',
      'Squeeze the calves hard at the top, then lower under control over 2 to 3 seconds and repeat.'
    ],
    commonMistakes: [
      'Bending the knees too much, which shifts the work off the gastrocnemius onto the soleus.',
      'Cutting the range short and skipping the deep heel stretch where most of the growth happens.',
      'Bouncing the reps instead of lowering under control — kills the time-under-tension on the calves.',
      'Rounding the back in the bent-over position, which puts strain on the lower back over volume.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-donkey-calf-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-donkey-calf-raise',
    custom: false
  },
  {
    id: 'b50',
    name: 'Bodyweight Elevated Push Up',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A push-up with hands raised on a bench or box that scales the difficulty down — the cleanest beginner push-up regression.',
    benefits: [
      'Builds pressing strength at a scalable, beginner-friendly load.',
      'Develops chest, triceps, and front-shoulder size with no equipment.',
      'Teaches clean push-up mechanics before progressing to floor push-ups.'
    ],
    instructions: [
      'Place your hands on a sturdy bench or box slightly wider than shoulder width.',
      'Walk your feet back until your body forms a straight line from head to heels at an incline.',
      'Brace your core, squeeze your glutes, and pull your shoulder blades back and down.',
      'Lower your chest toward the bench under control with elbows tracked at about 45 degrees from your torso.',
      'Pause briefly when your chest is just above the bench, keeping full-body tension throughout.',
      'Press back up explosively through the palms until your arms lock out, then reset for the next rep.'
    ],
    commonMistakes: [
      'Letting the hips sag down or piking up, which breaks the straight body line and loads the back.',
      'Flaring the elbows out wide, which strains the front shoulders and reduces chest engagement.',
      'Cutting the depth short instead of bringing the chest close to the bench, which removes most of the chest work.',
      'Using a surface that is too high — turns the push-up into a near-standing motion with little load.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-elevated-push-up.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-elevated-push-up',
    custom: false
  },
  {
    id: 'b51',
    name: 'Bodyweight Hip Abduction',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A side-lying leg lift that targets the glute medius — the small but essential glute exercise for hip stability and shape.',
    benefits: [
      'Builds the glute medius for hip stability and rounded glute shape.',
      'Improves knee tracking under squats and lunges.',
      'Activates the lateral hip muscles before lower-body training.'
    ],
    instructions: [
      'Lie on your side on a mat with your legs stacked, your bottom arm extended under your head for support.',
      'Stack your hips squarely on top of each other and bend the bottom leg slightly for stability.',
      'Keep the top leg straight with the toes pointing slightly forward and your foot flexed.',
      'Lift the top leg straight up toward the ceiling in a smooth, controlled motion.',
      'Stop when you feel a strong contraction in the side of the hip — usually around 30 to 45 degrees.',
      'Lower the leg back down slowly without letting it touch the bottom leg, then repeat for reps.'
    ],
    commonMistakes: [
      'Rolling the hips back to lift the leg higher, which lets the hip flexors take over from the glute medius.',
      'Lifting the leg too fast, which removes the time-under-tension that builds the glute.',
      'Pointing the toes up instead of flexing the foot, which shifts the work off the side hip.',
      'Letting the top hip drift forward — kills the side-glute contraction and turns the lift into a leg swing.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-hip-abduction.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-hip-abduction',
    custom: false
  },
  {
    id: 'b52',
    name: 'Bodyweight Knee Push Ups',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A push-up done from the knees that drops the load — the first regression that lets beginners actually train the push pattern.',
    benefits: [
      'Builds chest and triceps strength at a beginner-friendly load.',
      'Teaches clean push-up mechanics before progressing to full push-ups.',
      'Trains the upper body anywhere with no equipment.'
    ],
    instructions: [
      'Start on all fours with hands placed slightly wider than shoulder width on the floor.',
      'Walk your hands forward and lower your hips so your body forms a straight line from head to knees.',
      'Brace your core, squeeze your glutes, and pull your shoulder blades back and down.',
      'Lower your chest toward the floor under control with elbows tracked at about 45 degrees from your torso.',
      'Pause briefly with your chest just above the floor, keeping full-body tension throughout.',
      'Press back up through the palms until your arms lock out, then reset for the next rep.'
    ],
    commonMistakes: [
      'Letting the hips pike up so the body bends at the waist, which removes most of the chest work.',
      'Flaring the elbows out to 90 degrees, which strains the front shoulders and reduces chest engagement.',
      'Cutting the depth short and bouncing off a partial range, which kills the strength carryover.',
      'Sitting the hips back toward the heels — turns a push-up into a half-rep stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-knee-push-ups.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-knee-push-ups',
    custom: false
  },
  {
    id: 'b53',
    name: 'Bodyweight Reverse Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A single-leg lunge stepping backward — builds the glutes and quads while staying easy on the front knee.',
    benefits: [
      'Builds the glutes, quads, and hamstrings through a single-leg pattern.',
      'Easier on the knees than forward lunges, making it accessible for more users.',
      'Trains balance and stability without weights.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart and your hands on your hips or at your chest.',
      'Take a long step back with one leg, planting the ball of the back foot down lightly.',
      'Lower the back knee straight down toward the floor while keeping the front shin near vertical.',
      'Drop until the back knee is just above the ground and the front thigh is roughly parallel to the floor.',
      'Drive through the heel of the front foot to push yourself back up to a tall standing position.',
      'Repeat on the same leg for the prescribed reps, then switch sides without losing form.'
    ],
    commonMistakes: [
      'Stepping back too short, which puts the load on the front knee instead of the front glute.',
      'Letting the front knee cave inward instead of tracking over the foot.',
      'Pushing off the back foot instead of driving through the front heel — robs the working leg of work.',
      'Slamming the back knee into the floor instead of lowering it under control.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-reverse-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-reverse-lunge',
    custom: false
  },
  {
    id: 'b54',
    name: 'Bodyweight Russian Twist',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Rotation',
    description: 'A seated rotational core exercise that twists side to side — the most recognizable oblique builder in any ab program.',
    benefits: [
      'Builds the obliques and abdominals through the rotation pattern.',
      'Develops core endurance and rotational strength.',
      'Trains the core anywhere with no equipment needed.'
    ],
    instructions: [
      'Sit on the floor with your knees bent and your feet flat on the ground in front of you.',
      'Lean back until your torso is at about a 45-degree angle and brace your core hard.',
      'Lift your feet a few inches off the floor and balance on your sit bones with shins parallel to the ground.',
      'Clasp your hands together in front of your chest and rotate your torso to one side under control.',
      'Tap your hands lightly to the floor beside your hip, feeling the oblique on that side contract.',
      'Rotate smoothly to the other side and tap, alternating for the prescribed reps without dropping the feet.'
    ],
    commonMistakes: [
      'Just swinging the arms side to side without rotating the torso — loads the shoulders, not the core.',
      'Rounding the back instead of staying tall through the spine, which strains the lower back.',
      'Letting the feet drop to the floor every rep, which breaks the constant core tension.',
      'Rushing the tempo instead of pausing on each side — turns a controlled twist into momentum-only work.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-russian-twist.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-russian-twist',
    custom: false
  },
  {
    id: 'b55',
    name: 'Bodyweight Spinal Jefferson Curl',
    primaryMuscle: 'back',
    secondaryMuscles: ['upper_legs'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Stretch',
    description: 'A slow, segmented forward fold that mobilizes the entire spine — the gymnastics-staple flexibility drill for stiff backs.',
    benefits: [
      'Improves spinal mobility through a full forward-fold range.',
      'Stretches the hamstrings, glutes, and entire back of the body.',
      'Builds resilience and control in a flexed spine position.'
    ],
    instructions: [
      'Stand tall on a flat surface with feet hip-width apart and arms hanging in front of your thighs.',
      'Tuck your chin to your chest and start rolling down slowly, one vertebra at a time.',
      'Continue folding forward through the upper back, then mid-back, then lower back as you descend.',
      'Let your arms hang relaxed in front of your shins and reach for the floor without straining.',
      'Pause briefly at the bottom, feeling the stretch through the entire back of the body.',
      'Reverse the motion by rolling back up segment by segment until you stand fully tall again.'
    ],
    commonMistakes: [
      'Folding from the hips only instead of rounding the spine — defeats the entire point of the drill.',
      'Bending the knees too much, which removes the hamstring stretch and shortens the load on the back.',
      'Going too heavy too soon — this is a mobility tool, not a strength lift.',
      'Snapping back up to standing instead of rolling up segment by segment under control.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-spinal-jefferson-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-spinal-jefferson-curl',
    custom: false
  },
  {
    id: 'b56',
    name: 'Bodyweight Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Squat',
    description: 'The foundational squat pattern done with just bodyweight — the first leg exercise in any program and the test of clean mechanics.',
    benefits: [
      'Builds the quads, glutes, and inner thighs with no equipment.',
      'Teaches the foundational squat pattern for every loaded variation.',
      'Improves lower-body mobility and balance in any setting.'
    ],
    instructions: [
      'Stand tall with feet shoulder-width apart and your toes pointed slightly outward.',
      'Brace your core, lift your chest, and extend your arms straight out for balance.',
      'Sit your hips back and down as if lowering into a chair, keeping your weight in your heels.',
      'Lower until your thighs are at least parallel to the floor, with knees tracking over your toes.',
      'Keep your chest tall and your spine neutral throughout the descent — no rounding at the bottom.',
      'Drive through your heels to stand back up, squeezing your glutes hard at the top of the rep.'
    ],
    commonMistakes: [
      'Letting the knees cave inward, which weakens the squat and loads the knee joint badly.',
      'Squatting straight down instead of sitting the hips back, which puts all the work on the knees.',
      'Lifting the heels off the floor at the bottom, which kills balance and reduces glute drive.',
      'Cutting the depth short and squatting only halfway — robs the lift of glute and quad work.'
    ],
    mediaUrl: 'https://media.larofit.com/bodyweight-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bodyweight-squat',
    custom: false
  },
  {
    id: 'b57',
    name: 'Box Jump',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Plyometric',
    description: 'An explosive jump from the floor onto a box — the clean way to train lower-body power without high-impact landings.',
    benefits: [
      'Builds explosive lower-body power for sport and athletic performance.',
      'Trains reactive strength with reduced landing impact.',
      'Develops glute, quad, and calf power through triple extension.'
    ],
    instructions: [
      'Stand a comfortable distance in front of a sturdy box with feet shoulder-width apart.',
      'Drop into a quarter squat by sitting your hips back and swinging your arms behind you.',
      'Explode upward by driving through the floor and swinging your arms forward and up.',
      'Pull your knees up underneath you in mid-air and aim to land softly on top of the box.',
      'Land in a soft quarter squat with both feet flat on the box and your chest tall.',
      'Stand fully tall on top of the box, then step down one leg at a time and reset for the next rep.'
    ],
    commonMistakes: [
      'Jumping down from the box instead of stepping down — adds unnecessary impact to the knees over volume.',
      'Landing with stiff legs and a flat impact instead of absorbing softly into a quarter squat.',
      'Choosing a box too tall and barely clearing it, which leads to scraped shins and missed reps.',
      'Using too much arm swing without leg drive — turns a power lift into an arm-thrown jump.'
    ],
    mediaUrl: 'https://media.larofit.com/box-jump.mp4',
    exerciseUrl: 'https://movekit.com/exercises/box-jump',
    custom: false
  },
  {
    id: 'b58',
    name: 'Bulgarian Split Squat',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A rear-foot-elevated split squat that punishes one leg at a time — the most effective single-leg builder in any program.',
    benefits: [
      'Builds single-leg strength in the glutes, quads, and hamstrings.',
      'Exposes and corrects left-right strength imbalances.',
      'Improves hip stability and balance under load.'
    ],
    instructions: [
      'Stand a stride-length away from a bench and place the top of your back foot on the bench behind you.',
      'Square your hips forward and brace your core with your hands on your hips or at your chest.',
      'Lower your back knee straight down toward the floor while keeping your front shin near vertical.',
      'Drop until the back knee is just above the ground and the front thigh is roughly parallel to the floor.',
      'Keep your weight in the front heel and your chest tall throughout the descent.',
      'Drive through the front heel to push yourself back up, finishing with the front glute squeezed.'
    ],
    commonMistakes: [
      'Standing too close to the bench, which shoves the front knee too far forward and loads the joint.',
      'Letting the front knee cave inward instead of tracking over the foot.',
      'Pushing off the back foot instead of driving through the front heel — robs the front leg of work.',
      'Twisting the hips to compensate for balance instead of staying square — kills the unilateral training.'
    ],
    mediaUrl: 'https://media.larofit.com/bulgarian-split-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/bulgarian-split-squat',
    custom: false
  },
  {
    id: 'b59',
    name: 'Burpee',
    primaryMuscle: 'cardio',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Plyometric',
    description: 'A squat-thrust into a push-up into a jump — the full-body conditioning move that hits everything in one rep.',
    benefits: [
      'Trains full-body strength and conditioning in a single movement.',
      'Spikes the heart rate fast for efficient cardio work.',
      'Builds explosive power, pressing strength, and core endurance at once.'
    ],
    instructions: [
      'Stand tall with feet shoulder-width apart, arms relaxed at your sides, and core braced.',
      'Drop into a low squat and place your hands on the floor just in front of your feet.',
      'Kick or step both feet back so you land in a high plank position with arms straight.',
      'Lower your chest to the floor in a controlled push-up, then press back up to the high plank.',
      'Jump or step both feet back up under your hips into the squat position.',
      'Explode upward into a jump with arms reaching overhead, land softly, and reset for the next rep.'
    ],
    commonMistakes: [
      'Skipping the push-up at the bottom and turning the burpee into a squat-thrust-jump instead.',
      'Sagging the hips in the plank position, which strains the lower back over volume.',
      'Landing the jump with stiff legs instead of absorbing softly into a quarter squat.',
      'Going so fast that form collapses — turns a conditioning lift into a sloppy injury risk.'
    ],
    mediaUrl: 'https://media.larofit.com/burpee.mp4',
    exerciseUrl: 'https://movekit.com/exercises/burpee',
    custom: false
  },
  {
    id: 'b60',
    name: 'Cable 30 Degree Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A cable shrug performed at a 30-degree angle that loads the upper traps along their natural fiber line — the smarter shrug variation.',
    benefits: [
      'Builds upper-trap size along the natural fiber direction.',
      'Develops back thickness and a stronger upper-back silhouette.',
      'Trains the traps through a fuller range than standing dumbbell shrugs.'
    ],
    instructions: [
      'Set the cable at the lowest pulley setting and attach a straight bar or rope handle.',
      'Stand a foot or two back from the cable and grip the handle with arms straight.',
      'Lean your torso forward at about a 30-degree angle, keeping a flat back and braced core.',
      'Let your shoulders relax forward and down so the cable pulls your traps into a stretch.',
      'Shrug your shoulders up and slightly back along the angle of the cable, squeezing the traps hard.',
      'Lower the weight back down under control over 2 to 3 seconds and repeat for high reps.'
    ],
    commonMistakes: [
      'Standing fully upright, which turns the lift into a regular straight-up shrug.',
      'Bending the elbows instead of keeping the arms straight — loads the biceps, not the traps.',
      'Rounding the lower back in the leaned-over position, which strains the spine over volume.',
      'Using too much weight and rolling the shoulders forward instead of shrugging up and back.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-30-degree-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-30-degree-shrug',
    custom: false
  },
  {
    id: 'b61',
    name: 'Cable Bar Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A two-handed cable curl using a straight bar attachment that hammers the biceps with constant tension from bottom to top.',
    benefits: [
      'Builds biceps size and peak with constant cable tension.',
      'Trains both heads of the biceps through a full range of motion.',
      'Reinforces strict elbow mechanics for cleaner curl form.'
    ],
    instructions: [
      'Set the pulley to the lowest position and attach a straight bar, then grip it underhand at shoulder width.',
      'Step back so the cable has tension at full arm extension and stand tall with your elbows tucked at your ribs.',
      'Curl the bar up toward your shoulders by bending only at the elbows, keeping the upper arms locked in place.',
      'Squeeze the biceps hard at the top with the bar a few inches from your collarbone.',
      'Lower the bar slowly over 2 to 3 seconds, fighting the cable tension all the way back to full extension.',
      'Reset your stance and repeat for 10 to 15 controlled reps without using your back or hips.'
    ],
    commonMistakes: [
      'Swinging the torso back to fling the bar up, which steals load from the biceps and risks lower-back strain.',
      'Letting the elbows drift forward at the top, turning the curl into a partial front raise.',
      'Cutting the lockout short at the bottom, missing the long-head stretch where most growth lives.',
      'Rushing the lowering phase, which throws away the highest-tension half of the rep where the biceps grow most.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-bar-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-bar-curl',
    custom: false
  },
  {
    id: 'b62',
    name: 'Cable Bar Face Pull',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A high-cable face pull using a straight bar that targets the rear delts and upper-back posture muscles.',
    benefits: [
      'Builds the rear delts and upper-back muscles that balance pressing work.',
      'Reinforces healthy shoulder posture for desk workers and lifters alike.',
      'Strengthens the small stabilizers around the shoulder blade for joint health.'
    ],
    instructions: [
      'Set the pulley above head height and attach a straight bar, then grip it overhand at shoulder width.',
      'Step back until the cable has tension and stand with feet hip-width apart and a slight forward lean.',
      'Pull the bar toward your forehead with the elbows flaring wide and high, leading with the back of the upper arms.',
      'Squeeze your rear delts and upper back at the end of the pull, keeping your wrists in line with your forearms.',
      'Slowly let the bar travel back to full arm extension over 2 to 3 seconds, keeping the chest tall.',
      'Repeat for 12 to 20 reps, prioritizing the squeeze and elbow path over loading heavy weight.'
    ],
    commonMistakes: [
      'Pulling the bar too low toward the chin or chest, which turns the lift into a row and loses the rear-delt focus.',
      'Letting the elbows drop instead of leading high and wide, swapping rear-delt work for biceps engagement.',
      'Leaning back hard to use bodyweight as a counterweight instead of pulling cleanly with the back.',
      'Loading too heavy and shrugging the traps up, hiding the rear delts under upper-trap dominance.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-bar-face-pull.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-bar-face-pull',
    custom: false
  },
  {
    id: 'b63',
    name: 'Cable Bar Pushdown',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing triceps pushdown using a straight bar attachment — the most efficient way to isolate the triceps with cables.',
    benefits: [
      'Builds triceps size and lockout strength with isolated tension.',
      'Targets all three heads of the triceps through a full range of motion.',
      'Reinforces stable elbow mechanics for stronger pressing lifts.'
    ],
    instructions: [
      'Set the pulley to the highest position and attach a straight bar, then grip it overhand at shoulder width.',
      'Step close to the stack and tuck your elbows tight against your ribs with your forearms parallel to the floor.',
      'Press the bar straight down by extending your elbows fully, keeping the upper arms locked in place.',
      'Squeeze the triceps hard at the bottom with the arms straight and the bar near your thighs.',
      'Let the bar travel back up slowly over 2 seconds, stopping when your forearms are parallel to the floor.',
      'Repeat for 10 to 15 reps, keeping a tall torso and avoiding any forward lean to muscle the bar down.'
    ],
    commonMistakes: [
      'Letting the elbows flare forward and away from the ribs, turning the lift into a chest-driven press.',
      'Leaning the torso forward to push down with bodyweight, which steals load from the triceps.',
      'Cutting the lockout short, missing the strongest contraction at the bottom of the movement.',
      'Bouncing the weight up at the top instead of controlling the return, throwing away half the working set.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-bar-pushdown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-bar-pushdown',
    custom: false
  },
  {
    id: 'b64',
    name: 'Cable Bench Chest Fly',
    primaryMuscle: 'chest',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bench-supported cable fly that puts the chest under deep stretch with constant tension top to bottom.',
    benefits: [
      'Builds chest size with constant cable tension through a full arc.',
      'Develops the inner-chest squeeze that pressing alone misses.',
      'Trains the chest in deep stretch for stronger hypertrophy stimulus.'
    ],
    instructions: [
      'Position a flat bench between two cable stations and set both pulleys to the lowest position with single handles.',
      'Lie back on the bench and press both handles up over your chest with a slight bend in your elbows.',
      'Lower the handles out to your sides in a wide arc, keeping the elbow angle locked the whole way down.',
      'Stop when your hands are roughly level with your shoulders and you feel a deep stretch across the chest.',
      'Bring the handles back together in the same arc by squeezing the chest, finishing with the hands meeting above you.',
      'Pause at the top with a hard chest squeeze, then repeat for 10 to 15 controlled reps.'
    ],
    commonMistakes: [
      'Bending the elbows mid-rep, which turns the fly into a sloppy press and shifts load off the chest.',
      'Dropping the hands too far below shoulder level, overstretching the front shoulders and risking joint strain.',
      'Rushing the lowering phase, where most of the chest-building tension lives.',
      'Letting the shoulders roll forward off the bench, losing the stable platform that keeps the chest loaded.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-bench-chest-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-bench-chest-fly',
    custom: false
  },
  {
    id: 'b65',
    name: 'Cable Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A bench-supported cable press that trains the chest and triceps with smooth, constant tension through the full press.',
    benefits: [
      'Builds chest and triceps strength with smooth, constant tension.',
      'Removes the lockout dead spot found in barbell pressing.',
      'Allows independent arm work to expose and fix side-to-side imbalances.'
    ],
    instructions: [
      'Place a flat bench between two cable stations and set both pulleys to the lowest position with single handles.',
      'Lie back on the bench and press both handles up so your arms are extended directly over your chest.',
      'Lower the handles to chest level with the elbows tracking at about 60 to 75 degrees from your torso.',
      'Pause briefly at the bottom with a deep chest stretch and a tight upper back pressed into the bench.',
      'Press both handles back up in a slight arc until they meet above your chest at full arm extension.',
      'Squeeze the chest at the top and repeat for 8 to 12 controlled reps.'
    ],
    commonMistakes: [
      'Letting the elbows flare wide to 90 degrees, which strains the front shoulders and reduces chest engagement.',
      'Pressing the handles in different paths, causing one side to dominate and creating uneven loading.',
      'Cutting the lockout short, missing the chest-squeeze position at the top of the press.',
      'Lifting the head or hips off the bench for leverage, which destabilizes the press.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-bench-press',
    custom: false
  },
  {
    id: 'b66',
    name: 'Cable Bench Straight Leg Kickback',
    primaryMuscle: 'glutes',
    secondaryMuscles: ['abs'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bench-supported cable kickback that isolates the glutes with a straight-leg drive against constant cable tension.',
    benefits: [
      'Isolates and builds the glutes without involving the quads.',
      'Strengthens hip extension for sport, sprinting, and heavier hinges.',
      'Shapes the glutes from a different angle than squats and deadlifts.'
    ],
    instructions: [
      'Attach a cable cuff to your ankle and set the pulley to the lowest position, then face the cable stack.',
      'Stand a few feet back from the stack and rest your forearms on a flat bench in front of you.',
      'Brace your core and start with the working leg lightly forward so the cable has tension at rest.',
      'Drive the straight leg back and up by squeezing the glute, finishing in line with or slightly above your torso.',
      'Pause at the top for a hard glute squeeze, keeping your hips level and your lower back neutral.',
      'Lower the leg under control back to the start, then repeat for 12 to 15 reps before switching sides.'
    ],
    commonMistakes: [
      'Arching the lower back to throw the leg higher, which loads the spine instead of the glutes.',
      'Letting the working hip rotate open, which lets the lower back take over the movement.',
      'Bending the knee mid-rep, swapping glute work for hamstring engagement.',
      'Rushing the return phase and letting the cable yank the leg forward instead of controlling the descent.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-bench-straight-leg-kickback.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-bench-straight-leg-kickback',
    custom: false
  },
  {
    id: 'b67',
    name: 'Cable Chest Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A standing cable press that trains the chest, triceps, and front delts through a horizontal push pattern with constant tension.',
    benefits: [
      'Builds chest, triceps, and front-delt strength in a standing position.',
      'Trains the core to brace against horizontal load — useful for sport.',
      'Removes the lockout dead spot found in barbell pressing.'
    ],
    instructions: [
      'Set both cable pulleys to chest height and grip a single handle in each hand with an overhand grip.',
      'Step forward into a staggered stance with one foot ahead of the other and brace your core hard.',
      'Start with the handles by your chest, elbows tucked at about 60 to 75 degrees from your torso.',
      'Press both handles forward in a slight arc until your arms meet at full extension in front of your chest.',
      'Squeeze the chest at the top, then return the handles slowly to the start over 2 to 3 seconds.',
      'Repeat for 10 to 15 reps, keeping the torso upright and the staggered stance locked the whole set.'
    ],
    commonMistakes: [
      'Leaning the torso forward to push the handles instead of pressing cleanly with the chest and arms.',
      'Letting the elbows flare wide to shoulder height, which strains the front shoulders.',
      'Allowing one arm to lead the press, creating uneven loading and shoulder asymmetry over time.',
      'Cutting the range short on the way back, missing the chest stretch that drives growth.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-chest-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-chest-press',
    custom: false
  },
  {
    id: 'b68',
    name: 'Cable Decline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A decline cable press performed on a bench that targets the lower chest with smooth constant tension.',
    benefits: [
      'Targets the lower chest with constant cable tension.',
      'Builds a thicker lower-chest line for balanced chest development.',
      'Removes the lockout dead spot found in barbell decline pressing.'
    ],
    instructions: [
      'Set a decline bench between two cable stations with both pulleys at the lowest position and single handles attached.',
      'Lock your feet under the pads and lie back, then press both handles up over your lower chest.',
      'Lower the handles to chest level with the elbows tracking at about 60 to 75 degrees from your torso.',
      'Pause briefly at the bottom with a deep chest stretch, keeping the upper back tight against the bench.',
      'Press the handles back up in a slight arc until they meet above the lower chest at full extension.',
      'Squeeze the chest hard at the top and repeat for 8 to 12 reps with controlled tempo.'
    ],
    commonMistakes: [
      'Letting the elbows flare wide, which strains the front shoulders and pulls focus off the lower chest.',
      'Rushing the descent and missing the deep chest stretch that drives hypertrophy.',
      'Pressing the handles unevenly, creating side-to-side imbalances over time.',
      'Lifting the hips off the bench for leverage, which destabilizes the press and risks back strain.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-decline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-decline-bench-press',
    custom: false
  },
  {
    id: 'b69',
    name: 'Cable Incline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'An incline cable press that targets the upper chest and triceps with constant tension through every inch of the press.',
    benefits: [
      'Builds the upper chest with constant cable tension.',
      'Develops the upper-chest shelf for a fuller, more balanced chest.',
      'Removes the lockout dead spot found in barbell incline pressing.'
    ],
    instructions: [
      'Set an incline bench to about 30 to 45 degrees between two cable stations with low pulleys and single handles.',
      'Sit back into the bench and press both handles up so the arms are extended over the upper chest.',
      'Lower the handles to upper-chest level with the elbows tracking at about 60 to 75 degrees from your torso.',
      'Pause at the bottom with a deep stretch across the upper chest and a tight upper back.',
      'Press the handles back up in a slight arc until they meet above the upper chest at full arm extension.',
      'Squeeze the upper chest at the top and repeat for 8 to 12 controlled reps.'
    ],
    commonMistakes: [
      'Setting the bench too steep, which turns the press into a shoulder-dominant lift.',
      'Letting the elbows flare wide, straining the front shoulders and reducing upper-chest engagement.',
      'Pressing too fast and skipping the stretch, missing the highest-tension portion of the rep.',
      'Lifting the hips off the bench for leverage, which destabilizes the press.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-incline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-incline-bench-press',
    custom: false
  },
  {
    id: 'b70',
    name: 'Cable Overhead Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A standing cable press overhead that builds the front and side shoulders with smooth constant tension top to bottom.',
    benefits: [
      'Builds the front and side shoulders with constant cable tension.',
      'Strengthens the core to brace against vertical overhead load.',
      'Trains a standing pressing pattern that transfers to sport and daily life.'
    ],
    instructions: [
      'Set both cable pulleys to the lowest position and grip a single handle in each hand with an overhand grip.',
      'Step into the cables with a staggered stance, brace your core, and bring the handles to shoulder height.',
      'Start with the elbows tucked roughly 30 degrees in front of the torso and forearms vertical.',
      'Press both handles straight up overhead until the arms lock out with the handles meeting above your head.',
      'Squeeze the shoulders at the top, then lower the handles slowly back to shoulder height over 2 seconds.',
      'Repeat for 8 to 12 controlled reps without leaning back or pressing the hips forward.'
    ],
    commonMistakes: [
      'Leaning back hard to push the handles up, which turns the lift into a standing incline press and risks back strain.',
      'Letting the elbows flare straight out to the sides, which strains the front shoulders.',
      'Cutting the lockout short and missing the strongest contraction at the top.',
      'Pressing too fast on the descent and losing tension before the next rep.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-overhead-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-overhead-press',
    custom: false
  },
  {
    id: 'b71',
    name: 'Cable Pec Fly',
    primaryMuscle: 'chest',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing cable fly that isolates the chest with constant tension from a deep stretch to a hard squeeze.',
    benefits: [
      'Isolates the chest with constant cable tension.',
      'Develops the inner-chest squeeze that pressing alone misses.',
      'Loads the chest in deep stretch for stronger hypertrophy stimulus.'
    ],
    instructions: [
      'Set both cable pulleys to chest height and grip a single handle in each hand with a slight elbow bend.',
      'Step forward into a staggered stance and lean slightly forward at the hips with a tall chest.',
      'Start with the arms stretched out wide in line with your chest, palms facing forward.',
      'Bring both handles together in a wide arc by squeezing the chest, finishing with hands meeting in front of you.',
      'Pause at the top with a hard chest squeeze, keeping the elbow bend locked the whole way.',
      'Open the arms back out slowly over 2 to 3 seconds and repeat for 12 to 15 reps.'
    ],
    commonMistakes: [
      'Bending the elbows mid-rep, which turns the fly into a sloppy press and loses the chest focus.',
      'Letting the hands drop too far behind the body, overstretching the front shoulders.',
      'Rushing the opening phase, throwing away the slow return where most of the chest tension lives.',
      'Using the torso to swing the handles together instead of squeezing with the chest.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-pec-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-pec-fly',
    custom: false
  },
  {
    id: 'b72',
    name: 'Cable Rope Kneeling Face Pull',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['back'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A kneeling rope face pull that locks out body english and isolates the rear delts and mid-back.',
    benefits: [
      'Isolates the rear delts and mid-back without bodyweight cheating.',
      'Reinforces healthy shoulder posture for desk workers and lifters.',
      'Strengthens the small stabilizers around the shoulder blade for joint health.'
    ],
    instructions: [
      'Set the pulley above head height and attach a rope, then kneel facing the cable stack on both knees.',
      'Grip the rope with palms facing each other and arms extended forward at eye level with cable tension.',
      'Pull the rope toward your forehead with the elbows flaring wide and high, leading with the upper arms.',
      'Separate the rope ends as you pull, finishing with hands by your ears and elbows in line with your shoulders.',
      'Squeeze the rear delts and mid-back hard at the end of the pull, keeping the chest tall.',
      'Slowly let the rope travel back to the start over 2 seconds and repeat for 12 to 20 reps.'
    ],
    commonMistakes: [
      'Pulling the rope toward the chin or chest, which turns the lift into a row and loses the rear-delt focus.',
      'Letting the elbows drop, swapping rear-delt work for biceps engagement.',
      'Rocking back on the knees to use bodyweight as a counterweight.',
      'Loading too heavy and shrugging the traps up, hiding the rear delts under upper-trap dominance.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-rope-kneeling-face-pull.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-rope-kneeling-face-pull',
    custom: false
  },
  {
    id: 'b73',
    name: 'Cable Rope Pushdown',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing triceps pushdown using a rope attachment that lets the hands separate for a deeper triceps squeeze.',
    benefits: [
      'Builds triceps size with a deep contraction at lockout.',
      'Targets the long head of the triceps more than a straight bar pushdown.',
      'Reinforces stable elbow mechanics for stronger pressing lifts.'
    ],
    instructions: [
      'Set the pulley to the highest position and attach a rope, then grip both ends with palms facing each other.',
      'Step close to the stack and tuck your elbows tight against your ribs with forearms parallel to the floor.',
      'Press both ends of the rope straight down by extending your elbows until your arms are fully locked out.',
      'Pull the rope ends apart at the bottom and rotate the palms down for an extra triceps squeeze.',
      'Let the rope travel back up slowly over 2 seconds, stopping when forearms are parallel to the floor.',
      'Repeat for 10 to 15 reps without leaning forward or letting the elbows drift away from the ribs.'
    ],
    commonMistakes: [
      'Letting the elbows flare forward, turning the lift into a chest-driven press.',
      'Leaning the torso forward to push down with bodyweight, stealing load from the triceps.',
      'Skipping the hand separation at the bottom, missing the deeper long-head contraction.',
      'Bouncing the weight up at the top instead of controlling the return.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-rope-pushdown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-rope-pushdown',
    custom: false
  },
  {
    id: 'b74',
    name: 'Cable Row Bar Standing Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A standing horizontal cable row using a straight bar that builds the lats, mid-back, and biceps.',
    benefits: [
      'Builds the lats, mid-back, and biceps in a horizontal pull pattern.',
      'Trains the core to brace against horizontal load — useful for sport.',
      'Reinforces the pull pattern that balances out heavy pressing work.'
    ],
    instructions: [
      'Set the cable pulley to chest height and attach a straight bar, then grip it overhand at shoulder width.',
      'Step back until the cable has tension at full arm extension and stand with feet hip-width apart.',
      'Brace your core and pull the bar toward your lower chest, keeping the elbows close to your sides.',
      'Squeeze your shoulder blades together at the end of the pull, feeling the mid-back engage.',
      'Slowly let the bar travel back to full arm extension over 2 to 3 seconds, fighting the cable tension.',
      'Repeat for 10 to 15 reps, keeping the torso upright and avoiding any backward lean.'
    ],
    commonMistakes: [
      'Leaning back hard to use bodyweight instead of pulling cleanly with the back.',
      'Letting the elbows flare wide, which loads the rear delts and pulls focus off the lats.',
      'Shrugging the shoulders up at the end of the pull, swapping mid-back work for trap engagement.',
      'Snapping the bar back forward and skipping the slow return, where most of the muscle-building tension lives.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-row-bar-standing-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-row-bar-standing-row',
    custom: false
  },
  {
    id: 'b75',
    name: 'Cable Seated Rope Face Pull',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A seated rope face pull that removes body english and isolates the rear delts and upper back.',
    benefits: [
      'Isolates the rear delts in a locked-in seated position.',
      'Reinforces healthy shoulder posture for desk workers and lifters.',
      'Strengthens the small stabilizers around the shoulder blade for joint health.'
    ],
    instructions: [
      'Set the pulley above head height and attach a rope, then sit on a bench facing the cable stack.',
      'Grip the rope with palms facing each other and arms extended forward at eye level with cable tension.',
      'Sit tall with feet planted, brace your core, and start with no slack in the cable.',
      'Pull the rope toward your forehead with elbows flaring wide and high, leading with the upper arms.',
      'Separate the rope ends and squeeze the rear delts and upper back hard at the end of the pull.',
      'Slowly let the rope travel back to the start over 2 seconds and repeat for 12 to 20 reps.'
    ],
    commonMistakes: [
      'Pulling the rope toward the chin or chest, which turns the lift into a row.',
      'Letting the elbows drop, swapping rear-delt work for biceps engagement.',
      'Rounding the upper back as you pull, hiding the mid-back contraction.',
      'Loading too heavy and shrugging the traps up, hiding the rear delts under upper-trap dominance.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-seated-rope-face-pull.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-seated-rope-face-pull',
    custom: false
  },
  {
    id: 'b76',
    name: 'Cable Side Bend',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A standing cable side bend that loads the obliques against constant tension for a stronger, more defined waist.',
    benefits: [
      'Builds the obliques with constant cable tension.',
      'Strengthens lateral core control for sport, rotation, and bracing.',
      'Trains each side of the core independently to fix imbalances.'
    ],
    instructions: [
      'Set the pulley to the lowest position and attach a single handle, then stand sideways to the cable stack.',
      'Grip the handle with the hand closest to the stack and stand tall with feet hip-width apart.',
      'Place your non-working hand on your hip and let the cable pull you slightly toward the stack at the start.',
      'Bend sideways away from the stack by contracting the obliques on the far side of your body.',
      'Pause at the end of the bend with a hard oblique squeeze, keeping the hips square and chest tall.',
      'Return slowly to the start over 2 seconds, then repeat for 12 to 15 reps before switching sides.'
    ],
    commonMistakes: [
      'Bending forward or backward instead of straight to the side, taking the obliques out of the lift.',
      'Using the arm to pull the cable up, which turns the lift into a one-arm shrug.',
      'Letting the hips shift sideways, which steals load from the obliques.',
      'Rushing the rep and bouncing at the bottom instead of controlling the return phase.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-side-bend.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-side-bend',
    custom: false
  },
  {
    id: 'b77',
    name: 'Cable Single Arm Neutral Grip Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A single-arm cable row with a neutral-grip handle that builds the lats and biceps one side at a time.',
    benefits: [
      'Builds the lats and biceps one side at a time to fix imbalances.',
      'Trains a joint-friendly neutral grip that protects wrists and shoulders.',
      'Reinforces the horizontal pull pattern that balances pressing work.'
    ],
    instructions: [
      'Set the cable pulley to chest height and attach a single neutral-grip handle, then grip it with one hand.',
      'Step back until the cable has tension at full arm extension and stand in a staggered stance.',
      'Brace your core and place your non-working hand on your hip or a stable surface for support.',
      'Pull the handle toward your lower ribs, keeping the elbow close to your side and leading with the elbow.',
      'Squeeze your shoulder blade back and down at the end of the pull, feeling the lat engage.',
      'Slowly let the handle travel back to full arm extension over 2 to 3 seconds, then repeat for 10 to 15 reps per side.'
    ],
    commonMistakes: [
      'Rotating the torso to throw the elbow back, which steals load from the lat.',
      'Letting the elbow flare wide, which loads the rear delt instead of the lat.',
      'Shrugging the shoulder up at the end of the pull, swapping lat work for trap engagement.',
      'Snapping the handle back forward and skipping the slow return, where most of the growth lives.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-single-arm-neutral-grip-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-single-arm-neutral-grip-row',
    custom: false
  },
  {
    id: 'b78',
    name: 'Cable Single Arm Rope Pushdown',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A one-arm rope pushdown that isolates each triceps independently for a deeper squeeze and better symmetry.',
    benefits: [
      'Builds triceps size one side at a time to fix imbalances.',
      'Trains a deeper contraction than a two-handed pushdown allows.',
      'Reinforces stable elbow mechanics for stronger pressing lifts.'
    ],
    instructions: [
      'Set the pulley to the highest position and attach a rope, then grip one end with one hand using a neutral grip.',
      'Step close to the stack and tuck your working elbow tight against your ribs with the forearm parallel to the floor.',
      'Place your non-working hand on your hip and brace your core to keep the torso square to the cable.',
      'Press the rope end straight down by extending the elbow until the arm is fully locked out.',
      'Rotate the palm down at the bottom for an extra triceps squeeze, then pause briefly at lockout.',
      'Let the rope travel back up slowly over 2 seconds and repeat for 10 to 15 reps per side.'
    ],
    commonMistakes: [
      'Letting the elbow flare forward, turning the lift into a chest-driven press.',
      'Twisting the torso to muscle the rope down, which steals load from the triceps.',
      'Cutting the lockout short, missing the strongest contraction at the bottom.',
      'Bouncing the weight up at the top instead of controlling the return.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-single-arm-rope-pushdown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-single-arm-rope-pushdown',
    custom: false
  },
  {
    id: 'b79',
    name: 'Cable Single Arm Underhand Grip Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A single-arm cable row with an underhand grip that bias the lats and lower lats with deeper biceps engagement.',
    benefits: [
      'Builds the lats with a stronger lower-lat bias from the underhand grip.',
      'Trains one side at a time to expose and fix imbalances.',
      'Engages the biceps more directly for added pull-day arm work.'
    ],
    instructions: [
      'Set the cable pulley to chest height and attach a single handle, then grip it underhand with one hand.',
      'Step back until the cable has tension at full arm extension and stand in a staggered stance.',
      'Brace your core and place your non-working hand on your hip or a stable surface for support.',
      'Pull the handle toward your lower ribs with the elbow tucked tight to your side, palm facing up.',
      'Squeeze the lat hard at the end of the pull, keeping the chest tall and the shoulder packed down.',
      'Slowly let the handle travel back to full arm extension over 2 to 3 seconds, then repeat for 10 to 15 reps per side.'
    ],
    commonMistakes: [
      'Rotating the torso to throw the elbow back, stealing load from the lat.',
      'Letting the elbow flare out wide, which kills the lower-lat focus the underhand grip is meant to create.',
      'Curling the handle toward the shoulder instead of rowing toward the ribs, turning the lift into a biceps curl.',
      'Snapping the handle back forward and skipping the slow return, where most of the growth lives.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-single-arm-underhand-grip-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-single-arm-underhand-grip-row',
    custom: false
  },
  {
    id: 'b80',
    name: 'Cable Standing Low To High Wood Chopper',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Rotation',
    description: 'A standing low-to-high cable chop that builds rotational power through the obliques and full midsection.',
    benefits: [
      'Builds rotational power through the obliques and full midsection.',
      'Trains hip-to-shoulder energy transfer used in throwing and striking sports.',
      'Strengthens the core in a standing, sport-relevant pattern.'
    ],
    instructions: [
      'Set the pulley to the lowest position and attach a single handle, then stand sideways to the cable stack.',
      'Grip the handle with both hands and stand with feet shoulder-width apart, knees slightly bent.',
      'Brace your core and start with the handle near the hip closest to the stack, arms extended.',
      'Rotate your torso and pull the handle up and across your body to overhead on the opposite side.',
      'Pivot the back foot and let the hips follow the rotation, finishing with arms extended overhead.',
      'Reverse the path slowly back to the starting position over 2 to 3 seconds, then repeat for 10 reps per side.'
    ],
    commonMistakes: [
      'Pulling with the arms instead of rotating from the core, which kills the oblique engagement.',
      'Keeping the feet locked flat, which blocks the hips and forces the lower back to take over the rotation.',
      'Rushing the descent and letting the cable yank the handle back instead of controlling the return.',
      'Loading too heavy and rounding the lower back at the top, which risks spinal strain.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-standing-low-to-high-wood-chopper.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-standing-low-to-high-wood-chopper',
    custom: false
  },
  {
    id: 'b81',
    name: 'Cable Standing Single Arm Chest Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A standing one-arm cable press that trains the chest, front delts, and triceps while exposing side-to-side strength gaps.',
    benefits: [
      'Builds unilateral chest, front-shoulder, and triceps strength.',
      'Trains core anti-rotation strength under a real pressing load.',
      'Surfaces and corrects left-right pressing imbalances.'
    ],
    instructions: [
      'Set the cable pulley to chest height and grip the handle with one hand, palm facing down.',
      'Step forward into a split stance with the working side back, then square your shoulders and hips to the front.',
      'Brace your core hard so the cable can\'t pull your torso into rotation as you start the press.',
      'Press the handle straight forward until your arm is fully extended, keeping your shoulder pulled back.',
      'Pause for a beat at full extension, feeling the chest and triceps under tension before reversing.',
      'Return the handle slowly to your chest under control, then repeat for reps before switching sides.'
    ],
    commonMistakes: [
      'Letting the torso rotate toward the cable, which dumps the load into the obliques and out of the chest.',
      'Pressing across the body instead of straight forward, shortening the range and reducing chest work.',
      'Standing too close to the stack so the cable goes slack at the start of the rep, killing tension.',
      'Shrugging the shoulder up at full extension instead of keeping the shoulder blade pinned down.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-standing-single-arm-chest-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-standing-single-arm-chest-press',
    custom: false
  },
  {
    id: 'b82',
    name: 'Cable Supinating Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A horizontal cable row that rotates the palms up at the finish to load the lats and biceps in the same pull.',
    benefits: [
      'Builds the lats and biceps together with a strong end-range squeeze.',
      'Adds detail and volume to horizontal pulling work in any back program.',
      'Trains the rotated-grip pattern that mirrors chin-up and curl positions.'
    ],
    instructions: [
      'Attach two single-handle attachments to a low cable pulley and grip them with palms facing each other.',
      'Step back until the cables have full tension and stand tall with a slight knee bend and braced trunk.',
      'Pull both handles toward your ribs while rotating your wrists so your palms finish facing up at the top.',
      'Squeeze your shoulder blades together at the end of the pull, feeling the lats and biceps light up.',
      'Pause briefly with the elbows behind your torso, then begin reversing under control.',
      'Rotate the palms back to neutral as your arms straighten, fighting the cable the whole way out.'
    ],
    commonMistakes: [
      'Skipping the wrist rotation and rowing with a fixed grip, which loses the extra biceps and lat finish.',
      'Leaning back to use bodyweight instead of pulling cleanly with the back muscles.',
      'Letting the elbows drift wide so the rear delts take over and the lats stop working.',
      'Snapping back to the start position and skipping the slow return where most growth tension lives.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-supinating-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-supinating-row',
    custom: false
  },
  {
    id: 'b83',
    name: 'Cable Wood Chopper',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Rotation',
    description: 'A diagonal cable rotation that trains the obliques to drive force from a high anchor down across the body.',
    benefits: [
      'Builds rotational power through the obliques and trunk.',
      'Trains the core to transfer force between hips and shoulders.',
      'Carries directly into golf, tennis, throwing, and striking sports.'
    ],
    instructions: [
      'Anchor the cable at the highest pulley setting and grip the handle with both hands above one shoulder.',
      'Step out into a wide, athletic stance with feet planted and your knees softly bent.',
      'Brace your core, then pull the handle down and across your body toward the opposite hip.',
      'Drive the rotation with your trunk, letting your back foot pivot naturally as your hips turn.',
      'Pause for a beat at the bottom with arms straight and core locked, feeling the obliques under load.',
      'Return the handle slowly back to the start position above your shoulder, then repeat for reps.'
    ],
    commonMistakes: [
      'Pulling with the arms instead of rotating through the trunk, which removes the obliques from the lift.',
      'Letting the hips stay locked so all the motion happens at the lower back, risking strain.',
      'Using too much weight and yanking the cable, which trades clean rotation for momentum.',
      'Standing too close to the stack so the cable loses tension at the top of every rep.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-wood-chopper.mp4',
    exerciseUrl: 'https://movekit.com/exercises/cable-wood-chopper',
    custom: false
  },
  {
    id: 'b84',
    name: 'Chin Ups',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A vertical bodyweight pull with palms facing you that builds the lats, biceps, and grip in one of the most honest strength tests there is.',
    benefits: [
      'Builds the lats, biceps, and grip with one bodyweight movement.',
      'Develops relative strength that transfers to climbing, sport, and lifting.',
      'Trains the vertical pull pattern that balances out pressing work.'
    ],
    instructions: [
      'Reach up and grip the bar with palms facing you, hands about shoulder-width apart.',
      'Hang at full arm extension with the shoulders pulled down away from the ears and the core braced.',
      'Pull yourself up by driving the elbows down toward your ribs, leading with the chest.',
      'Continue the pull until your chin clears the bar and your upper chest is close to the bar.',
      'Pause for a beat at the top, squeezing the back and biceps without swinging.',
      'Lower yourself slowly to a full hang over 2 to 3 seconds, then repeat for reps.'
    ],
    commonMistakes: [
      'Kipping or swinging the legs to generate momentum instead of pulling cleanly with the back and arms.',
      'Cutting the range short by stopping before the chin clears the bar or skipping the full hang at the bottom.',
      'Shrugging the shoulders up at the start so the traps take over and the lats never engage.',
      'Dropping fast at the bottom and skipping the slow lowering phase, where most of the strength gains happen.'
    ],
    mediaUrl: 'https://media.larofit.com/chin-ups.mp4',
    exerciseUrl: 'https://movekit.com/exercises/chin-ups',
    custom: false
  },
  {
    id: 'b85',
    name: 'Decline Push Up',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A push up with feet elevated on a bench or step that biases the upper chest, front delts, and triceps without any equipment.',
    benefits: [
      'Biases the upper chest and front shoulders without barbell incline work.',
      'Builds bodyweight pressing strength using only a step or bench.',
      'Bridges the gap between standard push ups and harder pressing variations.'
    ],
    instructions: [
      'Place your feet on a sturdy bench, step, or low platform and lower your hands to the floor.',
      'Set your hands slightly wider than shoulder width with arms straight and your body in a long line.',
      'Brace your core and squeeze your glutes so your hips don\'t sag or pike during the rep.',
      'Lower your chest toward the floor under control, keeping the elbows tracked at about 45 degrees.',
      'Pause briefly when your chest is just above the floor, holding tension through the upper body.',
      'Press back up to full arm extension by driving through the chest and triceps, then repeat.'
    ],
    commonMistakes: [
      'Letting the hips sag toward the floor, which kills the line and shifts strain into the lower back.',
      'Flaring the elbows out to 90 degrees, which strains the front shoulders and reduces chest work.',
      'Bouncing at the bottom instead of pausing briefly to control the lift through the full range.',
      'Cutting the range short by stopping a long way above the floor and skipping the deep stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/decline-push-up.mp4',
    exerciseUrl: 'https://movekit.com/exercises/decline-push-up',
    custom: false
  },
  {
    id: 'b86',
    name: 'Diamond Push Ups',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A close-hand push up where the thumbs and index fingers form a diamond — turning a chest move into a triceps builder.',
    benefits: [
      'Builds triceps size and strength with only bodyweight.',
      'Develops a stronger lockout that carries into pressing lifts.',
      'Trains a tight, elbow-tucked press pattern that protects the shoulders.'
    ],
    instructions: [
      'Get into a high plank with your hands directly under your chest, thumbs and index fingers touching.',
      'Set your feet about hip-width apart and lock your body into a long line from head to heels.',
      'Brace your core and squeeze the glutes so the hips stay in line throughout the rep.',
      'Lower your chest toward your hands while keeping the elbows tucked close to your ribs.',
      'Pause briefly when the chest is just above your hands, feeling the triceps fully loaded.',
      'Press back up to full arm extension by driving through the triceps, then repeat for reps.'
    ],
    commonMistakes: [
      'Flaring the elbows out wide, which turns the lift back into a chest push up and removes the triceps focus.',
      'Letting the hips sag or pike, which breaks the plank line and shifts strain into the lower back.',
      'Not bringing the hands close enough so the diamond shape disappears and the lift loses its triceps bias.',
      'Cutting the range short by stopping high above the hands instead of touching down for full triceps stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/diamond-push-ups.mp4',
    exerciseUrl: 'https://movekit.com/exercises/diamond-push-ups',
    custom: false
  },
  {
    id: 'b87',
    name: 'Dumbbell Alternating Forward Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A loaded forward lunge that alternates legs each rep — training the quads, glutes, and balance one side at a time.',
    benefits: [
      'Builds single-leg strength in the quads and glutes.',
      'Improves balance and coordination under load.',
      'Surfaces and corrects left-right leg strength imbalances.'
    ],
    instructions: [
      'Hold a dumbbell in each hand at your sides with arms relaxed and shoulders pulled down and back.',
      'Stand tall with your feet hip-width apart and brace your core to set a stable starting position.',
      'Step forward with one leg into a long lunge, lowering your back knee toward the floor.',
      'Stop when your back knee is an inch above the floor and your front thigh is parallel to the ground.',
      'Drive through the heel of your front foot to push back to a tall standing position.',
      'Repeat the lunge with the opposite leg and continue alternating for the prescribed reps.'
    ],
    commonMistakes: [
      'Taking too short a step forward, which puts the front knee far past the toes and strains the joint.',
      'Letting the front knee cave inward, which loads the inside of the joint and weakens the lift.',
      'Leaning the torso forward over the front leg instead of staying tall and stacked through the trunk.',
      'Pushing off the back foot to stand instead of driving through the front-leg heel and glute.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-alternating-forward-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-alternating-forward-lunge',
    custom: false
  },
  {
    id: 'b88',
    name: 'Dumbbell Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'The dumbbell version of the classic bench press — a deeper-range chest builder with friendlier shoulders than a barbell.',
    benefits: [
      'Builds chest size, triceps, and front-delt strength with a deeper range than a barbell.',
      'Trains both sides independently so neither arm cheats the lift.',
      'Spares the shoulders compared to a fixed barbell pressing path.'
    ],
    instructions: [
      'Sit on a flat bench with a dumbbell on each thigh, then lie back as you kick the weights up to your chest.',
      'Plant your feet flat on the floor and pull your shoulder blades back and down into the bench.',
      'Press the dumbbells up until your arms are fully extended, with the weights stacked over your shoulders.',
      'Lower the dumbbells slowly to chest level with the elbows tracked at about 45 to 60 degrees.',
      'Pause briefly when the dumbbells reach the side of your chest, keeping full upper-back tension.',
      'Press the dumbbells back up explosively by driving through the chest and triceps to the top.'
    ],
    commonMistakes: [
      'Letting the elbows flare wide to 90 degrees, which strains the front shoulders and weakens the chest drive.',
      'Pressing the dumbbells together at the top so they clack — wasted range and no extra chest work.',
      'Losing the upper-back squeeze mid-set, causing the shoulders to roll forward under load.',
      'Cutting the range short and pressing only the top half, missing the deepest stretch on the chest.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-bench-press',
    custom: false
  },
  {
    id: 'b89',
    name: 'Dumbbell Bulgarian Split Squat',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Squat',
    description: 'A rear-foot-elevated split squat loaded with dumbbells — one of the highest-return single-leg exercises for quads and glutes.',
    benefits: [
      'Builds serious single-leg strength in the quads and glutes.',
      'Improves hip mobility, balance, and ankle stability under load.',
      'Surfaces left-right strength gaps a barbell squat can hide.'
    ],
    instructions: [
      'Hold a dumbbell in each hand and stand a long stride in front of a knee-high bench.',
      'Place the top of your back foot on the bench and set your front foot far enough forward to keep the knee stacked.',
      'Brace your core and stand tall, with shoulders pulled back and chest up.',
      'Lower yourself by bending the front knee until your back knee is just above the floor.',
      'Pause briefly at the bottom with the front thigh roughly parallel to the floor and the torso upright.',
      'Drive through the front-foot heel to stand back up to the starting position, then repeat for reps.'
    ],
    commonMistakes: [
      'Setting the front foot too close to the bench so the knee tracks far past the toes and gets overloaded.',
      'Letting the front knee cave inward, which loads the joint and weakens the glute drive.',
      'Pushing off the back foot to stand instead of driving through the front-leg heel.',
      'Leaning too far forward so the lift becomes a hip hinge and pulls work out of the front quad.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-bulgarian-split-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-bulgarian-split-squat',
    custom: false
  },
  {
    id: 'b90',
    name: 'Dumbbell Chest Fly',
    primaryMuscle: 'chest',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A wide-arc dumbbell fly that isolates the chest through a long stretch and tight squeeze at the top.',
    benefits: [
      'Isolates the chest through a deep stretch and strong squeeze.',
      'Adds focused chest volume without loading the triceps.',
      'Trains the chest\'s stretch position that pressing alone can\'t fully reach.'
    ],
    instructions: [
      'Sit on a flat bench with a dumbbell on each thigh, then lie back as you bring the weights up to your chest.',
      'Press the dumbbells up over your chest with palms facing each other and a soft bend in the elbows.',
      'Lower the dumbbells out to the sides in a wide arc, keeping that elbow bend locked the whole time.',
      'Stop when you feel a deep stretch across the chest and the elbows are roughly level with the bench.',
      'Pause briefly at the bottom of the stretch without dropping deeper or losing the elbow angle.',
      'Squeeze the chest to bring the dumbbells back together over your chest in the same wide arc.'
    ],
    commonMistakes: [
      'Bending the elbows mid-rep so the lift turns into a sloppy press and pulls the triceps in.',
      'Going too heavy and dropping into a deep stretch fast, which strains the front shoulders.',
      'Clanking the dumbbells together at the top instead of stopping just short and squeezing the chest.',
      'Cutting the range short by stopping high so the chest never gets the stretch the fly is meant for.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-chest-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-chest-fly',
    custom: false
  },
  {
    id: 'b91',
    name: 'Dumbbell Concentration Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated single-arm curl with the elbow braced against the inner thigh — pure biceps, no body english.',
    benefits: [
      'Isolates the biceps with zero body english.',
      'Builds peak shape and end-range biceps detail.',
      'Trains a strict curl pattern that carries over to all other curl variations.'
    ],
    instructions: [
      'Sit on the edge of a bench with your feet planted wide and a dumbbell in one hand.',
      'Lean forward slightly and brace the back of your working arm against the inside of your thigh.',
      'Let the dumbbell hang at full arm extension with the palm facing the opposite leg.',
      'Curl the dumbbell up toward your shoulder by bending only at the elbow, keeping the upper arm pinned.',
      'Squeeze the biceps hard at the top with the dumbbell close to your shoulder for a one-second hold.',
      'Lower the dumbbell slowly to full extension over 2 to 3 seconds, then repeat before switching arms.'
    ],
    commonMistakes: [
      'Lifting the elbow off the thigh mid-rep, which lets the shoulder swing and steals work from the biceps.',
      'Using too heavy a dumbbell so the body sways forward and back to lift it.',
      'Cutting the range short by stopping before the arm fully extends at the bottom of each rep.',
      'Dropping the weight quickly on the way down, skipping the slow descent where most growth happens.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-concentration-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-concentration-curl',
    custom: false
  },
  {
    id: 'b92',
    name: 'Dumbbell Cross Body Romanian Deadlift',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Hinge',
    description: 'A single-leg Romanian deadlift where the dumbbell tracks across the body — biasing the working glute and hamstring through a long hinge.',
    benefits: [
      'Builds single-leg glute and hamstring strength with a long, loaded stretch.',
      'Trains balance and anti-rotation through the trunk under real load.',
      'Surfaces and corrects left-right strength gaps in the posterior chain.'
    ],
    instructions: [
      'Hold a single dumbbell in one hand and stand on the leg opposite that hand with a soft knee bend.',
      'Brace your core and pull your shoulder blades down so the working side stays square as you start.',
      'Hinge at the hips, sending the free leg straight back as the dumbbell tracks across toward the planted foot.',
      'Lower until your torso is roughly parallel to the floor and you feel a strong stretch in the working hamstring.',
      'Pause at the bottom, keeping hips level and the back flat without letting the working hip open up.',
      'Drive the working heel into the floor and stand tall, squeezing the glute hard at the top of the rep.'
    ],
    commonMistakes: [
      'Letting the hip of the free leg open up, which turns the lift into a rotation instead of a clean hinge.',
      'Rounding the lower back at the bottom because the hamstrings can\'t reach the dumbbell yet.',
      'Bending the standing knee too much, which turns the lift into a single-leg squat instead of a hinge.',
      'Standing the dumbbell up with the lower back instead of driving the floor away through the working glute.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-cross-body-romanian-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-cross-body-romanian-deadlift',
    custom: false
  },
  {
    id: 'b93',
    name: 'Dumbbell Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'The standard standing dumbbell biceps curl — the most-used arm exercise in any program, anywhere.',
    benefits: [
      'Builds biceps size and arm strength with a simple, scalable lift.',
      'Trains both arms independently to prevent left-right strength gaps.',
      'Works at any level with any pair of dumbbells, anywhere.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand at your sides, palms facing forward.',
      'Set your feet shoulder-width apart, brace your core, and pull your shoulders back and down.',
      'Curl both dumbbells up toward your shoulders by bending at the elbows, keeping the upper arms pinned to your sides.',
      'Squeeze the biceps hard at the top with the dumbbells close to your shoulders for a brief pause.',
      'Lower the dumbbells slowly to full arm extension over 2 to 3 seconds.',
      'Reset at the bottom with the arms straight and the shoulders set, then repeat for reps.'
    ],
    commonMistakes: [
      'Swinging the torso back to throw the dumbbells up, which removes the biceps from the lift.',
      'Letting the elbows drift forward on the way up, turning the curl into a partial front raise.',
      'Cutting the range short at the bottom by never fully straightening the arms between reps.',
      'Dropping the dumbbells fast on the way down and skipping the slow lowering phase where most growth lives.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-curl',
    custom: false
  },
  {
    id: 'b94',
    name: 'Dumbbell Decline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A decline-bench dumbbell press that biases the lower chest while still working the triceps and front shoulders.',
    benefits: [
      'Builds lower-chest size and pressing strength with a deep dumbbell range.',
      'Spares the shoulders compared to a fixed-bar pressing path.',
      'Adds variety and detail to a complete chest hypertrophy program.'
    ],
    instructions: [
      'Set the bench to a slight decline and lock your feet under the foot pads at the bottom.',
      'Lie back with a dumbbell in each hand resting on your thighs, then kick them up over your chest.',
      'Press the dumbbells up until the arms are fully extended and the weights are stacked over your shoulders.',
      'Lower the dumbbells slowly to chest level with the elbows tracked at about 45 to 60 degrees.',
      'Pause briefly when the dumbbells reach the side of your lower chest, holding upper-back tension.',
      'Press the dumbbells back up explosively by driving through the chest and triceps to full extension.'
    ],
    commonMistakes: [
      'Letting the elbows flare to 90 degrees, which strains the front shoulders and weakens the chest drive.',
      'Pressing the dumbbells together so they clack at the top — wasted range and no extra chest work.',
      'Setting up too steep a decline so the lift turns into a strange overhead press instead of a chest move.',
      'Cutting the range short and pressing only the top half, missing the deepest stretch on the chest.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-decline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-decline-bench-press',
    custom: false
  },
  {
    id: 'b95',
    name: 'Dumbbell Decline Chest Fly',
    primaryMuscle: 'chest',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A decline-bench dumbbell fly that isolates the lower chest through a long stretch and a tight top-end squeeze.',
    benefits: [
      'Isolates the lower chest with a deep stretch and strong squeeze.',
      'Adds focused detail volume without loading the triceps.',
      'Rounds out a complete chest library alongside flat and incline work.'
    ],
    instructions: [
      'Set the bench to a slight decline and lock your feet under the foot pads to anchor your position.',
      'Lie back with a dumbbell in each hand resting on your thighs, then kick them up over your chest.',
      'Press the dumbbells up with palms facing each other and a soft bend held in the elbows.',
      'Lower the dumbbells out to the sides in a wide arc, keeping the elbow bend locked the whole way.',
      'Stop when you feel a deep stretch across the lower chest and the elbows are roughly level with the bench.',
      'Squeeze the chest to bring the dumbbells back together over your chest in the same wide arc.'
    ],
    commonMistakes: [
      'Bending the elbows mid-rep so the fly turns into a sloppy press and brings the triceps in.',
      'Going too heavy and dropping fast into the stretch, which strains the front shoulders.',
      'Clanking the dumbbells together at the top instead of squeezing the chest just short of contact.',
      'Skipping the bottom of the range so the chest never gets the stretch the fly is meant for.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-decline-chest-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-decline-chest-fly',
    custom: false
  },
  {
    id: 'b96',
    name: 'Dumbbell Decline Skullcrusher',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A decline-bench dumbbell triceps extension that biases the long head through a deep, stretched range.',
    benefits: [
      'Builds triceps size with a deep long-head stretch.',
      'Adds focused arm volume without loading the chest or shoulders.',
      'Trains the elbow extension pattern that drives lockout in pressing lifts.'
    ],
    instructions: [
      'Set the bench to a slight decline and lock your feet under the foot pads.',
      'Lie back with a dumbbell in each hand and press them up over your chest with palms facing each other.',
      'Tilt your upper arms slightly back toward your head so the dumbbells sit just past vertical.',
      'Bend at the elbows to lower the dumbbells slowly toward the sides of your head.',
      'Stop when you feel a strong stretch across the back of the upper arms, with the elbows still pointed up.',
      'Extend the arms back to the start by driving through the triceps, keeping the upper arms in place.'
    ],
    commonMistakes: [
      'Letting the upper arms swing forward on the way up so the lift turns into a press.',
      'Flaring the elbows out wide, which trades triceps work for shoulder strain.',
      'Cutting the range short at the bottom and skipping the deep stretch where the long head loads up.',
      'Going too heavy and crashing the dumbbells toward the head instead of lowering under control.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-decline-skullcrusher.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-decline-skullcrusher',
    custom: false
  },
  {
    id: 'b97',
    name: 'Dumbbell Feet Elevated Glute Bridge',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A glute bridge with feet up on a bench and a dumbbell across the hips — a longer-range variation that hits the glutes harder.',
    benefits: [
      'Builds glute size through a long, loaded hip extension range.',
      'Trains a strong hip lockout that carries into squats and deadlifts.',
      'Loads the glutes hard without needing a barbell or hip thrust setup.'
    ],
    instructions: [
      'Sit on the floor in front of a bench with a dumbbell resting across your hips.',
      'Place your heels on top of the bench with knees bent at roughly 90 degrees and arms holding the dumbbell.',
      'Brace your core and tuck your ribs down so your lower back stays flat to start the rep.',
      'Drive your heels into the bench and push your hips up until your body forms a straight line from knees to shoulders.',
      'Squeeze the glutes hard at the top for a one-second hold without overarching the lower back.',
      'Lower your hips slowly back to the floor under control, then repeat for reps.'
    ],
    commonMistakes: [
      'Pushing through the toes instead of the heels, which pulls the work into the quads and out of the glutes.',
      'Overextending the lower back at the top instead of holding a clean hip-up position.',
      'Going too heavy and bouncing off the floor, which kills tension and risks back strain.',
      'Cutting the range short by stopping before the hips fully lock out at the top.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-feet-elevated-glute-bridge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-feet-elevated-glute-bridge',
    custom: false
  },
  {
    id: 'b98',
    name: 'Dumbbell Figure Four Heels Elevated Hip Thrust',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Hinge',
    description: 'A single-leg hip thrust where the free leg crosses into a figure-four — isolating one glute through a deep range.',
    benefits: [
      'Isolates one glute through a long, loaded hip extension range.',
      'Builds single-leg hip strength that carries into running and sprinting.',
      'Surfaces and corrects left-right glute strength gaps.'
    ],
    instructions: [
      'Sit in front of a bench with a dumbbell on the floor and place your working heel on top of the bench.',
      'Cross your free ankle over the working knee in a figure-four shape, then lift the dumbbell across your hips.',
      'Lower your hips toward the floor while keeping the figure-four leg position locked in place.',
      'Drive the working heel into the bench and push your hips up until they\'re in line with your shoulders.',
      'Squeeze the working glute hard at the top with the hips fully extended for a one-second hold.',
      'Lower under control to the start position, then complete all reps before switching legs.'
    ],
    commonMistakes: [
      'Pushing through the toes instead of the working heel, which pulls work into the quad.',
      'Letting the hips tilt sideways at the top, which lets the other side help and breaks the isolation.',
      'Overextending the lower back at the top instead of holding a clean hip lockout.',
      'Cutting the range short by stopping before the hips fully extend, missing the strongest part of the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-figure-four-heels-elevated-hip-thrust.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-figure-four-heels-elevated-hip-thrust',
    custom: false
  },
  {
    id: 'b99',
    name: 'Dumbbell Front Raise',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing dumbbell raise to shoulder height that isolates the front delts in a clean, controlled arc.',
    benefits: [
      'Isolates the front shoulders for focused hypertrophy work.',
      'Adds detail volume that pressing alone often misses.',
      'Trains a clean shoulder-flexion pattern with no body english.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand resting on the front of your thighs, palms facing back.',
      'Set your feet shoulder-width apart, brace your core, and pull your shoulders down and back.',
      'Lift one or both dumbbells straight forward with a slight bend held in the elbows.',
      'Stop the lift when the dumbbells reach shoulder height and the arms are roughly parallel to the floor.',
      'Pause for a beat at the top with the dumbbells level, holding tension in the front delts.',
      'Lower the dumbbells slowly back to the thighs over 2 to 3 seconds, then repeat for reps.'
    ],
    commonMistakes: [
      'Swinging the torso back to throw the dumbbells up, which steals work from the front delts.',
      'Lifting past shoulder height into the upper traps, which removes the front delt focus.',
      'Bending the elbows heavily mid-rep, which turns the lift into a curl-and-press hybrid.',
      'Going too heavy and shrugging the shoulders up at the top instead of keeping them pinned down.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-front-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-front-raise',
    custom: false
  },
  {
    id: 'b100',
    name: 'Dumbbell Goblet Alternating Curtsy Lunge',
    primaryMuscle: 'glutes',
    secondaryMuscles: ['upper_legs'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A loaded curtsy lunge held in goblet position — alternating sides each rep to train the glutes through a cross-body angle.',
    benefits: [
      'Builds the glutes through a long cross-body range of motion.',
      'Trains hip stability and balance under load on each side.',
      'Adds variety to a lunge library beyond straight-line front and reverse lunges.'
    ],
    instructions: [
      'Hold a single dumbbell vertically at chest height with both hands cupping the top in goblet position.',
      'Stand tall with feet hip-width apart, shoulders back, and core braced.',
      'Step one foot diagonally behind and across the other, lowering into a curtsy lunge.',
      'Drop your back knee toward the floor while keeping your front foot flat and front knee tracking out.',
      'Drive through the front-foot heel to push back to a tall standing position.',
      'Repeat the lunge with the opposite leg crossing behind, alternating sides for the prescribed reps.'
    ],
    commonMistakes: [
      'Letting the front knee cave inward, which loads the inside of the joint and weakens the glute drive.',
      'Crossing the back foot too far so the hips twist and the lower back takes the load.',
      'Leaning the torso forward over the front leg instead of staying upright through the trunk.',
      'Pushing off the back foot to stand instead of driving through the front-leg heel and glute.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-goblet-alternating-curtsy-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-goblet-alternating-curtsy-lunge',
    custom: false
  },
  {
    id: 'b101',
    name: 'Dumbbell Goblet Bulgarian Split Squat',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A rear-foot-elevated split squat loaded at the chest — the go-to single-leg builder for quads, glutes, and balance.',
    benefits: [
      'Builds quad and glute size on each leg independently.',
      'Exposes and corrects left-right strength imbalances.',
      'Improves single-leg balance and ankle and hip control.'
    ],
    instructions: [
      'Stand a stride length in front of a bench and place the top of one foot on the pad behind you.',
      'Hold a single dumbbell vertically at chest height, cupping the top head with both hands close to your sternum.',
      'Set the front foot flat with the knee tracking over the middle toes and your torso slightly forward.',
      'Lower straight down by bending the front knee until the back knee hovers just above the floor.',
      'Pause briefly at the bottom with the front foot planted and the chest tall, no collapsing forward.',
      'Drive through the front heel and mid-foot to stand back up, keeping the back leg relaxed and along for the ride.'
    ],
    commonMistakes: [
      'Standing too close to the bench, which jams the front knee forward and pulls work away from the glutes.',
      'Letting the front knee cave inward on the way up, which stresses the joint and reduces glute drive.',
      'Pushing off the back foot for help instead of loading the front leg cleanly through the rep.',
      'Rushing the lower portion and bouncing out of the bottom, missing the hardest part of the lift.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-goblet-bulgarian-split-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-goblet-bulgarian-split-squat',
    custom: false
  },
  {
    id: 'b102',
    name: 'Dumbbell Goblet Forward Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A stepping forward lunge with a dumbbell held at the chest — trains the quads, glutes, and stride mechanics in one move.',
    benefits: [
      'Builds quad and glute strength on each leg independently.',
      'Trains stride mechanics and front-leg deceleration for sport and daily life.',
      'Improves single-leg balance and ankle stability under load.'
    ],
    instructions: [
      'Hold a single dumbbell vertically at chest height with both hands cupping the top, elbows tucked in.',
      'Stand tall with feet hip-width apart, ribs stacked over hips, and your gaze fixed straight ahead.',
      'Take a long, controlled step forward with one leg, landing softly on the full foot.',
      'Lower straight down by bending both knees until the back knee hovers just above the floor.',
      'Pause briefly with the front shin near vertical and the chest still tall over the hips.',
      'Push off the front heel to step back to the start position, then alternate legs for the next rep.'
    ],
    commonMistakes: [
      'Stepping too short, which puts the front knee far past the toes and dumps the load onto the kneecap.',
      'Letting the torso fall forward over the front thigh, shifting work off the glutes and onto the lower back.',
      'Slamming the back knee into the floor instead of stopping just short of contact under control.',
      'Pushing off the back foot to stand instead of loading the front leg through the full press up.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-goblet-forward-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-goblet-forward-lunge',
    custom: false
  },
  {
    id: 'b103',
    name: 'Dumbbell Goblet Reverse Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A back-stepping lunge with a goblet-held dumbbell — easier on the knees and more glute-dominant than the forward version.',
    benefits: [
      'Builds glute and quad size with less knee stress than forward lunges.',
      'Improves single-leg balance and hip stability under load.',
      'Reinforces upright posture through the goblet hold and tall torso.'
    ],
    instructions: [
      'Hold a single dumbbell vertically at the chest with both hands cupping the top head, elbows tucked.',
      'Stand tall with feet hip-width apart, weight balanced through the mid-foot of both feet.',
      'Step one leg straight back into a long stride, landing softly on the ball of the back foot.',
      'Lower straight down until the back knee hovers just above the floor and the front shin is near vertical.',
      'Pause briefly at the bottom, keeping the chest tall and the front foot fully planted into the floor.',
      'Drive through the front heel to step the back foot forward to the start, then alternate legs.'
    ],
    commonMistakes: [
      'Stepping too short, which forces the front knee forward and loads the joint instead of the glutes.',
      'Letting the front knee cave inward as you stand, reducing glute drive and stressing the knee.',
      'Crashing the back knee into the floor rather than stopping just short under control.',
      'Leaning the torso forward over the front thigh, shifting tension off the glutes and onto the low back.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-goblet-reverse-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-goblet-reverse-lunge',
    custom: false
  },
  {
    id: 'b104',
    name: 'Dumbbell Goblet Split Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A static, both-feet-planted split stance loaded at the chest — the gateway single-leg exercise for quads and glutes.',
    benefits: [
      'Builds quad and glute size on each leg without stepping.',
      'Teaches the single-leg pattern before progressing to lunges.',
      'Improves hip stability and ankle control under controlled load.'
    ],
    instructions: [
      'Stand in a long split stance with one foot forward and the back foot up on its toes about three feet behind.',
      'Hold a single dumbbell vertically at the chest, cupping the top head with both hands.',
      'Set the front foot flat, knee tracking over the middle toes, and brace the core to stack the ribs over hips.',
      'Lower straight down by bending both knees until the back knee hovers just above the floor.',
      'Pause briefly at the bottom with the chest tall and the front heel planted firmly into the floor.',
      'Drive through the front heel and mid-foot to stand back up, finishing each rep with the hips fully extended.'
    ],
    commonMistakes: [
      'Standing too narrow, which forces the front knee far over the toes and loads the joint instead of the muscles.',
      'Letting the front knee cave inward on the way up, reducing glute drive and stressing the knee.',
      'Pushing off the back foot for help instead of loading the front leg cleanly through the rep.',
      'Pitching the torso forward, which shifts work off the front-leg glute and onto the low back.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-goblet-split-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-goblet-split-squat',
    custom: false
  },
  {
    id: 'b105',
    name: 'Dumbbell Goblet Squat',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Squat',
    description: 'A bodyweight-style squat loaded with one dumbbell at the chest — the cleanest way to teach the squat pattern.',
    benefits: [
      'Builds full lower-body strength in the quads, glutes, and core.',
      'Teaches an upright, full-depth squat pattern in any beginner.',
      'Trains bracing and trunk stability through the front-loaded hold.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart, toes turned slightly out, holding a dumbbell vertically at the chest.',
      'Cup the top head of the dumbbell with both hands, elbows tucked down under the weight.',
      'Brace the core, set the ribs stacked over the hips, and fix your eyes on a point straight ahead.',
      'Sit back and down at the same time, pushing the knees out in line with your toes as you descend.',
      'Reach the bottom with thighs at or below parallel, chest tall, and elbows tracking inside the knees.',
      'Drive through the whole foot to stand back up, finishing tall with hips and knees fully extended.'
    ],
    commonMistakes: [
      'Letting the heels lift off the floor at the bottom, which dumps the load forward onto the knees.',
      'Letting the knees cave inward as you stand, reducing glute drive and stressing the joints.',
      'Cutting the depth short above parallel, missing most of the glute and quad development.',
      'Rounding the lower back at the bottom, which loads the spine instead of the working muscles.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-goblet-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-goblet-squat',
    custom: false
  },
  {
    id: 'b106',
    name: 'Dumbbell Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A neutral-grip dumbbell curl that builds the brachialis and forearms — the arm-thickness curl every program needs.',
    benefits: [
      'Builds upper-arm thickness through the brachialis underneath the biceps.',
      'Develops forearm size and grip strength through the neutral grip.',
      'Wrist-friendly curl option for users who feel strain with palms-up curls.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand, arms at your sides, and palms facing your thighs.',
      'Keep the elbows pinned to the ribs and the shoulders pulled back and down throughout the set.',
      'Curl both dumbbells up by bending only at the elbow, keeping palms facing each other the whole time.',
      'Squeeze hard at the top with the dumbbells just below shoulder height and the wrists locked straight.',
      'Lower the weights under control over 2 to 3 seconds back to a fully straight-arm position.',
      'Pause briefly at the bottom with the elbows extended, then curl back up for the next rep.'
    ],
    commonMistakes: [
      'Swinging the torso to throw the weight up instead of curling cleanly with the arms.',
      'Letting the elbows drift forward at the top, which turns the curl into a half front raise.',
      'Rotating the wrists at the top and rushing the lower, missing the brachialis-building tension.',
      'Using too heavy a weight, which forces partial reps and short-changes the muscle stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-hammer-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-hammer-curl',
    custom: false
  },
  {
    id: 'b107',
    name: 'Dumbbell Heels Elevated Hip Thrust',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A hip thrust with the heels elevated and a dumbbell on the hips — biases the glutes and lengthens the working range.',
    benefits: [
      'Builds glute size and strength through a deeper hip range.',
      'Shifts work off the quads and onto the glutes through the heel position.',
      'Trains hip extension power for sprinting, jumping, and lifting.'
    ],
    instructions: [
      'Sit on the floor with your upper back against a bench and a dumbbell ready to load across the hips.',
      'Place both heels on a low plate or step about hip-width apart, with the toes lifted off the platform.',
      'Roll the dumbbell into the hip crease and steady it with both hands throughout the set.',
      'Drive through the heels to lift the hips up until the torso and thighs form one straight line at the top.',
      'Squeeze the glutes hard at the top with the ribs down and the chin lightly tucked toward the chest.',
      'Lower the hips under control until they hover just above the floor, then drive back up for the next rep.'
    ],
    commonMistakes: [
      'Pushing through the toes instead of the heels, which shifts the work off the glutes onto the quads.',
      'Hyperextending the lower back at the top instead of finishing with a clean glute squeeze.',
      'Cutting the range short and never letting the hips fully extend at the top of the rep.',
      'Letting the knees cave inward at lockout, which reduces glute drive and stresses the joints.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-heels-elevated-hip-thrust.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-heels-elevated-hip-thrust',
    custom: false
  },
  {
    id: 'b108',
    name: 'Dumbbell Incline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'An inclined dumbbell press that targets the upper chest, front delts, and triceps — the cornerstone upper-chest lift.',
    benefits: [
      'Builds upper-chest size and visible top-line definition.',
      'Develops front-delt and triceps strength alongside the chest.',
      'Trains each side independently, fixing left-right pressing imbalances.'
    ],
    instructions: [
      'Set a bench to a 30 to 45 degree incline and sit with a dumbbell resting on each thigh.',
      'Kick the dumbbells up to your shoulders one at a time, then lie back with the weights at chest height.',
      'Pull your shoulder blades back and down into the bench with feet planted flat on the floor.',
      'Press both dumbbells straight up until the arms are fully extended and the weights nearly touch overhead.',
      'Lower under control to chest level with elbows tracked at about 45 to 60 degrees from the torso.',
      'Pause briefly at the bottom, then press back up powerfully, finishing each rep with a strong lockout.'
    ],
    commonMistakes: [
      'Letting the elbows flare straight out, which strains the front shoulders and shifts work off the chest.',
      'Setting the bench too steep, which turns the press into a shoulder press and loses the upper-chest focus.',
      'Bouncing the dumbbells at the bottom or stopping short, missing the productive stretch on the chest.',
      'Pressing the dumbbells out wide rather than straight up, which destabilizes the lift and shortens the press.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-incline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-incline-bench-press',
    custom: false
  },
  {
    id: 'b109',
    name: 'Dumbbell Incline Chest Fly',
    primaryMuscle: 'chest',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'An incline-bench dumbbell fly that isolates the upper chest through a deep stretch and clean squeeze at the top.',
    benefits: [
      'Isolates and builds the upper chest with minimal triceps assistance.',
      'Loads the chest through a deep stretch for hypertrophy stimulus.',
      'Improves the mind-muscle connection on a press-dominant chest day.'
    ],
    instructions: [
      'Set a bench to a 30 to 45 degree incline and sit with a light dumbbell resting on each thigh.',
      'Lie back with a dumbbell in each hand, palms facing each other, and arms pressed straight up over the chest.',
      'Set a slight bend in the elbows and hold that bend fixed for the rest of the set.',
      'Lower the dumbbells out to the sides in a wide arc until you feel a deep stretch across the upper chest.',
      'Pause briefly at the bottom with the chest open and the shoulder blades pinned back into the bench.',
      'Squeeze the chest to bring the dumbbells back together overhead, stopping just short of touching.'
    ],
    commonMistakes: [
      'Bending the elbows mid-rep, which turns the fly into a sloppy press and loses the chest isolation.',
      'Going too heavy, which forces the elbows to collapse and stresses the front shoulders.',
      'Crashing the dumbbells together at the top instead of pausing for a controlled chest squeeze.',
      'Pulling the shoulder blades off the bench, rolling the shoulders forward and risking shoulder strain.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-incline-chest-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-incline-chest-fly',
    custom: false
  },
  {
    id: 'b110',
    name: 'Dumbbell Incline Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated curl on an incline bench that stretches the biceps long-head before each rep — the cleanest peak-builder.',
    benefits: [
      'Builds the long head of the biceps for visible peak development.',
      'Loads the biceps through a deep stretch for hypertrophy stimulus.',
      'Removes momentum cheating through the seated, anchored position.'
    ],
    instructions: [
      'Set a bench to about a 60 degree incline and sit back with a dumbbell hanging from each hand.',
      'Let the arms fully extend straight down, palms facing forward, and pull the shoulder blades back into the bench.',
      'Keep the elbows pinned at your sides and resist letting them swing forward as you start the rep.',
      'Curl both dumbbells up by bending at the elbow only, squeezing the biceps as the weights rise.',
      'Stop the curl just shy of the elbows traveling forward, then squeeze hard for a brief pause at the top.',
      'Lower the dumbbells under control over 2 to 3 seconds back to the fully stretched bottom position.'
    ],
    commonMistakes: [
      'Letting the elbows drift forward at the top, which removes the long-head stretch the lift is designed for.',
      'Rolling the shoulders forward off the bench, swapping biceps work for front-shoulder strain.',
      'Rushing the lower portion and skipping the stretched bottom where most of the growth comes from.',
      'Going too heavy, which forces a swinging cheat curl and loses the strict isolation.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-incline-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-incline-curl',
    custom: false
  },
  {
    id: 'b111',
    name: 'Dumbbell Incline Front Raise',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A front raise performed face-down on an incline bench — isolates the front shoulders through a fuller range than the standing version.',
    benefits: [
      'Isolates the front shoulders through a fuller range than standing raises.',
      'Removes momentum and torso swing through the chest-supported position.',
      'Builds visible front-delt size for an aesthetic shoulder line.'
    ],
    instructions: [
      'Set a bench to about a 45 degree incline and lie face-down on it with a dumbbell in each hand.',
      'Let the arms hang straight toward the floor, palms facing each other, with a slight bend in the elbows.',
      'Brace the core, plant the toes on the floor, and pull the shoulder blades back and down.',
      'Raise both dumbbells out in front of you in a controlled arc until the arms reach about shoulder height.',
      'Pause briefly at the top with the front delts engaged and the wrists in line with the forearms.',
      'Lower the dumbbells under control over 2 to 3 seconds back to the hanging start position.'
    ],
    commonMistakes: [
      'Lifting the dumbbells too high and letting the traps take over the lift.',
      'Bending and straightening the elbows mid-rep, which sneaks the biceps into the work.',
      'Rushing the lower portion and dropping the dumbbells back to the start, missing most of the muscle tension.',
      'Going too heavy, which forces swinging and removes the isolation the bench is designed to enforce.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-incline-front-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-incline-front-raise',
    custom: false
  },
  {
    id: 'b112',
    name: 'Dumbbell Incline Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A neutral-grip curl done seated on an incline bench — combines the hammer grip with a deep biceps stretch for arm thickness.',
    benefits: [
      'Builds upper-arm thickness through the brachialis under deep stretch.',
      'Develops forearm size and grip strength through the neutral grip.',
      'Removes momentum cheating through the seated, anchored position.'
    ],
    instructions: [
      'Set a bench to about a 60 degree incline and sit back with a dumbbell hanging from each hand.',
      'Let the arms fully extend straight down, palms facing each other, with the shoulder blades pinned to the bench.',
      'Keep the elbows pinned at your sides and resist any urge to swing them forward as you curl.',
      'Curl both dumbbells up by bending only at the elbow, palms staying in the neutral hammer position.',
      'Stop the curl just before the elbows travel forward, squeezing hard for a brief pause at the top.',
      'Lower the dumbbells under control over 2 to 3 seconds back to the fully stretched start position.'
    ],
    commonMistakes: [
      'Letting the elbows drift forward at the top, which removes the brachialis stretch the lift is designed for.',
      'Rolling the shoulders forward off the bench, swapping arm work for front-shoulder strain.',
      'Rushing the lower portion and dropping out of the stretched bottom where the growth happens.',
      'Loading too heavy, which forces a swinging cheat rep and ruins the isolation.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-incline-hammer-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-incline-hammer-curl',
    custom: false
  },
  {
    id: 'b113',
    name: 'Dumbbell Lateral Raise',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing dumbbell raise out to the sides — the foundational isolation for the side delts and shoulder width.',
    benefits: [
      'Builds side-delt size for shoulder width and the V-taper look.',
      'Develops the capped, rounded shoulder appearance that defines aesthetic physiques.',
      'Improves shoulder stability and control through a strict isolation pattern.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand, arms at your sides, palms facing your thighs.',
      'Set a slight bend in the elbows and lock that bend in place for the rest of the set.',
      'Brace the core, pull the shoulders back and down, and resist any urge to swing the torso.',
      'Raise both dumbbells out to the sides in a wide arc until the arms reach shoulder height.',
      'Pause briefly at the top with the wrists, elbows, and shoulders all roughly in one straight line.',
      'Lower the dumbbells under control over 2 to 3 seconds back to the start, fighting tension the whole way.'
    ],
    commonMistakes: [
      'Swinging the torso to throw the dumbbells up, which lets the traps and momentum take over.',
      'Lifting the dumbbells higher than shoulder height, which shifts work off the side delts onto the traps.',
      'Letting the elbows straighten and bend mid-rep, sneaking the biceps and front delts into the work.',
      'Going too heavy, which collapses form and removes the isolation the lift is designed for.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-lateral-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-lateral-raise',
    custom: false
  },
  {
    id: 'b114',
    name: 'Dumbbell Laying Reverse Fly',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A chest-down reverse fly on an incline bench that isolates the rear delts and upper back without lower-back strain.',
    benefits: [
      'Isolates and builds the rear delts for balanced shoulder development.',
      'Removes lower-back strain through the chest-supported position.',
      'Improves posture by strengthening the upper-back muscles that pull shoulders open.'
    ],
    instructions: [
      'Set a bench to about a 45 degree incline and lie face-down on it with a dumbbell in each hand.',
      'Let the arms hang straight toward the floor, palms facing each other, with a slight bend in the elbows.',
      'Brace the core, plant the toes on the floor, and lock the slight elbow bend for the set.',
      'Open the arms out to the sides in a wide arc, leading with the elbows toward the ceiling.',
      'Squeeze the rear delts and the middle of the back together at the top of the lift, pausing briefly.',
      'Lower the dumbbells under control over 2 to 3 seconds back to the hanging start position.'
    ],
    commonMistakes: [
      'Bending and straightening the elbows mid-rep, which sneaks the triceps and traps into the lift.',
      'Pulling the dumbbells back like a row, swapping rear-delt isolation for mid-back rowing work.',
      'Shrugging the shoulders up at the top, which trades rear-delt work for trap engagement.',
      'Loading too heavy, which forces swinging form and removes the strict isolation the bench enforces.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-laying-reverse-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-laying-reverse-fly',
    custom: false
  },
  {
    id: 'b115',
    name: 'Dumbbell Leg Curl',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A prone leg curl performed by squeezing a dumbbell between the feet — the hamstring isolation that needs no machine.',
    benefits: [
      'Builds hamstring size through direct knee-flexion isolation.',
      'Balances out quad-dominant leg training with targeted hamstring work.',
      'Trains the hamstrings without needing a leg curl machine.'
    ],
    instructions: [
      'Lie face-down on a bench or the floor with the legs straight and a dumbbell ready at the feet.',
      'Have a partner place a dumbbell vertically between your feet, or set it carefully on your own.',
      'Squeeze the feet together hard around the dumbbell to lock it in place for the full set.',
      'Curl both heels up toward your glutes by bending only at the knees, keeping the hips pressed down.',
      'Squeeze the hamstrings hard at the top with the lower legs near vertical, pausing briefly.',
      'Lower the dumbbell under control over 2 to 3 seconds back to a fully straight-leg position.'
    ],
    commonMistakes: [
      'Lifting the hips off the bench to use momentum instead of curling cleanly with the hamstrings.',
      'Letting the dumbbell slip between the feet by relaxing the squeeze mid-rep.',
      'Rushing the lower portion and dropping the weight back to the start, missing most of the muscle tension.',
      'Loading too heavy, which forces broken form and risks dropping the dumbbell on the floor.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-leg-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-leg-curl',
    custom: false
  },
  {
    id: 'b116',
    name: 'Dumbbell Preacher Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A single-arm curl with the upper arm fixed against a preacher pad — the strict isolation that builds the lower biceps.',
    benefits: [
      'Builds the lower portion of the biceps through strict elbow isolation.',
      'Removes momentum and shoulder swing from the curl entirely.',
      'Trains each arm independently, fixing left-right strength imbalances.'
    ],
    instructions: [
      'Set up at a preacher bench with a single dumbbell ready and the seat adjusted so the armpit sits at the top of the pad.',
      'Sit down and press the back of the upper arm flat against the angled pad, gripping the dumbbell with the palm up.',
      'Let the arm extend almost fully at the bottom but stop just shy of full lockout to keep tension on the biceps.',
      'Curl the dumbbell up by bending only at the elbow, keeping the upper arm glued to the pad.',
      'Squeeze the biceps hard at the top with the dumbbell near shoulder height, pausing briefly.',
      'Lower the dumbbell under control over 2 to 3 seconds back to the near-extended start position.'
    ],
    commonMistakes: [
      'Lifting the upper arm off the pad mid-rep, which kills the strict isolation the bench enforces.',
      'Locking the elbow fully at the bottom under load, which strains the joint and removes muscle tension.',
      'Dropping the dumbbell back down quickly, missing the lower-biceps stretch where most of the growth lives.',
      'Loading too heavy, which forces the pad-arm to lift and turns the curl into a swinging cheat rep.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-preacher-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-preacher-curl',
    custom: false
  },
  {
    id: 'b117',
    name: 'Dumbbell Rear Delt Fly',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bent-over reverse fly with dumbbells — the classic rear-delt and upper-back isolation in any shoulder program.',
    benefits: [
      'Builds the rear delts for balanced shoulder development.',
      'Strengthens the muscles between the shoulder blades for better posture.',
      'Counters the forward-shoulder pull from heavy pressing volume.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand, then hinge at the hips until the torso is nearly parallel to the floor.',
      'Let the arms hang straight down beneath the shoulders, palms facing each other, with a slight bend in the elbows.',
      'Brace the core, set a flat back, and lock the slight elbow bend in place for the rest of the set.',
      'Open the arms out to the sides in a wide arc, leading with the elbows toward the ceiling.',
      'Squeeze the rear delts and the middle of the back together at the top of the lift, pausing briefly.',
      'Lower the dumbbells under control over 2 to 3 seconds back to the hanging start position.'
    ],
    commonMistakes: [
      'Standing too upright, which turns the lift into a half lateral raise and misses the rear delts.',
      'Pulling the dumbbells back like a row, swapping rear-delt isolation for mid-back rowing work.',
      'Shrugging the shoulders at the top, which trades rear-delt work for trap engagement.',
      'Rounding the lower back at the hinge, which loads the spine instead of the working muscles.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-rear-delt-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-rear-delt-fly',
    custom: false
  },
  {
    id: 'b118',
    name: 'Dumbbell Row Bilateral',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A bent-over two-dumbbell row that hammers the lats, mid-back, and biceps — the workhorse back-thickness builder.',
    benefits: [
      'Builds back thickness through the lats and mid-back together.',
      'Develops biceps strength alongside the rowing pattern.',
      'Reinforces hinge bracing and core stability under load.'
    ],
    instructions: [
      'Stand with a dumbbell in each hand, feet hip-width apart, and a slight bend in the knees.',
      'Hinge at the hips until the torso is at about a 45 degree angle, keeping the back flat and the chest proud.',
      'Let both dumbbells hang straight down beneath the shoulders, palms facing each other.',
      'Pull both dumbbells up to the ribs at the same time, driving the elbows back toward the ceiling.',
      'Squeeze the shoulder blades together at the top with the dumbbells touching the lower-rib line.',
      'Lower both dumbbells under control over 2 to 3 seconds back to the fully extended hanging position.'
    ],
    commonMistakes: [
      'Standing too upright, which turns the row into a high pull and removes the lat engagement.',
      'Rounding the lower back at the hinge, which loads the spine instead of the working muscles.',
      'Yanking the dumbbells up with momentum instead of pulling cleanly with the back.',
      'Letting the elbows flare wide, which shifts work off the lats onto the rear delts only.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-row-bilateral.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-row-bilateral',
    custom: false
  },
  {
    id: 'b119',
    name: 'Dumbbell Row Unilateral',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A bench-supported single-arm dumbbell row — the classic back-thickness builder for the lats, mid-back, and biceps.',
    benefits: [
      'Builds back thickness through the lats and mid-back on each side independently.',
      'Develops biceps strength alongside the rowing pattern.',
      'Fixes left-right back imbalances and improves shoulder control.'
    ],
    instructions: [
      'Place one knee and one hand on a flat bench, with the free foot planted out to the side for balance.',
      'Set the back flat and parallel to the floor, with the hips and shoulders square to the bench.',
      'Hold a dumbbell in the free hand with the arm hanging straight down and the palm facing the bench.',
      'Pull the dumbbell up to the ribs by driving the elbow back toward the ceiling, keeping the elbow tucked.',
      'Squeeze the shoulder blade in toward the spine at the top, with the dumbbell at the lower-rib line.',
      'Lower the dumbbell under control over 2 to 3 seconds back to the fully extended hanging position.'
    ],
    commonMistakes: [
      'Twisting the torso to throw the dumbbell up, which uses momentum instead of back muscle.',
      'Letting the elbow flare wide away from the ribs, shifting work off the lats onto the rear delts only.',
      'Cutting the bottom of the rep short, missing the lat stretch that drives back-thickness growth.',
      'Letting the working shoulder roll forward at the bottom, risking front-shoulder strain under load.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-row-unilateral.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-row-unilateral',
    custom: false
  },
  {
    id: 'b120',
    name: 'Dumbbell Russian Twist',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Rotation',
    description: 'A seated rotational core exercise with a dumbbell — trains the obliques and abs through controlled twisting under load.',
    benefits: [
      'Builds visible oblique definition through resisted rotation.',
      'Develops rotational core strength for sport and daily movement.',
      'Improves trunk stability and bracing under load.'
    ],
    instructions: [
      'Sit on the floor with the knees bent and hold a single dumbbell with both hands at the chest.',
      'Lean the torso back to about a 45 degree angle and lift both feet a few inches off the floor.',
      'Brace the core hard and stack the ribs over the hips, with the chest lifted and the back flat.',
      'Rotate the dumbbell across the body to one side until it taps the floor next to your hip.',
      'Pause briefly at the side with the obliques engaged, then rotate to the other side under control.',
      'Continue alternating side to side for the full set, keeping the feet lifted and the core braced.'
    ],
    commonMistakes: [
      'Rounding the lower back as you twist, which loads the spine instead of the obliques.',
      'Moving only the arms side to side without rotating through the torso, missing the oblique work.',
      'Putting the feet down between reps, which removes most of the core stability demand.',
      'Loading too heavy, which forces a swinging cheat rep and loses the controlled rotation.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-russian-twist.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-russian-twist',
    custom: false
  },
  {
    id: 'b121',
    name: 'Dumbbell Seated Overhead Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A seated dumbbell press that trains the front and side shoulders with triceps support — the seated answer to a standing overhead press.',
    benefits: [
      'Builds front and side-shoulder size with triceps support.',
      'Trains the vertical push pattern without lower-back load.',
      'Improves overhead pressing strength for sport and lifting.'
    ],
    instructions: [
      'Sit on a bench with back support and a dumbbell in each hand resting on top of your thighs.',
      'Kick the dumbbells up to shoulder height with palms facing forward and elbows bent at about 90 degrees.',
      'Brace your core, plant your feet, and press your back firmly against the bench pad.',
      'Press both dumbbells up and slightly inward until your arms reach near-lockout with the bells nearly touching.',
      'Lower the dumbbells under control to the starting position with elbows tracking down beside your ribs.',
      'Pause briefly at the bottom, reset your breath, and repeat for the prescribed number of reps.'
    ],
    commonMistakes: [
      'Arching the lower back off the bench to push more weight, which loads the spine instead of the shoulders.',
      'Flaring the elbows straight out to the sides, which strains the front shoulders and shortens the press.',
      'Cutting the range short by stopping well below lockout, missing the top portion of the lift.',
      'Banging the dumbbells together at the top, which jolts the wrists and wastes pressing tension.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-seated-overhead-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-seated-overhead-press',
    custom: false
  },
  {
    id: 'b122',
    name: 'Dumbbell Seated Overhead Tricep Extension',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'An overhead extension that puts the long head of the triceps on full stretch — the go-to seated arm-day isolation lift.',
    benefits: [
      'Targets the long head of the triceps under deep stretch.',
      'Builds upper-arm size and pressing lockout strength.',
      'Trains controlled elbow extension with isolated load.'
    ],
    instructions: [
      'Sit on a bench with back support and hold one dumbbell vertically with both hands cupping the top plate.',
      'Press the dumbbell straight overhead with arms fully extended and elbows close to your ears.',
      'Brace your core and keep your back flat against the bench throughout the set.',
      'Lower the dumbbell slowly behind your head by bending only at the elbows until you feel a deep triceps stretch.',
      'Pause briefly in the stretched position, keeping the upper arms still and pointing straight up.',
      'Extend the elbows to drive the dumbbell back overhead, squeezing the triceps hard at the top.'
    ],
    commonMistakes: [
      'Letting the elbows flare wide, which shifts load off the triceps and into the shoulder joint.',
      'Moving the upper arms forward and back instead of keeping them locked vertical, turning the lift into a press.',
      'Cutting the bottom range short and missing the deep stretch where most growth happens.',
      'Going too heavy and dropping the dumbbell down hard, which puts the elbows and back of the head at risk.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-seated-overhead-tricep-extension.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-seated-overhead-tricep-extension',
    custom: false
  },
  {
    id: 'b123',
    name: 'Dumbbell Seated Rear Delt Fly',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bent-over seated fly that trains the rear shoulders and upper-back detail — the fix for the most under-trained area in lifting.',
    benefits: [
      'Builds the rear shoulders for visible 3D shoulder shape.',
      'Balances out heavy pressing volume in any push program.',
      'Improves posture by strengthening the upper-back stabilizers.'
    ],
    instructions: [
      'Sit on the edge of a bench with a dumbbell in each hand and your feet planted shoulder-width apart.',
      'Hinge forward from the hips until your chest is close to your thighs and your arms hang straight down.',
      'Keep a small bend in the elbows and palms facing each other, with the dumbbells underneath your shoulders.',
      'Raise both dumbbells out to the sides in a wide arc until your upper arms are parallel to the floor.',
      'Squeeze your shoulder blades together at the top and feel the rear shoulders working.',
      'Lower the dumbbells under control along the same arc and reset before the next rep.'
    ],
    commonMistakes: [
      'Using too much weight and swinging the torso, which turns the lift into a row instead of a fly.',
      'Bending the elbows and pulling instead of keeping a fixed angle and lifting from the rear shoulders.',
      'Shrugging the shoulders up at the top, which transfers the work to the upper traps.',
      'Sitting upright instead of hinging forward, which lets gravity bypass the rear shoulders entirely.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-seated-rear-delt-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-seated-rear-delt-fly',
    custom: false
  },
  {
    id: 'b124',
    name: 'Dumbbell Seated Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated shrug variation that isolates the upper traps without leg drive — clean trap volume for any pull or shoulder day.',
    benefits: [
      'Builds upper-trap size and thickness in isolation.',
      'Removes lower-body cheat momentum from the shrug pattern.',
      'Improves shoulder stability for heavier overhead and pulling lifts.'
    ],
    instructions: [
      'Sit upright on a flat bench with a dumbbell in each hand and your feet planted on the floor.',
      'Let your arms hang straight down beside your hips with palms facing your thighs.',
      'Brace your core and sit tall with your chest up and chin neutral.',
      'Shrug your shoulders straight up toward your ears, lifting the dumbbells without bending the elbows.',
      'Squeeze the traps hard at the top of the shrug for a one-second pause.',
      'Lower the dumbbells back down slowly and feel the traps stretch before the next rep.'
    ],
    commonMistakes: [
      'Rolling the shoulders forward or backward instead of shrugging straight up, which can irritate the shoulder joint.',
      'Bending the elbows during the lift, turning the shrug into a partial upright row.',
      'Cutting the top short and skipping the squeeze, where most of the trap contraction happens.',
      'Using too much weight and barely moving the dumbbells, which reduces the lift to a hold.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-seated-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-seated-shrug',
    custom: false
  },
  {
    id: 'b125',
    name: 'Dumbbell Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'The standing shrug with two dumbbells — the most accessible trap exercise in any program and a staple of pull-day work.',
    benefits: [
      'Builds upper-trap thickness and shoulder-girdle strength.',
      'Improves carrying and pulling capacity under heavy load.',
      'Adds visible upper-back size for any physique program.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand at your sides and your feet shoulder-width apart.',
      'Let your arms hang straight down with palms facing your thighs and core braced.',
      'Keep your chest up, chin neutral, and shoulders relaxed in the starting position.',
      'Shrug your shoulders straight up toward your ears as high as they will go without bending the elbows.',
      'Pause and squeeze the traps hard at the top of the shrug for one full second.',
      'Lower the dumbbells back down under control and feel the stretch before the next rep.'
    ],
    commonMistakes: [
      'Rolling the shoulders forward or backward, which adds joint strain without making the lift more effective.',
      'Bending the elbows during the lift, which turns the shrug into a partial pull and reduces trap work.',
      'Bouncing into the bottom of each rep, losing tension and bypassing the trap stretch.',
      'Going too heavy and barely moving the dumbbells, which leaves the traps under-stimulated.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-shrug',
    custom: false
  },
  {
    id: 'b126',
    name: 'Dumbbell Side Bend',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A standing side bend with one dumbbell that trains the obliques against gravity — a simple, focused side-trunk lift.',
    benefits: [
      'Builds oblique strength and side-trunk stability.',
      'Trains lateral spinal flexion against external load.',
      'Adds visible side-core definition over time.'
    ],
    instructions: [
      'Stand tall with a dumbbell in your right hand and your left hand placed lightly on your hip.',
      'Set your feet shoulder-width apart with knees soft and core lightly braced.',
      'Keep your chest up and gaze forward through the entire set.',
      'Bend slowly to the right side, lowering the dumbbell along your thigh until you feel a stretch in the left obliques.',
      'Pause briefly at the bottom of the bend without rotating the torso forward or back.',
      'Pull yourself back up to a fully upright position by squeezing the left obliques, then repeat for reps before switching sides.'
    ],
    commonMistakes: [
      'Bending forward instead of straight to the side, which loads the lower back instead of the obliques.',
      'Using too heavy a dumbbell and using momentum, which kills the contraction and risks lower-back strain.',
      'Holding a dumbbell in both hands at once, which cancels out the side load and removes the training effect.',
      'Rushing through reps and skipping the squeeze at the top, where the obliques shorten the most.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-side-bend.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-side-bend',
    custom: false
  },
  {
    id: 'b127',
    name: 'Dumbbell Single Arm Chest Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A one-arm dumbbell bench press that trains the chest with built-in core anti-rotation — push-day work that doubles as core training.',
    benefits: [
      'Builds chest and triceps strength one side at a time.',
      'Trains core anti-rotation through real pressing load.',
      'Fixes side-to-side imbalances in horizontal pressing.'
    ],
    instructions: [
      'Lie flat on a bench with one dumbbell held over your chest and the other arm braced on the bench.',
      'Plant your feet firmly on the floor and pull your shoulder blades back and down into the bench.',
      'Start with the working arm extended over your shoulder with the palm facing your feet.',
      'Lower the dumbbell slowly to the side of your chest with the elbow tracked at about 60 to 75 degrees.',
      'Pause briefly when the dumbbell touches the side of the chest, fighting any rotation in your torso.',
      'Press the dumbbell back up to full extension, squeeze the chest, and repeat for reps before switching arms.'
    ],
    commonMistakes: [
      'Letting the torso twist toward the working side, which turns the press into a rotational lift.',
      'Flaring the elbow out to 90 degrees, which strains the front shoulder and shortens the press.',
      'Using too much weight and bouncing the dumbbell off the chest instead of pausing or controlling the touch.',
      'Lifting the off-side hip or shoulder off the bench for leverage, which destabilizes the lift.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-single-arm-chest-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-single-arm-chest-press',
    custom: false
  },
  {
    id: 'b128',
    name: 'Dumbbell Single Arm Clean And Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['upper_legs', 'triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Push',
    description: 'A two-stage explosive lift — clean a dumbbell from the floor to the shoulder, then press it overhead. Conditioning meets full-body strength.',
    benefits: [
      'Builds full-body explosive power from floor to overhead.',
      'Trains the legs, back, and shoulders in one lift.',
      'Doubles as strength and conditioning when done for reps.'
    ],
    instructions: [
      'Stand with a dumbbell on the floor between your feet and squat down to grip it with one hand.',
      'Set a flat back, brace your core, and look straight ahead with the dumbbell hanging between your knees.',
      'Drive through your heels and explode upward, pulling the dumbbell straight up close to your body.',
      'Catch the dumbbell at shoulder height with the elbow tucked under and your knees softly bent.',
      'Stand fully tall, then press the dumbbell straight overhead until your arm reaches full lockout.',
      'Lower the dumbbell back to your shoulder, then to the floor under control before the next rep.'
    ],
    commonMistakes: [
      'Rounding the lower back during the pull from the floor, which puts the spine at high risk under load.',
      'Curling the dumbbell to the shoulder with the arm instead of using the hips to drive it up.',
      'Pressing overhead before standing fully tall, turning the lift into an unstable push press.',
      'Dropping the dumbbell back down without control, which can injure the shoulder or wrist.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-single-arm-clean-and-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-single-arm-clean-and-press',
    custom: false
  },
  {
    id: 'b129',
    name: 'Dumbbell Single Arm Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'The classic one-arm bench-supported row that trains the lats and biceps with side-by-side loading — a pull-day staple in any gym.',
    benefits: [
      'Builds the lats and biceps one side at a time.',
      'Trains a long-range row with bench-supported safety.',
      'Fixes side-to-side imbalances in horizontal pulling.'
    ],
    instructions: [
      'Place one knee and the same-side hand on a flat bench with your back parallel to the floor.',
      'Hold a dumbbell in the opposite hand with your arm hanging straight down beneath your shoulder.',
      'Set a flat back, brace your core, and keep your hips square to the bench.',
      'Pull the dumbbell up to the side of your ribs by driving your elbow back along your body.',
      'Squeeze your shoulder blade in toward your spine at the top of the row and pause briefly.',
      'Lower the dumbbell slowly until your arm is fully extended again, then repeat for reps before switching sides.'
    ],
    commonMistakes: [
      'Rotating the torso to throw the dumbbell up, which turns the row into a swing and offloads the back.',
      'Pulling with the arm only and letting the elbow flare wide, which trades lat work for rear-shoulder work.',
      'Rounding the lower back instead of bracing flat, which puts the spine at risk under load.',
      'Cutting the bottom range short and skipping the lat stretch, where most of the growth stimulus happens.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-single-arm-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-single-arm-row',
    custom: false
  },
  {
    id: 'b130',
    name: 'Dumbbell Single Leg Calf Raise',
    primaryMuscle: 'lower_legs',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A one-leg calf raise loaded with a dumbbell — the simplest way to load each calf hard without a machine.',
    benefits: [
      'Builds each calf independently for balanced size and strength.',
      'Trains ankle stability and lower-leg control under load.',
      'Improves jumping and sprinting drive over time.'
    ],
    instructions: [
      'Stand on one foot on the edge of a step with your heel hanging off and a dumbbell in the same-side hand.',
      'Place your other hand on a wall or rail for balance and keep your standing leg slightly bent.',
      'Lift the non-working foot off the step and tuck it behind your standing leg.',
      'Lower your heel slowly toward the floor until you feel a deep stretch in the calf.',
      'Drive up onto the ball of your foot as high as you can go, squeezing the calf hard at the top.',
      'Pause for one second at the top, lower under control, and repeat for reps before switching legs.'
    ],
    commonMistakes: [
      'Bouncing through reps and skipping the bottom stretch, which is where the calf gets most of its growth.',
      'Leaning heavily on the balance hand, which removes load from the working leg.',
      'Cutting the top range short and not rising fully onto the ball of the foot.',
      'Rushing through reps too quickly, which trades full contractions for momentum.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-single-leg-calf-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-single-leg-calf-raise',
    custom: false
  },
  {
    id: 'b131',
    name: 'Dumbbell Situp',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'The classic situp loaded with a dumbbell on the chest — a simple way to add resistance to bodyweight ab work.',
    benefits: [
      'Adds real strength stimulus to the situp pattern.',
      'Builds trunk flexion strength under external load.',
      'Bridges bodyweight ab work into loaded core training.'
    ],
    instructions: [
      'Lie on your back with knees bent at 90 degrees and feet flat on the floor or anchored under a pad.',
      'Hold a dumbbell against your chest with both hands, hugging it close to your sternum.',
      'Brace your core and tuck your chin slightly toward your chest before starting the rep.',
      'Sit all the way up by curling your torso forward until your elbows pass over your knees.',
      'Pause briefly at the top, keeping the dumbbell tight against your chest the whole time.',
      'Lower yourself back down slowly under control until your shoulder blades touch the floor.'
    ],
    commonMistakes: [
      'Yanking the head and neck forward to start the rep, which strains the neck instead of the abs.',
      'Dropping back down quickly and bouncing off the floor instead of controlling the lowering phase.',
      'Holding the dumbbell out in front of the chest, which loads the shoulders instead of the abs.',
      'Hooking the feet too aggressively under a pad, which lets the hip flexors do most of the work.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-situp.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-situp',
    custom: false
  },
  {
    id: 'b132',
    name: 'Dumbbell Skullcrusher',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'The lying tricep extension done with two dumbbells — the most-programmed mass-builder for the back of the arms.',
    benefits: [
      'Builds triceps mass through a long-range stretch and squeeze.',
      'Improves pressing lockout strength for chest and shoulder lifts.',
      'Adds upper-arm size with elbow- and wrist-friendly loading.'
    ],
    instructions: [
      'Lie on a flat bench with a dumbbell in each hand pressed straight overhead with palms facing each other.',
      'Plant your feet on the floor and pull your shoulder blades back and down into the bench.',
      'Keep your upper arms locked vertical with elbows pointing straight up at the ceiling.',
      'Lower the dumbbells slowly toward the sides of your forehead by bending only at the elbows.',
      'Pause briefly when the dumbbells reach ear level and you feel a deep stretch in the triceps.',
      'Extend the elbows to drive the dumbbells back up to the starting position and squeeze the triceps.'
    ],
    commonMistakes: [
      'Letting the upper arms drift back toward your face, which turns the lift into a pullover.',
      'Flaring the elbows out wide, which loads the shoulders instead of isolating the triceps.',
      'Dropping the dumbbells down too fast and bouncing out of the bottom, which risks the elbows and forehead.',
      'Stopping the lockout short and skipping the squeeze at the top, where the triceps fully shorten.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-skullcrusher.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-skullcrusher',
    custom: false
  },
  {
    id: 'b133',
    name: 'Dumbbell Spinal Jefferson Curl',
    primaryMuscle: 'back',
    secondaryMuscles: ['upper_legs'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Stretch',
    description: 'A standing rolldown holding a dumbbell — a slow, segmental spinal flexion drill used to build hamstring and lower-back mobility.',
    benefits: [
      'Builds tolerance to loaded spinal flexion.',
      'Lengthens hamstrings, glutes, and lower-back tissue.',
      'Improves overall spinal control and mobility.'
    ],
    instructions: [
      'Stand on a box or bench with feet hip-width apart and a light dumbbell held with both hands in front.',
      'Stand tall, brace lightly, and tuck your chin toward your chest before starting the curl.',
      'Begin rolling your spine down one segment at a time, starting from the top of the neck.',
      'Continue rolling down through the upper back, mid-back, and lower back until the dumbbell drops below the box.',
      'Hold briefly at the bottom with the legs straight and the dumbbell hanging freely below your feet.',
      'Roll back up the same way you came down, restacking the spine one segment at a time until standing tall.'
    ],
    commonMistakes: [
      'Going too heavy too soon, which forces the lower back to bear more load than it\'s ready for.',
      'Bending the knees during the descent, which removes the hamstring stretch and changes the drill.',
      'Dropping straight down at the hips instead of rolling segment by segment through the spine.',
      'Standing back up by hinging at the hips first, which skips the segmental restack of the spine.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-spinal-jefferson-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-spinal-jefferson-curl',
    custom: false
  },
  {
    id: 'b134',
    name: 'Dumbbell Standing Single Arm Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing one-arm curl with a dumbbell — the simplest unilateral biceps builder in any arm program.',
    benefits: [
      'Builds biceps size one arm at a time.',
      'Fixes side-to-side imbalances in elbow flexion.',
      'Trains controlled curl mechanics with isolated load.'
    ],
    instructions: [
      'Stand tall with a dumbbell in one hand at your side and the other hand resting on your hip.',
      'Set your feet shoulder-width apart with knees soft and core lightly braced.',
      'Start with the working arm fully extended and palm facing your thigh.',
      'Curl the dumbbell up toward your shoulder, rotating your palm to face up as the elbow bends.',
      'Squeeze the biceps hard at the top with the elbow tucked beside your ribs.',
      'Lower the dumbbell slowly back down to full extension, then repeat for reps before switching arms.'
    ],
    commonMistakes: [
      'Swinging the torso back to throw the dumbbell up, which turns the curl into a body swing.',
      'Letting the elbow drift forward, which shortens the biceps stretch and turns the lift into a partial.',
      'Cutting the bottom range short and not fully extending the arm, which kills the stretch position.',
      'Rushing the lowering phase, where most of the muscle-building tension actually lives.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-standing-single-arm-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-standing-single-arm-curl',
    custom: false
  },
  {
    id: 'b135',
    name: 'Dumbbell Standing Single Arm Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A one-arm hammer curl that trains the biceps and brachialis with a neutral grip — the curl that builds thicker-looking arms.',
    benefits: [
      'Builds the brachialis underneath the biceps for thicker arms.',
      'Strengthens the forearm and improves grip endurance.',
      'Adds variety to curl programming with neutral-grip loading.'
    ],
    instructions: [
      'Stand tall with a dumbbell in one hand at your side and the other hand resting on your hip.',
      'Set your feet shoulder-width apart with knees soft and core lightly braced.',
      'Start with the working arm fully extended and palm facing your thigh.',
      'Curl the dumbbell up toward your shoulder while keeping the palm facing in throughout the rep.',
      'Squeeze the biceps and brachialis hard at the top with the elbow tucked beside your ribs.',
      'Lower the dumbbell slowly back down to full extension, then repeat for reps before switching arms.'
    ],
    commonMistakes: [
      'Rotating the wrist into a regular curl partway up, which turns the hammer into a standard biceps curl.',
      'Swinging the torso to throw the dumbbell up, which removes the work from the biceps and forearm.',
      'Letting the elbow drift forward, which shortens the range and reduces brachialis loading.',
      'Cutting the lowering phase short, which skips most of the muscle-building tension.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-standing-single-arm-hammer-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-standing-single-arm-hammer-curl',
    custom: false
  },
  {
    id: 'b136',
    name: 'Dumbbell Sumo Squat',
    primaryMuscle: 'glutes',
    secondaryMuscles: ['abs', 'upper_legs'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Squat',
    description: 'A wide-stance squat with a dumbbell hanging between the legs — biases the glutes and inner thighs more than a standard squat.',
    benefits: [
      'Builds the glutes and inner thighs with wide-stance loading.',
      'Trains the squat pattern without needing a barbell or rack.',
      'Develops lower-body strength with home-friendly setups.'
    ],
    instructions: [
      'Stand with feet wider than shoulder-width and toes turned out about 30 to 45 degrees.',
      'Hold one dumbbell vertically with both hands hanging down between your legs.',
      'Brace your core, lift your chest, and pull your shoulders back to set a tall posture.',
      'Squat down by pushing your knees out over your toes and lowering your hips between your legs.',
      'Descend until your thighs reach at least parallel to the floor with the dumbbell hanging near the floor.',
      'Drive through your heels and squeeze your glutes to stand back up to the starting position.'
    ],
    commonMistakes: [
      'Letting the knees cave inward instead of pushing them out over the toes, which loads the inside of the knee.',
      'Rounding the lower back at the bottom, which puts the spine at risk under load.',
      'Squatting with feet too narrow, which turns the lift into a regular goblet squat and loses the inner-thigh focus.',
      'Cutting the depth short and stopping above parallel, which leaves most of the glute and adductor work on the table.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-sumo-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-sumo-squat',
    custom: false
  },
  {
    id: 'b137',
    name: 'Dumbbell Superman',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A loaded version of the floor superman — lifting the chest, arms, and legs together while holding a dumbbell to train the lower back.',
    benefits: [
      'Builds lower-back endurance and spinal-extensor strength.',
      'Strengthens the back chain from glutes to rear shoulders.',
      'Improves posture for users who sit for long hours.'
    ],
    instructions: [
      'Lie face-down on the floor with your legs straight and arms extended overhead holding a light dumbbell.',
      'Set your forehead lightly on the floor and gaze straight down to keep the neck in line.',
      'Brace your core and squeeze your glutes before starting the lift.',
      'Lift your chest, arms, and legs off the floor at the same time, raising the dumbbell as high as is comfortable.',
      'Hold the top position for one to two seconds, squeezing your lower back and glutes hard.',
      'Lower everything back down to the floor under control and reset before the next rep.'
    ],
    commonMistakes: [
      'Going too heavy and overloading the lower back, which is meant to be trained for endurance here.',
      'Cranking the head and neck up instead of keeping the gaze down, which strains the cervical spine.',
      'Bending the arms or knees during the lift, which shortens the levers and reduces the training effect.',
      'Bouncing the arms and legs up and down quickly instead of holding a clean controlled top position.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-superman.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-superman',
    custom: false
  },
  {
    id: 'b138',
    name: 'Dumbbell Thruster',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['upper_legs'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A front squat into an overhead press in one motion — the highest-output dumbbell lift for conditioning and full-body work.',
    benefits: [
      'Trains the legs, shoulders, and core in one full-body lift.',
      'Builds conditioning and strength in the same workout.',
      'Develops the front-squat-to-press chain for advanced lifts.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and a dumbbell held at each shoulder with palms facing in.',
      'Brace your core, sit your hips back and down, and squat until your thighs are parallel to the floor.',
      'Drive through your heels and explode up out of the squat, using the leg drive to launch the dumbbells.',
      'Press the dumbbells straight overhead in one continuous motion until your arms reach full lockout.',
      'Lower the dumbbells back down to your shoulders under control as you sink into the next squat.',
      'Repeat the squat-to-press chain for the prescribed reps without resting at the top or bottom.'
    ],
    commonMistakes: [
      'Pressing the dumbbells overhead before fully standing, which kills the leg drive and stresses the shoulders.',
      'Letting the knees cave in during the squat, which loads the inside of the knee under speed.',
      'Cutting the squat depth short, which removes the leg drive that powers the press.',
      'Crashing the dumbbells back onto the shoulders, which jolts the joints and breaks rhythm.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-thruster.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-thruster',
    custom: false
  },
  {
    id: 'b139',
    name: 'Dumbbell Tricep Kickback',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bent-over single-arm tricep extension that trains the back of the arm with strict elbow control — a classic arm-day finisher.',
    benefits: [
      'Isolates the triceps with strict single-joint loading.',
      'Builds the back of the arm without pressing assistance.',
      'Improves elbow lockout strength for compound presses.'
    ],
    instructions: [
      'Stand with a dumbbell in one hand and a slight bend in your knees.',
      'Hinge forward at the hips until your torso is at about 45 degrees and your back is flat.',
      'Pin your working upper arm against your side with the elbow bent at 90 degrees.',
      'Extend the elbow to swing the dumbbell straight back behind you until the arm is fully locked out.',
      'Squeeze the triceps hard at the top with the dumbbell behind you and the upper arm still pinned.',
      'Lower the dumbbell back down to the bent-elbow start, then repeat for reps before switching arms.'
    ],
    commonMistakes: [
      'Letting the upper arm drop or swing during the lift, which turns the kickback into a row.',
      'Going too heavy and using momentum, which makes the triceps work disappear from the lift.',
      'Cutting the lockout short and not fully extending the elbow, where the triceps fully shorten.',
      'Rounding the lower back instead of hinging with a flat back, which puts the spine at risk.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-tricep-kickback.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-tricep-kickback',
    custom: false
  },
  {
    id: 'b140',
    name: 'Dumbbell Upright Row',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A standing vertical pull with two dumbbells — trains the side shoulders and upper traps in one accessory lift.',
    benefits: [
      'Builds the side shoulders and upper traps in one lift.',
      'Trains the vertical pull pattern with dumbbell-friendly mechanics.',
      'Adds upper-body width and shoulder definition over time.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand resting in front of your thighs and palms facing your body.',
      'Set your feet shoulder-width apart with knees soft and core lightly braced.',
      'Keep your chest up and your shoulders pulled back and down before starting the pull.',
      'Pull both dumbbells straight up along the front of your body by leading with your elbows.',
      'Stop the pull when your elbows reach about chest height, with the dumbbells just below your collarbones.',
      'Lower the dumbbells slowly back down along the same path until your arms are fully extended.'
    ],
    commonMistakes: [
      'Pulling the dumbbells higher than the collarbones, which can cause front-shoulder strain at the top.',
      'Using too much weight and swinging the body to throw the dumbbells up, which removes the shoulder work.',
      'Letting the elbows drop below the wrists, which turns the pull into a curl instead of a row.',
      'Rounding the upper back during the lift, which removes the upper-trap engagement.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-upright-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-upright-row',
    custom: false
  },
  {
    id: 'b141',
    name: 'Dumbbell Wrist Curl',
    primaryMuscle: 'forearms',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated forearm flexor curl that builds wrist strength and forearm thickness — the small accessory every arm day needs.',
    benefits: [
      'Builds forearm flexor thickness and visible lower-arm size.',
      'Strengthens grip for pulling, pressing, and carry exercises.',
      'Reinforces wrist control and tendon resilience under load.'
    ],
    instructions: [
      'Sit on a bench and rest your forearm flat along the top with your palm facing up and wrist hanging just past the edge.',
      'Hold a dumbbell with a relaxed grip and let it roll down toward your fingertips at the bottom of the rep.',
      'Close your fingers and curl the dumbbell back up by flexing only at the wrist, keeping your forearm pinned to the bench.',
      'Squeeze hard at the top with your wrist fully flexed, holding the contraction for a brief count.',
      'Lower the dumbbell slowly over 2 to 3 seconds until your wrist is fully extended at the bottom again.',
      'Repeat for 12 to 20 reps, then switch arms and match the rep count on the other side.'
    ],
    commonMistakes: [
      'Lifting the forearm off the bench, which turns the rep into a small curl and removes tension from the forearm.',
      'Using too heavy a weight and barely moving through the wrist, cutting the working range in half.',
      'Skipping the let-the-bar-roll-into-the-fingers phase, which leaves out the deepest grip and forearm work.',
      'Speeding through the lowering phase instead of controlling it, where most of the forearm growth comes from.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-wrist-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-wrist-curl',
    custom: false
  },
  {
    id: 'b142',
    name: 'Dumbbell Wrist Extension',
    primaryMuscle: 'forearms',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated reverse wrist curl that targets the often-neglected forearm extensors — the balancing piece to every wrist curl.',
    benefits: [
      'Strengthens the forearm extensors and balances out the flexor side.',
      'Reduces elbow strain for climbers, lifters, and racquet-sport athletes.',
      'Improves wrist control and stability for pressing and pulling work.'
    ],
    instructions: [
      'Sit on a bench with your forearm flat on the top, palm facing down, and your wrist hanging just past the edge.',
      'Hold a light dumbbell and let your wrist drop fully so the weight pulls your hand down toward the floor.',
      'Lift the dumbbell by extending your wrist upward, keeping your forearm completely still on the bench.',
      'Squeeze the top of the forearm at peak contraction with the back of your hand pulled toward your forearm.',
      'Lower the dumbbell back down slowly over 2 to 3 seconds, fighting the weight on the way down.',
      'Repeat for 12 to 15 reps, then switch arms and match the rep count on the other side.'
    ],
    commonMistakes: [
      'Picking a weight too heavy, which forces you to use the elbow or shoulder to swing the dumbbell up.',
      'Lifting only a few inches at the top instead of working through the full wrist range.',
      'Letting the forearm drift up off the bench, which removes the isolation entirely.',
      'Rushing the lowering phase, where most of the forearm extensor strength is built.'
    ],
    mediaUrl: 'https://media.larofit.com/dumbbell-wrist-extension.mp4',
    exerciseUrl: 'https://movekit.com/exercises/dumbbell-wrist-extension',
    custom: false
  },
  {
    id: 'b143',
    name: 'Elbow Side Plank',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'duration',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'An isometric side hold on the forearm that trains the obliques and lateral core — the foundation of side-plank progressions.',
    benefits: [
      'Builds oblique strength and side-core stability.',
      'Improves spinal control and resistance to side-bending under load.',
      'Strengthens shoulder and hip stabilizers in a single hold.'
    ],
    instructions: [
      'Lie on your side with your forearm flat on the floor and your elbow stacked directly under your shoulder.',
      'Stack your feet on top of each other and engage your core to create tension through your whole body.',
      'Lift your hips off the floor until your body forms a straight line from your head to your feet.',
      'Brace your top hand on your hip or extend it straight up toward the ceiling for balance.',
      'Hold the position with steady breathing, keeping your hips lifted and your shoulders square.',
      'Lower your hips back down with control after the target time, then switch sides and repeat.'
    ],
    commonMistakes: [
      'Letting the hips sag toward the floor mid-hold, which removes the obliques from the work and loads the shoulder.',
      'Rotating the chest toward the floor instead of keeping the torso stacked and squared up.',
      'Placing the supporting elbow ahead of or behind the shoulder, which strains the shoulder joint.',
      'Holding your breath through the set instead of breathing steadily, which cuts hold time short.'
    ],
    mediaUrl: 'https://media.larofit.com/elbow-side-plank.mp4',
    exerciseUrl: 'https://movekit.com/exercises/elbow-side-plank',
    custom: false
  },
  {
    id: 'b144',
    name: 'EZ Bar Preacher Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'ez_bar',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A strict biceps curl performed on a preacher bench with an EZ bar — pure isolation for the lower half of the bicep.',
    benefits: [
      'Builds the lower bicep and creates a fuller arm shape.',
      'Removes momentum so every rep loads the biceps directly.',
      'Reinforces strict elbow-flexion mechanics for cleaner curls overall.'
    ],
    instructions: [
      'Set the preacher bench so the top pad sits just under your armpits with your chest pressed against it.',
      'Grip the EZ bar at the inner-angled grips with your palms facing up and arms fully extended down the pad.',
      'Curl the bar up toward your shoulders by bending only at the elbows, keeping your upper arms locked on the pad.',
      'Squeeze the biceps hard at the top of the rep without letting the elbows drift forward off the bench.',
      'Lower the bar slowly over 2 to 3 seconds until your arms are almost fully extended at the bottom.',
      'Stop just short of full lockout to keep tension on the biceps, then curl back up for the next rep.'
    ],
    commonMistakes: [
      'Pulling the elbows back off the pad to use the shoulders, which removes the isolation from the curl.',
      'Letting the bar drop fast at the bottom and bouncing out of the stretch, which strains the elbow tendons.',
      'Lifting the chest off the pad to swing the weight up, turning a strict curl into a partial cheat rep.',
      'Cutting the range short at the top or bottom, missing the stretch and contraction that drive bicep growth.'
    ],
    mediaUrl: 'https://media.larofit.com/ez-bar-preacher-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/ez-bar-preacher-curl',
    custom: false
  },
  {
    id: 'b145',
    name: 'EZ Bar Reverse Preacher Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'ez_bar',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A palms-down preacher curl that hits the brachialis, forearms, and bicep together — an underused arm-day finisher.',
    benefits: [
      'Builds the brachialis to add thickness underneath the biceps.',
      'Strengthens the forearm extensors and grip.',
      'Improves wrist stability for pulls, presses, and curls.'
    ],
    instructions: [
      'Set the preacher bench so the top pad sits just under your armpits with your chest pressed firmly against it.',
      'Grip the EZ bar at the inner-angled grips with your palms facing down and arms extended down the pad.',
      'Curl the bar upward by bending only at the elbows, keeping your wrists straight and your upper arms locked in place.',
      'Squeeze the top of the rep with your wrists held neutral, feeling the work in the forearms and outer biceps.',
      'Lower the bar slowly over 2 to 3 seconds until your arms are nearly straight at the bottom of the rep.',
      'Stop just short of full lockout to keep constant tension, then curl the bar back up for the next rep.'
    ],
    commonMistakes: [
      'Letting the wrists bend backward under load, which strains the wrist joints and cuts the lift short.',
      'Going too heavy with a reverse grip, where forearm strength gives out long before the biceps do.',
      'Pulling the elbows back off the pad mid-rep, swapping isolation for shoulder cheating.',
      'Skipping the stretch at the bottom by stopping the rep early, which leaves growth on the table.'
    ],
    mediaUrl: 'https://media.larofit.com/ez-bar-reverse-preacher-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/ez-bar-reverse-preacher-curl',
    custom: false
  },
  {
    id: 'b146',
    name: 'Forward Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A bodyweight step-forward lunge that trains the glutes and quads one leg at a time — the entry point to single-leg work.',
    benefits: [
      'Builds glute and quad strength one leg at a time.',
      'Exposes and corrects left-right strength imbalances.',
      'Develops single-leg balance and hip stability for sport and daily life.'
    ],
    instructions: [
      'Stand tall with your feet hip-width apart, hands on your hips or relaxed at your sides.',
      'Step forward with one leg into a long stride, landing softly on the heel and rolling onto the foot.',
      'Lower your back knee straight down toward the floor until both knees form roughly 90-degree angles.',
      'Keep your torso upright with your front knee tracking over your front foot at the bottom.',
      'Push through the front heel to drive yourself back up and step the front foot back to the start.',
      'Alternate legs each rep or finish all reps on one side before switching, depending on the program.'
    ],
    commonMistakes: [
      'Letting the front knee cave inward, which strains the knee and shifts work away from the glutes.',
      'Taking too short a step forward, forcing the front knee to push way past the toes and stressing the joint.',
      'Leaning the torso forward over the front leg, which loads the lower back instead of the legs.',
      'Slamming the back knee into the floor instead of stopping just above it under control.'
    ],
    mediaUrl: 'https://media.larofit.com/forward-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/forward-lunge',
    custom: false
  },
  {
    id: 'b147',
    name: 'Good Mornings',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes', 'back'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A standing hip-hinge bow that trains the hamstrings, glutes, and lower back — a clean teaching piece for the hinge pattern.',
    benefits: [
      'Builds hamstring strength through a controlled stretch.',
      'Strengthens the glutes and lower back as a connected hinge unit.',
      'Teaches the hip-hinge pattern used in every deadlift variation.'
    ],
    instructions: [
      'Stand tall with your feet hip-width apart, hands crossed at your chest or behind your head.',
      'Brace your core and unlock your knees with a soft bend, keeping that bend constant through the rep.',
      'Push your hips backward and bow your torso forward, keeping your back flat from head to tailbone.',
      'Lower until you feel a deep stretch in the hamstrings or your torso is roughly parallel to the floor.',
      'Drive your hips forward to lift your torso back up to standing, squeezing your glutes at the top.',
      'Pause briefly upright before starting the next rep, keeping the same knee angle throughout the set.'
    ],
    commonMistakes: [
      'Rounding the back as you bow forward, which loads the spine instead of the hamstrings and glutes.',
      'Bending the knees more as you go down, turning the hinge into a half-squat and reducing hamstring work.',
      'Going past parallel before the hips can absorb the stretch, which strains the lower back.',
      'Standing up by pulling with the lower back instead of driving with the hips and glutes.'
    ],
    mediaUrl: 'https://media.larofit.com/good-mornings.mp4',
    exerciseUrl: 'https://movekit.com/exercises/good-mornings',
    custom: false
  },
  {
    id: 'b148',
    name: 'Hand Plank',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'duration',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A high plank held on straight arms — a foundational isometric for the abs, shoulders, and full-body bracing.',
    benefits: [
      'Builds full-core endurance and anti-extension strength.',
      'Stabilizes the shoulders for pressing and overhead work.',
      'Reinforces full-body bracing under your own bodyweight.'
    ],
    instructions: [
      'Start on all fours with your hands flat on the floor directly under your shoulders.',
      'Step both feet back one at a time until your legs are straight and your body is in a long line.',
      'Press the floor away to spread your shoulder blades and keep a slight rounding through the upper back.',
      'Squeeze your glutes and brace your abs to stop your hips from sagging or piking up.',
      'Hold the position with steady breathing, eyes looking down between your hands to keep a neutral neck.',
      'Lower your knees back to the floor with control after the target time and rest before the next set.'
    ],
    commonMistakes: [
      'Letting the hips sag toward the floor, which loads the lower back instead of the abs.',
      'Piking the hips up high, which turns the plank into a partial downward dog and removes the core challenge.',
      'Letting the head drop or crane forward, which strains the neck and breaks the body\'s straight line.',
      'Locking the elbows and sinking into the shoulders instead of pressing the floor away.'
    ],
    mediaUrl: 'https://media.larofit.com/hand-plank.mp4',
    exerciseUrl: 'https://movekit.com/exercises/hand-plank',
    custom: false
  },
  {
    id: 'b149',
    name: 'Hanging Knee Raises',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A bar-hung knee raise that trains the abs and hip flexors — the entry point to hanging core work.',
    benefits: [
      'Builds lower-ab strength through a full bar-hung range.',
      'Strengthens the grip and shoulders as a stability bonus.',
      'Lays the foundation for harder hanging core progressions.'
    ],
    instructions: [
      'Hang from a pull-up bar with hands shoulder-width apart and arms fully extended overhead.',
      'Engage your shoulders by pulling them slightly down and back to keep your body stable.',
      'Bend your knees and pull them up toward your chest by curling your hips under, not just lifting the legs.',
      'Squeeze your abs hard at the top with your knees pulled high and your pelvis tilted up.',
      'Lower your legs slowly back down over 2 to 3 seconds until you reach a dead hang again.',
      'Repeat without swinging, letting the bar still completely between reps if needed.'
    ],
    commonMistakes: [
      'Swinging the body for momentum, which removes ab engagement and turns the rep into a leg swing.',
      'Lifting the knees with the hip flexors only, never tilting the pelvis up to load the abs.',
      'Dropping the legs fast at the bottom, which trains the descent poorly and adds shoulder strain.',
      'Hanging completely loose at the shoulders, which stresses the joints and reduces core stability.'
    ],
    mediaUrl: 'https://media.larofit.com/hanging-knee-raises.mp4',
    exerciseUrl: 'https://movekit.com/exercises/hanging-knee-raises',
    custom: false
  },
  {
    id: 'b150',
    name: 'Incline Push Up',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A push-up performed with hands raised on a bench or box — the easier on-ramp to a full bodyweight push-up.',
    benefits: [
      'Builds chest, triceps, and front-shoulder strength at a beginner-friendly load.',
      'Provides a clear progression path toward a floor push-up.',
      'Reinforces full-body bracing in the push-up position.'
    ],
    instructions: [
      'Place your hands on a bench or sturdy box, slightly wider than shoulder-width, with arms straight.',
      'Walk your feet back until your body forms a long line from your head to your heels.',
      'Brace your core and squeeze your glutes so your hips don\'t sag or lift through the rep.',
      'Lower your chest toward the bench by bending your elbows at about a 45-degree angle from your torso.',
      'Stop just before your chest touches the bench, then press through your palms back to the start.',
      'Lock out the arms at the top with your shoulder blades spread, then start the next rep.'
    ],
    commonMistakes: [
      'Flaring the elbows out wide, which strains the front shoulders and reduces chest engagement.',
      'Letting the hips sag toward the bench, which removes core tension and overloads the lower back.',
      'Cutting the range short by lowering only halfway, which skips the deepest chest work.',
      'Looking up and craning the neck instead of keeping the head in line with the spine.'
    ],
    mediaUrl: 'https://media.larofit.com/incline-push-up.mp4',
    exerciseUrl: 'https://movekit.com/exercises/incline-push-up',
    custom: false
  },
  {
    id: 'b151',
    name: 'Inverted Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A bodyweight horizontal row pulled from under a fixed bar — the foundational pull for any back or pull-day program.',
    benefits: [
      'Builds horizontal pulling strength as a foundation for the pull-up.',
      'Develops the mid-back, lats, and biceps with bodyweight only.',
      'Improves shoulder health by balancing out pressing work.'
    ],
    instructions: [
      'Set a barbell in a rack at about hip height or use a sturdy fixed bar at the same level.',
      'Lie on your back under the bar and grip it with hands slightly wider than shoulder-width, palms facing forward.',
      'Walk your feet out and lift your hips so your body forms a straight line from your heels to your head.',
      'Pull your chest up to the bar by driving your elbows down and back, keeping your core braced.',
      'Touch the bar with your chest and hold for a count, squeezing your shoulder blades together at the top.',
      'Lower yourself slowly back to a full-arm hang over 2 to 3 seconds, then start the next rep.'
    ],
    commonMistakes: [
      'Letting the hips sag, which removes the core from the lift and reduces the working range.',
      'Pulling with the arms only and never squeezing the shoulder blades back, leaving the back out.',
      'Cutting the range short by stopping before the chest touches the bar.',
      'Dropping fast on the way down instead of controlling the descent, where most of the back work lives.'
    ],
    mediaUrl: 'https://media.larofit.com/inverted-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/inverted-row',
    custom: false
  },
  {
    id: 'b152',
    name: 'Jump Squats',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Plyometric',
    description: 'An explosive bodyweight squat-and-jump that builds lower-body power — the staple plyometric for HIIT and conditioning.',
    benefits: [
      'Builds explosive lower-body power for sport and athletic performance.',
      'Drives heart rate up fast for conditioning and fat loss.',
      'Improves landing mechanics and joint resilience under impact.'
    ],
    instructions: [
      'Stand with your feet shoulder-width apart and your arms relaxed at your sides.',
      'Drop quickly into a quarter to half squat by bending your knees and pushing your hips back.',
      'Swing your arms back as you lower to load momentum for the jump.',
      'Explode upward by extending the hips, knees, and ankles all at once, throwing your arms up overhead.',
      'Land softly with bent knees and immediately absorb back into the squat position to cushion the impact.',
      'Reset for half a second at the bottom and launch into the next rep with the same explosive intent.'
    ],
    commonMistakes: [
      'Landing with locked-out, straight legs, which slams force through the knees and ankles.',
      'Squatting too deep before the jump, which kills the spring and slows down the movement.',
      'Letting the knees cave inward on landing, which strains the knees and shifts work off the glutes.',
      'Slumping the chest forward at the bottom, which makes the launch weak and stresses the lower back.'
    ],
    mediaUrl: 'https://media.larofit.com/jump-squats.mp4',
    exerciseUrl: 'https://movekit.com/exercises/jump-squats',
    custom: false
  },
  {
    id: 'b153',
    name: 'Kettlebell Alternating Curtsy Lunge',
    primaryMuscle: 'glutes',
    secondaryMuscles: ['upper_legs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A loaded crossover lunge that targets the glute medius and inner-leg stabilizers — a sharp tool for glute-focused programs.',
    benefits: [
      'Targets the glute medius for hip shape and lateral stability.',
      'Builds single-leg strength with a heavy crossover challenge.',
      'Improves balance and hip control under load.'
    ],
    instructions: [
      'Hold a kettlebell at chest height in a goblet grip with both hands cupping the horns.',
      'Stand tall with your feet hip-width apart and your core braced.',
      'Step one foot diagonally back and across behind your front leg, like you\'re starting a curtsy.',
      'Lower your back knee toward the floor by bending both legs, keeping the front knee tracking over the front foot.',
      'Drive through the heel of your front foot to push back up to the start, returning the back leg to neutral.',
      'Alternate sides each rep, keeping your torso upright and the kettlebell tight to your chest throughout.'
    ],
    commonMistakes: [
      'Letting the front knee cave inward on the descent, which strains the knee and removes glute work.',
      'Crossing the back leg too far behind, which forces the hips to rotate and breaks the stable stance.',
      'Leaning the torso forward over the front leg, loading the lower back instead of the glutes.',
      'Letting the kettlebell drop away from the chest, which destabilizes the upper body and shortens the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-alternating-curtsy-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-alternating-curtsy-lunge',
    custom: false
  },
  {
    id: 'b154',
    name: 'Kettlebell Assisted Bulgarian Split Squat',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A Bulgarian split squat performed with a kettlebell as a counterweight — easier balance, deeper range, real glute and quad work.',
    benefits: [
      'Builds single-leg glute and quad strength with manageable balance demands.',
      'Bridges the gap between split squats and full-load Bulgarian split squats.',
      'Improves hip mobility and stability through a deep range.'
    ],
    instructions: [
      'Stand a few feet in front of a bench and place the top of one foot back on the bench behind you.',
      'Hold a light kettlebell at chest height with both hands cupping the horns in a goblet grip.',
      'Brace your core and check that your front foot is far enough forward for the knee to bend cleanly.',
      'Lower straight down by bending both legs until your back knee almost touches the floor.',
      'Keep the kettlebell tight to your chest and your torso upright through the full descent.',
      'Drive through the front heel to stand back up to the starting position and reset for the next rep.'
    ],
    commonMistakes: [
      'Placing the front foot too close to the bench, which forces the knee to push past the toes uncomfortably.',
      'Letting the front knee cave in at the bottom, which strains the knee and shifts work off the glute.',
      'Leaning forward over the front leg, loading the lower back instead of the working leg.',
      'Pushing off the back foot for help, which removes the single-leg challenge from the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-assisted-bulgarian-split-squat.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-assisted-bulgarian-split-squat',
    custom: false
  },
  {
    id: 'b155',
    name: 'Kettlebell Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A flat-bench press performed with kettlebells — the off-center load that challenges chest, triceps, and shoulder stability.',
    benefits: [
      'Builds horizontal pressing strength with a real stability demand.',
      'Develops the chest, triceps, and front shoulders together.',
      'Strengthens the rotator cuff for healthier overhead and pressing work.'
    ],
    instructions: [
      'Sit on a flat bench with two kettlebells resting on your thighs, gripping the handles with palms facing in.',
      'Lie back on the bench while using your knees to kick the kettlebells up to a racked position at your shoulders.',
      'Set your back with your shoulder blades pulled down and squeezed together against the bench.',
      'Press both kettlebells straight up to full arm extension, rotating the palms slightly inward at the top.',
      'Lower the kettlebells slowly back to the racked position with the bells resting against your forearms.',
      'Pause briefly at the bottom, then press back up explosively for the next rep.'
    ],
    commonMistakes: [
      'Letting the bells dangle off the wrists, which strains the wrist joints and shortens the working range.',
      'Pressing the kettlebells out of sync, which creates side-to-side wobble and reduces total load tolerance.',
      'Losing the shoulder-blade squeeze mid-rep, causing the shoulders to roll forward under load.',
      'Flaring the elbows wide to 90 degrees, which strains the front shoulders and removes the chest from the lift.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-bench-press',
    custom: false
  },
  {
    id: 'b156',
    name: 'Kettlebell Calf Raise',
    primaryMuscle: 'lower_legs',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing calf raise loaded with a kettlebell — direct calf isolation for any leg-day finisher block.',
    benefits: [
      'Builds calf size and strength with a meaningful loaded stretch.',
      'Strengthens the ankles for jumping, sprinting, and balance.',
      'Improves push-off power for runners and athletes.'
    ],
    instructions: [
      'Stand tall with your feet hip-width apart, holding a kettlebell at your side or in front at chest height.',
      'Place the balls of your feet on a small step or platform with your heels hanging just off the edge.',
      'Brace your core and keep your knees soft but straight throughout the entire rep.',
      'Press up onto the balls of your feet by squeezing your calves and lifting your heels as high as possible.',
      'Pause for a count at the top with the calves fully contracted and your weight balanced.',
      'Lower your heels slowly below the platform over 2 to 3 seconds for a deep stretch, then drive back up.'
    ],
    commonMistakes: [
      'Bouncing through the bottom of each rep, which uses tendon recoil instead of working the calf muscle.',
      'Cutting the range short at the top, which leaves out the peak contraction where the calves grow.',
      'Bending the knees mid-rep, which shifts work to the soleus only and reduces the gastrocnemius work.',
      'Tipping forward at the hips for momentum instead of staying tall and pressing straight up.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-calf-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-calf-raise',
    custom: false
  },
  {
    id: 'b157',
    name: 'Kettlebell Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing bicep curl performed with a kettlebell — the off-center load that adds extra forearm and grip work.',
    benefits: [
      'Builds bicep strength and size with extra grip and forearm load.',
      'Reinforces wrist control under an off-center weight.',
      'Adds a fresh stimulus to a routine that\'s grown used to dumbbells.'
    ],
    instructions: [
      'Stand tall with your feet hip-width apart, holding a kettlebell in each hand by the handle, palms facing forward.',
      'Let the bells hang naturally below your wrists with your arms fully extended at your sides.',
      'Brace your core and keep your elbows pinned to your ribs throughout the rep.',
      'Curl both kettlebells up toward your shoulders by bending only at the elbows.',
      'Squeeze the biceps hard at the top with the bells stacked over the wrists for a clean contraction.',
      'Lower the kettlebells slowly back to full arm extension over 2 to 3 seconds, then start the next rep.'
    ],
    commonMistakes: [
      'Letting the wrists bend back under the weight, which strains the wrist joints and shortens the curl.',
      'Swinging the torso to start the rep, which uses momentum instead of bicep strength.',
      'Letting the elbows drift forward at the top, which removes the biceps from the lift.',
      'Cutting the range short by stopping before full extension, missing the deepest part of the bicep stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-curl',
    custom: false
  },
  {
    id: 'b158',
    name: 'Kettlebell Farmers Carry',
    primaryMuscle: 'forearms',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'duration',
    difficulty: 'beginner',
    movement: 'Carry',
    description: 'A heavy walking carry with kettlebells in each hand — full-body strength training disguised as a stroll.',
    benefits: [
      'Builds grip strength for pulls, deadlifts, and daily life.',
      'Reinforces upright posture and full-core bracing under load.',
      'Trains the traps, forearms, and shoulders in a single carry.'
    ],
    instructions: [
      'Set two heavy kettlebells on the floor at your sides, just outside your feet.',
      'Hinge down to grip both handles with a strong, full-fist grip and a neutral spine.',
      'Stand up by pushing through your heels and locking out your hips and knees at the top.',
      'Pull your shoulders down and back to stand tall with the kettlebells hanging at your sides.',
      'Walk forward with short, controlled steps, keeping your core braced and ribs stacked over hips.',
      'Walk for the target distance or time, then hinge to set the kettlebells down with control.'
    ],
    commonMistakes: [
      'Slumping the shoulders forward under the load, which strains the upper back and reduces grip endurance.',
      'Swinging the kettlebells with each step, which wastes energy and breaks the bracing pattern.',
      'Holding your breath through the carry, which spikes blood pressure and shortens the working set.',
      'Setting the kettlebells down by collapsing the spine instead of hinging cleanly to the floor.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-farmers-carry.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-farmers-carry',
    custom: false
  },
  {
    id: 'b159',
    name: 'Kettlebell Front Raise',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A controlled front raise with a kettlebell — direct front-delt isolation for shoulder-day accessory blocks.',
    benefits: [
      'Builds the front delts directly for shoulder shape and pressing strength.',
      'Reinforces controlled, no-swing shoulder mechanics.',
      'Improves shoulder stability and bracing under a centered load.'
    ],
    instructions: [
      'Stand tall with your feet hip-width apart, holding a kettlebell by the horns with both hands.',
      'Let the kettlebell hang in front of your hips with your arms straight and shoulders pulled down and back.',
      'Brace your core to lock the torso in place so it can\'t swing or arch through the rep.',
      'Raise the kettlebell straight out in front of you by lifting through the front shoulders only.',
      'Stop when the kettlebell reaches roughly eye level with your arms straight and elbows soft.',
      'Lower the kettlebell slowly back to the start over 2 to 3 seconds, then begin the next rep.'
    ],
    commonMistakes: [
      'Swinging the torso to start the rep, which uses momentum instead of front-delt strength.',
      'Lifting the kettlebell too high overhead, which shifts work to the traps and out of the front delts.',
      'Bending the elbows mid-rep, which turns the raise into a partial curl and reduces shoulder isolation.',
      'Letting the lower back arch to help lift, which strains the spine and removes the brace.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-front-raise.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-front-raise',
    custom: false
  },
  {
    id: 'b160',
    name: 'Kettlebell Goblet Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A two-handed bicep curl performed with a single kettlebell — a kettlebell-only path to direct bicep work.',
    benefits: [
      'Builds bicep strength and size with a single piece of equipment.',
      'Allows heavier loading for users with only one kettlebell.',
      'Reinforces strict, no-swing curl mechanics with both arms working together.'
    ],
    instructions: [
      'Stand tall with your feet hip-width apart, holding a single kettlebell by the horns with both hands.',
      'Let the kettlebell hang in front of your hips with your arms straight and elbows pinned to your ribs.',
      'Brace your core to lock your torso so it doesn\'t swing or rock through the rep.',
      'Curl the kettlebell up toward your chest by bending both elbows together in a smooth motion.',
      'Squeeze your biceps hard at the top with the kettlebell at chest height, holding briefly for the contraction.',
      'Lower the kettlebell slowly back to full arm extension over 2 to 3 seconds, then start the next rep.'
    ],
    commonMistakes: [
      'Swinging the torso to lift the kettlebell, which uses momentum instead of bicep strength.',
      'Letting the elbows drift forward at the top, which removes the biceps from the lift.',
      'Cutting the range short by stopping before full extension, missing the bottom stretch of the curl.',
      'Letting the wrists bend back under the load, which strains the wrist joints and weakens the contraction.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-goblet-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-goblet-curl',
    custom: false
  },
  {
    id: 'b161',
    name: 'Kettlebell Gorilla Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'An alternating two-kettlebell row from a wide stance that hammers the lats and biceps with constant tension.',
    benefits: [
      'Builds lat and biceps thickness with heavy bilateral loading.',
      'Trains anti-rotation strength through the core every single rep.',
      'Reinforces a strong hip hinge under sustained kettlebell load.'
    ],
    instructions: [
      'Stand over two kettlebells with feet wider than shoulder width and toes turned slightly out.',
      'Hinge at the hips and grip both handles with a flat back, chest proud, and arms hanging straight down.',
      'Brace your core and row the right kettlebell to your hip, keeping the elbow close to the ribs.',
      'Lower the right bell back to the floor under control while keeping the left arm long and loaded.',
      'Row the left kettlebell to your hip with the same tight elbow path, fighting any rotation in the torso.',
      'Continue alternating sides for the full set, keeping the hips square and the back flat throughout.'
    ],
    commonMistakes: [
      'Rotating the torso to throw the kettlebell up instead of pulling cleanly with the back.',
      'Letting the elbow flare wide, which shifts the load off the lats and onto the rear shoulders.',
      'Rounding the lower back at the bottom of each rep, which strains the spine under load.',
      'Yanking the bell off the floor with the arm instead of pulling with the lat and mid-back.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-gorilla-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-gorilla-row',
    custom: false
  },
  {
    id: 'b162',
    name: 'Kettlebell Hip Thrust',
    primaryMuscle: 'glutes',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A bench-supported hip thrust loaded with a kettlebell on the hips — the home-friendly answer to the barbell version.',
    benefits: [
      'Builds glute size and strength through a full hip extension range.',
      'Trains lockout power that carries over to deadlifts and sprinting.',
      'Loads the glutes directly without stressing the lower back.'
    ],
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench and a kettlebell resting on your hips.',
      'Plant your feet shoulder-width apart, knees bent, with your shins close to vertical at the top of the rep.',
      'Brace your core and drive through your heels to lift your hips up toward the ceiling.',
      'Squeeze your glutes hard at the top, with your torso and thighs forming a straight line.',
      'Lower your hips slowly back toward the floor, keeping tension on the glutes the whole way down.',
      'Tap the floor lightly with your hips and drive back up for the next rep without losing position.'
    ],
    commonMistakes: [
      'Pushing the hips up by overarching the lower back instead of driving through the glutes.',
      'Letting the knees cave inward at lockout, which shifts load off the glutes and onto the joints.',
      'Stopping short of full hip extension, which leaves the strongest part of the rep on the table.',
      'Resting the kettlebell on the stomach rather than the hip crease, which limits how high the hips can travel.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-hip-thrust.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-hip-thrust',
    custom: false
  },
  {
    id: 'b163',
    name: 'Kettlebell Incline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'An incline press with two kettlebells that builds the upper chest, front shoulders, and triceps with a deep, joint-friendly groove.',
    benefits: [
      'Builds upper-chest size with a longer, more natural range of motion.',
      'Strengthens the front shoulders and triceps in the pressing pattern.',
      'Spares the wrists and shoulders compared to a fixed-bar incline press.'
    ],
    instructions: [
      'Set an adjustable bench to a 30 to 45 degree incline and sit with a kettlebell in each hand on your thighs.',
      'Lie back and use your knees to kick the kettlebells up to the rack position at your shoulders.',
      'Pull your shoulder blades back and down into the bench and brace your core before pressing.',
      'Press both kettlebells up and slightly together until the arms are extended over the upper chest.',
      'Lower the bells slowly back to the rack position with elbows tracking at about 45 degrees from the torso.',
      'Pause briefly at the bottom with the chest stretched, then press back up for the next rep.'
    ],
    commonMistakes: [
      'Letting the elbows flare straight out to the sides, which strains the front shoulders.',
      'Pressing the kettlebells with wrists bent backward instead of stacked over the forearm.',
      'Bouncing the bells off the shoulders instead of controlling the bottom of each rep.',
      'Lifting the hips off the bench to leverage the press, which kills the upper-chest stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-incline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-incline-bench-press',
    custom: false
  },
  {
    id: 'b164',
    name: 'Kettlebell Push Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['triceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A leg-driven overhead press with the kettlebell racked at the shoulder, training the shoulders and triceps with athletic power.',
    benefits: [
      'Builds overhead pressing strength heavier than a strict press allows.',
      'Trains explosive leg-to-arm power transfer for athletic carryover.',
      'Develops shoulder and triceps size under sustained kettlebell loading.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and clean a kettlebell to the rack position at your shoulder.',
      'Brace your core and dip slightly at the knees and hips, keeping your torso vertical.',
      'Drive explosively through your heels to extend the legs and launch the kettlebell upward.',
      'Press the bell to full lockout overhead with the bicep alongside your ear and the wrist stacked.',
      'Lower the kettlebell back to the rack position under control, absorbing with a soft knee bend.',
      'Reset your stance and brace, then dip and drive again for the next rep.'
    ],
    commonMistakes: [
      'Turning the dip into a deep squat instead of a short, fast drop and drive.',
      'Pressing with the arm before the leg drive transfers, which kills the power assist.',
      'Letting the wrist bend backward at lockout, which loads the joint instead of the shoulder.',
      'Leaning back into the lower spine to finish the press instead of pressing straight up overhead.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-push-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-push-press',
    custom: false
  },
  {
    id: 'b165',
    name: 'Kettlebell Romanian Deadlift',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A kettlebell hinge that loads the hamstrings, glutes, and lower back through a slow, controlled stretch.',
    benefits: [
      'Builds hamstring and glute strength through a deep loaded stretch.',
      'Teaches the hip hinge pattern that underpins every deadlift variation.',
      'Strengthens the lower back\'s role as a stabilizer under load.'
    ],
    instructions: [
      'Stand with feet hip-width apart and hold a kettlebell with both hands in front of your thighs.',
      'Pull your shoulder blades back and brace your core to lock the spine in a neutral position.',
      'Push your hips back and let the kettlebell travel down the front of your legs with a slight knee bend.',
      'Lower the bell until you feel a deep stretch in the hamstrings, usually around mid-shin.',
      'Drive your hips forward to stand back up, keeping the kettlebell close to your body the whole way.',
      'Squeeze your glutes hard at the top and reset your brace before the next rep.'
    ],
    commonMistakes: [
      'Turning the lift into a squat by bending the knees instead of pushing the hips back.',
      'Rounding the lower back as the kettlebell lowers, which loads the spine instead of the hamstrings.',
      'Letting the kettlebell drift away from the body, which pulls the lifter forward and strains the back.',
      'Hyperextending the lower back at lockout instead of standing tall with squeezed glutes.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-romanian-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-romanian-deadlift',
    custom: false
  },
  {
    id: 'b166',
    name: 'Kettlebell Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A bent-over two-kettlebell row that builds the lats and biceps in a horizontal pull pattern.',
    benefits: [
      'Builds lat and biceps size with a deep, unrestricted range of motion.',
      'Trains the horizontal pull pattern that balances out pressing work.',
      'Strengthens the lower back and core\'s role in holding the hinge under load.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and a kettlebell on the floor outside each foot.',
      'Hinge at the hips with a flat back and grip both handles, letting the bells hang from straight arms.',
      'Brace your core and pull both kettlebells up toward your lower ribs, leading with the elbows.',
      'Squeeze your shoulder blades together at the top and keep the elbows tucked close to your sides.',
      'Lower the bells slowly back toward the floor, fighting the descent for the full range.',
      'Repeat for the full set without losing the hinge position or rocking the torso for momentum.'
    ],
    commonMistakes: [
      'Standing more upright as the set goes on, which turns the row into a shrug.',
      'Yanking the bells up with arm-only effort instead of pulling with the back.',
      'Letting the elbows flare wide, which shifts work off the lats and onto the rear shoulders.',
      'Rounding the lower back at the bottom, which loads the spine instead of the back muscles.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-row',
    custom: false
  },
  {
    id: 'b167',
    name: 'Kettlebell Row (Single)',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A staggered-stance kettlebell row that loads the mid-back, lats, and biceps one side at a time.',
    benefits: [
      'Builds mid-back and lat size one side at a time, exposing weak sides.',
      'Trains anti-rotation strength through the trunk on every rep.',
      'Requires only one kettlebell, making it ideal for minimal-equipment setups.'
    ],
    instructions: [
      'Stand with one foot forward in a short stagger and a kettlebell on the floor next to the back leg.',
      'Hinge at the hips and rest your non-working hand on the front thigh for support, keeping a flat back.',
      'Grip the kettlebell with the working hand and let the arm hang straight down with the bell loaded.',
      'Brace your core and row the kettlebell up to your hip, leading with the elbow close to the ribs.',
      'Squeeze your mid-back at the top, then lower the bell slowly back toward the floor under control.',
      'Finish all reps on one side, then switch stance and arms and repeat on the other side.'
    ],
    commonMistakes: [
      'Twisting the torso open to throw the kettlebell up instead of staying square to the floor.',
      'Letting the elbow flare wide, which loads the rear shoulder instead of the mid-back and lats.',
      'Rounding the lower back when the bell is on the floor, which strains the spine.',
      'Pulling with the biceps only and skipping the shoulder-blade squeeze at the top of the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-row-single.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-row-single',
    custom: false
  },
  {
    id: 'b168',
    name: 'Kettlebell Seated Overhead Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['triceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A strict seated press with two kettlebells that isolates the shoulders and triceps without leg drive.',
    benefits: [
      'Builds strict shoulder and triceps strength without help from the legs.',
      'Develops shoulder size through a long, loaded overhead range.',
      'Reinforces a vertical press path that protects the lower back.'
    ],
    instructions: [
      'Sit on a bench with back support and a kettlebell in each hand, racked at your shoulders.',
      'Plant your feet flat on the floor and brace your core to lock the torso in place.',
      'Press both kettlebells straight up overhead until the arms are fully extended.',
      'Finish with the wrists stacked over the elbows and the bells resting on the back of the forearms.',
      'Lower the bells slowly back to the rack position with elbows tracking forward, not flaring wide.',
      'Pause briefly at the bottom, reset the brace, and press again for the next rep.'
    ],
    commonMistakes: [
      'Arching the lower back to leverage the press instead of staying braced and vertical.',
      'Letting the wrists bend backward at lockout, which strains the joint.',
      'Pressing the bells out in front of the head instead of straight up over the shoulders.',
      'Bouncing the kettlebells off the shoulders at the bottom instead of pausing under control.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-seated-overhead-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-seated-overhead-press',
    custom: false
  },
  {
    id: 'b169',
    name: 'Kettlebell Shrug',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing shrug with two kettlebells that isolates the upper traps through a clean vertical lift.',
    benefits: [
      'Builds upper-trap size and visible neck and shoulder thickness.',
      'Strengthens the traps\' role in stabilizing heavy carries and pulls.',
      'Improves posture and neck support for desk-bound lifters.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart and a kettlebell in each hand hanging at your sides.',
      'Pull your shoulder blades back and down to set a tall, neutral starting position.',
      'Lift both shoulders straight up toward your ears without bending the elbows.',
      'Pause briefly at the top with the traps fully contracted, keeping the chin neutral.',
      'Lower the kettlebells slowly back to the start by letting the shoulders drop under control.',
      'Repeat for the full set, keeping the lift purely vertical without rolling the shoulders.'
    ],
    commonMistakes: [
      'Rolling the shoulders forward and back instead of lifting straight up, which stresses the joint.',
      'Bending the elbows to pull with the biceps instead of isolating the traps.',
      'Jutting the chin forward at the top of the shrug, which loads the neck.',
      'Cutting the range short by barely lifting the shoulders, leaving most of the trap work undone.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-shrug.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-shrug',
    custom: false
  },
  {
    id: 'b170',
    name: 'Kettlebell Single Arm Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A bench-supported one-arm kettlebell row that isolates the lats and biceps with a clean, full range.',
    benefits: [
      'Builds lat and biceps size one side at a time for balanced back development.',
      'Allows a deeper range of motion than a standing or two-arm row.',
      'Spares the lower back by using a bench for support under load.'
    ],
    instructions: [
      'Place one knee and same-side hand on a flat bench with the opposite foot planted on the floor.',
      'Reach down and grip a kettlebell with the working hand, letting the arm hang straight from the shoulder.',
      'Brace your core and keep your back flat and parallel to the floor.',
      'Row the kettlebell up to your hip, leading with the elbow and keeping it close to your ribs.',
      'Squeeze your shoulder blade in toward the spine at the top, then lower the bell slowly back down.',
      'Finish all reps on one side before switching positions and repeating on the other arm.'
    ],
    commonMistakes: [
      'Twisting the torso open to throw the kettlebell up instead of pulling cleanly with the lat.',
      'Letting the elbow flare wide, which loads the rear shoulder instead of the back.',
      'Letting the shoulder shrug up at the top, swapping back work for trap involvement.',
      'Cutting the bottom of the rep short and losing the long stretch on the lat.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-single-arm-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-single-arm-row',
    custom: false
  },
  {
    id: 'b171',
    name: 'Kettlebell Spinal Jefferson Curl',
    primaryMuscle: 'back',
    secondaryMuscles: ['upper_legs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Stretch',
    description: 'A slow segmental spinal flexion with a light kettlebell that builds end-range loaded mobility through the back.',
    benefits: [
      'Builds loaded mobility and resilience through full spinal flexion.',
      'Strengthens the lower back across a long, controlled range.',
      'Improves end-range hamstring flexibility under light load.'
    ],
    instructions: [
      'Stand on a sturdy box or bench holding a light kettlebell with both hands in front of your thighs.',
      'Tuck your chin to your chest and begin rolling your spine down one vertebra at a time.',
      'Let the kettlebell travel down toward the floor as the spine flexes through its full range.',
      'Reach the deepest comfortable stretch with knees mostly straight, not locked out.',
      'Reverse the motion by stacking the spine back up from the lower back to the head.',
      'Finish standing tall with the kettlebell in front of the thighs and reset before the next rep.'
    ],
    commonMistakes: [
      'Loading too heavy too soon, which turns a mobility drill into a back strain risk.',
      'Bending the knees deeply to reach the floor instead of moving through the spine.',
      'Rushing the descent instead of moving one segment at a time with control.',
      'Skipping the slow stack-up on the way back, which is where most of the strength gain lives.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-spinal-jefferson-curl.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-spinal-jefferson-curl',
    custom: false
  },
  {
    id: 'b172',
    name: 'Kettlebell Sumo Deadlift',
    primaryMuscle: 'glutes',
    secondaryMuscles: ['abs', 'upper_legs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A wide-stance kettlebell deadlift that loads the glutes, quads, and lower back from a tall, upright torso.',
    benefits: [
      'Builds glute and quad size from a beginner-friendly deadlift position.',
      'Teaches the deadlift pattern with less stress on the lower back.',
      'Trains full-body bracing and grip strength under load.'
    ],
    instructions: [
      'Stand with feet wider than shoulder width and toes turned out about 30 degrees.',
      'Set the kettlebell on the floor between your feet, directly under your hips.',
      'Hinge at the hips, bend the knees, and grip the kettlebell handle with both hands.',
      'Brace your core, lift your chest, and flatten your back into a strong starting position.',
      'Drive through your heels to stand up tall, finishing with squeezed glutes and locked-out hips.',
      'Lower the kettlebell back to the floor under control by hinging the hips back and bending the knees.'
    ],
    commonMistakes: [
      'Letting the knees cave inward on the way up, which loads the joints instead of the glutes.',
      'Rounding the lower back at the bottom of the lift, which strains the spine.',
      'Pulling with the arms instead of driving the floor away with the legs.',
      'Hyperextending the lower back at lockout instead of standing tall with squeezed glutes.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-sumo-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-sumo-deadlift',
    custom: false
  },
  {
    id: 'b173',
    name: 'Kettlebell Swing',
    primaryMuscle: 'glutes',
    secondaryMuscles: ['upper_legs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Hinge',
    description: 'The defining kettlebell exercise — an explosive hip hinge that swings the bell to chest height for power and conditioning.',
    benefits: [
      'Builds explosive hip power from the glutes and hamstrings.',
      'Trains heart-rate-spiking conditioning in short, hard sets.',
      'Strengthens the grip, core, and lower back as a stabilizing chain.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and a kettlebell on the floor about a foot in front of you.',
      'Hinge at the hips, grip the handle with both hands, and tilt the bell back toward you.',
      'Hike the kettlebell back between your legs, keeping your back flat and arms relaxed.',
      'Snap your hips forward explosively to launch the kettlebell up to chest height with straight arms.',
      'Let the bell float briefly at the top, then let it fall back down and load the next hinge.',
      'Catch the bell between your legs with a soft hinge and immediately drive into the next rep.'
    ],
    commonMistakes: [
      'Squatting the bell up and down instead of hinging the hips back and snapping forward.',
      'Lifting the kettlebell with the arms and shoulders instead of letting the hips do the work.',
      'Rounding the lower back at the bottom, which puts the spine at risk under load.',
      'Hyperextending the lower back at the top of the swing instead of finishing with squeezed glutes.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-swing.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-swing',
    custom: false
  },
  {
    id: 'b174',
    name: 'Kettlebell Thruster',
    primaryMuscle: 'shoulders',
    secondaryMuscles: ['upper_legs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A two-kettlebell front squat into an overhead press that trains the legs, shoulders, and lungs in one combined movement.',
    benefits: [
      'Trains the legs, shoulders, and triceps in one full-body movement.',
      'Builds conditioning and lung capacity faster than isolated lifts.',
      'Develops explosive transfer of leg power into overhead pressing.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and a kettlebell racked at each shoulder.',
      'Brace your core and squat down by pushing your hips back and bending the knees.',
      'Reach a depth where the thighs are parallel to the floor, keeping the chest tall and bells racked.',
      'Drive explosively through your heels to stand back up out of the squat.',
      'Use the leg drive to launch the kettlebells overhead and lock out at the top with arms extended.',
      'Lower the bells back to the rack position and immediately squat into the next rep.'
    ],
    commonMistakes: [
      'Pressing the kettlebells overhead before standing fully upright, which kills the leg drive.',
      'Letting the chest collapse forward at the bottom of the squat, dumping the bells out of the rack.',
      'Letting the knees cave inward at the bottom of the squat, which loads the joints unsafely.',
      'Going too heavy and turning the rep into a clean-and-press instead of a fluid thruster.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-thruster.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-thruster',
    custom: false
  },
  {
    id: 'b175',
    name: 'Kettlebell Windmill',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Rotation',
    description: 'An overhead kettlebell hinge that trains shoulder stability, oblique strength, and hip mobility in one demanding move.',
    benefits: [
      'Builds shoulder stability and overhead control under load.',
      'Strengthens the obliques and trains hip mobility in one move.',
      'Develops body control and coordination for sport and athletic prep.'
    ],
    instructions: [
      'Stand with feet wider than shoulder width and press a kettlebell straight overhead with one arm.',
      'Turn your front foot out about 45 degrees and lock your eyes on the kettlebell overhead.',
      'Push your hips toward the side of the locked-out arm while keeping the bell straight up.',
      'Hinge sideways and reach the lower hand down the inside of the front leg toward the floor.',
      'Pause at the deepest position with the bell stacked over the shoulder and the back leg straight.',
      'Reverse the hinge by driving the hips back under the kettlebell to return to standing.'
    ],
    commonMistakes: [
      'Letting the overhead arm drift forward or back instead of staying stacked over the shoulder.',
      'Bending the knee of the back leg, which collapses the stretch through the obliques and hamstrings.',
      'Loading too heavy too soon, which compromises shoulder stability under the bell.',
      'Looking forward instead of tracking the kettlebell, which often causes the arm to drift.'
    ],
    mediaUrl: 'https://media.larofit.com/kettlebell-windmill.mp4',
    exerciseUrl: 'https://movekit.com/exercises/kettlebell-windmill',
    custom: false
  },
  {
    id: 'b176',
    name: 'Landmine T Bar Rows',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A chest-supported feel landmine row that builds the lats and mid-back through a heavy, controlled horizontal pull.',
    benefits: [
      'Builds heavy lat and mid-back size with a stable, fixed bar path.',
      'Loads the back hard while sparing the lower back compared to a bent-over row.',
      'Trains the horizontal pull pattern with progressive overload potential.'
    ],
    instructions: [
      'Anchor a barbell in a landmine attachment and load plates on the open end.',
      'Straddle the bar near the loaded end and place a V-grip handle under the bar behind the plates.',
      'Hinge at the hips with a flat back and grip the handle with both hands, arms extended.',
      'Brace your core and row the handle up toward your lower chest, leading with the elbows.',
      'Squeeze your shoulder blades together at the top with the handle just below the sternum.',
      'Lower the bar slowly back to the start, fighting the descent through the full range.'
    ],
    commonMistakes: [
      'Standing more upright as the set goes on, which turns the row into a partial shrug.',
      'Letting the lower back round under load, which puts the spine at risk on heavy sets.',
      'Yanking the bar up with momentum instead of pulling cleanly with the back.',
      'Cutting the bottom of the rep short and skipping the full lat stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/landmine-t-bar-rows.mp4',
    exerciseUrl: 'https://movekit.com/exercises/landmine-t-bar-rows',
    custom: false
  },
  {
    id: 'b177',
    name: 'Walking Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Lunge',
    description: 'A bodyweight walking lunge that builds the glutes and quads one leg at a time while training balance and gait control.',
    benefits: [
      'Builds glute and quad size one leg at a time for balanced lower-body strength.',
      'Trains single-leg balance and stride control that carries over to sport.',
      'Requires no equipment, making it ideal for home and travel programming.'
    ],
    instructions: [
      'Stand tall with feet hip-width apart, arms relaxed at your sides or hands on your hips.',
      'Take a long step forward with your right foot and plant it flat on the floor.',
      'Lower your hips straight down until both knees bend to about 90 degrees.',
      'Drive through the heel of your front foot to push back up to standing.',
      'Bring your back leg through and step it forward into the next lunge on the other side.',
      'Continue alternating sides, walking forward across the floor for the full set.'
    ],
    commonMistakes: [
      'Letting the front knee cave inward, which strains the joint and shifts work off the glutes.',
      'Stepping too short, which turns the lunge into a quad-only squat without much glute work.',
      'Letting the torso fall forward over the front knee instead of staying tall.',
      'Pushing off the toes of the front foot instead of driving through the heel.'
    ],
    mediaUrl: 'https://media.larofit.com/walking-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/lunge-walking',
    custom: false
  },
  {
    id: 'b178',
    name: 'Machine 45 Degree Back Extension',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes', 'upper_legs'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A 45 degree hyperextension that strengthens the lower back, glutes, and hamstrings through a clean hip hinge.',
    benefits: [
      'Strengthens the lower back, glutes, and hamstrings as a connected chain.',
      'Reinforces the hip-hinge pattern with bodyweight load.',
      'Builds back resilience that protects deadlifts and rowing variations.'
    ],
    instructions: [
      'Set the pad height so the top edge sits just below your hip crease and step into the machine.',
      'Plant your feet firmly on the foot platform and cross your arms over your chest.',
      'Brace your core and hold a straight line from head to heels at the starting position.',
      'Hinge forward at the hips, lowering your torso toward the floor with a flat back.',
      'Stop when you feel a stretch in the hamstrings and your torso is roughly parallel to the floor.',
      'Drive your hips into the pad and squeeze your glutes to return to the straight starting line.'
    ],
    commonMistakes: [
      'Rounding the lower back at the bottom instead of hinging cleanly at the hips.',
      'Hyperextending the lower back at the top instead of stopping at a straight line.',
      'Adding weight too soon, which compromises the hinge and overloads the lower back.',
      'Rushing the descent instead of controlling the lowering phase for the full range.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-45-degree-back-extension.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-45-degree-back-extension',
    custom: false
  },
  {
    id: 'b179',
    name: 'Machine Cable V Bar Push Downs',
    primaryMuscle: 'triceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A V-bar cable pushdown that isolates all three heads of the triceps through a clean, controlled extension.',
    benefits: [
      'Builds triceps size across all three heads with a clean isolation pattern.',
      'Strengthens elbow extension that supports every pressing variation.',
      'Adds high-rep volume to arm work without joint stress.'
    ],
    instructions: [
      'Attach a V-bar to a high cable pulley and stand facing the machine with feet hip-width apart.',
      'Grip the V-bar with both hands, palms angled inward and slightly down.',
      'Tuck your elbows in close to your sides and pull the bar down to chest height as the start.',
      'Brace your core and press the bar down by extending your elbows, keeping them pinned.',
      'Lock the arms out fully at the bottom with a brief squeeze of the triceps.',
      'Let the bar travel slowly back up to chest height under control before the next rep.'
    ],
    commonMistakes: [
      'Letting the elbows drift forward and away from the ribs, which turns it into a press.',
      'Leaning the torso heavily over the bar to use bodyweight instead of triceps strength.',
      'Cutting the lockout short instead of fully extending the arms at the bottom.',
      'Snapping the bar back to the start and skipping the controlled return.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-cable-v-bar-push-downs.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-cable-v-bar-push-downs',
    custom: false
  },
  {
    id: 'b180',
    name: 'Machine Chest Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A seated machine chest press that builds the chest and triceps through a guided, beginner-friendly press path.',
    benefits: [
      'Builds chest and triceps size with a stable, beginner-friendly bar path.',
      'Allows safe high-volume work close to failure without a spotter.',
      'Teaches the horizontal press pattern before progressing to barbells and dumbbells.'
    ],
    instructions: [
      'Adjust the seat height so the handles line up with the middle of your chest.',
      'Sit with your back flat against the pad and your feet planted firmly on the floor.',
      'Grip the handles with a neutral or pronated grip, depending on the machine setup.',
      'Brace your core and press the handles forward until your arms are nearly locked out.',
      'Pause briefly at the top with a chest squeeze, then bring the handles back under control.',
      'Stop when the handles reach a deep stretch at chest height, then press for the next rep.'
    ],
    commonMistakes: [
      'Lifting the back off the pad to leverage the press, which kills the chest stretch.',
      'Locking the elbows out aggressively at the top instead of stopping just short.',
      'Pressing with the shoulders shrugged up to the ears, which stresses the joint.',
      'Cutting the bottom of the rep short and missing the full chest stretch.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-chest-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-chest-press',
    custom: false
  },
  {
    id: 'b181',
    name: 'Machine Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A seated, loaded crunch that isolates the upper abs through a fixed flexion path — the gym\'s progressive answer to bodyweight crunches.',
    benefits: [
      'Builds upper-ab thickness with progressive, measurable load.',
      'Isolates the abs in a fixed path that\'s easy for beginners to feel.',
      'Allows real overload without straining the lower back or hip flexors.'
    ],
    instructions: [
      'Sit on the machine and adjust the seat so the chest pad sits across your upper chest, not your throat.',
      'Hook your hands or arms into the handles and plant your feet firmly on the floor or foot pads.',
      'Brace your core and curl your ribcage down toward your hips, keeping the motion in the abs.',
      'Pause briefly at the bottom of the curl, squeezing the abs hard before reversing the motion.',
      'Return slowly to the start over 2 to 3 seconds, keeping tension on the abs the entire way up.',
      'Repeat for 10 to 15 controlled reps, never letting the weight stack slam back to rest between reps.'
    ],
    commonMistakes: [
      'Pulling with the arms or shoulders instead of curling with the abs, which removes the load from the target muscle.',
      'Using a heavy stack and a tiny range of motion, which trains momentum rather than the abs.',
      'Letting the weight stack snap back at the top, killing the slow lowering where most growth tension lives.',
      'Setting the chest pad too high on the throat, which makes the lifter brace with the neck instead of the core.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-crunch.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-crunch',
    custom: false
  },
  {
    id: 'b182',
    name: 'Machine Dips',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A seated, assisted dip pattern that trains the chest and triceps without bodyweight prerequisites — the bridge to parallel bar dips.',
    benefits: [
      'Builds chest and triceps strength with scalable, dialable load.',
      'Creates a safe progression path toward unassisted parallel bar dips.',
      'Trains vertical pressing without the wrist demand of barbell work.'
    ],
    instructions: [
      'Set the seat height so your shoulders sit just above the handles when your arms are fully extended down.',
      'Grip the handles with palms facing each other and press your back firmly into the pad.',
      'Push the handles down and slightly forward by extending the elbows and engaging the chest and triceps.',
      'Lock out at the bottom without slamming the joints, holding the squeeze for a beat.',
      'Let the handles return slowly over 2 to 3 seconds until the elbows reach about 90 degrees.',
      'Reset your posture and repeat for 8 to 12 reps, keeping the chest tall the whole set.'
    ],
    commonMistakes: [
      'Letting the elbows flare wide, which pulls tension off the triceps and stresses the front shoulders.',
      'Setting the seat too high so the elbows can\'t reach a full stretch, shortening the working range.',
      'Letting the stack drop fast at the top of each rep, removing the slow lowering phase.',
      'Hunching the shoulders forward under load instead of staying tall and proud through the chest.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-dips.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-dips',
    custom: false
  },
  {
    id: 'b183',
    name: 'Cable Rope Face Pulls',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A high-cable rope pull to the face that trains the rear delts and upper back — the go-to fix for forward-rolled shoulders.',
    benefits: [
      'Strengthens the rear delts and upper back for healthier, more durable shoulders.',
      'Counteracts forward shoulder posture from desk work and heavy pressing.',
      'Easy to load progressively without straining the joints or low back.'
    ],
    instructions: [
      'Set the cable to slightly above eye level and attach a rope handle at the end of the cable.',
      'Grip the rope with palms facing inward and step back until the cable has tension in the start position.',
      'Plant your feet shoulder-width apart and brace your core, leaning back only slightly to balance the load.',
      'Pull the rope toward your face, leading with the elbows and keeping them high and wide.',
      'Squeeze the rear shoulders and upper back hard at the end of the pull, ears between the rope ends.',
      'Return slowly to the start over 2 to 3 seconds, keeping the elbows up the entire way back.'
    ],
    commonMistakes: [
      'Dropping the elbows low so the lift becomes a row, which loses the rear-delt isolation.',
      'Going too heavy, forcing the body to lean and yank instead of pulling cleanly with the upper back.',
      'Cutting the range short and never bringing the rope to the face, which limits the muscle stretch.',
      'Letting the rope rip back forward and skipping the slow return, where most of the rear-delt work happens.'
    ],
    mediaUrl: 'https://media.larofit.com/cable-rope-face-pulls.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-face-pulls',
    custom: false
  },
  {
    id: 'b184',
    name: 'Machine Plate Loaded Front Military Press',
    primaryMuscle: 'shoulders',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A plate-loaded seated press that trains the front delts through a fixed overhead path — a stable alternative to the standing barbell press.',
    benefits: [
      'Builds front-shoulder strength and size with reduced balance demand.',
      'Offers a safer overhead pressing option for lifters with low-back issues.',
      'Allows heavier pressing volume thanks to the fixed bar path.'
    ],
    instructions: [
      'Set the seat so the handles sit just above shoulder height when your arms are bent and ready to press.',
      'Grip both handles with palms facing forward and press your back firmly into the pad.',
      'Brace your core and press the handles straight up overhead, exhaling as you drive.',
      'Lock out softly at the top with the arms extended, keeping the shoulders down away from the ears.',
      'Lower the handles slowly over 2 to 3 seconds until they return to shoulder level.',
      'Reset the breath and repeat for 8 to 12 reps, keeping the chest proud the whole set.'
    ],
    commonMistakes: [
      'Arching the lower back hard off the pad to use the chest, which strains the spine and loses the shoulder focus.',
      'Letting the handles drift forward instead of pressing straight up, which puts unnecessary load on the front shoulders.',
      'Locking the elbows out hard at the top, slamming the joint instead of stopping with control.',
      'Letting the weight drop fast on the way down and skipping the slow lowering portion of every rep.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-plate-loaded-front-military-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-front-military-press',
    custom: false
  },
  {
    id: 'b185',
    name: 'Machine Leg Extension',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated knee-extension machine that isolates the quads through a fixed range — the most direct quad-builder in the gym.',
    benefits: [
      'Builds quad size with the most direct knee-extension stimulus in the gym.',
      'Isolates the quads cleanly without recruiting the glutes or hamstrings.',
      'Allows safe, scalable loading for both beginners and advanced lifters.'
    ],
    instructions: [
      'Sit on the machine and adjust the back pad so your knees line up with the machine\'s pivot point.',
      'Place your shins behind the roller pad with the pad sitting just above the ankle joint, not on the foot.',
      'Grip the side handles, brace your core, and press your back firmly into the pad.',
      'Extend your knees smoothly until the legs are straight, squeezing the quads hard at the top.',
      'Hold the lockout for a beat, keeping the toes pulled up toward the shins for max quad engagement.',
      'Lower the pad slowly over 2 to 3 seconds back to the start, never letting the stack slam down.'
    ],
    commonMistakes: [
      'Slamming the legs straight with momentum, then dropping the weight fast, which removes most of the loading.',
      'Setting the seat wrong so the knee pivot doesn\'t match the machine, which puts shear stress on the joint.',
      'Lifting the hips off the seat to muscle the weight up, which shifts work away from the quads.',
      'Cutting the range short on the bottom half, which trains only the easy top portion of the lift.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-leg-extension.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-leg-extension',
    custom: false
  },
  {
    id: 'b186',
    name: 'Machine Leg Press',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Squat',
    description: 'A seated leg press that loads the quads and glutes through a guided press — the heavy-load alternative to the back squat.',
    benefits: [
      'Builds quad and glute strength with heavy, scalable load.',
      'Removes spinal compression while still loading the legs hard.',
      'Provides a safe leg-day option for lifters returning from back issues.'
    ],
    instructions: [
      'Sit in the machine with your back fully against the pad and feet shoulder-width on the platform.',
      'Release the safety handles and grip the side bars to keep your torso and hips locked in place.',
      'Lower the platform slowly toward your chest over 2 to 3 seconds until your knees reach about 90 degrees.',
      'Keep your lower back flat against the pad and your knees tracking in line with your toes.',
      'Drive the platform back up by pressing through the heels and the middle of the foot.',
      'Stop just short of locking the knees at the top, then control the next rep down without resting the stack.'
    ],
    commonMistakes: [
      'Letting the lower back round and lift off the pad at the bottom, which puts the spine at risk.',
      'Locking the knees out hard at the top of every rep, slamming the joint under heavy load.',
      'Letting the knees cave inward on the press, which strains the knees and loses force production.',
      'Cutting the range short and pressing only the top few inches, which trains a fraction of the leg.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-leg-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-leg-press',
    custom: false
  },
  {
    id: 'b187',
    name: 'Machine Neutral Row',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A chest-supported neutral-grip row that trains the lats and mid-back through a fixed horizontal pull — easy to learn, hard to cheat.',
    benefits: [
      'Builds the lats and mid-back with no lower-back fatigue.',
      'Wrist- and shoulder-friendly thanks to the neutral grip position.',
      'Easy to load progressively without compromising form.'
    ],
    instructions: [
      'Set the chest pad so it sits across your upper chest with your shoulders just above the handle position.',
      'Grip both neutral handles with palms facing each other and let your arms hang fully extended.',
      'Brace your core and press your chest firmly into the pad to lock your torso in place.',
      'Pull the handles toward your ribs by driving the elbows back and squeezing the shoulder blades together.',
      'Pause at the top of the pull with the elbows behind the body, feeling the mid-back contract hard.',
      'Lower the handles slowly over 2 to 3 seconds back to a full stretch, then repeat without losing chest contact.'
    ],
    commonMistakes: [
      'Pulling with the biceps instead of leading with the elbows, which steals work from the back.',
      'Letting the chest peel off the pad to use body english, which defeats the support and overloads the low back.',
      'Cutting the lowering short and dropping the handles fast, missing most of the muscle-building tension.',
      'Shrugging the shoulders up at the top of the row, swapping mid-back work for trap dominance.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-neutral-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-neutral-row',
    custom: false
  },
  {
    id: 'b188',
    name: 'Machine Pec Fly',
    primaryMuscle: 'chest',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated chest fly machine that isolates the pecs through an arc of motion — the cleanest chest-only stimulus in the gym.',
    benefits: [
      'Isolates the chest more directly than any pressing movement.',
      'Builds chest size with low joint stress and high mind-muscle feedback.',
      'Easy to load progressively without shoulder or wrist strain.'
    ],
    instructions: [
      'Adjust the seat so the handles sit at chest height with your elbows roughly in line with your shoulders.',
      'Grip both handles with a slight bend in the elbows and press your back firmly into the pad.',
      'Brace your core and pull your shoulder blades back and down to set a stable chest position.',
      'Sweep the handles together in a wide arc by squeezing the chest, keeping the elbow angle fixed.',
      'Pause at the middle when the handles meet, holding a hard chest squeeze for a full beat.',
      'Let the handles open back out slowly over 2 to 3 seconds until you feel a controlled chest stretch.'
    ],
    commonMistakes: [
      'Bending the elbows mid-rep so the lift becomes a press, which removes the chest isolation.',
      'Letting the shoulders roll forward at the stretch position, which strains the front shoulders.',
      'Slamming the handles together with momentum instead of squeezing through the contraction.',
      'Cutting the stretch short and never letting the arms open fully, which trains a tiny portion of the lift.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-pec-fly.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-pec-fly',
    custom: false
  },
  {
    id: 'b189',
    name: 'Machine Plate Loaded Leg Extension',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A plate-loaded seated leg extension that isolates the quads — the heavier-feeling, gym-staple cousin of the selectorized version.',
    benefits: [
      'Allows heavier quad isolation than most selectorized stacks.',
      'Builds quad mass with direct, single-joint loading.',
      'Easy to micro-load with small plates for progressive overload.'
    ],
    instructions: [
      'Sit in the machine and align your knees with the machine\'s pivot point by adjusting the back pad.',
      'Hook your shins behind the roller pad with the pad just above the ankle joint, not on the foot.',
      'Grip the side handles, brace your core, and press your back firmly into the seat.',
      'Extend the knees smoothly until the legs are straight, driving the lever arm up with the quads.',
      'Squeeze hard at the top with toes pulled toward the shins, holding the contraction for a beat.',
      'Lower the lever slowly over 2 to 3 seconds back to the start, keeping tension on the quads throughout.'
    ],
    commonMistakes: [
      'Loading too many plates and dropping the lever fast, which trains momentum instead of the quads.',
      'Cutting the range short on either end, which trains only the easy middle of the motion.',
      'Lifting the hips off the seat to muscle the lever up, shifting work away from the target.',
      'Hyperextending the knees at the top under heavy load, slamming the joint instead of stopping clean.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-plate-loaded-leg-extension.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-plate-loaded-leg-extension',
    custom: false
  },
  {
    id: 'b190',
    name: 'Machine Plate Loaded T Bar Row',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A plate-loaded T-bar row that builds the lats and mid-back through a heavy hip-hinge pull — the gym\'s classic mass-builder.',
    benefits: [
      'Builds serious lat and mid-back mass with heavy free-weight loading.',
      'Trains the hinge-and-row pattern that carries over to deadlifts.',
      'Allows real progressive overload week over week.'
    ],
    instructions: [
      'Load plates onto the T-bar\'s loading sleeve and step astride the bar with feet shoulder-width apart.',
      'Hinge at the hips with a flat back and a slight knee bend until you can grip the handles.',
      'Brace your core hard and squeeze your shoulder blades back and down to lock the torso position.',
      'Pull the bar up toward your lower chest by driving the elbows back, leading with the upper back.',
      'Pause briefly at the top of the pull, squeezing the lats and mid-back hard before reversing.',
      'Lower the bar slowly over 2 to 3 seconds back to the start, keeping the hinge position locked the whole rep.'
    ],
    commonMistakes: [
      'Rounding the lower back to lift heavier, which puts serious risk on the spine.',
      'Standing too upright and turning the lift into a shrug instead of a row.',
      'Yanking the bar with body english instead of pulling cleanly with the back.',
      'Cutting the lowering short and letting the bar drop, missing the muscle-building portion of every rep.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-plate-loaded-t-bar-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-plate-loaded-t-bar-row',
    custom: false
  },
  {
    id: 'b191',
    name: 'Machine Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A seated machine pulldown that trains the lats and biceps through a fixed vertical pull — the universal gym back-builder.',
    benefits: [
      'Builds lat width and back thickness with a beginner-friendly pattern.',
      'Strengthens the vertical pull that transfers directly to pull-ups.',
      'Trains the lats and biceps through a clean, full range of motion.'
    ],
    instructions: [
      'Sit on the machine and lock your thighs under the pad with feet flat on the floor.',
      'Grip the bar slightly wider than shoulder width with palms facing forward.',
      'Lean your torso back about 10 to 15 degrees and pull your shoulder blades down to set the lats.',
      'Pull the bar down to the upper chest by driving the elbows down and back, not by yanking with the arms.',
      'Pause briefly at the bottom with the bar at your collarbones, squeezing the lats hard.',
      'Let the bar travel slowly back up over 2 to 3 seconds until your arms are fully extended overhead.'
    ],
    commonMistakes: [
      'Pulling with the biceps and forearms instead of leading with the elbows and back.',
      'Leaning too far back so the lift turns into a row instead of a vertical pull.',
      'Cutting the top range short and never letting the arms fully extend, which removes the lat stretch.',
      'Letting the stack snap back up at the top, killing the slow return where most muscle growth happens.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-pulldown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-pulldown',
    custom: false
  },
  {
    id: 'b192',
    name: 'Machine Seated Cable Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A seated cable row that trains the lats, mid-back, and biceps through a clean horizontal pull — the benchmark row in any gym.',
    benefits: [
      'Builds the lats, mid-back, and biceps with constant cable tension.',
      'Improves posture by training the muscles that pull the shoulders back.',
      'Easy to scale for beginners and easy to load for advanced lifters.'
    ],
    instructions: [
      'Sit on the machine and brace your feet against the platform with your knees slightly bent.',
      'Grip the handle, hinge slightly forward, and let the cable pull your arms fully extended.',
      'Sit tall with a flat back and pull your shoulder blades down and back to set the start position.',
      'Pull the handle to your lower chest or upper stomach by driving the elbows back behind the body.',
      'Squeeze the mid-back hard at the top of the pull, pausing for a full beat before reversing.',
      'Let the handle travel slowly back forward over 2 to 3 seconds, fighting the cable the whole way.'
    ],
    commonMistakes: [
      'Rocking the torso back and forth to use momentum, which trains the low back instead of the upper back.',
      'Pulling the handle to the throat instead of the lower chest, which loses the lat engagement.',
      'Shrugging the shoulders up at the top, swapping mid-back work for trap dominance.',
      'Letting the cable rip the arms forward fast and skipping the slow return portion of every rep.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-seated-cable-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-seated-cable-row',
    custom: false
  },
  {
    id: 'b193',
    name: 'Machine Underhand Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A machine row with an underhand grip that hits the lower lats and biceps hard — the supinated take on the chest-supported row.',
    benefits: [
      'Builds the lower lats with a strong, biceps-friendly pulling line.',
      'Removes lower-back fatigue thanks to the chest-supported position.',
      'Trains the lats and biceps together for arm-and-back content efficiency.'
    ],
    instructions: [
      'Set the chest pad height so it sits across your upper chest with your shoulders just above the handles.',
      'Grip the underhand handles with palms facing up and let your arms extend fully toward the floor.',
      'Brace your core and press your chest firmly into the pad to lock the torso in place.',
      'Pull the handles up toward your lower ribs by driving the elbows back and down close to the body.',
      'Pause at the top with the elbows behind you, squeezing the lats and biceps for a full beat.',
      'Lower the handles slowly over 2 to 3 seconds back to a full stretch before the next rep.'
    ],
    commonMistakes: [
      'Curling the arms up with the biceps instead of rowing with the elbows leading the motion.',
      'Letting the chest peel off the pad to cheat the weight up, which loads the low back.',
      'Flaring the elbows wide and turning the row into an overhand-style pull, losing the underhand bias.',
      'Cutting the stretch short and never letting the arms fully extend at the bottom of each rep.'
    ],
    mediaUrl: 'https://media.larofit.com/machine-underhand-row.mp4',
    exerciseUrl: 'https://movekit.com/exercises/machine-underhand-row',
    custom: false
  },
  {
    id: 'b194',
    name: 'Mountain Climber',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Plyometric',
    description: 'A high-tempo plank-position knee drive that trains the core and spikes the heart rate — the universal HIIT finisher.',
    benefits: [
      'Trains the core under load while spiking the heart rate at the same time.',
      'Builds full-body conditioning with zero equipment or space requirements.',
      'Reinforces a strong plank shape under fatigue and movement.'
    ],
    instructions: [
      'Set up in a high-plank position with your hands directly under your shoulders and arms locked out.',
      'Brace your core hard and squeeze your glutes to keep your hips level with your shoulders.',
      'Drive your right knee toward your chest, keeping the foot off the floor at the front of the motion.',
      'Snap the right leg back as you drive the left knee forward in a smooth, alternating rhythm.',
      'Keep the hips low and the shoulders stacked over the wrists the entire set.',
      'Continue for 20 to 40 seconds at a controlled pace, prioritizing form over raw speed.'
    ],
    commonMistakes: [
      'Letting the hips bounce up and down, which removes the core demand and breaks the plank shape.',
      'Sagging the lower back as the legs drive, which strains the spine instead of loading the core.',
      'Putting the hands too far in front of the shoulders, which collapses the plank and stresses the wrists.',
      'Going too fast and losing range of motion, with knees barely moving instead of driving toward the chest.'
    ],
    mediaUrl: 'https://media.larofit.com/mountain-climber.mp4',
    exerciseUrl: 'https://movekit.com/exercises/mountain-climber',
    custom: false
  },
  {
    id: 'b195',
    name: 'Narrow Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A close-grip lat pulldown that bias-loads the lower lats and biceps — the narrow-grip take on the classic vertical pull.',
    benefits: [
      'Bias-loads the lower lats with a narrow, biceps-friendly grip.',
      'Trains the vertical pull through a longer range than the wide-grip version.',
      'Adds variation to pulldown programming for balanced lat development.'
    ],
    instructions: [
      'Attach a close-grip V-handle to the cable and sit on the machine with your thighs locked under the pad.',
      'Grip the handle with palms facing each other and let your arms extend fully overhead.',
      'Lean your torso back about 10 to 15 degrees and pull your shoulder blades down to set the lats.',
      'Pull the handle down to your upper chest by driving the elbows down close to the sides of your body.',
      'Pause briefly at the bottom with the handle at your collarbones, squeezing the lower lats hard.',
      'Let the handle travel slowly back overhead over 2 to 3 seconds until your arms are fully extended.'
    ],
    commonMistakes: [
      'Pulling with the biceps and forearms instead of leading with the elbows and back.',
      'Leaning too far back so the lift turns into a row instead of a vertical pull.',
      'Cutting the top range short and never letting the arms fully extend overhead.',
      'Letting the stack snap up at the top, removing the slow return portion of each rep.'
    ],
    mediaUrl: 'https://media.larofit.com/narrow-pulldown.mp4',
    exerciseUrl: 'https://movekit.com/exercises/narrow-pulldown',
    custom: false
  },
  {
    id: 'b196',
    name: 'Parallel Bar Dips',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A bodyweight dip on parallel bars that builds the chest and triceps — one of the most demanding pure-bodyweight upper-body lifts.',
    benefits: [
      'Builds serious chest, triceps, and front-shoulder strength with bodyweight only.',
      'Trains a vertical press pattern that complements overhead and bench work.',
      'Develops the body-control needed for advanced calisthenics.'
    ],
    instructions: [
      'Grip the parallel bars with palms facing each other and press up to a strong, locked-out start position.',
      'Brace your core, squeeze the glutes, and cross the ankles to keep the body in a tight line.',
      'Lean your torso slightly forward to bias the chest, or stay upright to bias the triceps.',
      'Lower yourself slowly over 2 to 3 seconds until your shoulders drop just below your elbows.',
      'Pause briefly at the bottom with the chest open and the body still controlled.',
      'Press back up to full lockout by driving through the chest and triceps in one smooth motion.'
    ],
    commonMistakes: [
      'Letting the shoulders shrug up to the ears at the bottom, which strains the front shoulders.',
      'Cutting the depth short and only doing the easy top half of the rep.',
      'Swinging the legs to use momentum, which removes the controlled loading the dip is meant to deliver.',
      'Flaring the elbows wide on the press, which puts unnecessary strain on the joint.'
    ],
    mediaUrl: 'https://media.larofit.com/parallel-bar-dips.mp4',
    exerciseUrl: 'https://movekit.com/exercises/parralel-bar-dips',
    custom: false
  },
  {
    id: 'b197',
    name: 'Plate Forward Lunge',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Lunge',
    description: 'A forward lunge holding a weight plate at the chest that loads the quads and glutes through a single-leg step — the gym-floor classic.',
    benefits: [
      'Builds quad and glute strength with a single-leg pattern that fixes side imbalances.',
      'Trains the core to brace under a front-loaded position.',
      'Easy to scale up by simply choosing a heavier plate.'
    ],
    instructions: [
      'Stand tall holding a weight plate horizontally against your upper chest with both hands.',
      'Brace your core, pull your shoulders back, and set your feet hip-width apart.',
      'Step one foot forward into a long stride, lowering your back knee toward the floor.',
      'Stop when your front thigh is roughly parallel to the floor and your back knee hovers above it.',
      'Drive through the heel of your front foot to push back to the standing start position.',
      'Repeat on the opposite leg, alternating sides for the full set with the plate locked at the chest.'
    ],
    commonMistakes: [
      'Letting the front knee cave inward on the step, which strains the joint and reduces force production.',
      'Taking a stride that\'s too short, which puts the front knee far past the toes and overloads it.',
      'Leaning the torso forward over the plate instead of staying upright through the descent.',
      'Pushing off the back foot to stand up, which steals work from the front leg the lunge is meant to load.'
    ],
    mediaUrl: 'https://media.larofit.com/plate-forward-lunge.mp4',
    exerciseUrl: 'https://movekit.com/exercises/plate-forward-lunge',
    custom: false
  },
  {
    id: 'b198',
    name: 'Pull Ups',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'The classic bodyweight vertical pull that builds the lats, biceps, and upper back — the benchmark for upper-body pulling strength.',
    benefits: [
      'Builds the lats, biceps, and upper back with one of the highest-yield bodyweight lifts.',
      'Develops the relative strength needed for advanced calisthenics and athletic work.',
      'Reinforces shoulder health by training the back muscles that stabilize the joint.'
    ],
    instructions: [
      'Reach up and grip a fixed pull-up bar with palms facing forward, hands slightly wider than shoulders.',
      'Hang from the bar with arms fully extended, then engage the lats by pulling the shoulder blades down.',
      'Brace your core, squeeze the glutes, and cross the ankles to keep the body in a tight line.',
      'Pull yourself up by driving the elbows down toward the ribs until your chin clears the bar.',
      'Pause briefly at the top with the chin over the bar, squeezing the lats and upper back.',
      'Lower yourself slowly over 2 to 3 seconds back to a full dead hang before the next rep.'
    ],
    commonMistakes: [
      'Kipping the legs to swing up instead of pulling cleanly with the back and arms.',
      'Cutting the bottom range short and never reaching a full dead hang, which trains a fraction of the lift.',
      'Leading with the chin instead of the chest, which puts strain on the neck.',
      'Dropping fast at the top and skipping the slow descent, where most pull-up strength is built.'
    ],
    mediaUrl: 'https://media.larofit.com/pull-ups.mp4',
    exerciseUrl: 'https://movekit.com/exercises/pull-ups',
    custom: false
  },
  {
    id: 'b199',
    name: 'Push Up',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'The most foundational bodyweight push lift — trains the chest, triceps, and front shoulders with a single, scalable pattern.',
    benefits: [
      'Builds the chest, triceps, and front shoulders without any equipment.',
      'Reinforces a strong full-body plank shape under pressing load.',
      'Scales infinitely from incline beginner versions to advanced weighted variations.'
    ],
    instructions: [
      'Set up in a high-plank position with your hands slightly wider than shoulder width and arms locked.',
      'Brace your core, squeeze the glutes, and keep your body in a straight line from head to heels.',
      'Lower your chest slowly toward the floor over 2 to 3 seconds, keeping the elbows at about 45 degrees.',
      'Stop when your chest hovers just above the floor, holding the bottom briefly with full body tension.',
      'Press back up by driving the floor away through the palms until the arms reach full extension.',
      'Reset your breath and repeat for the full set, keeping the body line tight on every rep.'
    ],
    commonMistakes: [
      'Letting the hips sag toward the floor, which removes the core demand and strains the lower back.',
      'Letting the elbows flare to 90 degrees, which strains the front shoulders and reduces chest engagement.',
      'Cutting the depth short and only pressing the top half of the rep instead of touching the chest down.',
      'Letting the head poke forward instead of keeping the neck in line with the spine.'
    ],
    mediaUrl: 'https://media.larofit.com/push-up.mp4',
    exerciseUrl: 'https://movekit.com/exercises/push-up',
    custom: false
  },
  {
    id: 'b200',
    name: 'Single Legged Romanian Deadlifts',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A bodyweight single-leg hinge that loads the glutes and hamstrings while training balance — the single-leg answer to the RDL.',
    benefits: [
      'Builds glute and hamstring strength while exposing side-to-side imbalances.',
      'Trains the single-leg hinge pattern that carries over to running and jumping.',
      'Improves balance and ankle stability under load.'
    ],
    instructions: [
      'Stand tall on one leg with a slight bend in the standing knee and arms hanging at your sides.',
      'Brace your core and pull your shoulder blades down to set a tall, stable torso position.',
      'Hinge at the hip by pushing the standing-leg hip back, letting the back leg float up behind you.',
      'Keep the back leg, torso, and head in one straight line as you lower toward the floor.',
      'Stop when you feel a deep stretch in the standing leg\'s hamstring, with the torso roughly parallel to the floor.',
      'Drive the standing-leg hip forward to return to the start position, squeezing the glute at the top.'
    ],
    commonMistakes: [
      'Rounding the lower back as the torso lowers, which puts the spine at risk under load.',
      'Twisting the hips open as the back leg lifts, which loses the hinge alignment and balance.',
      'Bending too much at the standing knee so the lift becomes a single-leg squat instead of a hinge.',
      'Bouncing back up at the bottom instead of controlling the descent and the reversal.'
    ],
    mediaUrl: 'https://media.larofit.com/single-legged-romanian-deadlifts.mp4',
    exerciseUrl: 'https://movekit.com/exercises/single-legged-romanian-deadlifts',
    custom: false
  },
  {
    id: 'b201',
    name: 'Smith Machine Close Grip Bench Press',
    primaryMuscle: 'triceps',
    secondaryMuscles: ['chest'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'A close-grip bench press on the Smith machine that bias-loads the triceps — the guided take on the classic triceps mass-builder.',
    benefits: [
      'Builds triceps mass with the safety of a guided bar path.',
      'Allows lifters to push to failure without a spotter present.',
      'Reinforces a strong elbows-tucked pressing pattern that transfers to free-weight benching.'
    ],
    instructions: [
      'Set the bench on the Smith machine so the bar lines up directly over your lower chest when you lie down.',
      'Lie on the bench, plant your feet flat on the floor, and grip the bar with hands shoulder-width apart.',
      'Pull your shoulder blades back and down into the bench to create a stable pressing platform.',
      'Unrack the bar by rotating the wrists, then lower it slowly to your lower chest with elbows tucked close.',
      'Pause briefly at the bottom with the bar touching the chest and the elbows still tight to the sides.',
      'Press the bar back up to full lockout by driving through the triceps and chest in one smooth motion.'
    ],
    commonMistakes: [
      'Setting the grip too narrow so the wrists collapse inward under load, which strains the joint.',
      'Letting the elbows flare wide, which removes the triceps bias and stresses the front shoulders.',
      'Bouncing the bar off the chest to use momentum instead of a controlled touch and press.',
      'Forgetting to rotate the wrists to rack the bar at the end of the set, dropping it onto the safeties.'
    ],
    mediaUrl: 'https://media.larofit.com/smith-machine-close-grip-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/smith-machine-close-grip-bench-press',
    custom: false
  },
  {
    id: 'b202',
    name: 'Smith Machine Incline Bench Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['shoulders', 'triceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Push',
    description: 'An incline bench press on the Smith machine that bias-loads the upper chest — the guided take on the classic incline press.',
    benefits: [
      'Builds the upper chest with a fixed bar path that\'s easy to load progressively.',
      'Allows safe failure-training for lifters working out alone.',
      'Reinforces a strong upper-body pressing pattern with reduced balance demand.'
    ],
    instructions: [
      'Set the incline bench under the Smith bar at about 30 to 45 degrees, with the bar over your upper chest.',
      'Lie back on the bench, plant your feet flat on the floor, and grip the bar slightly wider than shoulders.',
      'Pull your shoulder blades back and down into the bench to set a stable pressing position.',
      'Unrack the bar by rotating the wrists, then lower it slowly to your upper chest with elbows at about 60 degrees.',
      'Pause briefly at the bottom with the bar touching the chest and tension held through the upper body.',
      'Drive the bar back up to full lockout by pressing through the upper chest and triceps.'
    ],
    commonMistakes: [
      'Setting the incline too high, which turns the lift into an overhead press and removes the chest focus.',
      'Letting the elbows flare to 90 degrees, which strains the front shoulders and reduces chest engagement.',
      'Lifting the hips off the bench to use leverage, which destabilizes the lift.',
      'Bouncing the bar off the chest to use momentum instead of a controlled press.'
    ],
    mediaUrl: 'https://media.larofit.com/smith-machine-incline-bench-press.mp4',
    exerciseUrl: 'https://movekit.com/exercises/smith-machine-incline-bench-press',
    custom: false
  },
  {
    id: 'b203',
    name: 'Smith Machine Standing Shrugs',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing barbell shrug on the Smith machine that isolates the upper traps — the guided way to load shrugs heavy and safe.',
    benefits: [
      'Builds upper-trap mass with heavy, easily progressed loading.',
      'Removes grip and balance as limiters thanks to the guided bar path.',
      'Allows safe failure work without needing a spotter.'
    ],
    instructions: [
      'Set the Smith bar to about mid-thigh height and stand facing the bar with feet shoulder-width apart.',
      'Grip the bar slightly wider than shoulder width with palms facing the body.',
      'Unrack the bar by rotating the wrists and stand tall with arms hanging fully extended.',
      'Brace your core and shrug your shoulders straight up toward your ears as high as you can.',
      'Pause briefly at the top, squeezing the upper traps for a full beat without rolling the shoulders.',
      'Lower the bar slowly over 2 to 3 seconds back to the start position before the next rep.'
    ],
    commonMistakes: [
      'Rolling the shoulders forward or backward at the top, which strains the joint without adding trap work.',
      'Bending the arms during the lift, which turns the shrug into a partial upright row.',
      'Bouncing the bar at the bottom and using momentum instead of a controlled trap contraction.',
      'Cutting the range short and never reaching a full shoulder elevation at the top of the rep.'
    ],
    mediaUrl: 'https://media.larofit.com/smith-machine-standing-shrugs.mp4',
    exerciseUrl: 'https://movekit.com/exercises/smith-machine-standing-shrugs',
    custom: false
  },
  {
    id: 'b204',
    name: 'Smith Machine Sumo Romanian Deadlift',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: ['glutes'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Hinge',
    description: 'A wide-stance Romanian deadlift on the Smith machine that bias-loads the glutes and inner hamstrings — guided hip-hinge work.',
    benefits: [
      'Bias-loads the glutes and inner hamstrings with a wide sumo stance.',
      'Allows safe heavy hinging on a guided bar path.',
      'Reinforces strong hip-hinge mechanics for lifters newer to the deadlift family.'
    ],
    instructions: [
      'Set the Smith bar to about mid-shin height and stand with feet wider than shoulders, toes turned out.',
      'Grip the bar with hands inside your knees and palms facing the body, then unrack by rotating the wrists.',
      'Stand tall with the bar against your thighs, brace your core, and pull your shoulder blades down.',
      'Hinge at the hips by pushing them back, letting the bar travel down the front of the legs.',
      'Stop when you feel a deep stretch in the glutes and hamstrings, with the bar at about mid-shin height.',
      'Drive the hips forward to stand back up to full lockout, squeezing the glutes hard at the top.'
    ],
    commonMistakes: [
      'Rounding the lower back as the bar lowers, which puts serious risk on the spine.',
      'Squatting the bar down instead of hinging back, which removes the glute-and-hamstring stretch.',
      'Letting the bar drift away from the body, which loads the lower back instead of the rear chain.',
      'Letting the knees cave inward, which strains the joint and loses the wide-stance bias.'
    ],
    mediaUrl: 'https://media.larofit.com/smith-machine-sumo-romanian-deadlift.mp4',
    exerciseUrl: 'https://movekit.com/exercises/smith-machine-sumo-romanian-deadlift',
    custom: false
  },
  {
    id: 'b205',
    name: 'Supermans',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A prone bodyweight extension that strengthens the lower back, glutes, and rear chain — the floor-friendly low-back exercise.',
    benefits: [
      'Strengthens the lower back and rear chain with no equipment needed.',
      'Counteracts the weak-back posture that builds up from prolonged sitting.',
      'Provides a beginner-friendly entry point to spinal extension work.'
    ],
    instructions: [
      'Lie face-down on a mat with your arms extended overhead and your legs straight behind you.',
      'Brace your core and squeeze your glutes to set tension before lifting anything off the floor.',
      'Lift your arms, chest, and legs off the floor at the same time, leading with the upper back.',
      'Hold the top position for a full 1 to 2 seconds, squeezing the lower back and glutes tight.',
      'Lower everything back to the floor slowly over 2 to 3 seconds, keeping the neck in line with the spine.',
      'Repeat for 10 to 15 reps, prioritizing a smooth lift and squeeze over how high you go.'
    ],
    commonMistakes: [
      'Cranking the head up to the ceiling, which strains the neck instead of working the back.',
      'Using momentum to bounce the chest and legs up instead of lifting with control.',
      'Holding the breath through the rep, which spikes blood pressure unnecessarily.',
      'Trying to lift extremely high, which compresses the lower back instead of strengthening it.'
    ],
    mediaUrl: 'https://media.larofit.com/supermans.mp4',
    exerciseUrl: 'https://movekit.com/exercises/supermans',
    custom: false
  },
  {
    id: 'b206',
    name: 'Wall Sit',
    primaryMuscle: 'upper_legs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'duration',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'An isometric squat hold against a wall that builds quad endurance and mental grit — the classic equipment-free leg burner.',
    benefits: [
      'Builds quad endurance and isometric strength with no equipment.',
      'Reinforces a strong knee-over-ankle position under sustained load.',
      'Trains mental grit and breath control under physical fatigue.'
    ],
    instructions: [
      'Stand with your back flat against a smooth wall and your feet about two feet out from the wall.',
      'Slide down the wall by bending the knees until your thighs are parallel to the floor.',
      'Set your feet roughly shoulder-width apart with your knees stacked over your ankles.',
      'Press your lower back firmly into the wall and rest your arms relaxed at your sides or out in front.',
      'Hold the position with steady breathing as the quads burn, keeping the knees in line with the toes.',
      'Stay in the hold for 30 to 60 seconds, then slowly slide back up the wall to stand.'
    ],
    commonMistakes: [
      'Setting the feet too close to the wall so the knees travel far past the toes, which overloads the joint.',
      'Letting the lower back peel off the wall as fatigue sets in, which removes the quad isolation.',
      'Letting the knees cave inward as the hold gets hard, which strains the joint.',
      'Holding the breath to push through the burn, which spikes blood pressure unnecessarily.'
    ],
    mediaUrl: 'https://media.larofit.com/wall-sit.mp4',
    exerciseUrl: 'https://movekit.com/exercises/wall-sit',
    custom: false
  },
  {
    id: 'b207',
    name: 'Captain\'s Chair',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A vertical knee raise performed on the captain\'s chair station, with the back supported and the legs lifted to train the lower abs through a full, controlled range.',
    benefits: [
      'Targets the lower portion of the abs, which is hard to load directly with floor-based crunches.',
      'The padded back support isolates the core and keeps momentum out of the movement.',
      'Builds the hip and trunk control that carries over to leg raises, hanging work, and athletic movement.'
    ],
    instructions: [
      'Step up onto the captain\'s chair and rest your forearms on the pads, gripping the handles with your back flat against the support.',
      'Let your legs hang straight down with your shoulders pulled down away from your ears.',
      'Brace your core and raise your knees toward your chest, curling your pelvis up slightly at the top.',
      'Pause briefly at the top where your abs are fully contracted, without swinging.',
      'Lower your legs slowly under control until they hang straight again.',
      'Repeat for the target reps, keeping every rep smooth rather than relying on momentum.'
    ],
    commonMistakes: [
      'Swinging the legs up with momentum instead of lifting with the abs, which takes the load off the muscle you\'re trying to train.',
      'Stopping where the hips do all the work — failing to curl the pelvis means the lower abs never fully engage.',
      'Letting the legs drop quickly on the way down rather than lowering under control, wasting the hardest part of the rep.',
      'Shrugging the shoulders up toward the ears, which loads the traps and neck instead of keeping tension on the core.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b208',
    name: 'Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'The classic floor-based abdominal curl that trains the upper abs through a short, focused range of spinal flexion.',
    benefits: [
      'Directly targets the rectus abdominis with a simple movement that needs no equipment.',
      'Easy to learn and scale, making it a reliable entry point for building core strength.',
      'Keeps tension on the abs without the hip-flexor involvement of a full sit-up.'
    ],
    instructions: [
      'Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.',
      'Place your hands lightly behind your head or crossed over your chest, without pulling on your neck.',
      'Brace your core and curl your shoulder blades up off the floor, exhaling as you rise.',
      'Squeeze your abs hard at the top of the movement for a brief pause.',
      'Lower your shoulders back down with control until they just touch the floor.',
      'Repeat for the target reps, keeping the movement slow and deliberate.'
    ],
    commonMistakes: [
      'Pulling on the head and neck with the hands, which strains the neck and takes work away from the abs.',
      'Using momentum to bounce up off the floor rather than curling up slowly with the core.',
      'Lifting the entire back off the floor — a crunch is a short curl of the upper spine, not a full sit-up.',
      'Holding the breath instead of exhaling on the way up, which limits how hard the abs can contract.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b209',
    name: 'Dumbbell Close Grip Press',
    primaryMuscle: 'chest',
    secondaryMuscles: ['triceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Push',
    description: 'A dumbbell press performed with the weights held close together and the elbows tucked, shifting emphasis onto the inner chest and triceps.',
    benefits: [
      'Loads the inner chest and triceps together, building pressing strength and mid-chest thickness.',
      'The neutral, close grip is easier on the shoulders than a wide barbell press for many lifters.',
      'Keeping the dumbbells pressed together creates constant tension across the chest throughout the rep.'
    ],
    instructions: [
      'Lie back on a flat bench holding a dumbbell in each hand, pressed together over your chest with palms facing each other.',
      'Keep the dumbbells in contact and your elbows tucked close to your sides.',
      'Lower the weights together to your mid-chest in a slow, controlled line.',
      'Press the dumbbells back up while actively squeezing them together to keep tension on the chest.',
      'Lock out gently at the top without letting the dumbbells drift apart.',
      'Repeat for the target reps, keeping the squeeze constant from start to finish.'
    ],
    commonMistakes: [
      'Letting the dumbbells separate during the press, which releases the inner-chest tension that makes this variation effective.',
      'Flaring the elbows out wide, which turns it into a standard press and loses the close-grip emphasis.',
      'Lowering too far or too fast and losing control, putting unnecessary strain on the shoulders.',
      'Using a weight so heavy that the dumbbells drift apart — load should never break the squeeze.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b210',
    name: 'Dumbbell Drag Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A biceps curl where the dumbbells are dragged up close to the body and the elbows travel back, maximizing the contraction at the top.',
    benefits: [
      'Shifts tension onto the biceps by keeping the front delts out of the movement.',
      'The dragging path produces a strong peak contraction that standard curls often miss.',
      'Reinforces strict form, making it a useful tool for breaking curl plateaus.'
    ],
    instructions: [
      'Stand tall holding a dumbbell in each hand at your sides with palms facing forward.',
      'Instead of curling the weights out and up, drag them straight up the front of your body.',
      'Let your elbows travel backward behind your torso as the dumbbells rise toward your chest.',
      'Squeeze the biceps hard at the top, keeping the dumbbells close to your body the whole time.',
      'Lower the weights back down along the same dragging path under control.',
      'Repeat for the target reps, prioritizing a clean path over heavy weight.'
    ],
    commonMistakes: [
      'Curling the dumbbells out and away from the body like a standard curl, which defeats the purpose of the drag.',
      'Keeping the elbows pinned at the sides instead of letting them drift back, which limits the contraction.',
      'Using too much weight and turning the movement into a shrug or a swing.',
      'Rushing the lowering phase rather than controlling the dumbbells back down along the body.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b211',
    name: 'Dumbbell Pullover',
    primaryMuscle: 'chest',
    secondaryMuscles: ['back'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A single-dumbbell movement performed across a bench, taking the weight in an arc behind the head to stretch and work the lats and chest.',
    benefits: [
      'Trains the lats through a long stretch that few other dumbbell movements reach.',
      'Opens up the rib cage and chest, improving overhead mobility alongside building the upper back.',
      'Works the back and chest together in a single arcing movement with minimal equipment.'
    ],
    instructions: [
      'Lie back on a flat bench holding a single dumbbell with both hands, arms extended above your chest.',
      'Cup the top end of the dumbbell with both palms, keeping a slight bend in your elbows.',
      'Lower the dumbbell back in a slow arc over and behind your head until you feel a stretch across your lats and chest.',
      'Keep your hips down and core braced as the weight travels behind you.',
      'Pull the dumbbell back over your chest along the same arc, leading with your lats.',
      'Repeat for the target reps, keeping the elbow angle fixed throughout.'
    ],
    commonMistakes: [
      'Bending and straightening the elbows to lift the weight, which turns the movement into a triceps exercise.',
      'Lowering too far and overstretching the shoulders, especially with a heavy dumbbell.',
      'Letting the hips rise to help heave the weight, which removes tension from the back and chest.',
      'Rushing the stretch instead of controlling the dumbbell slowly through the bottom of the arc.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b212',
    name: 'Plank',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'duration',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'An isometric core hold performed on the forearms, training the abs and deep stabilizers to resist movement and keep the spine neutral.',
    benefits: [
      'Builds deep core stability by training the abs to hold the spine still under tension.',
      'Strengthens the entire midsection without any spinal flexion, making it joint-friendly.',
      'Carries over to nearly every lift by improving your ability to brace and stay rigid.'
    ],
    instructions: [
      'Set your forearms on the floor shoulder-width apart with your elbows directly under your shoulders.',
      'Extend your legs straight behind you and rise onto your toes so your body forms a straight line.',
      'Brace your core, squeeze your glutes, and tuck your pelvis slightly so your lower back stays flat.',
      'Keep your neck neutral by looking at the floor just ahead of your hands.',
      'Hold the position for the target time, breathing steadily throughout.',
      'Lower your knees to the floor to finish once your form starts to break.'
    ],
    commonMistakes: [
      'Letting the hips sag toward the floor, which strains the lower back instead of working the core.',
      'Piking the hips up high, which makes the hold easier and takes tension off the abs.',
      'Holding the breath, which spikes tension and shortens how long you can maintain good form.',
      'Craning the neck up to look forward rather than keeping it in line with the spine.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b213',
    name: 'Sit-Up',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A full-range abdominal curl that lifts the entire torso off the floor, training the abs through their complete shortening range.',
    benefits: [
      'Trains the abs through a longer range than a crunch by lifting the whole torso.',
      'Builds functional core strength used in getting up, bracing, and sport.',
      'Needs no equipment and scales easily by changing arm position.'
    ],
    instructions: [
      'Lie on your back with your knees bent and feet flat on the floor, hooked under a support if needed.',
      'Place your hands across your chest or lightly behind your head without pulling on your neck.',
      'Brace your core and curl your torso all the way up until your chest approaches your thighs.',
      'Exhale as you rise and keep the movement driven by the abs rather than momentum.',
      'Lower yourself back down with control until your shoulders return to the floor.',
      'Repeat for the target reps, keeping each rep smooth from top to bottom.'
    ],
    commonMistakes: [
      'Yanking on the head and neck to throw yourself up, which strains the neck and offloads the abs.',
      'Using momentum to bounce off the floor instead of controlling the lift.',
      'Letting the lower back arch hard off the floor at the bottom rather than staying braced.',
      'Holding the breath instead of exhaling on the way up, limiting how hard the abs contract.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b214',
    name: 'Bicycle Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A dynamic crunch that pairs spinal flexion with a pedaling rotation, hitting the upper abs and obliques together.',
    benefits: [
      'Works the rectus abdominis and obliques at the same time in one continuous movement.',
      'The rotation makes it one of the most effective bodyweight moves for the side abs.',
      'Builds coordination and core endurance with no equipment.'
    ],
    instructions: [
      'Lie on your back with your hands lightly behind your head and your knees raised to a tabletop position.',
      'Brace your core and lift your shoulder blades off the floor.',
      'Rotate your torso to bring one elbow toward the opposite knee while extending the other leg out straight.',
      'Switch sides in a smooth pedaling motion, drawing the opposite elbow and knee together.',
      'Keep your lower back pressed to the floor and your shoulders lifted throughout.',
      'Continue alternating for the target reps, moving with control rather than speed.'
    ],
    commonMistakes: [
      'Pulling on the neck with the hands instead of rotating from the torso.',
      'Racing through the reps so fast the rotation becomes a flail with no real contraction.',
      'Letting the lower back arch up off the floor as the legs extend, straining the spine.',
      'Extending the straight leg so low it drags the lower back off the floor.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b215',
    name: 'Reverse Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A crunch driven from the bottom up, curling the pelvis toward the ribs to bias the lower portion of the abs.',
    benefits: [
      'Targets the lower abs by curling the pelvis rather than the upper torso.',
      'Keeps strain off the neck since the head stays relaxed on the floor.',
      'Teaches posterior pelvic tilt, a key skill for bracing and protecting the lower back.'
    ],
    instructions: [
      'Lie on your back with your hands flat at your sides and your knees bent to about ninety degrees.',
      'Lift your feet so your thighs are roughly vertical and your shins parallel to the floor.',
      'Brace your core and curl your pelvis up toward your ribs, lifting your hips slightly off the floor.',
      'Pause at the top where the lower abs are fully contracted.',
      'Lower your hips back down with control without letting your feet drop to the floor.',
      'Repeat for the target reps, keeping the movement small and controlled.'
    ],
    commonMistakes: [
      'Swinging the legs to generate momentum instead of curling with the lower abs.',
      'Lifting only the legs without curling the pelvis, which removes the abs from the movement.',
      'Letting the feet drop and rest on the floor between reps, releasing the tension.',
      'Using such a large range that the hips slam back down rather than lowering under control.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b216',
    name: 'Lying Leg Raise',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A straight-leg raise from the floor that loads the lower abs through a long range of motion.',
    benefits: [
      'Strongly targets the lower abs through a full hip and pelvis range.',
      'Requires no equipment and scales by bending the knees to make it easier.',
      'Builds control of the pelvis that protects the lower back under load.'
    ],
    instructions: [
      'Lie flat on your back with your legs straight and your hands at your sides or tucked under your glutes for support.',
      'Brace your core and press your lower back gently into the floor.',
      'Keeping your legs straight, raise them together until they point toward the ceiling.',
      'Squeeze your abs at the top, then lower your legs slowly back toward the floor.',
      'Stop just before your heels touch and before your lower back arches up.',
      'Repeat for the target reps, keeping the lower back flat the whole time.'
    ],
    commonMistakes: [
      'Letting the lower back arch off the floor as the legs lower, which strains the spine.',
      'Dropping the legs quickly instead of lowering them under control.',
      'Bending the knees to cheat the range when fatigue sets in rather than shortening it honestly.',
      'Tucking the chin and tensing the neck rather than keeping the head relaxed.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b217',
    name: 'Flutter Kicks',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A small, rapid alternating leg kick held just off the floor that builds lower-ab endurance under constant tension.',
    benefits: [
      'Keeps the lower abs under continuous tension for an endurance-focused burn.',
      'Strengthens the deep core that stabilizes the pelvis when running or walking.',
      'Portable and equipment-free, easy to add to the end of any session.'
    ],
    instructions: [
      'Lie flat on your back with your hands at your sides or under your glutes and your legs straight.',
      'Brace your core and lift both heels a few inches off the floor.',
      'Press your lower back into the floor to lock the pelvis in place.',
      'Kick your legs up and down in small, quick alternating motions without touching the floor.',
      'Keep your legs nearly straight and the movement controlled rather than frantic.',
      'Continue for the target reps or time, keeping the core braced throughout.'
    ],
    commonMistakes: [
      'Letting the lower back arch off the floor, which shifts strain to the spine.',
      'Kicking from the knees rather than driving from the hips with near-straight legs.',
      'Holding the legs too high, which lets the hip flexors take over and eases the abs.',
      'Holding the breath instead of breathing steadily through the set.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b218',
    name: 'V-Up',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'An explosive full-body crunch that lifts the torso and legs to meet over the hips, working the abs end to end.',
    benefits: [
      'Trains the upper and lower abs together in one powerful movement.',
      'Builds the coordination and control to fold and unfold the body under tension.',
      'Needs no equipment and delivers a high-intensity core stimulus.'
    ],
    instructions: [
      'Lie flat on your back with your arms extended overhead and your legs straight.',
      'Brace your core and simultaneously lift your legs and torso, reaching your hands toward your feet.',
      'Aim to form a V shape with your body balanced on your glutes at the top.',
      'Keep your legs as straight as your flexibility allows and your back from rounding hard.',
      'Lower your arms and legs back down with control to the starting position.',
      'Repeat for the target reps without letting momentum take over.'
    ],
    commonMistakes: [
      'Throwing the arms and legs up with momentum instead of contracting the abs.',
      'Bending the knees excessively, which shortens the lever and reduces the work.',
      'Crashing back down to the floor rather than lowering with control.',
      'Rounding the upper back aggressively instead of folding from the hips and abs.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b219',
    name: 'Toe Touches',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A top-range crunch with the legs raised vertically, reaching the hands toward the toes to bias the upper abs.',
    benefits: [
      'Concentrates the work in the upper abs through a short, sharp crunch.',
      'The raised legs keep the lower back supported and the hip flexors quiet.',
      'Simple to learn and easy to feel working from the first rep.'
    ],
    instructions: [
      'Lie on your back and raise your legs straight up toward the ceiling.',
      'Extend your arms up toward your feet with your shoulders resting on the floor.',
      'Brace your core and crunch up, reaching your hands toward your toes.',
      'Lift your shoulder blades off the floor and squeeze your abs at the top.',
      'Lower your shoulders back down with control while keeping your legs vertical.',
      'Repeat for the target reps, keeping the legs still and the movement crisp.'
    ],
    commonMistakes: [
      'Bouncing off the floor with momentum instead of crunching with the abs.',
      'Letting the legs drift forward or back instead of holding them vertical.',
      'Reaching with the arms and shoulders while the abs stay relaxed.',
      'Straining the neck upward rather than leading with the chest and ribs.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b220',
    name: 'Hollow Body Hold',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'duration',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'An isometric hold with the arms and legs extended and the lower back pinned, training whole-core tension and control.',
    benefits: [
      'Builds total anterior-core strength and the ability to brace hard.',
      'Teaches the pelvic tilt and rib position that protect the spine in every lift.',
      'Carries over directly to gymnastics, sprinting, and heavy compound lifts.'
    ],
    instructions: [
      'Lie on your back and press your lower back firmly into the floor.',
      'Brace your core and lift your shoulder blades and legs a few inches off the floor.',
      'Extend your arms overhead and your legs out straight to form a shallow banana shape.',
      'Keep your lower back glued to the floor for the entire hold.',
      'Hold the position for the target time, breathing steadily in short breaths.',
      'Lower down with control once you can no longer keep the lower back flat.'
    ],
    commonMistakes: [
      'Letting the lower back lift off the floor, which is the cue to shorten the position or stop.',
      'Holding the arms and legs so high it becomes easy and the core relaxes.',
      'Holding the breath, which makes the position harder to maintain safely.',
      'Letting the head crane forward and the neck tense instead of staying long.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b221',
    name: 'Dead Bug',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A controlled anti-extension drill where opposite arm and leg extend while the lower back stays pinned to the floor.',
    benefits: [
      'Trains the core to resist movement and keep the spine stable, the basis of good bracing.',
      'Gentle on the back, making it a safe entry point for core strength.',
      'Improves coordination between opposite limbs while the trunk stays still.'
    ],
    instructions: [
      'Lie on your back with your arms reaching toward the ceiling and your knees bent to a tabletop position.',
      'Press your lower back into the floor and brace your core.',
      'Slowly extend one arm overhead while straightening the opposite leg toward the floor.',
      'Keep your lower back flat as the limbs reach away from each other.',
      'Return to the start with control and repeat on the other side.',
      'Continue alternating for the target reps, moving slowly throughout.'
    ],
    commonMistakes: [
      'Letting the lower back arch off the floor as the limbs extend, which defeats the drill.',
      'Rushing the reps instead of moving slowly under control.',
      'Extending the leg so low it pulls the pelvis out of position.',
      'Holding the breath rather than exhaling as the limbs reach out.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b222',
    name: 'Bird Dog',
    primaryMuscle: 'abs',
    secondaryMuscles: ['back'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A quadruped anti-rotation drill extending opposite arm and leg while keeping the spine level and stable.',
    benefits: [
      'Trains the core and lower back to resist rotation and stay braced.',
      'Strengthens the deep spinal stabilizers that protect the back.',
      'Improves balance and the mind-muscle link between the core and the limbs.'
    ],
    instructions: [
      'Start on all fours with your hands under your shoulders and knees under your hips.',
      'Brace your core and set your spine in a flat, neutral position.',
      'Extend one arm straight forward and the opposite leg straight back at the same time.',
      'Keep your hips and shoulders square to the floor without twisting.',
      'Hold briefly, then return to all fours and switch to the other side.',
      'Repeat for the target reps, keeping the spine still throughout.'
    ],
    commonMistakes: [
      'Letting the hips rotate or tilt as the leg lifts instead of staying square.',
      'Arching or rounding the back rather than holding it flat and neutral.',
      'Lifting the limbs higher than the torso, which overextends the lower back.',
      'Rushing each rep instead of moving with control and a brief hold.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b223',
    name: 'Oblique Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A side-bending crunch that targets the obliques through lateral flexion of the trunk.',
    benefits: [
      'Directly works the obliques along the sides of the waist.',
      'Strengthens the muscles that resist side bending and protect the spine.',
      'Requires no equipment and pairs easily with standard crunches.'
    ],
    instructions: [
      'Lie on your back with your knees bent and dropped to one side, stacking your legs.',
      'Place the hand on your working side lightly behind your head.',
      'Brace your core and crunch your upper body up and slightly toward your hip.',
      'Squeeze the oblique on the working side at the top of the movement.',
      'Lower back down with control and finish all reps before switching sides.',
      'Repeat for the target reps on each side.'
    ],
    commonMistakes: [
      'Pulling on the neck with the hand instead of crunching from the obliques.',
      'Twisting the torso instead of bending it to the side.',
      'Using momentum to swing up rather than contracting the side abs.',
      'Rushing through reps without pausing to squeeze at the top.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b224',
    name: 'Side Plank Hip Dips',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A dynamic side plank that lowers and lifts the hips, loading the obliques through a moving range.',
    benefits: [
      'Adds movement to the side plank to work the obliques dynamically.',
      'Builds lateral core strength and hip stability at the same time.',
      'Strengthens the muscles that keep the pelvis level when standing and walking.'
    ],
    instructions: [
      'Set up in a side plank on your forearm with your elbow under your shoulder and feet stacked.',
      'Lift your hips so your body forms a straight line from head to feet.',
      'Brace your core and lower your hips toward the floor under control.',
      'Stop just before your hip touches, then drive back up to the straight-line position.',
      'Keep your shoulders and hips stacked and facing forward throughout.',
      'Repeat for the target reps, then switch to the other side.'
    ],
    commonMistakes: [
      'Letting the hips rotate forward or back instead of staying stacked.',
      'Dropping the hips fast and bouncing off the bottom rather than controlling the dip.',
      'Letting the top shoulder collapse toward the floor instead of staying tall.',
      'Sagging the bottom shoulder into the joint rather than pressing actively away from the floor.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b225',
    name: 'Plank Shoulder Taps',
    primaryMuscle: 'abs',
    secondaryMuscles: ['shoulders'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A high-plank variation that taps each hand to the opposite shoulder, forcing the core to resist rotation.',
    benefits: [
      'Trains the core to resist rotation while one hand leaves the floor.',
      'Adds shoulder stability and control on top of standard plank work.',
      'Builds the anti-rotation strength used to keep the torso steady in sport and lifting.'
    ],
    instructions: [
      'Start in a high plank with your hands under your shoulders and feet about hip-width apart.',
      'Brace your core and squeeze your glutes to lock your body in a straight line.',
      'Lift one hand and tap it to the opposite shoulder without rocking your hips.',
      'Return the hand to the floor and repeat with the other hand.',
      'Keep your hips as still and level as possible throughout.',
      'Continue alternating for the target reps, slowing down if the hips start to sway.'
    ],
    commonMistakes: [
      'Letting the hips rock side to side instead of staying square and still.',
      'Widening the feet so far it makes the anti-rotation challenge too easy.',
      'Rushing the taps so the body sways rather than staying braced.',
      'Letting the hips pike up or sag down instead of holding a flat line.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b226',
    name: 'Hanging Leg Raise',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A straight-leg raise from a dead hang that loads the lower abs through a long, demanding range.',
    benefits: [
      'Loads the lower abs harder than knee raises by using straight legs.',
      'Builds grip and shoulder stability alongside core strength.',
      'Trains control of the pelvis through a full hanging range of motion.'
    ],
    instructions: [
      'Hang from a pull-up bar with an overhand grip and your arms straight.',
      'Brace your core and pull your shoulders down slightly to engage the lats.',
      'Keeping your legs straight, raise them together until they reach about hip height or higher.',
      'Curl your pelvis up at the top so the abs do the work rather than just the hip flexors.',
      'Lower your legs slowly under control without swinging.',
      'Repeat for the target reps, keeping the body from rocking.'
    ],
    commonMistakes: [
      'Swinging the body to kip the legs up instead of raising them with the abs.',
      'Stopping at hip flexion without curling the pelvis, which leaves the abs underworked.',
      'Dropping the legs quickly and using the rebound to start the next rep.',
      'Bending the knees to cheat the range rather than reducing the height honestly.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b227',
    name: 'Ab Wheel Rollout',
    primaryMuscle: 'abs',
    secondaryMuscles: ['shoulders'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'advanced',
    movement: 'Core',
    description: 'An advanced anti-extension movement rolling a wheel forward and back while the core fights to keep the spine from sagging.',
    benefits: [
      'One of the most demanding anti-extension exercises for total core strength.',
      'Builds the bracing strength that protects the lower back under heavy loads.',
      'Works the abs, lats, and shoulders together through a long range.'
    ],
    instructions: [
      'Kneel on the floor holding the ab wheel with both hands directly under your shoulders.',
      'Brace your core hard and tuck your pelvis so your lower back is flat.',
      'Roll the wheel slowly forward, extending your body while keeping the core tight.',
      'Go only as far as you can without letting your lower back sag toward the floor.',
      'Pull the wheel back toward your knees using your abs and lats to return to the start.',
      'Repeat for the target reps, shortening the range before form breaks.'
    ],
    commonMistakes: [
      'Letting the lower back sag and arch at full extension, which strains the spine.',
      'Rolling out further than the core can control in search of a bigger range.',
      'Pulling back with the arms and hip flexors instead of the abs.',
      'Starting with full rollouts before building strength with a partial range.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b228',
    name: 'Cable Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A kneeling crunch against a rope attachment that loads spinal flexion with adjustable cable resistance.',
    benefits: [
      'Adds external load to the crunch so the abs can be trained for strength, not just endurance.',
      'Easy to progress by adding weight as you get stronger.',
      'The cable keeps constant tension on the abs through the whole range.'
    ],
    instructions: [
      'Attach a rope to a high cable and kneel facing the machine, holding the rope by your head.',
      'Brace your core and keep your hips fixed in place throughout the movement.',
      'Crunch down by flexing your spine, bringing your elbows toward your thighs.',
      'Drive the contraction with your abs rather than pulling with your arms or sitting back.',
      'Return to the upright position under control without letting the weight pull you up.',
      'Repeat for the target reps, keeping the hips stationary the whole time.'
    ],
    commonMistakes: [
      'Pulling the rope down with the arms instead of crunching with the abs.',
      'Rocking back at the hips so it becomes a lat pulldown rather than an ab crunch.',
      'Using so much weight that the spine barely flexes through its range.',
      'Letting the weight yank you upright between reps instead of controlling the return.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b229',
    name: 'Cable Pallof Press',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'An anti-rotation press where you hold a cable handle at the chest and press it out, resisting the pull to one side.',
    benefits: [
      'Trains the core to resist rotation, a key function for protecting the spine.',
      'Builds bracing strength that transfers to squats, carries, and pressing.',
      'Easy to load progressively by adjusting the cable weight.'
    ],
    instructions: [
      'Set a cable to chest height and stand side-on, holding the handle with both hands at your sternum.',
      'Step away to create tension and brace your core against the sideways pull.',
      'Press the handle straight out in front of your chest until your arms are extended.',
      'Resist the cable trying to rotate your torso, keeping your hips and shoulders square.',
      'Hold briefly at full extension, then bring the handle back to your chest under control.',
      'Repeat for the target reps, then turn around and work the other side.'
    ],
    commonMistakes: [
      'Letting the torso rotate toward the cable instead of staying square.',
      'Using the arms and shoulders to fight the weight rather than bracing the core.',
      'Standing too close to the machine so there is little tension to resist.',
      'Holding the breath instead of breathing while keeping the trunk locked.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b230',
    name: 'Cable Reverse Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A reverse crunch performed against cable resistance, curling the pelvis toward the ribs under load.',
    benefits: [
      'Adds resistance to the lower-ab curl that bodyweight versions lack.',
      'Keeps constant tension on the lower abs through the cable.',
      'Progresses easily by adding weight as control improves.'
    ],
    instructions: [
      'Attach ankle straps or hold a low cable and lie on your back with your hips near the machine.',
      'Raise your knees so your thighs are vertical and the cable is taut.',
      'Brace your core and curl your pelvis up toward your ribs against the cable.',
      'Lift your hips slightly off the floor at the top of the curl.',
      'Lower your hips back down slowly, resisting the pull of the cable.',
      'Repeat for the target reps, keeping the movement driven by the lower abs.'
    ],
    commonMistakes: [
      'Swinging the legs to move the weight instead of curling the pelvis.',
      'Pulling with the hip flexors rather than the lower abs.',
      'Letting the cable yank the hips down quickly instead of lowering with control.',
      'Using too much weight so the pelvis never actually curls.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b231',
    name: 'Machine Rotary Torso',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Rotation',
    description: 'A seated machine that loads trunk rotation, training the obliques through a controlled twisting range.',
    benefits: [
      'Isolates the obliques with stable, guided resistance.',
      'Lets you load rotation safely and progress the weight over time.',
      'Beginner-friendly since the machine controls the movement path.'
    ],
    instructions: [
      'Sit in the rotary torso machine and secure your torso against the pads.',
      'Set a comfortable weight and grip the handles or rest your arms on the pads.',
      'Brace your core and rotate your trunk smoothly to one side.',
      'Squeeze the obliques at the end of the rotation without forcing past your range.',
      'Return to the center under control rather than letting the weight snap back.',
      'Finish your reps on one side, then set up and repeat on the other.'
    ],
    commonMistakes: [
      'Using momentum to whip into the rotation instead of controlling it.',
      'Setting too much weight and twisting the spine through an excessive range.',
      'Letting the weight pull you back to center rather than resisting it.',
      'Rotating from the arms and shoulders instead of the trunk.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b232',
    name: 'Decline Sit-Up',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bench',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A sit-up performed on a decline bench, increasing the range and resistance against gravity for the abs.',
    benefits: [
      'The decline angle increases the challenge over a flat sit-up.',
      'Trains the abs through a long range with bodyweight resistance.',
      'Can be loaded by holding a plate to progress further.'
    ],
    instructions: [
      'Set a decline bench and hook your feet securely under the pads.',
      'Lie back with your hands across your chest or lightly behind your head.',
      'Brace your core and curl your torso up toward your thighs.',
      'Lead with your abs rather than yanking with your arms or neck.',
      'Lower yourself back down with control without crashing onto the bench.',
      'Repeat for the target reps, keeping each rep smooth.'
    ],
    commonMistakes: [
      'Pulling on the head and neck to drive the movement.',
      'Dropping back quickly and using the bounce to start the next rep.',
      'Setting a steeper decline than your strength allows, forcing momentum.',
      'Letting the lower back overarch at the bottom instead of staying braced.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b233',
    name: 'Decline Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bench',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A short-range crunch on a decline bench that keeps constant tension on the upper abs.',
    benefits: [
      'The decline keeps tension on the abs even at the bottom of the crunch.',
      'Targets the upper abs through a controlled, shorter range than a full sit-up.',
      'Easy to load with a plate held on the chest.'
    ],
    instructions: [
      'Set a decline bench and hook your feet under the pads.',
      'Lie back and place your hands across your chest or behind your head.',
      'Brace your core and crunch your shoulder blades up off the bench.',
      'Squeeze your abs at the top without rising all the way to a full sit-up.',
      'Lower back down with control, stopping before you fully relax.',
      'Repeat for the target reps, keeping the movement tight and controlled.'
    ],
    commonMistakes: [
      'Turning it into a full sit-up rather than a short, controlled crunch.',
      'Pulling on the neck instead of curling with the abs.',
      'Using momentum to bounce up off the bottom.',
      'Relaxing fully at the bottom and losing the constant tension.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b234',
    name: 'Decline Bench Leg Raise',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bench',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A leg raise on a decline bench that loads the lower abs through a long range against gravity.',
    benefits: [
      'The decline increases the lower-ab challenge compared to floor leg raises.',
      'Lets you hold the bench for stability so the abs do the work.',
      'Trains pelvic control through a long, demanding range.'
    ],
    instructions: [
      'Lie on a decline bench with your head at the top and grip the bench behind your head.',
      'Brace your core and keep your legs straight or slightly bent.',
      'Raise your legs up until your hips curl slightly off the bench.',
      'Squeeze the lower abs at the top of the movement.',
      'Lower your legs slowly back down without letting your lower back arch off the bench.',
      'Repeat for the target reps, keeping the motion controlled.'
    ],
    commonMistakes: [
      'Letting the lower back arch off the bench as the legs lower.',
      'Swinging the legs with momentum instead of raising with the abs.',
      'Dropping the legs quickly rather than lowering under control.',
      'Failing to curl the pelvis at the top, leaving the work to the hip flexors.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b235',
    name: 'Dumbbell Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A weighted crunch holding a dumbbell on the chest to load spinal flexion for the upper abs.',
    benefits: [
      'Adds resistance so the abs can be trained for strength, not just endurance.',
      'Simple to progress by increasing the dumbbell weight.',
      'Keeps the upper abs under load through a focused crunch range.'
    ],
    instructions: [
      'Lie on your back with your knees bent and feet flat, holding a dumbbell against your chest.',
      'Brace your core and curl your shoulder blades up off the floor.',
      'Keep the dumbbell snug to your chest as you crunch up.',
      'Squeeze your abs hard at the top of the movement.',
      'Lower back down with control until your shoulders touch the floor.',
      'Repeat for the target reps, keeping the weight steady throughout.'
    ],
    commonMistakes: [
      'Using momentum to heave the weight up instead of crunching with the abs.',
      'Letting the dumbbell drift away from the chest and pull you off balance.',
      'Lifting the whole back off the floor instead of a controlled crunch.',
      'Holding the breath rather than exhaling on the way up.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b236',
    name: 'Kettlebell Russian Twist',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Rotation',
    description: 'A seated rotational twist holding a kettlebell, training the obliques against added load.',
    benefits: [
      'Loads trunk rotation to build stronger, more defined obliques.',
      'Trains the rotational strength used in throwing, swinging, and sport.',
      'Easy to progress by using a heavier kettlebell.'
    ],
    instructions: [
      'Sit on the floor with your knees bent and lean back slightly to engage your core.',
      'Hold a kettlebell with both hands in front of your chest.',
      'Lift your feet off the floor or keep them down for an easier version.',
      'Brace your core and rotate your torso to move the kettlebell to one side.',
      'Rotate smoothly to the other side, keeping the movement controlled.',
      'Continue alternating for the target reps, twisting from the trunk.'
    ],
    commonMistakes: [
      'Swinging the arms side to side while the torso barely rotates.',
      'Rounding the back hard instead of keeping a tall, braced posture.',
      'Moving so fast the rotation becomes a flail with no control.',
      'Using a kettlebell so heavy the lower back rounds and strains.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b237',
    name: 'Kettlebell Sit-Up',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A full sit-up holding a kettlebell, often pressed overhead at the top, loading the abs through a long range.',
    benefits: [
      'Adds significant load to the sit-up to build core strength.',
      'The overhead position challenges core and shoulder stability together.',
      'Trains the abs through their full shortening range under weight.'
    ],
    instructions: [
      'Lie on your back with your knees bent and hold a kettlebell at your chest or pressed overhead.',
      'Brace your core and anchor your feet for stability.',
      'Curl your torso all the way up to a seated position, keeping the kettlebell steady.',
      'If pressing overhead, keep your arms locked and the bell stacked over your shoulders.',
      'Lower back down with control to the starting position.',
      'Repeat for the target reps, moving smoothly throughout.'
    ],
    commonMistakes: [
      'Using momentum from the weight to throw yourself up.',
      'Letting the kettlebell drift forward and pull you off balance overhead.',
      'Crashing back down instead of lowering with control.',
      'Holding the breath rather than exhaling as you sit up.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b238',
    name: 'Band Pallof Press',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'An anti-rotation press using a resistance band, holding it at the chest and pressing out while resisting the pull.',
    benefits: [
      'Trains the core to resist rotation with band tension you can set up anywhere.',
      'Builds the bracing strength that protects the spine under load.',
      'A joint-friendly, beginner-accessible way to start anti-rotation work.'
    ],
    instructions: [
      'Anchor a band at chest height and stand side-on, holding it with both hands at your sternum.',
      'Step away from the anchor to create tension and brace your core.',
      'Press the band straight out in front of your chest until your arms extend.',
      'Resist the band trying to twist your torso, keeping your hips and shoulders square.',
      'Bring your hands back to your chest under control without rotating.',
      'Repeat for the target reps, then face the other way and switch sides.'
    ],
    commonMistakes: [
      'Letting the torso rotate toward the anchor instead of staying square.',
      'Fighting the band with the arms rather than bracing the core.',
      'Standing too close so the band offers little resistance.',
      'Rushing the press instead of holding a controlled, braced position.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b239',
    name: 'Stability Ball Crunch',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'exercise_ball',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'A crunch performed on a stability ball, using the ball to extend the range and stretch the abs at the bottom.',
    benefits: [
      'The ball allows a deeper stretch at the bottom for a longer ab range.',
      'Engages stabilizers as the core works to balance on the ball.',
      'Comfortable on the back while still challenging the abs.'
    ],
    instructions: [
      'Sit on a stability ball and walk your feet out until the ball supports your lower back.',
      'Place your hands across your chest or lightly behind your head.',
      'Let your torso extend back over the ball to stretch the abs.',
      'Brace your core and crunch up, curling your ribs toward your hips.',
      'Squeeze your abs at the top, then lower back over the ball under control.',
      'Repeat for the target reps, keeping your balance steady on the ball.'
    ],
    commonMistakes: [
      'Pushing with the legs to rock the ball instead of crunching with the abs.',
      'Pulling on the neck rather than curling from the core.',
      'Letting the ball roll around because the feet and core are not stable.',
      'Skipping the stretch at the bottom and using only a tiny range.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b240',
    name: 'Stability Ball Plank',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'exercise_ball',
    recordType: 'duration',
    difficulty: 'intermediate',
    movement: 'Core',
    description: 'A forearm plank with the elbows on a stability ball, forcing the core to stabilize against the rolling surface.',
    benefits: [
      'The unstable ball dramatically increases the core demand over a floor plank.',
      'Builds deep stabilizer strength and control.',
      'Improves balance and bracing under an added stability challenge.'
    ],
    instructions: [
      'Place your forearms on a stability ball with your elbows under your shoulders.',
      'Extend your legs behind you and rise onto your toes in a plank position.',
      'Brace your core and squeeze your glutes to hold a straight line.',
      'Keep the ball as still as possible by resisting any wobble.',
      'Hold the position for the target time, breathing steadily.',
      'Lower your knees to finish once your form starts to break.'
    ],
    commonMistakes: [
      'Letting the hips sag toward the floor, which strains the lower back.',
      'Piking the hips up to make the hold easier and offload the core.',
      'Letting the ball roll and the body wobble instead of staying locked.',
      'Holding the breath rather than breathing through the hold.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b241',
    name: 'Stability Ball Pike',
    primaryMuscle: 'abs',
    secondaryMuscles: ['shoulders'],
    equipment: 'exercise_ball',
    recordType: 'reps',
    difficulty: 'advanced',
    movement: 'Core',
    description: 'An advanced movement piking the hips up while the feet rest on a stability ball, demanding strong core and shoulder control.',
    benefits: [
      'A high-level core move that trains the abs through a large, controlled range.',
      'Builds shoulder stability alongside serious core strength.',
      'Challenges balance and full-body coordination at once.'
    ],
    instructions: [
      'Start in a high plank with your shins or feet resting on a stability ball.',
      'Brace your core and set your shoulders directly over your hands.',
      'Pike your hips up toward the ceiling, rolling the ball toward you with your feet.',
      'Keep your legs straight and your back flat as your hips rise.',
      'Lower back down to the plank position with control, resisting the ball.',
      'Repeat for the target reps, moving slowly to stay balanced.'
    ],
    commonMistakes: [
      'Letting the hips sag in the plank position before starting the pike.',
      'Bending the knees to roll the ball instead of piking from the hips with straight legs.',
      'Rushing the movement and losing control of the ball.',
      'Letting the shoulders drift behind the hands rather than staying stacked.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b242',
    name: 'Landmine Rotation',
    primaryMuscle: 'abs',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Rotation',
    description: 'A standing rotational movement swinging the end of a landmine-anchored barbell across the body to load the obliques.',
    benefits: [
      'Loads powerful trunk rotation to build strong, athletic obliques.',
      'Trains the rotational power used in swinging, throwing, and striking.',
      'The arc keeps the core working through a long rotational range.'
    ],
    instructions: [
      'Anchor one end of a barbell in a landmine and hold the other end with both hands at chest height.',
      'Stand with your feet shoulder-width apart and your arms extended in front of you.',
      'Brace your core and rotate the bar in an arc from one side down toward your hip.',
      'Pivot your back foot and rotate from the trunk and hips, not just the arms.',
      'Control the bar back up and across to the other side in a smooth arc.',
      'Repeat for the target reps, keeping the movement controlled.'
    ],
    commonMistakes: [
      'Moving the bar with the arms while the torso stays rigid.',
      'Using momentum to fling the bar rather than controlling the rotation.',
      'Keeping the feet planted instead of pivoting to let the hips rotate.',
      'Using too much weight so the lower back rounds and takes the strain.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b243',
    name: 'Barbell Rollout',
    primaryMuscle: 'abs',
    secondaryMuscles: ['shoulders'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Core',
    description: 'An advanced anti-extension rollout using a loaded barbell, rolling it forward and back while the core fights spinal extension.',
    benefits: [
      'Delivers an intense anti-extension challenge for serious core strength.',
      'Builds the bracing power that stabilizes the spine under heavy lifts.',
      'Works the abs, lats, and shoulders together through a long range.'
    ],
    instructions: [
      'Load a barbell with plates and kneel behind it, gripping the bar at shoulder width.',
      'Brace your core hard and tuck your pelvis so your lower back is flat.',
      'Roll the bar forward slowly, extending your body while keeping the core tight.',
      'Go only as far as you can without your lower back sagging toward the floor.',
      'Pull the bar back toward your knees using your abs and lats.',
      'Repeat for the target reps, shortening the range before form breaks down.'
    ],
    commonMistakes: [
      'Letting the lower back sag and arch at full extension, straining the spine.',
      'Rolling out further than the core can control to chase a bigger range.',
      'Pulling back with the arms and hip flexors instead of the abs.',
      'Attempting full rollouts before building up with partial-range reps.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b244',
    name: 'Wide Grip Pull Up',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'advanced',
    movement: 'Pull',
    description: 'A wide-hand vertical pull that biases the outer lats — the go-to bodyweight move for building back width.',
    benefits: [
      'Emphasizes the outer lats to build a wider, more V-tapered back.',
      'Develops serious relative pulling strength using only bodyweight.',
      'Reinforces shoulder stability through a full overhead pulling range.'
    ],
    instructions: [
      'Grip a fixed pull-up bar with palms facing forward and hands set well outside shoulder width.',
      'Hang at full arm extension, then pull your shoulder blades down to engage the lats before moving.',
      'Brace your core and squeeze your glutes to keep your body from swinging.',
      'Pull yourself up by driving your elbows down and out toward your sides until your chin clears the bar.',
      'Pause briefly at the top, focusing on squeezing the outer lats.',
      'Lower yourself under control over 2 to 3 seconds back to a full dead hang.'
    ],
    commonMistakes: [
      'Shortening the range and never reaching a full dead hang, which trains only part of the lift.',
      'Kipping or swinging the legs to generate momentum instead of pulling with the back.',
      'Craning the neck to clear the bar with the chin instead of raising the chest.',
      'Setting the grip so wide that the shoulders are forced into a strained, vulnerable position.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b245',
    name: 'Neutral Grip Pull Up',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A palms-facing vertical pull on parallel handles that hits the lats and biceps while sparing the shoulders and elbows.',
    benefits: [
      'Builds the lats and biceps in a joint-friendly position that\'s easier on the shoulders.',
      'Often allows more reps than a standard pull-up, building pulling volume.',
      'Strengthens the grip and forearms through the neutral hand position.'
    ],
    instructions: [
      'Grip a set of parallel handles with palms facing each other, hands about shoulder width apart.',
      'Hang at full extension and set the lats by pulling your shoulder blades down and back.',
      'Brace your core and cross your ankles to keep your body still.',
      'Pull yourself up by driving your elbows down toward your ribs until your chin clears the handles.',
      'Squeeze the lats and mid-back hard at the top for a brief pause.',
      'Lower yourself slowly over 2 to 3 seconds to a full hang before the next rep.'
    ],
    commonMistakes: [
      'Using a half-range pull and never returning to a dead hang at the bottom.',
      'Swinging the body to kip reps up instead of pulling cleanly.',
      'Letting the shoulders shrug up toward the ears instead of staying packed down.',
      'Rushing the descent and skipping the slow lowering where strength is built.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b246',
    name: 'Scapular Pull Up',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A short-range hang-and-retract drill that strengthens the scapular control and lat engagement behind every pulling movement.',
    benefits: [
      'Teaches the scapular control that makes full pull-ups stronger and safer.',
      'Strengthens the lower traps and lats that stabilize the shoulder blades.',
      'Builds the foundation toward a first pull-up for those still working up to one.'
    ],
    instructions: [
      'Hang from a pull-up bar with palms facing forward and arms completely straight.',
      'Keep your arms locked straight throughout — this is a movement of the shoulder blades only.',
      'Pull your shoulder blades down and together to raise your body a few inches without bending the elbows.',
      'Hold the top position for a second, feeling the lats and lower traps engage.',
      'Lower back down slowly until the shoulders relax and the body hangs at full stretch.',
      'Repeat for controlled reps, keeping every movement slow and deliberate.'
    ],
    commonMistakes: [
      'Bending the elbows and turning it into a partial pull-up instead of a pure scapular movement.',
      'Rushing the reps so fast that the shoulder blades never fully retract or release.',
      'Shrugging the shoulders up instead of pulling them down and together.',
      'Letting the body swing rather than keeping it still and vertical.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b247',
    name: 'Pendlay Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A strict barbell row from a dead stop on the floor each rep — builds explosive mid-back power with zero momentum.',
    benefits: [
      'Builds raw mid-back and lat strength by starting each rep from a dead stop.',
      'Removes momentum so the back does all the work on every pull.',
      'Carries over directly to deadlift strength and bench-press back stability.'
    ],
    instructions: [
      'Set a loaded barbell on the floor and stand with feet hip-width under the bar.',
      'Hinge at the hips until your torso is roughly parallel to the floor with a flat back.',
      'Grip the bar slightly wider than shoulder width with palms facing you.',
      'Pull the bar explosively from the floor to your lower chest, driving the elbows up and back.',
      'Squeeze the shoulder blades together at the top, then lower the bar all the way back to the floor.',
      'Let the bar settle on the floor for a moment to reset before pulling the next rep.'
    ],
    commonMistakes: [
      'Letting the torso rise up with each pull instead of holding the parallel position.',
      'Rounding the lower back as the bar leaves the floor, risking spinal injury.',
      'Bouncing the bar off the floor to cheat the next rep instead of a controlled reset.',
      'Pulling with the arms and shrugging instead of driving the elbows and squeezing the back.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b248',
    name: 'Barbell Underhand Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A bent-over barbell row with an underhand grip and a slightly more upright torso — the classic Yates row that loads the lower lats and biceps.',
    benefits: [
      'Shifts the row emphasis toward the lower lats for back thickness.',
      'Lets you handle heavy load through the more upright, supinated position.',
      'Builds the biceps hard alongside the back from the underhand grip.'
    ],
    instructions: [
      'Grip a barbell about shoulder-width apart with palms facing forward, away from your body.',
      'Hinge at the hips with a flat back until your torso is at roughly a 60-degree angle to the floor.',
      'Brace your core and let the bar hang at arm\'s length below your shoulders.',
      'Pull the bar to your lower abdomen, driving your elbows down and back along your sides.',
      'Squeeze the lats and lower back at the top, keeping the wrists straight.',
      'Lower the bar under control over 2 to 3 seconds back to full arm extension.'
    ],
    commonMistakes: [
      'Standing too upright and turning the movement into a shrug or partial deadlift.',
      'Curling the bar with the biceps instead of leading the pull with the elbows.',
      'Rounding the lower back under the heavier loads this variation invites.',
      'Using leg drive and momentum to heave the bar rather than rowing with control.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b249',
    name: 'Barbell Good Morning',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes', 'upper_legs'],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Hinge',
    description: 'A hip hinge with the bar on your back that overloads the spinal erectors, hamstrings, and glutes — a powerful posterior-chain builder.',
    benefits: [
      'Strengthens the spinal erectors and lower back that protect you under every heavy lift.',
      'Builds the hamstrings and glutes through a deeply loaded hip hinge.',
      'Reinforces the hinge pattern that powers the deadlift.'
    ],
    instructions: [
      'Rack a barbell across your upper back as you would for a squat, with feet shoulder-width apart.',
      'Soften your knees slightly and brace your core hard before you begin.',
      'Push your hips straight back, hinging forward with a flat back until your torso nears parallel to the floor.',
      'Keep the bar path over your midfoot and feel the stretch build through your hamstrings.',
      'Drive your hips forward to stand tall, squeezing the glutes at the top.',
      'Move slowly with a light load until the pattern is grooved, never bouncing at the bottom.'
    ],
    commonMistakes: [
      'Rounding the lower back instead of keeping it flat throughout the hinge.',
      'Bending the knees too much and turning the movement into a squat.',
      'Going too heavy too soon on a lift that punishes poor form severely.',
      'Letting the bar drift forward off the back instead of staying hinged at the hips.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b250',
    name: 'EZ Bar Bent Over Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'ez_bar',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A bent-over row using the angled EZ-bar grips — easier on the wrists while still building the lats, mid-back, and biceps.',
    benefits: [
      'Builds the lats and mid-back while the angled grip eases wrist strain.',
      'Offers a comfortable rowing option for lifters with cranky wrists or elbows.',
      'Trains the biceps and forearms alongside the back.'
    ],
    instructions: [
      'Grip an EZ-bar on its angled sections with palms facing down and back toward you.',
      'Hinge at the hips with a flat back until your torso is around 45 degrees to the floor.',
      'Brace your core and let the bar hang at arm\'s length beneath your shoulders.',
      'Pull the bar to your lower chest, driving your elbows back and keeping them close to your sides.',
      'Squeeze your shoulder blades together at the top for a brief pause.',
      'Lower the bar with control over 2 to 3 seconds to a full stretch.'
    ],
    commonMistakes: [
      'Standing too upright so the back stops doing the work.',
      'Rounding the lower back as you pull under load.',
      'Yanking the bar with momentum instead of a controlled row.',
      'Gripping the straight center of the bar and losing the wrist-friendly angle.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b251',
    name: 'EZ Bar Underhand Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'ez_bar',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Pull',
    description: 'A bent-over EZ-bar row with an underhand grip that drives lower-lat and biceps engagement while sparing the wrists.',
    benefits: [
      'Targets the lower lats through the supinated underhand grip.',
      'Spares the wrists thanks to the angled EZ-bar handles.',
      'Builds the biceps hard alongside the back.'
    ],
    instructions: [
      'Grip an EZ-bar on its angled sections with palms facing up and away from your body.',
      'Hinge forward with a flat back to roughly a 60-degree torso angle.',
      'Brace your core and let the bar hang at arm\'s length below your shoulders.',
      'Pull the bar toward your lower abdomen, driving the elbows down and back.',
      'Squeeze the lats and lower back at the top, keeping the wrists neutral.',
      'Lower the bar slowly over 2 to 3 seconds back to full extension.'
    ],
    commonMistakes: [
      'Letting the torso pop upright and shortening the rowing range.',
      'Pulling with the biceps and bending the wrists instead of leading with the elbows.',
      'Rounding the lower back as fatigue sets in.',
      'Using body english to swing the bar up rather than rowing under control.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b252',
    name: 'Dumbbell Chest Supported Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A two-dumbbell row performed face-down on an incline bench — removes momentum and lower-back strain so the back works in isolation.',
    benefits: [
      'Isolates the lats and mid-back by removing all momentum and cheating.',
      'Takes the lower back out of the lift, making it safe for high volume.',
      'Builds balanced left-and-right back strength with independent dumbbells.'
    ],
    instructions: [
      'Set an adjustable bench to about a 30-degree incline and lie face-down with your chest on the pad.',
      'Hold a dumbbell in each hand, letting them hang straight down at arm\'s length.',
      'Plant your feet and pull your shoulder blades down to set the lats before moving.',
      'Row both dumbbells up toward your hips, driving your elbows up and back.',
      'Squeeze the shoulder blades together hard at the top for a brief pause.',
      'Lower the dumbbells slowly over 2 to 3 seconds to a full stretch.'
    ],
    commonMistakes: [
      'Lifting the chest off the pad to cheat the weight up with momentum.',
      'Shrugging the shoulders toward the ears instead of rowing with the back.',
      'Cutting the range short and never letting the arms fully extend at the bottom.',
      'Flaring the elbows wide so the rear delts take over from the lats.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b253',
    name: 'Dumbbell Renegade Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps', 'abs'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Pull',
    description: 'A plank-position dumbbell row that builds the back while forcing the core to resist rotation — a full-body anti-rotation pull.',
    benefits: [
      'Builds the lats and mid-back while training the core to resist rotation.',
      'Strengthens the shoulders and grip through the plank position.',
      'Delivers a back and core workout in one time-efficient movement.'
    ],
    instructions: [
      'Start in a high plank gripping a dumbbell in each hand, feet set wider than your hips for stability.',
      'Brace your core hard and squeeze your glutes to lock your body into a straight line.',
      'Shift your weight slightly and row one dumbbell up to your hip, keeping your hips square to the floor.',
      'Pause briefly at the top, fighting any urge for your torso to twist.',
      'Lower the dumbbell under control and place it back down before switching sides.',
      'Alternate sides for the prescribed reps, keeping the hips as still as possible throughout.'
    ],
    commonMistakes: [
      'Letting the hips rotate or pike up instead of staying square and flat.',
      'Setting the feet too narrow, which makes balance and anti-rotation far harder.',
      'Rushing through reps so the core never actually resists the rotation.',
      'Sagging the lower back out of the plank, straining the spine.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b254',
    name: 'Dumbbell Deadlift',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes', 'upper_legs'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A hip hinge holding a dumbbell in each hand — a beginner-friendly way to build the lower back, glutes, and hamstrings.',
    benefits: [
      'Builds the lower back, glutes, and hamstrings through a loaded hinge.',
      'Teaches the deadlift pattern with a forgiving, easy-to-control load.',
      'Strengthens the grip and core that stabilize every heavy lift.'
    ],
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand in front of your thighs.',
      'Soften your knees and brace your core before you begin.',
      'Push your hips back and hinge forward with a flat back, lowering the dumbbells along your legs.',
      'Lower until you feel a stretch in your hamstrings, keeping the dumbbells close to your body.',
      'Drive your hips forward to stand tall, squeezing the glutes at the top.',
      'Lower under control on each rep, never rounding the lower back.'
    ],
    commonMistakes: [
      'Rounding the lower back instead of keeping it flat through the hinge.',
      'Squatting the weight down by bending the knees too much instead of hinging.',
      'Letting the dumbbells drift away from the body, straining the lower back.',
      'Jerking the weight up with the back instead of driving through the hips.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b255',
    name: 'Kettlebell Deadlift',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes', 'upper_legs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A hip hinge lifting a single kettlebell from the floor — the foundational pattern that teaches a strong, safe deadlift.',
    benefits: [
      'Teaches the hip-hinge pattern that underpins every deadlift and swing.',
      'Builds the lower back, glutes, and hamstrings with a single, accessible tool.',
      'Strengthens the grip and core through the loaded lift.'
    ],
    instructions: [
      'Stand with feet shoulder-width apart and a kettlebell on the floor between your feet.',
      'Push your hips back and hinge down with a flat back to grip the kettlebell handle with both hands.',
      'Brace your core and pull your shoulders down and back to set the lats.',
      'Drive through your heels and extend your hips to stand tall, lifting the bell straight up.',
      'Squeeze your glutes at the top without leaning back or shrugging.',
      'Hinge at the hips to lower the kettlebell back to the floor under control.'
    ],
    commonMistakes: [
      'Rounding the lower back when reaching down for the bell.',
      'Squatting the weight up with the knees instead of driving through the hips.',
      'Leaning back and overarching at the top instead of standing tall and neutral.',
      'Yanking the kettlebell off the floor rather than lifting it smoothly.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b256',
    name: 'Kettlebell Renegade Row',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps', 'abs'],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'advanced',
    movement: 'Pull',
    description: 'A plank-position kettlebell row that hammers the back and forces the core to resist rotation under an unstable load.',
    benefits: [
      'Builds the lats and mid-back while the core fights to resist rotation.',
      'Strengthens the shoulders and grip in the demanding plank position.',
      'Combines back, core, and stability training in one movement.'
    ],
    instructions: [
      'Set two kettlebells shoulder-width apart and grip the handles in a high plank position.',
      'Set your feet wider than your hips and brace your core to lock your body straight.',
      'Row one kettlebell up to your hip, driving the elbow back while keeping your hips square.',
      'Pause at the top, resisting any twist through the torso.',
      'Lower the kettlebell under control and set it down before switching sides.',
      'Alternate sides for the prescribed reps, keeping the hips level throughout.'
    ],
    commonMistakes: [
      'Allowing the hips to rotate or rise instead of staying square and flat.',
      'Placing the feet too close together, making balance much harder.',
      'Sagging the hips and losing the plank, which strains the lower back.',
      'Rushing the reps so the core never has to control the rotation.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b257',
    name: 'Straight Arm Cable Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A standing cable pulldown with locked arms that isolates the lats through a long arc — pure lat work with no biceps involvement.',
    benefits: [
      'Isolates the lats by removing the biceps from the pulling motion.',
      'Teaches you to feel and engage the lats, improving every other back lift.',
      'Trains the lats through a long stretch-to-contraction arc.'
    ],
    instructions: [
      'Attach a straight bar to a high cable pulley and grip it with palms down at shoulder width.',
      'Step back and hinge slightly forward at the hips with a flat back and a soft bend in the elbows.',
      'Keep your arms nearly straight and locked for the entire movement.',
      'Pull the bar down in a wide arc toward your thighs by contracting the lats.',
      'Squeeze the lats hard at the bottom with the bar near your thighs.',
      'Let the bar rise back up slowly over 2 to 3 seconds until you feel a full lat stretch overhead.'
    ],
    commonMistakes: [
      'Bending the elbows and turning the move into a pressdown or partial pulldown.',
      'Using the lower back to heave the bar down instead of pulling with the lats.',
      'Cutting the top range short and missing the stretch where the lats lengthen.',
      'Going too heavy, which forces the arms to bend and removes the lat isolation.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b258',
    name: 'Wide Grip Lat Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A seated cable pulldown with a wide overhand grip that biases the outer lats for back width.',
    benefits: [
      'Emphasizes the outer lats to build a wider, V-tapered back.',
      'Provides a scalable vertical pull for any strength level.',
      'Bridges the gap toward unassisted wide-grip pull-ups.'
    ],
    instructions: [
      'Sit at a lat pulldown station and lock your thighs under the pad with feet flat.',
      'Grip the bar well outside shoulder width with palms facing forward.',
      'Lean back about 10 to 15 degrees and pull your shoulder blades down to set the lats.',
      'Pull the bar to your upper chest by driving your elbows down and out toward your sides.',
      'Pause at the bottom with the bar near your collarbones, squeezing the outer lats.',
      'Let the bar travel back up slowly over 2 to 3 seconds to a full overhead stretch.'
    ],
    commonMistakes: [
      'Pulling the bar behind the neck, which strains the shoulders for no extra benefit.',
      'Leaning too far back so the movement becomes a row instead of a pulldown.',
      'Yanking with the arms and biceps instead of leading with the elbows.',
      'Letting the stack slam back up and skipping the controlled return.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b259',
    name: 'Reverse Grip Lat Pulldown',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A seated pulldown with a shoulder-width underhand grip that shifts emphasis to the lower lats and biceps.',
    benefits: [
      'Targets the lower lats for back thickness through the supinated grip.',
      'Builds the biceps strongly alongside the back.',
      'Allows a strong, natural pulling line that many lifters can load heavily.'
    ],
    instructions: [
      'Sit at the station and secure your thighs under the pad with feet flat on the floor.',
      'Grip the bar at shoulder width with palms facing you.',
      'Lean back slightly and set the lats by pulling the shoulder blades down.',
      'Pull the bar to your upper chest, driving your elbows straight down toward your hips.',
      'Squeeze the lower lats and mid-back at the bottom for a brief pause.',
      'Return the bar overhead slowly over 2 to 3 seconds to a full stretch.'
    ],
    commonMistakes: [
      'Curling the bar down with the biceps instead of driving with the elbows and back.',
      'Leaning way back and rowing rather than performing a vertical pulldown.',
      'Shortening the range and never reaching a full overhead stretch.',
      'Letting the weight pull the arms up fast instead of controlling the return.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b260',
    name: 'Machine Assisted Pull Up',
    primaryMuscle: 'back',
    secondaryMuscles: ['biceps'],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Pull',
    description: 'A counterweighted machine that supports part of your bodyweight, letting you build toward full pull-ups with clean form.',
    benefits: [
      'Builds pull-up strength by scaling the assistance to your level.',
      'Lets beginners train the full pull-up range they can\'t yet do unassisted.',
      'Strengthens the lats and biceps through a complete vertical pull.'
    ],
    instructions: [
      'Set the assistance weight, then kneel or stand on the machine\'s platform or pad.',
      'Grip the handles with palms forward, slightly wider than shoulder width.',
      'Let your body hang at full extension and set the lats by drawing the shoulder blades down.',
      'Pull yourself up by driving the elbows down until your chin clears the handles.',
      'Pause at the top, squeezing the lats and mid-back.',
      'Lower yourself slowly over 2 to 3 seconds to a full hang before the next rep.'
    ],
    commonMistakes: [
      'Using so much assistance that the back barely works — reduce the help as you get stronger.',
      'Bouncing off the bottom instead of controlling a full hang each rep.',
      'Pulling with the arms and shrugging rather than leading with the back.',
      'Cutting the descent short and missing the controlled lowering phase.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b261',
    name: 'Exercise Ball Back Extension',
    primaryMuscle: 'back',
    secondaryMuscles: ['glutes', 'upper_legs'],
    equipment: 'exercise_ball',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Hinge',
    description: 'A bodyweight spinal extension performed over a stability ball that strengthens the lower-back erectors and glutes through a controlled range.',
    benefits: [
      'Strengthens the spinal erectors that support posture and protect the spine.',
      'Builds the glutes and hamstrings as part of the posterior chain.',
      'Offers a joint-friendly, low-impact way to train the lower back.'
    ],
    instructions: [
      'Lie face-down with your hips and stomach draped over a stability ball, the balls of your feet anchored against a wall or the floor.',
      'Let your torso round gently over the ball with your hands lightly by your head or crossed on your chest.',
      'Brace your core and squeeze your glutes to begin the movement.',
      'Raise your torso by extending the spine until your body forms a straight line from head to heels.',
      'Pause briefly at the top, squeezing the lower back and glutes without overarching.',
      'Lower yourself slowly back over the ball under full control.'
    ],
    commonMistakes: [
      'Hyperextending at the top and cranking the lower back past a neutral line.',
      'Using momentum to bounce up rather than lifting with the erectors.',
      'Letting the ball roll because the feet aren\'t anchored securely.',
      'Jerking the head and neck up instead of moving the whole torso as a unit.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b262',
    name: 'Exercise Ball Prone Cobra',
    primaryMuscle: 'back',
    secondaryMuscles: ['shoulders'],
    equipment: 'exercise_ball',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Core',
    description: 'An upper-back hold performed face-down over a stability ball, drawing the shoulder blades back to build the postural muscles of the mid and upper back.',
    benefits: [
      'Strengthens the lower traps and rhomboids that pull the shoulders back.',
      'Counteracts the rounded, hunched posture from sitting and pressing.',
      'Builds mid- and upper-back endurance with nothing but a ball.'
    ],
    instructions: [
      'Lie face-down over a stability ball with the ball under your hips and lower chest, toes anchored on the floor.',
      'Let your arms hang down with thumbs pointing up and your head in a neutral line.',
      'Brace your core and gently lift your chest off the ball into extension.',
      'Draw your shoulder blades down and back, sweeping your arms out and back like wings.',
      'Hold the squeezed position for a second or two, feeling the upper back work.',
      'Lower your chest and arms back down slowly under control.'
    ],
    commonMistakes: [
      'Cranking the neck up instead of keeping it in line with the spine.',
      'Shrugging the shoulders toward the ears rather than pulling them down and back.',
      'Overarching the lower back to lift higher instead of moving from the upper back.',
      'Rushing through the holds so the postural muscles never fully engage.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b263',
    name: 'Bodyweight Bicep Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bodyweight curl performed by leaning back from a fixed waist-height bar and curling yourself up — biceps isolation with no weights needed.',
    benefits: [
      'Isolates the biceps using only your bodyweight and a fixed bar.',
      'Scales instantly by changing your body angle — more upright is easier, more horizontal is harder.',
      'Builds the supinated curl strength that carries over to every other curl.'
    ],
    instructions: [
      'Set a bar at about waist height in a rack or Smith machine and grip it underhand, hands shoulder width apart.',
      'Walk your feet forward and lean back so your arms are straight and your body forms a straight, angled line.',
      'Brace your core and squeeze your glutes to keep your body rigid from head to heels.',
      'Curl your body up toward the bar by bending only at the elbows, keeping the upper arms still.',
      'Squeeze the biceps hard at the top with your hands near your shoulders.',
      'Lower yourself slowly over 2 to 3 seconds back to full arm extension.'
    ],
    commonMistakes: [
      'Letting the hips sag or pike instead of keeping the body in one rigid line.',
      'Bending at the shoulders and using the back instead of isolating the elbows.',
      'Setting the body too upright so there\'s almost no resistance on the biceps.',
      'Rushing the lowering phase rather than controlling the descent.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b264',
    name: 'Suspension Trainer Bicep Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'bodyweight',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A bodyweight biceps curl on suspension straps — you lean back and curl your body up, hitting the biceps through a smooth, joint-friendly arc.',
    benefits: [
      'Isolates the biceps with adjustable bodyweight resistance on the straps.',
      'Lets you dial difficulty up or down just by changing your foot position.',
      'Trains the biceps while the straps challenge stability and control.'
    ],
    instructions: [
      'Grip the suspension handles with palms facing up and arms extended in front of you.',
      'Walk your feet forward and lean back until your arms are straight and your body is angled and rigid.',
      'Brace your core and squeeze your glutes to hold a straight line from head to heels.',
      'Curl your body up by bending only at the elbows, bringing your hands toward your forehead.',
      'Pause and squeeze the biceps hard at the top of the curl.',
      'Lower yourself slowly over 2 to 3 seconds until your arms are fully straight again.'
    ],
    commonMistakes: [
      'Letting the elbows drift and drop instead of keeping the upper arms fixed and high.',
      'Sagging the hips out of the straight-body line, shifting work off the biceps.',
      'Standing too upright so the straps provide little resistance.',
      'Swinging up with momentum rather than curling under control.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b265',
    name: 'Dumbbell Spider Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A dumbbell curl done face-down on an incline bench with the arms hanging straight — the prone angle kills momentum and keeps constant tension on the biceps peak.',
    benefits: [
      'Maximizes tension on the biceps by removing all body momentum.',
      'Emphasizes the biceps peak through the hanging, prone arm position.',
      'Builds the short head of the biceps with a strict, isolated curl.'
    ],
    instructions: [
      'Set an incline bench to about 45 degrees and lie face-down with your chest against the pad.',
      'Hold a dumbbell in each hand and let your arms hang straight down toward the floor.',
      'Keep your upper arms vertical and still throughout the entire movement.',
      'Curl the dumbbells up toward your shoulders by squeezing the biceps hard.',
      'Pause at the top with a strong peak contraction.',
      'Lower the dumbbells slowly over 2 to 3 seconds to a full stretch.'
    ],
    commonMistakes: [
      'Swinging the upper arms forward instead of keeping them locked vertical.',
      'Cutting the range short and never letting the arms fully straighten at the bottom.',
      'Lifting the chest off the pad to cheat the weight up.',
      'Using too heavy a load, which forces momentum and ruins the isolation.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b266',
    name: 'Dumbbell Cross Body Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A neutral-grip dumbbell curl swept across the body toward the opposite shoulder — builds the brachialis and biceps for thicker-looking arms.',
    benefits: [
      'Builds the brachialis beneath the biceps for greater arm thickness.',
      'Strengthens the forearms through the neutral hammer grip.',
      'Lets you handle solid loads with the strong cross-body line.'
    ],
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing your thighs in a neutral grip.',
      'Keep your elbow pinned to your side and brace your core.',
      'Curl one dumbbell up and across your body toward the opposite shoulder.',
      'Squeeze at the top with the dumbbell near the opposite collarbone.',
      'Lower the dumbbell slowly over 2 to 3 seconds back to your side.',
      'Alternate arms for the prescribed reps, keeping the torso still.'
    ],
    commonMistakes: [
      'Swinging the torso to throw the weight across instead of curling with the arm.',
      'Letting the elbow drift forward off the side of the body.',
      'Rushing the reps and losing the squeeze at the top.',
      'Using momentum on the descent rather than lowering under control.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b267',
    name: 'Dumbbell Zottman Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: ['forearms'],
    equipment: 'dumbbells',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A curl that rotates from underhand on the way up to overhand on the way down — training the biceps in the lift and the forearms in the lowering.',
    benefits: [
      'Trains the biceps and forearms in a single, efficient movement.',
      'Builds forearm and grip strength through the pronated lowering phase.',
      'Develops well-rounded arm strength across two grip positions.'
    ],
    instructions: [
      'Stand tall holding a dumbbell in each hand with palms facing forward in an underhand grip.',
      'Keep your elbows pinned to your sides and curl the dumbbells up to your shoulders.',
      'At the top, rotate your wrists so your palms now face down in an overhand grip.',
      'Lower the dumbbells slowly with the overhand grip, resisting hard with the forearms.',
      'At the bottom, rotate your palms back to facing forward to begin the next rep.',
      'Keep the tempo slow, especially on the lowering phase where the forearms work hardest.'
    ],
    commonMistakes: [
      'Rushing the lowering phase, which is the whole point of the exercise.',
      'Swinging the elbows forward instead of keeping them fixed at your sides.',
      'Going too heavy and losing control during the pronated descent.',
      'Forgetting to rotate the wrists fully at the top and bottom.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b268',
    name: 'Barbell Preacher Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A barbell curl performed with the arms braced on a preacher bench — the locked elbows force strict form and hammer the lower biceps.',
    benefits: [
      'Locks the elbows in place to enforce strict, momentum-free curls.',
      'Emphasizes the lower biceps through the braced-arm position.',
      'Builds peak biceps strength out of a deep stretch.'
    ],
    instructions: [
      'Sit at a preacher bench and rest the backs of your upper arms flat on the pad.',
      'Grip the barbell underhand at shoulder width with your arms extended down the pad.',
      'Brace your core and keep your upper arms pressed into the pad throughout.',
      'Curl the bar up toward your shoulders by contracting the biceps.',
      'Squeeze hard at the top without letting the elbows lift off the pad.',
      'Lower the bar slowly over 2 to 3 seconds until your arms are nearly straight.'
    ],
    commonMistakes: [
      'Lifting the elbows off the pad to cheat the weight up.',
      'Bouncing out of the bottom stretch, which risks elbow strain.',
      'Failing to fully straighten the arms and shortening the range.',
      'Using too much weight and turning the curl into a heave.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b269',
    name: 'Barbell Spider Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'barbell',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A barbell curl done leaning chest-first over an incline bench with the arms hanging — strict, constant-tension biceps work with zero momentum.',
    benefits: [
      'Removes all momentum for pure, isolated biceps tension.',
      'Emphasizes the biceps peak through the hanging arm position.',
      'Builds strict curl strength that exposes and fixes weak points.'
    ],
    instructions: [
      'Set an incline bench to about 45 degrees and lean your chest against the pad facing down.',
      'Grip a barbell underhand at shoulder width and let your arms hang straight toward the floor.',
      'Keep your upper arms vertical and motionless throughout the movement.',
      'Curl the bar up toward your shoulders, squeezing the biceps hard.',
      'Pause at the top for a strong peak contraction.',
      'Lower the bar slowly over 2 to 3 seconds back to a full stretch.'
    ],
    commonMistakes: [
      'Swinging the upper arms forward instead of keeping them locked vertical.',
      'Lifting the chest off the pad to generate momentum.',
      'Cutting the bottom range short and skipping the full stretch.',
      'Loading too heavy, which reintroduces the momentum the exercise is meant to remove.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b270',
    name: 'EZ Bar Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'ez_bar',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'The classic standing biceps curl on an angled EZ-bar — builds the whole biceps while the cambered grip eases strain on the wrists.',
    benefits: [
      'Builds the entire biceps with a comfortable, wrist-friendly grip.',
      'Lets you load heavier than dumbbells for overall biceps mass.',
      'Reduces wrist and elbow strain compared to a straight bar.'
    ],
    instructions: [
      'Stand tall and grip an EZ-bar on its inner angled sections with an underhand grip.',
      'Let the bar hang at arm\'s length against your thighs and pin your elbows to your sides.',
      'Brace your core and keep your upper arms still throughout.',
      'Curl the bar up toward your shoulders by contracting the biceps.',
      'Squeeze hard at the top without swinging the elbows forward.',
      'Lower the bar slowly over 2 to 3 seconds until your arms are fully extended.'
    ],
    commonMistakes: [
      'Swinging the hips and torso to heave the bar up.',
      'Letting the elbows drift forward instead of keeping them at your sides.',
      'Using a partial range and never fully straightening the arms.',
      'Gripping too wide or too narrow and straining the wrists.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b271',
    name: 'EZ Bar Spider Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'ez_bar',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A spider curl on the EZ-bar with the chest braced on an incline bench — strict, constant-tension biceps work that\'s kind to the wrists.',
    benefits: [
      'Combines strict spider-curl isolation with a wrist-friendly grip.',
      'Keeps constant tension on the biceps by removing momentum.',
      'Emphasizes the biceps peak through the hanging arm angle.'
    ],
    instructions: [
      'Set an incline bench to about 45 degrees and lean chest-first against the pad.',
      'Grip an EZ-bar on its angled sections underhand and let your arms hang straight down.',
      'Keep your upper arms vertical and locked in place throughout.',
      'Curl the bar up toward your shoulders, squeezing the biceps at the top.',
      'Pause briefly for a strong peak contraction.',
      'Lower the bar slowly over 2 to 3 seconds to a full stretch.'
    ],
    commonMistakes: [
      'Letting the upper arms swing forward instead of staying vertical.',
      'Lifting the chest off the pad to cheat the rep.',
      'Shortening the range at the bottom and missing the stretch.',
      'Going too heavy, which forces momentum back into the lift.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b272',
    name: 'Cable Rope Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A neutral-grip curl on a cable rope — constant cable tension builds the brachialis and biceps through the full range.',
    benefits: [
      'Keeps constant tension on the biceps and brachialis via the cable.',
      'Builds the brachialis and forearms through the neutral rope grip.',
      'Allows a strong, controlled squeeze at the top of every rep.'
    ],
    instructions: [
      'Attach a rope to a low cable pulley and grip both ends with palms facing each other.',
      'Stand tall a step back from the stack and pin your elbows to your sides.',
      'Brace your core and keep your upper arms still throughout.',
      'Curl the rope up toward your shoulders, spreading the ends slightly at the top.',
      'Squeeze the biceps and brachialis hard at the peak.',
      'Lower the rope slowly over 2 to 3 seconds back to full extension.'
    ],
    commonMistakes: [
      'Leaning back and using the body to pull the weight up.',
      'Letting the elbows drift forward off the sides.',
      'Cutting the range short instead of fully straightening the arms.',
      'Letting the stack yank the arms down rather than controlling the descent.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b273',
    name: 'Cable Single Arm Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A single-arm cable curl that delivers constant tension and lets you fix side-to-side imbalances one arm at a time.',
    benefits: [
      'Provides constant cable tension through the full curl range.',
      'Isolates each arm to correct strength imbalances.',
      'Lets you focus on a strong, deliberate peak contraction.'
    ],
    instructions: [
      'Attach a single handle to a low cable pulley and grip it underhand.',
      'Stand a step back with your elbow pinned to your side and your core braced.',
      'Keep your upper arm still and curl the handle up toward your shoulder.',
      'Squeeze the biceps hard at the top of the rep.',
      'Lower the handle slowly over 2 to 3 seconds to full arm extension.',
      'Complete all reps on one arm, then switch sides.'
    ],
    commonMistakes: [
      'Twisting the torso to help pull the handle up.',
      'Letting the elbow drift forward instead of staying fixed.',
      'Shortening the range and skipping full extension at the bottom.',
      'Rushing the lowering phase rather than controlling it.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b274',
    name: 'Cable Overhead Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A curl performed with the arms out to the sides at a high cable, like a double-biceps pose — maximizes the peak contraction of the biceps.',
    benefits: [
      'Trains the biceps in a fully shortened, peak-contracted position.',
      'Builds the biceps peak through the unique overhead angle.',
      'Keeps constant cable tension across the whole movement.'
    ],
    instructions: [
      'Set two high pulleys and grip a handle in each hand with your arms extended out to your sides.',
      'Stand in the center with your arms raised to shoulder height, palms facing up.',
      'Keep your upper arms fixed and parallel to the floor throughout.',
      'Curl both handles toward your head by squeezing the biceps hard.',
      'Pause at the peak in a double-biceps position.',
      'Return the handles slowly over 2 to 3 seconds to full arm extension.'
    ],
    commonMistakes: [
      'Dropping the upper arms instead of keeping them fixed at shoulder height.',
      'Using the body to lean and pull the handles in.',
      'Going too heavy and losing the strict peak contraction.',
      'Cutting the range short and never fully straightening the arms.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b275',
    name: 'Cable Bayesian Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'intermediate',
    movement: 'Isolation',
    description: 'A single-arm cable curl with the cable running behind your body — the back position keeps the biceps under a deep stretch through the whole rep.',
    benefits: [
      'Loads the biceps in a deep stretch for a strong growth stimulus.',
      'Maintains constant tension through the entire range via the cable.',
      'Isolates each arm to build balanced biceps strength.'
    ],
    instructions: [
      'Set a handle on a low-to-mid pulley, grip it underhand, then step forward so the cable runs behind you.',
      'Let the working arm extend back and down behind your torso to feel a deep stretch in the biceps.',
      'Keep your upper arm roughly fixed and your core braced.',
      'Curl the handle forward and up toward your shoulder, squeezing the biceps at the top.',
      'Lower the handle slowly over 2 to 3 seconds back into the stretched position.',
      'Finish all reps on one arm before switching sides.'
    ],
    commonMistakes: [
      'Stepping too far forward and turning it into a standard curl with no stretch.',
      'Letting the upper arm swing forward instead of keeping it back and fixed.',
      'Using momentum to pull out of the deep stretch instead of curling smoothly.',
      'Going too heavy and losing control in the stretched bottom position.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b276',
    name: 'Machine Seated Bicep Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A seated biceps curl machine that braces the arms on a pad — beginner-friendly isolation with a fixed, guided path.',
    benefits: [
      'Isolates the biceps with a stable, guided movement path.',
      'Braces the arms so beginners can train with strict form.',
      'Makes it easy to load progressively and safely.'
    ],
    instructions: [
      'Sit at the machine and adjust the seat so your armpits rest at the top of the pad.',
      'Rest the backs of your upper arms flat on the pad and grip the handles underhand.',
      'Brace your core and keep your upper arms pressed into the pad.',
      'Curl the handles up toward your shoulders by contracting the biceps.',
      'Squeeze hard at the top of the rep.',
      'Lower the handles slowly over 2 to 3 seconds until your arms are nearly straight.'
    ],
    commonMistakes: [
      'Lifting the upper arms off the pad to cheat the weight up.',
      'Setting the seat wrong so the elbows don\'t line up with the machine\'s pivot.',
      'Failing to fully extend the arms and shortening the range.',
      'Letting the weight stack drop fast instead of controlling the descent.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b277',
    name: 'Kettlebell Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'kettlebells',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A neutral-grip curl holding the kettlebell by the handle — the offset weight challenges the biceps and forearms through the curl.',
    benefits: [
      'Builds the brachialis and biceps through the neutral hammer grip.',
      'Challenges grip and forearm strength via the kettlebell\'s offset load.',
      'Trains stability as the bell\'s weight shifts through the curl.'
    ],
    instructions: [
      'Stand tall holding a kettlebell in each hand by the handle, palms facing each other.',
      'Pin your elbows to your sides and brace your core.',
      'Curl the kettlebells up toward your shoulders, keeping the neutral grip.',
      'Control the bells so they don\'t swing into your forearms at the top.',
      'Squeeze the biceps and brachialis at the peak.',
      'Lower the kettlebells slowly over 2 to 3 seconds to full extension.'
    ],
    commonMistakes: [
      'Letting the bells swing and bang into the wrists at the top.',
      'Swinging the torso to heave the weight up.',
      'Allowing the elbows to drift forward off the sides.',
      'Rushing the descent instead of lowering under control.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b278',
    name: 'Band Hammer Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'bands',
    recordType: 'reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A neutral-grip curl against a resistance band — the band\'s increasing tension hits the biceps and brachialis hardest at the top.',
    benefits: [
      'Builds the brachialis and biceps with the band\'s rising tension.',
      'Loads the top of the curl hardest, where many curls go easy.',
      'Offers a joint-friendly, travel-ready way to train the biceps.'
    ],
    instructions: [
      'Stand on the middle of a resistance band with feet shoulder-width apart.',
      'Grip an end of the band in each hand with palms facing each other.',
      'Pin your elbows to your sides and brace your core.',
      'Curl your hands up toward your shoulders, keeping the neutral grip.',
      'Squeeze the biceps and brachialis hard at the top against the band\'s peak tension.',
      'Lower your hands slowly back down with control to full extension.'
    ],
    commonMistakes: [
      'Letting the band snap the arms back down instead of controlling the descent.',
      'Swinging the torso to help curl against the heavier top tension.',
      'Letting the elbows drift forward off the sides.',
      'Standing on too little of the band, losing tension at the bottom.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  },
  {
    id: 'b279',
    name: 'Machine Preacher Curl',
    primaryMuscle: 'biceps',
    secondaryMuscles: [],
    equipment: 'machine_cable',
    recordType: 'weight_reps',
    difficulty: 'beginner',
    movement: 'Isolation',
    description: 'A plate-stack preacher curl machine with the arms braced on a steep angled pad — locks out momentum and hammers the lower biceps through a deep stretch.',
    benefits: [
      'Locks the arms on the pad to enforce strict, momentum-free curls.',
      'Emphasizes the lower biceps through the deep preacher stretch.',
      'Makes heavy, isolated biceps work easy and safe to load.'
    ],
    instructions: [
      'Sit at the machine and adjust the seat so your armpits rest near the top of the angled pad.',
      'Rest the backs of your upper arms flat on the pad and grip the handles underhand.',
      'Brace your core and keep your upper arms pressed into the pad throughout.',
      'Curl the handles up toward your shoulders by contracting the biceps.',
      'Squeeze hard at the top without letting the elbows lift off the pad.',
      'Lower the handles slowly over 2 to 3 seconds until your arms are nearly straight.'
    ],
    commonMistakes: [
      'Lifting the elbows off the pad to cheat the weight up.',
      'Bouncing out of the deep bottom stretch, which strains the elbows.',
      'Failing to fully straighten the arms and shortening the range.',
      'Setting the seat too low or high so the elbows don\'t align with the machine\'s pivot.'
    ],
    mediaUrl: '',
    exerciseUrl: '',
    custom: false
  }
];

const EXERCISE_LIBRARY = LAROFIT_EXERCISES.reduce((lib, ex) => {
  const key = ex.primaryMuscle;
  if (!lib[key]) lib[key] = [];
  lib[key].push(ex);
  return lib;
}, {});
