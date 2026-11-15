import { Link } from 'react-router-dom';
import StarField from '../components/StarField';
import { useLang } from '../i18n/LanguageContext';

export default function Welcome() {
  const { s } = useLang();
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 overflow-hidden px-4 py-10 text-center">
      <StarField count={140} drift />
      <div aria-hidden="true" className="a-float absolute -bottom-24 h-64 w-[130%] rounded-[50%] bg-gradient-to-t from-[#1d4ed8] via-[#2563eb]/40 to-transparent blur-sm" />
      <h1 className="a-appear relative text-4xl font-extrabold sm:text-6xl">{s.welcomeTitle}</h1>
      <p className="a-appear relative max-w-xl" style={{ animationDelay: '0.5s' }}>{s.welcomeLine1}</p>
      <p className="a-appear relative max-w-xl text-xl font-semibold text-cyan" style={{ animationDelay: '1s' }}>{s.welcomeLine2}</p>
      <p className="a-appear relative max-w-xl" style={{ animationDelay: '1.5s' }}>{s.welcomeLine3}</p>
      <Link to="/explore" className="a-appear btn relative mt-2" style={{ animationDelay: '2s' }}>{s.startJourney}</Link>
    </main>
  );
}
