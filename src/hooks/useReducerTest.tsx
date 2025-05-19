import type { Action } from '../models/Actions';

export const useReducerTest = (state: number[], action: Action): number[] => {
  switch (action.type) {
    case 'add':
      return state.length === 0
        ? [0]
        : [
            ...state,
            Number(
              Math.floor(
                Math.random() *
                  (state[state.length - 1] + 1 - state[state.length - 1] + 1)
              ) + state[state.length - 1].toFixed(2)
            ),
          ];
      break;
    case 'sub':
      return state.length === 0
        ? [0]
        : [
            ...state,
            Number(
              Math.floor(
                Math.random() *
                  (state[state.length - 1] -
                    (state[state.length - 1] - 1) +
                    1) +
                  (state[state.length - 1] - 1)
              ).toFixed(2)
            ),
          ];
      break;
    case 'clean':
      return [];
      break;
  }
};
