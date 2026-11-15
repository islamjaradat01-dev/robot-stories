# Final Image Corrections Report

Date: 2026-11-15 · Follows [NASA_Image_Fixes_Report.md](NASA_Image_Fixes_Report.md) · Screenshots: [qa-screenshots/final-corrections/](qa-screenshots/final-corrections/)

Only the three approved corrections were made (Phoenix, Kepler, Pioneer 11). No unrelated mission, fact, timeline, chapter order or the journey state machine was touched. Everything below was checked against NASA's own pages and, for images, by looking at the picture.

## 0. One point to confirm: the Phoenix image is not a solar-panel picture

The instruction described the Phoenix replacement as a "2017 dusty **solar-panel** image". The verified 2017 image is **not** a close-up of solar panels. It is NASA's **Figure 2** for image PIA22223: an orbit view of the whole landing site taken by the HiRISE camera on Mars Reconnaissance Orbiter on **21 December 2017**, in which the lander and its landing hardware are only tiny marks. NASA describes it as "a more even coating of pale dust throughout the area". I searched the NASA Image Library, the Photojournal and JPL pages and found **no NASA photograph of dusty Phoenix solar panels**, so none was used. The chapter text was written to describe what the picture really shows and does not claim that solar panels or the lander are visible under dust.

## 1. Phoenix

### Image

| | Before | After |
|---|---|---|
| Chapter | Phoenix ch.6 "End of the Mission" (`phx-6`) | same chapter |
| Picture | 2008 frame (HiRISE, 20 July 2008, label `PSP_009290_2485`) | **2017 frame (HiRISE, 21 December 2017, label `ESP_053451_2485`)** |
| File | `images-assets.nasa.gov/image/PIA22223/PIA22223~small.jpg` | `assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/p/i/a/2/PIA22223-Fig2_HiRISE-PHX-2017.jpg` |
| Credit | NASA/JPL-Caltech/Univ. of Arizona | **unchanged** (matches the Photojournal page: "Credits: NASA/JPL-Caltech/Univ. of Arizona") |
| `sourceUrl` | https://images.nasa.gov/details/PIA22223 | **unchanged** |
| NASA ID | PIA22223 | unchanged |

**Why this file.** The NASA Image Library holds only one file for PIA22223, and it is Figure 1 (2008). The 2017 Figure 2 is published on NASA's Photojournal page for the same image: https://science.nasa.gov/photojournal/nasas-phoenix-lander-on-mars-nearly-a-decade-later/ (the old `photojournal.jpl.nasa.gov/catalog/PIA22223` link redirects there). Verified: the file returns an image (JPEG, 1286 × 1269), and I looked at it: a uniform pale-dust ground with the label "ESP_053451_2485 Phoenix lander, heat shield, backshell + parachute". NASA's caption says it was taken "on Dec. 21, 2017" and is "Fig. 2, an excerpt of HiRISE observation ESP_053451_2485".

New alt text (English): "Orbit view of the Phoenix landing site on far-northern Mars, taken on 21 December 2017 by the HiRISE camera on Mars Reconnaissance Orbiter. A more even coating of pale dust covers the ground; the lander and its landing hardware are only tiny marks in the picture." The Arabic text carries the same information (in `src/data/assets/mars-b.json`).

### Chapter text (English and Arabic updated together)

Source for every statement below: NASA's description of image PIA22223 (JPL, 20 February 2018), available on both the NASA Image Library record and the Photojournal page. The exact NASA sentences are:

> "In August 2008, Phoenix completed its three-month mission studying Martian ice, soil and atmosphere. The lander worked for two additional months before reduced sunlight caused energy to become insufficient to keep the lander functioning. The solar-powered robot was not designed to survive through the dark and cold conditions of a Martian arctic winter."
> "By late 2017, dust had obscured much of what was visible two months after the landing."
> "…The one with a more even coating of pale dust throughout the area was taken on Dec. 21, 2017. It is Fig. 2…"

