# Moon Corrections Report

Date: 2026-11-15 · Applies every correction approved from [NASA_Human_Fact_Check_Moon.md](NASA_Human_Fact_Check_Moon.md), in priority order (Critical → High → Medium → Low). **Moon missions only; no Mars or Deep Space mission file was touched.**

## 0. Ground rules that were followed

| Rule | How |
|---|---|
| No mission marked verified | All 8 Moon missions keep `"unverified": true` |
| Unsupported claims stay NOT STATED | Rover final location and "left on the Moon" stay NOT STATED; the challenge page's "parked permanently" stays CHALLENGE-ONLY |
| ALSEP shutdown reason | **Not inferred.** Left unresolved until a human inspects the scanned Termination Report PDF |
| Conflicting NASA values | Kept and shown (as "NASA pages differ" badges with both values), never silently chosen |
| English and Arabic together | Every changed field was written in both languages in the same edit |
| Sources and credits preserved | No source URL was removed; 9 sources and 5 image records were added; image credits were kept (see Low item L1 for the two credit lines that were refined) |
| No UI, animation or state-machine change | None touched. Only data files, research notes and reports changed |
| Safety | A full backup of `src/data` and the research files was taken before the edit |

**One formatting note.** The 8 Moon mission files and the 4 shared Moon asset/source files were rewritten by a script with uniform 2-space JSON formatting (the earlier files were hand-formatted on one line per field). This changes layout only; every content change is in the log (appendix).

## 1. Result at a glance

| Priority | Logged changes |
|---|---|
| Critical | 22 |
| High | 62 |
| Medium | 49 |
| Low | 19 (of which 3 are Arabic terminology edits) |
| Supporting (new sources and images) | 14 |
| **Total** | **166** |

Per mission: (shared) 14 · (assets) 5 · lrv-apollo-17 20 · lrv-apollo-15 11 · alsep-apollo-12 23 · alsep-apollo-15 11 · surveyor-3 20 · surveyor-6 26 · apollo-15-falcon 11 · apollo-11-eagle 25.

### Validation (run after the corrections)

| Check | Result |
|---|---|
| Data validation | OK: 21 missions, 43 assets, 61 sources (one pre-existing warning: the unused Kepler scale-model asset) |
| Type-check | pass |
| Automated tests | 23 of 23 pass |
| Production build | succeeds |
| NASA images over HTTP | all 42 image URLs return an image, including the 5 new ones |
| Images in a real browser | 136 Moon page loads (intro, every chapter and final chapter of all 8 missions, English and phone-size Arabic): 44 image loads, **0 not loaded**, 0 empty alt text, 0 overflow, 0 JavaScript errors |
| Source links | The 22 NASA source links used by the Moon missions and the 14 Moon image-record links: 35 of 36 resolve. The one that did not is the challenge page: this machine reports a local certificate-chain error for that site (`UNABLE_TO_GET_ISSUER_CERT_LOCALLY`); it is a check limitation here, the URL is unchanged. |

## 2. Corrections applied, by approved priority

Source key: LM11 / CSM11 / LM12 / LM15 / LM17 = NSSDCA spacecraft pages 1969-059C / 1969-059A / 1969-099C / 1971-063C / 1972-096C (`https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=<ID>`); LRV = https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html; WHERE = https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html; IMPACT = https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html; SITES = https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html; SURV = https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html; S3 / S6 = https://science.nasa.gov/mission/surveyor-3/ and /surveyor-6/; A11O = https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/; A15D / A17D = https://www.nasa.gov/missions/apollo/apollo-15-mission-details/ and -17-mission-details/; A17H = https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/.

### Phase 1 — Critical

**C1. Apollo 17 rover distance** — `src/data/missions/lrv-apollo-17.json`: card, chapter `lrv17-4` (text, Explore more, facts, quiz), `ending.legacyText`. Sources: LRV, LM17, A17D.
- Card before: "The moon buggy that drove 35.9 km, the longest of the three. NASA pages do not say where it ended up."
  After: "The moon buggy that drove farthest of the three. NASA pages give its total distance as about 30 to 35.9 km, and do not say where it ended up." (Arabic aligned.)
- `lrv17-4` before: "Eugene Cernan and Harrison Schmitt drove this rover 35.9 km in 4 hours 26 minutes. Their longest single trip was 20.1 km…"
  After: "Cernan and Schmitt drove this rover for 4 hours 26 minutes. NASA pages give its total as 35.9 km, 30.5 km or about 30 km. The longest single trip was 20.1 km, and the farthest from the Lunar Module 7.6 km."
