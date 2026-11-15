import type { Asset, Destination, DecorativeObject, Mission, Source } from './schema';
import destinations from './destinations.json';
import decorative from './decorative-objects.json';

// Assets and sources are split into per-group files so authors do not collide.
const assetFiles = import.meta.glob<{ default: Asset[] }>('./assets/*.json', { eager: true });
const sourceFiles = import.meta.glob<{ default: Source[] }>('./sources/*.json', { eager: true });
// One file per mission; each is loaded only when opened. Add a mission by adding a file.
const loaders = import.meta.glob<{ default: Mission }>('./missions/*.json');
const cardFiles = import.meta.glob<{ default: Mission }>('./missions/*.json', { eager: false });

const assets: Record<string, Asset> = {};
Object.values(assetFiles).forEach((f) => f.default.forEach((a) => { assets[a.id] = a; }));
const sources: Record<string, Source> = {};
Object.values(sourceFiles).forEach((f) => f.default.forEach((s) => { sources[s.id] = s; }));

export const getDestinations = () => (destinations as Destination[]).slice().sort((a, b) => a.sortOrder - b.sortOrder);
export const getDecorativeObjects = () => decorative as DecorativeObject[];
export const getAsset = (id: string): Asset | undefined => assets[id];
export const getSource = (id: string): Source | undefined => sources[id];

export async function loadMission(id: string): Promise<Mission | null> {
  const load = loaders[`./missions/${id}.json`];
  return load ? (await load()).default : null;
}
export const listMissionIds = () =>
  Object.keys(cardFiles).map((p) => p.replace('./missions/', '').replace('.json', ''));
