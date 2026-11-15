import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Asset, Destination, LText, Mission, Source, DecorativeObject } from '../src/data/schema';

const dir = join(process.cwd(), 'src', 'data');
const read = <T>(p: string) => JSON.parse(readFileSync(join(dir, p), 'utf8')) as T;
const jsonIn = (sub: string) => readdirSync(join(dir, sub)).filter((f) => f.endsWith('.json')).sort();

const errors: string[] = [];
const warnings: string[] = [];
const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);

const destinations = read<Destination[]>('destinations.json');
const decorative = read<DecorativeObject[]>('decorative-objects.json');

function collect<T extends { id: string }>(sub: string): Map<string, T> {
  const out = new Map<string, T>();
  for (const f of jsonIn(sub)) {
    for (const item of read<T[]>(`${sub}/${f}`)) {
      if (out.has(item.id)) err(`${sub}/${f}`, `duplicate id ${item.id}`);
      out.set(item.id, item);
    }
  }
  return out;
}
const assets = collect<Asset>('assets');
const sources = collect<Source>('sources');
const missions = jsonIn('missions').map((f) => ({ file: f, m: read<Mission>(`missions/${f}`) }));
const destIds = new Set(destinations.map((d) => d.id));
const missionIds = new Set(missions.map(({ m }) => m.id));

// Every LText needs English; Arabic is required (the site is bilingual).
function checkText(where: string, t: LText | undefined, required = true) {
  if (!t) { if (required) err(where, 'missing text'); return; }
  if (!t.en?.trim()) err(where, 'missing English text');
  if (!t.ar?.trim()) err(where, 'missing Arabic text');
}
const words = (s: string) => s.trim().split(/\s+/).length;

for (const a of assets.values()) {
  if (!a.credit || !a.sourceUrl) err(`asset ${a.id}`, 'needs credit and sourceUrl');
  checkText(`asset ${a.id} altText`, a.altText);
  if (!['real', 'reconstruction'].includes(a.authenticity)) err(`asset ${a.id}`, 'authenticity must be real or reconstruction');
}
for (const d of destinations) {
  if (!assets.has(d.sceneAssetId)) err(`destination ${d.id}`, `unknown asset ${d.sceneAssetId}`);
  checkText(`destination ${d.id} name`, d.name); checkText(`destination ${d.id} tagline`, d.tagline);
}
for (const d of decorative) { checkText(`decorative ${d.id} name`, d.name); checkText(`decorative ${d.id} tooltip`, d.tooltip); }

const seenAssetUse = new Set<string>();
for (const { file, m } of missions) {
  const at = `mission ${m.id}`;
  if (file !== `${m.id}.json`) err(at, `file name must be ${m.id}.json`);
  if (!destIds.has(m.destinationId)) err(at, `unknown destination ${m.destinationId}`);
  checkText(`${at} name`, m.name);
  checkText(`${at} card.tagline`, m.card?.tagline);
  if (!assets.has(m.card?.assetId)) err(at, `unknown card asset ${m.card?.assetId}`);
  if (!assets.has(m.intro.assetId)) err(at, `unknown intro asset ${m.intro.assetId}`);
  for (const k of ['whatItIs', 'whyCreated', 'goal', 'whereGoing'] as const) checkText(`${at} intro.${k}`, m.intro[k]);
  for (const r of m.relatedMissionIds ?? []) if (!missionIds.has(r)) err(at, `unknown related mission ${r}`);

  if (m.units.length < 1) err(at, 'needs at least one unit');
  if (m.units.filter((u) => u.featured).length !== 1) err(at, 'needs exactly one featured unit');
  for (const u of m.units) checkText(`${at} unit ${u.id} name`, u.name);

  if (m.timeline.length < 3) err(at, 'timeline needs at least 3 events');
  for (const t of m.timeline) {
    checkText(`${at} timeline ${t.id}`, t.label);
    if (!sources.has(t.sourceId)) err(`${at} timeline ${t.id}`, `unknown source ${t.sourceId}`);
  }

  if (m.stages.length < 3) err(at, 'needs at least 3 stages');
  const kinds = m.stages.map((s) => s.kind);
  if (kinds.at(-2) !== 'ending' || kinds.at(-1) !== 'legacy') err(at, 'last two stages must be ending, legacy');
  if (new Set(m.stages.map((s) => s.id)).size !== m.stages.length) err(at, 'duplicate stage id');
  for (const s of m.stages) {
    const sa = `${at} stage ${s.id}`;
    checkText(`${sa} title`, s.title); checkText(`${sa} basicText`, s.basicText);
    if (s.exploreMoreText) checkText(`${sa} exploreMoreText`, s.exploreMoreText);
    for (const lang of ['en', 'ar'] as const) {
      if (s.basicText?.[lang] && words(s.basicText[lang]!) > 45) err(sa, `basicText (${lang}) over 45 words`);
    }
    if (s.sourceIds.length < 1) err(sa, 'needs at least one source');
    for (const id of s.sourceIds) if (!sources.has(id)) err(sa, `unknown source ${id}`);
    if (!s.assets.some((x) => x.role === 'background')) err(sa, 'needs a background asset');
    for (const x of s.assets) { if (!assets.has(x.assetId)) err(sa, `unknown asset ${x.assetId}`); seenAssetUse.add(x.assetId); }
    for (const f of s.facts) {
      checkText(`${sa} fact ${f.id}`, f.text);
      if (!sources.has(f.sourceId)) err(sa, `fact ${f.id} has unknown source`);
      if (!['nasa-page', 'disputed', 'challenge-page', 'not-stated'].includes(f.basis)) err(sa, `fact ${f.id} needs a valid basis`);
    }
    if (s.quiz) {
      if (s.quiz.options.filter((o) => o.isCorrect).length !== 1) err(sa, 'quiz needs exactly one correct option');
      checkText(`${sa} quiz.prompt`, s.quiz.prompt); checkText(`${sa} quiz.explanation`, s.quiz.explanation);
      s.quiz.options.forEach((o, i) => checkText(`${sa} quiz.option${i}`, o.label));
    }
  }
  for (const d of m.discoveries) {
    checkText(`${at} discovery ${d.id} title`, d.title); checkText(`${at} discovery ${d.id} summary`, d.summary);
    if (!sources.has(d.sourceId)) err(at, `discovery ${d.id} has unknown source`);
  }
  checkText(`${at} ending.finalChapterText`, m.ending.finalChapterText);
  checkText(`${at} ending.legacyText`, m.ending.legacyText);
  (m.ending.notStated ?? []).forEach((t, i) => checkText(`${at} ending.notStated[${i}]`, t));
  if (m.ending.stillOperating !== (m.ending.endCause === 'still-operating')) err(at, 'stillOperating must match endCause');
  if (!['nasa-page', 'disputed', 'challenge-page', 'not-stated'].includes(m.ending.endingBasis)) err(at, 'ending.endingBasis invalid');
  if (m.unverified) warnings.push(`${at}: still marked unverified (needs R3 fact-check sign-off)`);
}
for (const [id, a] of assets) if (!seenAssetUse.has(id) && !id.startsWith('core-') && !id.startsWith('bg-') &&
  !missions.some(({ m }) => m.card.assetId === id || m.intro.assetId === id)) warnings.push(`asset ${id}: not used by any mission`);

warnings.forEach((w) => console.warn('warn ', w));
if (errors.length) {
  errors.forEach((e) => console.error('ERROR', e));
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Data OK: ${missions.length} mission(s), ${assets.size} asset(s), ${sources.size} source(s).`);
