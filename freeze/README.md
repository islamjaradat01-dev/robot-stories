# Moon dataset freeze

The Moon dataset was frozen on 2026-11-15, after the Moon corrections were approved (see `NASA_Moon_Corrections_Report.md`).

Being frozen means the content is locked. It does **not** mean the facts are verified. All 8 Moon missions keep `"unverified": true` until a human review signs them off, and the test checks that this is still the case.

## What is frozen

`moon.sha256.json` lists 12 files with their SHA-256 hashes:

- 8 mission files: `apollo-11-eagle`, `apollo-15-falcon`, `lrv-apollo-15`, `lrv-apollo-17`, `alsep-apollo-12`, `alsep-apollo-15`, `surveyor-3`, `surveyor-6`
- `src/data/assets/moon-lm-lrv.json` and `src/data/assets/moon-alsep-surveyor.json`
- `src/data/sources/moon-lm-lrv.json` and `src/data/sources/moon-alsep-surveyor.json`

Each hash is taken over the file's text after Windows line endings (CRLF) are converted to LF. A change of line endings alone therefore does not break the freeze, but any other change does: a character, a space, the key order or the indentation.

## How it is enforced

- `npm test` runs `src/data/moonFreeze.test.ts`. The test fails in four cases:
  - a frozen file has changed or is missing;
  - the manifest does not list exactly these 12 files;
  - a new Moon mission file has been added without being frozen;
  - a Moon mission is no longer marked unverified.
- `npm run freeze:moon` runs the same check from the command line. It prints which file changed and exits with code 1.

## Changing a frozen file on purpose

Only do this after the change has been approved.

1. Get approval and write it down. Record the change in a report, in the same way as `NASA_Moon_Corrections_Report.md`: what changed, why, and which NASA source supports it. English and Arabic must be updated together.
2. Back up first. Copy the files you are about to change into a new dated folder under `backups/`. Never edit the existing backup folders.
3. Make the change. Then run `npm run validate`. Expect `npm test` to fail at this point: that failure is the freeze working.
4. Look at the difference. Confirm that only the approved files and fields changed. The guard names the files it sees as changed; compare them with the backup.
5. Record the new hashes:
   ```
   npm run freeze:moon -- --update --reason "Approved <date> by <reviewer>: <what>; see <report file>"
   ```
   The command refuses to run without `--reason`. It rewrites the hashes and appends an entry to `updates` in `moon.sha256.json`, with the date, the reason and the files that changed. Earlier entries are kept, so the history stays intact.
6. Run everything again: `npm test`, `npm run validate`, `npx tsc --noEmit`, `npm run build`.

Never run `--update` just to make a failing test pass. If you don't know why a frozen file changed, restore it from the backup.

Adding a new Moon mission works the same way. Add its path to `MOON_FILES` in `scripts/moon-freeze-lib.ts`, then run step 5.
