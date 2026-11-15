// Replays the logged Moon correction script on a fresh copy of the pre-edit backup and
// byte-compares the result with the current project. All file I/O is UTF-8 (Node only).
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const SP = 'C:/Users/ASUS/AppData/Local/Temp/claude/5c15ff4c88006e9e/483136f1-99cd-4dc9-850f-0702413de1a9/scratchpad';
const BK = `${SP}/data-backup-before-moon`;
const RP = `${SP}/replay`;
const CUR = 'c:/Users/ASUS/Desktop/nasa/src/data';

fs.rmSync(RP, { recursive: true, force: true });
fs.cpSync(BK, RP, { recursive: true, filter: (src) => !src.endsWith('.md') });

let script = fs.readFileSync(`${SP}/qa/moon-apply.mjs`, 'utf8');
const from = "const root = 'c:/Users/ASUS/Desktop/nasa/src/data';";
if (!script.includes(from)) throw new Error('root line not found');
script = script.replace(from, `const root = '${RP}';`).replace('scratchpad/qa/moon-changes.json', 'scratchpad/replay-changes.json');
fs.writeFileSync(`${SP}/qa/moon-apply-replay.mjs`, script, 'utf8');
console.log(execFileSync('node', [`${SP}/qa/moon-apply-replay.mjs`], { encoding: 'utf8' }).trim());

// the one later edit (ALSEP 15 Explore more), applied exactly as before
const p = `${RP}/missions/alsep-apollo-15.json`;
const m = JSON.parse(fs.readFileSync(p, 'utf8'));
m.stages.find((x) => x.id === 'alsep15-3').exploreMoreText = {
  en: 'NASA says the ALSEP was deployed at the end of the first moonwalk traverse, on 31 July 1971. The crew made three moonwalks, on 31 July, 1 August and 2 August 1971.',
  ar: 'تقول ناسا إن ALSEP نُصبت في نهاية رحلة السير الأول على القمر، في 31 يوليو 1971. وقام الرائدان بثلاث رحلات سير على القمر، في 31 يوليو و1 أغسطس و2 أغسطس 1971.',
};
fs.writeFileSync(p, JSON.stringify(m, null, 2) + '\n');

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const h = (f) => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
let n = 0, diffs = 0;
for (const f of walk(RP)) {
  const rel = path.relative(RP, f); const cur = path.join(CUR, rel); n++;
  if (!fs.existsSync(cur)) { console.log('MISSING in project:', rel); diffs++; }
  else if (h(f) !== h(cur)) { console.log('DIFFERS:', rel); diffs++; }
}
const extra = walk(CUR).filter((f) => !fs.existsSync(path.join(RP, path.relative(CUR, f))));
extra.forEach((f) => { console.log('EXTRA in project:', path.relative(CUR, f)); diffs++; });
console.log(`compared ${n} files; differences between (backup + logged corrections) and the current project: ${diffs}`);
