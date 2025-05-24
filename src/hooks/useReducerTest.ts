import type { Action } from '../models/Actions';

export const useReducerTest = (state: number[], action: Action): number[] => {
  switch (action.type) {
    case 'add':
      return state.length === 0
        ? [0]
        : [...state, state[state.length - 1] + Math.random()];
      break;
    case 'sub':
      return state.length === 0
        ? [0]
        : [...state, state[state.length - 1] - Math.random()];
      break;
    case 'clean':
      return [];
      break;
  }
};
