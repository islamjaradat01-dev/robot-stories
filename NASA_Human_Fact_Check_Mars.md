# Human Fact-Check — Mars Missions (Phase 2 of 3)

Date: 2026-11-15 · Scope: the 8 Mars missions · **No data, UI or research file was edited.** This is a report for your review. Nothing in it has been applied.

Before this phase the Moon dataset was frozen. Its 12 files are locked by SHA-256 checksums (see `freeze/README.md`) and a regression test. Deep Space has not been started.

## 0. How this check was done

**Inputs inspected before checking:**
- the 8 Mars mission files: `sojourner`, `spirit`, `opportunity`, `viking-1`, `viking-2`, `phoenix`, `insight`, `ingenuity`;
- their assets and sources (`mars-a`, `mars-b`, `mars-opportunity`, `core`);
- research files R1, R2 and R3, including the R3 "still unresolved" table;
- [NASA_Image_Fixes_Report.md](NASA_Image_Fixes_Report.md) and [NASA_Final_Image_Corrections_Report.md](NASA_Final_Image_Corrections_Report.md).

**Evidence.**
- I did not rely on the research summaries. On 2026-11-15 I re-fetched every NASA page the Mars missions cite (22 pages), saved the raw text and quoted from it.
- I pulled the NASA Image and Video Library record for every Mars image.
- I fetched pages new to the project:
  - the NSSDCA records for the Pathfinder lander (1996-068A), Phoenix (2007-034A), InSight (2018-042A) and Mars 2020/Ingenuity (2020-052A);
  - NASA's 2019 Opportunity end-of-mission release.
- I searched the Image Library for NASA views of the landers and rovers today.

Several of these new sources change verdicts.

**Status legend** (the same as the Moon report):

| Status | Meaning |
|---|---|
| **VERIFIED** | A NASA source states it (wording quoted). A verified claim can still carry a citation or wording note. |
| **DISPUTED** | Two or more NASA sources give different values. The conflict is either recorded in the data or listed here as not yet recorded. |
| **NOT STATED** | No NASA source we read says it. This includes our own inferences written as fact. |
| **CHALLENGE-ONLY** | Only the challenge page says it. |

Purely narrative sentences with no checkable claim are not scored.

**English and Arabic.** I read the Arabic of every chapter, card, quiz, fact, ending and alt text next to the English. I also ran a scan of all 453 bilingual fields, comparing their numbers, terminology and typography. I report meaning differences and inconsistencies. This does not replace a native-speaker review of tone and style.

**No mission is marked verified.** Every mission stays `"unverified": true`. "Mostly accurate" below is not a sign-off.

### Source key

| Key | NASA page |
|---|---|
| PF | NASA Science, Mars Pathfinder — https://science.nasa.gov/mission/mars-pathfinder/ |
| PFN | NSSDCA, Mars Pathfinder Rover (MESURPR) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=MESURPR |
| PFL | NSSDCA, Mars Pathfinder lander (1996-068A) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-068A **(new)** |
| SP | NASA Science, Spirit — https://science.nasa.gov/mission/mer-spirit/ |
| SPN | NSSDCA, Spirit (2003-027A) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-027A |
| MER | NASA Science, Mars Exploration Rovers overview — https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/ |
| MERH | NASA Science, MER science highlights — https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-highlights/ |
| OPP | NASA Science, Opportunity — https://science.nasa.gov/mission/mer-opportunity/ |
| OPPN | NSSDCA, Opportunity (2003-032A) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A |
| OPPEND | NASA release 19-004, "NASA's Record-Setting Opportunity Rover Mission on Mars Comes to End" (13 Feb 2019) — https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/ **(new)** |
| V1 | NASA Science, Viking 1 — https://science.nasa.gov/mission/viking-1/ |
| V1N | NSSDCA, Viking 1 Lander (1975-075C) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C |
| V2 | NASA Science, Viking 2 — https://science.nasa.gov/mission/viking-2/ |
| V2N | NSSDCA, Viking 2 Lander (1975-083C) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-083C |
| PH | NASA Science, Mars Phoenix — https://science.nasa.gov/mission/phoenix/ (redirects to /mission/mars-phoenix/) |
| PHN | NSSDCA, Phoenix Mars Lander (2007-034A) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-034A **(new)** |
| PHPJ | NASA Science Photojournal, "NASA's Phoenix Lander on Mars, Nearly a Decade Later" — https://science.nasa.gov/photojournal/nasas-phoenix-lander-on-mars-nearly-a-decade-later/ |
| INS | NASA Science, InSight — https://science.nasa.gov/mission/insight/ |
| INSI | NASA Science, InSight science instruments — https://science.nasa.gov/mission/insight/science-instruments/ |
| INSH | NASA Science, InSight science highlights — https://science.nasa.gov/mission/insight/science-highlights/ |
| INSN | NSSDCA, InSight (2018-042A) — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A **(new)** |
| ING | NASA Science, Ingenuity Mars Helicopter — https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/ |
| INGEND | NASA media advisory 24-017, "After Three Years on Mars, NASA's Ingenuity Helicopter Mission Ends" (25 Jan 2024) — https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/ |
| M2020N | NSSDCA, Mars 2020 (2020-052A), includes an Ingenuity section — https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A **(new)** |
| CH | Space Apps challenge page — https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/ (it cannot be fetched from this computer because of the local certificate problem; its wording is taken from the R2 transcription) |
| IMG:`<ID>` | NASA Image and Video Library record — `https://images.nasa.gov/details/<ID>` |

## 1. Cross-mission findings (these affect several missions)

1. **Four "NOT STATED" notes are out of date.** NASA states these things:
   - **Phoenix:** when its last signal came. PHN: "its last signal was received on 02 November 2008"; "made its last transmission on 02 November 2008 before power was depleted".
   - **InSight:** the planned length, the last transmission and a presumed reason. INSN: "The primary mission was scheduled to last about two years, ending 24 November 2020"; "The last transmission from InSight was received on 15 December 2022"; declared over "presumably due to the inability of the solar cell batteries to maintain enough power… on 21 December 2022".
   - **Ingenuity:** the cause of the final-flight dropout. IMG:PIA26482 (Dec 2024) gives NASA's "most likely scenario".
   - **Spirit:** the name of the soft patch where it got stuck. IMG:PIA13730: "a sand-trap location called Troy".

   This also closes two rows of R3 §5 ("Phoenix and InSight: reason and last-contact date"; "NSSDCA records for Phoenix, InSight, Ingenuity").
2. **NASA has said where several of these machines are now. This is the core question of the challenge, and the data does not use it yet:**
   - **Spirit:** "Home Plate, the rover's final resting place" (MERH).
   - **Opportunity:** NASA saw it from orbit as "a blip" in Perseverance Valley (IMG:PIA22549). It also imaged "the bright landing platform left behind" in Eagle Crater (IMG:PIA21494).
   - **Phoenix:** the 2017 view shows the lander "now covered by dust", plus its heat shield, back shell and parachute (IMG:PIA22223, already in the data, but only its dust sentence is used).
   - **InSight:** orbit images of the lander from 2018 to 23 Oct 2024 (IMG:PIA26515). Its heat shield and parachute were also located (IMG:PIA22877).
   - **Ingenuity:** photographed by Perseverance at its final airfield, nicknamed "Valinor Hills" (IMG:PIA26236).
   - **Viking 2:** a 2006 record titled "Viking Lander 2 Gerald A. Soffen Memorial Station Imaged from Orbit" (IMG:PIA01882; the record has a title only).
   - **Viking 1 and Sojourner:** none found in this check.
3. **Facts cite a page that does not contain them.** The values are right but the citation is wrong:
   - Viking 1 "first photos minutes after landing" is in IMG:PIA00381, not V1.
   - Viking 1 launch time and pad are on V1, not V1N.
   - The Viking announcement of 16 Nov 1976 is on V2, which the Viking 1 stage does not cite.
   - Viking 2's 6,460 km is on V2, not V2N.
   - InSight's mole result is on INSI, not INS.
   - Opportunity's Pacific-time landing date is on OPP, not OPPN.
   - Spirit's "concluded its mission in 2010" is on MER, which Spirit does not cite.
4. **NASA-versus-NASA conflicts the data does not record:**
   - Opportunity's launch date (7 July US time / 8 July UT).
   - Opportunity's cruise length (six vs seven months).
   - Opportunity's mission length (OPPEND also says "more than 15 years").
   - Phoenix touchdown time (23:38:38 vs 23:53:44 UT).
   - InSight's end date (15 vs 21 Dec 2022).
   - Viking 2 touchdown time (22:37:50 vs 22:58:20 UT).
   - Pathfinder's airbag height, impact speed and bounces.
   - Sojourner's height (30 vs 28 cm).
   - Phoenix's planned length (90 days vs "at least 90 sols").

   The Viking 1 coordinates conflict is recorded, but its note understates it.
5. **Our own inferences written as fact:**
   - Sojourner "(Pacific time)" and "which is the same event".
   - Sojourner's "tools" list, which gives the rover the lander's camera and weather station.
   - Opportunity "was not abandoned or broken".
   - InSight "the largest" quake.
   - Phoenix "Trench work concludes".
   - Sojourner "stayed on Mars".
6. **Weak intro "goal" lines.** Six missions use the intro "goal" line for a planned lifetime or for "NASA's page does not state…": Sojourner, Spirit, Viking 1, Viking 2, Phoenix and InSight. NASA states each mission's objectives (PFN, SP/MER, V1N/V2N, PH, INSN), and they would be better for children.
7. **Arabic** (details in §10, L1):
   - "Lander" is translated two ways: "مركبة الهبوط" (Sojourner, Vikings) and "المركبة الهابطة" (Phoenix, InSight, alt texts).
   - "Perseverance" is spelled three ways.
   - Rotor blades are called "الريش" in one place and "شفرتا مروحة" in another.
   - A tatweel glitch appears inside "ميريديانــي" three times.
   - Straight quotes '…' are used in 8 Arabic fields, while «…» is used elsewhere.
   - One phrase in Spirit can be misread ("من الأرض نفسها").
   - The number check found no real EN/AR number mismatches. The differences it flagged are only script forms such as "Delta II" → "دلتا 2", except that "Atlas V-401" loses "401" in Arabic twice.
8. **Date labels.** Opportunity, Phoenix, InSight and Ingenuity use ISO timeline labels ("2003-07-07"). The other four Mars missions and all Moon missions use "4 Dec 1996". The UI prints labels as written, so the four timelines look different. This belongs with the open Arabic-date UI item.
9. **Missing NSSDCA IDs on units:**
   - Sojourner rover MESURPR and lander 1996-068A.
   - Phoenix 2007-034A.
   - InSight 2018-042A.
   - Ingenuity: described inside Mars 2020, 2020-052A. R2 recorded "2020-044A returned a database error", which was the wrong ID.

   Also, Opportunity's unit has no `parentFlight`, while Spirit's has one.
10. **Links and credits:**
    - All 22 cited NASA pages returned HTTP 200 on 2026-11-15. The Phoenix URL redirects but works.
    - All 17 image URLs load, and every image has a NASA Image Library record.
    - Every credit matches the record's credit line. No credit change is recommended.
    - Five launch or cruise chapters use the plain placeholder background (opp-2, opp-3, phx-2, ins-2, ing-2).

---

## 2. Sojourner (Mars Pathfinder) — `sojourner`

**Overall assessment.** The numbers on landing, data returned and cost match NASA. Problems:
- The "tools" list gives the rover instruments that were on the lander.
- Two inferences are written as fact ("Pacific time", "the same event").
- The ending says "Sojourner's final data transmission" for what NASA describes as the mission's.
- Several Pathfinder figures differ between NASA's own pages.

