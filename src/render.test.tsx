import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import StageScene from './animations/StageScene';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import SpaceScene from './pages/SpaceScene';
import { LanguageProvider } from './i18n/LanguageContext';
import { STRINGS } from './i18n/strings';
import type { Mission, MissionType, StageKind } from './data/schema';

const KINDS: StageKind[] = ['origin', 'build', 'launch', 'cruise', 'flyby', 'orbit-insertion', 'landing', 'deployment', 'operations', 'discovery', 'ending', 'legacy'];
const TYPES: MissionType[] = ['crewed-lander-stage', 'surface-vehicle', 'instrument-package', 'lander', 'rover', 'helicopter', 'orbiter', 'flyby-probe', 'space-telescope'];

const wrap = (el: JSX.Element) => renderToStaticMarkup(<LanguageProvider><MemoryRouter>{el}</MemoryRouter></LanguageProvider>);

describe('stage scenes', () => {
  it('render for every stage kind and spacecraft type', () => {
    for (const kind of KINDS) for (const type of TYPES) {
      for (const dest of ['moon', 'mars', 'deep-space'] as const) {
        expect(renderToStaticMarkup(<StageScene kind={kind} destinationId={dest} craftType={type} />)).toContain('scene');
      }
    }
  });
});

describe('screens', () => {
  it('render the header, welcome and space scene', () => {
    expect(wrap(<Header />)).toContain('العربية');
    expect(wrap(<Welcome />)).toContain(STRINGS.en.startJourney);
    const scene = wrap(<SpaceScene />);
    expect(scene).toContain('The Moon');
    expect(scene).toContain(STRINGS.en.notToScale);
  });
});

describe('interface strings', () => {
  it('have the same keys in English and Arabic', () => {
    const keys = (o: object, p = ''): string[] => Object.entries(o).flatMap(([k, v]) => typeof v === 'object' ? keys(v, `${p}${k}.`) : [`${p}${k}`]);
    expect(keys(STRINGS.ar).sort()).toEqual(keys(STRINGS.en).sort());
  });
});

describe('mission data rules', () => {
  const dir = join(process.cwd(), 'src', 'data', 'missions');
  const missions = readdirSync(dir).map((f) => JSON.parse(readFileSync(join(dir, f), 'utf8')) as Mission);
  it('uses valid animation presets', () => {
    for (const m of missions) for (const s of m.stages) expect([...KINDS, 'none']).toContain(s.animationPreset);
  });
  it('never calls a mission abandoned or broken in story text', () => {
    const banned = /\b(abandoned|broken)\b|مهجور|معطّل|معطل/i;
    for (const m of missions) {
      const texts = m.stages.flatMap((s) => [s.basicText.en, s.basicText.ar ?? '']).concat([m.ending.finalChapterText.en, m.ending.legacyText.en]);
      for (const t of texts) {
        // allowed only inside a negation such as "was not abandoned"
        const hit = t.match(banned);
        if (hit) expect(t).toMatch(/\b(not|never|isn't|wasn't|n't)\b[^.]*\b(abandoned|broken)\b|(ليس|ليست|لم|لا)[^.]*(مهجور|معطّل|معطل)/i);
      }
    }
  });
  it('flags every challenge-page-only ending', () => {
    for (const m of missions.filter((x) => x.ending.endingBasis === 'challenge-page')) {
      expect(m.ending.currentLocation).toBe('not-stated');
      expect(m.ending.notStated?.length).toBeGreaterThan(0);
    }
  });
});
