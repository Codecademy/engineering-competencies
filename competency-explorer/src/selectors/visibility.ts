import { State, Level, CompetencyId, Category } from "../models";
import {
  selectCompetency,
  selectCompetenciesForCategory,
  selectCompetenciesForLevelAndCategory,
} from "./competencies";
import { selectCategories } from './categories';
import { selectLevels } from './levels';

export const HIDDEN = false;
export const VISIBLE = true;

export const selectLevelVisibility = (state: State, level: Level) => {
  const { hiddenLevels } = state;
  if (hiddenLevels.has(level)) {
    return HIDDEN;
  }
  return VISIBLE;
};

export const selectCompetencyVisibility = (
  state: State,
  competencyId: CompetencyId
) => {
  const competency = selectCompetency(state, competencyId);
  for (let l of competency.levels) {
    if (selectLevelVisibility(state, l) === VISIBLE) {
      return VISIBLE;
    }
  }
  return HIDDEN;
};

export const selectCategoryVisibility = (state: State, category: Category) => {
  const competencies = selectCompetenciesForCategory(state, category);
  for (let c of competencies) {
    if (selectCompetencyVisibility(state, c.id) === VISIBLE) {
      return VISIBLE;
    }
  }
  return HIDDEN;
};

export const selectCategoryAndLevelVisibility = (state: State, level: Level, category: Category) => {
  if (!selectLevelVisibility(state, level)) { return HIDDEN; }
  const competencies = selectCompetenciesForLevelAndCategory(state, level, category);

  for (let c of competencies) {
    if (selectCompetencyVisibility(state, c.id) === VISIBLE) {
      return VISIBLE;
    }
  }

  return HIDDEN;
}

export const selectVisibleCategories = (state: State) => {
  const categories = selectCategories(state);
  const out = [];
  for (let cat of categories) {
    if (selectCategoryVisibility(state, cat)) {
      out.push(cat)
    }
  }
  return out;
}

export const selectVisibleLevels = (state: State) => {
  const levels = selectLevels(state);
  const out = [];
  for (let level of levels) {
    if (selectLevelVisibility(state, level)) {
      out.push(level)
    }
  }
  return out;
}