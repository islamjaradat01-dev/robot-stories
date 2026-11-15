// Shared logic for the Moon dataset freeze (used by the regression test and the CLI).
// Hashes are SHA-256 of the file text with CRLF normalised to LF, so the freeze does not
// break if a tool or a git checkout changes line endings. Any other byte change is detected.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export const ROOT = process.cwd();
export const MANIFEST_PATH = join(ROOT, 'freeze', 'moon.sha256.json');

export interface FreezeEntry { path: string; sha256: string }
export interface FreezeUpdate { date: string; reason: string; changed: string[] }
export interface FreezeManifest {
  dataset: 'moon';
  algorithm: 'sha256 (CRLF normalised to LF)';
  note: string;
  frozenOn: string;
  files: FreezeEntry[];
  updates: FreezeUpdate[];
}

/** The 12 approved Moon-related data files, relative to the project root. */
export const MOON_FILES = [
  'src/data/missions/apollo-11-eagle.json',
  'src/data/missions/apollo-15-falcon.json',
  'src/data/missions/lrv-apollo-15.json',
  'src/data/missions/lrv-apollo-17.json',
  'src/data/missions/alsep-apollo-12.json',
  'src/data/missions/alsep-apollo-15.json',
  'src/data/missions/surveyor-3.json',
  'src/data/missions/surveyor-6.json',
  'src/data/assets/moon-lm-lrv.json',
  'src/data/assets/moon-alsep-surveyor.json',
  'src/data/sources/moon-lm-lrv.json',
  'src/data/sources/moon-alsep-surveyor.json',
];

export function hashFile(rel: string): string {
  const text = readFileSync(join(ROOT, rel), 'utf8').replace(/\r\n/g, '\n');
  return createHash('sha256').update(text, 'utf8').digest('hex');
}

export function readManifest(): FreezeManifest {
  return JSON.parse(readFileSync(MANIFEST_PATH, 'utf8')) as FreezeManifest;
}

export function writeManifest(m: FreezeManifest): void {
  writeFileSync(MANIFEST_PATH, JSON.stringify(m, null, 2) + '\n', 'utf8');
}

/** Returns a list of human-readable problems; empty means the Moon dataset matches the freeze. */
export function checkFreeze(m: FreezeManifest = readManifest()): string[] {
  const problems: string[] = [];
  const listed = m.files.map((f) => f.path);
  for (const p of MOON_FILES) if (!listed.includes(p)) problems.push(`not in manifest: ${p}`);
  for (const p of listed) if (!MOON_FILES.includes(p)) problems.push(`in manifest but not a frozen Moon file: ${p}`);
  for (const f of m.files) {
    if (!existsSync(join(ROOT, f.path))) { problems.push(`missing file: ${f.path}`); continue; }
    const actual = hashFile(f.path);
    if (actual !== f.sha256) problems.push(`changed: ${f.path} (expected ${f.sha256.slice(0, 12)}…, found ${actual.slice(0, 12)}…)`);
  }
  return problems;
}
