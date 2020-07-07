import { STATE } from "../models/state";
import { Level, ICompetency } from "../models/competency";

export const isLevelHidden = (level: Level) => {
  const hiddenLevels = STATE.get("hiddenLevels");
  return hiddenLevels.indexOf(level) !== -1;
};

export const isCompetencyHidden = (competency: ICompetency) => {
  for (let l of competency.levels) {
    if (!isLevelHidden(l)) {
      return false;
    }
  }
  return true;
};
