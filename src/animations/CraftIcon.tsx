import type { MissionType } from '../data/schema';

/** Simple illustrated spacecraft. These are illustrations, not real images. */
export default function CraftIcon({ type, className = '' }: { type: MissionType; className?: string }) {
  const common = { viewBox: '0 0 120 80', className, 'aria-hidden': true as const };
  const body = '#d9dde6', dark = '#3a4256', gold = '#d4a437', panel = '#2f5fb3', accent = '#22d3ee';
  switch (type) {
    case 'rover':
    case 'surface-vehicle':
      return (
        <svg {...common}>
          <rect x="30" y="30" width="60" height="18" rx="4" fill={body} />
          <rect x="22" y="22" width="76" height="6" fill={panel} />
          <rect x="56" y="8" width="4" height="16" fill={dark} /><circle cx="58" cy="8" r="5" fill={accent} />
          {[28, 60, 92].map((x) => (<g key={x}><circle cx={x} cy="58" r="9" fill={dark} /><circle cx={x} cy="58" r="3" fill={body} /></g>))}
        </svg>
      );
    case 'helicopter':
      return (
        <svg {...common}>
          <rect x="6" y="14" width="108" height="3" rx="1.5" fill={dark} />
          <rect x="57" y="17" width="6" height="12" fill={dark} />
          <rect x="44" y="29" width="32" height="22" rx="6" fill={body} />
          <rect x="36" y="22" width="48" height="5" fill={panel} />
          <path d="M44 56 L36 72 M76 56 L84 72" stroke={dark} strokeWidth="3" />
        </svg>
      );
    case 'orbiter':
    case 'flyby-probe':
      return (
        <svg {...common}>
          <rect x="4" y="32" width="26" height="14" fill={panel} /><rect x="90" y="32" width="26" height="14" fill={panel} />
          <rect x="30" y="36" width="60" height="6" fill={dark} />
          <rect x="46" y="28" width="28" height="22" rx="3" fill={gold} />
          <path d="M60 24 L38 6 Q60 -2 82 6 Z" fill={body} />
          <circle cx="60" cy="14" r="2.5" fill={accent} />
        </svg>
      );
    case 'space-telescope':
      return (
        <svg {...common}>
          <rect x="6" y="34" width="22" height="12" fill={panel} /><rect x="92" y="34" width="22" height="12" fill={panel} />
          <rect x="34" y="22" width="52" height="36" rx="6" fill={body} />
          <circle cx="86" cy="40" r="12" fill={dark} /><circle cx="86" cy="40" r="7" fill={accent} opacity="0.7" />
        </svg>
      );
    case 'instrument-package':
      return (
        <svg {...common}>
          <rect x="34" y="40" width="52" height="22" rx="3" fill={gold} />
          <path d="M60 40 L60 12" stroke={dark} strokeWidth="3" /><path d="M46 14 L74 14 L60 24 Z" fill={body} />
          <rect x="14" y="52" width="16" height="10" fill={dark} /><rect x="90" y="52" width="16" height="10" fill={dark} />
        </svg>
      );
    case 'crewed-lander-stage':
      return (
        <svg {...common}>
          <path d="M34 26 L86 26 L96 44 L24 44 Z" fill={gold} />
          <rect x="34" y="44" width="52" height="8" fill={dark} />
          <path d="M34 52 L16 72 M86 52 L104 72 M60 52 L60 72" stroke={body} strokeWidth="3" />
          <rect x="10" y="70" width="12" height="4" fill={body} /><rect x="98" y="70" width="12" height="4" fill={body} />
        </svg>
      );
    case 'lander':
    default:
      return (
        <svg {...common}>
          <rect x="34" y="26" width="52" height="24" rx="4" fill={body} />
          <rect x="20" y="22" width="80" height="5" fill={panel} />
          <path d="M40 50 L22 72 M80 50 L98 72" stroke={dark} strokeWidth="3" />
          <path d="M60 26 L60 10" stroke={dark} strokeWidth="3" /><circle cx="60" cy="9" r="5" fill={accent} />
        </svg>
      );
  }
}
