# Browser QA Report

Date: 2026-11-15 · Build under test: dev server (`vite --port 5199`) of the current project · Screenshots: [qa-screenshots/](qa-screenshots/)

## 1. How it was tested (and what was not)

**Real browser: yes.** Google Chrome (installed on this PC) was driven with Playwright from a scratch folder outside the project (nothing was added to the project's dependencies). Pages were loaded, clicked, screenshotted and inspected, and I looked at the screenshots.

| Setup | Value |
|---|---|
| Desktop viewport | 1280 × 800 |
| Phone viewport | 390 × 844 |
| Languages | English and Arabic (stored language set before load, and also switched with the header button) |
| Coverage | Welcome, space scene, all 3 destination pages, all 21 mission intro pages, **all 147 chapters** and all 21 final chapters, in 4 combinations (desktop-EN, desktop-AR, mobile-EN, mobile-AR) |
| Scripts | kept in the scratch folder: flow, missions, controls, images, verify |

**Not tested:** Firefox, Safari, Edge, tablet widths (e.g. 768 px), a real phone or touch input, screen readers, high-contrast mode, slow networks, and the production build (`dist`) in a browser. The mission *facts* were not re-checked; this pass is about presentation. Findings from the pass are below.

## 2. Checks that passed

| Area | Result |
|---|---|
| Landing → space scene → destination → mission intro → chapters → final chapter | Works end to end in both languages |
| Destination pages | Moon 8 cards, Mars 8, Deep Space 5, grouped by type, correct counts |
| Language switch | Header button flips `dir`/`lang` (ltr/en ↔ rtl/ar); header, headings, panels, buttons, tooltips and chapters all mirror correctly |
| **Language remembered after reload** | Yes, in all 4 combinations; also kept when switching in the middle of a journey (same chapter stays open) |
| Horizontal overflow | **None** on any of the 4 × (3 + 21 intro + 147 chapters + 21 final) page loads |
| Empty headings / blank pages / uncaught JS errors | None |
| Controls | Pause freezes the scene (identical frames), Resume restarts it, Skip jumps to the finished state, Replay restarts, Previous/Next/Exit work, Explore more expands, quiz opens, wrong answers are shown with the explanation and never block |
| Walking a whole mission with Next | Reaches the final chapter (tested on Pioneer 10, in both languages) |
| Keyboard | Tab order reaches the header controls first; decorative tooltips open on focus |
| Reduced motion | With the OS setting on, chapter animations show their final frame immediately |
| Verification badges | "NASA pages differ on this detail" shows on disputed facts with the note; the LRV final chapter shows the challenge-page warning and the "What NASA sources do not say" box (screenshots 17, 19, 20) |
| Credits | Every photo shows its credit line and the "Real NASA image" / illustration label (screenshots 17, 18) |
| Images | **All 37 NASA image URLs load** after the fix below |
| Automated | 23 tests, type-check, data validation and production build all pass |

## 3. Bugs found

### Critical
None.

### High
| # | Bug | Where | Status |
|---|---|---|---|
| H1 | **9 of 37 NASA image URLs did not load** (the `~medium` size does not exist for those IDs, NASA returns an XML error, the browser blocks it). Affected images: Ceres (PIA19181), NEAR (PIA02464, PIA03148), Sojourner (PIA00623, PIA00621), Spirit (PIA05040), Viking 1 (PIA00381, PIA00382), Phoenix (PIA22223), Opportunity Endurance (PIA06739). Mission cards fell back to the drawing and chapters showed no photo. | `src/data/assets/*.json` (`path` field only) | **Fixed.** Each now points to a size that exists (`~small` or `~orig`). Facts, credits and IDs unchanged. Re-probed: 37/37 load. |
| H2 | **Starfield broken in Arabic**: stars filled only a thin strip at the left edge of the screen (screenshot 04). Cause: the 200%-wide drifting layer was anchored from the right in right-to-left mode. | `src/components/StarField.tsx`, `src/animations/scenes.css` | **Fixed.** The decorative layer is always left-to-right (screenshot 05). |

### Medium
| # | Bug | Where | Status |
|---|---|---|---|
| M1 | **Stars stretched into vertical ovals** on tall pages (destination pages; screenshot 06) because the stars were drawn in a stretched SVG. | `src/components/StarField.tsx` | **Fixed.** Stars are round dots (screenshot 07). |
| M2 | **After answering a quiz, "Next" only closed the quiz** and a second Next was needed, so it looked broken. | `src/pages/Journey.tsx` | **Fixed.** It now answers and moves on (verified: chapter 5 → 6). State machine untouched. |
| M3 | **Landing scene always drew a thruster flame** under the craft, which is wrong for airbag landers such as Opportunity and Sojourner (screenshot 11). | `src/animations/StageScene.tsx` | **Fixed.** Neutral descent, no flame (screenshot 12). A future improvement is to drive the landing style from mission data. |
| M4 | **Orbiters/probes/telescopes showed a ground "drive track"** in "operations" chapters (Dawn, Kepler, Pioneers; screenshot 13). | `src/animations/StageScene.tsx` | **Fixed.** They hover in space with scan pulses over a planet (screenshot 14). |
| M5 | **Final chapter said "Status: Intentionally left behind"** for the lunar rovers even though only the challenge page says so. | `src/pages/FinalChapter.tsx`, `src/i18n/strings.ts` | **Fixed.** The label now ends "(according to the challenge page only)" in English and Arabic (screenshots 19, 20). |
| M6 | **Mission cards showed a generic Mars/Moon picture** as if it were mission-specific (Viking 2, Falcon, ALSEP, Surveyor 6). | `src/components/MissionCard.tsx` | **Fixed.** Cards show only mission-specific photos; the others show the craft illustration. Cards still on illustrations: Apollo 12 ALSEP, Apollo 15 ALSEP, Apollo 15 Falcon, Kepler, Pioneer 11, Surveyor 6, Viking 2. |
| M7 | **Sojourner image does not match its chapter.** The "First Rover Drive" chapter says the rover rolled off the lander, but its picture (PIA00621, listed in the NASA library as "Color Mosaic of Rover & Terrain") shows the rover still sitting on the lander. PIA00623, which shows the rover on the surface, is used on the "Meet Sojourner" chapter instead. | `src/data/missions/sojourner.json`, stage `sojourner-4` (and `sojourner-1`) | **Open (content).** Suggest swapping the two image assignments. Left for the fact-check because it changes which image supports which statement. |
| M8 | **Spirit image PIA07410 is a distorted "vertical 360° view"**: it looks like an abstract smear to a child (on "Far Beyond the Plan"). | `src/data/missions/spirit.json`, stage `spirit-4` | **Open (content).** Suggest a normal landscape image or none. Only two Spirit images exist in the research. |
| M9 | **Spirit PIA05040's NASA title ("Spirit Stretches Out", described as an animation frame) does not match the picture**, which shows the rover's deck with a JPL plate and airbag material. | `src/data/missions/spirit.json`, stage `spirit-1` | **Open (content).** Check the image's NASA page before keeping the current alt text. |
| M10 | **Alt text on many photos is generic** ("Spirit rover image from the NASA Image Library"), which is weak for accessibility. | `src/data/assets/*.json` | **Open (content).** See suggestions in section 5. |

### Low
| # | Issue | Where | Status |
|---|---|---|---|
| L1 | Decorative ISS and shuttle icons orbited continuously, hard to hover or tap. | `src/pages/SpaceScene.tsx` | **Fixed.** The orbit pauses while the icon is hovered or focused (verified on focus). |
| L2 | The browser asked for a missing favicon (a 404 in the console). | `index.html` | **Fixed** (inline icon). |
| L3 | Arabic credit lines showed the trailing "." at the start ("‫.NASA/JPL-Caltech/…") because of mixed text direction. | `src/components/AssetImage.tsx` | **Fixed** (credit isolated as left-to-right text). Not re-screenshotted after this edit. |
| L4 | In Arabic, source titles and credit lines stay in English (e.g. "Surveyor program", "NASA/JPL-Caltech"). These are official names, but the screen mixes scripts. | footers of `Journey.tsx`, `FinalChapter.tsx` | Open, design choice. |
| L5 | Credit text "NASA (JSC; credit field not stated by the library)" is jargon for a child. | `src/data/assets/moon-*.json` | Open (content). |
| L6 | Earth in the space scene has no label (it is deliberately not a destination). | `src/pages/SpaceScene.tsx` | Open. |
| L7 | Launch and cruise scenes draw the rover/lander icon flying through space, and the launch rocket is generic. This is an illustration, labelled "Illustrative animation, not real footage", but it can suggest the craft flew exposed. | `src/animations/StageScene.tsx` | Open, design choice. |
| L8 | The cruise craft does not exactly follow the dashed path. | `src/animations/scenes.css` | Open, cosmetic. |
| L9 | The "draft content" banner on mission intro pages shows only in the development build (`import.meta.env.DEV`). | `src/pages/MissionIntro.tsx` | By design. Production shows no draft marker, so do not release before the fact-check. |
| L10 | Full-page screenshots of sticky-header pages (e.g. screenshot 08) show the header overlapping the top text. This is a screenshot artifact; viewport screenshots show it correctly. | — | Not a bug. |
| L11 | Console shows two React Router "future flag" warnings. | `src/main.tsx` | Open, harmless. |

## 4. Image caption review (Surveyor, Viking, Sojourner)

I downloaded each image and compared it with the chapter that uses it.

| Image | What it shows | Used on | Verdict |
|---|---|---|---|
| Surveyor 3, AS12-48-7134 and AS12-48-7133 | An Apollo 12 astronaut examining Surveyor 3 with the Apollo 12 lunar module in the background | Surveyor 3 card, intro and "A Visit from Apollo 12" | **Matches** |
| Viking 1, PIA00381 | The first photograph from the surface: rocks and sand with a lander footpad at lower right | Viking 1 "First Photos from the Ground" | **Matches** |
| Viking 1, PIA00382 | Two stacked black-and-white panorama strips from the lander | same chapter | **Matches** |
| Sojourner, PIA00623 | The rover on the Martian surface beside the lander ramp | "Meet Sojourner" | Plausible; better suited to the "First Rover Drive" chapter (see M7) |
| Sojourner, PIA00621 | Colour image of the rover still on the lander deck with deflated airbags | "Bouncing to a Stop" and "First Rover Drive" | Fits the first; **does not fit** the second (M7) |
| Spirit, PIA05040 | The rover's deck, a JPL plate and airbag cloth under a wide-angle sky | "Meet Spirit" | Title/picture mismatch to verify (M9) |
| Spirit, PIA07410 | A distorted vertical 360° view of the surface | "Far Beyond the Plan" | Confusing for children (M8) |

Suggested alt text (from viewing the images, for the content owner to adopt or check): Viking PIA00381 "Black-and-white photo of rocks and sand on Mars with part of the Viking 1 lander at the lower right"; Viking PIA00382 "Two black-and-white panorama strips of the Viking 1 landing site"; Sojourner PIA00621 "The Sojourner rover on top of the Pathfinder lander, surrounded by deflated airbags"; Sojourner PIA00623 "The Sojourner rover on the Martian surface next to the lander ramp"; Surveyor AS12-48-7134/7133 "An Apollo 12 astronaut examines the Surveyor 3 lander, with the Apollo 12 lunar module far in the background".

## 5. Priority list

1. **Critical:** none.
2. **High (fixed):** H1 broken NASA image URLs; H2 Arabic starfield.
3. **Medium, still open (need the content owner):** M7 Sojourner image/chapter mismatch; M8 Spirit distorted panorama; M9 Spirit PIA05040 title mismatch; M10 generic alt text.
4. **Medium (fixed):** M1 stretched stars; M2 quiz Next; M3 landing flame; M4 orbiter ground track; M5 challenge-page status label; M6 generic card images.
5. **Low, open:** L4–L8, L11. **Low, fixed:** L1–L3.

## 6. Files changed during QA (UI only; no mission facts and no state-machine changes)

| File | Change |
|---|---|
| `src/data/assets/*.json` (9 `path` values) | Image URL size corrected (H1). Same IDs, credits, alt text and facts |
| `src/components/StarField.tsx`, `src/animations/scenes.css` | Round, direction-independent stars (H2, M1) |
| `src/animations/StageScene.tsx` | No landing flame; space-craft "operations" scene (M3, M4) |
| `src/pages/Journey.tsx` | Quiz Next advances the chapter (M2) |
| `src/pages/FinalChapter.tsx`, `src/i18n/strings.ts` | Challenge-page status label in both languages (M5) |
| `src/components/MissionCard.tsx` | Cards show only mission-specific photos (M6) |
| `src/pages/SpaceScene.tsx` | Orbiters pause on hover or focus (L1) |
| `src/components/AssetImage.tsx` | Credit text direction (L3) |
| `index.html` | Favicon (L2) |
| `qa-screenshots/` | 20 screenshots (before and after pairs are marked in the file names) |

After these edits: type-check passes, 23 tests pass, data validation passes, and the production build succeeds. The browser re-check covered the starfield, quiz, landing, Dawn, final-chapter label, favicon and orbit pause; the card, credit-direction (L3) and Arabic mobile credit changes were verified by code and tests, not by a new screenshot.

## 7. Screenshots

| File | What it shows |
|---|---|
| 01 | Welcome, desktop, English |
| 02 / 03 | Space scene, desktop and phone |
| 04 → 05 | Arabic starfield, before and after |
| 06 → 07 | Stretched stars on Moon page, before and after |
| 08 | Mars destination, phone, Arabic (before image fix; header overlap is a screenshot artifact) |
| 09, 10, 15 | Launch, cruise and ending scenes |
| 11 → 12 | Landing scene, before and after |
| 13 → 14 | Dawn operations scene, before and after |
| 16 | Quiz after a wrong answer, phone, Arabic |
| 17 | Viking 1 photo with credit and verification badge |
| 18 | Surveyor 3 photo, phone, Arabic |
| 19 → 20 | Lunar rover final chapter, before and after the label fix |
