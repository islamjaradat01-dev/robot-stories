import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assetSrc, getAsset } from '../data';
import type { Mission } from '../data/schema';
import CraftIcon from '../animations/CraftIcon';
import { useLang } from '../i18n/LanguageContext';

export default function MissionCard({ mission }: { mission: Mission }) {
  const { s, tx, fmt } = useLang();
  const [failed, setFailed] = useState(false);
  const asset = getAsset(mission.card.assetId);
  // Cards show only mission-specific photos. Generic scene images (core-*) fall back to the craft illustration.
  const showImg = asset?.type === 'image' && asset.authenticity === 'real' && !asset.id.startsWith('core-') && !failed;
  return (
    <Link to={`/mission/${mission.id}`}
      className="group card flex flex-col gap-3 border-2 border-transparent p-0 transition hover:-translate-y-1 hover:border-cyan focus-visible:outline focus-visible:outline-4 focus-visible:outline-white">
      <div className="relative h-40 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#101846] to-[#241553]">
        {showImg ? (
          <img src={assetSrc(asset!.path)} alt={tx(asset!.altText)} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)}
            className="h-full w-full object-cover transition group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center"><CraftIcon type={mission.missionType} className="w-28 opacity-90" /></div>
        )}
      </div>
      <div className="space-y-1 px-5 pb-5">
        <h3 className="text-xl font-bold">{tx(mission.name)}</h3>
        <p className="text-sm text-white/80">{tx(mission.card.tagline)}</p>
        <p className="text-xs text-cyan">{fmt(s.chaptersCount, { n: mission.stages.length })}</p>
      </div>
    </Link>
  );
}
