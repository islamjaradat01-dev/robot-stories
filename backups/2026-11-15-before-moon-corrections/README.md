# Backup: data before the Moon corrections (2026-11-15)

- `assets/`, `missions/`, `sources/`, `*.json`, `*.ts`, `AUTHORING.md`: the whole `src/data` folder as it was immediately before the Moon corrections.
- `NASA_R1_Research.md`, `NASA_R2_Research.md`, `NASA_R3_Research.md`: the research files before their corrections.
- `audit/moon-changes.json`: the log of all 166 changes (priority, file, field, before, after, source).
- `audit/moon-apply.mjs`: the script that applied them. `audit/replay.cjs`: re-applies the script to this backup and byte-compares the result with the project.

Verification on 2026-11-15: replaying the logged corrections (plus the one later ALSEP 15 "Explore more" edit, which is in the log) on this backup reproduced every current data file byte-for-byte. No keys or pre-existing array items were reordered. The only removals were the two intentional "2026" challenge-page timeline entries. All 30 other data files, including all 13 Mars and Deep Space missions, are byte-identical to this backup.

To restore: copy `assets/`, `missions/`, `sources/` and the top-level files back into `src/data/`. Do not edit this folder.
