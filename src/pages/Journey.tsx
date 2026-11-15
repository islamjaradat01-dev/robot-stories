import { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { initialState, journeyReducer } from '../engine/journeyMachine';
import { getSource } from '../data';
import type { Mission } from '../data/schema';
import StageScene, { SCENE_MS } from '../animations/StageScene';
import AssetImage from '../components/AssetImage';
import BasisBadge from '../components/BasisBadge';
import { useLang } from '../i18n/LanguageContext';
import { useMission } from './useMission';

export default function Journey() {
  const { missionId } = useParams();
  const { s } = useLang();
  const { mission, loading } = useMission(missionId);
  if (loading) return <main className="p-8">{s.loading}</main>;
  if (!mission) return <main className="p-8">{s.notFound}</main>;
  return <Player mission={mission} />;
}

function Player({ mission }: { mission: Mission }) {
  const nav = useNavigate();
  const { s, tx, fmt } = useLang();
  const { stageNumber } = useParams();
  const start = Math.min(Math.max(Number(stageNumber) - 1 || 0, 0), mission.stages.length - 1);
  const [st, dispatch] = useReducer(journeyReducer, initialState(mission.stages.length, start));
  const [runKey, setRunKey] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const stage = mission.stages[st.stageIndex];

  // Phase side effects: the state machine stays pure, timers and routing live here.
  useEffect(() => {
    if (st.phase === 'loading') dispatch({ type: 'ASSETS_READY' });
    if (st.phase === 'entering') { const t = setTimeout(() => dispatch({ type: 'ENTER_DONE' }), 250); return () => clearTimeout(t); }
    if (st.phase === 'transitioning') { const t = setTimeout(() => dispatch({ type: 'TRANSITION_DONE' }), 250); return () => clearTimeout(t); }
    if (st.phase === 'playing') { const t = setTimeout(() => dispatch({ type: 'ANIMATION_DONE' }), SCENE_MS); return () => clearTimeout(t); }
    if (st.phase === 'completed') nav(`/mission/${mission.id}/legacy`);
  }, [st.phase, nav, mission.id]);

  useEffect(() => { nav(`/mission/${mission.id}/journey/${st.stageIndex + 1}`, { replace: true }); setPicked(null); }, [st.stageIndex, mission.id, nav]);
  useEffect(() => { if (st.phase === 'playing') setRunKey((k) => k + 1); }, [st.phase === 'playing' && st.stageIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const sources = stage.sourceIds.map(getSource).filter(Boolean) as NonNullable<ReturnType<typeof getSource>>[];
  const photo = stage.assets.find((a) => a.role === 'gallery' || a.role === 'foreground');
  const hidden = st.phase === 'transitioning' || st.phase === 'loading';

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-5 px-4 py-6">
      <nav aria-label={s.progress} className="flex gap-2">
        {mission.stages.map((x, i) => (
          <button key={x.id} aria-label={`${i + 1}. ${tx(x.title)}`} aria-current={i === st.stageIndex} disabled={i > st.furthestStage}
            onClick={() => dispatch({ type: 'JUMP_TO', index: i })}
            className={`h-3 flex-1 rounded-full transition ${i === st.stageIndex ? 'bg-cyan' : i <= st.furthestStage ? 'bg-cyan/50' : 'bg-panel'}`} />
        ))}
      </nav>
      <p className="text-sm opacity-80">
        {fmt(s.chapterOf, { n: st.stageIndex + 1, total: st.stageCount })}
        {stage.dateLabel && <span dir="ltr" style={{ unicodeBidi: 'plaintext' }}> · {stage.dateLabel}</span>}
      </p>

      <div className={`transition-opacity duration-200 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
        <StageScene kind={stage.animationPreset} destinationId={mission.destinationId} craftType={mission.missionType}
          paused={st.phase === 'paused'} runKey={`${stage.id}-${runKey}`} />
        <p className="mt-1 text-xs opacity-60">{s.sceneNote}</p>
      </div>

      <h1 className="text-3xl font-bold sm:text-4xl">{tx(stage.title)}</h1>
      <p className="text-xl">{tx(stage.basicText)}</p>

      {photo && <AssetImage assetId={photo.assetId} />}

      {stage.exploreMoreText && (
        <div>
          <button className="btn-ghost" aria-expanded={st.exploreMoreOpen} onClick={() => dispatch({ type: 'TOGGLE_EXPLORE_MORE' })}>
            {st.exploreMoreOpen ? s.showLess : s.exploreMore}
          </button>
          {st.exploreMoreOpen && <p className="card mt-3">{tx(stage.exploreMoreText)}</p>}
        </div>
      )}
      {stage.facts.map((f) => (
        <p key={f.id} className="card">
          <b className="text-cyan">{s.didYouKnow} </b>{tx(f.text)}<BasisBadge basis={f.basis} />
          {f.note && <span className="mt-1 block text-sm text-white/70">{tx(f.note)}</span>}
        </p>
      ))}

      {st.phase === 'quiz' && stage.quiz && (
        <section className="card" aria-live="polite">
          <p className="font-bold">{s.quizTitle}: {tx(stage.quiz.prompt)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stage.quiz.options.map((o, i) => (
              <button key={i} disabled={picked !== null} onClick={() => { setPicked(i); }}
                className={`btn-ghost ${picked === i ? (o.isCorrect ? '!bg-green-500/30' : '!bg-red-500/30') : ''}`}>{tx(o.label)}</button>
            ))}
          </div>
          {picked !== null && (
            <div className="mt-3">
              <p>{stage.quiz.options[picked].isCorrect ? s.correct : s.notQuite} {tx(stage.quiz.explanation)}</p>
              <button className="btn mt-3" onClick={() => { dispatch({ type: 'ANSWER', stageId: stage.id }); dispatch({ type: 'NEXT', hasQuiz: true, stageId: stage.id }); }}>{s.next}</button>
            </div>
          )}
          {picked === null && <button className="mt-3 underline" onClick={() => dispatch({ type: 'SKIP' })}>{s.skip}</button>}
        </section>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button className="btn-ghost" onClick={() => (st.stageIndex === 0 ? nav(`/mission/${mission.id}`) : dispatch({ type: 'PREV' }))}>{s.previous}</button>
        {st.phase === 'playing' && <button className="btn-ghost" onClick={() => dispatch({ type: 'PAUSE' })}>{s.pause}</button>}
        {st.phase === 'paused' && <button className="btn-ghost" onClick={() => dispatch({ type: 'RESUME' })}>{s.resume}</button>}
        {(st.phase === 'playing' || st.phase === 'paused') && <button className="btn-ghost" onClick={() => dispatch({ type: 'SKIP' })}>{s.skip}</button>}
        {st.phase === 'ready' && <button className="btn-ghost" onClick={() => { setRunKey((k) => k + 1); dispatch({ type: 'REPLAY' }); }}>{s.replay}</button>}
        <button className="btn-ghost" onClick={() => nav(`/explore/${mission.destinationId}`)}>{s.exit}</button>
        <button className="btn ms-auto" disabled={st.phase === 'quiz'} onClick={() => dispatch({ type: 'NEXT', hasQuiz: !!stage.quiz, stageId: stage.id })}>{s.next}</button>
      </div>

      <footer className="text-xs opacity-70">
        {s.sources}: {sources.map((x, i) => (
          <span key={x.id}>{i > 0 && ' · '}<a href={x.url} className="underline" target="_blank" rel="noreferrer">{x.title}</a></span>
        ))}
      </footer>
    </main>
  );
}
