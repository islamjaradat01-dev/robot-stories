import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Header() {
  const { s, lang, setLang } = useLang();
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-white/10 bg-space/80 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex items-center gap-2 text-lg font-bold sm:text-xl">
        <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_#22d3ee]" />
        {s.appName}
      </Link>
      <button type="button" className="btn-ghost !px-4 !py-2" aria-label={s.languageLabel}
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
        {s.language}
      </button>
    </header>
  );
}