**Claims checked: 28 (31 status labels: 23 verified, 3 disputed, 4 not stated, 1 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | First robotic rover on Mars, 1997 (card, intro, legacy) | PF | "deliver the first-ever robotic rover, Sojourner, to the Martian surface"; landing "July 4, 1997" | **VERIFIED** |
| 2 | It travelled with a lander; together they were Mars Pathfinder (intro) | PFN | "The mission consists of a stationary lander and a surface rover." | **VERIFIED** |
| 3 | NASA's goal was to show a low-cost way to land on and explore Mars (intro, legacy) | PFN | "primary objective of demonstrating the feasibility of low-cost landings on and exploration of the Martian surface. This objective was met…" | **VERIFIED** |
| 4 | Main goals set for the first seven sols (intro, sojourner-4, fact) | PFN | "The primary objectives were scheduled for the first seven sols, all within about 10 meters of the lander." | **VERIFIED** (a schedule, not a goal) |
| 5 | Ares Vallis, an ancient flood plain (intro) | PF | "Ares Vallis… is an ancient flood plain in Mars' northern hemisphere" | **VERIFIED** |
| 6 | About 30 cm tall and 10.6 kg (sojourner-1, fact f2) | PF vs PFN, IMG:PIA00608 | PF: "23-pound (10.6 kilogram)", "full height of 1 foot (30 centimeters)". PFN: "280 mm high, 630 mm long", "Mass: 10.5 kg". PIA00608: "65 cm (26 inches) long". Explore more gives 10.5 kg and 63 cm but not the 28 cm height. | **DISPUTED** (minor) |
| 7 | Named after civil-rights crusader Sojourner Truth (sojourner-1, f1) | PF | "named Sojourner after American civil-rights crusader Sojourner Truth" | **VERIFIED** |
| 8 | "Its tools: an APXS…, three cameras, and an atmospheric structure and weather package" (sojourner-1 explore more, EN+AR) | PF, PFN, PFL | PF lists these as "Mars Pathfinder Science Instruments" (the whole mission). PFN, rover: "black and white and color imaging systems" and an APXS. PFL: "The lander was also equipped with a meteorology station." | **NOT STATED** for the rover (lander instruments attributed to it) |
| 9 | Launched 4 Dec 1996 on a Delta II (7925) from Cape Canaveral Air Force Station (timeline, sojourner-2, f1) | PF, PFL | PF: "Launch Dec. 4, 1996 UTC", "Cape Canaveral Air Force Station, Florida", "Delta II 7925". PFL: "6:58:00 UT (1:58 a.m. EST) on 4 December 1996" | **VERIFIED** |
| 10 | Landed 4 Jul 1997 at Ares Vallis, cushioned by airbags (timeline, sojourner-3) | PF | "Mars Landing July 4, 1997"; "a giant system of airbags to cushion the impact" | **VERIFIED** |
| 11 | Airbags inflated about 100 m above the ground (sojourner-3, f2, quiz explanation) | PF vs PFL | PF: "inflated these large air bags about 330 feet (100 meters) above the surface". PFL: "about 10 seconds before landing four air bags inflated… Four seconds later at an altitude of 98 m the three solid rockets… fired", which puts inflation higher than 98 m | **DISPUTED** (minor; quiz answer unaffected) |
| 12 | Hit at about 14 m/s, bounced about 15 times up to 15 m, stopped 2.5 min later about 1 km away (sojourner-3, explore more) | PF vs PFL | PF: "31 mph (14 meters per second)… bounced… about 15 times, as high as 50 feet (15 meters), before coming to rest 2-1/2 minutes later about… (1 kilometer)"; also "bounced more than 15 times". PFL: "velocity of 18 m/s - approximately 14 m/s vertical", "bounced about 12 meters (40 feet)… at least another 15 times" | **VERIFIED** (PF) / **DISPUTED** (PFL figures) |
| 13 | Four large bags with six smaller spheres each (explore more) | PF | "four large bags with six smaller, interconnected spheres within each bag" | **VERIFIED** |
| 14 | Lander named Carl Sagan Memorial Station (sojourner-3, f1) | PF, PFL | PF: "named the Carl Sagan Memorial Station"; PFL: "Sagan Memorial Station" | **VERIFIED** |
| 15 | Landed at 19.33 N, 33.55 W (explore more) | PFN, PFL | "The landing site in the Ares Vallis region of Mars is at 19.33 N, 33.55 W." | **VERIFIED** |
| 16 | "On the night of 5 July **(Pacific time)** Sojourner rolled off the lander" (sojourner-4; timeline "5-6 Jul") | PF | "On the night of July 5, late in the second Martian day, or sol 2". No time zone is named. | **VERIFIED** (date) / **NOT STATED** ("Pacific time") |
| 17 | "One NASA page puts the exit at about 05:40 UT on 6 July, **which is the same event**" (explore more) | PFN, PFL | "at about 05:40 UT on 6 July 1997 (1:40 a.m. EDT)". That it is the same event is our reading. It fits (10:40 p.m. PDT on 5 July) but NASA does not say it. | **VERIFIED** (time) / **NOT STATED** (inference) |
| 18 | Final data transmission 27 Sep 1997; mission until late September (timeline, sojourner-4, -6) | PF | "From landing until the final data transmission on Sept. 27, 1997"; "End of Mission Sept. 27, 1997" | **VERIFIED** |
| 19 | 2.3 billion bits; 16,500+ lander images; 550 rover images; 15+ chemical analyses (sojourner-5, f2) | PF | identical figures | **VERIFIED** |
| 20 | Rounded pebbles hint at water in a warmer past (sojourner-5, f1, d1) | PF | "Rounded pebbles and cobbles… suggested conglomerates that formed in running water during a warmer past" | **VERIFIED** |
| 21 | Martian dust is magnetic (d2) | PF | "Airborne dust is magnetic" | **VERIFIED** |
| 22 | Dust devils and water-ice clouds (explore more, d3) | PF | "Dust devils were seen"; "Early morning water ice clouds were seen" | **VERIFIED** |
| 23 | Communications lost for unknown reasons (sojourner-6, f1, ending) | PFN, PFL | "until 27 September 1997 when communications were lost for unknown reasons" | **VERIFIED** |
| 24 | "**Sojourner's** final data transmission came on 27 September 1997" (ending, EN+AR) | PF, PFN | PF names "Mars Pathfinder" as what returned the data. PFN: "All rover communications were done through the lander." | **VERIFIED** (date) — wording: it was the mission's final transmission, via the lander |
| 25 | The challenge page says the rover is "permanently parked" (sojourner-6 f2, notStated) | CH | R2 transcription: "first rover on Mars (1997)… now permanently parked" | **CHALLENGE-ONLY** (correctly labelled) |
| 26 | "Sojourner stayed on Mars." (ending, EN+AR) | — | No NASA sentence we read says this. | **NOT STATED** (low) |
| 27 | NotStated: NASA pages do not give the final position or the reason for the loss of communication | PFN, PFL | Reason: "unknown reasons". No position given. No NASA image record of Sojourner's final position was found. | **VERIFIED** (still true) |
| 28 | Mission cost about $265 million; rover about $25 million (sojourner-7, f1) | PFN | "approximately $265 million including launch and operations… the rover about $25 million" | **VERIFIED** |

### Missing or disputed facts
- The Pathfinder airbag, impact-speed and bounce figures differ between PF and PFL (rows 11–12). Sojourner's height also differs (row 6).
- PFN: the rover's first job was to image the lander, "to acquire three black and white images spaced 120 degrees apart of the lander". It worked "all within about 10 meters of the lander". These are good child-level details that are not used.
- PFL has the lander's own story: "The bulk of the lander's task was to support the rover by imaging rover operations and relaying data from the rover to Earth." The lander is a unit in the data but has no NSSDCA ID.

### Incorrect or misleading wording
- sojourner-1 Explore more (EN and AR): the "tools" list mixes lander and rover instruments.
- sojourner-4 (EN and AR): remove "(Pacific time)". In Explore more, remove "which is the same event".
- Ending: "Sojourner's final data transmission" should say "Mars Pathfinder's final data transmission". Optionally explain that the rover talked to Earth through the lander.
- Ending: "Sojourner stayed on Mars" is not sourced. The stage text already says the sources do not say what happened afterwards.

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA00623 | "Rover Touchdown on Martian Surface": IMP picture of "the rover Sojourner's position after driving onto the Martian surface" | card, intro, badge, sojourner-4 | Matches. Credit NASA/JPL matches the record. |
| PIA00621 | "Color Mosaic of Rover & Terrain": rover "latched to the petal", ramps undeployed, "July 4 (Sol 1)"; the description mentions the deflated airbags | sojourner-1, sojourner-3 | Matches. Good fit for the landing chapter. Credit matches. |
| core-mars (PIA02992), core-earth (PIA18033) | Mars mosaic globe; Suomi NPP Blue Marble | backgrounds | Generic. Credits match. |

### Recommended corrections
1. sojourner-1 Explore more (EN+AR): "The rover carried an alpha proton X-ray spectrometer (APXS) and black-and-white and colour cameras. The lander carried its own camera and a weather station." (PFN, PFL)
2. sojourner-4 (EN+AR): "On the night of 5 July, late on its second Martian day, Sojourner rolled off the lander." Explore more: "NASA's archive gives the time as about 05:40 UT on 6 July 1997."
3. Ending (EN+AR): "Mars Pathfinder's final data transmission came on 27 September 1997." Delete "Sojourner stayed on Mars", or replace it with "The NASA pages we read do not say where the rover ended up."
4. sojourner-1 Explore more: add "another NASA page gives its height as 28 cm".
5. sojourner-3: keep the PF numbers. Add a disputed note that PFL gives slightly different airbag, speed and bounce figures.
6. intro.goal: use PFN: "First, to test the rover near the lander during its first seven Martian days."
7. Units: add NSSDCA IDs MESURPR (rover) and 1996-068A (lander). Register PFL as a source.

### NASA source URLs used
PF, PFN, PFL, CH (above). Images: https://images.nasa.gov/details/PIA00623 · /PIA00621 · /PIA00608

---

## 3. Spirit — `spirit`

**Overall assessment.** Very close to NASA's text throughout. The 2011/2010 end-date conflict is correctly recorded. Problems:
- One "not stated" note is out of date: NASA names the sand trap "Troy".
- NASA's "final resting place" statement is not used.
- One Arabic phrase is ambiguous.
- One discovery is slightly overstated.

**Claims checked: 27 (27 status labels: 26 verified, 1 disputed, 0 not stated, 0 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | Planned for 90 Martian days, worked over six years (card, intro, spirit-4, quiz) | SP | "originally planned to last 90 Martian days"; "operated for 6 years, 2 months, and 19 days" | **VERIFIED** |
| 2 | Twin of Opportunity; about 185 kg; golf-cart size (intro, spirit-1, f1) | SP, SPN | "about the size of a golf cart and seven times heavier (about 405 pounds or 185 kilograms)"; SPN "Mass: 185 kg" | **VERIFIED** |
| 3 | Whole spacecraft 1,062 kg (spirit-1, f1) | SP | "Spacecraft Mass 2,341 pounds (1,062 kilograms)" | **VERIFIED** |
| 4 | Instrument list (spirit-1 Explore more) | SP | Pancam, Navcam, Mini-TES, MB, APXS, magnets, MI, RAT | **VERIFIED** |
| 5 | "robot geologist on wheels" (spirit-1) | MER | "NASA's twin robot geologists" | **VERIFIED** |
| 6 | Sent to explore the surface of Mars (intro.whyCreated) | SP | "main scientific objective was to search for a range of rocks and soil types and then look for clues for past water activity" | **VERIFIED** (vague; see Arabic note) |
| 7 | Gusev Crater (intro) | SP | "inside the Gusev crater" | **VERIFIED** |
| 8 | Launched 10 Jun 2003, Delta II 7925-9.5, SLC-17A, Cape Canaveral (timeline, spirit-2, f1) | SP, SPN | SP: "Delta 7925-9.5 (no. D298)", "June 10, 2003 / 10:58:47 PDT", "SLC-17A". SPN: "Delta II 7925 on 10 June 2003 at 17:58:46.773 UT" | **VERIFIED** |
| 9 | Landed 4 Jan 2004 UT, 3 Jan 20:35 Pacific (timeline, spirit-3 Explore more) | SP, SPN | SP: "hit the Martian surface at 20:35 PST Jan. 3, 2004". SPN: "04:35 UT on 4 January 2004 (Earth received time), (11:35 p.m. Jan. 3 EST)" | **VERIFIED** |
| 10 | Parachute, airbags, retrorockets; bounced 28 times (spirit-3, f2) | SP | "bouncing 28 times before rolling to a stop" | **VERIFIED** |
| 11 | Columbia Memorial Station, honoring the seven Columbia astronauts (spirit-3, f1) | SP | "Columbia Memorial Station to honor the seven astronauts killed when the space shuttle Columbia broke apart" | **VERIFIED** |
| 12 | About 14.57 S, 175.47 E, about 13.4 km from target (Explore more) | SP, SPN | SP "14.5692 degrees south… 175.4729 degrees east", "about 8 miles (13.4 kilometers) from the planned target". SPN "14.572 S, 175.478 E" | **VERIFIED** ("about" covers the third-decimal difference) |
| 13 | Stuck in soft soil beside Home Plate on 1 May 2009 (timeline, spirit-6, ending) | SP, SPN | SP: "on May 1, 2009, while driving south beside the western edge of a low plateau called Home Plate, Spirit became stuck in soft soil". SPN: "On 23 April 2009, the rover broke through a thin crust into a pocket of sand… By 1 May it could no longer move at all." | **VERIFIED** (SPN's 23 April start not shown) |
| 14 | Six years, two months, 19 days; more than 25 times; 4.8 mi (7.73 km) (spirit-4, f1, legacy) | SP | identical | **VERIFIED** |
| 15 | Bedrock in the Columbia Hills altered by water (spirit-5, d3) | SP | "Discovered a surprising variety of bedrock in Columbia Hills… **Some of the rocks** showed evidence of alteration by water." | **VERIFIED** (wording: "some of the rocks") |
| 16 | 2007 silica patch "Gertrude Weise", likely hot springs or steam vents (spirit-5, f1, d1) | SP | "dubbed 'Gertrude Weise'… likely produced in an environment of hot springs or steam vents" | **VERIFIED** |
| 17 | Evidence of an explosion at Home Plate (2006) (Explore more, d2) | SP | "2006: Found evidence of an ancient explosion at… Home Plate" | **VERIFIED** |
| 18 | Tyrone soil with sulfur and a trace of water (Explore more) | SP | "a place named Tyrone that contained much sulfur and a trace of water" | **VERIFIED** |
| 19 | Filmed dust devils (Explore more) | SP | "2005: Captured several movies of dust devils in motion" | **VERIFIED** |
| 20 | Right-rear wheel stopped 28 Nov 2009 (f1) | SP | "On Nov. 28, another of Spirit's six wheels, the right rear one, stopped working." | **VERIFIED** |
| 21 | Last communication 22 Mar 2010 (timeline, spirit-6, ending) | SP, SPN | SP "After March 22, 2010… not able to regain contact"; SPN "The last transmission from Spirit occurred on 22 March 2010." | **VERIFIED** |
| 22 | Most probable cause: excessive cold made survival heaters ineffective ("probable" note) | SP | "The most probable cause of the loss of contact was the excessive cold that made its survival heaters ineffective." | **VERIFIED** |
| 23 | More than 1,300 commands (Explore more) | SP | "Despite more than 1,300 commands sent to Spirit" | **VERIFIED** |
| 24 | Recovery ended 25 May 2011; "another NASA page says the mission concluded in 2010" (timeline t-end, f2, ending) | SP vs MER | SP: "NASA officially concluded its recovery efforts May 25, 2011". MER caption: "Spirit concluded its mission in 2010." | **DISPUTED** (correctly recorded; the 2010 page, MER, is not cited) |
| 25 | NotStated: "The NASA pages we read do not give a name to the soft patch" | IMG:PIA13730, IMG:PIA12203 | PIA13730: "Spirit has been at a sand-trap location called Troy since April 2009." PIA12203: "the location called Troy, where Spirit became embedded in soft soil during the spring of 2009." | **VERIFIED** (note out of date; must change) |
| 26 | Ending: `currentLocation: planetary-surface`, no place named | MERH | "an ancient volcano erupted at 'Home Plate,' the rover's final resting place" | **VERIFIED** (new evidence the ending can use) |
| 27 | Legacy: water and heat once shaped the ground at Gusev | SP | "strong evidence that Mars was once much wetter"; silica from "hot springs or steam vents" | **VERIFIED** |

### Missing or disputed facts
- **Front wheel.** SP: "a front wheel stopped working", and the dragging wheel exposed the silica. The story mentions only the right-rear wheel, which failed later.
- **"Firsts" for children.** SP: Spirit used its rock abrasion tool on the rock Adirondack, "a feat performed for the very first time on Mars". SP: in March 2005 passing dust devils "swept dust from the top of the solar panels", raising power "from the usual 60% to 93%".
- **Later status.** SP: in January 2010 Spirit was "reformulated… as a stationary science platform".
- **Another discovery.** MERH: at Comanche, Spirit found carbonate-rich rocks from a "warm and wet" past with "near-neutral-pH water".

### Incorrect or misleading wording
- AR intro.whyCreated: "لاستكشاف سطح المريخ من الأرض نفسها" can be read as "to explore Mars from Earth itself". Suggest "لاستكشاف سطح المريخ عن قرب، على أرضه مباشرة", or use NASA's objective.
- spirit-5 and d3 (EN+AR): "found bedrock… altered by water" should say "found that some rocks in the Columbia Hills had been altered by water".

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA05040 | "Spirit Stretches Out": one frame of a before/after animation of the bogie deployment, from the hazard-avoidance camera | card, intro, badge, spirit-1 | Matches. Credit NASA/JPL-Caltech matches. |
| PIA17760 | View south from the top of Husband Hill, Oct 2005 | spirit-4 | Matches. Credit NASA/JPL-Caltech/Cornell Univ. matches. |
| — | — | spirit-6 (ending) | No picture. Candidates (records checked, not yet viewed): PIA12203 "Calypso Panorama of Spirit View from Troy" (NASA/JPL-Caltech/Cornell University); PIA13730 traverse map. |

### Recommended corrections
1. Ending notStated (EN+AR): replace the "no name" note with "NASA calls the place where Spirit got stuck 'Troy'" (PIA13730, as a new source).
2. Ending final text: add "NASA calls Home Plate the rover's final resting place" (MERH, opp-src-d).
3. Timeline t-end, f2 and Explore more: cite MER (opp-src-a) for the "concluded in 2010" wording.
4. spirit-5 and d3: "some rocks… altered by water".
5. AR intro.whyCreated: fix the ambiguous phrase.
6. Optional: add "It broke into a pocket of sand on 23 April 2009; by 1 May it could not move" (SPN), and the earlier front-wheel failure (SP).

### NASA source URLs used
SP, SPN, MER, MERH (above). Images: https://images.nasa.gov/details/PIA05040 · /PIA17760 · /PIA13730 · /PIA12203

---

## 4. Opportunity — `opportunity`

**Overall assessment.** The records, discoveries and end dates match NASA. Problems:
- One chapter title is English-only and NASA itself disagrees on the figure ("Seven Months in Space").
- The launch date is the US date, while the landing is labelled UT.
- One legacy sentence is unsupported ("not abandoned or broken").
- NASA's orbit views of the rover and its abandoned landing platform are not used. They are exactly the kind of evidence the challenge asks for.

**Claims checked: 25 (26 status labels: 22 verified, 3 disputed, 1 not stated, 0 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | Meant to last 3 months, explored almost 15 years (card) | OPP | "lifetime of 90 sols (Martian days)—about three Earth months"; "operated for almost 15 years" | **VERIFIED** |
| 2 | Twin of Spirit (intro, opp-1, f1) | MER | "identical twin robots" | **VERIFIED** |
| 3 | Cameras, spectrometers, a microscope, a rock-grinding tool; instrument list (intro, opp-1) | OPP | Pancam, Navcam, Mini-TES, MB, APXS, magnets, Microscopic Imager, RAT | **VERIFIED** ("microscope" = Microscopic Imager; acceptable for children) |
| 4 | "NASA says they confirmed that water was long standing on the surface of Mars in ancient times" (intro) | MER | "By studying the rock record, Spirit and Opportunity confirmed that water was long standing on the surface of Mars in ancient times." | **VERIFIED** |
| 5 | Designed for 90 Martian days, about three months (intro.goal, opp-5, quiz) | OPP, OPPEND | "Designed to last just 90 Martian days and travel 1,100 yards (1,000 meters)" | **VERIFIED** |
| 6 | Meridiani Planum, inside a small crater called Eagle (intro, timeline, opp-4) | OPP, IMG:PIA21494 | "within an impact crater known as Eagle"; PIA21494: "Eagle Crater is about 72 feet (22 meters) in diameter" | **VERIFIED** |
| 7 | Launched **7 Jul 2003**, Delta 7925H, SLC-17B, Cape Canaveral (timeline "2003-07-07", opp-2, f1) | OPP vs OPPN | OPP: "July 7, 2003 / 20:18:15 PDT", "Delta 7925H (no. D299)", "SLC-17B". OPPN: "launched on a heavy Delta II 7925H on **8 July 2003 at 03:18:15 UT** (July 7, 11:18:15 p.m. EDT)" | **VERIFIED** (US date) / **DISPUTED** (UT date is 8 July; not recorded) |
| 8 | Cruise chapter title "**Seven Months in Space**" (EN); Arabic title "رحلة عبر الفضاء" ("A journey through space") (opp-3) | OPP vs OPPEND | OPP: "traveled for **six months**". OPPEND: "landed… on Jan. 24, 2004, **seven months** after its launch" | **DISPUTED** (not recorded); EN≠AR |
| 9 | Travelled "folded safely inside its spacecraft" (opp-3) | OPPN, IMG:PIA21494 | "compactly stowed in a tetrahedron shaped landing platform and encased in an aeroshell"; PIA21494: "with Opportunity folded-up inside" | **VERIFIED** |
| 10 | Landed 24 Jan Pacific = 25 Jan 2004 UT (timeline, opp-4, f1) | OPP, OPPN, IMG:PIA21494 | OPP "Jan. 24, 2004 PST"; OPPN "04:54:22.7 UT (05:05:26.6 UT Earth received time, 12:05 a.m. EST)"; PIA21494 "Jan. 25, 2004, Universal Time (Jan. 24, PDT)" | **VERIFIED** (f1 cites OPPN, which has no Pacific time; add OPP) |
| 11 | "Its landing site was nicknamed the Hematite Site" (opp-4) | OPPN | "Terra Meridiani is also known as the 'Hematite Site' because it displays evidence of coarse-grained hematite" | **VERIFIED** (wording: NASA gives the nickname to the region) |
| 12 | About 60 times longer; 28.06 mi (45.16 km) (opp-5, f1) | OPP | "exceeding its life expectancy by 60 times"; "total rover odometry was 28.06 miles (45.16 kilometers)" | **VERIFIED** |
| 13 | Almost 15 years (mission page) or over 14 years (NSSDCA) (opp-5 Explore more, f2) | OPP, OPPN, OPPEND | OPP "almost 15 years"; OPPN "for over 14 years"; OPPEND video caption "the exploration spanned more than 15 years from 2004 to 2019" | **DISPUTED** (recorded; a third wording exists; "almost 15" and "over 14" do not really conflict) |
| 14 | Hematite "blueberries", which typically form in water (opp-6, f1, d1) | MERH | "small, spherical deposits of the mineral hematite, which typically forms in water… nicknamed the 'blueberries'" | **VERIFIED** |
| 15 | Gypsum veins near Endeavour Crater (opp-6, d2) | MERH | "Near the rim of Endeavour Crater, Opportunity found bright-colored veins of gypsum" | **VERIFIED** |
| 16 | Clay minerals formed in neutral-pH water (opp-6, d3) | MERH | "clay minerals formed in neutral-pH water" | **VERIFIED** |
| 17 | A June 2018 Mars-wide dust storm covered its location (timeline, opp-7, ending) | OPP, OPPEND | "a severe Mars-wide dust storm blanketed its location in June 2018" | **VERIFIED** |
| 18 | "Its last message arrived on 10 June 2018" (opp-7, timeline, ending) | OPP, OPPN, OPPEND | "The last signal from the spacecraft was heard on June 10, 2018"; "The final communication from the rover was received on 10 June 2018" | **VERIFIED** (wording: "signal" rather than "message") |
| 19 | NASA ended the mission 13 Feb 2019 (timeline, opp-7, ending) | OPP, OPPEND | "Feb. 13, 2019: NASA declares End of Mission"; release dated Feb 13, 2019 | **VERIFIED** |
| 20 | Came to rest / rests in Perseverance Valley (opp-7 f1, ending, unit) | OPP, OPPEND, IMG:PIA23178 | "its most appropriate final resting spot on Mars -- Perseverance Valley"; PIA23178: "where the rover was located within Perseverance Valley on June 10, 2018" | **VERIFIED** |
| 21 | Legacy: evidence that water was long standing on ancient Mars | MER | as row 4 | **VERIFIED** |
| 22 | "Its 45 km of driving was an off-world record for years" (legacy) | OPP, MER | "an extra-terrestrial record that stood until NASA's Perseverance Mars rover surpassed it on Oct. 11, 2026" | **VERIFIED** (past tense correct; the end date can be added) |
| 23 | "Opportunity was **not abandoned or broken**." (opp-8, EN+AR) | — | No NASA page says this. OPPEND: "the likelihood of receiving a signal is far too low to continue recovery efforts". Nothing describes the rover's condition. | **NOT STATED** |
| 24 | "kept working far beyond its plan and showed that water once shaped the surface of Mars" (opp-8) | OPP, MER | rows 5, 12, 4 | **VERIFIED** |
| 25 | NotStated: NASA gives no final-message wording, so none is quoted | OPP, OPPEND | No NASA page gives a "last words" text | **VERIFIED** (correct to avoid) |

### Missing or disputed facts
- **NASA saw Opportunity and its discarded hardware from orbit:**
  - IMG:PIA22549 (Sep 2018): "Opportunity appears as a blip in this image".
  - IMG:PIA21494 (2017): "The bright landing platform left behind by NASA's Mars Exploration Rover Opportunity in 2004 is visible inside Eagle Crater… The spacecraft's backshell and parachute, jettisoned during final descent, are visible".
  - OPP: "the rover took some spectacular shots of the abandoned area where the lander, backshell, and parachute were still visible".
- **Landing details not used.** OPP: the site "became known as the Challenger Memorial Station" (it matches Spirit's Columbia station). OPP: "bounced at least 26 times"; "about 9 miles (14.9 kilometers) from the intended target".
- **Kid-friendly highlights in OPP not used:**
  - The "Heat Shield Rock" iron-nickel meteorite (Jan 2005).
  - The marathon distance (25 Mar 2015).
  - The steepest-slope record (32°, 10 Mar 2016).
  - Breaking Viking 1's record for the longest operation on Mars, "6 years and 116 days" (20 May 2010).
  - The World Trade Center aluminium on the rock abrasion tool.
- **Opportunity's mass.** OPPEND gives the rover as "384-pound (174-kilogram)", while OPP gives "185 kilograms". The data does not state Opportunity's mass, so this is for the record only.

### Incorrect or misleading wording
- opp-3 title. EN "Seven Months in Space" and AR "رحلة عبر الفضاء" do not match, and NASA gives both six and seven months. Use a neutral title in both languages (e.g. "Journey to Mars" / "الرحلة إلى المريخ"). In the text, say "about six to seven months (NASA pages differ)".
- opp-8 (EN and AR): delete "not abandoned or broken".
- opp-2 and timeline: "7 July 2003 (US time; 8 July in UT)", to match how the landing date is handled.
- AR: "ميريديانــي" contains a tatweel glitch (intro, timeline, opp-4). Use "ميريدياني".
- opp-7 and ending: "last message" → "last signal" (EN). In Arabic, "رسالتها الأخيرة" → "آخر إشارة منها".
- Timeline labels use ISO dates ("2003-07-07"), unlike Spirit and Sojourner.

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA17759 | "Self-Portrait by Opportunity Mars Rover in January 2014", "about three weeks before completing a decade of work on Mars" | card, intro, badge, opp-1 | Matches. Credit NASA/JPL-Caltech/Cornell Univ./Arizona State Univ. matches. |
| PIA06739 | "Opportunity Catches its Shadow on Sol 180" in Endurance Crater | opp-5 "Far Beyond the Plan" | Matches. Credit NASA/JPL matches the record. Strong fit: OPP says sol 180 "marked double the rover's primary 90-sol mission". This could go in the caption. |
| PIA22222 | Sol 5,000 self-portrait in Perseverance Valley, taken with the Microscopic Imager (NASA title: "Opportunity's First Selfie") | opp-7 | Matches. Credit matches. The alt text does not say "first", which is right, since the 2014 picture is also a self-portrait. |
| bg-placeholder | not a NASA image | opp-2, opp-3 backgrounds | Labelled as a placeholder. |

### Recommended corrections
1. opp-8 (EN+AR): replace the first sentence with "NASA says Opportunity reached its final resting spot in Perseverance Valley." (OPP)
2. opp-3 (EN+AR): neutral title; record the six/seven-month conflict (OPP vs OPPEND, adding OPPEND as a source).
3. opp-2 and timeline (EN+AR): add the UT date, 8 July 2003 (OPPN).
4. opp-4 f1: cite OPP for the Pacific date. Add "Challenger Memorial Station" (OPP).
5. Ending or legacy: add the NASA orbit views (PIA22549, PIA21494). PIA21494's "landing platform left behind" is discarded equipment named by NASA.
6. Legacy: "an off-world driving record until 11 October 2026, when Perseverance passed it" (OPP).
7. AR: fix "ميريديانــي"; use "آخر إشارة".
8. Unit: add `parentFlight` "Mars Exploration Rover B", matching Spirit.

### NASA source URLs used
OPP, OPPN, OPPEND, MER, MERH (above). Images: https://images.nasa.gov/details/PIA17759 · /PIA06739 · /PIA22222 · /PIA22549 · /PIA21494 · /PIA23178

---

## 5. Viking 1 Lander — `viking-1`

**Overall assessment.** Accurate, and its two date conflicts (end of mission, renaming year) are correctly recorded. Problems:
- Three citations point to the wrong page.
- The coordinates note understates a real difference.
- The intro "goal" line says only that nothing is stated, although NASA gives the lander's objectives.
- Two strong NASA facts are missing: "first truly successful landing on Mars", and the 6-year-116-day record that Opportunity later broke.

**Claims checked: 25 (27 status labels: 23 verified, 3 disputed, 0 not stated, 1 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | First photos from the surface minutes after landing in 1976 (card, viking-1-3, f1, quiz) | IMG:PIA00381, V1, V1N | PIA00381: "the first photograph ever taken on the surface of the planet Mars. It was obtained by Viking 1 just minutes after the spacecraft landed". V1: "began transmitting the first images from the surface". V1N: "Transmission of the first surface image began 25 seconds after landing." | **VERIFIED** (f1 cites V1, which lacks "minutes"; cite PIA00381) |
| 2 | Two cameras, biology lab, weather station, XRF, GCMS, sampler arm (intro) | V1 | the lander instrument list (which also has a seismometer) | **VERIFIED** |
| 3 | Sent to look at Mars up close and test the soil, including a search for life (intro) | V1 | "designed to reach Mars and collect evidence on the possibility on life on Mars" | **VERIFIED** |
| 4 | intro.goal: "NASA's page does not state a planned lifetime" | V1, V1N | True as worded. V1N does state the lander's objectives: "to study the biology, chemical composition (organic and inorganic), meteorology, seismology, magnetic properties, appearance, and physical properties" | **VERIFIED** (weak; see corrections) |
| 5 | Chryse Planitia ("Golden Plain") (intro) | V1 | "the western slopes of Chryse Planitia (Golden Plain)" | **VERIFIED** |
| 6 | A pair: orbiter and lander (viking-1-1) | V1, V1N | "Each spacecraft consisted of an orbiter and a lander." | **VERIFIED** |
| 7 | First spacecraft's batteries discharged, so the second launched as Viking 1 (Explore more, f1) | V1 | "Prior to launch, the batteries of the first spacecraft were discharged, prompting NASA to replace the original first spacecraft with the second, which was launched as Viking 1." | **VERIFIED** |
| 8 | Launched 20 Aug 1975, 21:22 UT, Titan IIIE-Centaur, LC-41 (timeline, viking-1-2, f1) | V1 | "Aug. 20, 1975 / 21:22:00 UT"; "Launch Complex 41"; "Titan IIIE-Centaur" | **VERIFIED** (f1 cites V1N, which has the date and rocket but not the time or pad) |
| 9 | Entered orbit 19 Jun 1976 (timeline, viking-1-2) | V1, V1N | "entered orbit around Mars June 19, 1976" | **VERIFIED** |
| 10 | Landed in western Chryse Planitia, 20 Jul 1976 (timeline, viking-1-3) | V1, V1N | "touched down in western Chryse Planitia" | **VERIFIED** |
| 11 | About 28 km from the target, because the first site was rougher (Explore more) | V1 | "the area was rougher than expected"; "about 17 miles (28 kilometers) from its planned target" | **VERIFIED** |
| 12 | About 22 N, 48 W; note: "NASA pages give the numbers in different forms" (Explore more, f2) | V1 vs V1N | V1: "22.483 degrees north latitude and 47.94 degrees west longitude". V1N: "22.27 deg N latitude and 312.05 deg E longitude (planetocentric)" | **DISPUTED** (recorded; but the latitudes differ by about 0.2°, not only in form) |
| 13 | First image transmission began 25 s after landing (Explore more) | V1N | as quoted | **VERIFIED** |
| 14 | First soil scooped 28 Jul 1976; abundance of sulfur (timeline, viking-1-4, f2, d1) | V1 | "On July 28, 1976, the lander's robot arm scooped up the first soil samples"; "Data showed an abundance of sulfur" | **VERIFIED** |
| 15 | Biology "weak positive"; organic test "negative results" (viking-1-4, quotes, f1, d2) | V1 | "could have been construed as indicating the presence of life (weak positive), but the major test for organic compounds… gave negative results" | **VERIFIED** (quotes exact) |
| 16 | −86 °C before dawn to −33 °C in the afternoon (Explore more) | V1 | "minus 86 degrees Celsius… before dawn to… minus 33 degrees Celsius in the afternoon" | **VERIFIED** |
| 17 | Primary mission ended Nov 1976; extended to May 1978; continued to July 1979 (viking-1-5, f1) | V1 | "Extended Mission (November 1976 to May 1978) and the Continuation Mission (May 1978 to July 1979)" | **VERIFIED** |
| 18 | Seismometer inoperable (Explore more) | V1, V1N | "The seismometer on the lander was, however, inoperable."; V1N "failed to uncage" | **VERIFIED** |
| 19 | Both Vikings accomplished their goals, announced 16 Nov 1976 (Explore more) | V2 | "On Nov. 16, 1976, NASA announced that both Viking 1 and Viking 2 missions had successfully accomplished their mission goals" | **VERIFIED** (the stage cites V1 and V1N only; add V2) |
| 20 | The lander kept operating until November 1982 (viking-1-5) | V1, V1N | "The lander operated until Nov. 11, 1982"; "until 13 November 1982" | **VERIFIED** |
| 21 | Faulty command from Earth; later attempts failed; 11 vs 13 Nov (timeline, viking-1-6, f1/f2, ending) | V1 vs V1N | V1: "operated until Nov. 11, 1982, when a faulty command sent from Earth resulted in an interruption of communications. Further attempts to regain contact proved to be unsuccessful." V1N: "It operated until 13 November 1982 when contact was lost." | **VERIFIED** (cause, V1 only, correctly noted) / **DISPUTED** (date, recorded) |
| 22 | Renamed Thomas Mutch Memorial Station; year withheld (1981 vs 1982) (Explore more, ending, notStated) | V1 vs V1N | V1: "In January 1982, it was renamed"; V1N: "named the Thomas Mutch Memorial Station in January 1981" | **VERIFIED** (name) / **DISPUTED** (year, correctly withheld) |
| 23 | Orbiters 52,663 images, about 97% mapped; landers about 4,500 photos (legacy, f1) | V1, V2 | "the two Viking orbiters returned 52,663 images of Mars and mapped about 97 percent of the surface… The landers returned 4,500 photos" | **VERIFIED** |
| 24 | NotStated: the challenge page says the landers "remain exactly where they touched down" | CH | R2 transcription | **CHALLENGE-ONLY** (correctly labelled; no Viking 1 orbit view was found in this check) |
| 25 | Ending `currentLocation: not-stated` | — | No NASA page or image record found states Viking 1's present position | **VERIFIED** (as not stated) |

### Missing or disputed facts
- **First real landing.** V1: "NASA's Viking 1 made the first truly successful landing on Mars. The Soviet Mars 3 lander claimed a technical first with a survivable landing in 1971, but contact was lost seconds after it touched down."
- **A record.** OPP: Opportunity "broke the record set by the Viking 1 Lander for the longest continuous operation on the surface of Mars: 6 years and 116 days". This is a cross-link between journeys.
- **Power source.** V1N: the lander was powered by "two radioisotope thermal generator (RTG) units containing plutonium 238". This is the same kind of power source as the Apollo ALSEP in the Moon journeys.
- **The orbiter's end.** V1: "shut down Aug. 7, 1980, after it ran out of attitude control propellant".
- **Weather reports.** V1: the lander "continued to return daily (and then eventually weekly) weather reports as part of the Viking Monitor Mission".

### Incorrect or misleading wording
- f2 note (EN+AR): "write the coordinates differently" should become "give slightly different positions (22.48° N or 22.27° N)".
- intro.goal: a "not stated" sentence in a child-facing slot. Use V1N's objectives.
- AR viking-1-4 Explore more: "-86 درجة" / "-33 درجة" should say "درجة مئوية" (EN says C).

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA00381 | First photograph on the Mars surface; "At right is a portion of footpad #2" | card, intro, badge, viking-1-3 | Matches. The alt text's "part of the lander at the lower right" is the footpad; it could say so. Credit NASA/JPL matches. |
| PIA00382 | First panoramic view by Viking 1; sample-arm housing out of focus | viking-1-3 | Matches. Credit matches. |
| core-mars, core-earth | generic | backgrounds | Credits match. |

### Recommended corrections
1. Re-point citations: f1 "minutes" → PIA00381 (register as a source); viking-1-2 f1 → V1; viking-1-5 Explore more → add V2.
2. f2 note (EN+AR): name the two latitudes.
3. intro.goal (EN+AR): "To study the biology, chemistry, weather and ground of Mars where it landed" (V1N).
4. Add to viking-1-3 or the legacy: "NASA calls it the first truly successful landing on Mars" (V1), keeping NASA's Mars 3 caveat.
5. Add to the legacy: Viking 1's 6-year-116-day record, later broken by Opportunity (OPP).
6. AR: "درجة مئوية".

### NASA source URLs used
V1, V1N, V2, OPP, CH (above). Images: https://images.nasa.gov/details/PIA00381 · /PIA00382

---

## 6. Viking 2 Lander — `viking-2`

**Overall assessment.** Accurate. All three NASA conflicts (tilt, coordinates, end date) are recorded. Problems:
- No mission-specific picture at all: the card, intro and badge all use the generic Mars globe, so the card shows only the craft drawing.
- One citation points to the wrong page.
- NASA's reason for the Utopia site, and its explanation of the puzzling life results, are missing.

**Claims checked: 20 (22 status labels: 18 verified, 3 disputed, 0 not stated, 1 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | The second Viking lander, far to the north, worked until its batteries failed (card) | V2, V2N | V2N: "turned off on April 11, 1980 when its batteries failed"; V2: "near the edge of the polar ice cap" | **VERIFIED** |
| 2 | First called Viking-A; renamed Viking 2 after a battery problem changed the launch order (intro, viking-2-1, f1) | V2 | "The Viking-A spacecraft was scheduled to be launched first but ended up being launched second due to a problem with its batteries. It was renamed Viking 2." | **VERIFIED** |
| 3 | One of two landers sent to study Mars from the ground, including tests for life (intro) | V2, V1 | "used a combination of orbiter and lander to explore Mars"; biology experiments | **VERIFIED** |
| 4 | intro.goal: "NASA's pages do not state a planned lifetime" | V2, V2N | True as worded. V2N gives the lander's objectives (same text as V1N). | **VERIFIED** (weak) |
| 5 | Utopia Planitia, near the edge of the polar ice cap (intro, timeline, viking-2-3) | V2 | "select a different site at Utopia Planitia, near the edge of the polar ice cap" | **VERIFIED** |
| 6 | Each mission had an orbiter and a lander (viking-2-1) | V2 | as row 3 | **VERIFIED** |
| 7 | Launched 9 Sep 1975, 18:39 UT, Titan IIIE-Centaur, LC-41 (timeline, viking-2-2, f1) | V2 | "Sept. 9, 1975 / 18:39:00 UT"; "Launch Complex 41" | **VERIFIED** |
| 8 | Entered orbit 7 Aug 1976 (timeline, viking-2-2) | V2, V2N | "entered orbit around Mars on Aug. 7, 1976" | **VERIFIED** |
| 9 | Landed 3 Sep 1976 (timeline, viking-2-3) | V2, V2N | "The lander touched down safely on Sept. 3, 1976" | **VERIFIED** |
| 10 | About 6,460 km from the Viking 1 site (viking-2-3, f1) | V2 | "about 4,000 miles (6,460 kilometers) from the Viking 1 landing site" | **VERIFIED** (f1 cites V2N, which does not contain it) |
| 11 | Tilted about 8.5° (8.2° on another page), one leg on a rock (Explore more) | V2 vs V2N | V2: "tilted 8.5 degrees to the west"; V2N: "with one leg on a rock, tilted at 8.2 degrees" | **DISPUTED** (recorded) / **VERIFIED** (leg on a rock) |
| 12 | Thrusters fired once more before touchdown, cracking the surface and raising dust (Explore more) | V2N | "the thrusters fired an extra time 0.4 seconds before landing, cracking the surface and raising dust" | **VERIFIED** |
| 13 | Latitude about 48 N; numbers differ slightly (Explore more) | V2 vs V2N | V2: "47.968 degrees north latitude and 225.71 degrees west longitude"; V2N: "47.6673 deg N latitude and 134.2809 deg E longitude" | **DISPUTED** (recorded) |
| 14 | Samples from 12 Sep 1976; biology inconclusive (viking-2-4, f1, quiz, d1) | V2 | "soil collected on three occasions (beginning Sept. 12, 1976) produced similar results to its twin: inconclusive on whether life exists or ever has existed on the surface of Mars" | **VERIFIED** |
| 15 | 1,281 Mars days; turned off April 1980 when its batteries failed; 11 vs 12 April (timeline, viking-2-5, f1, ending) | V2N vs V2 | V2N: "operated on the surface for 1281 Mars days and was turned off on April 11, 1980 when its batteries failed". V2: "April 12, 1980: End of lander mission"; "continued to transmit data until April 12, 1980" | **VERIFIED** (days and cause, V2N) / **DISPUTED** (date, recorded) |
| 16 | Renamed Gerald Soffen Memorial Station, July 2001 (timeline, Explore more, ending) | V2 | "In July 2001, the Viking 2 lander was renamed the Gerald Soffen Memorial Station" | **VERIFIED** |
| 17 | 16 Nov 1976 announcement; 52,663 orbiter images; about 4,500 lander photos (viking-2-6, f1) | V2 | as quoted for Viking 1, rows 19 and 23 | **VERIFIED** |
| 18 | Legacy: "Viking 2 helped the Viking program return about 4,500 lander photos and map about 97% of Mars" | V2 | the mapping was by "the two Viking orbiters" | **VERIFIED** (wording: the lander did not map) |
| 19 | NotStated: the challenge page says the landers "remain exactly where they touched down" | CH, IMG:PIA01882, IMG:PIA04023 | The claim is on CH only. NASA record PIA01882 (2006) is titled "Viking Lander 2 Gerald A. Soffen Memorial Station Imaged from Orbit" (title only, no description). PIA04023 (2002): "The exact location of Lander 2 is not as well established as Lander 1 because there were no clearly identifiable features in the lander images" | **CHALLENGE-ONLY** (as worded; NASA's orbit image is evidence a human should read on Photojournal) |
| 20 | NotStated: no planned lifetime or soil-chemistry, weather or seismometer results in the pages read | V2, V2N | true for the pages read | **VERIFIED** |

### Missing or disputed facts
- **Why Utopia.** V2: it was chosen "where water was located and where there was a better chance of finding signs of life".
- **Why the life results were puzzling.** V2: "Scientists believed that Martian soil contained reactants created by the ultraviolet bombardment of the soil that could produce characteristics similar to those of living organisms in Earth soil." A clear, child-level explanation that is not used.
- **The orbiter's story.** V2: the orbiter came "within 17 miles (28 kilometers) of the Martian moon Deimos in May 1977". Orbiter operations ended "July 24, 1978" after "a series of leaks".
- **Touchdown time conflict (not used in the data).** V2 "22:37:50 UT" vs V2N "22:58:20 UT".
- **A caption not to use.** PIA04023 says "The two Viking Landers operated for over 6 years". That is true for Viking 1 only (Viking 2: Sept 1976 – April 1980).

### Incorrect or misleading wording
- Legacy (EN+AR): say the orbiters did the mapping, e.g. "…return about 4,500 photos from the ground, while the two Viking orbiters mapped about 97% of Mars."

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| core-mars (PIA02992) | Mars Digital Image Mosaic Globe | card, intro, badge, all backgrounds | The only picture. Because MissionCard hides `core-*` images, the Viking 2 card falls back to the craft drawing. |
| Candidates (not used; records exist with titles only; a human should read the Photojournal caption and look at each before use) | PIA00396 "Viking Lander 2 First Picture On The Surface Of Mars"; PIA00568 "First Color Image of the Viking Lander 2 Site"; PIA00573 "Frost at the Viking Lander 2 Site"; PIA01882 "Viking Lander 2 Gerald A. Soffen Memorial Station Imaged from Orbit" | — | All credited NASA/JPL (PIA01882: NASA/JPL-Caltech/University of Arizona). |

### Recommended corrections
1. viking-2-3 f1: cite V2 for 6,460 km. V2N can be cited for "about 200 km west of the crater Mie".
2. Add the reason for the site (V2) to intro.whereGoing or viking-2-3.
3. Add the UV-reactant explanation (V2) to viking-2-4 Explore more.
4. Legacy (EN+AR): orbiters mapped; landers photographed.
5. Choose a real Viking 2 picture for the card and intro after a human caption check (candidates above).
6. intro.goal: use V2N's objectives.
7. Keep the "remain where they touched down" note. Add PIA01882 as a lead for the human reviewer.

### NASA source URLs used
V2, V2N, CH (above). Images: https://images.nasa.gov/details/PIA01882 · /PIA04023 · /PIA00396 · /PIA00568 · /PIA00573

---

## 7. Phoenix Lander — `phoenix`

**Overall assessment.** Its core facts (landing site, water ice, perchlorate, end date) match NASA, and the PIA22223 quotes are exact. Problems:
- **The ending's only "not stated" note is wrong now.** NASA's NSSDCA record gives the last-signal date and the power reason.
- One timeline entry misreads NASA ("Trench work concludes").
- The 2017 image shows discarded landing hardware that the story never mentions.

**Claims checked: 19 (21 status labels: 18 verified, 2 disputed, 1 not stated, 0 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | Touched the icy arctic plains and verified water ice below the surface (card, phx-5, f1, legacy, d1) | PH | "Besides verifying the existence of water-ice in the Martian subsurface"; "Vastitas Borealis, the arctic plains of Mars" | **VERIFIED** |
| 2 | A lander that stayed in one place, with a robotic arm, cameras, weather station and chemistry tools (intro, phx-1) | PH | "the first successful landing of a stationary soft-lander on Mars since Viking 2"; instruments list | **VERIFIED** |
| 3 | Sent to look at the ground in the arctic; it confirmed water ice (intro.whyCreated) | PH | Objective: "designed to uncover the mysteries of the Martian arctic, studying the history of water and searching for complex organic molecules"; key facts: "Search for evidence of past or present microbial life" | **VERIFIED** (vague; NASA's objective not used) |
| 4 | Originally planned for 90 days, about three months (intro.goal, phx-4, f1) | PH vs PHN | PH: "originally planned 90-day mission"; "three-month mission". PHN: "for at least 90 sols" | **VERIFIED** / **DISPUTED** (days vs sols; minor) |
| 5 | Green Valley in Vastitas Borealis (intro, timeline, phx-3, f1, quiz) | PH | "touched down safely… in the Green Valley of Vastitas Borealis" | **VERIFIED** |
| 6 | Robotic arm nearly 2.5 m; SSI, RAC, MECA, TEGA, MET (phx-1, f1) | PH, PHN | "the nearly 8-foot (2.5-meter) robotic arm"; instrument list | **VERIFIED** |
| 7 | Launched 4 Aug 2007 on a Delta II from Cape Canaveral AFS (timeline, phx-2, f1) | PH, PHN | PH quick facts; PHN "09:26:34 UT (5:26 a.m. EDT) on a Delta II 7925 from Cape Canaveral Air Force Station" | **VERIFIED** |
| 8 | Landed 25 May 2008 at 23:38:38 UT, at 68.22° N, 234.25° E (phx-3 Explore more) | PH vs PHN | PH: "23:38:38 UT"; "68.22 degrees north latitude, 234.25 degrees east longitude". PHN: "Touchdown occurred at 23:53:44 UT (7:53:44 p.m. EDT)"; site "nominally at 68.15 N, 125.9 W" | **VERIFIED** (PH) / **DISPUTED** (PHN time 15 min later; not recorded) |
| 9 | Extended to 30 Sep 2008 (phx-4 Explore more) | PH | "originally planned 90-day mission, which was extended to Sept. 30" | **VERIFIED** |
| 10 | Dug and tested the ground and watched the weather (phx-4) | PH | "the robotic arm scooped up dirt"; "started returning regular weather reports" | **VERIFIED** |
| 11 | Timeline 19 Jun: "**Trench work concludes**: water-ice confirmed below the surface"; phx-5 Explore more "Trench work concluded on 19 June" (EN+AR) | PH | "By June 19, mission scientists were able to conclude that clumps of bright material in the 'DodoGoldilocks' trench dug by the robotic arm were **probably** water ice – the material had vaporized four days after the scoop." | **NOT STATED** (misreading: the scientists concluded something; the trench work did not end; NASA says "probably") |
| 12 | Water from a soil sample analysed by TEGA; announced 31 July (phx-5, Explore more) | PH | "On July 31, NASA officially announced that there is water on Mars, based on a sample collected by the lander, and analyzed by… TEGA" | **VERIFIED** |
| 13 | Perchlorate found; announced 5 Aug 2008 (timeline, phx-5, d2) | PH | "On Aug. 5, the Phoenix team announced that they had found perchlorates" | **VERIFIED** |
| 14 | Legacy EN: "Phoenix… **announced** perchlorate"; AR uses the passive "وأُعلن" | PH | "Phoenix discovered traces of the chemical perchlorate"; "the Phoenix team announced" | **VERIFIED** (wording: the team announced; EN≠AR) |
| 15 | End of mission 2 Nov 2008 (timeline, phx-6, f1, ending) | PH, PHN | PH "End of Mission: Nov. 2, 2008"; PHN "its last signal was received on 02 November 2008" | **VERIFIED** |
| 16 | Three-month mission done Aug 2008; two more months; reduced sunlight; not designed for the arctic winter (phx-6, f2, Explore more, ending) | IMG:PIA22223, PHPJ | "In August 2008, Phoenix completed its three-month mission… The lander worked for two additional months before reduced sunlight caused energy to become insufficient to keep the lander functioning. The solar-powered robot was not designed to survive through the dark and cold conditions of a Martian arctic winter." | **VERIFIED** (quote exact) |
| 17 | By late 2017 dust had obscured much of the site; 21 Dec 2017 view (f3, ending) | IMG:PIA22223 | "By late 2017, dust had obscured much of what was visible two months after the landing"; "taken on Dec. 21, 2017" | **VERIFIED** |
| 18 | NotStated: "The date of the last message is not stated in the NASA pages we read." | PHN | "The Phoenix mission has officially ended, its last signal was received on 02 November 2008."; "As the summer ended the mission had less solar energy to operate and made its last transmission on 02 November 2008 before power was depleted." | **VERIFIED** (note out of date; must change) |
| 19 | Ending `currentLocation: planetary-surface`; unit resting "Green Valley… (landing site)" | IMG:PIA22223 | "The lander (top) appears darker, and is now covered by dust" (2017) | **VERIFIED** |

### Missing or disputed facts
- **Discarded hardware NASA describes in the image already used** (PIA22223): "The dark spot created by the heat shield impact (right) is brighter… The back shell and parachute (bottom) shows a darker parachute… the parachute has shifted in the wind, moving to the east." This is exactly the challenge's theme.
- **Firsts.** PH: "Mars Reconnaissance Orbiter's HiRISE camera clearly photographed Phoenix suspended from its parachute, the first time one spacecraft photographed another during a planetary landing." PH: "Phoenix landed farther north than any previous mission, at a latitude equivalent to that of northern Alaska."
- **Soil result.** PH: early results "suggested that the soil was alkaline, composed of salts and other chemicals such as perchlorate, sodium, magnesium, chloride, and potassium".
- **Cost.** PHN: "Cost of the mission is estimated at $417 million."
- **Touchdown time conflict** (row 8).

### Incorrect or misleading wording
- Timeline t-ice and phx-5 Explore more (EN+AR): "Scientists conclude the bright material in a trench is probably water ice".
- Legacy (EN): "announced perchlorate" → "found perchlorate" (it also matches the AR meaning better).
- intro.whyCreated (EN+AR): use NASA's objective ("to study the history of water in the Martian arctic and search for complex organic molecules").
- Timeline labels in ISO format.

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA11719 | "Phoenix Lander Self Portrait on Mars, Vertical Projection" | card, intro, badge, phx-1 | Matches. Credit NASA/JPL-Caltech/University of Arizona/Texas A&M University matches. |
| PIA22223 | HiRISE views 2008 and 2017; the 2017 figure has "a more even coating of pale dust" | phx-6 | Matches the 2017 figure. Credit NASA/JPL-Caltech/Univ. of Arizona matches. |
| bg-placeholder | — | phx-2 | Placeholder. |

### Recommended corrections
1. **Ending notStated (EN+AR):** replace with NASA's statement: "NASA's archive says Phoenix's last signal was received on 2 November 2008, as its power ran out" (PHN, registered as a new source). Add PHN to phx-6.
2. Timeline t-ice and phx-5 (EN+AR): fix the misreading (row 11).
3. phx-6 or the ending: add the heat shield, back shell and parachute from the PIA22223 description.
4. phx-3 Explore more: record the PHN touchdown-time difference, or drop the time.
5. Legacy: "found perchlorate".
6. Add the HiRISE-parachute "first" (PH) to phx-3 Explore more.
7. Unit: NSSDCA ID 2007-034A. Optionally update the source URL to the redirect target, `/mission/mars-phoenix/`.

### NASA source URLs used
PH, PHN, PHPJ (above). Images: https://images.nasa.gov/details/PIA11719 · /PIA22223

---

## 8. InSight Lander — `insight`

**Overall assessment.** Strong science content; the instrument, quake, crust and core figures match NASA exactly. Problems:
- **The ending is out of date in three places.** NASA's NSSDCA record gives the planned length, the last transmission and a presumed reason.
- One quake is called "the largest" when NASA says "the most recent".
- One citation is wrong.
- NASA has watched the lander from orbit through 2024, but the ending says its location is "not stated".

**Claims checked: 23 (24 status labels: 22 verified, 1 disputed, 1 not stated, 0 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | Listened to marsquakes and learned what is inside Mars (card, ins-1, legacy) | INS, INSH | Objective "Study Mars' interior structure"; "InSight made the first-ever detection of quakes on the Red Planet" | **VERIFIED** |
| 2 | SEIS, HP3, RISE (intro, ins-1, f1) | INSI | "three primary instruments, SEIS, HP3, and RISE" | **VERIFIED** |
| 3 | Sent to study the inside of Mars by listening for quakes and measuring heat (intro) | INSI, INSN | SEIS "took the 'pulse'"; HP3 "sought to measure the heat coming from Mars' interior" | **VERIFIED** |
| 4 | Robotic arm over 1.8 m placed the instruments (intro.goal) | INS | "InSight's robotic arm was over 5 feet 9 inches (1.8 meters) long. It lifted a seismometer and heat flow probe from the deck and placed them on the surface." | **VERIFIED** (not a goal; see corrections) |
| 5 | HP3 designed to dig almost 5 m (intro, ins-4) | INSI, INSN | "designed to burrow down to almost 16 feet (5 meters)"; "to a depth of about 5 meters" | **VERIFIED** |
| 6 | Elysium Planitia, about 4.5° N, 135.9° E (intro) | INS | "centered at about 4.5 degrees north latitude and 135.9 degrees east longitude" | **VERIFIED** |
| 7 | Launched 5 May 2018 on an Atlas V-401 from Vandenberg AFB, California (timeline, ins-2, f1) | INS, INSN | "Launched: May 5, 2018 (4:05 a.m. PT…)"; "Atlas V-401"; "Vandenberg Air Force Base, California" | **VERIFIED** |
| 8 | Landed 26 Nov 2018 at 11:52:59 a.m. PT (timeline, ins-3, f1) | INS, INSN | "Nov. 26, 2018, at 11:52:59 a.m. PT"; INSN "19:52:59 UT" | **VERIFIED** |
| 9 | The mole met different soil and could not reach the desired depth (ins-4, f1, quiz) | INSI | "encountered different soil properties than expected and was unable to reach the desired depth" | **VERIFIED** (cited to INS, which lacks it; INSN adds "it finally reached a depth of about 40 cm") |
| 10 | More than 1,300 seismic events; more than 50 clear enough to locate (ins-5, f1, d1) | INSH | "measured over 1,300 seismic events, and over 50 of them had signals that were clear enough… to derive information about their location" | **VERIFIED** |
| 11 | "NASA also says there were thousands of dust devils" (ins-5) | INSH | "Its sensors detected thousands of passing dust devils, but the spacecraft's cameras did not see any of them" | **VERIFIED** (wording: detected by sensors, never seen) |
| 12 | The six largest events all came after mid-2021 (Explore more) | INSH | "The instrument picked up all six of the largest events of the mission since the middle of 2021." | **VERIFIED** |
| 13 | "**The largest**, in May 2022, was about magnitude 5" (ins-5 Explore more, EN+AR) | INSH | "The **most recent** one, in May 2022, had an estimated magnitude of 5" | **NOT STATED** (NASA does not call it the largest) |
| 14 | Crust about 25–40 km; molten core about 1,800 km radius (ins-6, f1, d2) | INSH | "about 15 to 25 miles (25 to 40 kilometers) thick"; "Mars' core is molten and considerably larger than expected, about… 1,800 kilometers in radius" | **VERIFIED** |
| 15 | 2021 magnitude-4 quake from one of the biggest meteoroid impacts (ins-6, d3) | INSH | "detected a magnitude 4 marsquake in 2021 that scientists later determined to be caused by one of the biggest meteoroid impacts on Mars" | **VERIFIED** |
| 16 | Lithosphere about 500 km; crustal magnetic remnants 10 times stronger than expected (Explore more) | INSH | "The strong, cold outer shell, the lithosphere, is about 310 miles (500 kilometers) thick"; "The crustal magnetization remnants are 10 times stronger than were expected" | **VERIFIED** |
| 17 | Final selfie 24 Apr 2022, sol 1,211, much more dust (timeline, ins-7, f2) | IMG:PIA25287 | "took this final selfie on April 24, 2022, the 1,211th Martian day… covered with far more dust than it was in its first selfie" | **VERIFIED** |
| 18 | End of mission 15 Dec 2022 (timeline, ins-7, f1, ending) | INS vs INSN | INS: "End of Mission: Dec. 15, 2022". INSN: "The last transmission from InSight was received on 15 December 2022. After two failed attempts to communicate with the lander, the mission was declared over… on 21 December 2022." | **VERIFIED** / **DISPUTED** (15 Dec = last transmission; declared over 21 Dec; not recorded) |
| 19 | "after four years on Mars" (ins-7, ending) | INSH | "With four years on the Red Planet" | **VERIFIED** |
| 20 | "The reason is not stated" (ins-7, EN+AR; ending) | INSN, IMG:PIA25287 | INSN: declared over "presumably due to the inability of the solar cell batteries to maintain enough power to run the spacecraft". PIA25287: "Because InSight's dusty solar panels are producing less power" | **VERIFIED** (note out of date; NASA gives a presumed reason, which must keep "presumably") |
| 21 | NotStated: the reason, the planned duration and the date of the last message are not stated | INSN | "The primary mission was scheduled to last about two years, ending 24 November 2020"; "The mission was given an extension until December 2022"; last transmission 15 Dec 2022 | **VERIFIED** (all three are now stated; note must change) |
| 22 | Legacy: "a first look inside another planet" | INSI | "designed to take the first-ever in-depth look at the planet's 'inner space'" | **VERIFIED** |
| 23 | Unit resting "Elysium Planitia (landing site)" while the ending says `currentLocation: not-stated` | IMG:PIA26515 | "images taken by HiRISE between Dec. 11, 2018… and Oct. 23, 2024. In the images, InSight often appears as a bright, blue dot" | **VERIFIED** (NASA orbit images show the lander at its site; the ending can change) |

### Missing or disputed facts
- **Discarded hardware.** IMG:PIA22877: "display the locations of NASA's InSight lander, its heat shield and its parachute".
- **Links to other journeys:**
  - INS: "The lander was built on the proven design of NASA's Mars Phoenix lander".
  - INSH: the 2021 impact "had churned up a layer of water ice buried underground", which ties in with Phoenix's ice.
- **More facts not used:**
  - INSN: the mole "finally reached a depth of about 40 cm".
  - INSH: the quakes cluster at "Cerberus Fossae".
  - INSH: InSight carried "the first-ever magnetometer instrument to the Martian surface".
  - INS/INSN: the MarCO CubeSats flew with InSight.
- **End date conflict** (row 18).

### Incorrect or misleading wording
- ins-5 Explore more (EN+AR): "The largest, in May 2022" → "The most recent of the six largest, in May 2022, was about magnitude 5". In Arabic: "وكانت آخرها، في مايو 2022، بقوة تُقدَّر بنحو 5 درجات".
- ins-5: "NASA also says there were thousands of dust devils" → "Its sensors also detected thousands of passing dust devils".
- ins-7 and ending: "The reason is not stated" must go (see corrections).
- AR ins-2 and the timeline: "أطلس 5" drops "V-401", and basicText drops "California". These are minor.
- intro.goal: describes the arm, not a goal. INSN gives the objectives ("the size, composition and physical state… of the core; the thickness and structure of the crust…").

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA22876 | "InSight's First Selfie", 6 Dec 2018 (sol 10), 11 images | card, intro, badge, ins-1 | Matches. Credit NASA/JPL-Caltech matches. |
| PIA25287 | "InSight's Final Selfie", 24 Apr 2022, sol 1,211 | ins-7 | Matches. Credit matches. |
| bg-placeholder | — | ins-2 | Placeholder. |
| Candidates for the ending (records read, pictures not yet viewed) | PIA26515 "HiRISE Studies the Dust on InSight" (to 23 Oct 2024); PIA22877 "Locations of InSight, its Heat Shield and its Parachute" | — | Credit NASA/JPL-Caltech/University of Arizona. |

### Recommended corrections
1. **ins-7, ending final text, notStated (EN+AR):** "NASA's archive says the last transmission came on 15 December 2022, and that the mission was declared over on 21 December 2022, presumably because its dusty solar panels could no longer make enough power. The main mission had been planned for about two years, to November 2020, then extended." (INSN, registered as a new source.) Record 15/21 Dec as disputed.
2. ins-5 Explore more (EN+AR): "most recent", not "largest".
3. ins-4 f1: cite INSI. Optionally add "it reached only about 40 cm" (INSN).
4. Ending: `currentLocation` can be evidenced by PIA26515. Add the heat shield and parachute (PIA22877).
5. ins-5: "detected thousands of passing dust devils".
6. intro.goal: use the INSN objectives.
7. Unit: NSSDCA ID 2018-042A.

### NASA source URLs used
INS, INSI, INSH, INSN (above). Images: https://images.nasa.gov/details/PIA22876 · /PIA25287 · /PIA26515 · /PIA22877

---

## 9. Ingenuity Helicopter — `ingenuity`

**Overall assessment.** The most accurate Mars journey; every number matches NASA. Problems:
- One "not stated" note is out of date: NASA published the most likely cause of the final crash in Dec 2024.
- "Remains upright and in communication" is a January 2024 statement presented in the present tense.
- The "First Flight" chapter shows a picture from flight 13.
- The Arabic word for the rotor blades varies.

**Claims checked: 20 (21 status labels: 20 verified, 1 disputed, 0 not stated, 0 challenge-only).**

### Claim-by-claim

| # | Claim in the story (where) | Source | Evidence | Status |
|---|---|---|---|---|
| 1 | Planned for 5 flights, flew 72 (card, ing-5, quiz, legacy) | ING, INGEND | "no more than five test flights in 30 days… completed 72 flights" | **VERIFIED** |
| 2 | Carried to Mars under Perseverance (intro, timeline, ing-3) | ING, INGEND | "strapped beneath the Perseverance rover"; "attached to the belly of NASA's Perseverance rover" | **VERIFIED** |
| 3 | Built to demonstrate the first powered flight on Mars, as a technology demonstration (intro, ing-1) | ING | "Demonstrate the first powered flight on Mars"; "Designed to be a technology demonstration" | **VERIFIED** |
| 4 | Up to five test flights in 30 days (intro.goal, ing-1, f1) | INGEND | "up to five experimental test flights over 30 days" | **VERIFIED** |
| 5 | Jezero Crater (intro) | ING | "Landed Feb. 18, 2021, Jezero Crater, Mars" | **VERIFIED** |
| 6 | Launched 30 Jul 2020 from Cape Canaveral with Perseverance (timeline, ing-2, f1) | ING, M2020N | "Launch July 30, 2020, Cape Canaveral Air Force Station, Florida"; M2020N "30 July 2020 at 11:50 UT on an Atlas V-541" | **VERIFIED** |
| 7 | Landed 18 Feb 2021 in Jezero (timeline, ing-3, f1) | ING, INGEND | as quoted | **VERIFIED** |
| 8 | 19 Apr 2021: the first powered flight on another planet (timeline, ing-4, f1, d1) | ING | "its initial flight on April 19, 2021— the first powered flight on another planet" | **VERIFIED** |
| 9 | 128.8 flying minutes, about 17 km (10.5 vs 11 miles), highest 24 m (ing-5, f1, f2) | ING (text) vs ING (infographic alt) | Text: "128.8 flying minutes, covering 10.5 miles (17.0 kilometers), and reaching altitudes as high as 78.7 feet (24.0 meters)". Infographic alt text: "distance flown 11 miles/17 km… highest altitude 24 meters/79 ft" | **VERIFIED** / **DISPUTED** (recorded) |
| 10 | More than 33 times longer than planned (Explore more) | INGEND | "an extended mission that lasted for almost 1,000 Martian days, more than 33 times longer than originally planned" | **VERIFIED** |
| 11 | Top speed 10 m/s (22.4 mph) (Explore more) | ING (infographic alt) | "max ground speed 22.4 mph/10 m/s" | **VERIFIED** (only in the infographic's alt text) |
| 12 | 48 airfields; three emergency landings (Explore more) | INGEND | "operated from 48 different airfields, performed three emergency landings" | **VERIFIED** |
| 13 | Records: distance 8 Apr 2022, altitude 5 Oct 2023, speed 12 Oct 2023 (d2) | ING timeline | "April 8, 2022 Setting the Distance Record"; "October 5, 2023 Setting the Altitude Record"; "October 12, 2023 Setting the Groundspeed Record" | **VERIFIED** |
| 14 | Final flight 18 Jan 2024 (flight 72): rose to 12 m and hovered 4.5 s (timeline, ing-6, ending) | INGEND | "achieved a maximum altitude of 40 feet (12 meters) and hovered for 4.5 seconds" | **VERIFIED** |
| 15 | Contact lost about 1 m above the surface, regained the next day; images days later showed rotor damage (ing-6, Explore more, ending) | INGEND | "about 3 feet (1 meter) above the surface, Ingenuity lost contact… The following day, communications were reestablished… Imagery revealing damage to the rotor blade arrived several days later." | **VERIFIED** |
| 16 | Mission completed 25 Jan 2024 (timeline, ing-6, ending) | INGEND | release dated Jan 25, 2024: "has ended its mission at the Red Planet" | **VERIFIED** |
| 17 | "remains upright and in communication… no longer capable of flight" (ing-6 Explore more, f1; ending "remains upright"; unit "per NASA, January 2024") | INGEND, IMG:PIA26319 | INGEND (25 Jan 2024): "the helicopter remains upright and in communication with ground controllers". PIA26319: the team's "final shift" on 16 Apr 2024 reviewed "a transmission… that confirmed the operation of a software patch allowing Ingenuity to act as a stationary testbed" | **VERIFIED** as of 2024 (the stage and f1 use the present tense with no date; nothing later was found) |
| 18 | NotStated: the cause of the dropout "was still being investigated when NASA wrote its release" | IMG:PIA26482 (11 Dec 2024) | "the most likely scenario… Lack of suitable features on the planet's surface for the helicopter's navigation system to track resulted in high horizontal velocities at the time the helicopter touched down. This caused a hard impact on a sloping sand ripple… snapping all four of them [the blades] off… resulted in loss of communications." | **VERIFIED** (note out of date; NASA has since published a most-likely scenario) |
| 19 | Paved the way for future aerial explorers at Mars and, potentially, other worlds (ing-7, f1, legacy) | ING | "Paved the way for future aerial explorers at Mars and, potentially, other space destinations." | **VERIFIED** |
| 20 | Ending `currentLocation: planetary-surface` | IMG:PIA26236 | "NASA's Perseverance Mars rover captured this mosaic showing the Ingenuity Mars Helicopter at its final airfield on Feb. 4, 2024… nicknamed… 'Valinor Hills'" | **VERIFIED** (new evidence; it supersedes INGEND's "too far away to attempt to image the helicopter") |

### Missing or disputed facts
- **NASA's most likely crash scenario** (row 18). It is explained in plain words that children can follow.
- **The final resting spot.** Perseverance photographed Ingenuity at "Valinor Hills" from about 450 m away (PIA26236).
- **Flight history.** INGEND: Ingenuity "carries onboard a swatch from the original Wright Flyer", a strong link to the first aeroplane.
- **NSSDCA record.** M2020N has an Ingenuity section ("a mass of roughly 1.8 kg… twin counter-rotating blades which will rotate at almost 3000 rpm"). It is the NSSDCA record R2 could not find (R2 tried 2020-044A).

### Incorrect or misleading wording
- ing-6 Explore more and f1 (EN+AR): date the statement: "In January 2024 NASA said it remained upright and in communication…". The unit field already does this.
- ing-5 f2 (EN+AR): "alt text says 11 miles" is web jargon for children. Use "a NASA infographic says 11 miles".
- AR ing-6 and the ending: "ضرراً في الريش" ("damage to the feathers") → "ضرراً في شفرات المروحة". The asset alt text already uses "شفرتا مروحة".
- AR: "Perseverance" is spelled "برسيفيرنس" here, but "بيرسيفيرنس" and "برسفيرنس" elsewhere.

### Image and credit review

| Image | NASA record says | Used where | Verdict |
|---|---|---|---|
| PIA23882 | "The flight model of NASA's Ingenuity Mars Helicopter" | card, intro, badge, ing-1 | Matches. The alt text correctly says it was not taken on Mars. Credit NASA/JPL-Caltech matches. |
| PIA24810 | "Faillefeu", taken by Ingenuity on its 13th flight, 4 Sep 2021, from 8 m | ing-4 "First Flight" and ing-5 | The alt text matches, but the picture is from flight 13 and the chapter is about flight 1. Candidates for ing-4 (records read, pictures not yet viewed): PIA24586 "Perseverance's Navcam View of Ingenuity's First Flight" (NASA/JPL-Caltech); PIA24550 "Ingenuity's First Flight Recorded by Mastcam-Z" (NASA/JPL-Caltech/ASU/MSSS). |
| bg-placeholder | — | ing-2 | Placeholder. |
| Candidates for the ending | PIA26236 (final airfield); PIA26482 (graphic of the hard landing) | — | Credits NASA/JPL-Caltech/ASU/MSSS and NASA/JPL-Caltech. |

### Recommended corrections
1. **Ending notStated (EN+AR):** replace it with NASA's most likely scenario (PIA26482, registered as a source), worded as "NASA's most likely explanation".
2. ing-6 and f1 (EN+AR): date the "remains upright" statement.
3. Ending: add "Perseverance photographed it at its final airfield, nicknamed Valinor Hills, on 4 February 2024" (PIA26236).
4. ing-4: replace the gallery picture with a first-flight picture after viewing it (PIA24586 or PIA24550). Keep PIA24810 in ing-5.
5. f2: change the "alt text" wording.
6. AR: "شفرات المروحة"; harmonize the spelling of "Perseverance".
7. Unit: register M2020N (2020-052A) as Ingenuity's NSSDCA record.

### NASA source URLs used
ING, INGEND, M2020N (above). Images: https://images.nasa.gov/details/PIA23882 · /PIA24810 · /PIA26482 · /PIA26236 · /PIA26319 · /PIA24586 · /PIA24550

---

## 10. Prioritized list of corrections (for your approval; nothing has been applied)

**Critical — wrong, contradicted or out-of-date statements**

| # | Mission and place | Problem | Fix |
|---|---|---|---|
| C1 | `phoenix` ending notStated (EN+AR) | Says the last-message date is not stated; PHN gives 2 Nov 2008 and "before power was depleted" | Use PHN's wording; add PHN as a source |
| C2 | `insight` ins-7 text, ending final text and notStated (EN+AR) | "The reason is not stated", and planned duration and last-message date "not stated"; INSN states all three | Use INSN ("presumably…"); record 15/21 Dec as disputed |
| C3 | `opportunity` opp-8 (EN+AR) | "Opportunity was not abandoned or broken" has no NASA source | Replace with NASA's "final resting spot" sentence |
| C4 | `phoenix` timeline t-ice and phx-5 Explore more (EN+AR) | "Trench work concludes/concluded" misreads NASA; NASA says scientists concluded it was "probably water ice" | Reword |
| C5 | `insight` ins-5 Explore more (EN+AR) | The May 2022 quake is called "the largest"; NASA says "the most recent" of the six largest | Reword |
| C6 | `sojourner` sojourner-1 Explore more (EN+AR) | The rover's "tools" include the lander's camera and weather station | Separate the rover and lander instruments (PFN, PFL) |

**High — out-of-date notes, unrecorded conflicts, wrong citations, inferences**

| # | Mission and place | Problem | Fix |
|---|---|---|---|
| H1 | `ingenuity` ending notStated | "Cause still being investigated"; NASA published a most-likely scenario (PIA26482) | Use NASA's scenario |
| H2 | `spirit` ending notStated and final text | "No name for the soft patch"; NASA calls it Troy. NASA calls Home Plate the "final resting place" | Update both (PIA13730, MERH) |
| H3 | `opportunity` opp-3 title | "Seven Months in Space" is English-only; NASA says six (OPP) and seven (OPPEND) months | Neutral title in EN and AR; record the conflict |
| H4 | `opportunity` opp-2 and timeline | 7 July is the US date; UT is 8 July (OPPN) | Show both, as for the landing |
| H5 | Citations: `viking-1` (f1 → PIA00381; launch → V1; 16 Nov → V2), `viking-2` (6,460 km → V2), `insight` (mole → INSI), `opportunity` (Pacific date → OPP), `spirit` ("2010" → MER) | Facts cite pages that do not contain them | Re-point |
| H6 | `sojourner` sojourner-4, Explore more, ending | "(Pacific time)" and "which is the same event" are our inferences; "Sojourner's final data transmission" was the mission's; "Sojourner stayed on Mars" is not sourced | Reword |
| H7 | `ingenuity` ing-6 Explore more and f1 | January 2024 status given in the present tense | Date it |
| H8 | Where-are-they-now evidence: `insight` (`currentLocation: not-stated` despite PIA26515), `phoenix` (PIA22223 hardware), `opportunity` (PIA22549, PIA21494), `ingenuity` (PIA26236), `spirit` (MERH) | The challenge's central question has NASA answers the story does not use; several describe discarded equipment (heat shields, parachutes, landing platform) | Add the sourced sentences; update the InSight ending location |

**Medium — omissions and imprecise wording**

| # | Mission and place | Problem | Fix |
|---|---|---|---|
| M1 | Unrecorded conflicts: Phoenix touchdown time, InSight 15/21 Dec, Viking 2 touchdown time, Pathfinder airbag/speed/bounces, Sojourner height, Phoenix 90 days/sols; Viking 1 coordinates note understated | Not shown to the reader | Record as DISPUTED, or drop the precise figure |
| M2 | intro "goal" line in `sojourner`, `spirit`, `viking-1`, `viking-2`, `phoenix`, `insight` | Planned lifetime or "not stated" instead of a goal | Use NASA's stated objectives |
| M3 | `viking-2` card, intro and badge | No mission photo (generic globe; the card shows only the drawing) | Choose from PIA00396 / PIA00568 / PIA00573 / PIA01882 after a caption check |
| M4 | `ingenuity` ing-4 gallery | Flight-13 picture in the First Flight chapter | PIA24586 or PIA24550 after viewing |
| M5 | Omissions with child value: Viking 1 "first truly successful landing" and 6 y 116 d record; Opportunity Challenger Memorial Station and 26+ bounces; Phoenix "first spacecraft to photograph another during a landing"; InSight mole about 40 cm and Phoenix design; Spirit 23 April 2009 and the front wheel; Viking 2 UV-reactant explanation and site reason | Missing | Add, sourced |
| M6 | `spirit` "bedrock altered by water"; `phoenix` legacy "announced"; `insight` "thousands of dust devils"; `viking-2` legacy mapping | Slight overstatement or wrong agent | Reword |

**Low — polish**

| # | Mission and place | Problem |
|---|---|---|
| L1 | Arabic terminology: lander "مركبة الهبوط" (Sojourner, Vikings) vs "المركبة الهابطة" (Phoenix, InSight, alt texts); Perseverance "برسيفيرنس" / "بيرسيفيرنس" / "برسفيرنس"; rotor blades "الريش" vs "شفرتا مروحة"; tatweel in "ميريديانــي" (3×); straight quotes '…' in 8 Arabic fields vs «…» elsewhere; Spirit "من الأرض نفسها"; "أطلس 5" without V-401; Viking "-86 درجة" without "مئوية" | Harmonize, as was done for the Moon |
| L2 | ISO timeline labels in `opportunity`, `phoenix`, `insight`, `ingenuity` | Inconsistent display (handle together with the open Arabic-date UI item) |
| L3 | NSSDCA IDs missing on units (MESURPR, 1996-068A, 2007-034A, 2018-042A, 2020-052A); `opportunity` unit has no parentFlight; Phoenix source URL redirects | Add |
| L4 | Kid-facing wording: "alt text" (Ingenuity f2); Opportunity "last message" → "last signal"; "Hematite Site" is the region's nickname | Reword |

**Research files to correct later (not edited now):**
- R3 §5: the rows "Phoenix and InSight: reason and last-contact date" and "NSSDCA records for Phoenix, InSight, Ingenuity" are now answerable (PHN, INSN, M2020N).
- R2: the Ingenuity line "NSSDCA 2020-044A returned a database error" (the record is 2020-052A).
- R2 Spirit section: add Troy and Home Plate as the final resting place.
- R2 Opportunity section: add the OPPEND six/seven-month conflict.

**Unresolved for a human (cannot be settled from the pages read):**
- Whether NASA has located Sojourner or the Viking 1 lander from orbit. No record was found.
- What the PIA01882 Viking 2 orbit image caption says. The library record has a title only, so read it on Photojournal and look at the picture.
- Whether NASA said anything about Ingenuity after the team's final shift on 16 April 2024.
- Which cruise length the Opportunity chapter should use (editorial choice between two NASA pages).
- The challenge page wording, which cannot be fetched from this computer (certificate issue; URL unchanged).
- Each candidate image above must be looked at before use. Only the records were read.

---

**Stopped here as requested.** No Mars mission file was modified, Deep Space has not been started, and the frozen Moon dataset is unchanged. Please review, tell me which corrections to apply (all, by priority, or a selection), and I will apply only those.
