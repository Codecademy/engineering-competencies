import { ICompetency, Category, Level } from "../models/competency";
import { STATE } from "../models/state";
import { selectCompetencies, selectCategoriesAndLevels } from "./core";
import { filter } from "@toolkip/object-helpers";
import { IComparable } from "@toolkip/comparable";
import { isCompetencyHidden } from "../helpers/filter";

export const selectCompetenciesForLevelAndCategory = (
  level: Level,
  category: Category
) => {
  return selectCompetencies().select((competencies) => {
    return filterRelevantCompetencies(competencies, level, category);
  });
};

export const filterRelevantCompetencies = (competencies, level, category) => {
  return filter(competencies, (competency: ICompetency) => {
    if (competency.category !== category) {
      return false;
    }
    if (competency.levels.indexOf(level) === -1) {
      return false;
    }
    return true;
  });
};
