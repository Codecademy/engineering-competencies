import { getLevelIndex } from "./levelDirection";
import { STATE } from "../models/state";
import { Level } from "../models/competency";

const MIN_OPACITY = 0.4;

export const getLevelOpacity = (originLevel: Level, level: Level) => {
  if (originLevel === level) {
    return 1;
  }
  const idx = getLevelIndex(originLevel);
  const len = STATE.get("levels").length;

  return MIN_OPACITY + ((1 - MIN_OPACITY) / len) * idx;
};
