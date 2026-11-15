# R3 Research — Gap Closing and Disputed Facts

Status: continues [R1](NASA_R1_Research.md) and [R2](NASA_R2_Research.md). Same legend: ✅ verified on a NASA page · ⚠️ conflict kept on record · ❓ NOT STATED.
Research date: 2026-11-15. Rule used throughout: **an inferred fact is never written as a verified NASA fact.** Where only the challenge page says something, it is labelled "challenge page".

## 1. Lunar Roving Vehicles — where they ended up

Pages read: nasa.gov Apollo 15/16/17 mission pages and "mission details" pages; nasa.gov history articles; NSSDCA LRV page.

| Question | Finding | Status |
|---|---|---|
| Does NASA explicitly say the Apollo 15, 16 or 17 rover was left on the Moon? | **No NASA page read says so.** NSSDCA says "Three LRVs were driven on the Moon" and that a fourth was used for spare parts. | ❓ NOT STATED |
| Challenge page | "Three electric 'moon buggies'… Parked permanently on the Moon." | Source: challenge page only |
| Apollo 15 | Parked at Elbow Crater is stated for the first stop of the first moonwalk, not the end. Liftoff was seen on Earth "via the LRV television camera" (mission details page). A statement that it was parked about 500 ft from the LM was only seen in a machine summary of a truncated page. | Parking at end: ❓ ; TV liftoff: ✅ |
| Apollo 16 | "Last LPM readings were taken at the rover parking site along with final rock samples" (mission details). "Lunar liftoff… in view of the rover television camera." A "300 feet east of the LM" statement was only in a machine summary. | "Rover parking site": ✅ ; distance: ❓ |
| Apollo 17 | No parking statement. The mission article says the site is "forever altered by their boot prints and Rover tracks". The TV camera was aimed at the LM from Earth for liftoff. | ❓ |
| LRO image of rover tracks | The Apollo 15 history article has a Lunar Reconnaissance Orbiter image with the traverses overlaid; the caption does not say the rover is visible. | ✅ (caption as stated) |
| Rover names / serials | ❓ | ❓ |

**Decision for the data:** the rover journeys end with the verified facts (parked at its rover parking site for liftoff filming; TV camera showed the liftoff; NASA pages read do not state its fate). The Final Chapter shows **"Parked at the end of its drives; what NASA pages say about its final location is not stated"** and shows the challenge page's "parked permanently" only as a labelled quote. `endingBasis` is set to `challenge-page` (see the schema).

## 1b. Moon fact-check addendum (2026-11-15)

Result of the human fact-check of the 8 Moon missions (see NASA_Human_Fact_Check_Moon.md) and the corrections applied (see NASA_Moon_Corrections_Report.md). Conflicting NASA values are **kept on record** here and in the data, not silently resolved.

