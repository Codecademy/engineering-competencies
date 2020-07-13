import { State } from '../models';

export const selectDisplayMode = (state: State) => state.displayMode;

export const selectHiddenLevels = (state: State) => state.hiddenLevels;