| Where | Before | After |
|---|---|---|
| `phx-6` main text (EN) | "NASA lists 2 November 2008 as the end of the mission. NASA's pages do not say why it ended. A 2018 NASA image shows dust on the lander nearly ten years later." | "NASA lists 2 November 2008 as the end of the mission. NASA's image description says reduced sunlight left Phoenix with too little energy to keep working, and that it was not designed to survive a Martian arctic winter." |
| `phx-6` main text (AR) | "…ولا تذكر صفحاتها سبب ذلك. وتُظهر صورة لناسا من 2018 غباراً على المركبة…" | "تذكر ناسا أن المهمة انتهت في 2 نوفمبر 2008. ويقول وصف الصورة لدى ناسا إن انخفاض ضوء الشمس جعل الطاقة غير كافية لإبقاء فينيكس تعمل، وإنها لم تُصمَّم لتنجو من شتاء المريخ القطبي." |
| `phx-6` "Explore more" (new, EN/AR) | none | "NASA's image description says Phoenix completed its three-month mission in August 2008 and then worked for two additional months." |
| `phx-6` fact f2 (EN/AR) | "NASA's 2018 image description: HiRISE views of the landing site from 2008 and 2017 show dust cover on the lander." (an over-statement; removed) | The NASA sentences above, quoted, with a note "Quoted from NASA's description of image PIA22223" (Arabic: "…الترجمة العربية من إعدادنا"). Source `phoenix-src-b`. |
| `phx-6` fact f3 (new, EN/AR) | none | "NASA's image description: by late 2017, dust had obscured much of what was visible two months after the landing. The picture shown is the 21 December 2017 view, with a more even coating of pale dust throughout the area." Source `phoenix-src-c`. |
| `ending.finalChapterText` (EN/AR) | "…The reason is not stated in the NASA pages we read. A 2018 NASA image description says views… show dust cover on the lander." | States the reason as NASA's description says it (three-month mission completed in August 2008, two additional months, reduced sunlight, not designed to survive the arctic winter) and the 21 December 2017 dust view. |
| `ending.notStated` (EN/AR) | "The reason the mission ended and the date of the last message are not stated…" | "The date of the last message is not stated in the NASA pages we read." (the reason is now stated, so it is no longer listed) |
| New source `phoenix-src-c` | none | "NASA's Phoenix Lander on Mars, Nearly a Decade Later (PIA22223, figures 1 and 2)", NASA Science Photojournal, the URL above. Added to the chapter's source list; `phoenix-src-a` and `phoenix-src-b` are kept. |

Not changed: `endCause` (`stopped-operating`), `endingBasis` (`nasa-page`), the 2 November 2008 date, timeline and other chapters. The attribution to "NASA's image description" appears in the chapter text, the fact cards and the source list. I also added a dated update line to [NASA_R3_Research.md](NASA_R3_Research.md) (section 2) so the research record agrees with the data.

## 2. Kepler

### Image changes

| Place | Before | After |
|---|---|---|
| Ch.2 "Blast Off!" (`kepler-2`, launch) | scale-model photo (`kepler-img-scale-model`, 201102020008HQ) | **launch photograph** `kepler-img-pia14446` (PIA14446), moved from ch.1 |
| Ch.1 "Meet Kepler" (`kepler-1`) | launch photograph (PIA14446) | **photograph of the Kepler spacecraft** `kepler-img-pia11188` (PIA11188) |
| Kepler card and intro page | launch photograph (PIA14446) | **PIA11188**, so a launch photo no longer stands for the telescope on those pages (this goes one step beyond "Meet Kepler", for the same reason) |

### The telescope photograph (new asset `kepler-img-pia11188`)

