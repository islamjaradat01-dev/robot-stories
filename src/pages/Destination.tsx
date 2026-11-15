import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarField from '../components/StarField';
import MissionCard from '../components/MissionCard';
import { getDestinations, listMissionIds, loadMission } from '../data';
import type { Mission } from '../data/schema';
import { useLang } from '../i18n/LanguageContext';

export default function Destination() {
  const { destinationId } = useParams();
  const { s, tx } = useLang();
  const dest = getDestinations().find((d) => d.id === destinationId);
  const [missions, setMissions] = useState<Mission[] | null>(null);

  useEffect(() => {
    setMissions(null);
    Promise.all(listMissionIds().map(loadMission)).then((all) =>
      setMissions(all.filter((m): m is Mission => !!m && m.destinationId === destinationId)
        .sort((a, b) => a.card.order - b.card.order)),
    );
  }, [destinationId]);

  if (!dest) return <main className="p-8"><Link to="/explore" className="btn">{s.backToSpace}</Link></main>;

  // Group cards by type (e.g. Apollo landers, rovers) keeping the authored order.
  const groups: { key: string; items: Mission[] }[] = [];
  (missions ?? []).forEach((m) => {
    const key = m.card.group ?? 'other';
    const g = groups.find((x) => x.key === key);
    if (g) g.items.push(m); else groups.push({ key, items: [m] });
  });

  return (
    <main className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-5xl px-4 py-8">
      <StarField count={80} seed={5} />
      <div className="relative">
        <Link to="/explore" className="btn-ghost">{s.back}</Link>
        <h1 className="mt-6 text-4xl font-bold" style={{ color: dest.themeColor }}>{tx(dest.name)}</h1>
        <p className="mb-8 mt-2 max-w-2xl">{tx(dest.tagline)}</p>
        {missions === null && <p>{s.loading}</p>}
        {missions && missions.length === 0 && <p className="opacity-70">{s.noMissions}</p>}
        {groups.map((g) => (
          <section key={g.key} className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-cyan">{(s.group as Record<string, string>)[g.key] ?? ''}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((m) => <MissionCard key={m.id} mission={m} />)}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
