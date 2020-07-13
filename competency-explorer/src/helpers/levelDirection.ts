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

// export const isFirstLevelWithCompetency = (
//   level: Level,
//   competency: Competency
// ): boolean => {
//   for (let l of competency.levels) {
//     if (getLevelDirection(level, l) === LevelDirection.B_BEFORE_A) {
//       return false;
//     }
//   }
//   return true;
// };

// export const isContinuationOfCompetency = (
//   level: Level,
//   competency: ICompetency
// ): boolean => {
//   if (competency.levels.length === 1) {
//     return false;
//   }
//   return !isFirstLevelWithCompetency(level, competency);
// };

// export const getOriginLevel = (competency: ICompetency) => {
//   const sortedLevels = competency.levels.sort(getLevelDirection);
//   return sortedLevels[0];
// };
