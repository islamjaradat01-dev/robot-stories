import { useState } from 'react';
import { assetSrc, getAsset } from '../data';
import { useLang } from '../i18n/LanguageContext';

/** Shows a NASA image with its credit and a real/illustration label. Hides itself if the image cannot load. */
export default function AssetImage({ assetId, className = '' }: { assetId: string; className?: string }) {
  const { s, tx } = useLang();
  const [failed, setFailed] = useState(false);
  // Wide pictures fill the frame; square and tall ones are shown whole instead of being cropped to a thin band.
  const [whole, setWhole] = useState(false);
  const asset = getAsset(assetId);
  if (!asset || asset.type !== 'image' || failed) return null;
  return (
    <figure className={`overflow-hidden rounded-2xl bg-panel ${className}`}>
      <img src={assetSrc(asset.path)} alt={tx(asset.altText)} loading="lazy" referrerPolicy="no-referrer"
        onLoad={(e) => setWhole(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight < 1.3)}
        onError={() => setFailed(true)}
        className={`max-h-72 w-full ${whole ? 'bg-black object-contain' : 'object-cover'}`} />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-xs text-white/80">
        <span>{s.creditPrefix}: <bdi dir="ltr">{asset.credit}</bdi></span>
        <span className={asset.authenticity === 'real' ? 'text-cyan' : 'text-amber-300'}>
          {asset.authenticity === 'real' ? s.realPhoto : s.reconstruction}
        </span>
      </figcaption>
    </figure>
  );
}
