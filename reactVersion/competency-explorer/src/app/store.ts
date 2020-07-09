import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { State } from '../models';


import { competencies } from '../reducers/competencies';
import { hiddenLevels } from '../reducers/filters';
import { categories } from '../reducers/categories';
import { levels } from '../reducers/levels';
import { displayMode } from '../reducers/displayMode';

export const store = configureStore<State>({
  reducer: {
    categories,
    levels,
    competencies,
    hiddenLevels,
    displayMode
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