**Rover cameras at liftoff (new evidence, still no "left" statement):**
- Apollo 15: NASA mission details (https://www.nasa.gov/missions/apollo/apollo-15-mission-details/): "For the first time, the lunar liftoff was seen on Earth via the LRV television camera."
- Apollo 16: NASA mission details: "Lunar liftoff came on time at 8:26 p.m. EST April 23, in view of the rover television camera."
- Apollo 17: NASA History (https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/): "…remotely aimed the Rover's TV camera on the LM"; "Fendell had to command the camera to pan upward several seconds ahead of the actual liftoff to track Challenger as it rose"; "Fendell could not capture the event [the ascent stage's impact] with the Rover's camera".
- Still NOT STATED by any NASA page read: an explicit statement that any rover was "left" on the Moon, and any rover's final location. The challenge page's "Parked permanently on the Moon" remains CHALLENGE-ONLY.

**NASA-versus-NASA conflicts kept on record:**

| Item | Values and sources |
|---|---|
| Apollo 17 rover total distance | 35.9 km in 4 h 26 min (NSSDCA rover page); "they covered 30 km" (NSSDCA Lunar Module page, 1972-096C); "traversed a total of 30.5 kilometers" (NASA Apollo 17 mission details); "35." (NSSDCA landing table) |
| Apollo 15 rover / crew distance | 27.8 km (NSSDCA rover page); 27.9 km (NSSDCA Lunar Module page and landing table; EVA traverses 10.3 + 12.5 + 5.1 km) |
| Apollo 11 ascent-stage jettison | 00:01:01 UT on 22 July 1969 (LM page); 23:41 UT on 21 July 1969 (NSSDCA "Where are they now?") |
| Apollo 11 landing position | 0.67416° N, 23.47314° E from LRO images (NSSDCA); 0°41′15″ N, 23°26′ E (NASA mission overview) |
| Apollo 11 time on the surface | 21 h 36 min (LM page, mission overview); "22-hour stay" (photo caption on the mission page). NASA does not say the caption is a rounding. |
| Surveyor 3 landing | 00:04:17 UT 20 April 1967 (NASA Science); 00:04:53 UT 20 April (NSSDCA); "April 19, 1967" (NASA photo captions, US time) |
| Surveyor 3 position | 3° S, 23.41° W (NASA Science); 3.01° S, 336.66° E = 23.34° W (NSSDCA) |
| Surveyor 3 to Apollo 12 interval | NASA Science: "More than three years later" and "nearly two-and-a-half years of exposure"; the dates give about 2 years 7 months |
| Surveyor 6 landing | 01:01:04 UT (NASA Science) vs 01:01:06 UT (NSSDCA); position "announced as" 0.46° N, 1.37° W, "probably closer to" 0.473° N, 1.427° W (NASA Science) vs 0.49° N, 358.60° E = 1.40° W (NSSDCA) |
| ALSEP central stations | Apollo 12: 3.0094° S, 23.4246° W (LM page) vs 3.0098° S, 23.4249° W (landing-site table); Apollo 15: 26.1341° N, 3.6298° E vs 26.13406° N, 3.62991° E |

**Corrections to earlier research text:** R2 (ALSEP power: "at launch" and "4 kg of plutonium" were wrong; NASA says "approximately 70 W DC at 16 V (63.5 W after one year)" and "an approximately 4 kg fuel capsule… which contained plutonium-238"); R1 (Apollo 12 impact date now stated: 20 Nov 1969, 22:17:17.7 UT).

**Still unresolved, deliberately:** why the ALSEP stations were shut down on 30 September 1977. The NSSDCA "ALSEP Termination Report" (https://nssdc.gsfc.nasa.gov/misc/documents/b32116.pdf) is a scanned image with no readable text; a human must inspect it. No reason is inferred.

## 2. Phoenix and InSight — why the missions ended

| Item | Finding | Status |
|---|---|---|
| Phoenix end date | "End of Mission: Nov. 2, 2008" (science.nasa.gov/mission/phoenix/) | ✅ |
| Phoenix reason | The 2008 JPL announcement was not found. The mission page gives no reason. | ❓ |
| Phoenix later | NASA Image Library item PIA22223 (2018): "HiRISE views of the landing site from 2008 and 2017, showing dust cover on the lander" | ✅ (the image description) |
| InSight end date | "End of Mission: Dec. 15, 2022" (science.nasa.gov/mission/insight/) | ✅ |
| InSight reason | The nasa.gov end-of-mission release returned 404; not found elsewhere. | ❓ |
| InSight final selfie | PIA25287 "InSight's Final Selfie", taken 24 Apr 2022 (sol 1,211), "with much more dust on the panels" (image description) | ✅ (describes the photo, does not state it as the cause) |
| Unread but linked | https://www.nasa.gov/missions/insight/nasa-mars-orbiter-spots-retired-insight-lander-to-study-dust-movement/ | Not read; candidate source |

**Decision:** the challenge page's "eventually lost power" is **not** used as a fact. Phoenix and InSight endings use only the end date, and the stories show the dust-covered images as "NASA's picture shows…" without claiming a cause. Both missions are set to `endCause: stopped-operating`, which only says what the pages show (the mission ended), and `endingBasis: nasa-mission-page`.

**Update (2026-11-15, image corrections):** NASA's own description of image PIA22223 (JPL, 20 Feb 2018; also on the Photojournal page https://science.nasa.gov/photojournal/nasas-phoenix-lander-on-mars-nearly-a-decade-later/) **does state the reason Phoenix stopped**: "The lander worked for two additional months before reduced sunlight caused energy to become insufficient to keep the lander functioning. The solar-powered robot was not designed to survive through the dark and cold conditions of a Martian arctic winter." The Phoenix chapter now uses this, attributed to NASA's image description. The 2008 statement above ("reason NOT STATED on the mission page") remains true for the mission page itself; the date of the last message is still not stated.

## 3. Disputed facts

| # | Dispute | NASA pages say | Wording to use |
|---|---|---|---|
| 1 | Pioneer 10 launch | nasa.gov history: "March 2, 1972"; science.nasa.gov: "March 2, 1972 / 01:49:04 UT". No NASA page says 3 March; only NSSDCA's Facts in Brief says 1972-03-03. | **2 March 1972** (NSSDCA's 3 March kept on record) |
| 2 | Pioneer 10 RTGs | nasa.gov history and science.nasa.gov: **two** RTGs; NSSDCA: four | "two" appears on two NASA pages; the conflict stays on record. Prefer "nuclear-powered (RTG)" with no count in text. |
| 3 | Pioneer 10 plaque designers | Not stated on any of the three pages | Not named |
| 4 | Pioneer 10 plaque material | "aluminum plaque" (science.nasa.gov) vs "gold plaque" (press release 2003) | "metal plaque" |
| 5 | Pioneer 10 Jupiter distance | science.nasa.gov: 81,000 miles (130,354 km), 4 Dec 1973 02:26 UT; history page: 82,178 miles | "about 81,000 miles (130,000 km)". |
| 6 | Pioneer 10 Neptune | both NASA pages: 13 Jun 1983 | ✅ 13 Jun 1983 (the 2003 press release's "Pluto" wording is not used) |
| 7 | Apollo 11 time on surface | NASA mission overview: "21 hours, 36 minutes on the moon's surface"; one photo caption: "22-hour stay" | **21 h 36 min** (the caption is a rounding) |
| 8 | Dawn Vesta departure | science.nasa.gov mission-status (machine-summarized portion): "September 5, 2012 - Dawn Leaves Vesta Orbit"; NSSDCA: 5 Sep 2012; two timeline pages printed "Sept. 5, 2017" in R2 | **September 2012**. The 2017 entry stays on record as an apparent NASA page typo (not confirmed verbatim in this pass). |
| 9 | Viking 1 renaming | science.nasa.gov: "In January 1982… Thomas Mutch Memorial Station"; NSSDCA: Jan 1981 | "renamed in honor of Thomas A. Mutch" (no year in text); year conflict on record |
| 10 | Viking 1 last contact | science.nasa.gov: "operated until Nov. 11, 1982… a faulty command sent from Earth resulted in an interruption of communications"; NSSDCA: 13 Nov 1982 | "November 1982" in the story; 11 Nov in the timeline marked as per science.nasa.gov |
| 11 | Kepler launch | science.nasa.gov: "March 6, 2009"; NSSDCA: 03:50 UT 7 March | "6 March 2009" (US date) |
| 12 | Opportunity last message | ❓ not found in any NASA page read | **Not quoted** |

All the disputed values are preserved here and in the research files; story text uses the cautious wording.

## 4. NASA Image and Video Library — image IDs for the data files

The NASA Image API (https://images-api.nasa.gov/search) returned these items. Image files are served from `https://images-assets.nasa.gov/image/<id>/<id>~medium.jpg` (or `~orig.jpg` / `~small.jpg` where `medium` was not shown). Credit lines are the API's `secondary_creator` field; items with no credit field are credited "NASA" with the center code shown. **The API returned no terms of use field**; NASA's image policy page was not read. Check it before the public release.

| Topic | NASA ID | Credit field |
|---|---|---|
| Apollo 11 Eagle / Aldrin at the LM | KSC-as11-40-5927 | none (KSC) |
| Apollo 11 telecast by the LM | S69-39563 | none (JSC) |
| Apollo 11 bootprint | as11-40-5878 | none (JSC) |
| Apollo 15 Irwin salutes beside the flag, LRV at right | as15-88-11866 | none (description credits David R. Scott) |
| Apollo 15 Irwin works at LRV | as15-86-11603 | none (JSC) |
| Apollo 17 LRV close-up | as17-137-20979 | none (JSC) |
| Apollo 17 Cernan drives LRV | as17-147-22526 | none (JSC). Update 2026-11-15: NASA's title says "drives" but NASA's description says "makes a short checkout of the Lunar Roving Vehicle (LRV) during the early part of the first Apollo 17 EVA… the 'stripped down' LRV is prior to loading up". |
| Apollo 12 LM and Surveyor 3 | AS12-48-7134, AS12-48-7133 | none (JSC) |
| Opportunity selfie sol 5,000 | PIA22222 | NASA/JPL-Caltech |
| Opportunity self-portrait Jan 2014 | PIA17759 | NASA/JPL-Caltech/Cornell Univ./Arizona State Univ. |
| Opportunity in Endurance Crater | PIA06739 | NASA/JPL |
| Spirit | PIA05040, PIA07410 | NASA/JPL-Caltech |
| Sojourner | PIA00623, PIA00621 | NASA/JPL |
| Viking 1 first photo / panorama | PIA00381, PIA00382 | NASA/JPL |
| Phoenix self-portrait | PIA11719 | NASA/JPL-Caltech/University of Arizona/Texas A&M University |
| Phoenix a decade later | PIA22223 | NASA/JPL-Caltech/Univ. of Arizona |
| InSight first / final selfie | PIA22876, PIA25287 | NASA/JPL-Caltech |
| Ingenuity | PIA23882, PIA24810 | NASA/JPL-Caltech |
| Dawn at Ceres | PIA21906, PIA19181 | NASA/JPL-Caltech/UCLA/MPS/DLR/IDA |
| Dawn artist concept | PIA12031 | (artist concept: label as reconstruction) |
| NEAR at Eros | PIA02464, PIA03148 | NASA/JPL/JHUAPL |
| Pioneer 10 at Jupiter | ARC-1973-AC73-9341, ARC-1973-AC73-9253 | none (ARC) |
| Pioneer 11 painting | ARC-2000-80-HC-251 | none (ARC): a **painting**, label as reconstruction |
| Kepler | PIA14446 (NASA/Ames), 201102020008HQ (NASA/Paul E. Alers: a scale model) | — |
| Earth (Blue Marble) | PIA18033 | NASA |
| Mars globe | PIA02992 | NASA/JPL/USGS |
| Full Moon | GSFC_20171208_Archive_e000868 | none (GSFC; LRO data visualization) |

Gaps: no Aldrin-flag image found; no Surveyor, Viking 2, Pioneer 11 spacecraft or Kepler-in-space images were searched; the Surveyor 5/6/7 science.nasa.gov image filenames still need a caption check.

## 5. What is still unresolved after R3

| Gap | Why it matters | State |
|---|---|---|
| Whether any NASA page states the LRVs were left on the Moon, and where | LRV final chapters | Unresolved; documented as ❓ |
| Phoenix and InSight: reason and last-contact date | Their final chapters | Unresolved; documented as ❓ |
| Viking 1/2 "remain where they touched down" | Viking final chapters | Unresolved; ❓ |
| ALSEP shutdown reason | ALSEP final chapters | Unresolved; ❓ |
| NSSDCA records for Phoenix, InSight, Ingenuity | Citations | Unresolved |
| Dawn 2012/2017 | Timeline | Using 2012; typo unconfirmed |
| Image-use terms | Public release | Policy page not read |
