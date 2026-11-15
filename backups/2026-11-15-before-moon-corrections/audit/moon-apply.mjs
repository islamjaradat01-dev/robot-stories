import fs from 'node:fs';

const root = 'c:/Users/ASUS/Desktop/nasa/src/data';
const changes = [];
const M = {};
const A = {}; // asset files
const S = {}; // source files

const readJson = (p) => JSON.parse(fs.readFileSync(`${root}/${p}`, 'utf8'));
const get = (id) => (M[id] ??= readJson(`missions/${id}.json`));
const aFile = (f) => (A[f] ??= readJson(`assets/${f}.json`));
const sFile = (f) => (S[f] ??= readJson(`sources/${f}.json`));
const must = (c, msg) => { if (!c) { console.error('ABORT: ' + msg); process.exit(1); } };
const st = (m, id) => { const s = m.stages.find((x) => x.id === id); must(s, `stage ${id} missing in ${m.id}`); return s; };
const fmt = (v) => (v === undefined ? '(none)' : v && typeof v === 'object' && 'en' in v ? `EN: ${v.en}\nAR: ${v.ar ?? ''}` : typeof v === 'object' ? JSON.stringify(v) : String(v));
const rec = (p, mission, where, before, after, src) => changes.push({ p, mission, where, before, after, src });
function setL(p, mid, where, obj, key, val, src) { const b = obj[key]; obj[key] = val; rec(p, mid, where, fmt(b), fmt(val), src); }
function addTo(p, mid, where, arr, item, src, index) {
  if (index === undefined) arr.push(item); else arr.splice(index, 0, item);
  rec(p, mid, where, '(none)', fmt(item.text ?? item.label ?? item.title ?? item.summary ?? item), src);
}
function addSrc(p, mid, where, stage, ids) { for (const id of ids) if (!stage.sourceIds.includes(id)) { stage.sourceIds.push(id); rec(p, mid, `${where} sourceIds`, '(not listed)', id, 'citation fix'); } }
function findAsset(id) { for (const f of ['moon-lm-lrv', 'moon-alsep-surveyor']) { const a = aFile(f).find((x) => x.id === id); if (a) return [f, a]; } must(false, `asset ${id}`); }

