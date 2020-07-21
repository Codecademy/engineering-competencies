import { State, Level } from '../models';

export const selectLevels = (state: State) => state.levels;

export const selectLevelIndex = (state: State, level: Level) => {
    const { levels } = state;
    const lIdx = [...levels].indexOf(level);
    return lIdx;
}