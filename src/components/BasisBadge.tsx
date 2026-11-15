import type { Basis } from '../data/schema';
import { useLang } from '../i18n/LanguageContext';

/** Flags facts that are not plain verified NASA statements. Verified facts show nothing. */
export default function BasisBadge({ basis }: { basis: Basis }) {
  const { s } = useLang();
  if (basis === 'nasa-page') return null;
  const label = basis === 'disputed' ? s.basisDisputed : basis === 'challenge-page' ? s.basisChallenge : s.basisNotStated;
  return <span className="ms-2 inline-block rounded-full bg-amber-300/20 px-2 py-0.5 text-xs text-amber-200">{label}</span>;
}
