// CLI for the Moon dataset freeze.
//   npm run freeze:moon                                   check only (exit code 1 on any change)
//   npm run freeze:moon -- --update --reason "<why>"      re-record hashes after an APPROVED change
// See freeze/README.md before using --update.
import { MOON_FILES, checkFreeze, hashFile, readManifest, writeManifest } from './moon-freeze-lib';

const args = process.argv.slice(2);
const update = args.includes('--update');
const reasonIdx = args.indexOf('--reason');
const reason = reasonIdx >= 0 ? args[reasonIdx + 1]?.trim() : '';

if (!update) {
  const problems = checkFreeze();
  if (problems.length) {
    console.error('Moon freeze BROKEN:');
    problems.forEach((p) => console.error('  ' + p));
    console.error('If this change was approved, follow freeze/README.md to update the manifest.');
    process.exit(1);
  }
  console.log(`Moon freeze OK: ${MOON_FILES.length} files match freeze/moon.sha256.json`);
  process.exit(0);
}

if (!reason) {
  console.error('Refusing to update: pass --reason "<what was approved, by whom, and where it is documented>"');
  process.exit(1);
}
const m = readManifest();
const before = new Map(m.files.map((f) => [f.path, f.sha256]));
m.files = MOON_FILES.map((path) => ({ path, sha256: hashFile(path) }));
const changed = m.files.filter((f) => before.get(f.path) !== f.sha256).map((f) => f.path);
if (!changed.length) { console.log('Nothing changed; manifest left as it is.'); process.exit(0); }
m.updates.push({ date: new Date().toISOString().slice(0, 10), reason, changed });
writeManifest(m);
console.log(`Manifest updated for ${changed.length} file(s):`);
changed.forEach((p) => console.log('  ' + p));
