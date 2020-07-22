import { Level } from "../models";

const MIN_OPACITY = 0.7;

export const getLevelOpacity = (level: Level) => {
  if (level === "other") {
    return MIN_OPACITY;
  }
  return 1;
};
