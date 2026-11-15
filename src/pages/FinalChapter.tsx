import { Link, useParams } from 'react-router-dom';
import StarField from '../components/StarField';
import { getSource } from '../data';
import { useLang } from '../i18n/LanguageContext';
import { useMission } from './useMission';

export default function FinalChapter() {
  const { missionId } = useParams();
  const { s, tx } = useLang();
  const { mission, loading } = useMission(missionId);
  if (loading) return <main className="p-8">{s.loading}</main>;
  if (!mission) return <main className="p-8"><Link to="/explore" className="btn">{s.backToSpace}</Link></main>;
  const e = mission.ending;
  const sourceIds = Array.from(new Set(mission.stages.flatMap((x) => x.sourceIds)));
  return (
    <main className="relative mx-auto flex max-w-2xl flex-col gap-5 px-4 py-8">
      <StarField count={100} seed={13} />
      <div className="relative flex flex-col gap-5">
        <h1 className="text-4xl font-bold">{tx(mission.name)}</h1>
        <h2 className="text-2xl font-semibold text-cyan">{s.statusTitle}</h2>
        <div className="card space-y-1">
          <p><b className="text-cyan">{s.status}:</b> {s.endCause[e.endCause]}{e.endingBasis === 'challenge-page' && <span className="text-amber-200"> ({s.perChallenge})</span>}</p>
          <p><b className="text-cyan">{s.whereNow}</b> {s.location[e.currentLocation]}</p>
          <p><b className="text-cyan">{s.stillOperating}</b> {e.stillOperating ? s.yes : s.no}</p>
          {e.endingBasis === 'challenge-page' && <p className="text-sm text-amber-200">{s.endingBasisChallenge}</p>}
        </div>
        <p>{tx(e.finalChapterText)}</p>
        <p>{tx(e.legacyText)}</p>

        {mission.discoveries.length > 0 && (
          <section>
            <h2 className="mb-2 text-xl font-bold">{s.discoveriesTitle}</h2>
            <ul className="list-disc space-y-1 ps-6">
              {mission.discoveries.map((d) => <li key={d.id}><b>{tx(d.title)}.</b> {tx(d.summary)}</li>)}
            </ul>
          </section>
        )}

        {e.notStated && e.notStated.length > 0 && (
          <section className="card text-sm">
            <h2 className="mb-2 font-bold text-amber-200">{s.notStatedTitle}</h2>
            <ul className="list-disc space-y-1 ps-5">{e.notStated.map((t, i) => <li key={i}>{tx(t)}</li>)}</ul>
          </section>
        )}

        {mission.badge && <p className="rounded-full bg-cyan/20 px-4 py-2 text-center font-bold">★ {s.badgeEarned}: {tx(mission.badge.name)}</p>}

        <p className="text-xl font-bold">{s.legacyClosing}</p>
        <div className="flex flex-wrap gap-3">
          <Link to={`/explore/${mission.destinationId}`} className="btn">{s.nextExplorer}</Link>
          <Link to={`/mission/${mission.id}/journey/1`} className="btn-ghost">{s.replay}</Link>
          <Link to="/explore" className="btn-ghost">{s.changeDestination}</Link>
        </div>

        <footer className="text-xs opacity-70">
          {s.sources}: {sourceIds.map(getSource).filter(Boolean).map((x, i) => (
            <span key={x!.id}>{i > 0 && ' · '}<a href={x!.url} className="underline" target="_blank" rel="noreferrer">{x!.title}</a></span>
          ))}
        </footer>
      </div>
    </main>
  );
}
