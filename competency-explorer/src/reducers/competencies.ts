import { Competency, CompetencyId } from "../models";
import type { Action } from "redux";

export const ADD_COMPETENCIES = "ADD_COMPETENCIES";

export type CompetenciesAction = {
  type: typeof ADD_COMPETENCIES;
  competencies: Record<CompetencyId, Competency>;
};

export const createCompetencyAction = (
  competencies: Record<CompetencyId, Competency>
) => {
  return {
    type: ADD_COMPETENCIES,
    competencies,
  };
};

export const competencies = (
  competencies: Record<CompetencyId, Competency> = {},
  action: Action<any>
) => {
  switch (action.type) {
    case ADD_COMPETENCIES:
      const compAction = action as CompetenciesAction;
      const out = { ...competencies };
      for (let cId in compAction.competencies) {
        if (out[cId]) {
          out[cId].levels = [
            ...out[cId].levels,
            ...compAction.competencies[cId].levels,
          ];
        } else {
          out[cId] = compAction.competencies[cId];
        }
      }

      return out;
    default:
      return competencies;
  }
};