- Fact f1 now reads: "Apollo 17 total distance: 35.9 km in 4 h 26 min (NSSDCA rover page); 30.5 km (NASA Apollo 17 mission details); "30 km" covered by the crew (NSSDCA Lunar Module page)." with basis **disputed** and the note "NASA pages differ and do not explain why." The Explore more text says the same and that Apollo 17's total is the largest under every NASA figure.
- **Quiz** before: "How far did the Apollo 17 rover drive in total?" (answer 35.9 km). After: "Which of the three rovers driven on the Moon covered the most distance?" (answer: Apollo 17's rover), with the explanation "NASA gives 27.8 km for Apollo 15 and 26.7 km for Apollo 16. For Apollo 17 NASA pages give 30 to 35.9 km, so it is the longest under every figure."
- Legacy now says "…NASA pages give its total as 30 to 35.9 km."

**C2. ALSEP power and the plutonium capsule** — `alsep-apollo-12.json` chapter `alsep12-4` and `alsep-apollo-15.json` chapter `alsep15-4` (text, Explore more, fact f1). Sources: LM12, LM15.
- Before (Apollo 12): "A SNAP-27 radioisotope generator powered the station. It made about 70 watts **at launch** and 63.5 watts after one year." / "The generator's fuel capsule **held about 4 kg of plutonium-238**, and the generator had a mass of 17 kg."
  After: "A SNAP-27 radioisotope generator powered the station. NASA says it produced approximately 70 watts, and 63.5 watts after one year." / "Its fuel was an approximately 4 kg capsule containing plutonium-238. The whole generator had a mass of 17 kg."
- Apollo 15: same two corrections ("ALSEP stations used a SNAP-27 radioisotope generator. NASA says it produced approximately 70 watts, and 63.5 watts after one year."; "The fuel was an approximately 4 kg capsule containing plutonium-238. The whole generator had a mass of 17 kg and the central station about 25 kg."). Facts: "SNAP-27: approximately 70 W DC at 16 V; 63.5 W after one year." Arabic aligned in all places.
- NASA wording: "The RTG produced approximately 70 W DC at 16 V. (63.5 W after one year.)"; "an approximately 4 kg fuel capsule in the shape of a long rod which contained plutonium-238".

**C3. Surveyor 3 elapsed time** — `surveyor-3.json`, `card.tagline`. Sources: S3, LM12 (20 Apr 1967 to 19-20 Nov 1969).
- Before EN: "A robot lander that Apollo 12 astronauts walked up to **up to two years** after it landed." / AR: "…بعد **أكثر من سنتين** من هبوطها" (the two languages disagreed).
  After EN: "…about two and a half years after it landed." / AR: "…بعد نحو سنتين ونصف من هبوطها." Chapter `surv3-6` also records NASA's own inconsistency (see M1).

**C4. Surveyor 6 contact and lunar night** — `surveyor-6.json`: chapter `surv6-6` (text, facts f1, f2), `ending.finalChapterText`, `ending.notStated[0]`, timeline. Source: S6.
- Before: "On 26 November 1967 Surveyor 6 went into hibernation. The pages we read do not say when or whether contact ended after that." Ending: "NASA says Surveyor 6 entered hibernation on 26 November 1967." Not stated: "…the date or reason of the last contact."
  After: "The lunar night began on 24 November 1967, and NASA put Surveyor 6 into hibernation on 26 November. Controllers regained contact briefly on 14 December 1967, but primary operations had ceased." Fact quotes NASA: "the onset of the lunar night on Nov. 24, 1967, because of which the spacecraft was placed in hibernation mode on Nov. 26, 1967" and "Although controllers regained contact briefly on Dec. 14, 1967, primary landing operations had ceased by this time." New timeline event "1967-12-14 Controllers briefly regain contact". The not-stated note now reads: "The pages we read do not state any contact after 14 December 1967, or when contact finally ended."

### Phase 2 — High

**H1. Apollo 11 ascent-stage jettison conflict** — `apollo-11-eagle.json`: timeline `t-jettison`, chapter `eagle-6` (text, new fact f3), `ending.finalChapterText`. Sources: LM11, WHERE.
- Before: "…jettisoned in lunar orbit on 22 July." Timeline "Ascent stage jettisoned into lunar orbit (00:01:01 UT)".
  After: "…was jettisoned in lunar orbit at 23:41 UT that day or 00:01 UT on 22 July: NASA pages differ. Its fate is not known." Timeline basis is now **disputed** ("21 Jul 23:41 UT or 22 Jul 00:01:01 UT (NASA pages differ)"). New fact: "Jettison time: 00:01:01 UT on 22 July (NSSDCA Lunar Module page) or 23:41 UT on 21 July (NSSDCA "Where are they now?" page)."

**H2. Unsupported interpretation of the 22-hour caption** — `apollo-11-eagle.json` chapter `eagle-4`, Explore more. Sources: A11O, https://www.nasa.gov/mission/apollo-11/.
- Before: "…One photo caption says "22-hour stay", **which is a rounding**."
  After: "NASA's mission overview says 21 hours 36 minutes. One NASA photo caption says "22-hour stay". The moonwalk ended at 05:11:13 UT." (Arabic aligned.) The 21 h 36 min figure is also cited to A11O now.

**H3. "Still there"** — `apollo-11-eagle.json`, `card.tagline`. Before: "…Its descent stage is still there." After: "…Its descent stage was left behind there." (Arabic: "وقد تُركت مرحلة هبوطها هناك"). The ending note about "exact resting coordinates" was replaced by "NASA pages we read do not describe the present condition of the descent stage."

**H4. Surveyor 3 landing date and position** — `surveyor-3.json`: chapter `surv3-3` (Explore more, fact f1 note, new f2), timeline `t-landing`, `intro.whereGoing`. Sources: S3, SURV, NASA image captions.
- Recorded as **disputed**: landing 00:04:17 UT 20 April (S3) vs 00:04:53 UT (SURV) vs "April 19, 1967" in NASA's Apollo 12 photo captions (US time); position 3° S, 23.41° W (S3) vs 3.01° S, 336.66° E = 23.34° W (SURV). Text uses "near 3° S, 23.4° W".

**H5. Surveyor 6 landing position** — `surveyor-6.json`: `intro.whereGoing`, unit `restingPlace`, chapter `surv6-3`, timeline. Before: "…at 0.46° N, 1.37° W." After: "…at about 0.5° N, 1.4° W. NASA announced 0.46° N, 1.37° W and says it was probably closer to 0.473° N, 1.427° W." Fact f2 also gives NSSDCA's 0.49° N, 358.60° E (= 1.40° W), and the 01:01:04 vs 01:01:06 UT difference.

**H6. Misleading Apollo 17 image** — `lrv-apollo-17.json`: `card.assetId`, `intro.assetId`, chapter `lrv17-4` gallery, chapter `lrv17-3`.
- `as17-147-22526` (NASA's description: "a short checkout… 'stripped down' LRV… prior to loading up") **no longer** appears on the card, intro or "The Longest Drives". It now appears on `lrv17-3` ("Folded Inside Challenger") with a corrected description that states what NASA says (and notes NASA's title says "drives").
- Card and intro now use `as17-137-20979` (rover close-up with the repaired fender). **"The Longest Drives" now uses a new image, `as17-146-22294`** (NASA: Schmitt "working beside a huge boulder at Station 6… The front portion of the Lunar Roving Vehicle (LRV) is visible", third moonwalk; credit "NASA/JSC"; loads, verified by eye).

**H7. Mismatched NASA citations (every case)**
| Mission and place | Before | After |
|---|---|---|
| `apollo-11-eagle` timeline `t-launch`, chapter `eagle-2` fact f1 and its source list | LM11 (has only the launch date) | **CSM11** (13:32 UT, Pad 39A) |
| `apollo-11-eagle` timeline `t-splash` | LM11 | **CSM11** (splashdown 24 Jul 16:50:35 UT) |
| `apollo-11-eagle` `eagle-4`, `eagle-3`, `eagle-5` | LM11/mission page only | **A11O** added (21 h 36 min; older landing position; plaque on the descent stage) |
| `surveyor-3` `surv3-2` fact f1 (07:05:01, LC-36B) and `surv3-4` fact f1 (6,326 pictures) | SURV | **S3** ("UT" added) |
| `surveyor-6` `surv6-2` f1 (07:39:01), `surv6-3` f1 (landing time), `surv6-4` f1 (29,952 images) | SURV | **S6** ("UT" added) |
| `alsep-apollo-12` `alsep12-3`, `alsep-apollo-15` `alsep15-3` coordinates | cited SITES but printed LM-page values | both pages' values now shown in a **disputed** fact (see L3) |
| `apollo-15-falcon` `falcon-5` ("on purpose") | LM15 only | **WHERE** added as a source of the statement (new fact f2) |

**H8. Rover endings and cards** — `lrv-apollo-15.json`, `lrv-apollo-17.json`.
- Apollo 15 card before: "…What NASA pages say about where it ended up: nothing." After: "…NASA pages we read do not say where it ended up." Timeline entry "[2026] The Space Apps challenge page says LRVs were 'parked permanently'" **removed** from both rover timelines (it is not a mission date; the claim remains in the ending chapters, labelled challenge-page).
- **New verified evidence added** (fact + chapter text + ending text + timeline event): Apollo 15: A15D, "For the first time, the lunar liftoff was seen on Earth via the LRV television camera." Apollo 17: A17H, controller Ed Fendell "remotely aimed the Rover's TV camera on the LM", and "had to command the camera to pan upward several seconds ahead of the actual liftoff to track Challenger as it rose". Both endings still say NASA pages do not state the rover's final location or that it was left.
- Chapter `lrv15-5` now reads: "NASA pages we read do not say where this rover ended up, or that it was left. NASA does say its TV camera showed the Lunar Module's liftoff to Earth. The challenge page says rovers were "parked permanently": only its claim."

**Newly verified NASA evidence incorporated (the list you asked for)**
| Evidence | Where in the data | Source |
|---|---|---|
| Rover cameras at liftoff | rover endings (H8) | A15D; A17H |
| Lunar Modules "deliberately targeted to impact the Moon" | `apollo-15-falcon` `falcon-5` fact f2 and Explore more | WHERE |
| Apollo 12 seismometer registered the ascent-stage impact | `alsep-apollo-12` `alsep12-5` fact f3; legacy text; new picture S69-59547 | https://images.nasa.gov/details/S69-59547 |
| Surveyor 3 soil like wet sand, strong enough for a Lunar Module | `surveyor-3` `surv3-4` text and fact f2; new discovery d1 | S3 |

### Phase 3 — Medium and Low

**M1. Surveyor 3** (`surveyor-3.json`): new discovery d1 ("Moon soil strong enough for a Lunar Module"); the "bounced off the lunar surface twice" detail (`surv3-3`); last contact "two days after the lunar night began" in `surv3-5` (text, fact), with the cause kept NOT STATED ("The pages we read do not say what caused contact to end"); NASA's reason for taking parts ("to evaluate the effects of nearly two-and-a-half years of exposure") and a **disputed** fact recording that NASA's page says both "More than three years later" and "nearly two-and-a-half years of exposure" (`surv3-6`). Source: S3.

**M2. Surveyor 6** (`surveyor-6.json`): hop size added in `surv6-5` — "It rose only about 3 m (10 ft) and landed about 2.5 m (8 ft) west" (fact quotes NASA); the 30 hours of alpha-scattering chemistry data (`surv6-4`); the follow-up use of the hop (cameras studied the original footprints). Source: S6.

**M3. Apollo 12 ALSEP** (`alsep-apollo-12.json`): the quake is now dated 20 Nov 1969 (22:17:17.7 UT at 3.94° S, 21.20° W; IMPACT) in the timeline and chapter `alsep12-5`; legacy text says the seismometer "registered" it (S69-59547).

**M4. Apollo 15 Falcon** (`apollo-15-falcon.json`): `intro.goal` before "To land at the foot of the Apennine mountains and let the crew work on the surface." After "Falcon landed at the foot of the Apennine mountains, in the Mare Imbrium region, and carried the crew and their rover to the surface." Card and intro now use the real NASA photograph `as15-086-11600` ("the Lunar Module "Falcon" taken early in the first… EVA… prior to deployment of lunar surface equipment"); it is also shown in chapter `falcon-2`.

**M5. Descent-stage coordinates notes** (`apollo-11-eagle`, `apollo-15-falcon` endings): the "NASA does not give coordinates" notes were replaced by NASA's landing-site table value, "determined from Lunar Reconnaissance Orbiter images", and the honest note "NASA pages we read do not describe the present condition of the descent stage."

**M6. Rover timelines**: Apollo 15 now has moonwalk 1 (31 Jul, rover unloaded, deployed, driven; 10.3 km), moonwalk 2 (1 Aug, 12.5 km), moonwalk 3 (2 Aug, 5.1 km) and the liftoff event (LM15, A15D). Apollo 17 has moonwalk 1 (rover deployed and driven, ALSEP set up) and the liftoff event (LM17, A17H). Optional items also applied: Schmitt's quotation ("Without it, the major scientific discoveries of Apollo 15, 16, and 17 would not have been possible.", LRV) in both rover legacy chapters; the ALSEP 15 deployment sentence and the three moonwalk dates (31 Jul, 1 Aug, 2 Aug 1971; LM15); the EASEP end date for Apollo 11 (27 August 1969, LM11).

**M7. Alt texts**: `as17-137-20979` now describes the repaired fender (and NASA's explanation); `KSC-as11-40-5927` now says Aldrin "removes scientific experiment packages from a stowage area in the descent stage"; `as17-147-22526` states NASA's description ("short checkout") beside its title; AS12-48-7134/7133 describe the astronaut examining the TV camera. Every new image has an English and Arabic description.

**M8. Apollo 11 landing position**: Explore more and a **disputed** fact give both NASA values (0.67416° N, 23.47314° E from LRO images; 0°41′15″ N, 23°26′ E in the mission overview).

**Optional items also applied**: Apollo 12 ALSEP now has real photographs — `as12-47-6919` (Bean deploying the ALSEP; card, intro, `alsep12-3`) and the seismometer record `S69-59547` (`alsep12-5`); Surveyor 6 uses `PIA12978`, the LRO orbit view of the lander (card, intro, `surv6-3`; NASA credit "NASA/GSFC/Arizona State University"; it loads at the `~small` size because the `~medium` file returns 403).

**L1. Credits.** Rule: "Preserve all image credits". Applied minimally: KSC-as11-40-5927 "NASA/KSC" → "NASA (KSC archive copy)" (the record gives only the archive centre, no photographer); AS12-48-7134/7133 "NASA (JSC; credit field not stated by the library)" → "NASA" (the NASA Surveyor 3 page prints exactly "Credit: NASA" for this photograph). All other "NASA/JSC" credits match their records' centre and were **kept**. Tell me if you want them all changed to "NASA".
**L2.** No change (as recommended): the story avoids naming Bean or Conrad.
**L3. ALSEP coordinates**: text now says "about 3.01° S, 23.42° W" (Apollo 12) and "about 26.134° N, 3.630° E" (Apollo 15), with a **disputed** fact giving both NASA pages' values.
**L4. Arabic terminology**: 3 Arabic fields harmonized to "مرحلة الصعود" (ascent stage), "التخلص من مرحلة الصعود" (jettison) and "مركبة جوالة قمرية" (rover) — listed in the appendix as "(Arabic term)".
**L5. Legacy wording**: ALSEP 12 and 15 no longer imply continuous operation ("switched on in 1969 and shut down in 1977"; "set up in 1971 and shut down with the other ALSEP stations in 1977").

## 3. Research files updated

| File | Change |
|---|---|
| [NASA_R2_Research.md](NASA_R2_Research.md) | **ALSEP power line corrected** ("at launch" and "4 kg of plutonium" removed, with the original error recorded); Apollo 17 distance conflict row added; rover "left/where" row updated with the camera evidence; Surveyor 3 and Surveyor 6 conflicts recorded; ALSEP shutdown reason marked unresolved |
| [NASA_R1_Research.md](NASA_R1_Research.md) | Apollo 12 impact date now stated (20 Nov 1969, 22:17:17.7 UT); Apollo 11 jettison conflict recorded |
| [NASA_R3_Research.md](NASA_R3_Research.md) | New section "1b. Moon fact-check addendum": camera evidence, table of all conflicting NASA values, corrections to earlier text, the unresolved ALSEP reason; note on the Apollo 17 image |

## 4. Still unresolved, and why

| Issue | Status | Why it remains |
|---|---|---|
| **Why the ALSEP stations were shut down (1977)** | NOT STATED | Left unresolved on your instruction: the NSSDCA Termination Report (https://nssdc.gsfc.nasa.gov/misc/documents/b32116.pdf) is a scanned image; a human must read it. No reason is inferred anywhere |
| Where the three rovers ended up, and whether NASA says "left" | NOT STATED / CHALLENGE-ONLY | NASA shows the cameras working at liftoff but states no final location and no "left" |
| Apollo 17 rover total distance (35.9 / 30.5 / about 30 km) | DISPUTED | NASA does not explain the difference |
| Apollo 11 jettison time; Apollo 11 landing position; Surveyor 3 date, position and interval; Surveyor 6 time and position; ALSEP coordinates | DISPUTED (kept) | NASA pages differ; both values are shown |
| Surveyor 3 and 6: cause of the end of contact; where the landers are today | NOT STATED | No NASA page read says |
| Apollo 15 ALSEP has no photograph | open | The NASA library search found no verified candidate |
| Arabic wording quality | open | I wrote and checked the Arabic against the English, but a native-speaker review of tone and style is still advisable |
| All 8 missions | still `unverified` | Per your rule; they need your sign-off |

**Noticed outside this task's scope, not changed:** (1) in the Arabic journey header the chapter date runs into the digits ("26 Nov 19677", a mixed-direction display glitch in the UI); (2) Apollo 12's "not stated" list still contains an unrelated note about retroreflectors (Apollo 12 deployed none); (3) the challenge-page URL could not be fetched here because of this machine's certificate store (no change was made to it).

## 5. Files changed

| File | Change |
|---|---|
| `src/data/missions/` apollo-11-eagle, apollo-15-falcon, lrv-apollo-15, lrv-apollo-17, alsep-apollo-12, alsep-apollo-15, surveyor-3, surveyor-6 (`.json`) | The corrections above |
| `src/data/assets/moon-lm-lrv.json`, `moon-alsep-surveyor.json` | 5 new images; alt text/credit refinements |
| `src/data/sources/moon-lm-lrv.json`, `moon-alsep-surveyor.json` | 9 new NASA sources |
| `NASA_R1_Research.md`, `NASA_R2_Research.md`, `NASA_R3_Research.md` | Research corrections (section 3) |
| `NASA_Moon_Corrections_Report.md` | This report |

Not touched: Mars and Deep Space mission files, `scripts/`, the UI, animations and `journeyMachine.ts`.

Stopped here as requested. Mars and Deep Space fact-checking has not been started.

---

## Appendix — complete change log (166 entries)

Each entry shows the exact mission file and chapter or field changed, the before and after text (English then Arabic where the field is bilingual), and the supporting source. "(none)" means the item is new.

### Critical (22)

**C1. `src/data/missions/lrv-apollo-17.json` — card.tagline**  
Before: 
> EN: The moon buggy that drove 35.9 km, the longest of the three. NASA pages do not say where it ended up.
> AR: العربة القمرية التي قطعت 35.9 كم، وهي الأطول بين الثلاث. ولا تذكر صفحات ناسا أين انتهى بها المطاف.

After: 
> EN: The moon buggy that drove farthest of the three. NASA pages give its total distance as about 30 to 35.9 km, and do not say where it ended up.
> AR: المركبة الجوالة القمرية التي قطعت أكبر مسافة بين الثلاث. تذكر صفحات ناسا مسافتها الإجمالية بين نحو 30 و35.9 كم، ولا تذكر أين انتهى بها المطاف.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C ; https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**C2. `src/data/missions/lrv-apollo-17.json` — lrv17-4 basicText**  
Before: 
> EN: Eugene Cernan and Harrison Schmitt drove this rover 35.9 km in 4 hours 26 minutes. Their longest single trip was 20.1 km and their greatest range from the Lunar Module was 7.6 km.
> AR: قاد يوجين سيرنان وهاريسون شميت هذه المركبة 35.9 كم في 4 ساعات و26 دقيقة. وكانت أطول رحلة لهما 20.1 كم، وأبعد مسافة عن المركبة القمرية 7.6 كم.

After: 
> EN: Cernan and Schmitt drove this rover for 4 hours 26 minutes. NASA pages give its total as 35.9 km, 30.5 km or about 30 km. The longest single trip was 20.1 km, and the farthest from the Lunar Module 7.6 km.
> AR: قاد سيرنان وشميت هذه المركبة 4 ساعات و26 دقيقة. وتذكر صفحات ناسا مسافتها الإجمالية 35.9 كم أو 30.5 كم أو نحو 30 كم. وكانت أطول رحلة 20.1 كم، وأبعد نقطة عن المركبة القمرية 7.6 كم.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C ; https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**C3. `src/data/missions/lrv-apollo-17.json` — lrv17-4 exploreMoreText**  
Before: 
> EN: Of the three rovers driven, Apollo 17's covered the most distance: Apollo 15 drove 27.8 km and Apollo 16 drove 26.7 km.
> AR: من بين المركبات الثلاث التي قيدت، قطعت مركبة أبولو 17 أكبر مسافة: فأبولو 15 قطعت 27.8 كم وأبولو 16 قطعت 26.7 كم.

After: 
> EN: Of the three rovers driven, Apollo 17's covered the most distance under every NASA total: Apollo 15 drove 27.8 km and Apollo 16 drove 26.7 km. The 35.9 km figure is on NSSDCA's rover page. NSSDCA's Lunar Module page says the crew "covered 30 km", and NASA's Apollo 17 mission details say the rover "traversed a total of 30.5 kilometers". NASA does not say why they differ.
> AR: من بين المركبات الثلاث التي قيدت، قطعت مركبة أبولو 17 أكبر مسافة وفق كل مجموع تذكره ناسا: فأبولو 15 قطعت 27.8 كم وأبولو 16 قطعت 26.7 كم. ورقم 35.9 كم وارد في صفحة المركبة الجوالة لدى NSSDCA، بينما تقول صفحة المركبة القمرية لديها إن الرائدين «قطعا 30 كم»، وتقول تفاصيل مهمة أبولو 17 لدى ناسا إن المركبة «قطعت ما مجموعه 30.5 كيلومتراً». ولا تذكر ناسا سبب هذا الاختلاف.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C ; https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**C4. `src/data/missions/lrv-apollo-17.json` — lrv17-4 facts f1/f2**  
Before: 
> EN: Apollo 17 (Cernan, Schmitt): 35.9 km in 4 h 26 min; longest traverse 20.1 km; greatest range 7.6 km.
> AR: أبولو 17 (سيرنان، شميت): 35.9 كم في 4 س و26 د؛ أطول مسار 20.1 كم؛ أبعد مدى 7.6 كم.

After: 
> EN: Apollo 17 total distance: 35.9 km in 4 h 26 min (NSSDCA rover page); 30.5 km (NASA Apollo 17 mission details); "30 km" covered by the crew (NSSDCA Lunar Module page).
> AR: المسافة الإجمالية في أبولو 17: 35.9 كم في 4 س و26 د (صفحة المركبة الجوالة لدى NSSDCA)؛ 30.5 كم (تفاصيل مهمة أبولو 17 لدى ناسا)؛ «30 كم» قطعها الرائدان (صفحة المركبة القمرية لدى NSSDCA).
> + f2: Longest single traverse 20.1 km; greatest range from the Lunar Module 7.6 km.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C ; https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**C5. `src/data/missions/lrv-apollo-17.json` — lrv17-4 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-lm17

Source: citation fix

**C6. `src/data/missions/lrv-apollo-17.json` — lrv17-4 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-a17d

Source: citation fix

**C7. `src/data/missions/lrv-apollo-17.json` — lrv17-4 quiz**  
Before: 
> {"en":"How far did the Apollo 17 rover drive in total?","ar":"كم قطعت مركبة أبولو 17 الجوالة في المجموع؟"} *35.9 km

After: 
> Which of the three rovers driven on the Moon covered the most distance? *Apollo 17's rover

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html ; https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**C8. `src/data/missions/lrv-apollo-17.json` — ending.legacyText**  
Before: 
> EN: Three Lunar Roving Vehicles were driven on the Moon. This one made the longest drives: 35.9 km.
> AR: قيدت ثلاث مركبات جوالة قمرية على القمر. وهذه قامت بأطول الرحلات: 35.9 كم.

After: 
> EN: Three Lunar Roving Vehicles were driven on the Moon. This one made the longest drives of the three; NASA pages give its total as 30 to 35.9 km.
> AR: قيدت ثلاث مركبات جوالة قمرية على القمر. وهذه قامت بأطول الرحلات بين الثلاث؛ وتذكر صفحات ناسا مسافتها الإجمالية بين 30 و35.9 كم.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C ; https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**C9. `src/data/missions/alsep-apollo-12.json` — alsep12-4 basicText**  
Before: 
> EN: A SNAP-27 radioisotope generator powered the station. It made about 70 watts at launch and 63.5 watts after one year.
> AR: زوّد مولّد النظائر المشعة SNAP-27 المحطة بالطاقة، وأنتج نحو 70 واط عند الإطلاق و63.5 واط بعد سنة.

After: 
> EN: A SNAP-27 radioisotope generator powered the station. NASA says it produced approximately 70 watts, and 63.5 watts after one year.
> AR: زوّد مولّد النظائر المشعة SNAP-27 المحطة بالطاقة. وتقول ناسا إنه أنتج نحو 70 واط، و63.5 واط بعد سنة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C

**C10. `src/data/missions/alsep-apollo-12.json` — alsep12-4 exploreMoreText**  
Before: 
> EN: The generator's fuel capsule held about 4 kg of plutonium-238, and the generator had a mass of 17 kg.
> AR: احتوت أسطوانة الوقود على نحو 4 كغ من البلوتونيوم-238، وبلغت كتلة المولّد 17 كغ.

After: 
> EN: Its fuel was an approximately 4 kg capsule containing plutonium-238. The whole generator had a mass of 17 kg.
> AR: كان وقوده أسطوانة تزن نحو 4 كغ تحتوي على البلوتونيوم-238، وبلغت كتلة المولّد كله 17 كغ.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C

**C11. `src/data/missions/alsep-apollo-12.json` — alsep12-4 fact f1**  
Before: 
> EN: SNAP-27: about 70 W at launch, 63.5 W after one year.
> AR: SNAP-27: نحو 70 واط عند الإطلاق و63.5 واط بعد سنة.

After: 
> EN: SNAP-27: approximately 70 W DC at 16 V; 63.5 W after one year.
> AR: SNAP-27: نحو 70 واط تيار مستمر بجهد 16 فولت؛ و63.5 واط بعد سنة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C

**C12. `src/data/missions/alsep-apollo-15.json` — alsep15-4 basicText**  
Before: 
> EN: ALSEP stations used a SNAP-27 radioisotope generator: about 70 watts at launch and 63.5 watts after one year.
> AR: استخدمت محطات ALSEP مولّد النظائر المشعة SNAP-27: نحو 70 واط عند الإطلاق و63.5 واط بعد سنة.

After: 
> EN: ALSEP stations used a SNAP-27 radioisotope generator. NASA says it produced approximately 70 watts, and 63.5 watts after one year.
> AR: استخدمت محطات ALSEP مولّد النظائر المشعة SNAP-27. وتقول ناسا إنه أنتج نحو 70 واط، و63.5 واط بعد سنة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**C13. `src/data/missions/alsep-apollo-15.json` — alsep15-4 exploreMoreText**  
Before: 
> EN: The fuel capsule held about 4 kg of plutonium-238. The generator had a mass of 17 kg and the central station about 25 kg.
> AR: احتوت أسطوانة الوقود على نحو 4 كغ من البلوتونيوم-238، وكتلة المولّد 17 كغ وكتلة المحطة المركزية نحو 25 كغ.

After: 
> EN: The fuel was an approximately 4 kg capsule containing plutonium-238. The whole generator had a mass of 17 kg and the central station about 25 kg.
> AR: كان الوقود أسطوانة تزن نحو 4 كغ تحتوي على البلوتونيوم-238. وبلغت كتلة المولّد كله 17 كغ وكتلة المحطة المركزية نحو 25 كغ.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**C14. `src/data/missions/alsep-apollo-15.json` — alsep15-4 fact f1**  
Before: 
> EN: SNAP-27: about 70 W at launch, 63.5 W after one year.
> AR: SNAP-27: نحو 70 واط عند الإطلاق و63.5 واط بعد سنة.

After: 
> EN: SNAP-27: approximately 70 W DC at 16 V; 63.5 W after one year.
> AR: SNAP-27: نحو 70 واط تيار مستمر بجهد 16 فولت؛ و63.5 واط بعد سنة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**C15. `src/data/missions/surveyor-3.json` — card.tagline**  
Before: 
> EN: A robot lander that Apollo 12 astronauts walked up to two years after it landed.
> AR: مركبة هبوط آلية وصل إليها روّاد أبولو 12 سيراً بعد أكثر من سنتين من هبوطها.

After: 
> EN: A robot lander that Apollo 12 astronauts walked up to about two and a half years after it landed.
> AR: مركبة هبوط آلية وصل إليها روّاد أبولو 12 سيراً بعد نحو سنتين ونصف من هبوطها.

Source: https://science.nasa.gov/mission/surveyor-3/ ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C (20 Apr 1967 to 19-20 Nov 1969)

**C16. `src/data/missions/surveyor-6.json` — surv6-6 basicText**  
Before: 
> EN: On 26 November 1967 Surveyor 6 went into hibernation. The pages we read do not say when or whether contact ended after that.
> AR: في 26 نوفمبر 1967 دخلت سيرفيور 6 في السبات. ولا تذكر الصفحات التي قرأناها متى أو هل انتهى الاتصال بعد ذلك.

After: 
> EN: The lunar night began on 24 November 1967, and NASA put Surveyor 6 into hibernation on 26 November. Controllers regained contact briefly on 14 December 1967, but primary operations had ceased.
> AR: بدأ الليل القمري في 24 نوفمبر 1967، ووضعت ناسا سيرفيور 6 في وضع السبات في 26 نوفمبر. واستعاد المتحكمون الاتصال لفترة وجيزة في 14 ديسمبر 1967، لكن عمليات المهمة الأساسية كانت قد انتهت.

Source: https://science.nasa.gov/mission/surveyor-6/

**C17. `src/data/missions/surveyor-6.json` — surv6-6 fact f1**  
Before: 
> EN: Hibernation: 26 Nov 1967.
> AR: السبات: 26 نوفمبر 1967.

After: 
> EN: NASA Science: "the onset of the lunar night on Nov. 24, 1967, because of which the spacecraft was placed in hibernation mode on Nov. 26, 1967."
> AR: تقول NASA Science: «بدء الليل القمري في 24 نوفمبر 1967، وبسببه وُضعت المركبة في وضع السبات في 26 نوفمبر 1967». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-6/

**C18. `src/data/missions/surveyor-6.json` — surv6-6 fact f2 (contact on 14 Dec)**  
Before: (none)

After: 
> EN: NASA Science: "Although controllers regained contact briefly on Dec. 14, 1967, primary landing operations had ceased by this time."
> AR: تقول NASA Science: «رغم أن المتحكمين استعادوا الاتصال لفترة وجيزة في 14 ديسمبر 1967، كانت عمليات الهبوط الأساسية قد توقفت بحلول ذلك الوقت». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-6/

**C19. `src/data/missions/surveyor-6.json` — ending.finalChapterText**  
Before: 
> EN: NASA says Surveyor 6 entered hibernation on 26 November 1967.
> AR: تقول ناسا إن سيرفيور 6 دخلت في السبات في 26 نوفمبر 1967.

After: 
> EN: NASA says the onset of the lunar night on 24 November 1967 led to Surveyor 6 being placed in hibernation on 26 November. Controllers regained contact briefly on 14 December 1967, but primary landing operations had ceased by then.
> AR: تقول ناسا إن بدء الليل القمري في 24 نوفمبر 1967 أدّى إلى وضع سيرفيور 6 في وضع السبات في 26 نوفمبر. واستعاد المتحكمون الاتصال لفترة وجيزة في 14 ديسمبر 1967، لكن عمليات الهبوط الأساسية كانت قد توقفت بحلول ذلك.

Source: https://science.nasa.gov/mission/surveyor-6/

**C20. `src/data/missions/surveyor-6.json` — ending.notStated[0]**  
Before: 
> EN: The pages we read do not state the date or reason of the last contact.
> AR: لا تذكر الصفحات التي قرأناها تاريخ آخر اتصال أو سببه.

After: 
> EN: The pages we read do not state any contact after 14 December 1967, or when contact finally ended.
> AR: لا تذكر الصفحات التي قرأناها أي اتصال بعد 14 ديسمبر 1967 ولا متى انتهى الاتصال نهائياً.

Source: https://science.nasa.gov/mission/surveyor-6/

**C21. `src/data/missions/surveyor-6.json` — timeline t-contact**  
Before: (none)

After: 
> EN: Controllers briefly regain contact
> AR: استعادة المتحكمين الاتصال لفترة وجيزة

Source: https://science.nasa.gov/mission/surveyor-6/

**C22. `src/data/missions/surveyor-6.json` — timeline t-hib label**  
Before: 
> EN: Enters hibernation
> AR: تدخل في السبات

After: 
> EN: Placed in hibernation after the lunar night began (24 Nov)
> AR: تُوضع في وضع السبات بعد بدء الليل القمري (24 نوفمبر)

Source: https://science.nasa.gov/mission/surveyor-6/

### High (62)

**H1. `src/data/assets/*.json` — assets/moon-lm-lrv.json moon-lm-lrv-img-as17-cernan-drives**  
Before: 
> credit: NASA/JSC | alt EN: Apollo 17 astronaut Eugene Cernan drives the Lunar Roving Vehicle.

After: 
> credit: NASA/JSC | alt EN: Astronaut Eugene Cernan makes a short checkout of the "stripped down" Lunar Roving Vehicle early in the first Apollo 17 moonwalk, before it was loaded with equipment. (NASA's title says "drives"; NASA's description says "short checkout".)
> alt AR: رائد الفضاء يوجين سيرنان يجري فحصاً قصيراً للمركبة الجوالة القمرية «المجرّدة» في بداية السير الأول في أبولو 17، قبل تحميلها بالمعدات. (يقول عنوان ناسا «يقود»، أما وصفها فيقول «فحص قصير».)

Source: https://images.nasa.gov/details/as17-147-22526

**H2. `src/data/missions/lrv-apollo-17.json` — timeline t-claim**  
Before: 
> EN: The Space Apps challenge page says LRVs were "parked permanently on the Moon"
> AR: تقول صفحة التحدي إن المركبات الجوالة «أُوقفت بصورة دائمة على القمر» [2026]

After: 
> (removed: not a mission event; the claim stays in the ending chapter, labelled challenge-page)

Source: CH

**H3. `src/data/missions/lrv-apollo-17.json` — timeline t-liftoff**  
Before: (none)

After: 
> EN: The Lunar Module lifts off; NASA History says controllers aimed the rover's TV camera to track it
> AR: تقلع المركبة القمرية؛ وتقول ناسا في تاريخها إن المتحكمين وجّهوا كاميرا تلفزيون المركبة الجوالة لتتبّعها

Source: https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/

**H4. `src/data/missions/lrv-apollo-17.json` — lrv17-5 basicText**  
Before: 
> EN: NASA pages we read do not say where this rover ended up, or that it was left on the Moon. The challenge page says rovers were "parked permanently". That is only the challenge page's claim.
> AR: لا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف ولا أنها تُركت على القمر. وتقول صفحة التحدي إن المركبات «أُوقفت بصورة دائمة»، وهذا ادعاء صفحة التحدي وحدها.

After: 
> EN: NASA pages we read do not say where this rover ended up, or that it was left. NASA History says controllers aimed its TV camera at the Lunar Module for liftoff. The challenge page says rovers were "parked permanently": only its claim.
> AR: لا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف ولا أنها تُركت. وتقول ناسا في تاريخها إن المتحكمين وجّهوا كاميرا تلفزيونها نحو المركبة القمرية عند الإقلاع. وتقول صفحة التحدي إن المركبات «أُوقفت بصورة دائمة»، وهذا ادعاؤها وحدها.

Source: https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/

**H5. `src/data/missions/lrv-apollo-17.json` — lrv17-5 fact f3**  
Before: (none)

After: 
> EN: NASA History: controller Ed Fendell "remotely aimed the Rover's TV camera on the LM", and "had to command the camera to pan upward several seconds ahead of the actual liftoff to track Challenger as it rose". For the ascent stage's impact, "Fendell could not capture the event with the Rover's camera" because the impact point was uncertain.
> AR: تاريخ ناسا: المتحكم إد فيندل «وجّه عن بُعد كاميرا تلفزيون المركبة الجوالة نحو المركبة القمرية»، و«كان عليه أن يأمر الكاميرا بالدوران للأعلى قبل لحظة الإقلاع الفعلية بثوانٍ لتتبّع تشالنجر وهي ترتفع». أما اصطدام مرحلة الصعود فـ«لم يستطع فيندل التقاطه بكاميرا المركبة الجوالة» لعدم اليقين بموضع الاصطدام. (الترجمة العربية من إعدادنا.)

Source: https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/

**H6. `src/data/missions/lrv-apollo-17.json` — lrv17-5 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-a17h

Source: citation fix

**H7. `src/data/missions/lrv-apollo-17.json` — ending.finalChapterText**  
Before: 
> EN: The challenge page says the Lunar Roving Vehicles were "parked permanently on the Moon". NASA pages we read do not state the rover's final location, or that it was left on the Moon. We therefore cannot say where it is.
> AR: تقول صفحة التحدي إن المركبات الجوالة القمرية «أُوقفت بصورة دائمة على القمر». ولا تذكر صفحات ناسا التي قرأناها موقع المركبة النهائي ولا أنها تُركت على القمر. لذلك لا نستطيع القول أين هي.

After: 
> EN: The challenge page says the Lunar Roving Vehicles were "parked permanently on the Moon". NASA pages we read do not state the rover's final location, or that it was left on the Moon. NASA History says controllers aimed the rover's TV camera at the Lunar Module for its liftoff. We therefore cannot say where the rover is.
> AR: تقول صفحة التحدي إن المركبات الجوالة القمرية «أُوقفت بصورة دائمة على القمر». ولا تذكر صفحات ناسا التي قرأناها موقع المركبة النهائي ولا أنها تُركت على القمر. وتقول ناسا في تاريخها إن المتحكمين وجّهوا كاميرا تلفزيون المركبة الجوالة نحو المركبة القمرية عند إقلاعها. لذلك لا نستطيع القول أين هي المركبة.

Source: https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/

**H8. `src/data/missions/lrv-apollo-17.json` — card.assetId**  
Before: 
> moon-lm-lrv-img-as17-cernan-drives

After: 
> moon-lm-lrv-img-as17-lrv-closeup

Source: https://images.nasa.gov/details/as17-137-20979

**H9. `src/data/missions/lrv-apollo-17.json` — intro.assetId**  
Before: 
> moon-lm-lrv-img-as17-cernan-drives

After: 
> moon-lm-lrv-img-as17-lrv-closeup

Source: https://images.nasa.gov/details/as17-137-20979

**H10. `src/data/missions/lrv-apollo-17.json` — lrv17-4 gallery image**  
Before: 
> moon-lm-lrv-img-as17-cernan-drives

After: 
> moon-lm-lrv-img-as17-boulder-lrv

Source: https://images.nasa.gov/details/as17-146-22294

**H11. `src/data/missions/lrv-apollo-17.json` — lrv17-3 gallery image**  
Before: 
> (no photo)

After: 
> as17-147-22526 (short checkout of the unloaded rover) with corrected description

Source: https://images.nasa.gov/details/as17-147-22526

**H12. `src/data/missions/lrv-apollo-15.json` — card.tagline**  
Before: 
> EN: An electric moon buggy that drove 27.8 km. What NASA pages say about where it ended up: nothing.
> AR: عربة قمرية كهربائية قطعت 27.8 كم. أما مكان نهايتها فلا تذكره صفحات ناسا.

After: 
> EN: An electric moon buggy that drove 27.8 km. NASA pages we read do not say where it ended up.
> AR: مركبة جوالة قمرية كهربائية قطعت 27.8 كم. ولا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف.

Source: LRV / A15D (wording)

**H13. `src/data/missions/lrv-apollo-15.json` — timeline t-claim**  
Before: 
> EN: The Space Apps challenge page says LRVs were "parked permanently on the Moon"
> AR: تقول صفحة التحدي إن المركبات الجوالة «أُوقفت بصورة دائمة على القمر» [2026]

After: 
> (removed: "2026" is not a mission date; the claim stays in the ending chapter, labelled challenge-page)

Source: CH

**H14. `src/data/missions/lrv-apollo-15.json` — timeline t-liftoff**  
Before: (none)

After: 
> EN: The Lunar Module lifts off, and the liftoff is seen on Earth via the rover's TV camera
> AR: تقلع المركبة القمرية، ويُرى الإقلاع على الأرض عبر كاميرا تلفزيون المركبة الجوالة

Source: https://www.nasa.gov/missions/apollo/apollo-15-mission-details/

**H15. `src/data/missions/lrv-apollo-15.json` — lrv15-5 basicText**  
Before: 
> EN: NASA pages we read do not say where this rover ended up, or that it was left on the Moon. The challenge page says rovers were "parked permanently". That is only the challenge page's claim.
> AR: لا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف ولا أنها تُركت على القمر. وتقول صفحة التحدي إن المركبات «أُوقفت بصورة دائمة»، وهذا ادعاء صفحة التحدي وحدها.

After: 
> EN: NASA pages we read do not say where this rover ended up, or that it was left. NASA does say its TV camera showed the Lunar Module's liftoff to Earth. The challenge page says rovers were "parked permanently": only its claim.
> AR: لا تذكر صفحات ناسا التي قرأناها أين انتهى بها المطاف ولا أنها تُركت. وتذكر ناسا أن كاميرا تلفزيون المركبة نقلت إقلاع المركبة القمرية إلى الأرض. وتقول صفحة التحدي إن المركبات «أُوقفت بصورة دائمة»، وهذا ادعاؤها وحدها.

Source: https://www.nasa.gov/missions/apollo/apollo-15-mission-details/

**H16. `src/data/missions/lrv-apollo-15.json` — lrv15-5 fact f3**  
Before: (none)

After: 
> EN: NASA's Apollo 15 mission details: "For the first time, the lunar liftoff was seen on Earth via the LRV television camera."
> AR: تفاصيل مهمة أبولو 15 لدى ناسا: «للمرة الأولى، شوهد إقلاع المركبة القمرية على الأرض عبر كاميرا التلفزيون في المركبة الجوالة». (الترجمة العربية من إعدادنا.)

Source: https://www.nasa.gov/missions/apollo/apollo-15-mission-details/

**H17. `src/data/missions/lrv-apollo-15.json` — lrv15-5 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-a15d

Source: citation fix

**H18. `src/data/missions/lrv-apollo-15.json` — ending.finalChapterText**  
Before: 
> EN: The challenge page says the Lunar Roving Vehicles were "parked permanently on the Moon". NASA pages we read do not state the rover's final location, or that it was left on the Moon. We therefore cannot say where it is.
> AR: تقول صفحة التحدي إن المركبات الجوالة القمرية «أُوقفت بصورة دائمة على القمر». ولا تذكر صفحات ناسا التي قرأناها موقع المركبة النهائي ولا أنها تُركت على القمر. لذلك لا نستطيع القول أين هي.

After: 
> EN: The challenge page says the Lunar Roving Vehicles were "parked permanently on the Moon". NASA pages we read do not state the rover's final location, or that it was left on the Moon. NASA's Apollo 15 mission details say the lunar liftoff was seen on Earth via the rover's television camera. We therefore cannot say where the rover is.
> AR: تقول صفحة التحدي إن المركبات الجوالة القمرية «أُوقفت بصورة دائمة على القمر». ولا تذكر صفحات ناسا التي قرأناها موقع المركبة النهائي ولا أنها تُركت على القمر. وتقول تفاصيل مهمة أبولو 15 لدى ناسا إن إقلاع المركبة القمرية شوهد على الأرض عبر كاميرا تلفزيون المركبة الجوالة. لذلك لا نستطيع القول أين هي المركبة.

Source: https://www.nasa.gov/missions/apollo/apollo-15-mission-details/

**H19. `src/data/missions/surveyor-3.json` — surv3-3 exploreMoreText**  
Before: 
> EN: NASA pages differ by 36 seconds on the exact landing time, so only the date is given here.
> AR: تختلف صفحات ناسا بمقدار 36 ثانية في وقت الهبوط بالضبط، لذلك نذكر التاريخ فقط.

After: 
> EN: NASA pages differ: NASA Science gives 00:04:17 UT on 20 April 1967, NSSDCA gives 00:04:53 UT, and NASA captions for the Apollo 12 photos say "April 19, 1967" (US time). During the descent Surveyor 3 bounced off the surface twice, to about 10 m and then about 3 m, before settling on the third touchdown.
> AR: تختلف صفحات ناسا: فصفحة NASA Science تذكر 00:04:17 بالتوقيت العالمي في 20 أبريل 1967، وتذكر NSSDCA الساعة 00:04:53، بينما تقول تعليقات ناسا على صور أبولو 12 «19 أبريل 1967» (بالتوقيت الأمريكي). وخلال الهبوط ارتدّت سيرفيور 3 عن السطح مرتين، إلى نحو 10 م ثم نحو 3 م، قبل أن تستقر عند الملامسة الثالثة.

Source: https://science.nasa.gov/mission/surveyor-3/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html ; https://images.nasa.gov/details/AS12-48-7134

**H20. `src/data/missions/surveyor-3.json` — surv3-3 fact f1 note**  
Before: 
> EN: Two NASA pages give landing times 36 seconds apart.
> AR: تذكر صفحتان لناسا وقتين للهبوط بينهما 36 ثانية.

After: 
> EN: NASA Science: 00:04:17 UT, 20 April; NSSDCA: 00:04:53 UT, 20 April; NASA photo captions: "April 19, 1967". We give the date 20 April (UT).
> AR: ناسا Science: 00:04:17 بالتوقيت العالمي في 20 أبريل؛ NSSDCA: 00:04:53 في 20 أبريل؛ تعليقات صور ناسا: «19 أبريل 1967». ونذكر تاريخ 20 أبريل (بالتوقيت العالمي).

Source: https://science.nasa.gov/mission/surveyor-3/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H21. `src/data/missions/surveyor-3.json` — surv3-3 fact f2 (position conflict)**  
Before: (none)

After: 
> EN: Landing position: 3° S, 23.41° W (NASA Science) or 3.01° S, 336.66° E, which is 23.34° W (NSSDCA).
> AR: موقع الهبوط: 3° جنوباً و23.41° غرباً (NASA Science) أو 3.01° جنوباً و336.66° شرقاً، أي 23.34° غرباً (NSSDCA).

Source: https://science.nasa.gov/mission/surveyor-3/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H22. `src/data/missions/surveyor-3.json` — surv3-3 fact f3 (double bounce)**  
Before: (none)

After: 
> EN: NASA Science: the main engine did not cut off at the correct moment, and Surveyor 3 "bounced off the lunar surface twice"; the third time "the lander settled down to a soft-landing".
> AR: تقول NASA Science: لم يتوقف المحرك الرئيسي في اللحظة الصحيحة، و«ارتدّت سيرفيور 3 عن سطح القمر مرتين»، وفي المرة الثالثة «استقرّت المركبة في هبوط ناعم». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-3/

**H23. `src/data/missions/surveyor-3.json` — intro.whereGoing**  
Before: 
> EN: Southeast Oceanus Procellarum on the Moon, near 3° S, 23.41° W.
> AR: جنوب شرق محيط العواصف على القمر، قرب 3° جنوباً و23.41° غرباً.

After: 
> EN: Southeast Oceanus Procellarum on the Moon, near 3° S, 23.4° W.
> AR: جنوب شرق محيط العواصف على القمر، قرب 3° جنوباً و23.4° غرباً.

Source: https://science.nasa.gov/mission/surveyor-3/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H24. `src/data/missions/surveyor-3.json` — timeline t-landing basis**  
Before: 
> nasa-page

After: 
> disputed

Source: https://science.nasa.gov/mission/surveyor-3/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H25. `src/data/missions/surveyor-3.json` — timeline t-landing label**  
Before: 
> EN: Lands on the Moon
> AR: الهبوط على القمر

After: 
> EN: Lands on the Moon (NASA pages give 19 or 20 April; see the chapter)
> AR: الهبوط على القمر (تذكر صفحات ناسا 19 أو 20 أبريل؛ انظر الفصل)

Source: https://science.nasa.gov/mission/surveyor-3/

**H26. `src/data/missions/surveyor-3.json` — surv3-2 fact f1 (text + source)**  
Before: 
> EN: Launch: 17 Apr 1967, 07:05:01, from LC-36B.
> AR: الإطلاق: 17 أبريل 1967 الساعة 07:05:01 من المنصة LC-36B.

After: 
> EN: Launch: 17 Apr 1967, 07:05:01 UT, from Launch Complex 36B.
> AR: الإطلاق: 17 أبريل 1967 الساعة 07:05:01 بالتوقيت العالمي من منصة الإطلاق LC-36B.

Source: https://science.nasa.gov/mission/surveyor-3/

**H27. `src/data/missions/surveyor-3.json` — surv3-2 fact f1 source**  
Before: 
> masv-src-surv

After: 
> masv-src-s3

Source: citation fix: time and pad are on NASA Science, not on the NSSDCA overview

**H28. `src/data/missions/surveyor-3.json` — surv3-4 fact f1 source**  
Before: 
> masv-src-surv

After: 
> masv-src-s3

Source: citation fix: 6,326 pictures is on NASA Science, not on the NSSDCA overview

**H29. `src/data/missions/surveyor-6.json` — intro.whereGoing**  
Before: 
> EN: Sinus Medii on the Moon, at 0.46° N, 1.37° W.
> AR: خليج الوسط على القمر، عند 0.46° شمالاً و1.37° غرباً.

After: 
> EN: Sinus Medii on the Moon, at about 0.5° N, 1.4° W.
> AR: خليج الوسط على القمر، عند نحو 0.5° شمالاً و1.4° غرباً.

Source: https://science.nasa.gov/mission/surveyor-6/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H30. `src/data/missions/surveyor-6.json` — unit.restingPlace**  
Before: 
> EN: Sinus Medii (landing site), 0.46° N, 1.37° W
> AR: خليج الوسط (موقع الهبوط)، 0.46° شمالاً و1.37° غرباً

After: 
> EN: Sinus Medii (landing site), about 0.5° N, 1.4° W
> AR: خليج الوسط (موقع الهبوط)، عند نحو 0.5° شمالاً و1.4° غرباً

Source: https://science.nasa.gov/mission/surveyor-6/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H31. `src/data/missions/surveyor-6.json` — surv6-3 basicText**  
Before: 
> EN: Surveyor 6 landed on 10 November 1967 in Sinus Medii, at 0.46° N, 1.37° W.
> AR: هبطت سيرفيور 6 في 10 نوفمبر 1967 في خليج الوسط، عند 0.46° شمالاً و1.37° غرباً.

After: 
> EN: Surveyor 6 landed on 10 November 1967 in Sinus Medii, at about 0.5° N, 1.4° W. NASA announced 0.46° N, 1.37° W and says it was probably closer to 0.473° N, 1.427° W.
> AR: هبطت سيرفيور 6 في 10 نوفمبر 1967 في خليج الوسط، عند نحو 0.5° شمالاً و1.4° غرباً. أعلنت ناسا 0.46° شمالاً و1.37° غرباً وتقول إن الموقع على الأرجح أقرب إلى 0.473° شمالاً و1.427° غرباً.

Source: https://science.nasa.gov/mission/surveyor-6/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H32. `src/data/missions/surveyor-6.json` — surv6-3 fact f1 (text, source, basis)**  
Before: 
> EN: Landing: 10 Nov 1967, 01:01:04.
> AR: الهبوط: 10 نوفمبر 1967 الساعة 01:01:04.

After: 
> EN: Landing: 10 Nov 1967, 01:01:04 UT (NASA Science) or 01:01:06 UT (NSSDCA).
> AR: الهبوط: 10 نوفمبر 1967 الساعة 01:01:04 بالتوقيت العالمي (NASA Science) أو 01:01:06 (NSSDCA).

Source: https://science.nasa.gov/mission/surveyor-6/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H33. `src/data/missions/surveyor-6.json` — surv6-3 fact f1 source**  
Before: 
> masv-src-surv (NSSDCA overview: 01:01:06 UT)

After: 
> masv-src-s6 (01:01:04 UT), conflict recorded

Source: citation fix

**H34. `src/data/missions/surveyor-6.json` — surv6-3 fact f2 (position conflict)**  
Before: (none)

After: 
> EN: NASA Science: "announced as 0.46 degrees north latitude and 1.37 degrees west longitude (but probably closer to 0.473 degrees north latitude and 1.427 degrees west longitude)"; NSSDCA: 0.49° N, 358.60° E (which is 1.40° W).
> AR: تقول NASA Science: «أُعلن عنه عند 0.46 درجة شمالاً و1.37 درجة غرباً (لكنه على الأرجح أقرب إلى 0.473 درجة شمالاً و1.427 درجة غرباً)»؛ وتذكر NSSDCA: 0.49° شمالاً و358.60° شرقاً (أي 1.40° غرباً). (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-6/ ; https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html

**H35. `src/data/missions/surveyor-6.json` — timeline t-landing basis**  
Before: 
> nasa-page

After: 
> disputed

Source: https://science.nasa.gov/mission/surveyor-6/

**H36. `src/data/missions/surveyor-6.json` — surv6-2 fact f1 (text + source)**  
Before: 
> EN: Launch: 7 Nov 1967, 07:39:01.
> AR: الإطلاق: 7 نوفمبر 1967 الساعة 07:39:01.

After: 
> EN: Launch: 7 Nov 1967, 07:39:01 UT, from Launch Complex 36B.
> AR: الإطلاق: 7 نوفمبر 1967 الساعة 07:39:01 بالتوقيت العالمي من منصة الإطلاق 36B.

Source: https://science.nasa.gov/mission/surveyor-6/

**H37. `src/data/missions/surveyor-6.json` — surv6-2 fact f1 source**  
Before: 
> masv-src-surv

After: 
> masv-src-s6

Source: citation fix: time and pad are on NASA Science, not on the NSSDCA overview

**H38. `src/data/missions/surveyor-6.json` — surv6-4 fact f1 (text + source)**  
Before: 
> EN: 29,952 images were returned.
> AR: أُعيدت 29,952 صورة.

After: 
> EN: NASA Science: 29,952 images "during less than two weeks of operation".
> AR: تقول NASA Science: 29,952 صورة «خلال أقل من أسبوعين من التشغيل». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-6/

**H39. `src/data/missions/surveyor-6.json` — surv6-4 fact f1 source**  
Before: 
> masv-src-surv

After: 
> masv-src-s6

Source: citation fix: 29,952 images is on NASA Science, not on the NSSDCA overview

**H40. `src/data/missions/apollo-15-falcon.json` — falcon-5 fact f2 (deliberate impact)**  
Before: (none)

After: 
> EN: NSSDCA: "The Apollo Lunar Modules were deliberately targeted to impact the Moon to provide artificial moonquake sources for seismic experiments."
> AR: تقول NSSDCA: «كانت المركبات القمرية لأبولو تُوجَّه عمداً لتصطدم بالقمر لتوفير مصادر لهزات قمرية صناعية للتجارب السيزمية». (الترجمة العربية من إعدادنا.)

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H41. `src/data/missions/apollo-15-falcon.json` — falcon-5 exploreMoreText (new)**  
Before: (none)

After: 
> EN: NASA's "Where are they now?" page lists Falcon as having impacted the Moon on 3 August 1971 at 03:03:37.0 UT, and says the Apollo Lunar Modules were deliberately targeted to impact the Moon.
> AR: تُدرج صفحة «أين هي الآن؟» لدى ناسا مركبة فالكون بأنها اصطدمت بالقمر في 3 أغسطس 1971 الساعة 03:03:37.0 بالتوقيت العالمي، وتقول إن المركبات القمرية لأبولو كانت تُوجَّه عمداً لتصطدم بالقمر.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H42. `src/data/missions/apollo-15-falcon.json` — falcon-5 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-where

Source: citation fix

**H43. `src/data/missions/apollo-11-eagle.json` — card.tagline**  
Before: 
> EN: The first crewed vehicle to land on the Moon. Its descent stage is still there.
> AR: أول مركبة مأهولة تهبط على القمر. ومرحلة هبوطها ما زالت هناك.

After: 
> EN: The first crewed vehicle to land on the Moon. Its descent stage was left behind there.
> AR: أول مركبة مأهولة تهبط على القمر. وقد تُركت مرحلة هبوطها هناك.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C

**H44. `src/data/missions/apollo-11-eagle.json` — eagle-4 exploreMoreText**  
Before: 
> EN: NASA's mission overview says 21 hours 36 minutes. One photo caption says "22-hour stay", which is a rounding. The moonwalk ended at 05:11:13 UT.
> AR: تذكر ناسا في نظرتها العامة 21 ساعة و36 دقيقة، بينما يذكر تعليق على صورة «22 ساعة»، وهو تقريب. وانتهى السير على القمر عند 05:11:13 بالتوقيت العالمي.

After: 
> EN: NASA's mission overview says 21 hours 36 minutes. One NASA photo caption says "22-hour stay". The moonwalk ended at 05:11:13 UT.
> AR: تذكر النظرة العامة لمهمة أبولو 11 لدى ناسا 21 ساعة و36 دقيقة، بينما يذكر تعليق على إحدى صور ناسا «إقامة 22 ساعة». وانتهى السير على القمر عند 05:11:13 بالتوقيت العالمي.

Source: https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/ ; https://www.nasa.gov/mission/apollo-11/

**H45. `src/data/missions/apollo-11-eagle.json` — eagle-4 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-a11o

Source: citation fix

**H46. `src/data/missions/apollo-11-eagle.json` — timeline t-jettison dateLabel**  
Before: 
> 1969-07-22

After: 
> 1969-07-21/22

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H47. `src/data/missions/apollo-11-eagle.json` — timeline t-jettison label**  
Before: 
> EN: Ascent stage jettisoned into lunar orbit (00:01:01 UT)
> AR: التخلص من مرحلة الصعود في مدار القمر (00:01:01 بالتوقيت العالمي)

After: 
> EN: Ascent stage jettisoned into lunar orbit: 21 Jul 23:41 UT or 22 Jul 00:01:01 UT (NASA pages differ)
> AR: التخلص من مرحلة الصعود في مدار القمر: 21 يوليو 23:41 أو 22 يوليو 00:01:01 بالتوقيت العالمي (صفحات ناسا تختلف)

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H48. `src/data/missions/apollo-11-eagle.json` — timeline t-jettison basis**  
Before: 
> nasa-page

After: 
> disputed

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H49. `src/data/missions/apollo-11-eagle.json` — eagle-6 basicText**  
Before: 
> EN: The descent stage was left behind on the Moon. The ascent stage lifted off on 21 July and was jettisoned in lunar orbit on 22 July. NASA says its fate is not known.
> AR: تُركت مرحلة الهبوط على القمر. وأقلعت مرحلة الصعود في 21 يوليو وجرى التخلص منها في مدار القمر في 22 يوليو. وتقول ناسا إن مصيرها غير معروف.

After: 
> EN: The descent stage was left behind on the Moon. The ascent stage lifted off on 21 July, then was jettisoned in lunar orbit at 23:41 UT that day or 00:01 UT on 22 July: NASA pages differ. Its fate is not known.
> AR: تُركت مرحلة هبوط إيغل على القمر. وأقلعت مرحلة الصعود في 21 يوليو، ثم جرى التخلص منها في مدار القمر الساعة 23:41 بالتوقيت العالمي في ذلك اليوم أو 00:01 في 22 يوليو: صفحات ناسا تختلف. ومصيرها غير معروف.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H50. `src/data/missions/apollo-11-eagle.json` — eagle-6 fact f3 (jettison conflict)**  
Before: (none)

After: 
> EN: Jettison time: 00:01:01 UT on 22 July (NSSDCA Lunar Module page) or 23:41 UT on 21 July (NSSDCA "Where are they now?" page).
> AR: وقت التخلص من مرحلة الصعود: 00:01:01 بالتوقيت العالمي في 22 يوليو (صفحة المركبة القمرية لدى NSSDCA) أو 23:41 في 21 يوليو (صفحة «أين هي الآن؟» لدى NSSDCA).

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**H51. `src/data/missions/apollo-11-eagle.json` — eagle-6 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-where

Source: citation fix

**H52. `src/data/missions/apollo-11-eagle.json` — ending.finalChapterText**  
Before: 
> EN: NASA says the descent stage served as a platform for launching the ascent stage and was left behind on the Moon. The ascent stage was jettisoned into lunar orbit on 22 July 1969. Its fate is not known, but it is assumed to have crashed within the following 1 to 4 months.
> AR: تقول ناسا إن مرحلة الهبوط كانت منصة لإطلاق مرحلة الصعود وتُركت على القمر. أما مرحلة الصعود فقد جرى التخلص منها في مدار القمر في 22 يوليو 1969. ومصيرها غير معروف، لكن يُفترض أنها اصطدمت بالقمر خلال شهر إلى أربعة أشهر.

After: 
> EN: NASA says the descent stage served as a platform for launching the ascent stage and was left behind on the Moon. NASA's landing-site table lists the Lunar Module at 0.67416° N, 23.47314° E, determined from Lunar Reconnaissance Orbiter images. The ascent stage was jettisoned into lunar orbit at 23:41 UT on 21 July or 00:01 UT on 22 July 1969 (NASA pages differ). Its fate is not known, but it is assumed to have crashed within the following 1 to 4 months.
> AR: تقول ناسا إن مرحلة الهبوط كانت منصة لإطلاق مرحلة الصعود وتُركت على القمر. ويُدرج جدول مواقع الهبوط لدى ناسا المركبة القمرية عند 0.67416° شمالاً و23.47314° شرقاً، حُدّد من صور مسبار استطلاع القمر. أما مرحلة الصعود فجرى التخلص منها في مدار القمر الساعة 23:41 بالتوقيت العالمي في 21 يوليو أو 00:01 في 22 يوليو 1969 (صفحات ناسا تختلف). ومصيرها غير معروف، لكن يُفترض أنها اصطدمت بالقمر خلال شهر إلى أربعة أشهر.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**H53. `src/data/missions/apollo-11-eagle.json` — timeline t-launch source**  
Before: 
> moon-lm-lrv-src-lm11

After: 
> moon-lm-lrv-src-csm11

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A (13:32 UT, Pad 39A)

**H54. `src/data/missions/apollo-11-eagle.json` — timeline t-splash source**  
Before: 
> moon-lm-lrv-src-lm11

After: 
> moon-lm-lrv-src-csm11

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A (splashdown 16:50:35 UT)

**H55. `src/data/missions/apollo-11-eagle.json` — eagle-2 fact f1 source**  
Before: 
> moon-lm-lrv-src-lm11

After: 
> moon-lm-lrv-src-csm11

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A

**H56. `src/data/missions/apollo-11-eagle.json` — eagle-2 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-csm11

Source: citation fix

**H57. `src/data/missions/apollo-11-eagle.json` — eagle-5 basicText**  
Before: 
> EN: The crew left the descent stage, a small science package (EASEP), a laser reflector, a flag and a plaque. It reads: "Here men from the planet Earth first set foot on the Moon July 1969, A.D. We came in peace for all mankind."
> AR: ترك الرائدان مرحلة الهبوط وحزمة علمية صغيرة (EASEP) وعاكساً لليزر وعلماً ولوحة. ونصها: «هنا وطئ رجال من كوكب الأرض القمر لأول مرة، يوليو 1969 ميلادية. جئنا بسلام من أجل البشرية جمعاء».

After: 
> EN: The crew left the descent stage, a small science package (EASEP) and a laser reflector. They put up an American flag, and a plaque was attached to the descent stage.
> AR: ترك الرائدان مرحلة الهبوط وحزمة علمية صغيرة (EASEP) وعاكساً لليزر. ونصبا علماً أمريكياً، وكانت لوحة مثبّتة على مرحلة الهبوط.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

**H58. `src/data/missions/apollo-11-eagle.json` — eagle-5 fact f1**  
Before: 
> EN: Left on the Moon: the descent stage, EASEP, a laser-ranging retroreflector, a flag and a plaque.
> AR: تُركت على القمر: مرحلة الهبوط وEASEP وعاكس ليزر وعلم ولوحة.

After: 
> EN: Left on the Moon: the descent stage, EASEP and a laser-ranging retroreflector. NASA says the astronauts "put up an American flag".
> AR: تُركت على القمر: مرحلة الهبوط وEASEP وعاكس ليزر. وتقول ناسا إن الرائدين «نصبا علماً أمريكياً».

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C

**H59. `src/data/missions/apollo-11-eagle.json` — eagle-5 fact f2 (plaque on the descent stage)**  
Before: (none)

After: 
> EN: NASA's mission overview: "Attached to the descent stage was a commemorative plaque signed by President Richard M. Nixon and the three astronauts."
> AR: تقول النظرة العامة لمهمة أبولو 11 لدى ناسا: «كانت لوحة تذكارية موقّعة من الرئيس ريتشارد نيكسون والرواد الثلاثة مثبّتة على مرحلة الهبوط». (الترجمة العربية من إعدادنا.)

Source: https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

**H60. `src/data/missions/apollo-11-eagle.json` — eagle-5 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-a11o

Source: citation fix

**H61. `src/data/missions/apollo-11-eagle.json` — ending.notStated[0]**  
Before: 
> EN: NASA pages we read do not give the exact resting coordinates of the descent stage; we use the landing site.
> AR: لا تذكر صفحات ناسا التي قرأناها إحداثيات مرحلة الهبوط بدقة، لذلك نستخدم موقع الهبوط.

After: 
> EN: NASA pages we read do not describe the present condition of the descent stage.
> AR: لا تذكر صفحات ناسا التي قرأناها الحالة الراهنة لمرحلة الهبوط.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**H62. `src/data/missions/apollo-11-eagle.json` — ending.legacyText**  
Before: 
> EN: Eagle was the first crewed vehicle to land on the Moon. Its descent stage, with the plaque, flag and instruments the crew left, marks Tranquility Base.
> AR: كانت إيغل أول مركبة مأهولة تهبط على القمر. وتُعلّم مرحلة هبوطها، مع اللوحة والعلم والأجهزة التي تركها الرائدان، قاعدة الهدوء.

After: 
> EN: Eagle was the first crewed vehicle to land on the Moon. Its descent stage, with the plaque attached to it and the instruments the crew left, marks Tranquility Base.
> AR: كانت إيغل أول مركبة مأهولة تهبط على القمر. وتُعلّم مرحلة هبوطها، ومعها اللوحة المثبّتة عليها والأجهزة التي تركها الرائدان، قاعدة الهدوء.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

### Medium (48)

**M1. `src/data/assets/*.json` — assets/moon-lm-lrv.json moon-lm-lrv-img-as17-lrv-closeup**  
Before: 
> credit: NASA/JSC | alt EN: Close-up of the Apollo 17 Lunar Roving Vehicle.

After: 
> credit: NASA/JSC | alt EN: Close-up of the Apollo 17 Lunar Roving Vehicle, photographed by Cernan, with a makeshift repair on its right rear fender; Schmitt is seated in the rover. NASA says a hammer knocked part of the fender off during the first moonwalk and the crew repaired it early in the second, using lunar maps and clamps.
> alt AR: صورة قريبة للمركبة الجوالة القمرية في أبولو 17 التقطها سيرنان، وفيها إصلاح مؤقت للرفرف الخلفي الأيمن؛ ويجلس شميت في المركبة. وتقول ناسا إن مطرقة أطاحت بجزء من الرفرف خلال السير الأول، وأصلحه الرائدان في بداية السير الثاني باستخدام خرائط قمرية ومشابك.

Source: https://images.nasa.gov/details/as17-137-20979

**M2. `src/data/missions/lrv-apollo-17.json` — timeline t-eva1**  
Before: (none)

After: 
> EN: First moonwalk (23:54 UT 11 Dec to 07:06 UT 12 Dec): the rover is deployed and driven and the ALSEP is set up
> AR: السير الأول على القمر (23:54 بالتوقيت العالمي في 11 ديسمبر حتى 07:06 في 12 ديسمبر): تُنشر المركبة الجوالة وتُقاد وتُنصب محطة ALSEP

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-096C

**M3. `src/data/missions/lrv-apollo-17.json` — lrv17-6 fact f1 (Schmitt quote)**  
Before: (none)

After: 
> EN: Apollo 17 astronaut Harrison Schmitt, quoted by NSSDCA: "Without it, the major scientific discoveries of Apollo 15, 16, and 17 would not have been possible."
> AR: يقول رائد أبولو 17 هاريسون شميت، كما يقتبسه NSSDCA: «من دونها ما كانت الاكتشافات العلمية الكبرى لأبولو 15 و16 و17 ممكنة». (الترجمة العربية من إعدادنا.)

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html

**M4. `src/data/missions/lrv-apollo-15.json` — timeline t-eva1**  
Before: (none)

After: 
> EN: First moonwalk (13:13 to 19:46 UT): the rover is unloaded, deployed and driven; the first traverse is 10.3 km
> AR: السير الأول على القمر (13:13 إلى 19:46 بالتوقيت العالمي): تُنزَّل المركبة الجوالة وتُنشر وتُقاد؛ وتبلغ الرحلة الأولى 10.3 كم

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M5. `src/data/missions/lrv-apollo-15.json` — timeline t-eva2**  
Before: (none)

After: 
> EN: Second moonwalk: the rover is driven on a 12.5 km traverse
> AR: السير الثاني على القمر: تُقاد المركبة الجوالة في رحلة طولها 12.5 كم

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M6. `src/data/missions/lrv-apollo-15.json` — timeline t-eva3**  
Before: (none)

After: 
> EN: Third moonwalk: the rover is driven a total of 5.1 km
> AR: السير الثالث على القمر: تقطع المركبة الجوالة 5.1 كم في المجموع

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M7. `src/data/missions/lrv-apollo-15.json` — lrv15-6 fact f1 (Schmitt quote)**  
Before: (none)

After: 
> EN: Apollo 17 astronaut Harrison Schmitt, quoted by NSSDCA: "Without it, the major scientific discoveries of Apollo 15, 16, and 17 would not have been possible."
> AR: يقول رائد أبولو 17 هاريسون شميت، كما يقتبسه NSSDCA: «من دونها ما كانت الاكتشافات العلمية الكبرى لأبولو 15 و16 و17 ممكنة». (الترجمة العربية من إعدادنا.)

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html

**M8. `src/data/missions/alsep-apollo-12.json` — timeline t-quake**  
Before: 
> Nov 1969

After: 
> 1969-11-20

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html

**M9. `src/data/missions/alsep-apollo-12.json` — timeline t-quake label**  
Before: 
> EN: The lunar module's ascent stage is crashed into the Moon about 60 km away, making the first recorded artificial moonquake
> AR: تُصطدم المرحلة الصاعدة من المركبة القمرية بالقمر على بعد نحو 60 كم، فتُسجَّل أول هزة قمرية صناعية

After: 
> EN: The lunar module's ascent stage is crashed into the Moon about 60 km from the seismic station, making the first recorded artificial moonquake (22:17 UT)
> AR: تُصطدم مرحلة الصعود من المركبة القمرية بالقمر على بعد نحو 60 كم من محطة قياس الزلازل، فتُسجَّل أول هزة قمرية صناعية (22:17 بالتوقيت العالمي)

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html

**M10. `src/data/missions/alsep-apollo-12.json` — alsep12-5 basicText**  
Before: 
> EN: The lunar module's ascent stage was intentionally crashed into the Moon about 60 km from the seismic station. NASA says this made the first recorded artificial moonquake.
> AR: اصطدمت المرحلة الصاعدة من المركبة القمرية عمداً بالقمر على بعد نحو 60 كم من محطة قياس الزلازل. وتقول ناسا إن ذلك أحدث أول هزة قمرية صناعية مسجّلة.

After: 
> EN: On 20 November 1969 the lunar module's ascent stage was intentionally crashed into the Moon about 60 km from the seismic station. NASA says this made the first recorded artificial moonquake.
> AR: في 20 نوفمبر 1969 اصطدمت مرحلة الصعود من المركبة القمرية عمداً بالقمر على بعد نحو 60 كم من محطة قياس الزلازل. وتقول ناسا إن ذلك أحدث أول هزة قمرية صناعية مسجّلة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html

**M11. `src/data/missions/alsep-apollo-12.json` — alsep12-5 fact f2 (impact time)**  
Before: (none)

After: 
> EN: Impact: 20 November 1969, 22:17:17.7 UT, at 3.94° S, 21.20° W (NSSDCA, Earth-received time).
> AR: الاصطدام: 20 نوفمبر 1969 الساعة 22:17:17.7 بالتوقيت العالمي عند 3.94° جنوباً و21.20° غرباً (NSSDCA، وقت الاستقبال على الأرض).

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html

**M12. `src/data/missions/alsep-apollo-12.json` — alsep12-5 fact f3 (seismometer registered it)**  
Before: (none)

After: 
> EN: NASA's caption for the seismometer record: "The impact was registered by the Passive Seismic Experiment Package which was deployed on the moon by the Apollo 12 astronauts."
> AR: يقول وصف ناسا لسجل مقياس الزلازل: «سُجّل الاصطدام بواسطة حزمة التجربة السيزمية السلبية التي نصبها روّاد أبولو 12 على القمر». (الترجمة العربية من إعدادنا.)

Source: https://images.nasa.gov/details/S69-59547

**M13. `src/data/missions/alsep-apollo-12.json` — alsep12-5 sourceIds**  
Before: 
> (not listed)

After: 
> masv-src-impact

Source: citation fix

**M14. `src/data/missions/alsep-apollo-12.json` — alsep12-5 sourceIds**  
Before: 
> (not listed)

After: 
> masv-src-img-s69-59547

Source: citation fix

**M15. `src/data/missions/alsep-apollo-12.json` — alsep12-5 gallery image**  
Before: 
> (no photo)

After: 
> S69-59547 seismometer record

Source: https://images.nasa.gov/details/S69-59547

**M16. `src/data/missions/alsep-apollo-12.json` — alsep12-3 gallery image**  
Before: 
> (no photo)

After: 
> as12-47-6919 (Bean deploys the ALSEP)

Source: https://images.nasa.gov/details/as12-47-6919

**M17. `src/data/missions/alsep-apollo-12.json` — card.assetId**  
Before: 
> core-moon

After: 
> masv-img-as12-47-6919

Source: https://images.nasa.gov/details/as12-47-6919

**M18. `src/data/missions/alsep-apollo-12.json` — intro.assetId**  
Before: 
> core-moon

After: 
> masv-img-as12-47-6919

Source: https://images.nasa.gov/details/as12-47-6919

**M19. `src/data/missions/alsep-apollo-15.json` — alsep15-3 exploreMoreText (new: deployment + three moonwalk dates)**  
Before: (none)

After: 
> EN: NASA says the ALSEP was deployed at the end of the first moonwalk traverse, on 31 July 1971. The crew made three moonwalks, on 31 July, 1 August and 2 August 1971.
> AR: تقول ناسا إن ALSEP نُصبت في نهاية رحلة السير الأول على القمر، في 31 يوليو 1971. وقام الرائدان بثلاث رحلات سير على القمر، في 31 يوليو و1 أغسطس و2 أغسطس 1971.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M20. `src/data/missions/surveyor-3.json` — surv3-4 basicText**  
Before: 
> EN: Surveyor 3 sent back 6,326 TV pictures. Its surface sampler arm reached 1.5 m and could dig up to 18 cm into the soil.
> AR: أرسلت سيرفيور 3 إلى الأرض 6,326 صورة تلفزيونية. وكان ذراع أخذ العينات يصل إلى 1.5 م ويحفر حتى 18 سم في التربة.

After: 
> EN: Surveyor 3 sent back 6,326 TV pictures. Its surface sampler arm reached 1.5 m and could dig up to 18 cm. Its tests showed the soil was like wet sand, strong enough for a Lunar Module.
> AR: أرسلت سيرفيور 3 إلى الأرض 6,326 صورة تلفزيونية. وكان ذراع أخذ العينات يصل إلى 1.5 م ويحفر حتى 18 سم. وأظهرت اختباراتها أن التربة تشبه الرمل المبلّل وتكفي لتحمّل مركبة قمرية.

Source: https://science.nasa.gov/mission/surveyor-3/

**M21. `src/data/missions/surveyor-3.json` — surv3-4 fact f2 (soil result)**  
Before: (none)

After: 
> EN: NASA Science: "scientists concluded that lunar soil had a consistency similar to wet sand, with a bearing strength of about 10 pounds per square inch (0.7 kilograms per square centimeter, or 98 kilopascals) — in other words, solid enough to support an Apollo Lunar Module."
> AR: تقول NASA Science: «استنتج العلماء أن تربة القمر لها قوام يشبه الرمل المبلّل، وقدرة تحمّل نحو 10 أرطال للبوصة المربعة (0.7 كغ للسنتيمتر المربع، أو 98 كيلوباسكال) — أي أنها صلبة بما يكفي لتحمّل مركبة قمرية من أبولو». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-3/

**M22. `src/data/missions/surveyor-3.json` — discoveries d1**  
Before: (none)

After: 
> EN: Moon soil strong enough for a Lunar Module
> AR: تربة القمر تكفي لتحمّل مركبة قمرية

Source: https://science.nasa.gov/mission/surveyor-3/

**M23. `src/data/missions/surveyor-3.json` — surv3-5 basicText**  
Before: 
> EN: The last contact with Surveyor 3 was on 4 May 1967. After that the lander was inactive. The pages we read do not say why contact ended.
> AR: كان آخر اتصال بسيرفيور 3 في 4 مايو 1967، ثم صارت المركبة غير نشطة. ولا تذكر الصفحات التي قرأناها سبب انتهاء الاتصال.

After: 
> EN: The last contact with Surveyor 3 was on 4 May 1967, two days after the lunar night began. After that the lander was inactive. The pages we read do not say what caused contact to end.
> AR: كان آخر اتصال بسيرفيور 3 في 4 مايو 1967، بعد يومين من بدء الليل القمري، ثم صارت المركبة غير نشطة. ولا تذكر الصفحات التي قرأناها ما الذي تسبّب في انتهاء الاتصال.

Source: https://science.nasa.gov/mission/surveyor-3/

**M24. `src/data/missions/surveyor-3.json` — surv3-5 fact f1**  
Before: 
> EN: Last contact: 4 May 1967.
> AR: آخر اتصال: 4 مايو 1967.

After: 
> EN: Last contact: 4 May 1967, "two days after the lunar night began".
> AR: آخر اتصال: 4 مايو 1967، «بعد يومين من بدء الليل القمري».

Source: https://science.nasa.gov/mission/surveyor-3/

**M25. `src/data/missions/surveyor-3.json` — ending.notStated[0]**  
Before: 
> EN: The pages we read do not say why contact ended on 4 May 1967.
> AR: لا تذكر الصفحات التي قرأناها سبب انتهاء الاتصال في 4 مايو 1967.

After: 
> EN: NASA Science gives the timing ("two days after the lunar night began") but the pages we read do not say what caused contact to end on 4 May 1967.
> AR: تذكر NASA Science التوقيت («بعد يومين من بدء الليل القمري») ولا تذكر الصفحات التي قرأناها ما الذي تسبّب في انتهاء الاتصال في 4 مايو 1967.

Source: https://science.nasa.gov/mission/surveyor-3/

**M26. `src/data/missions/surveyor-3.json` — ending.finalChapterText**  
Before: 
> EN: NASA gives 4 May 1967 as the last contact with Surveyor 3. By November 1969 NASA calls it the inactive Surveyor 3 lander, and Apollo 12 astronauts took about 10 kg of its parts.
> AR: تذكر ناسا 4 مايو 1967 تاريخاً لآخر اتصال بسيرفيور 3. وفي نوفمبر 1969 تصفها ناسا بأنها غير نشطة، وأخذ روّاد أبولو 12 نحو 10 كغ من أجزائها.

After: 
> EN: NASA gives 4 May 1967, two days after the lunar night began, as the last contact with Surveyor 3. By November 1969 NASA calls it the inactive Surveyor 3 lander, and Apollo 12 astronauts took about 10 kg of its parts.
> AR: تذكر ناسا 4 مايو 1967، بعد يومين من بدء الليل القمري، تاريخاً لآخر اتصال بسيرفيور 3. وفي نوفمبر 1969 تصفها ناسا بأنها غير نشطة، وأخذ روّاد أبولو 12 نحو 10 كغ من أجزائها.

Source: https://science.nasa.gov/mission/surveyor-3/

**M27. `src/data/missions/surveyor-3.json` — surv3-6 exploreMoreText (new)**  
Before: (none)

After: 
> EN: NASA Science says the parts were recovered "to allow scientists to evaluate the effects of nearly two-and-a-half years of exposure on the Moon's surface".
> AR: تقول NASA Science إن الأجزاء استُعيدت «ليتمكّن العلماء من تقييم آثار نحو سنتين ونصف من التعرّض لسطح القمر».

Source: https://science.nasa.gov/mission/surveyor-3/

**M28. `src/data/missions/surveyor-3.json` — surv3-6 fact f3 (elapsed time)**  
Before: (none)

After: 
> EN: From landing (20 April 1967) to the visit (19-20 November 1969) is about two and a half years. NASA Science says both "More than three years later" and "nearly two-and-a-half years of exposure".
> AR: من الهبوط (20 أبريل 1967) إلى الزيارة (19-20 نوفمبر 1969) نحو سنتين ونصف. وتقول NASA Science عبارتين مختلفتين: «بعد أكثر من ثلاث سنوات» و«نحو سنتين ونصف من التعرّض».

Source: https://science.nasa.gov/mission/surveyor-3/

**M29. `src/data/missions/surveyor-6.json` — surv6-4 exploreMoreText (new)**  
Before: (none)

After: 
> EN: NASA says the alpha-scattering instrument acquired about 30 hours of data on the chemical composition of the lunar surface.
> AR: تقول ناسا إن مطياف التشتت ألفا جمع نحو 30 ساعة من البيانات عن التركيب الكيميائي لسطح القمر.

Source: https://science.nasa.gov/mission/surveyor-6/

**M30. `src/data/missions/surveyor-6.json` — surv6-4 fact f2 (chemistry data)**  
Before: (none)

After: 
> EN: NASA Science: "the alpha-scattering instrument acquired about 30 hours of data on the chemical composition of the lunar surface."
> AR: تقول NASA Science: «جمع مطياف التشتت ألفا نحو 30 ساعة من البيانات عن التركيب الكيميائي لسطح القمر». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-6/

**M31. `src/data/missions/surveyor-6.json` — surv6-5 basicText**  
Before: 
> EN: On 17 November 1967 Surveyor 6 became the first spacecraft to be launched from the Moon's surface.
> AR: في 17 نوفمبر 1967 أصبحت سيرفيور 6 أول مركبة فضائية تنطلق من سطح القمر.

After: 
> EN: On 17 November 1967 Surveyor 6 fired its thrusters briefly and became the first spacecraft to be launched from the Moon's surface. It rose only about 3 m (10 ft) and landed about 2.5 m (8 ft) west.
> AR: في 17 نوفمبر 1967 شغّلت سيرفيور 6 دوافعها لفترة وجيزة وأصبحت أول مركبة فضائية تنطلق من سطح القمر. ارتفعت نحو 3 م فقط (10 أقدام) وهبطت على بعد نحو 2.5 م (8 أقدام) إلى الغرب.

Source: https://science.nasa.gov/mission/surveyor-6/

**M32. `src/data/missions/surveyor-6.json` — surv6-5 exploreMoreText (new)**  
Before: (none)

After: 
> EN: NASA says the cameras then studied the original landing footprints to learn the soil's mechanical properties, and made stereo images now that the viewpoint had moved.
> AR: تقول ناسا إن الكاميرات درست بعد ذلك آثار الأقدام عند موقع الهبوط الأصلي لمعرفة الخصائص الميكانيكية للتربة، والتقطت صوراً مجسّمة بعدما تغيّرت نقطة الرصد.

Source: https://science.nasa.gov/mission/surveyor-6/

**M33. `src/data/missions/surveyor-6.json` — surv6-5 fact f2 (hop size)**  
Before: (none)

After: 
> EN: NASA Science: Surveyor 6 fired its three main thrusters for 2.5 seconds, "lifted up to about 10 feet (3 meters) before landing about 8 feet (2.5 meters) west of its original landing point."
> AR: تقول NASA Science: شغّلت سيرفيور 6 دوافعها الرئيسية الثلاثة 2.5 ثانية، و«ارتفعت نحو 10 أقدام (3 أمتار) قبل أن تهبط على بعد نحو 8 أقدام (2.5 متر) غرب موقع هبوطها الأصلي». (الترجمة العربية من إعدادنا.)

Source: https://science.nasa.gov/mission/surveyor-6/

**M34. `src/data/missions/surveyor-6.json` — card.assetId**  
Before: 
> core-moon

After: 
> masv-img-pia12978

Source: https://images.nasa.gov/details/PIA12978

**M35. `src/data/missions/surveyor-6.json` — intro.assetId**  
Before: 
> core-moon

After: 
> masv-img-pia12978

Source: https://images.nasa.gov/details/PIA12978

**M36. `src/data/missions/surveyor-6.json` — surv6-3 gallery image**  
Before: 
> (no photo)

After: 
> PIA12978 (LRO orbit view of the lander)

Source: https://images.nasa.gov/details/PIA12978

**M37. `src/data/missions/apollo-15-falcon.json` — intro.goal**  
Before: 
> EN: To land at the foot of the Apennine mountains and let the crew work on the surface.
> AR: أن تهبط عند سفح جبال الأبنين وتتيح للرائدين العمل على السطح.

After: 
> EN: Falcon landed at the foot of the Apennine mountains, in the Mare Imbrium region, and carried the crew and their rover to the surface.
> AR: هبطت فالكون عند سفح جبال الأبنين في منطقة بحر الأمطار، وحملت الرائدين ومركبتهما الجوالة إلى السطح.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M38. `src/data/missions/apollo-15-falcon.json` — ending.notStated[0]**  
Before: 
> EN: NASA pages we read do not give separate resting coordinates for the descent stage; we use the landing site.
> AR: لا تذكر صفحات ناسا التي قرأناها إحداثيات مستقلة لمرحلة الهبوط، لذلك نستخدم موقع الهبوط.

After: 
> EN: NASA pages we read do not describe the present condition of the descent stage.
> AR: لا تذكر صفحات ناسا التي قرأناها الحالة الراهنة لمرحلة الهبوط.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**M39. `src/data/missions/apollo-15-falcon.json` — ending.finalChapterText**  
Before: 
> EN: NASA says Falcon's descent stage was left behind on the Moon as the platform for launching the ascent stage. The ascent stage was jettisoned on 3 August 1971 and impacted the Moon at 26.36° N, 0.25° E.
> AR: تقول ناسا إن مرحلة هبوط فالكون تُركت على القمر بوصفها منصة لإطلاق مرحلة الصعود. وجرى التخلص من مرحلة الصعود في 3 أغسطس 1971 واصطدمت بالقمر عند 26.36° شمالاً و0.25° شرقاً.

After: 
> EN: NASA says Falcon's descent stage was left behind on the Moon as the platform for launching the ascent stage. NASA's landing-site table lists the Lunar Module at 26.13239° N, 3.63330° E, determined from Lunar Reconnaissance Orbiter images. The ascent stage was jettisoned on 3 August 1971 and impacted the Moon at 26.36° N, 0.25° E.
> AR: تقول ناسا إن مرحلة هبوط فالكون تُركت على القمر بوصفها منصة لإطلاق مرحلة الصعود. ويُدرج جدول مواقع الهبوط لدى ناسا المركبة القمرية عند 26.13239° شمالاً و3.63330° شرقاً، حُدّد من صور مسبار استطلاع القمر. وجرى التخلص من مرحلة الصعود في 3 أغسطس 1971 واصطدمت بالقمر عند 26.36° شمالاً و0.25° شرقاً.

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html ; https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M40. `src/data/missions/apollo-15-falcon.json` — ending.legacyText**  
Before: 
> EN: Falcon landed at the foot of the Apennine mountains and carried the rover that explored the area. Its descent stage remains part of the Apollo 15 landing site.
> AR: هبطت فالكون عند سفح جبال الأبنين وحملت المركبة الجوالة التي استكشفت المنطقة. وتبقى مرحلة هبوطها جزءاً من موقع هبوط أبولو 15.

After: 
> EN: Falcon landed at the foot of the Apennine mountains and carried the rover that explored the area. Its descent stage was left at the landing site.
> AR: هبطت فالكون عند سفح جبال الأبنين وحملت المركبة الجوالة التي استكشفت المنطقة. وتُركت مرحلة هبوطها في موقع الهبوط.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**M41. `src/data/missions/apollo-15-falcon.json` — card.assetId**  
Before: 
> core-moon

After: 
> moon-lm-lrv-img-as15-falcon-lm

Source: https://images.nasa.gov/details/as15-086-11600

**M42. `src/data/missions/apollo-15-falcon.json` — intro.assetId**  
Before: 
> core-moon

After: 
> moon-lm-lrv-img-as15-falcon-lm

Source: https://images.nasa.gov/details/as15-086-11600

**M43. `src/data/missions/apollo-15-falcon.json` — falcon-2 gallery image**  
Before: 
> (no photo)

After: 
> as15-086-11600 (Falcon early in the first moonwalk)

Source: https://images.nasa.gov/details/as15-086-11600

**M44. `src/data/missions/apollo-11-eagle.json` — eagle-3 exploreMoreText**  
Before: 
> EN: The landing site is at 0.67416° N, 23.47314° E.
> AR: موقع الهبوط عند 0.67416° شمالاً و23.47314° شرقاً.

After: 
> EN: The landing site is at 0.67416° N, 23.47314° E, determined from Lunar Reconnaissance Orbiter images (NSSDCA). NASA's mission overview gives an older position, about 0.69° N, 23.43° E.
> AR: موقع الهبوط عند 0.67416° شمالاً و23.47314° شرقاً، حُدّد من صور مسبار استطلاع القمر (NSSDCA). وتذكر النظرة العامة لمهمة أبولو 11 لدى ناسا موقعاً أقدم، نحو 0.69° شمالاً و23.43° شرقاً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C ; https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

**M45. `src/data/missions/apollo-11-eagle.json` — eagle-3 fact f2 (position conflict)**  
Before: (none)

After: 
> EN: Landing position: 0.67416° N, 23.47314° E from Lunar Reconnaissance Orbiter images (NSSDCA); NASA's mission overview gives 0° 41' 15" N, 23° 26' E.
> AR: موقع الهبوط: 0.67416° شمالاً و23.47314° شرقاً من صور مسبار استطلاع القمر (NSSDCA)؛ وتذكر النظرة العامة لمهمة أبولو 11 لدى ناسا 0° 41′ 15″ شمالاً و23° 26′ شرقاً.

Source: https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

**M46. `src/data/missions/apollo-11-eagle.json` — eagle-3 sourceIds**  
Before: 
> (not listed)

After: 
> moon-lm-lrv-src-a11o

Source: citation fix

**M47. `src/data/missions/apollo-11-eagle.json` — eagle-5 exploreMoreText**  
Before: 
> EN: EASEP included a passive seismometer and a lunar dust detector. The laser-ranging retroreflector was placed about 5 m north-northwest of EASEP.
> AR: ضمّت EASEP مقياس زلازل سلبياً وكاشفاً للغبار القمري. ووُضع عاكس الليزر على بعد نحو 5 م شمال شمال غرب EASEP.

After: 
> EN: The plaque reads: "Here men from the planet Earth first set foot on the Moon July 1969, A.D. We came in peace for all mankind." EASEP included a passive seismometer and a lunar dust detector. The laser-ranging retroreflector was placed about 5 m north-northwest of EASEP. On 27 August 1969 EASEP no longer accepted commands from Earth and the experiment was terminated.
> AR: نص اللوحة: «هنا وطئ رجال من كوكب الأرض القمر لأول مرة، يوليو 1969 ميلادية. جئنا بسلام من أجل البشرية جمعاء». ضمّت EASEP مقياس زلازل سلبياً وكاشفاً للغبار القمري، ووُضع عاكس الليزر على بعد نحو 5 م شمال شمال غرب EASEP. وفي 27 أغسطس 1969 لم تعد EASEP تقبل الأوامر من محطات الأرض وانتهت التجربة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C

**M48. `src/data/missions/apollo-11-eagle.json` — eagle-5 fact f3 (EASEP ended)**  
Before: (none)

After: 
> EN: EASEP stopped accepting commands from Earth stations on 27 August 1969, and the experiment was terminated.
> AR: توقفت EASEP عن قبول الأوامر من محطات الأرض في 27 أغسطس 1969، وانتهت التجربة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C

### Medium/Low (1)

**M1. `src/data/assets/*.json` — assets/moon-lm-lrv.json moon-lm-lrv-img-as11-aldrin-lm**  
Before: 
> credit: NASA/KSC | alt EN: Buzz Aldrin beside the Apollo 11 Lunar Module Eagle on the Moon.

After: 
> credit: NASA (KSC archive copy) | alt EN: Buzz Aldrin removes scientific experiment packages from a stowage area in the descent stage of the Apollo 11 Lunar Module Eagle on the Moon (NASA's caption).
> alt AR: باز ألدرين يُخرج حزم التجارب العلمية من منطقة التخزين في مرحلة هبوط المركبة القمرية إيغل في أبولو 11 على القمر (وصف ناسا).

Source: https://images.nasa.gov/details/KSC-as11-40-5927

### Low (19)

**L1. `src/data/assets/*.json` — assets/moon-alsep-surveyor.json masv-img-as12-48-7134**  
Before: 
> credit: NASA (JSC; credit field not stated by the library) | alt EN: Apollo 12 photograph showing the lunar module and the Surveyor 3 spacecraft on the Moon.

After: 
> credit: NASA | alt EN: Apollo 12 photograph from the second moonwalk: the unmanned Surveyor 3 in the foreground with an astronaut examining its TV camera, and the Apollo 12 Lunar Module in the background.
> alt AR: صورة من أبولو 12 التُقطت خلال السير الثاني على القمر: المركبة الآلية سيرفيور 3 في المقدمة وأحد الرائدين يفحص كاميرتها التلفزيونية، والمركبة القمرية لأبولو 12 في الخلفية.

Source: https://science.nasa.gov/mission/surveyor-3/ ("Credit: NASA"); https://images.nasa.gov/details/AS12-48-7134

**L2. `src/data/assets/*.json` — assets/moon-alsep-surveyor.json masv-img-as12-48-7133**  
Before: 
> credit: NASA (JSC; credit field not stated by the library) | alt EN: Apollo 12 photograph showing the lunar module and the Surveyor 3 spacecraft on the Moon.

After: 
> credit: NASA | alt EN: Apollo 12 photograph from the second moonwalk: the unmanned Surveyor 3 in the foreground with an astronaut examining its TV camera, and the Apollo 12 Lunar Module in the background.
> alt AR: صورة من أبولو 12 التُقطت خلال السير الثاني على القمر: المركبة الآلية سيرفيور 3 في المقدمة وأحد الرائدين يفحص كاميرتها التلفزيونية، والمركبة القمرية لأبولو 12 في الخلفية.

Source: https://science.nasa.gov/mission/surveyor-3/ ("Credit: NASA"); https://images.nasa.gov/details/AS12-48-7133

**L3. `src/data/missions/alsep-apollo-12.json` — intro.whereGoing**  
Before: 
> EN: Oceanus Procellarum on the Moon, at 3.0094° S, 23.4246° W.
> AR: محيط العواصف على القمر، عند 3.0094° جنوباً و23.4246° غرباً.

After: 
> EN: Oceanus Procellarum on the Moon, at about 3.01° S, 23.42° W.
> AR: محيط العواصف على القمر، عند نحو 3.01° جنوباً و23.42° غرباً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L4. `src/data/missions/alsep-apollo-12.json` — unit.restingPlace**  
Before: 
> EN: Deployed and left on the lunar surface at 3.0094° S, 23.4246° W
> AR: نُصبت وتُركت على سطح القمر عند 3.0094° جنوباً و23.4246° غرباً

After: 
> EN: Deployed and left on the lunar surface at about 3.01° S, 23.42° W
> AR: نُصبت وتُركت على سطح القمر عند نحو 3.01° جنوباً و23.42° غرباً

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L5. `src/data/missions/alsep-apollo-12.json` — alsep12-3 basicText**  
Before: 
> EN: The Apollo 12 ALSEP central station was turned on at 14:21 UT on 19 November 1969, at 3.0094° S, 23.4246° W.
> AR: شُغّلت المحطة المركزية لـ ALSEP في أبولو 12 الساعة 14:21 بالتوقيت العالمي في 19 نوفمبر 1969، عند 3.0094° جنوباً و23.4246° غرباً.

After: 
> EN: The Apollo 12 ALSEP central station was turned on at 14:21 UT on 19 November 1969, at about 3.01° S, 23.42° W.
> AR: شُغّلت المحطة المركزية لـ ALSEP في أبولو 12 الساعة 14:21 بالتوقيت العالمي في 19 نوفمبر 1969، عند نحو 3.01° جنوباً و23.42° غرباً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L6. `src/data/missions/alsep-apollo-12.json` — alsep12-3 fact f2 (coordinates)**  
Before: (none)

After: 
> EN: NSSDCA's Lunar Module page gives the central station at 3.0094° S, 23.4246° W; its landing-site table gives 3.0098° S, 23.4249° W.
> AR: تذكر صفحة المركبة القمرية لدى NSSDCA أن المحطة المركزية عند 3.0094° جنوباً و23.4246° غرباً، بينما يذكر جدول مواقع الهبوط لديها 3.0098° جنوباً و23.4249° غرباً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L7. `src/data/missions/alsep-apollo-12.json` — alsep12-7 basicText**  
Before: 
> EN: The station was not forgotten gear. It was a science station that did its job from 1969 until it was switched off in 1977, and it recorded the first artificial moonquake.
> AR: لم تكن المحطة معدات منسية، بل محطة علمية أدّت عملها من 1969 حتى إيقافها في 1977، وسجّلت أول هزة قمرية صناعية.

After: 
> EN: The station was not forgotten gear. It was a science station switched on in 1969 and shut down in 1977, and its seismometer registered the first recorded artificial moonquake.
> AR: لم تكن المحطة معدات منسية، بل محطة علمية شُغّلت في 1969 وأُوقفت في 1977، وسجّل مقياس الزلازل فيها أول هزة قمرية صناعية مسجّلة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://images.nasa.gov/details/S69-59547

**L8. `src/data/missions/alsep-apollo-12.json` — ending.legacyText**  
Before: 
> EN: The station made measurements on the Moon for years and recorded the first artificial moonquake.
> AR: أجرت المحطة قياسات على القمر لسنوات وسجّلت أول هزة قمرية صناعية.

After: 
> EN: The station was switched on in 1969 and shut down in 1977. Its seismometer registered the first recorded artificial moonquake.
> AR: شُغّلت المحطة في 1969 وأُوقفت في 1977. وسجّل مقياس الزلازل فيها أول هزة قمرية صناعية مسجّلة.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C ; https://images.nasa.gov/details/S69-59547

**L9. `src/data/missions/alsep-apollo-12.json` — alsep12-7 sourceIds**  
Before: 
> (not listed)

After: 
> masv-src-img-s69-59547

Source: citation fix

**L10. `src/data/missions/alsep-apollo-15.json` — intro.whereGoing**  
Before: 
> EN: The foot of the Apennine mountains, Mare Imbrium region, at 26.1341° N, 3.6298° E.
> AR: سفح جبال الأبنين في منطقة بحر الأمطار، عند 26.1341° شمالاً و3.6298° شرقاً.

After: 
> EN: The foot of the Apennine mountains, Mare Imbrium region, at about 26.134° N, 3.630° E.
> AR: سفح جبال الأبنين في منطقة بحر الأمطار، عند نحو 26.134° شمالاً و3.630° شرقاً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L11. `src/data/missions/alsep-apollo-15.json` — unit.restingPlace**  
Before: 
> EN: Deployed and left on the lunar surface at 26.1341° N, 3.6298° E
> AR: نُصبت وتُركت على سطح القمر عند 26.1341° شمالاً و3.6298° شرقاً

After: 
> EN: Deployed and left on the lunar surface at about 26.134° N, 3.630° E
> AR: نُصبت وتُركت على سطح القمر عند نحو 26.134° شمالاً و3.630° شرقاً

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L12. `src/data/missions/alsep-apollo-15.json` — alsep15-3 basicText**  
Before: 
> EN: The central station was turned on at 18:37 UT on 31 July 1971, at 26.1341° N, 3.6298° E.
> AR: شُغّلت المحطة المركزية الساعة 18:37 بالتوقيت العالمي في 31 يوليو 1971، عند 26.1341° شمالاً و3.6298° شرقاً.

After: 
> EN: The central station was turned on at 18:37 UT on 31 July 1971, at about 26.134° N, 3.630° E.
> AR: شُغّلت المحطة المركزية الساعة 18:37 بالتوقيت العالمي في 31 يوليو 1971، عند نحو 26.134° شمالاً و3.630° شرقاً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L13. `src/data/missions/alsep-apollo-15.json` — alsep15-3 fact f2 (coordinates)**  
Before: (none)

After: 
> EN: NSSDCA's Lunar Module page gives the central station at 26.1341° N, 3.6298° E; its landing-site table gives 26.13406° N, 3.62991° E.
> AR: تذكر صفحة المركبة القمرية لدى NSSDCA أن المحطة المركزية عند 26.1341° شمالاً و3.6298° شرقاً، بينما يذكر جدول مواقع الهبوط لديها 26.13406° شمالاً و3.62991° شرقاً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L14. `src/data/missions/alsep-apollo-15.json` — alsep15-6 basicText**  
Before: 
> EN: This station was a working science station, not forgotten gear. It stayed on the Moon after the crew left and worked until it was switched off in 1977.
> AR: كانت هذه المحطة محطة علمية عاملة لا معدات منسية. بقيت على القمر بعد مغادرة الطاقم وعملت حتى إيقافها في 1977.

After: 
> EN: This station was a working science station, not forgotten gear. It was set up in 1971 and shut down with the other ALSEP stations in 1977.
> AR: كانت هذه المحطة محطة علمية عاملة لا معدات منسية. نُصبت في 1971 وأُوقفت مع بقية محطات ALSEP في 1977.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**L15. `src/data/missions/alsep-apollo-15.json` — ending.legacyText**  
Before: 
> EN: The station gave scientists measurements from the Moon's surface, including heat flow, from 1971 until 1977.
> AR: قدّمت المحطة للعلماء قياسات من سطح القمر، منها تدفّق الحرارة، من 1971 حتى 1977.

After: 
> EN: The station carried instruments that measured the Moon from its surface, including heat flow. It was switched on in 1971 and shut down in 1977.
> AR: حملت المحطة أجهزة تقيس القمر من سطحه، منها تدفّق الحرارة. شُغّلت في 1971 وأُوقفت في 1977.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C

**L16. `src/data/missions/apollo-15-falcon.json` — falcon-3 exploreMoreText**  
Before: 
> EN: NASA says the rover was folded and carried in quad 1 of the descent stage. The ALSEP central station is at 26.1341° N, 3.6298° E.
> AR: تذكر ناسا أن المركبة الجوالة طُويت وحُملت في الربع 1 من مرحلة الهبوط. وتقع المحطة المركزية لـ ALSEP عند 26.1341° شمالاً و3.6298° شرقاً.

After: 
> EN: NASA says the rover was folded and carried in quad 1 of the descent stage. The ALSEP central station is at about 26.134° N, 3.630° E.
> AR: تذكر ناسا أن المركبة الجوالة طُويت وحُملت في الربع 1 من مرحلة الهبوط. وتقع المحطة المركزية لـ ALSEP عند نحو 26.134° شمالاً و3.630° شرقاً.

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C ; https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html

**L17. `src/data/missions/alsep-apollo-12.json` — .stages[4].facts[0].text (Arabic term)**  
Before: 
> تحطمت المرحلة الصاعدة عمداً على بعد نحو 60 كم من محطة الزلازل مسبّبةً أول هزة قمرية صناعية مسجّلة.

After: 
> تحطمت مرحلة الصعود عمداً على بعد نحو 60 كم من محطة الزلازل مسبّبةً أول هزة قمرية صناعية مسجّلة.

Source: terminology consistency

**L18. `src/data/missions/alsep-apollo-12.json` — .discoveries[0].summary (Arabic term)**  
Before: 
> أحدث اصطدام المرحلة الصاعدة على بعد نحو 60 كم أول هزة قمرية صناعية مسجّلة.

After: 
> أحدث اصطدام مرحلة الصعود على بعد نحو 60 كم أول هزة قمرية صناعية مسجّلة.

Source: terminology consistency

**L19. `src/data/missions/alsep-apollo-15.json` — .timeline[2].label (Arabic term)**  
Before: 
> فصل المرحلة الصاعدة (01:04 بالتوقيت العالمي) ثم اصطدامها بالقمر

After: 
> التخلص من مرحلة الصعود (01:04 بالتوقيت العالمي) ثم اصطدامها بالقمر

Source: terminology consistency

### Support (14)

**S1. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-csm11: Apollo 11 Command and Service Module (1969-059A) - https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A

Source: https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059A

**S2. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-a11o: Apollo 11 mission overview - https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

Source: https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/

**S3. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-where: Apollo: Where are they now? - https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloloc.html

**S4. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-a15d: Apollo 15 mission details - https://www.nasa.gov/missions/apollo/apollo-15-mission-details/

Source: https://www.nasa.gov/missions/apollo/apollo-15-mission-details/

**S5. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-a17d: Apollo 17 mission details - https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

Source: https://www.nasa.gov/missions/apollo/apollo-17-mission-details/

**S6. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-a17h: 50 Years Ago: Apollo 17 Heads Home to Earth - https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/

Source: https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/

**S7. `src/data/assets|sources/*.json` — sources/moon-lm-lrv.json**  
Before: (none)

After: 
> moon-lm-lrv-src-land: Apollo Lunar Landings (1969 - 1972) - https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html

**S8. `src/data/assets|sources/*.json` — sources/moon-alsep-surveyor.json**  
Before: (none)

After: 
> masv-src-impact: Impact sites of Apollo LM and SIVB stages - https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html

Source: https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_impact.html

**S9. `src/data/assets|sources/*.json` — sources/moon-alsep-surveyor.json**  
Before: (none)

After: 
> masv-src-img-s69-59547: NASA Image and Video Library: S69-59547 - https://images.nasa.gov/details/S69-59547

Source: https://images.nasa.gov/details/S69-59547

**S10. `src/data/assets|sources/*.json` — assets/moon-lm-lrv.json**  
Before: (none)

After: 
> new asset moon-lm-lrv-img-as15-falcon-lm (as15-086-11600), credit "NASA/JSC"

Source: https://images.nasa.gov/details/as15-086-11600

**S11. `src/data/assets|sources/*.json` — assets/moon-lm-lrv.json**  
Before: (none)

After: 
> new asset moon-lm-lrv-img-as17-boulder-lrv (as17-146-22294), credit "NASA/JSC"

Source: https://images.nasa.gov/details/as17-146-22294

**S12. `src/data/assets|sources/*.json` — assets/moon-alsep-surveyor.json**  
Before: (none)

After: 
> new asset masv-img-as12-47-6919 (as12-47-6919), credit "NASA/JSC"

Source: https://images.nasa.gov/details/as12-47-6919

**S13. `src/data/assets|sources/*.json` — assets/moon-alsep-surveyor.json**  
Before: (none)

After: 
> new asset masv-img-s69-59547 (S69-59547), credit "NASA/JSC"

Source: https://images.nasa.gov/details/S69-59547

**S14. `src/data/assets|sources/*.json` — assets/moon-alsep-surveyor.json**  
Before: (none)

After: 
> new asset masv-img-pia12978 (PIA12978), credit "NASA/GSFC/Arizona State University"

Source: https://images.nasa.gov/details/PIA12978
