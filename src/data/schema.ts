export type ID = string;
export type Lang = 'en' | 'ar';

/** Translatable text. English is required (default language); Arabic is required before release. */
export interface LText { en: string; ar?: string }

export type DestinationId = 'moon' | 'mars' | 'deep-space';
export type MissionType =
  | 'crewed-lander-stage' | 'surface-vehicle' | 'instrument-package' | 'lander'
  | 'rover' | 'helicopter' | 'orbiter' | 'flyby-probe' | 'space-telescope';
export type EndCause =
  | 'intentionally-left' | 'switched-off' | 'stopped-operating'
  | 'communication-lost' | 'fuel-exhausted' | 'still-operating';
export type CurrentLocation = 'planetary-surface' | 'in-orbit' | 'solar-orbit' | 'leaving-solar-system' | 'not-stated';
export type StageKind =
  | 'origin' | 'build' | 'launch' | 'cruise' | 'flyby' | 'orbit-insertion'
  | 'landing' | 'deployment' | 'operations' | 'discovery' | 'ending' | 'legacy';
export type AssetRole = 'background' | 'foreground' | 'gallery' | 'video' | 'narration';

/** Where a statement comes from. Never present 'challenge-page' or 'disputed' as plain verified fact. */
export type Basis = 'nasa-page' | 'disputed' | 'challenge-page' | 'not-stated';

export interface Destination {
  id: DestinationId; name: LText; tagline: LText; themeColor: string; sceneAssetId: ID; sortOrder: number;
}

export interface Asset {
  id: ID; type: 'image' | 'video' | 'audio';
  /** Remote NASA URL (images-assets.nasa.gov) or a /public path */
  path: string;
  altText: LText;
  credit: string;
  nasaId?: string;
  sourceUrl: string;
  authenticity: 'real' | 'reconstruction';
}
export interface Source { id: ID; title: string; publisher: string; url: string; accessedOn: string; }
export interface DecorativeObject { id: ID; name: LText; tooltip: LText; kind: 'shuttle' | 'iss' | 'rocket' | 'satellite'; }

export interface EquipmentUnit {
  id: ID; name: LText; nssdcaId?: string; parentFlight?: string; restingPlace?: LText; featured: boolean;
}
export interface Fact { id: ID; text: LText; sourceId: ID; basis: Basis; note?: LText }
export interface Quiz {
  prompt: LText; options: { label: LText; isCorrect: boolean }[]; explanation: LText;
}
export interface Stage {
  id: ID; kind: StageKind; title: LText; dateLabel?: string;
  basicText: LText;            // keep short (about 40 words per language)
  exploreMoreText?: LText;
  animationPreset: StageKind | 'none';
  assets: { assetId: ID; role: AssetRole }[];
  facts: Fact[]; quiz?: Quiz; sourceIds: ID[];
}
export interface TimelineEvent {
  id: ID;
  /** Display date, language neutral, e.g. "20 Jul 1969" or "1972-03-02" */
  dateLabel: string;
  label: LText;
  sourceId: ID;
  basis: Basis;
}
export interface Discovery { id: ID; title: LText; summary: LText; sourceId: ID; }

export interface Mission {
  id: ID; destinationId: DestinationId; name: LText; missionType: MissionType;
  /** Cards on the destination page */
  card: { tagline: LText; assetId: ID; group?: 'apollo-lm' | 'lrv' | 'alsep' | 'surveyor' | 'rover' | 'lander' | 'orbiter' | 'probe' | 'telescope'; order: number };
  /** true while any content is placeholder or not yet fact-checked (R3 sign-off) */
  unverified: boolean;
  /** Other journeys that connect to this one (e.g. surveyor-3 <-> alsep-apollo-12) */
  relatedMissionIds?: ID[];
  intro: { whatItIs: LText; whyCreated: LText; goal: LText; whereGoing: LText; assetId: ID };
  units: EquipmentUnit[];
  timeline: TimelineEvent[];
  stages: Stage[];
  discoveries: Discovery[];
  ending: {
    endCause: EndCause; currentLocation: CurrentLocation; stillOperating: boolean;
    /** Where the ending/status claim comes from */
    endingBasis: Basis;
    finalChapterText: LText; legacyText: LText;
    /** Things NASA sources did not state, shown honestly to the reader */
    notStated?: LText[];
  };
  badge?: { name: LText; iconAssetId: ID };
}
export type Progress = Record<ID, { furthestStage: number; completed: boolean; badgeEarned: boolean }>;
