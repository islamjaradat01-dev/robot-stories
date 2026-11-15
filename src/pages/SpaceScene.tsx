import { useState } from 'react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';
import { getDecorativeObjects, getDestinations } from '../data';
import type { DecorativeObject, DestinationId } from '../data/schema';
import { useLang } from '../i18n/LanguageContext';
import '../animations/scenes.css';

const LOOK: Record<DestinationId, { bg: string; size: string; glow: string }> = {
  moon: { bg: 'radial-gradient(circle at 30% 30%, #f1f2f6, #7a7d88 60%, #2a2c35)', size: 'h-28 w-28 sm:h-36 sm:w-36', glow: '0 0 40px #cbd5e155' },
  mars: { bg: 'radial-gradient(circle at 30% 30%, #ffb27a, #c4572b 60%, #4a1d0e)', size: 'h-32 w-32 sm:h-44 sm:w-44', glow: '0 0 50px #f9731655' },
  'deep-space': { bg: 'radial-gradient(circle at 50% 50%, #c4b5fd, #7c3aed 45%, #1e1b4b 80%)', size: 'h-32 w-32 sm:h-44 sm:w-44', glow: '0 0 60px #a855f788' },
};

function DecorIcon({ obj }: { obj: DecorativeObject }) {
  const stroke = '#cbd5e1';
  if (obj.kind === 'iss') {
    return (<svg viewBox="0 0 60 30" className="h-8 w-14" aria-hidden="true"><rect x="26" y="12" width="8" height="6" fill={stroke} /><rect x="2" y="4" width="20" height="8" fill="#2f5fb3" /><rect x="38" y="4" width="20" height="8" fill="#2f5fb3" /><rect x="2" y="18" width="20" height="8" fill="#2f5fb3" /><rect x="38" y="18" width="20" height="8" fill="#2f5fb3" /><path d="M22 15 H38" stroke={stroke} strokeWidth="2" /></svg>);
  }
  if (obj.kind === 'shuttle') {
    return (<svg viewBox="0 0 60 30" className="h-8 w-14" aria-hidden="true"><path d="M4 16 L40 10 L56 15 L40 20Z" fill="#eef1f6" /><path d="M20 15 L34 4 L38 11Z M20 17 L34 27 L38 20Z" fill={stroke} /></svg>);
  }
  return (<svg viewBox="0 0 20 40" className="h-10 w-5" aria-hidden="true"><path d="M10 0 C15 8 16 16 16 28 H4 C4 16 5 8 10 0Z" fill="#eef1f6" /><path d="M4 28 L0 38 L6 33Z M16 28 L20 38 L14 33Z" fill="#c24a3b" /></svg>);
}

export default function SpaceScene() {
  const { s, tx } = useLang();
  const destinations = getDestinations();
  const decor = getDecorativeObjects();
  const [selected, setSelected] = useState<DestinationId | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const sel = destinations.find((d) => d.id === selected);

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center gap-6 overflow-hidden px-4 py-8 text-center">
      <StarField count={150} drift seed={3} />
      <h1 className="relative text-3xl font-bold sm:text-5xl">{s.whereStart}</h1>

      <div className="relative flex w-full max-w-5xl flex-1 flex-wrap items-center justify-around gap-8 py-4">
        {/* Earth with decorative objects: not a destination */}
        <div className="relative flex h-28 w-28 items-center justify-center sm:h-36 sm:w-36" aria-hidden="false">
          <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #7dd3fc, #2563eb 55%, #0b1b4a)', boxShadow: '0 0 40px #3b82f655' }} aria-hidden="true" />
          {decor.slice(0, 2).map((o, i) => (
            <div key={o.id} className="a-orbit absolute inset-[-24px]" style={{ animationDuration: `${14 + i * 6}s`, animationDirection: i ? 'reverse' : 'normal', animationPlayState: tip === o.id ? 'paused' : 'running' }}>
              <button type="button" className="absolute left-1/2 top-0 -translate-x-1/2 rounded bg-black/30 p-1"
                aria-label={`${tx(o.name)}: ${tx(o.tooltip)}`}
                onFocus={() => setTip(o.id)} onBlur={() => setTip(null)}
                onMouseEnter={() => setTip(o.id)} onMouseLeave={() => setTip(null)}>
                <DecorIcon obj={o} />
              </button>
            </div>
          ))}
        </div>

        {destinations.map((d, i) => {
          const look = LOOK[d.id];
          const active = selected === d.id;
          return (
            <button key={d.id} type="button" onClick={() => setSelected(d.id)} onMouseEnter={() => setSelected(d.id)} onFocus={() => setSelected(d.id)}
              aria-pressed={active}
              className={`group flex flex-col items-center gap-3 rounded-3xl p-3 transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-white ${active ? 'scale-110' : 'hover:scale-105'}`}>
              <span className={`a-float block rounded-full ${look.size}`} style={{ background: look.bg, boxShadow: look.glow, animationDelay: `${i * 0.8}s`, outline: active ? `4px solid ${d.themeColor}` : 'none', outlineOffset: 6 }} />
              <span className="text-xl font-bold" style={{ color: d.themeColor }}>{tx(d.name)}</span>
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[8.5rem] w-full max-w-xl" aria-live="polite">
        {tip && (
          <p className="card mx-auto text-sm">
            <b>{tx(decor.find((o) => o.id === tip)?.name)}:</b> {tx(decor.find((o) => o.id === tip)?.tooltip)}
          </p>
        )}
        {!tip && sel && (
          <div className="card mx-auto space-y-3">
            <p>{tx(sel.tagline)}</p>
            <Link to={`/explore/${sel.id}`} className="btn">{s.exploreDest} {tx(sel.name)}</Link>
          </div>
        )}
      </div>
      <p className="relative text-sm opacity-70">{s.notToScale}</p>
    </main>
  );
}
