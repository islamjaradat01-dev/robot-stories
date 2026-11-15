import type { CSSProperties, ReactNode } from 'react';
import type { DestinationId, MissionType, StageKind } from '../data/schema';
import StarField from '../components/StarField';
import CraftIcon from './CraftIcon';
import './scenes.css';

/** How long the one-shot stage animations run, in milliseconds. The Journey page uses this for its timer. */
export const SCENE_MS = 4000;

interface Env { sky: string; ground: string | null; planet: string }
const ENV: Record<DestinationId, Env> = {
  moon: { sky: 'linear-gradient(#05060d, #151a2b)', ground: '#8c8e96', planet: '#cfd2da' },
  mars: { sky: 'linear-gradient(#150b08, #3a1a10)', ground: '#b4532a', planet: '#e0703a' },
  'deep-space': { sky: 'linear-gradient(#070416, #1b1040)', ground: null, planet: '#a78bfa' },
};

interface Props {
  kind: StageKind | 'none';
  destinationId: DestinationId;
  craftType: MissionType;
  paused?: boolean;
  /** Changing this value restarts the animation (Replay) */
  runKey?: string | number;
}

const Ground = ({ color }: { color: string }) => (
  <div className="absolute inset-x-0 bottom-0 h-[22%]" style={{ background: `linear-gradient(${color}, #00000066)` }} />
);
const Planet = ({ color, size, style }: { color: string; size: string; style?: CSSProperties }) => (
  <div className="absolute rounded-full" style={{ width: size, height: size, background: `radial-gradient(circle at 30% 30%, ${color}, #000000cc 95%)`, ...style }} />
);
const Craft = ({ type, size = 'w-28 sm:w-36', className = '' }: { type: MissionType; size?: string; className?: string }) => (
  <CraftIcon type={type} className={`${size} drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] ${className}`} />
);
const Center = ({ children, bottom = '20%', className = '' }: { children: ReactNode; bottom?: string; className?: string }) => (
  <div className={`absolute inset-x-0 flex justify-center ${className}`} style={{ bottom }}>{children}</div>
);

function Rocket() {
  return (
    <svg viewBox="0 0 40 120" className="h-40 w-12 sm:h-52 sm:w-16" aria-hidden="true">
      <path d="M20 2 C30 22 32 40 32 70 L8 70 C8 40 10 22 20 2Z" fill="#eef1f6" />
      <path d="M8 70 L0 96 L12 86Z M32 70 L40 96 L28 86Z" fill="#c24a3b" />
      <circle cx="20" cy="38" r="5" fill="#22d3ee" />
      <g className="a-flame"><path d="M12 72 L28 72 L20 112Z" fill="#ffb347" /><path d="M16 72 L24 72 L20 96Z" fill="#fff3b0" /></g>
    </svg>
  );
}

/** Craft that stay in space (orbiters, probes, telescopes) never drive or sit on a ground line. */
const IN_SPACE: MissionType[] = ['orbiter', 'flyby-probe', 'space-telescope'];
const ROCK_GROUND = '#6f6a78';

