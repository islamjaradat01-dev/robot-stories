import { useMemo } from 'react';

// Small seeded generator so the stars are the same on every render.
function rng(seed: number) {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
}

interface Props { count?: number; drift?: boolean; seed?: number; className?: string }

/**
 * Decorative stars drawn as round dots (so they never stretch on tall pages).
 * The layer is always left-to-right: it holds no text, and a fixed direction keeps the
 * sideways drift and positions identical in English and Arabic.
 */
export default function StarField({ count = 90, drift = false, seed = 7, className = '' }: Props) {
  const stars = useMemo(() => {
    const r = rng(seed);
    return Array.from({ length: count }, (_, i) => ({
      id: i, x: r() * 100, y: r() * 100, size: 1 + r() * 2, delay: r() * 4, dur: 2 + r() * 4,
    }));
  }, [count, seed]);
  const copies = drift ? [0, 1] : [0];

  return (
    <div aria-hidden="true" dir="ltr" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className={drift ? 'star-drift' : ''} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: drift ? '200%' : '100%' }}>
        {copies.map((copy) => (
          <div key={copy} style={{ position: 'absolute', top: 0, height: '100%', width: drift ? '50%' : '100%', left: copy ? '50%' : 0 }}>
            {stars.map((s) => (
              <span key={s.id} className="star-twinkle" style={{
                position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size,
                borderRadius: '50%', background: '#fff', animationDelay: `${s.delay}s`, animationDuration: `${s.dur}s`,
              }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
