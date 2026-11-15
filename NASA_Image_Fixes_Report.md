# Image Fixes Report

Date: 2026-11-15 · Follows [NASA_Browser_QA_Report.md](NASA_Browser_QA_Report.md) items M7–M10 · Screenshots: [qa-screenshots/image-fixes/](qa-screenshots/image-fixes/)

**Method.** Every decision below was checked against the NASA Image and Video Library record for the image (the caption NASA published, via `images-api.nasa.gov`, which carries the same text as the `images.nasa.gov/details/<ID>` page), and against the picture itself, which I downloaded and looked at. Nothing is based on a guess about what an image shows. Mission facts, timelines, chapter order, chapter text and the journey state machine were **not** changed.

## 1. Summary

| | |
|---|---|
| Image assignments changed | 3 chapters (2 Sojourner, 1 Spirit) |
| Images replaced | 1 (Spirit, PIA07410 → PIA17760) |
| Alt texts rewritten (English and Arabic) | 22 images |
| Image metadata corrected | 1 (Kepler PIA14446: "reconstruction" → "real") |
| Credits and source links changed | none (one new asset has its own credit and link) |
| Remaining generic or empty alt text | none |
| Needs your decision (not changed) | 5 items, section 5 — **one is important (Phoenix)** |

## 2. Changed images, with source and chapter

