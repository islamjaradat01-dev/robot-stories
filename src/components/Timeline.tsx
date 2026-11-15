import type { Mission } from '../data/schema';
import { getSource } from '../data';
import { useLang } from '../i18n/LanguageContext';
import BasisBadge from './BasisBadge';

/** Dated milestones. Dates are language neutral; each event links to its NASA source. */
export default function Timeline({ mission }: { mission: Mission }) {
  const { tx } = useLang();
  return (
    <ol className="relative space-y-4 border-s-2 border-cyan/40 ps-5">
      {mission.timeline.map((e) => {
        const src = getSource(e.sourceId);
        return (
          <li key={e.id} className="relative">
            <span aria-hidden="true" className="absolute -start-[1.65rem] top-1.5 h-3 w-3 rounded-full bg-cyan" />
            <p className="text-sm font-semibold text-cyan" dir="ltr" style={{ unicodeBidi: 'plaintext' }}>{e.dateLabel}</p>
            <p>{tx(e.label)}<BasisBadge basis={e.basis} /></p>
            {src && <a href={src.url} target="_blank" rel="noreferrer" className="text-xs text-white/60 underline">{src.publisher}</a>}
          </li>
        );
      })}
    </ol>
  );
}