function Scene({ kind, destinationId, craftType }: Omit<Props, 'paused' | 'runKey'>) {
  const env = ENV[destinationId];
  const inSpace = IN_SPACE.includes(craftType);
  // A deep-space touchdown (e.g. an asteroid landing) gets a rocky ground; other deep-space chapters stay in open space.
  const ground = env.ground ?? (kind === 'landing' ? ROCK_GROUND : null);
  switch (kind) {
    case 'launch':
      return (
        <>
          <StarField count={40} />
          <Ground color="#2c5d3f" />
          <Center bottom="16%"><div className="a-rise"><Rocket /></div></Center>
          <Center bottom="14%">{[0, 1, 2].map((i) => (
            <div key={i} className="a-smoke mx-[-6px] h-10 w-10 rounded-full bg-white/70" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}</Center>
        </>
      );
    case 'cruise':
      return (
        <>
          <StarField count={110} drift />
          <Planet color="#4a8fe0" size="5rem" style={{ insetInlineStart: '6%', top: '42%' }} />
          <Planet color={env.planet} size="6.5rem" style={{ insetInlineEnd: '6%', top: '36%' }} />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M14 38 Q50 6 86 34" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
          <Center bottom="34%"><div className="a-cruise-x"><div className="a-cruise-y"><Craft type={craftType} size="w-20 sm:w-28" /></div></div></Center>
        </>
      );
    case 'flyby':
      return (
        <>
          <StarField count={80} />
          <Planet color={env.planet} size="clamp(9rem, 38vw, 17rem)" style={{ insetInlineEnd: '-4%', top: '14%' }} />
          <Center bottom="30%"><div className="a-flyby"><Craft type={craftType} size="w-20 sm:w-28" /></div></Center>
        </>
      );
    case 'orbit-insertion':
      return (
        <>
          <StarField count={80} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Planet color={env.planet} size="7rem" style={{ position: 'relative' }} />
            <div className="absolute h-60 w-60 rounded-full border border-dashed border-cyan/60 sm:h-72 sm:w-72" />
            <div className="a-orbit absolute h-60 w-60 sm:h-72 sm:w-72">
              <div className="a-orbit-counter absolute -top-8 start-1/2 -ms-8"><Craft type={craftType} size="w-16" /></div>
            </div>
          </div>
        </>
      );
    case 'landing':
      return (
        <>
          <StarField count={60} />
          {ground && <Ground color={ground} />}
          {/* Neutral descent: no flame or parachute, because each craft landed differently (airbags, thrusters...) */}
          <Center bottom="19%"><div className="a-descend flex flex-col items-center">
            <Craft type={craftType} />
          </div></Center>
          <Center bottom="17%"><div className="a-dust h-8 w-40 rounded-full bg-white/40 blur-md" /></Center>
        </>
      );
    case 'deployment':
      return (
        <>
          <StarField count={60} />
          {ground && <Ground color={ground} />}
          <Center bottom="19%"><div className="relative"><Craft type={craftType} />
            {[0, 1, 2].map((i) => (
              <span key={i} className="a-ring absolute inset-x-0 top-1/2 mx-auto h-28 w-28 -translate-y-1/2 rounded-full border-2 border-cyan" style={{ animationDelay: `${i * 0.7}s` }} />
            ))}</div></Center>
        </>
      );
    case 'operations':
      if (inSpace) {
        // Orbiters, probes and telescopes work in space: the craft hovers and "scans" with pulses.
        return (
          <>
            <StarField count={90} />
            <Planet color={env.planet} size="clamp(7rem, 26vw, 12rem)" style={{ insetInlineStart: '8%', bottom: '-18%' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="a-float relative"><Craft type={craftType} />
                {[0, 1, 2].map((i) => (
                  <span key={i} className="a-ring absolute inset-x-0 top-1/2 mx-auto h-28 w-28 -translate-y-1/2 rounded-full border-2 border-cyan" style={{ animationDelay: `${i * 0.7}s` }} />
                ))}
              </div>
            </div>
          </>
        );
      }
      return (
        <>
          <StarField count={50} />
          <div className="absolute end-[10%] top-[12%] h-12 w-12 rounded-full bg-amber-200/90 shadow-[0_0_40px_10px_rgba(253,230,138,0.5)]" />
          {ground && <Ground color={ground} />}
          <div className="a-track absolute bottom-[18%] start-[12%] h-1 w-[76%] origin-left rounded bg-white/30 rtl:origin-right" />
          <Center bottom="19%"><div className="a-drive"><Craft type={craftType} /></div></Center>
        </>
      );
    case 'discovery':
      return (
        <>
          <StarField count={60} />
          {ground && <Ground color={ground} />}
          <Center bottom="19%"><div className="relative"><Craft type={craftType} />
            {[0, 1, 2].map((i) => (
              <span key={i} className="a-ring absolute inset-x-0 top-1/2 mx-auto h-24 w-24 -translate-y-1/2 rounded-full border-2 border-amber-300" style={{ animationDelay: `${i * 0.7}s` }} />
            ))}</div></Center>
          {[['18%', '24%'], ['76%', '18%'], ['62%', '46%'], ['30%', '52%']].map(([x, y], i) => (
            <svg key={i} viewBox="0 0 20 20" className="a-spark absolute h-6 w-6" style={{ insetInlineStart: x, top: y, animationDelay: `${i * 0.35}s` }} aria-hidden="true">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8Z" fill="#fde68a" />
            </svg>
          ))}
        </>
      );
    case 'ending':
      return (
        <>
          <StarField count={60} />
          {ground && <Ground color={ground} />}
          <Center bottom="19%"><div className="a-fade-out relative"><Craft type={craftType} />
            {[0, 1, 2].map((i) => (
              <span key={i} className="a-signal absolute inset-x-0 -top-4 mx-auto h-24 w-24 rounded-full border-2 border-cyan" style={{ animationDelay: `${i * 0.6}s` }} />
            ))}</div></Center>
          <div className="a-dim pointer-events-none absolute inset-0 bg-black" />
        </>
      );
    case 'legacy':
      return (
        <>
          <StarField count={140} seed={11} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="a-rays absolute h-[140%] w-[60%] opacity-30" style={{ background: 'conic-gradient(from 0deg, transparent 0 20deg, #fde68a 24deg, transparent 30deg 110deg, #22d3ee 114deg, transparent 120deg 200deg, #fde68a 204deg, transparent 210deg 290deg, #22d3ee 294deg, transparent 300deg)' }} />
            <div className="a-glow absolute h-44 w-44 rounded-full bg-cyan/20 blur-2xl" />
            <div className="a-float relative"><Craft type={craftType} size="w-24 sm:w-32" /></div>
          </div>
        </>
      );
    case 'origin':
    case 'build':
    default:
      return (
        <>
          <StarField count={50} />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="a-glow absolute h-40 w-40 rounded-full bg-cyan/20 blur-2xl" />
            <div className="a-appear relative"><Craft type={craftType} size="w-32 sm:w-44" /></div>
          </div>
        </>
      );
  }
}

export default function StageScene({ kind, destinationId, craftType, paused = false, runKey }: Props) {
  const env = ENV[destinationId];
  return (
    <div className={`scene aspect-[16/9] min-h-[220px] w-full rounded-2xl ${paused ? 'is-paused' : ''}`}
      style={{ background: env.sky, ['--dur' as string]: `${SCENE_MS}ms` }} role="img"
      aria-label="Animated illustration of this chapter">
      <Scene key={runKey} kind={kind} destinationId={destinationId} craftType={craftType} />
    </div>
  );
}