| | |
|---|---|
| NASA Image Library record | PIA11188, "NASA Kepler Spacecraft in a Clean Room", JPL, 2008-09-23 · https://images.nasa.gov/details/PIA11188 |
| NASA caption | "NASA Kepler spacecraft in a clean room at Ball Aerospace & Technologies Corp. in Boulder, Colo." |
| Credit (the record's creator field) | NASA/JPL-Caltech/Ball Aerospace |
| Verified | HTTP 200 `~medium.jpg`; looked at it: the real spacecraft, upright, in gold and copper-coloured foil with a white round cover on top, two workers in white clean-room suits at its base. A real photograph, not a drawing |
| Alt text (EN) | "Photo of NASA's Kepler spacecraft standing upright in a clean room, wrapped in gold and copper-colored foil with a white round cover on top, and two workers in white clean-room suits at its base. NASA's caption: Kepler in a clean room at Ball Aerospace & Technologies Corp. in Boulder, Colorado." (Arabic equivalent in `src/data/assets/deep-a.json`) |

Other real Kepler photos exist in the library (for example PIA11733 and KSC-2009-1432/1433/1434) and were checked; PIA11188 was chosen because it shows the whole spacecraft. The launch photograph keeps its already-verified credit "NASA/Ames", source link and alt text.

Left in the data, now unused: the scale-model asset `kepler-img-scale-model` (it was only used in the launch chapter). The validator reports it as a warning ("not used by any mission"); delete it if you do not want it.

## 3. Pioneer 11

Asset `dp-img-p11-painting` (ARC-2000-80-HC-251), shown on Pioneer 11 ch.1 and the Pioneer 11 intro.

| | Before | After |
|---|---|---|
| Credit | "NASA Ames Research Center" | "NASA Ames Research Center. NASA's image record names the painter as Wilson Hurley." |
| Alt text (EN) | "…It is an artwork, not a photograph." | same, plus "NASA's record says it was painted by Wilson Hurley." (Arabic updated the same way) |
| `sourceUrl`, authenticity | https://images.nasa.gov/details/ARC-2000-80-HC-251 · reconstruction | unchanged |

Basis: the NASA Image Library record's own description: "Pioneer 11 pre-encounter with Saturn as painted by Wilson Hurley." The Ames attribution is kept, and the wording says only that NASA's record **names** the painter; it does not say who owns the copyright or the artwork.

## 4. Validation

| Check | Result |
|---|---|
| Data validation | OK: 21 missions, 38 assets, 52 sources (one warning: the unused scale-model asset) |
| Type-check | pass |
| Automated tests | 23 of 23 pass |
| Production build | succeeds |
| Image URLs over HTTP | all 37 NASA image URLs return an image (including the new Phoenix and Kepler files) |
| Image loading in a real browser | 322 image loads across every mission page, chapter and destination page in English and Arabic: **0 not loaded, 0 empty alt text** |
| Screenshot check | Phoenix ch.6 (EN, AR) shows the 2017 image with the new text; Kepler ch.1/intro/card show the spacecraft photo, ch.2 the launch photo; Pioneer 11 shows the new credit in both languages |

## 5. Files changed

| File | Change |
|---|---|
| `src/data/missions/phoenix.json` | `phx-6` text, "Explore more", facts f2/f3, source list; `ending.finalChapterText`, `ending.notStated` (English and Arabic) |
| `src/data/assets/mars-b.json` | Phoenix `phoenix-img-decade-later`: new file URL and alt text; credit, NASA ID and source link unchanged |
| `src/data/sources/mars-b.json` | Added `phoenix-src-c` |
| `src/data/assets/deep-a.json` | Added `kepler-img-pia11188` |
| `src/data/missions/kepler.json` | Four image assignments (card, intro, ch.1, ch.2); no text change |
| `src/data/assets/deep-pioneer.json` | Pioneer 11 painting: credit and alt text |
| `NASA_R3_Research.md` | One dated update note (Phoenix reason now stated by NASA's image description) |

## 6. Left as is, for the fact-check

- The Phoenix mission is still marked `unverified`, like all 21; the new statements need the same human check against the cited NASA pages.
- The new Phoenix picture is hosted on NASA's `assets.science.nasa.gov` (not `images-assets.nasa.gov` like the other images). It loads, but if NASA moves it, the chapter falls back to showing no photo, not a broken one.
- NASA's Photojournal text also says that in an animation comparing 2008 and 2017 "the lander (top) appears darker, and is now covered by dust". That sentence is about the blink animation, not about the still we show, so I did not use it.

Stopped here as requested. The 21-mission human fact-check has not been started.
