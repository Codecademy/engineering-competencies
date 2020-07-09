import { State, Level, CompetencyId, Category } from '../models';
import { selectCompetency, selectCompetenciesForCategory } from './competencies';
import { competencies } from '../reducers';

export const HIDDEN = false;
export const VISIBLE = true;

export const selectLevelVisibility = (state: State, level: Level) => {
    const { hiddenLevels } = state;
    if (hiddenLevels.has(level)) { return HIDDEN; }
    return VISIBLE;
}

export const selectCompetencyVisibility = (state: State, competencyId: CompetencyId) => {
    const competency = selectCompetency(state, competencyId);
    for (let l of competency.levels) {
        if (selectLevelVisibility(state, l) === VISIBLE) { return VISIBLE; }
    }
    return HIDDEN;
}

export const selectCategoryVisibility = (state: State, category: Category) => {
    const competencies = selectCompetenciesForCategory(state, category);
    for (let c of competencies) {
        if (selectCompetencyVisibility(state, c.id) === VISIBLE) { return VISIBLE; }
    }
    return HIDDEN;
}