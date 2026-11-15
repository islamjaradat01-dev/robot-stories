# Authoring a mission file

Template: [missions/opportunity.json](missions/opportunity.json). Types: [schema.ts](schema.ts). Check with `npm run validate`.

## Truth rules (non-negotiable)
1. **Only facts from the research files** in the project root: `NASA_R1_Research.md`, `NASA_R2_Research.md`, `NASA_R3_Research.md`. Do not add facts from memory. If the research says ❓ NOT STATED, either leave it out or list it in `ending.notStated`.
2. Where research marks ⚠️ a conflict, use the cautious wording the research recommends and give the fact `"basis": "disputed"` with a `note`.
3. A statement that only the challenge page makes gets `"basis": "challenge-page"` and `ending.endingBasis` accordingly. Never present it as a verified NASA fact.
4. Never call a mission "abandoned", "broken" or "forgotten" unless the sources say so. Use `endCause` precisely (see schema). Phoenix/InSight: do NOT state a cause (not stated).
5. Every stage needs `sourceIds` (real ids from `sources/*.json`) and a `background` asset. Every fact needs `sourceId` and `basis`.
6. Do not force the same stages on every mission. Use only the stage kinds the real history supports (a probe has no landing; a telescope has no surface). The last two stages must be `ending` then `legacy`.
7. Images: only NASA Image Library items listed in `NASA_R3_Research.md` section 4 (path `https://images-assets.nasa.gov/image/<ID>/<ID>~medium.jpg`, `nasaId`, credit exactly as listed, `sourceUrl` `https://images.nasa.gov/details/<ID>`). Artist concepts and paintings are `"authenticity": "reconstruction"`. If no image exists, use `core-mars`, `core-moon` or `core-earth` as the background and say nothing about a photo.

## Language
- Every `LText` has `en` and `ar`. Arabic is Modern Standard Arabic, simple enough for ages 9–15. Keep numbers, dates, coordinates, ids and proper names consistent between languages (Western digits are fine).
- `basicText` is at most about 40 words per language. Short sentences. No jargon without a plain explanation (put detail in `exploreMoreText`).
- Tone for ages 9–15: clear, vivid, honest. Respect the facts; do not invent feelings or dialogue.

## Files you create (only these; do not edit other authors' files)
- `src/data/missions/<mission-id>.json`
- `src/data/assets/<group>.json` and `src/data/sources/<group>.json` (arrays). **Prefix every asset/source id with the mission or group id** (e.g. `spirit-img-...`, `spirit-src-...`) because ids must be unique across all files.
- Share an image between missions of your own group by defining it once in your group's asset file.

## Per mission
- `timeline`: 4+ dated events, each with a `sourceId` and `basis`.
- `stages`: 6 to 9, each with `kind`, `animationPreset` (same as `kind`), title, `basicText`, optional `exploreMoreText`, facts, sources; add one `quiz` per mission on a stage where a fact from the sources is the answer.
- `units`: real equipment items; exactly one `featured`.
- `discoveries`: only what the sources state.
- `ending`: `endCause`, `currentLocation` (`not-stated` allowed), `stillOperating`, `endingBasis`, texts, `notStated`.
- `unverified: true` (a human fact-checks later; do not set false).
- `card.group` and `card.order` as given in the task.
