export type Phase =
  | 'loading' | 'entering' | 'playing' | 'paused' | 'ready' | 'quiz' | 'transitioning' | 'completed';

export interface JourneyState {
  phase: Phase;
  stageIndex: number;
  stageCount: number;
  furthestStage: number;
  answered: string[];
  exploreMoreOpen: boolean;
  /** index we are moving to while phase === 'transitioning' */
  targetIndex: number | null;
}

export type JourneyEvent =
  | { type: 'ASSETS_READY' } | { type: 'ASSET_FAILED' }
  | { type: 'ENTER_DONE' } | { type: 'ANIMATION_DONE' }
  | { type: 'PAUSE' } | { type: 'RESUME' } | { type: 'REPLAY' } | { type: 'SKIP' }
  | { type: 'NEXT'; hasQuiz: boolean; stageId: string }
  | { type: 'PREV' } | { type: 'JUMP_TO'; index: number }
  | { type: 'ANSWER'; stageId: string }
  | { type: 'TRANSITION_DONE' }
  | { type: 'TOGGLE_EXPLORE_MORE' };

export function initialState(stageCount: number, startAt = 0): JourneyState {
  return {
    phase: 'loading', stageIndex: startAt, stageCount, furthestStage: startAt,
    answered: [], exploreMoreOpen: false, targetIndex: null,
  };
}

const inStage = (p: Phase) =>
  p === 'entering' || p === 'playing' || p === 'paused' || p === 'ready' || p === 'quiz';

function goTo(s: JourneyState, index: number): JourneyState {
  return { ...s, phase: 'transitioning', targetIndex: index, exploreMoreOpen: false };
}

/** Pure reducer. EXIT and PREV at stage 0 are handled by the router, not here. */
export function journeyReducer(s: JourneyState, e: JourneyEvent): JourneyState {
  switch (e.type) {
    case 'ASSETS_READY':
    case 'ASSET_FAILED':
      return s.phase === 'loading' ? { ...s, phase: 'entering' } : s;
    case 'ENTER_DONE':
      return s.phase === 'entering' ? { ...s, phase: 'playing' } : s;
    case 'ANIMATION_DONE':
    case 'SKIP':
      if (s.phase === 'playing' || s.phase === 'paused') return { ...s, phase: 'ready' };
      if (s.phase === 'quiz' && e.type === 'SKIP') return { ...s, phase: 'ready' };
      return s;
    case 'PAUSE':
      return s.phase === 'playing' ? { ...s, phase: 'paused' } : s;
    case 'RESUME':
      return s.phase === 'paused' ? { ...s, phase: 'playing' } : s;
    case 'REPLAY':
      return s.phase === 'ready' ? { ...s, phase: 'playing' } : s;
    case 'TOGGLE_EXPLORE_MORE':
      return inStage(s.phase) ? { ...s, exploreMoreOpen: !s.exploreMoreOpen } : s;
    case 'ANSWER':
      if (s.phase !== 'quiz') return s;
      return {
        ...s, phase: 'ready',
        answered: s.answered.includes(e.stageId) ? s.answered : [...s.answered, e.stageId],
      };
    case 'NEXT': {
      if (!inStage(s.phase)) return s;
      if (e.hasQuiz && !s.answered.includes(e.stageId) && s.phase !== 'quiz') return { ...s, phase: 'quiz' };
      if (s.stageIndex >= s.stageCount - 1) {
        return { ...s, phase: 'completed', furthestStage: s.stageCount - 1 };
      }
      return goTo(s, s.stageIndex + 1);
    }
    case 'PREV':
      return inStage(s.phase) && s.stageIndex > 0 ? goTo(s, s.stageIndex - 1) : s;
    case 'JUMP_TO':
      return inStage(s.phase) && e.index >= 0 && e.index <= s.furthestStage && e.index !== s.stageIndex
        ? goTo(s, e.index)
        : s;
    case 'TRANSITION_DONE':
      if (s.phase !== 'transitioning' || s.targetIndex === null) return s;
      return {
        ...s, phase: 'entering', stageIndex: s.targetIndex, targetIndex: null,
        furthestStage: Math.max(s.furthestStage, s.targetIndex),
      };
  }
}
