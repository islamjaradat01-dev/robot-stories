// Regression guard for the frozen Moon dataset (approved 2026-11-15).
// Fails if any of the 12 approved Moon files changes, disappears, or if a Moon mission
// file exists that the freeze does not cover. To change a frozen file on purpose,
// follow freeze/README.md.
import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { MOON_FILES, checkFreeze, readManifest } from '../../scripts/moon-freeze-lib';

describe('Moon dataset freeze', () => {
  it('every frozen Moon file matches its recorded SHA-256', () => {
    expect(checkFreeze()).toEqual([]);
  });

  it('the manifest covers exactly the 12 approved files', () => {
    const m = readManifest();
    expect(m.files.map((f) => f.path).sort()).toEqual([...MOON_FILES].sort());
    expect(MOON_FILES).toHaveLength(12);
  });

  it('every Moon mission file is covered by the freeze', () => {
    const dir = join(process.cwd(), 'src', 'data', 'missions');
    const moon = readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .filter((f) => JSON.parse(readFileSync(join(dir, f), 'utf8')).destinationId === 'moon')
      .map((f) => `src/data/missions/${f}`);
    expect(moon.sort()).toEqual(MOON_FILES.filter((p) => p.includes('/missions/')).sort());
  });

  it('freezing did not mark any Moon mission as verified', () => {
    for (const p of MOON_FILES.filter((f) => f.includes('/missions/'))) {
      expect(JSON.parse(readFileSync(join(process.cwd(), p), 'utf8')).unverified).toBe(true);
    }
  });
});