// ===================== NEW SOURCES =====================
{
  const s1 = sFile('moon-lm-lrv');
  const add1 = [
    ['moon-lm-lrv-src-csm11', 'Apollo 11 Command and Service Module (1969-059A)', 'NASA NSSDCA', 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A'],
    ['moon-lm-lrv-src-a11o', 'Apollo 11 mission overview', 'NASA', 'https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/'],
    ['moon-lm-lrv-src-where', 'Apollo: Where are they now?', 'NASA NSSDCA', 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html'],
    ['moon-lm-lrv-src-a15d', 'Apollo 15 mission details', 'NASA', 'https://www.nasa.gov/missions/apollo/apollo-15-mission-details/'],
    ['moon-lm-lrv-src-a17d', 'Apollo 17 mission details', 'NASA', 'https://www.nasa.gov/missions/apollo/apollo-17-mission-details/'],
    ['moon-lm-lrv-src-a17h', '50 Years Ago: Apollo 17 Heads Home to Earth', 'NASA History', 'https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/'],
    ['moon-lm-lrv-src-land', 'Apollo Lunar Landings (1969 - 1972)', 'NASA NSSDCA', 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html'],
  ];
  for (const [id, title, publisher, url] of add1) { must(!s1.find((x) => x.id === id), 'dup src ' + id); s1.push({ id, title, publisher, url, accessedOn: '2026-11-15' }); rec('Support', '(shared)', 'sources/moon-lm-lrv.json', '(none)', `${id}: ${title} - ${url}`, url); }
  const s2 = sFile('moon-alsep-surveyor');
  const add2 = [
    ['masv-src-impact', 'Impact sites of Apollo LM and SIVB stages', 'NASA NSSDCA', 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html'],
    ['masv-src-img-s69-59547', 'NASA Image and Video Library: S69-59547', 'NASA', 'https://images.nasa.gov/details/S69-59547'],
  ];
  for (const [id, title, publisher, url] of add2) { must(!s2.find((x) => x.id === id), 'dup src ' + id); s2.push({ id, title, publisher, url, accessedOn: '2026-11-15' }); rec('Support', '(shared)', 'sources/moon-alsep-surveyor.json', '(none)', `${id}: ${title} - ${url}`, url); }
}

// ===================== NEW / UPDATED ASSETS =====================
{
  const lm = aFile('moon-lm-lrv');
  const ms = aFile('moon-alsep-surveyor');
  const push = (arr, a, file) => { must(!arr.find((x) => x.id === a.id), 'dup asset ' + a.id); arr.push(a); rec('Support', '(shared)', `assets/${file}.json`, '(none)', `new asset ${a.id} (${a.nasaId}), credit "${a.credit}"`, a.sourceUrl); };
  push(lm, {
    id: 'moon-lm-lrv-img-as15-falcon-lm', type: 'image', path: 'https://images-assets.nasa.gov/image/as15-086-11600/as15-086-11600~medium.jpg', nasaId: 'as15-086-11600',
    altText: { en: 'The Apollo 15 Lunar Module Falcon at the Hadley-Apennine landing site early in the first moonwalk, before the surface equipment was deployed: gold foil on the descent stage, a United States flag decal, and a mountain behind.', ar: 'المركبة القمرية فالكون في أبولو 15 في موقع هبوط هادلي-الأبنين في بداية السير الأول على القمر، قبل نصب المعدات: رقائق ذهبية على مرحلة الهبوط وشعار علم الولايات المتحدة، وجبل في الخلفية.' },
    credit: 'NASA/JSC', sourceUrl: 'https://images.nasa.gov/details/as15-086-11600', authenticity: 'real',
  }, 'moon-lm-lrv');
  push(lm, {
    id: 'moon-lm-lrv-img-as17-boulder-lrv', type: 'image', path: 'https://images-assets.nasa.gov/image/as17-146-22294/as17-146-22294~medium.jpg', nasaId: 'as17-146-22294',
    altText: { en: 'An Apollo 17 astronaut (NASA says Harrison Schmitt) works beside a huge boulder at Station 6, at the base of North Massif, during the third moonwalk. The front of the Lunar Roving Vehicle, with its dish antenna, is at left. NASA says Cernan took the picture.', ar: 'أحد روّاد أبولو 17 (تقول ناسا إنه هاريسون شميت) يعمل بجانب صخرة ضخمة عند المحطة 6، عند سفح ماسيف الشمالي، خلال السير الثالث على القمر. ويظهر في اليسار مقدّمة المركبة الجوالة القمرية بهوائيها الطبقي. وتقول ناسا إن سيرنان التقط الصورة.' },
    credit: 'NASA/JSC', sourceUrl: 'https://images.nasa.gov/details/as17-146-22294', authenticity: 'real',
  }, 'moon-lm-lrv');
  push(ms, {
    id: 'masv-img-as12-47-6919', type: 'image', path: 'https://images-assets.nasa.gov/image/as12-47-6919/as12-47-6919~medium.jpg', nasaId: 'as12-47-6919',
    altText: { en: 'Astronaut Alan Bean deploys components of the Apollo Lunar Surface Experiments Package (ALSEP) on the Moon during the first Apollo 12 moonwalk. NASA says Charles Conrad took the photo.', ar: 'رائد الفضاء آلان بين ينصب مكوّنات حزمة التجارب السطحية القمرية (ALSEP) على القمر خلال السير الأول في أبولو 12. وتقول ناسا إن تشارلز كونراد التقط الصورة.' },
    credit: 'NASA/JSC', sourceUrl: 'https://images.nasa.gov/details/as12-47-6919', authenticity: 'real',
  }, 'moon-alsep-surveyor');
  push(ms, {
    id: 'masv-img-s69-59547', type: 'image', path: 'https://images-assets.nasa.gov/image/S69-59547/S69-59547~medium.jpg', nasaId: 'S69-59547',
    altText: { en: 'A black-and-white strip chart dated 20 November 1969: the seismometer reading from the impact of the Apollo 12 Lunar Module ascent stage on the Moon. NASA says the Passive Seismic Experiment Package deployed by the Apollo 12 astronauts registered the impact.', ar: 'شريط رسم بياني بالأبيض والأسود مؤرّخ في 20 نوفمبر 1969: قراءة مقياس الزلازل لاصطدام مرحلة الصعود من المركبة القمرية في أبولو 12 بالقمر. وتقول ناسا إن حزمة التجربة السيزمية السلبية التي نصبها روّاد أبولو 12 سجّلت الاصطدام.' },
    credit: 'NASA/JSC', sourceUrl: 'https://images.nasa.gov/details/S69-59547', authenticity: 'real',
  }, 'moon-alsep-surveyor');
  push(ms, {
    id: 'masv-img-pia12978', type: 'image', path: 'https://images-assets.nasa.gov/image/PIA12978/PIA12978~small.jpg', nasaId: 'PIA12978',
    altText: { en: 'View from orbit by NASA\'s Lunar Reconnaissance Orbiter of the Surveyor 6 lander on the plains of Sinus Medii. The lander is a tiny bright spot with a long thin shadow (enlarged in the inset; the scale bar is 50 m). NASA says the lander casts an 18-meter shadow with the Sun just 8 degrees above the horizon.', ar: 'منظر من المدار التقطه مسبار استطلاع القمر التابع لناسا للمركبة الهابطة سيرفيور 6 على سهول خليج الوسط. تبدو المركبة بقعة صغيرة لامعة يمتد منها ظل طويل رفيع (مكبّرة في الإطار الصغير، وشريط المقياس 50 م). وتقول ناسا إن المركبة تُلقي ظلاً طوله 18 متراً والشمس على ارتفاع 8 درجات فقط فوق الأفق.' },
    credit: 'NASA/GSFC/Arizona State University', sourceUrl: 'https://images.nasa.gov/details/PIA12978', authenticity: 'real',
  }, 'moon-alsep-surveyor');

  // updates to existing assets (alt text / credit)
  const upd = (id, fn, p, why) => { const [f, a] = findAsset(id); const before = `credit: ${a.credit} | alt EN: ${a.altText.en}`; fn(a); rec(p, '(assets)', `assets/${f}.json ${id}`, before, `credit: ${a.credit} | alt EN: ${a.altText.en}\nalt AR: ${a.altText.ar}`, why); };
  upd('moon-lm-lrv-img-as11-aldrin-lm', (a) => { a.altText = { en: 'Buzz Aldrin removes scientific experiment packages from a stowage area in the descent stage of the Apollo 11 Lunar Module Eagle on the Moon (NASA\'s caption).', ar: 'باز ألدرين يُخرج حزم التجارب العلمية من منطقة التخزين في مرحلة هبوط المركبة القمرية إيغل في أبولو 11 على القمر (وصف ناسا).' }; a.credit = 'NASA (KSC archive copy)'; }, 'Medium/Low', 'https://images.nasa.gov/details/KSC-as11-40-5927');
  upd('moon-lm-lrv-img-as17-lrv-closeup', (a) => { a.altText = { en: 'Close-up of the Apollo 17 Lunar Roving Vehicle, photographed by Cernan, with a makeshift repair on its right rear fender; Schmitt is seated in the rover. NASA says a hammer knocked part of the fender off during the first moonwalk and the crew repaired it early in the second, using lunar maps and clamps.', ar: 'صورة قريبة للمركبة الجوالة القمرية في أبولو 17 التقطها سيرنان، وفيها إصلاح مؤقت للرفرف الخلفي الأيمن؛ ويجلس شميت في المركبة. وتقول ناسا إن مطرقة أطاحت بجزء من الرفرف خلال السير الأول، وأصلحه الرائدان في بداية السير الثاني باستخدام خرائط قمرية ومشابك.' }; }, 'Medium', 'https://images.nasa.gov/details/as17-137-20979');
  upd('moon-lm-lrv-img-as17-cernan-drives', (a) => { a.altText = { en: 'Astronaut Eugene Cernan makes a short checkout of the "stripped down" Lunar Roving Vehicle early in the first Apollo 17 moonwalk, before it was loaded with equipment. (NASA\'s title says "drives"; NASA\'s description says "short checkout".)', ar: 'رائد الفضاء يوجين سيرنان يجري فحصاً قصيراً للمركبة الجوالة القمرية «المجرّدة» في بداية السير الأول في أبولو 17، قبل تحميلها بالمعدات. (يقول عنوان ناسا «يقود»، أما وصفها فيقول «فحص قصير».)' }; }, 'High', 'https://images.nasa.gov/details/as17-147-22526');
  for (const id of ['masv-img-as12-48-7134', 'masv-img-as12-48-7133']) {
    upd(id, (a) => { a.altText = { en: 'Apollo 12 photograph from the second moonwalk: the unmanned Surveyor 3 in the foreground with an astronaut examining its TV camera, and the Apollo 12 Lunar Module in the background.', ar: 'صورة من أبولو 12 التُقطت خلال السير الثاني على القمر: المركبة الآلية سيرفيور 3 في المقدمة وأحد الرائدين يفحص كاميرتها التلفزيونية، والمركبة القمرية لأبولو 12 في الخلفية.' }; a.credit = 'NASA'; }, 'Low', 'https://science.nasa.gov/mission/surveyor-3/ ("Credit: NASA"); https://images.nasa.gov/details/' + id.replace('masv-img-', '').replace('as12-48-', 'AS12-48-'));
  }
}

// ===================== CRITICAL + HIGH + MEDIUM + LOW: per mission =====================

// ---------- LRV Apollo 17 ----------
{
  const id = 'lrv-apollo-17'; const m = get(id);
  const S_LRV = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html', S_LM17 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C', S_A17D = 'https://www.nasa.gov/missions/apollo/apollo-17-mission-details/', S_A17H = 'https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/';
  // C1 distance
  setL('Critical', id, 'card.tagline', m.card, 'tagline', { en: 'The moon buggy that drove farthest of the three. NASA pages give its total distance as about 30 to 35.9 km, and do not say where it ended up.', ar: 'المركبة الجوالة القمرية التي قطعت أكبر مسافة بين الثلاث. تذكر صفحات ناسا مسافتها الإجمالية بين نحو 30 و35.9 كم، ولا تذكر أين انتهى بها المطاف.' }, `${S_LRV} ; ${S_LM17} ; ${S_A17D}`);
  const s4 = st(m, 'lrv17-4');
  setL('Critical', id, 'lrv17-4 basicText', s4, 'basicText', { en: 'Cernan and Schmitt drove this rover for 4 hours 26 minutes. NASA pages give its total as 35.9 km, 30.5 km or about 30 km. The longest single trip was 20.1 km, and the farthest from the Lunar Module 7.6 km.', ar: 'قاد سيرنان وشميت هذه المركبة 4 ساعات و26 دقيقة. وتذكر صفحات ناسا مسافتها الإجمالية 35.9 كم أو 30.5 كم أو نحو 30 كم. وكانت أطول رحلة 20.1 كم، وأبعد نقطة عن المركبة القمرية 7.6 كم.' }, `${S_LRV} ; ${S_LM17} ; ${S_A17D}`);
  setL('Critical', id, 'lrv17-4 exploreMoreText', s4, 'exploreMoreText', { en: 'Of the three rovers driven, Apollo 17\'s covered the most distance under every NASA total: Apollo 15 drove 27.8 km and Apollo 16 drove 26.7 km. The 35.9 km figure is on NSSDCA\'s rover page. NSSDCA\'s Lunar Module page says the crew "covered 30 km", and NASA\'s Apollo 17 mission details say the rover "traversed a total of 30.5 kilometers". NASA does not say why they differ.', ar: 'من بين المركبات الثلاث التي قيدت، قطعت مركبة أبولو 17 أكبر مسافة وفق كل مجموع تذكره ناسا: فأبولو 15 قطعت 27.8 كم وأبولو 16 قطعت 26.7 كم. ورقم 35.9 كم وارد في صفحة المركبة الجوالة لدى NSSDCA، بينما تقول صفحة المركبة القمرية لديها إن الرائدين «قطعا 30 كم»، وتقول تفاصيل مهمة أبولو 17 لدى ناسا إن المركبة «قطعت ما مجموعه 30.5 كيلومتراً». ولا تذكر ناسا سبب هذا الاختلاف.' }, `${S_LRV} ; ${S_LM17} ; ${S_A17D}`);
  const oldF1 = fmt(s4.facts[0].text);
  s4.facts = [
    { id: 'f1', text: { en: 'Apollo 17 total distance: 35.9 km in 4 h 26 min (NSSDCA rover page); 30.5 km (NASA Apollo 17 mission details); "30 km" covered by the crew (NSSDCA Lunar Module page).', ar: 'المسافة الإجمالية في أبولو 17: 35.9 كم في 4 س و26 د (صفحة المركبة الجوالة لدى NSSDCA)؛ 30.5 كم (تفاصيل مهمة أبولو 17 لدى ناسا)؛ «30 كم» قطعها الرائدان (صفحة المركبة القمرية لدى NSSDCA).' }, sourceId: 'moon-lm-lrv-src-lrv', basis: 'disputed', note: { en: 'NASA pages differ and do not explain why.', ar: 'تختلف صفحات ناسا ولا تشرح السبب.' } },
    { id: 'f2', text: { en: 'Longest single traverse 20.1 km; greatest range from the Lunar Module 7.6 km.', ar: 'أطول مسار 20.1 كم؛ أبعد مدى عن المركبة القمرية 7.6 كم.' }, sourceId: 'moon-lm-lrv-src-lrv', basis: 'nasa-page' },
  ];
  rec('Critical', id, 'lrv17-4 facts f1/f2', oldF1, fmt(s4.facts[0].text) + '\n+ f2: ' + s4.facts[1].text.en, `${S_LRV} ; ${S_LM17} ; ${S_A17D}`);
  addSrc('Critical', id, 'lrv17-4', s4, ['moon-lm-lrv-src-lm17', 'moon-lm-lrv-src-a17d']);
  const oldQ = JSON.stringify(s4.quiz.prompt) + ' *' + s4.quiz.options.find((o) => o.isCorrect).label.en;
  s4.quiz = {
    prompt: { en: 'Which of the three rovers driven on the Moon covered the most distance?', ar: 'أي المركبات الجوالة الثلاث التي قيدت على القمر قطعت أكبر مسافة؟' },
    options: [
      { label: { en: 'Apollo 17\'s rover', ar: 'مركبة أبولو 17' }, isCorrect: true },
      { label: { en: 'Apollo 15\'s rover', ar: 'مركبة أبولو 15' }, isCorrect: false },
      { label: { en: 'Apollo 16\'s rover', ar: 'مركبة أبولو 16' }, isCorrect: false },
    ],
    explanation: { en: 'NASA gives 27.8 km for Apollo 15 and 26.7 km for Apollo 16. For Apollo 17 NASA pages give 30 to 35.9 km, so it is the longest under every figure.', ar: 'تذكر ناسا 27.8 كم لأبولو 15 و26.7 كم لأبولو 16. أما لأبولو 17 فتذكر صفحات ناسا بين 30 و35.9 كم، فهي الأطول وفق كل الأرقام.' },
  };
  rec('Critical', id, 'lrv17-4 quiz', oldQ, `Which of the three rovers driven on the Moon covered the most distance? *Apollo 17's rover`, `${S_LRV} ; ${S_A17D}`);
  setL('Critical', id, 'ending.legacyText', m.ending, 'legacyText', { en: 'Three Lunar Roving Vehicles were driven on the Moon. This one made the longest drives of the three; NASA pages give its total as 30 to 35.9 km.', ar: 'قيدت ثلاث مركبات جوالة قمرية على القمر. وهذه قامت بأطول الرحلات بين الثلاث؛ وتذكر صفحات ناسا مسافتها الإجمالية بين 30 و35.9 كم.' }, `${S_LRV} ; ${S_LM17} ; ${S_A17D}`);
  // timeline: remove challenge entry; add rover events
  const tcl = m.timeline.findIndex((t) => t.id === 't-claim'); const removed = m.timeline.splice(tcl, 1)[0];
  rec('High', id, 'timeline t-claim', fmt(removed.label) + ` [${removed.dateLabel}]`, '(removed: not a mission event; the claim stays in the ending chapter, labelled challenge-page)', 'CH');
  const idxAlsep = m.timeline.findIndex((t) => t.id === 't-alsep');
  addTo('Medium', id, 'timeline t-eva1', m.timeline, { id: 't-eva1', dateLabel: '1972-12-11', label: { en: 'First moonwalk (23:54 UT 11 Dec to 07:06 UT 12 Dec): the rover is deployed and driven and the ALSEP is set up', ar: 'السير الأول على القمر (23:54 بالتوقيت العالمي في 11 ديسمبر حتى 07:06 في 12 ديسمبر): تُنشر المركبة الجوالة وتُقاد وتُنصب محطة ALSEP' }, sourceId: 'moon-lm-lrv-src-lm17', basis: 'nasa-page' }, S_LM17, idxAlsep);
  addTo('High', id, 'timeline t-liftoff', m.timeline, { id: 't-liftoff', dateLabel: '1972-12-14', label: { en: 'The Lunar Module lifts off; NASA History says controllers aimed the rover\'s TV camera to track it', ar: 'تقلع المركبة القمرية؛ وتقول ناسا في تاريخها إن المتحكمين وجّهوا كاميرا تلفزيون المركبة الجوالة لتتبّعها' }, sourceId: 'moon-lm-lrv-src-a17h', basis: 'nasa-page' }, S_A17H, m.timeline.findIndex((t) => t.id === 't-jettison'));
  // ending: TV camera evidence
  const s5 = st(m, 'lrv17-5');
  setL('High', id, 'lrv17-5 basicText', s5, 'basicText', { en: 'NASA pages we read do not say where this rover ended up, or that it was left. NASA History says controllers aimed its TV camera at the Lunar Module for liftoff. The challenge page says rovers were "parked permanently": only its claim.', ar: 'لا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف ولا أنها تُركت. وتقول ناسا في تاريخها إن المتحكمين وجّهوا كاميرا تلفزيونها نحو المركبة القمرية عند الإقلاع. وتقول صفحة التحدي إن المركبات «أُوقفت بصورة دائمة»، وهذا ادعاؤها وحدها.' }, S_A17H);
  addTo('High', id, 'lrv17-5 fact f3', s5.facts, { id: 'f3', text: { en: 'NASA History: controller Ed Fendell "remotely aimed the Rover\'s TV camera on the LM", and "had to command the camera to pan upward several seconds ahead of the actual liftoff to track Challenger as it rose". For the ascent stage\'s impact, "Fendell could not capture the event with the Rover\'s camera" because the impact point was uncertain.', ar: 'تاريخ ناسا: المتحكم إد فيندل «وجّه عن بُعد كاميرا تلفزيون المركبة الجوالة نحو المركبة القمرية»، و«كان عليه أن يأمر الكاميرا بالدوران للأعلى قبل لحظة الإقلاع الفعلية بثوانٍ لتتبّع تشالنجر وهي ترتفع». أما اصطدام مرحلة الصعود فـ«لم يستطع فيندل التقاطه بكاميرا المركبة الجوالة» لعدم اليقين بموضع الاصطدام. (الترجمة العربية من إعدادنا.)' }, sourceId: 'moon-lm-lrv-src-a17h', basis: 'nasa-page' }, S_A17H);
  addSrc('High', id, 'lrv17-5', s5, ['moon-lm-lrv-src-a17h']);
  setL('High', id, 'ending.finalChapterText', m.ending, 'finalChapterText', { en: 'The challenge page says the Lunar Roving Vehicles were "parked permanently on the Moon". NASA pages we read do not state the rover\'s final location, or that it was left on the Moon. NASA History says controllers aimed the rover\'s TV camera at the Lunar Module for its liftoff. We therefore cannot say where the rover is.', ar: 'تقول صفحة التحدي إن المركبات الجوالة القمرية «أُوقفت بصورة دائمة على القمر». ولا تذكر صفحات ناسا التي قرأناها موقع المركبة النهائي ولا أنها تُركت على القمر. وتقول ناسا في تاريخها إن المتحكمين وجّهوا كاميرا تلفزيون المركبة الجوالة نحو المركبة القمرية عند إقلاعها. لذلك لا نستطيع القول أين هي المركبة.' }, S_A17H);
  // images
  setL('High', id, 'card.assetId', m.card, 'assetId', 'moon-lm-lrv-img-as17-lrv-closeup', 'https://images.nasa.gov/details/as17-137-20979');
  setL('High', id, 'intro.assetId', m.intro, 'assetId', 'moon-lm-lrv-img-as17-lrv-closeup', 'https://images.nasa.gov/details/as17-137-20979');
  const g4 = s4.assets.find((a) => a.role === 'gallery'); setL('High', id, 'lrv17-4 gallery image', g4, 'assetId', 'moon-lm-lrv-img-as17-boulder-lrv', 'https://images.nasa.gov/details/as17-146-22294');
  const s3 = st(m, 'lrv17-3'); s3.assets.push({ assetId: 'moon-lm-lrv-img-as17-cernan-drives', role: 'gallery' });
  rec('High', id, 'lrv17-3 gallery image', '(no photo)', 'as17-147-22526 (short checkout of the unloaded rover) with corrected description', 'https://images.nasa.gov/details/as17-147-22526');
  // L: Schmitt quote
  const s6 = st(m, 'lrv17-6');
  addTo('Medium', id, 'lrv17-6 fact f1 (Schmitt quote)', s6.facts, { id: 'f1', text: { en: 'Apollo 17 astronaut Harrison Schmitt, quoted by NSSDCA: "Without it, the major scientific discoveries of Apollo 15, 16, and 17 would not have been possible."', ar: 'يقول رائد أبولو 17 هاريسون شميت، كما يقتبسه NSSDCA: «من دونها ما كانت الاكتشافات العلمية الكبرى لأبولو 15 و16 و17 ممكنة». (الترجمة العربية من إعدادنا.)' }, sourceId: 'moon-lm-lrv-src-lrv', basis: 'nasa-page' }, S_LRV);
}

// ---------- LRV Apollo 15 ----------
{
  const id = 'lrv-apollo-15'; const m = get(id);
  const S_LRV = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html', S_LM15 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C', S_A15D = 'https://www.nasa.gov/missions/apollo/apollo-15-mission-details/';
  setL('High', id, 'card.tagline', m.card, 'tagline', { en: 'An electric moon buggy that drove 27.8 km. NASA pages we read do not say where it ended up.', ar: 'مركبة جوالة قمرية كهربائية قطعت 27.8 كم. ولا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف.' }, 'LRV / A15D (wording)');
  const tcl = m.timeline.findIndex((t) => t.id === 't-claim'); const removed = m.timeline.splice(tcl, 1)[0];
  rec('High', id, 'timeline t-claim', fmt(removed.label) + ` [${removed.dateLabel}]`, '(removed: "2026" is not a mission date; the claim stays in the ending chapter, labelled challenge-page)', 'CH');
  const ia = m.timeline.findIndex((t) => t.id === 't-alsep');
  addTo('Medium', id, 'timeline t-eva1', m.timeline, { id: 't-eva1', dateLabel: '1971-07-31', label: { en: 'First moonwalk (13:13 to 19:46 UT): the rover is unloaded, deployed and driven; the first traverse is 10.3 km', ar: 'السير الأول على القمر (13:13 إلى 19:46 بالتوقيت العالمي): تُنزَّل المركبة الجوالة وتُنشر وتُقاد؛ وتبلغ الرحلة الأولى 10.3 كم' }, sourceId: 'moon-lm-lrv-src-lm15', basis: 'nasa-page' }, S_LM15, ia);
  const ia2 = m.timeline.findIndex((t) => t.id === 't-alsep') + 1;
  addTo('Medium', id, 'timeline t-eva2', m.timeline, { id: 't-eva2', dateLabel: '1971-08-01', label: { en: 'Second moonwalk: the rover is driven on a 12.5 km traverse', ar: 'السير الثاني على القمر: تُقاد المركبة الجوالة في رحلة طولها 12.5 كم' }, sourceId: 'moon-lm-lrv-src-lm15', basis: 'nasa-page' }, S_LM15, ia2);
  addTo('Medium', id, 'timeline t-eva3', m.timeline, { id: 't-eva3', dateLabel: '1971-08-02', label: { en: 'Third moonwalk: the rover is driven a total of 5.1 km', ar: 'السير الثالث على القمر: تقطع المركبة الجوالة 5.1 كم في المجموع' }, sourceId: 'moon-lm-lrv-src-lm15', basis: 'nasa-page' }, S_LM15, ia2 + 1);
  addTo('High', id, 'timeline t-liftoff', m.timeline, { id: 't-liftoff', dateLabel: '1971-08-02', label: { en: 'The Lunar Module lifts off, and the liftoff is seen on Earth via the rover\'s TV camera', ar: 'تقلع المركبة القمرية، ويُرى الإقلاع على الأرض عبر كاميرا تلفزيون المركبة الجوالة' }, sourceId: 'moon-lm-lrv-src-a15d', basis: 'nasa-page' }, S_A15D, ia2 + 2);
  const s5 = st(m, 'lrv15-5');
  setL('High', id, 'lrv15-5 basicText', s5, 'basicText', { en: 'NASA pages we read do not say where this rover ended up, or that it was left. NASA does say its TV camera showed the Lunar Module\'s liftoff to Earth. The challenge page says rovers were "parked permanently": only its claim.', ar: 'لا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف ولا أنها تُركت. وتذكر ناسا أن كاميرا تلفزيون المركبة نقلت إقلاع المركبة القمرية إلى الأرض. وتقول صفحة التحدي إن المركبات «أُوقفت بصورة دائمة»، وهذا ادعاؤها وحدها.' }, S_A15D);
  addTo('High', id, 'lrv15-5 fact f3', s5.facts, { id: 'f3', text: { en: 'NASA\'s Apollo 15 mission details: "For the first time, the lunar liftoff was seen on Earth via the LRV television camera."', ar: 'تفاصيل مهمة أبولو 15 لدى ناسا: «للمرة الأولى، شوهد إقلاع المركبة القمرية على الأرض عبر كاميرا التلفزيون في المركبة الجوالة». (الترجمة العربية من إعدادنا.)' }, sourceId: 'moon-lm-lrv-src-a15d', basis: 'nasa-page' }, S_A15D);
  addSrc('High', id, 'lrv15-5', s5, ['moon-lm-lrv-src-a15d']);
  setL('High', id, 'ending.finalChapterText', m.ending, 'finalChapterText', { en: 'The challenge page says the Lunar Roving Vehicles were "parked permanently on the Moon". NASA pages we read do not state the rover\'s final location, or that it was left on the Moon. NASA\'s Apollo 15 mission details say the lunar liftoff was seen on Earth via the rover\'s television camera. We therefore cannot say where the rover is.', ar: 'تقول صفحة التحدي إن المركبات الجوالة القمرية «أُوقفت بصورة دائمة على القمر». ولا تذكر صفحات ناسا التي قرأناها موقع المركبة النهائي ولا أنها تُركت على القمر. وتقول تفاصيل مهمة أبولو 15 لدى ناسا إن إقلاع المركبة القمرية شوهد على الأرض عبر كاميرا تلفزيون المركبة الجوالة. لذلك لا نستطيع القول أين هي المركبة.' }, S_A15D);
  const s6 = st(m, 'lrv15-6');
  addTo('Medium', id, 'lrv15-6 fact f1 (Schmitt quote)', s6.facts, { id: 'f1', text: { en: 'Apollo 17 astronaut Harrison Schmitt, quoted by NSSDCA: "Without it, the major scientific discoveries of Apollo 15, 16, and 17 would not have been possible."', ar: 'يقول رائد أبولو 17 هاريسون شميت، كما يقتبسه NSSDCA: «من دونها ما كانت الاكتشافات العلمية الكبرى لأبولو 15 و16 و17 ممكنة». (الترجمة العربية من إعدادنا.)' }, sourceId: 'moon-lm-lrv-src-lrv', basis: 'nasa-page' }, S_LRV);
}

// ---------- ALSEP Apollo 12 ----------
{
  const id = 'alsep-apollo-12'; const m = get(id);
  const S_LM12 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C', S_IMP = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html', S_SITES = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html', S_IMG = 'https://images.nasa.gov/details/S69-59547';
  const s4 = st(m, 'alsep12-4');
  setL('Critical', id, 'alsep12-4 basicText', s4, 'basicText', { en: 'A SNAP-27 radioisotope generator powered the station. NASA says it produced approximately 70 watts, and 63.5 watts after one year.', ar: 'زوّد مولّد النظائر المشعة SNAP-27 المحطة بالطاقة. وتقول ناسا إنه أنتج نحو 70 واط، و63.5 واط بعد سنة.' }, S_LM12);
  setL('Critical', id, 'alsep12-4 exploreMoreText', s4, 'exploreMoreText', { en: 'Its fuel was an approximately 4 kg capsule containing plutonium-238. The whole generator had a mass of 17 kg.', ar: 'كان وقوده أسطوانة تزن نحو 4 كغ تحتوي على البلوتونيوم-238، وبلغت كتلة المولّد كله 17 كغ.' }, S_LM12);
  setL('Critical', id, 'alsep12-4 fact f1', s4.facts[0], 'text', { en: 'SNAP-27: approximately 70 W DC at 16 V; 63.5 W after one year.', ar: 'SNAP-27: نحو 70 واط تيار مستمر بجهد 16 فولت؛ و63.5 واط بعد سنة.' }, S_LM12);
  // coordinates (Low L3)
  setL('Low', id, 'intro.whereGoing', m.intro, 'whereGoing', { en: 'Oceanus Procellarum on the Moon, at about 3.01° S, 23.42° W.', ar: 'محيط العواصف على القمر، عند نحو 3.01° جنوباً و23.42° غرباً.' }, S_LM12 + ' ; ' + S_SITES);
  setL('Low', id, 'unit.restingPlace', m.units[0], 'restingPlace', { en: 'Deployed and left on the lunar surface at about 3.01° S, 23.42° W', ar: 'نُصبت وتُركت على سطح القمر عند نحو 3.01° جنوباً و23.42° غرباً' }, S_LM12 + ' ; ' + S_SITES);
  const s3 = st(m, 'alsep12-3');
  setL('Low', id, 'alsep12-3 basicText', s3, 'basicText', { en: 'The Apollo 12 ALSEP central station was turned on at 14:21 UT on 19 November 1969, at about 3.01° S, 23.42° W.', ar: 'شُغّلت المحطة المركزية لـ ALSEP في أبولو 12 الساعة 14:21 بالتوقيت العالمي في 19 نوفمبر 1969، عند نحو 3.01° جنوباً و23.42° غرباً.' }, S_LM12 + ' ; ' + S_SITES);
  addTo('Low', id, 'alsep12-3 fact f2 (coordinates)', s3.facts, { id: 'f2', text: { en: 'NSSDCA\'s Lunar Module page gives the central station at 3.0094° S, 23.4246° W; its landing-site table gives 3.0098° S, 23.4249° W.', ar: 'تذكر صفحة المركبة القمرية لدى NSSDCA أن المحطة المركزية عند 3.0094° جنوباً و23.4246° غرباً، بينما يذكر جدول مواقع الهبوط لديها 3.0098° جنوباً و23.4249° غرباً.' }, sourceId: 'masv-src-a12', basis: 'disputed', note: { en: 'The two NASA pages differ by about 12 m; we say "about".', ar: 'تختلف الصفحتان بنحو 12 م؛ ولذلك نقول «نحو».' } }, S_LM12 + ' ; ' + S_SITES);
  // M3 + H: impact
  const tq = m.timeline.find((t) => t.id === 't-quake');
  setL('Medium', id, 'timeline t-quake', tq, 'dateLabel', '1969-11-20', S_IMP); setL('Medium', id, 'timeline t-quake label', tq, 'label', { en: 'The lunar module\'s ascent stage is crashed into the Moon about 60 km from the seismic station, making the first recorded artificial moonquake (22:17 UT)', ar: 'تُصطدم مرحلة الصعود من المركبة القمرية بالقمر على بعد نحو 60 كم من محطة قياس الزلازل، فتُسجَّل أول هزة قمرية صناعية (22:17 بالتوقيت العالمي)' }, S_LM12 + ' ; ' + S_IMP);
  const s5 = st(m, 'alsep12-5');
  setL('Medium', id, 'alsep12-5 basicText', s5, 'basicText', { en: 'On 20 November 1969 the lunar module\'s ascent stage was intentionally crashed into the Moon about 60 km from the seismic station. NASA says this made the first recorded artificial moonquake.', ar: 'في 20 نوفمبر 1969 اصطدمت مرحلة الصعود من المركبة القمرية عمداً بالقمر على بعد نحو 60 كم من محطة قياس الزلازل. وتقول ناسا إن ذلك أحدث أول هزة قمرية صناعية مسجّلة.' }, S_LM12 + ' ; ' + S_IMP);
  addTo('Medium', id, 'alsep12-5 fact f2 (impact time)', s5.facts, { id: 'f2', text: { en: 'Impact: 20 November 1969, 22:17:17.7 UT, at 3.94° S, 21.20° W (NSSDCA, Earth-received time).', ar: 'الاصطدام: 20 نوفمبر 1969 الساعة 22:17:17.7 بالتوقيت العالمي عند 3.94° جنوباً و21.20° غرباً (NSSDCA، وقت الاستقبال على الأرض).' }, sourceId: 'masv-src-impact', basis: 'nasa-page' }, S_IMP);
  addTo('Medium', id, 'alsep12-5 fact f3 (seismometer registered it)', s5.facts, { id: 'f3', text: { en: 'NASA\'s caption for the seismometer record: "The impact was registered by the Passive Seismic Experiment Package which was deployed on the moon by the Apollo 12 astronauts."', ar: 'يقول وصف ناسا لسجل مقياس الزلازل: «سُجّل الاصطدام بواسطة حزمة التجربة السيزمية السلبية التي نصبها روّاد أبولو 12 على القمر». (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-img-s69-59547', basis: 'nasa-page' }, S_IMG);
  addSrc('Medium', id, 'alsep12-5', s5, ['masv-src-impact', 'masv-src-img-s69-59547']);
  s5.assets.push({ assetId: 'masv-img-s69-59547', role: 'gallery' }); rec('Medium', id, 'alsep12-5 gallery image', '(no photo)', 'S69-59547 seismometer record', S_IMG);
  s3.assets.push({ assetId: 'masv-img-as12-47-6919', role: 'gallery' }); rec('Medium', id, 'alsep12-3 gallery image', '(no photo)', 'as12-47-6919 (Bean deploys the ALSEP)', 'https://images.nasa.gov/details/as12-47-6919');
  setL('Medium', id, 'card.assetId', m.card, 'assetId', 'masv-img-as12-47-6919', 'https://images.nasa.gov/details/as12-47-6919');
  setL('Medium', id, 'intro.assetId', m.intro, 'assetId', 'masv-img-as12-47-6919', 'https://images.nasa.gov/details/as12-47-6919');
  // L5 legacy
  setL('Low', id, 'alsep12-7 basicText', st(m, 'alsep12-7'), 'basicText', { en: 'The station was not forgotten gear. It was a science station switched on in 1969 and shut down in 1977, and its seismometer registered the first recorded artificial moonquake.', ar: 'لم تكن المحطة معدات منسية، بل محطة علمية شُغّلت في 1969 وأُوقفت في 1977، وسجّل مقياس الزلازل فيها أول هزة قمرية صناعية مسجّلة.' }, S_LM12 + ' ; ' + S_IMG);
  setL('Low', id, 'ending.legacyText', m.ending, 'legacyText', { en: 'The station was switched on in 1969 and shut down in 1977. Its seismometer registered the first recorded artificial moonquake.', ar: 'شُغّلت المحطة في 1969 وأُوقفت في 1977. وسجّل مقياس الزلازل فيها أول هزة قمرية صناعية مسجّلة.' }, S_LM12 + ' ; ' + S_IMG);
  addSrc('Low', id, 'alsep12-7', st(m, 'alsep12-7'), ['masv-src-img-s69-59547']);
}

// ---------- ALSEP Apollo 15 ----------
{
  const id = 'alsep-apollo-15'; const m = get(id);
  const S_LM15 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C', S_SITES = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html';
  const s4 = st(m, 'alsep15-4');
  setL('Critical', id, 'alsep15-4 basicText', s4, 'basicText', { en: 'ALSEP stations used a SNAP-27 radioisotope generator. NASA says it produced approximately 70 watts, and 63.5 watts after one year.', ar: 'استخدمت محطات ALSEP مولّد النظائر المشعة SNAP-27. وتقول ناسا إنه أنتج نحو 70 واط، و63.5 واط بعد سنة.' }, S_LM15);
  setL('Critical', id, 'alsep15-4 exploreMoreText', s4, 'exploreMoreText', { en: 'The fuel was an approximately 4 kg capsule containing plutonium-238. The whole generator had a mass of 17 kg and the central station about 25 kg.', ar: 'كان الوقود أسطوانة تزن نحو 4 كغ تحتوي على البلوتونيوم-238. وبلغت كتلة المولّد كله 17 كغ وكتلة المحطة المركزية نحو 25 كغ.' }, S_LM15);
  setL('Critical', id, 'alsep15-4 fact f1', s4.facts[0], 'text', { en: 'SNAP-27: approximately 70 W DC at 16 V; 63.5 W after one year.', ar: 'SNAP-27: نحو 70 واط تيار مستمر بجهد 16 فولت؛ و63.5 واط بعد سنة.' }, S_LM15);
  setL('Low', id, 'intro.whereGoing', m.intro, 'whereGoing', { en: 'The foot of the Apennine mountains, Mare Imbrium region, at about 26.134° N, 3.630° E.', ar: 'سفح جبال الأبنين في منطقة بحر الأمطار، عند نحو 26.134° شمالاً و3.630° شرقاً.' }, S_LM15 + ' ; ' + S_SITES);
  setL('Low', id, 'unit.restingPlace', m.units[0], 'restingPlace', { en: 'Deployed and left on the lunar surface at about 26.134° N, 3.630° E', ar: 'نُصبت وتُركت على سطح القمر عند نحو 26.134° شمالاً و3.630° شرقاً' }, S_LM15 + ' ; ' + S_SITES);
  const s3 = st(m, 'alsep15-3');
  setL('Low', id, 'alsep15-3 basicText', s3, 'basicText', { en: 'The central station was turned on at 18:37 UT on 31 July 1971, at about 26.134° N, 3.630° E.', ar: 'شُغّلت المحطة المركزية الساعة 18:37 بالتوقيت العالمي في 31 يوليو 1971، عند نحو 26.134° شمالاً و3.630° شرقاً.' }, S_LM15 + ' ; ' + S_SITES);
  addTo('Low', id, 'alsep15-3 fact f2 (coordinates)', s3.facts, { id: 'f2', text: { en: 'NSSDCA\'s Lunar Module page gives the central station at 26.1341° N, 3.6298° E; its landing-site table gives 26.13406° N, 3.62991° E.', ar: 'تذكر صفحة المركبة القمرية لدى NSSDCA أن المحطة المركزية عند 26.1341° شمالاً و3.6298° شرقاً، بينما يذكر جدول مواقع الهبوط لديها 26.13406° شمالاً و3.62991° شرقاً.' }, sourceId: 'masv-src-a15', basis: 'disputed', note: { en: 'The two NASA pages differ in the fourth decimal; we say "about".', ar: 'تختلف الصفحتان في الخانة العشرية الرابعة؛ ولذلك نقول «نحو».' } }, S_LM15 + ' ; ' + S_SITES);
  setL('Medium', id, 'alsep15-3 exploreMoreText (new)', s3, 'exploreMoreText', { en: 'NASA says the ALSEP was deployed at the end of the first moonwalk traverse, on 31 July 1971.', ar: 'تقول ناسا إن ALSEP نُصبت في نهاية رحلة السير الأول على القمر، في 31 يوليو 1971.' }, S_LM15);
  setL('Low', id, 'alsep15-6 basicText', st(m, 'alsep15-6'), 'basicText', { en: 'This station was a working science station, not forgotten gear. It was set up in 1971 and shut down with the other ALSEP stations in 1977.', ar: 'كانت هذه المحطة محطة علمية عاملة لا معدات منسية. نُصبت في 1971 وأُوقفت مع بقية محطات ALSEP في 1977.' }, S_LM15);
  setL('Low', id, 'ending.legacyText', m.ending, 'legacyText', { en: 'The station carried instruments that measured the Moon from its surface, including heat flow. It was switched on in 1971 and shut down in 1977.', ar: 'حملت المحطة أجهزة تقيس القمر من سطحه، منها تدفّق الحرارة. شُغّلت في 1971 وأُوقفت في 1977.' }, S_LM15);
}

// ---------- Surveyor 3 ----------
{
  const id = 'surveyor-3'; const m = get(id);
  const S_S3 = 'https://science.nasa.gov/mission/surveyor-3/', S_SURV = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html', S_LM12 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C';
  setL('Critical', id, 'card.tagline', m.card, 'tagline', { en: 'A robot lander that Apollo 12 astronauts walked up to about two and a half years after it landed.', ar: 'مركبة هبوط آلية وصل إليها روّاد أبولو 12 سيراً بعد نحو سنتين ونصف من هبوطها.' }, S_S3 + ' ; ' + S_LM12 + ' (20 Apr 1967 to 19-20 Nov 1969)');
  // H4 landing date + position disputes
  const s3 = st(m, 'surv3-3');
  setL('High', id, 'surv3-3 exploreMoreText', s3, 'exploreMoreText', { en: 'NASA pages differ: NASA Science gives 00:04:17 UT on 20 April 1967, NSSDCA gives 00:04:53 UT, and NASA captions for the Apollo 12 photos say "April 19, 1967" (US time). During the descent Surveyor 3 bounced off the surface twice, to about 10 m and then about 3 m, before settling on the third touchdown.', ar: 'تختلف صفحات ناسا: فصفحة NASA Science تذكر 00:04:17 بالتوقيت العالمي في 20 أبريل 1967، وتذكر NSSDCA الساعة 00:04:53، بينما تقول تعليقات ناسا على صور أبولو 12 «19 أبريل 1967» (بالتوقيت الأمريكي). وخلال الهبوط ارتدّت سيرفيور 3 عن السطح مرتين، إلى نحو 10 م ثم نحو 3 م، قبل أن تستقر عند الملامسة الثالثة.' }, S_S3 + ' ; ' + S_SURV + ' ; https://images.nasa.gov/details/AS12-48-7134');
  setL('High', id, 'surv3-3 fact f1 note', s3.facts[0], 'note', { en: 'NASA Science: 00:04:17 UT, 20 April; NSSDCA: 00:04:53 UT, 20 April; NASA photo captions: "April 19, 1967". We give the date 20 April (UT).', ar: 'ناسا Science: 00:04:17 بالتوقيت العالمي في 20 أبريل؛ NSSDCA: 00:04:53 في 20 أبريل؛ تعليقات صور ناسا: «19 أبريل 1967». ونذكر تاريخ 20 أبريل (بالتوقيت العالمي).' }, S_S3 + ' ; ' + S_SURV);
  addTo('High', id, 'surv3-3 fact f2 (position conflict)', s3.facts, { id: 'f2', text: { en: 'Landing position: 3° S, 23.41° W (NASA Science) or 3.01° S, 336.66° E, which is 23.34° W (NSSDCA).', ar: 'موقع الهبوط: 3° جنوباً و23.41° غرباً (NASA Science) أو 3.01° جنوباً و336.66° شرقاً، أي 23.34° غرباً (NSSDCA).' }, sourceId: 'masv-src-s3', basis: 'disputed', note: { en: 'The two NASA pages differ by about 0.07 degrees; we say "near".', ar: 'تختلف الصفحتان بنحو 0.07 درجة؛ ولذلك نقول «قرب».' } }, S_S3 + ' ; ' + S_SURV);
  addTo('High', id, 'surv3-3 fact f3 (double bounce)', s3.facts, { id: 'f3', text: { en: 'NASA Science: the main engine did not cut off at the correct moment, and Surveyor 3 "bounced off the lunar surface twice"; the third time "the lander settled down to a soft-landing".', ar: 'تقول NASA Science: لم يتوقف المحرك الرئيسي في اللحظة الصحيحة، و«ارتدّت سيرفيور 3 عن سطح القمر مرتين»، وفي المرة الثالثة «استقرّت المركبة في هبوط ناعم». (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-s3', basis: 'nasa-page' }, S_S3);
  setL('High', id, 'intro.whereGoing', m.intro, 'whereGoing', { en: 'Southeast Oceanus Procellarum on the Moon, near 3° S, 23.4° W.', ar: 'جنوب شرق محيط العواصف على القمر، قرب 3° جنوباً و23.4° غرباً.' }, S_S3 + ' ; ' + S_SURV);
  const tl = m.timeline.find((t) => t.id === 't-landing'); setL('High', id, 'timeline t-landing basis', tl, 'basis', 'disputed', S_S3 + ' ; ' + S_SURV);
  setL('High', id, 'timeline t-landing label', tl, 'label', { en: 'Lands on the Moon (NASA pages give 19 or 20 April; see the chapter)', ar: 'الهبوط على القمر (تذكر صفحات ناسا 19 أو 20 أبريل؛ انظر الفصل)' }, S_S3);
  // H7 source re-pointing
  const s2 = st(m, 'surv3-2');
  setL('High', id, 'surv3-2 fact f1 (text + source)', s2.facts[0], 'text', { en: 'Launch: 17 Apr 1967, 07:05:01 UT, from Launch Complex 36B.', ar: 'الإطلاق: 17 أبريل 1967 الساعة 07:05:01 بالتوقيت العالمي من منصة الإطلاق LC-36B.' }, S_S3);
  setL('High', id, 'surv3-2 fact f1 source', s2.facts[0], 'sourceId', 'masv-src-s3', 'citation fix: time and pad are on NASA Science, not on the NSSDCA overview');
  const s4 = st(m, 'surv3-4');
  setL('High', id, 'surv3-4 fact f1 source', s4.facts[0], 'sourceId', 'masv-src-s3', 'citation fix: 6,326 pictures is on NASA Science, not on the NSSDCA overview');
  // M1 discovery + soil
  setL('Medium', id, 'surv3-4 basicText', s4, 'basicText', { en: 'Surveyor 3 sent back 6,326 TV pictures. Its surface sampler arm reached 1.5 m and could dig up to 18 cm. Its tests showed the soil was like wet sand, strong enough for a Lunar Module.', ar: 'أرسلت سيرفيور 3 إلى الأرض 6,326 صورة تلفزيونية. وكان ذراع أخذ العينات يصل إلى 1.5 م ويحفر حتى 18 سم. وأظهرت اختباراتها أن التربة تشبه الرمل المبلّل وتكفي لتحمّل مركبة قمرية.' }, S_S3);
  addTo('Medium', id, 'surv3-4 fact f2 (soil result)', s4.facts, { id: 'f2', text: { en: 'NASA Science: "scientists concluded that lunar soil had a consistency similar to wet sand, with a bearing strength of about 10 pounds per square inch (0.7 kilograms per square centimeter, or 98 kilopascals) — in other words, solid enough to support an Apollo Lunar Module."', ar: 'تقول NASA Science: «استنتج العلماء أن تربة القمر لها قوام يشبه الرمل المبلّل، وقدرة تحمّل نحو 10 أرطال للبوصة المربعة (0.7 كغ للسنتيمتر المربع، أو 98 كيلوباسكال) — أي أنها صلبة بما يكفي لتحمّل مركبة قمرية من أبولو». (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-s3', basis: 'nasa-page' }, S_S3);
  addTo('Medium', id, 'discoveries d1', m.discoveries, { id: 'd1', title: { en: 'Moon soil strong enough for a Lunar Module', ar: 'تربة القمر تكفي لتحمّل مركبة قمرية' }, summary: { en: 'From its soil tests, scientists concluded the lunar soil had a consistency similar to wet sand and was solid enough to support an Apollo Lunar Module.', ar: 'من اختبارات التربة، استنتج العلماء أن تربة القمر لها قوام يشبه الرمل المبلّل وأنها صلبة بما يكفي لتحمّل مركبة قمرية من أبولو.' }, sourceId: 'masv-src-s3' }, S_S3);
  // M1 last contact context
  const s5 = st(m, 'surv3-5');
  setL('Medium', id, 'surv3-5 basicText', s5, 'basicText', { en: 'The last contact with Surveyor 3 was on 4 May 1967, two days after the lunar night began. After that the lander was inactive. The pages we read do not say what caused contact to end.', ar: 'كان آخر اتصال بسيرفيور 3 في 4 مايو 1967، بعد يومين من بدء الليل القمري، ثم صارت المركبة غير نشطة. ولا تذكر الصفحات التي قرأناها ما الذي تسبّب في انتهاء الاتصال.' }, S_S3);
  setL('Medium', id, 'surv3-5 fact f1', s5.facts[0], 'text', { en: 'Last contact: 4 May 1967, "two days after the lunar night began".', ar: 'آخر اتصال: 4 مايو 1967، «بعد يومين من بدء الليل القمري».' }, S_S3);
  setL('Medium', id, 'ending.notStated[0]', m.ending.notStated, 0, { en: 'NASA Science gives the timing ("two days after the lunar night began") but the pages we read do not say what caused contact to end on 4 May 1967.', ar: 'تذكر NASA Science التوقيت («بعد يومين من بدء الليل القمري») ولا تذكر الصفحات التي قرأناها ما الذي تسبّب في انتهاء الاتصال في 4 مايو 1967.' }, S_S3);
  setL('Medium', id, 'ending.finalChapterText', m.ending, 'finalChapterText', { en: 'NASA gives 4 May 1967, two days after the lunar night began, as the last contact with Surveyor 3. By November 1969 NASA calls it the inactive Surveyor 3 lander, and Apollo 12 astronauts took about 10 kg of its parts.', ar: 'تذكر ناسا 4 مايو 1967، بعد يومين من بدء الليل القمري، تاريخاً لآخر اتصال بسيرفيور 3. وفي نوفمبر 1969 تصفها ناسا بأنها غير نشطة، وأخذ روّاد أبولو 12 نحو 10 كغ من أجزائها.' }, S_S3);
  // surv3-6 reason + elapsed time
  const s6 = st(m, 'surv3-6');
  setL('Medium', id, 'surv3-6 exploreMoreText (new)', s6, 'exploreMoreText', { en: 'NASA Science says the parts were recovered "to allow scientists to evaluate the effects of nearly two-and-a-half years of exposure on the Moon\'s surface".', ar: 'تقول NASA Science إن الأجزاء استُعيدت «ليتمكّن العلماء من تقييم آثار نحو سنتين ونصف من التعرّض لسطح القمر».' }, S_S3);
  addTo('Medium', id, 'surv3-6 fact f3 (elapsed time)', s6.facts, { id: 'f3', text: { en: 'From landing (20 April 1967) to the visit (19-20 November 1969) is about two and a half years. NASA Science says both "More than three years later" and "nearly two-and-a-half years of exposure".', ar: 'من الهبوط (20 أبريل 1967) إلى الزيارة (19-20 نوفمبر 1969) نحو سنتين ونصف. وتقول NASA Science عبارتين مختلفتين: «بعد أكثر من ثلاث سنوات» و«نحو سنتين ونصف من التعرّض».' }, sourceId: 'masv-src-s3', basis: 'disputed', note: { en: 'NASA\'s page is inconsistent with its own dates; we count from the dates.', ar: 'صفحة ناسا لا تتفق مع تواريخها نفسها؛ ونحن نحسب من التواريخ.' } }, S_S3);
}

// ---------- Surveyor 6 ----------
{
  const id = 'surveyor-6'; const m = get(id);
  const S_S6 = 'https://science.nasa.gov/mission/surveyor-6/', S_SURV = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html';
  const s6 = st(m, 'surv6-6');
  setL('Critical', id, 'surv6-6 basicText', s6, 'basicText', { en: 'The lunar night began on 24 November 1967, and NASA put Surveyor 6 into hibernation on 26 November. Controllers regained contact briefly on 14 December 1967, but primary operations had ceased.', ar: 'بدأ الليل القمري في 24 نوفمبر 1967، ووضعت ناسا سيرفيور 6 في وضع السبات في 26 نوفمبر. واستعاد المتحكمون الاتصال لفترة وجيزة في 14 ديسمبر 1967، لكن عمليات المهمة الأساسية كانت قد انتهت.' }, S_S6);
  setL('Critical', id, 'surv6-6 fact f1', s6.facts[0], 'text', { en: 'NASA Science: "the onset of the lunar night on Nov. 24, 1967, because of which the spacecraft was placed in hibernation mode on Nov. 26, 1967."', ar: 'تقول NASA Science: «بدء الليل القمري في 24 نوفمبر 1967، وبسببه وُضعت المركبة في وضع السبات في 26 نوفمبر 1967». (الترجمة العربية من إعدادنا.)' }, S_S6);
  addTo('Critical', id, 'surv6-6 fact f2 (contact on 14 Dec)', s6.facts, { id: 'f2', text: { en: 'NASA Science: "Although controllers regained contact briefly on Dec. 14, 1967, primary landing operations had ceased by this time."', ar: 'تقول NASA Science: «رغم أن المتحكمين استعادوا الاتصال لفترة وجيزة في 14 ديسمبر 1967، كانت عمليات الهبوط الأساسية قد توقفت بحلول ذلك الوقت». (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-s6', basis: 'nasa-page' }, S_S6);
  setL('Critical', id, 'ending.finalChapterText', m.ending, 'finalChapterText', { en: 'NASA says the onset of the lunar night on 24 November 1967 led to Surveyor 6 being placed in hibernation on 26 November. Controllers regained contact briefly on 14 December 1967, but primary landing operations had ceased by then.', ar: 'تقول ناسا إن بدء الليل القمري في 24 نوفمبر 1967 أدّى إلى وضع سيرفيور 6 في وضع السبات في 26 نوفمبر. واستعاد المتحكمون الاتصال لفترة وجيزة في 14 ديسمبر 1967، لكن عمليات الهبوط الأساسية كانت قد توقفت بحلول ذلك.' }, S_S6);
  setL('Critical', id, 'ending.notStated[0]', m.ending.notStated, 0, { en: 'The pages we read do not state any contact after 14 December 1967, or when contact finally ended.', ar: 'لا تذكر الصفحات التي قرأناها أي اتصال بعد 14 ديسمبر 1967 ولا متى انتهى الاتصال نهائياً.' }, S_S6);
  addTo('Critical', id, 'timeline t-contact', m.timeline, { id: 't-contact', dateLabel: '1967-12-14', label: { en: 'Controllers briefly regain contact', ar: 'استعادة المتحكمين الاتصال لفترة وجيزة' }, sourceId: 'masv-src-s6', basis: 'nasa-page' }, S_S6);
  const th = m.timeline.find((t) => t.id === 't-hib'); setL('Critical', id, 'timeline t-hib label', th, 'label', { en: 'Placed in hibernation after the lunar night began (24 Nov)', ar: 'تُوضع في وضع السبات بعد بدء الليل القمري (24 نوفمبر)' }, S_S6);
  // H5 position
  const s3 = st(m, 'surv6-3');
  setL('High', id, 'intro.whereGoing', m.intro, 'whereGoing', { en: 'Sinus Medii on the Moon, at about 0.5° N, 1.4° W.', ar: 'خليج الوسط على القمر، عند نحو 0.5° شمالاً و1.4° غرباً.' }, S_S6 + ' ; ' + S_SURV);
  setL('High', id, 'unit.restingPlace', m.units[0], 'restingPlace', { en: 'Sinus Medii (landing site), about 0.5° N, 1.4° W', ar: 'خليج الوسط (موقع الهبوط)، عند نحو 0.5° شمالاً و1.4° غرباً' }, S_S6 + ' ; ' + S_SURV);
  setL('High', id, 'surv6-3 basicText', s3, 'basicText', { en: 'Surveyor 6 landed on 10 November 1967 in Sinus Medii, at about 0.5° N, 1.4° W. NASA announced 0.46° N, 1.37° W and says it was probably closer to 0.473° N, 1.427° W.', ar: 'هبطت سيرفيور 6 في 10 نوفمبر 1967 في خليج الوسط، عند نحو 0.5° شمالاً و1.4° غرباً. أعلنت ناسا 0.46° شمالاً و1.37° غرباً وتقول إن الموقع على الأرجح أقرب إلى 0.473° شمالاً و1.427° غرباً.' }, S_S6 + ' ; ' + S_SURV);
  setL('High', id, 'surv6-3 fact f1 (text, source, basis)', s3.facts[0], 'text', { en: 'Landing: 10 Nov 1967, 01:01:04 UT (NASA Science) or 01:01:06 UT (NSSDCA).', ar: 'الهبوط: 10 نوفمبر 1967 الساعة 01:01:04 بالتوقيت العالمي (NASA Science) أو 01:01:06 (NSSDCA).' }, S_S6 + ' ; ' + S_SURV);
  s3.facts[0].sourceId = 'masv-src-s6'; s3.facts[0].basis = 'disputed'; s3.facts[0].note = { en: 'The two NASA pages differ by 2 seconds.', ar: 'تختلف الصفحتان بمقدار ثانيتين.' };
  rec('High', id, 'surv6-3 fact f1 source', 'masv-src-surv (NSSDCA overview: 01:01:06 UT)', 'masv-src-s6 (01:01:04 UT), conflict recorded', 'citation fix');
  addTo('High', id, 'surv6-3 fact f2 (position conflict)', s3.facts, { id: 'f2', text: { en: 'NASA Science: "announced as 0.46 degrees north latitude and 1.37 degrees west longitude (but probably closer to 0.473 degrees north latitude and 1.427 degrees west longitude)"; NSSDCA: 0.49° N, 358.60° E (which is 1.40° W).', ar: 'تقول NASA Science: «أُعلن عنه عند 0.46 درجة شمالاً و1.37 درجة غرباً (لكنه على الأرجح أقرب إلى 0.473 درجة شمالاً و1.427 درجة غرباً)»؛ وتذكر NSSDCA: 0.49° شمالاً و358.60° شرقاً (أي 1.40° غرباً). (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-s6', basis: 'disputed' }, S_S6 + ' ; ' + S_SURV);
  const tlnd = m.timeline.find((t) => t.id === 't-landing'); setL('High', id, 'timeline t-landing basis', tlnd, 'basis', 'disputed', S_S6);
  // H7 other citations
  const s2 = st(m, 'surv6-2');
  setL('High', id, 'surv6-2 fact f1 (text + source)', s2.facts[0], 'text', { en: 'Launch: 7 Nov 1967, 07:39:01 UT, from Launch Complex 36B.', ar: 'الإطلاق: 7 نوفمبر 1967 الساعة 07:39:01 بالتوقيت العالمي من منصة الإطلاق 36B.' }, S_S6);
  setL('High', id, 'surv6-2 fact f1 source', s2.facts[0], 'sourceId', 'masv-src-s6', 'citation fix: time and pad are on NASA Science, not on the NSSDCA overview');
  const s4 = st(m, 'surv6-4');
  setL('High', id, 'surv6-4 fact f1 (text + source)', s4.facts[0], 'text', { en: 'NASA Science: 29,952 images "during less than two weeks of operation".', ar: 'تقول NASA Science: 29,952 صورة «خلال أقل من أسبوعين من التشغيل». (الترجمة العربية من إعدادنا.)' }, S_S6);
  setL('High', id, 'surv6-4 fact f1 source', s4.facts[0], 'sourceId', 'masv-src-s6', 'citation fix: 29,952 images is on NASA Science, not on the NSSDCA overview');
  // M2 chemistry data
  setL('Medium', id, 'surv6-4 exploreMoreText (new)', s4, 'exploreMoreText', { en: 'NASA says the alpha-scattering instrument acquired about 30 hours of data on the chemical composition of the lunar surface.', ar: 'تقول ناسا إن مطياف التشتت ألفا جمع نحو 30 ساعة من البيانات عن التركيب الكيميائي لسطح القمر.' }, S_S6);
  addTo('Medium', id, 'surv6-4 fact f2 (chemistry data)', s4.facts, { id: 'f2', text: { en: 'NASA Science: "the alpha-scattering instrument acquired about 30 hours of data on the chemical composition of the lunar surface."', ar: 'تقول NASA Science: «جمع مطياف التشتت ألفا نحو 30 ساعة من البيانات عن التركيب الكيميائي لسطح القمر». (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-s6', basis: 'nasa-page' }, S_S6);
  // M2 hop size
  const s5 = st(m, 'surv6-5');
  setL('Medium', id, 'surv6-5 basicText', s5, 'basicText', { en: 'On 17 November 1967 Surveyor 6 fired its thrusters briefly and became the first spacecraft to be launched from the Moon\'s surface. It rose only about 3 m (10 ft) and landed about 2.5 m (8 ft) west.', ar: 'في 17 نوفمبر 1967 شغّلت سيرفيور 6 دوافعها لفترة وجيزة وأصبحت أول مركبة فضائية تنطلق من سطح القمر. ارتفعت نحو 3 م فقط (10 أقدام) وهبطت على بعد نحو 2.5 م (8 أقدام) إلى الغرب.' }, S_S6);
  setL('Medium', id, 'surv6-5 exploreMoreText (new)', s5, 'exploreMoreText', { en: 'NASA says the cameras then studied the original landing footprints to learn the soil\'s mechanical properties, and made stereo images now that the viewpoint had moved.', ar: 'تقول ناسا إن الكاميرات درست بعد ذلك آثار الأقدام عند موقع الهبوط الأصلي لمعرفة الخصائص الميكانيكية للتربة، والتقطت صوراً مجسّمة بعدما تغيّرت نقطة الرصد.' }, S_S6);
  addTo('Medium', id, 'surv6-5 fact f2 (hop size)', s5.facts, { id: 'f2', text: { en: 'NASA Science: Surveyor 6 fired its three main thrusters for 2.5 seconds, "lifted up to about 10 feet (3 meters) before landing about 8 feet (2.5 meters) west of its original landing point."', ar: 'تقول NASA Science: شغّلت سيرفيور 6 دوافعها الرئيسية الثلاثة 2.5 ثانية، و«ارتفعت نحو 10 أقدام (3 أمتار) قبل أن تهبط على بعد نحو 8 أقدام (2.5 متر) غرب موقع هبوطها الأصلي». (الترجمة العربية من إعدادنا.)' }, sourceId: 'masv-src-s6', basis: 'nasa-page' }, S_S6);
  // image
  setL('Medium', id, 'card.assetId', m.card, 'assetId', 'masv-img-pia12978', 'https://images.nasa.gov/details/PIA12978');
  setL('Medium', id, 'intro.assetId', m.intro, 'assetId', 'masv-img-pia12978', 'https://images.nasa.gov/details/PIA12978');
  s3.assets.push({ assetId: 'masv-img-pia12978', role: 'gallery' }); rec('Medium', id, 'surv6-3 gallery image', '(no photo)', 'PIA12978 (LRO orbit view of the lander)', 'https://images.nasa.gov/details/PIA12978');
}

// ---------- Apollo 15 Falcon ----------
{
  const id = 'apollo-15-falcon'; const m = get(id);
  const S_LM15 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C', S_WHERE = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html', S_SITES = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html';
  const s5 = st(m, 'falcon-5');
  addTo('High', id, 'falcon-5 fact f2 (deliberate impact)', s5.facts, { id: 'f2', text: { en: 'NSSDCA: "The Apollo Lunar Modules were deliberately targeted to impact the Moon to provide artificial moonquake sources for seismic experiments."', ar: 'تقول NSSDCA: «كانت المركبات القمرية لأبولو تُوجَّه عمداً لتصطدم بالقمر لتوفير مصادر لهزات قمرية صناعية للتجارب السيزمية». (الترجمة العربية من إعدادنا.)' }, sourceId: 'moon-lm-lrv-src-where', basis: 'nasa-page' }, S_WHERE);
  setL('High', id, 'falcon-5 exploreMoreText (new)', s5, 'exploreMoreText', { en: 'NASA\'s "Where are they now?" page lists Falcon as having impacted the Moon on 3 August 1971 at 03:03:37.0 UT, and says the Apollo Lunar Modules were deliberately targeted to impact the Moon.', ar: 'تُدرج صفحة «أين هي الآن؟» لدى ناسا مركبة فالكون بأنها اصطدمت بالقمر في 3 أغسطس 1971 الساعة 03:03:37.0 بالتوقيت العالمي، وتقول إن المركبات القمرية لأبولو كانت تُوجَّه عمداً لتصطدم بالقمر.' }, S_WHERE);
  addSrc('High', id, 'falcon-5', s5, ['moon-lm-lrv-src-where']);
  setL('Medium', id, 'intro.goal', m.intro, 'goal', { en: 'Falcon landed at the foot of the Apennine mountains, in the Mare Imbrium region, and carried the crew and their rover to the surface.', ar: 'هبطت فالكون عند سفح جبال الأبنين في منطقة بحر الأمطار، وحملت الرائدين ومركبتهما الجوالة إلى السطح.' }, S_LM15);
  setL('Medium', id, 'ending.notStated[0]', m.ending.notStated, 0, { en: 'NASA pages we read do not describe the present condition of the descent stage.', ar: 'لا تذكر صفحات ناسا التي قرأناها الحالة الراهنة لمرحلة الهبوط.' }, S_SITES);
  setL('Medium', id, 'ending.finalChapterText', m.ending, 'finalChapterText', { en: 'NASA says Falcon\'s descent stage was left behind on the Moon as the platform for launching the ascent stage. NASA\'s landing-site table lists the Lunar Module at 26.13239° N, 3.63330° E, determined from Lunar Reconnaissance Orbiter images. The ascent stage was jettisoned on 3 August 1971 and impacted the Moon at 26.36° N, 0.25° E.', ar: 'تقول ناسا إن مرحلة هبوط فالكون تُركت على القمر بوصفها منصة لإطلاق مرحلة الصعود. ويُدرج جدول مواقع الهبوط لدى ناسا المركبة القمرية عند 26.13239° شمالاً و3.63330° شرقاً، حُدّد من صور مسبار استطلاع القمر. وجرى التخلص من مرحلة الصعود في 3 أغسطس 1971 واصطدمت بالقمر عند 26.36° شمالاً و0.25° شرقاً.' }, S_SITES + ' ; ' + S_LM15);
  setL('Medium', id, 'ending.legacyText', m.ending, 'legacyText', { en: 'Falcon landed at the foot of the Apennine mountains and carried the rover that explored the area. Its descent stage was left at the landing site.', ar: 'هبطت فالكون عند سفح جبال الأبنين وحملت المركبة الجوالة التي استكشفت المنطقة. وتُركت مرحلة هبوطها في موقع الهبوط.' }, S_LM15);
  const s3 = st(m, 'falcon-3');
  setL('Low', id, 'falcon-3 exploreMoreText', s3, 'exploreMoreText', { en: 'NASA says the rover was folded and carried in quad 1 of the descent stage. The ALSEP central station is at about 26.134° N, 3.630° E.', ar: 'تذكر ناسا أن المركبة الجوالة طُويت وحُملت في الربع 1 من مرحلة الهبوط. وتقع المحطة المركزية لـ ALSEP عند نحو 26.134° شمالاً و3.630° شرقاً.' }, S_LM15 + ' ; ' + S_SITES);
  setL('Medium', id, 'card.assetId', m.card, 'assetId', 'moon-lm-lrv-img-as15-falcon-lm', 'https://images.nasa.gov/details/as15-086-11600');
  setL('Medium', id, 'intro.assetId', m.intro, 'assetId', 'moon-lm-lrv-img-as15-falcon-lm', 'https://images.nasa.gov/details/as15-086-11600');
  const s2 = st(m, 'falcon-2'); s2.assets.push({ assetId: 'moon-lm-lrv-img-as15-falcon-lm', role: 'gallery' }); rec('Medium', id, 'falcon-2 gallery image', '(no photo)', 'as15-086-11600 (Falcon early in the first moonwalk)', 'https://images.nasa.gov/details/as15-086-11600');
}

// ---------- Apollo 11 Eagle ----------
{
  const id = 'apollo-11-eagle'; const m = get(id);
  const S_LM11 = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C', S_CSM = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A', S_WHERE = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html', S_A11O = 'https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/', S_SITES = 'https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html';
  setL('High', id, 'card.tagline', m.card, 'tagline', { en: 'The first crewed vehicle to land on the Moon. Its descent stage was left behind there.', ar: 'أول مركبة مأهولة تهبط على القمر. وقد تُركت مرحلة هبوطها هناك.' }, S_LM11);
  const e4 = st(m, 'eagle-4');
  setL('High', id, 'eagle-4 exploreMoreText', e4, 'exploreMoreText', { en: 'NASA\'s mission overview says 21 hours 36 minutes. One NASA photo caption says "22-hour stay". The moonwalk ended at 05:11:13 UT.', ar: 'تذكر النظرة العامة لمهمة أبولو 11 لدى ناسا 21 ساعة و36 دقيقة، بينما يذكر تعليق على إحدى صور ناسا «إقامة 22 ساعة». وانتهى السير على القمر عند 05:11:13 بالتوقيت العالمي.' }, S_A11O + ' ; https://www.nasa.gov/mission/apollo-11/');
  addSrc('High', id, 'eagle-4', e4, ['moon-lm-lrv-src-a11o']);
  // jettison conflict
  const tj = m.timeline.find((t) => t.id === 't-jettison');
  setL('High', id, 'timeline t-jettison dateLabel', tj, 'dateLabel', '1969-07-21/22', S_LM11 + ' ; ' + S_WHERE);
  setL('High', id, 'timeline t-jettison label', tj, 'label', { en: 'Ascent stage jettisoned into lunar orbit: 21 Jul 23:41 UT or 22 Jul 00:01:01 UT (NASA pages differ)', ar: 'التخلص من مرحلة الصعود في مدار القمر: 21 يوليو 23:41 أو 22 يوليو 00:01:01 بالتوقيت العالمي (صفحات ناسا تختلف)' }, S_LM11 + ' ; ' + S_WHERE);
  setL('High', id, 'timeline t-jettison basis', tj, 'basis', 'disputed', S_LM11 + ' ; ' + S_WHERE);
  const e6 = st(m, 'eagle-6');
  setL('High', id, 'eagle-6 basicText', e6, 'basicText', { en: 'The descent stage was left behind on the Moon. The ascent stage lifted off on 21 July, then was jettisoned in lunar orbit at 23:41 UT that day or 00:01 UT on 22 July: NASA pages differ. Its fate is not known.', ar: 'تُركت مرحلة هبوط إيغل على القمر. وأقلعت مرحلة الصعود في 21 يوليو، ثم جرى التخلص منها في مدار القمر الساعة 23:41 بالتوقيت العالمي في ذلك اليوم أو 00:01 في 22 يوليو: صفحات ناسا تختلف. ومصيرها غير معروف.' }, S_LM11 + ' ; ' + S_WHERE);
  addTo('High', id, 'eagle-6 fact f3 (jettison conflict)', e6.facts, { id: 'f3', text: { en: 'Jettison time: 00:01:01 UT on 22 July (NSSDCA Lunar Module page) or 23:41 UT on 21 July (NSSDCA "Where are they now?" page).', ar: 'وقت التخلص من مرحلة الصعود: 00:01:01 بالتوقيت العالمي في 22 يوليو (صفحة المركبة القمرية لدى NSSDCA) أو 23:41 في 21 يوليو (صفحة «أين هي الآن؟» لدى NSSDCA).' }, sourceId: 'moon-lm-lrv-src-where', basis: 'disputed', note: { en: 'The two NASA pages differ by about 20 minutes and by the date.', ar: 'تختلف الصفحتان بنحو 20 دقيقة وبالتاريخ.' } }, S_LM11 + ' ; ' + S_WHERE);
  addSrc('High', id, 'eagle-6', e6, ['moon-lm-lrv-src-where']);
  setL('High', id, 'ending.finalChapterText', m.ending, 'finalChapterText', { en: 'NASA says the descent stage served as a platform for launching the ascent stage and was left behind on the Moon. NASA\'s landing-site table lists the Lunar Module at 0.67416° N, 23.47314° E, determined from Lunar Reconnaissance Orbiter images. The ascent stage was jettisoned into lunar orbit at 23:41 UT on 21 July or 00:01 UT on 22 July 1969 (NASA pages differ). Its fate is not known, but it is assumed to have crashed within the following 1 to 4 months.', ar: 'تقول ناسا إن مرحلة الهبوط كانت منصة لإطلاق مرحلة الصعود وتُركت على القمر. ويُدرج جدول مواقع الهبوط لدى ناسا المركبة القمرية عند 0.67416° شمالاً و23.47314° شرقاً، حُدّد من صور مسبار استطلاع القمر. أما مرحلة الصعود فجرى التخلص منها في مدار القمر الساعة 23:41 بالتوقيت العالمي في 21 يوليو أو 00:01 في 22 يوليو 1969 (صفحات ناسا تختلف). ومصيرها غير معروف، لكن يُفترض أنها اصطدمت بالقمر خلال شهر إلى أربعة أشهر.' }, S_LM11 + ' ; ' + S_WHERE + ' ; ' + S_SITES);
  // citations
  const tlaunch = m.timeline.find((t) => t.id === 't-launch'); setL('High', id, 'timeline t-launch source', tlaunch, 'sourceId', 'moon-lm-lrv-src-csm11', S_CSM + ' (13:32 UT, Pad 39A)');
  const tsplash = m.timeline.find((t) => t.id === 't-splash'); setL('High', id, 'timeline t-splash source', tsplash, 'sourceId', 'moon-lm-lrv-src-csm11', S_CSM + ' (splashdown 16:50:35 UT)');
  const e2 = st(m, 'eagle-2'); setL('High', id, 'eagle-2 fact f1 source', e2.facts[0], 'sourceId', 'moon-lm-lrv-src-csm11', S_CSM);
  addSrc('High', id, 'eagle-2', e2, ['moon-lm-lrv-src-csm11']);
  // landing position (M8)
  const e3 = st(m, 'eagle-3');
  setL('Medium', id, 'eagle-3 exploreMoreText', e3, 'exploreMoreText', { en: 'The landing site is at 0.67416° N, 23.47314° E, determined from Lunar Reconnaissance Orbiter images (NSSDCA). NASA\'s mission overview gives an older position, about 0.69° N, 23.43° E.', ar: 'موقع الهبوط عند 0.67416° شمالاً و23.47314° شرقاً، حُدّد من صور مسبار استطلاع القمر (NSSDCA). وتذكر النظرة العامة لمهمة أبولو 11 لدى ناسا موقعاً أقدم، نحو 0.69° شمالاً و23.43° شرقاً.' }, S_LM11 + ' ; ' + S_A11O);
  addTo('Medium', id, 'eagle-3 fact f2 (position conflict)', e3.facts, { id: 'f2', text: { en: 'Landing position: 0.67416° N, 23.47314° E from Lunar Reconnaissance Orbiter images (NSSDCA); NASA\'s mission overview gives 0° 41\' 15" N, 23° 26\' E.', ar: 'موقع الهبوط: 0.67416° شمالاً و23.47314° شرقاً من صور مسبار استطلاع القمر (NSSDCA)؛ وتذكر النظرة العامة لمهمة أبولو 11 لدى ناسا 0° 41′ 15″ شمالاً و23° 26′ شرقاً.' }, sourceId: 'moon-lm-lrv-src-a11o', basis: 'disputed', note: { en: 'The overview position is older; the two NASA values differ by about 0.05 degrees.', ar: 'موقع النظرة العامة أقدم؛ وتختلف القيمتان بنحو 0.05 درجة.' } }, S_A11O);
  addSrc('Medium', id, 'eagle-3', e3, ['moon-lm-lrv-src-a11o']);
  // flag/plaque/EASEP
  const e5 = st(m, 'eagle-5');
  setL('High', id, 'eagle-5 basicText', e5, 'basicText', { en: 'The crew left the descent stage, a small science package (EASEP) and a laser reflector. They put up an American flag, and a plaque was attached to the descent stage.', ar: 'ترك الرائدان مرحلة الهبوط وحزمة علمية صغيرة (EASEP) وعاكساً لليزر. ونصبا علماً أمريكياً، وكانت لوحة مثبّتة على مرحلة الهبوط.' }, S_LM11 + ' ; ' + S_A11O);
  setL('Medium', id, 'eagle-5 exploreMoreText', e5, 'exploreMoreText', { en: 'The plaque reads: "Here men from the planet Earth first set foot on the Moon July 1969, A.D. We came in peace for all mankind." EASEP included a passive seismometer and a lunar dust detector. The laser-ranging retroreflector was placed about 5 m north-northwest of EASEP. On 27 August 1969 EASEP no longer accepted commands from Earth and the experiment was terminated.', ar: 'نص اللوحة: «هنا وطئ رجال من كوكب الأرض القمر لأول مرة، يوليو 1969 ميلادية. جئنا بسلام من أجل البشرية جمعاء». ضمّت EASEP مقياس زلازل سلبياً وكاشفاً للغبار القمري، ووُضع عاكس الليزر على بعد نحو 5 م شمال شمال غرب EASEP. وفي 27 أغسطس 1969 لم تعد EASEP تقبل الأوامر من محطات الأرض وانتهت التجربة.' }, S_LM11);
  setL('High', id, 'eagle-5 fact f1', e5.facts[0], 'text', { en: 'Left on the Moon: the descent stage, EASEP and a laser-ranging retroreflector. NASA says the astronauts "put up an American flag".', ar: 'تُركت على القمر: مرحلة الهبوط وEASEP وعاكس ليزر. وتقول ناسا إن الرائدين «نصبا علماً أمريكياً».' }, S_LM11);
  addTo('High', id, 'eagle-5 fact f2 (plaque on the descent stage)', e5.facts, { id: 'f2', text: { en: 'NASA\'s mission overview: "Attached to the descent stage was a commemorative plaque signed by President Richard M. Nixon and the three astronauts."', ar: 'تقول النظرة العامة لمهمة أبولو 11 لدى ناسا: «كانت لوحة تذكارية موقّعة من الرئيس ريتشارد نيكسون والرواد الثلاثة مثبّتة على مرحلة الهبوط». (الترجمة العربية من إعدادنا.)' }, sourceId: 'moon-lm-lrv-src-a11o', basis: 'nasa-page' }, S_A11O);
  addTo('Medium', id, 'eagle-5 fact f3 (EASEP ended)', e5.facts, { id: 'f3', text: { en: 'EASEP stopped accepting commands from Earth stations on 27 August 1969, and the experiment was terminated.', ar: 'توقفت EASEP عن قبول الأوامر من محطات الأرض في 27 أغسطس 1969، وانتهت التجربة.' }, sourceId: 'moon-lm-lrv-src-lm11', basis: 'nasa-page' }, S_LM11);
  addSrc('High', id, 'eagle-5', e5, ['moon-lm-lrv-src-a11o']);
  setL('High', id, 'ending.notStated[0]', m.ending.notStated, 0, { en: 'NASA pages we read do not describe the present condition of the descent stage.', ar: 'لا تذكر صفحات ناسا التي قرأناها الحالة الراهنة لمرحلة الهبوط.' }, S_SITES);
  setL('High', id, 'ending.legacyText', m.ending, 'legacyText', { en: 'Eagle was the first crewed vehicle to land on the Moon. Its descent stage, with the plaque attached to it and the instruments the crew left, marks Tranquility Base.', ar: 'كانت إيغل أول مركبة مأهولة تهبط على القمر. وتُعلّم مرحلة هبوطها، ومعها اللوحة المثبّتة عليها والأجهزة التي تركها الرائدان، قاعدة الهدوء.' }, S_LM11 + ' ; ' + S_A11O);
}

// ===================== L4: Arabic terminology harmonization (all 8 Moon missions) =====================
{
  const ids = ['apollo-11-eagle', 'apollo-15-falcon', 'lrv-apollo-15', 'lrv-apollo-17', 'alsep-apollo-12', 'alsep-apollo-15', 'surveyor-3', 'surveyor-6'];
  const rules = [
    ['فصل المرحلة الصاعدة', 'التخلص من مرحلة الصعود'],
    ['المرحلة الصاعدة', 'مرحلة الصعود'],
    ['العربة القمرية', 'المركبة الجوالة القمرية'],
    ['عربة قمرية', 'مركبة جوالة قمرية'],
  ];
  function walk(node, path, mid) {
    if (Array.isArray(node)) { node.forEach((x, i) => walk(x, path + `[${i}]`, mid)); return; }
    if (node && typeof node === 'object') {
      for (const k of Object.keys(node)) {
        if (k === 'ar' && typeof node[k] === 'string') {
          let t = node[k]; const before = t;
          for (const [from, to] of rules) t = t.split(from).join(to);
          if (t !== before) { node[k] = t; rec('Low', mid, `${path} (Arabic term)`, before, t, 'terminology consistency'); }
        } else walk(node[k], path + '.' + k, mid);
      }
    }
  }
  for (const id of ids) walk(get(id), '', id);
}

// ===================== SAVE =====================
const out = (p, o) => fs.writeFileSync(`${root}/${p}`, JSON.stringify(o, null, 2) + '\n');
for (const id of Object.keys(M)) out(`missions/${id}.json`, M[id]);
for (const f of Object.keys(A)) out(`assets/${f}.json`, A[f]);
for (const f of Object.keys(S)) out(`sources/${f}.json`, S[f]);
fs.writeFileSync('C:/Users/ASUS/AppData/Local/Temp/claude/5c15ff4c88006e9e/483136f1-99cd-4dc9-850f-0702413de1a9/scratchpad/qa/moon-changes.json', JSON.stringify(changes, null, 1));
console.log(`applied ${changes.length} logged changes; wrote ${Object.keys(M).length} missions, ${Object.keys(A).length} asset files, ${Object.keys(S).length} source files`);
const byP = {}; for (const c of changes) byP[c.p] = (byP[c.p] ?? 0) + 1; console.log(byP);