| Mission · chapter | Before | After | NASA record and why |
|---|---|---|---|
| **Sojourner · ch.4 "First Rover Drive"** (`sojourner-4`) | PIA00621 | **PIA00623** "Rover Touchdown on Martian Surface" · NASA/JPL · [details](https://images.nasa.gov/details/PIA00623) | NASA's caption: it "depicts the rover Sojourner's position after driving onto the Martian surface". The chapter text says the rover rolled off the lander, so this fits. Verified by eye: the rover's wheels are on the surface. |
| **Sojourner · ch.1 "Meet Sojourner"** (`sojourner-1`) | PIA00623 | **PIA00621** "Color Mosaic of Rover & Terrain" · NASA/JPL · [details](https://images.nasa.gov/details/PIA00621) | The swap you asked for. NASA's caption: the rover "is latched to the petal, and has not yet been deployed", imaged on 4 July (sol 1). Good for "meet the rover"; **not** a driving picture, which is why it left ch.4. |
| **Spirit · ch.4 "Far Beyond the Plan"** (`spirit-4`) | PIA07410 (distorted 360° view) | **PIA17760** "NASA Mars Rover Spirit View Southward from Husband Hill" · NASA/JPL-Caltech/Cornell Univ. · [details](https://images.nasa.gov/details/PIA17760) | NASA's caption: a section of a panorama Spirit took in October 2005 from the top of Husband Hill, looking south. Verified by eye: an ordinary landscape. New asset id `mars-a-img-spirit-husband-hill`, loads at `~medium.jpg`. |

Cards and intro pages are unchanged: Sojourner's card and intro still use PIA00623, Spirit's still use PIA05040.

## 3. Investigations

### Sojourner
NASA's captions confirm the QA finding. PIA00621 shows the rover still latched to the lander before the ramps were deployed (it stays on "Bouncing to a Stop", ch.3, where it fits). PIA00623 is the picture of the rover after it drove onto the surface, so it now sits on the driving chapter.
Side effect: PIA00621 now appears on both ch.1 and ch.3 (a repeat). I left it, as you asked for a plain swap; a different ch.1 image or none would also work.

### Spirit, PIA05040 ("Spirit Stretches Out"), the "title does not match" image
**Finding: it does match, and my earlier suspicion (QA item M9) was wrong.** NASA's caption: "This frame from an animation flips back and forth between images taken before and after deployment of the Mars Exploration Rover Spirit's bogie… These images were taken by Spirit's hazard avoidance camera." The picture is that hazard-camera frame (the rover's deck with a JPL plate and airbag fabric, seen under a wide-angle horizon). I kept the image and gave it an accurate alt text that says it is one frame of a before-and-after animation.

### Spirit, PIA07410 (the distorted view)
NASA's caption: a 360-degree navigation-camera view from Cumberland Ridge on sol 409 "presented in a vertical projection with geometric and brightness seam correction". So the smear is the real image, not a broken file. It is accurate but not child-friendly, so it was replaced. I looked at about a dozen Spirit candidates in the NASA library; PIA17760 was chosen because it is a clean landscape, credited, and available at a normal size. The self-portrait options (PIA16442/PIA16443) are also polar projections, and the 3-D stereo panoramas need 3-D glasses, so I avoided them.

## 4. Alt text (English and Arabic)

Every new description uses only (a) wording from NASA's caption for that image, or (b) what is plainly visible in the picture, and says which when it matters. The Arabic text carries the same information as the English; it lives next to the English in the `altText` field of each asset in `src/data/assets/*.json`.

| Asset · NASA ID | Alt text (English) | Basis |
|---|---|---|
| dawn-img-ceres-1 · PIA21906 | Black-and-white view of the whole dwarf planet Ceres covered in craters, with a cluster of very bright spots inside Occator Crater near the middle; made from Dawn pictures taken about 385 km (240 miles) above the surface | NASA caption + seen |
| dawn-img-ceres-2 · PIA19181 | A small, pale disc of Ceres against black space, photographed by Dawn on 4 Feb 2015 from about 145,000 km (90,000 miles), about a month before arrival | NASA caption + seen |
| near-img-eros-1 · PIA02464 | Black-and-white close-up of the cratered surface of Eros; NASA titles it the first image NEAR took from orbit around Eros | NASA title + seen (caption is title-only) |
| near-img-eros-2 · PIA03148 | Close-up of Eros's surface: a large boulder at the top, many small rocks on smooth ground, the bottom blank and striped; NASA titles it the last, closest image of Eros | NASA title + seen |
| kepler-img-pia14446 · PIA14446 | Night photo of a rocket lifting off in bright flame, with "Kepler" and "Search for Earth-size planets" written on the rocket and tower; NASA says Kepler rocketed into the night sky above Cape Canaveral on 6 March 2009 | seen + NASA caption |
| dp-img-p10-9341 · ARC-1973-AC73-9341 | Composite of Pioneer 10 pictures of Jupiter in two rows: nearly full discs growing in size, and thin crescents; NASA's note says the discs came on approach and the crescent after it passed | NASA caption + seen |
| dp-img-p10-9253 · ARC-1973-AC73-9253 | Pioneer 10's picture of Jupiter with striped cloud bands, a small dark spot and one moon at the upper right, from about 2.58 million km | NASA caption + seen |
| dp-img-p11-painting · ARC-2000-80-HC-251 | A painting of Pioneer 11 in front of Saturn and its rings, before its Saturn encounter; an artwork, not a photograph | NASA caption + seen |
| mars-a-img-sojourner-1 · PIA00623 | Black-and-white picture from the Pathfinder lander's camera of Sojourner on the Martian surface after it drove off the lander, part of a ramp at lower left | NASA caption + seen |
| mars-a-img-sojourner-2 · PIA00621 | Colour picture from the lander's camera on 4 July 1997 (first Martian day): Sojourner still latched to the lander, ramps not yet unfolded, pale fabric from the deflated airbags around it | NASA caption + seen |
| mars-a-img-spirit-1 · PIA05040 | Black-and-white hazard-camera view across the rover's deck toward the horizon; one frame of a before-and-after animation of the rover extending its wheelbase | NASA caption + seen |
| mars-a-img-spirit-husband-hill · PIA17760 | View south from the top of Husband Hill: dark rocks and sandy ground in front, low hills beyond, hazy orange-tan sky; a section of a panorama taken in October 2005 | NASA caption + seen |
| mars-a-img-viking1-first · PIA00381 | Black-and-white photo of rocks and fine sand or dust with part of the lander at lower right; NASA calls it the first photograph ever taken on the surface of Mars, minutes after Viking 1 landed on 20 July 1976 | NASA caption + seen |
| mars-a-img-viking1-pano · PIA00382 | Two black-and-white strips from Viking 1's first panoramic view: rocky ground to the horizon, parts of the lander in front | NASA caption + seen |
| phoenix-img-selfie · PIA11719 | Phoenix seen from directly above on reddish ground with its two round solar panels open; NASA calls it a self-portrait in vertical projection; a black circle marks the middle | NASA title + seen |
| phoenix-img-decade-later · PIA22223 | Orbit view of the landing site taken 20 July 2008 by HiRISE on Mars Reconnaissance Orbiter; NASA published it with a second view from 21 Dec 2017 covered in pale dust; **only the 2008 view is shown here** | NASA caption + seen (see 5a) |
| insight-img-first-selfie · PIA22876 | InSight's first full selfie, a mosaic of 11 pictures taken 6 Dec 2018 (10th Martian day), showing the solar panels and the deck with instruments, weather booms and an antenna | NASA caption |
| insight-img-final-selfie · PIA25287 | InSight's final selfie, 24 April 2022 (1,211th Martian day); NASA says the lander is covered with far more dust than in its first selfie | NASA caption |
| ingenuity-img-a · PIA23882 | Photo of the flight model of the Ingenuity helicopter on a light-blue surface, two long black rotor blades, a solar panel on top, four thin legs; not taken on Mars | NASA caption + seen |
| ingenuity-img-b · PIA24810 | Picture of a mound the Perseverance team calls "Faillefeu", taken by Ingenuity on its 13th flight, 4 Sept 2021, from about 8 m (26 ft) | NASA caption |
| moon-lm-lrv-img-as11-telecast · S69-39563 | Black-and-white frame from the Apollo 11 surface TV camera: Armstrong (left) and Aldrin by the ladder of the Lunar Module Eagle | NASA caption |

Already accurate and left as they were: the Opportunity images, the Surveyor 3/Apollo 12 images, the other Apollo images and the three core scene images. The Kepler scale-model alt text was already correct.

I did not add anything I could not establish: for example, for the two InSight and the Ingenuity "Faillefeu" images I used NASA's caption only (I did not describe their appearance), and the Pioneer 10 composite does not say which row is which beyond what NASA's note says.

## 5. Things that need your decision (not changed, as instructed)

**5a. Phoenix chapter 6 ("End of the Mission") — important, two linked findings**
1. **The picture does not show what the chapter says.** The chapter text (English and Arabic) says "A 2018 NASA image shows dust on the lander nearly ten years later". NASA's PIA22223 is one of **two** images; the file in the library, in every size (small, original), is the **2008** one (labelled `PSP_009290_2485`, taken 20 July 2008, before dust covered the site). The dusty 2017 view is not in that file. Alt text now says exactly this. Options: change the chapter wording, find the 2017 image on NASA's page for the release, or use a different picture.
2. **NASA's own caption explains why Phoenix ended**, which closes the gap we had recorded ("reason NOT STATED", R3 section 2; the chapter still says NASA's pages do not say why). Quote from the PIA22223 record (NASA/JPL, 20 Feb 2018): *"In August 2008, Phoenix completed its three-month mission studying Martian ice, soil and atmosphere. The lander worked for two additional months before reduced sunlight caused energy to become insufficient to keep the lander functioning. The solar-powered robot was not designed to survive through the dark and cold conditions of a Martian arctic winter."* This is a NASA statement and could replace the "not stated" wording during the fact-check, after someone checks the release page. I have **not** edited the chapter or `ending.notStated`.

**5b. Kepler launch photo sits on "Meet Kepler".** PIA14446 turned out to be a real launch photograph (the Delta rocket at night), not a telescope picture and not an illustration, so it was mislabelled "reconstruction" with an alt text that called it the telescope. I corrected the label to `real` and the alt text. It is still used for the Kepler card, intro and chapter 1, but chapter 2 is the launch chapter (it currently shows the scale-model photo). Suggest moving it to chapter 2 and choosing a telescope image for the card and chapter 1.

**5c. Sojourner PIA00621 repeats on chapters 1 and 3** (section 3).

**5d. Pioneer 11 painting credit.** NASA's record says "Pioneer 11 pre-encounter with Saturn as painted by **Wilson Hurley**". The earlier author left the painter out because our research files did not have him. The credit still reads "NASA Ames Research Center" (unchanged, as instructed). Consider adding the painter after you confirm.

**5e. Apollo 11 caption wording.** NASA's library caption for KSC-as11-40-5927 uses the labels "Passive Seismic Experiments Package" and "Laser-Ranging Retro-Reflector" (our R1 note said the NSSDCA page does not). Both NASA pages exist; relevant when the Apollo 11 text is fact-checked.

## 6. Other changes made in the process

- **Image display (`src/components/AssetImage.tsx`).** The Kepler launch photo is tall and was cropped to a thin middle band by the viewer, which defeated the fix. Pictures that are square or tall (width less than 1.3 × height) are now shown whole on a black background; wide pictures still fill the frame. This also stops square images (Phoenix, Spirit's deck view, Ceres) being cut. It touches only this image component.
- **Disclosure of a slip.** While replacing the Spirit asset, my script's block edit also removed the two Viking 1 assets that follow it in `mars-a.json`. The validator caught it immediately (4 errors). I restored both with the **identical** path, NASA ID, credit and source link (recovered from the previous production build output) and the new alt text. The final file contains all six assets; the validator and the browser check confirm nothing else was lost.

## 7. Validation (final run, after all changes)

| Check | Result |
|---|---|
| Data validation | OK: 21 missions, 37 assets, 51 sources |
| Type-check (`tsc --noEmit`) | pass |
| Automated tests | 23 of 23 pass |
| Production build | succeeds |
| NASA image URLs (HTTP) | all 37 return an image |
| Browser check, every chapter and card in English and Arabic | 322 image loads, **0 failed**; no generic or empty alt text left |
| Credits and source links | unchanged on every existing asset; each touched asset still has a credit, source link and a source URL containing its NASA ID |

## 8. Files changed

| File | Change |
|---|---|
| `src/data/missions/sojourner.json` | Two image assignments swapped (ch.1 and ch.4); nothing else |
| `src/data/missions/spirit.json` | One image id (ch.4); nothing else |
| `src/data/assets/mars-a.json` | Spirit PIA07410 asset replaced by PIA17760; alt text for Sojourner, Spirit and Viking assets; Viking assets restored |
| `src/data/assets/mars-b.json` | Alt text: Phoenix (2), InSight (2), Ingenuity (2) |
| `src/data/assets/deep-a.json` | Alt text: Dawn (2), NEAR (2), Kepler photo; Kepler photo marked `real` |
| `src/data/assets/deep-pioneer.json` | Alt text: Pioneer 10 (2), Pioneer 11 painting |
| `src/data/assets/moon-lm-lrv.json` | Alt text: Apollo 11 telecast frame |
| `src/components/AssetImage.tsx` | Show square and tall pictures whole (section 6) |

Not touched: mission facts, timelines, chapter order, chapter text, `journeyMachine.ts` and its tests, all other UI components.

## 9. Screenshots

| File | Shows |
|---|---|
| 01 | Sojourner ch.1 "Meet Sojourner" with PIA00621 |
| 02 | Sojourner ch.3 "Bouncing to a Stop" with PIA00621 (unchanged) |
| 03 | Sojourner ch.4 "First Rover Drive" with PIA00623 |
| 04 | Spirit ch.4 with the new Husband Hill landscape |
| 05 | Spirit ch.1 with PIA05040 (kept) |
| 06 | Phoenix ch.6 in Arabic: shows the 2008 frame (finding 5a) |
| 07 | Kepler ch.1: launch photo now shown whole (finding 5b) |
| 08 | Deep Space mission cards |

Stopped here as requested: the 21-mission human fact-check has not been started.
