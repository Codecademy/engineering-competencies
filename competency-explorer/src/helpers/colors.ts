import { Level } from '../models';
import { getLevelIndex } from './levelDirection';

const MIN_OPACITY = 0.4;

export const getLevelOpacity = (originLevel: Level, level: Level, levels: Level[]) => {
  if (originLevel === level) {
    return 1;
  }
  const idx = getLevelIndex(originLevel, levels);
  const len = levels.length;

  return MIN_OPACITY + ((1 - MIN_OPACITY) / len) * idx;
};
