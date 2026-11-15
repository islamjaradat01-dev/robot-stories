import { Link, useParams } from 'react-router-dom';
import AssetImage from '../components/AssetImage';
import Timeline from '../components/Timeline';
import StarField from '../components/StarField';
import { useLang } from '../i18n/LanguageContext';
import { useMission } from './useMission';

function RelatedLink({ id }: { id: string }) {
  const { tx } = useLang();
  const { mission } = useMission(id);
  if (!mission) return null;
  return <Link to={`/mission/${id}`} className="btn-ghost !py-2 !text-base">{tx(mission.name)}</Link>;
}

export default function MissionIntro() {
  const { missionId } = useParams();
  const { s, tx } = useLang();
  const { mission, loading } = useMission(missionId);
  if (loading) return <main className="p-8">{s.loading}</main>;
  if (!mission) return <main className="p-8"><p className="mb-4">{s.notFound}</p><Link to="/explore" className="btn">{s.backToSpace}</Link></main>;
  const I = mission.intro;
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-8">
      <StarField count={60} seed={9} />
      <div className="relative space-y-6">
        <Link to={`/explore/${mission.destinationId}`} className="btn-ghost">{s.back}</Link>
        <h1 className="text-4xl font-bold">{tx(mission.name)}</h1>
        {import.meta.env.DEV && mission.unverified && <p className="rounded bg-amber-300/20 px-3 py-1 text-sm text-amber-200">{s.draftBanner}</p>}
        <AssetImage assetId={I.assetId} />
        <dl className="space-y-4">
          <div><dt className="font-bold text-cyan">{s.whatIsIt}</dt><dd>{tx(I.whatItIs)}</dd></div>
          <div><dt className="font-bold text-cyan">{s.whyMade}</dt><dd>{tx(I.whyCreated)}</dd></div>
          <div><dt className="font-bold text-cyan">{s.nasaWanted}</dt><dd>{tx(I.goal)}</dd></div>
          <div><dt className="font-bold text-cyan">{s.whereGoing}</dt><dd>{tx(I.whereGoing)}</dd></div>
        </dl>
        <Link to={`/mission/${mission.id}/journey/1`} className="btn">{s.beginJourney}</Link>

        <section>
          <h2 className="mb-3 text-2xl font-bold">{s.timeline}</h2>
          <Timeline mission={mission} />
        </section>

        {mission.relatedMissionIds && mission.relatedMissionIds.length > 0 && (
          <section>
            <h2 className="mb-3 text-xl font-bold">{s.relatedJourneys}</h2>
            <div className="flex flex-wrap gap-2">
              {mission.relatedMissionIds.map((id) => <RelatedLink key={id} id={id} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
