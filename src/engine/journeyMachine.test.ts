import { describe, it, expect } from 'vitest';
import { initialState, journeyReducer as r, JourneyState, JourneyEvent } from './journeyMachine';

const run = (s: JourneyState, ...es: JourneyEvent[]) => es.reduce(r, s);
const ready = (n = 3) =>
  run(initialState(n), { type: 'ASSETS_READY' }, { type: 'ENTER_DONE' }, { type: 'SKIP' });
const next = { type: 'NEXT', hasQuiz: false, stageId: 'x' } as const;

describe('journey machine', () => {
  it('loads, enters, then plays', () => {
    expect(run(initialState(3), { type: 'ASSET_FAILED' }).phase).toBe('entering');
    expect(run(initialState(3), { type: 'ASSETS_READY' }, { type: 'ENTER_DONE' }).phase).toBe('playing');
  });
  it('pauses and resumes', () => {
    const p = run(initialState(3), { type: 'ASSETS_READY' }, { type: 'ENTER_DONE' }, { type: 'PAUSE' });
    expect(p.phase).toBe('paused');
    expect(r(p, { type: 'RESUME' }).phase).toBe('playing');
  });
  it('allows Next while the animation is still playing', () => {
    const s = run(initialState(3), { type: 'ASSETS_READY' }, { type: 'ENTER_DONE' }, next);
    expect(s.phase).toBe('transitioning');
    expect(s.targetIndex).toBe(1);
  });
  it('advances after the transition and tracks the furthest stage', () => {
    const s = run(ready(), next, { type: 'TRANSITION_DONE' });
    expect(s).toMatchObject({ phase: 'entering', stageIndex: 1, furthestStage: 1 });
  });
  it('ignores PREV at stage 0 (router handles it)', () => {
    expect(r(ready(), { type: 'PREV' }).phase).toBe('ready');
  });
  it('limits JUMP_TO to the furthest stage reached', () => {
    const s = run(ready(4), next, { type: 'TRANSITION_DONE' }, { type: 'ENTER_DONE' }, { type: 'SKIP' });
    expect(r(s, { type: 'JUMP_TO', index: 3 })).toBe(s);
    expect(r(s, { type: 'JUMP_TO', index: 0 }).targetIndex).toBe(0);
  });
  it('opens the quiz once and never blocks after answering', () => {
    const q = { type: 'NEXT', hasQuiz: true, stageId: 'a' } as const;
    let s = r(ready(), q);
    expect(s.phase).toBe('quiz');
    s = r(s, { type: 'ANSWER', stageId: 'a' });
    expect(s.phase).toBe('ready');
    expect(r(s, q).phase).toBe('transitioning');
  });
  it('lets the quiz be skipped', () => {
    const s = run(ready(), { type: 'NEXT', hasQuiz: true, stageId: 'a' }, { type: 'SKIP' });
    expect(s.phase).toBe('ready');
  });
  it('completes the journey on NEXT at the last stage', () => {
    expect(r(ready(1), next).phase).toBe('completed');
  });
  it('resets Explore More when the stage changes', () => {
    const s = run(ready(), { type: 'TOGGLE_EXPLORE_MORE' });
    expect(s.exploreMoreOpen).toBe(true);
    expect(r(s, next).exploreMoreOpen).toBe(false);
  });
  it('replays the animation', () => {
    expect(r(ready(), { type: 'REPLAY' }).phase).toBe('playing');
  });
});
