import { Level, Competency } from '../models';

export enum SortOrderEnum {
  CORRECT_ORDER = -1,
  SAME = 0,
  INCORRECT_ORDER = 1
}

export enum LevelDirection {
  A_BEFORE_B = SortOrderEnum.CORRECT_ORDER,
  EQUAL = SortOrderEnum.SAME,
  B_BEFORE_A = SortOrderEnum.INCORRECT_ORDER,
}

export const getLevelIndex = (level: Level, levels: Level[]) => {
  return levels.indexOf(level);
};

export const getLevelDirection = (levelA: Level, levelB: Level, levels: Level[]) => {
  const idxA = getLevelIndex(levelA, levels);
  const idxB = getLevelIndex(levelB, levels);
  if (idxA < idxB) {
    return LevelDirection.A_BEFORE_B;
  }
  if (idxA > idxB) {
    return LevelDirection.B_BEFORE_A;
  }

  return LevelDirection.EQUAL;
};
