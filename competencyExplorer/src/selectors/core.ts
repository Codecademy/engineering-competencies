import { select } from "@toolkip/model";
import { STATE } from "../models/state";
import { filter } from "@toolkip/object-helpers";
import { isCompetencyHidden } from "../helpers/filter";
import { ICompetency } from "../models/competency";
import { selectHiddenLevels } from "./filters";

export const selectCompetencies = () => select(STATE, (s) => s.competencies);
export const selectLevels = () => select(STATE, (s) => s.levels);

export const selectUnhiddenLevels = () =>
  select(STATE, (s) => {
    return filter(s.levels, (l) => {
      const idx = s.hiddenLevels.indexOf(l);
      if (idx !== -1) {
        return false;
      }
      return true;
    });
  });

export const selectCategories = () => select(STATE, (s) => s.categories);
export const selectCompetency = (competencyId: string) =>
  selectCompetencies().select((competencies) => {
    for (let c of competencies) {
      if (c.id === competencyId) {
        return c;
      }
    }
    return null;
  });

export const selectCategoriesAndLevels = () =>
  select(STATE, (s) => {
    return {
      categories: s.categories,
      levels: s.levels,
    };
  });

export const selectVisibleCompetencies = () => {
  return select(STATE, (s) => {
    return { hiddenLevels: s.hiddenLevels, competencies: s.competencies };
  }).select(({ competencies }) =>
    filter(competencies, (c: ICompetency) => {
      if (isCompetencyHidden(c)) {
        return false;
      }
      return true;
    })
  );
};
