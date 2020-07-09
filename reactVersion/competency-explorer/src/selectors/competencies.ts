import { State, CompetencyId, Category, Level } from '../models';
import { runInContext, compileFunction } from 'vm';

export const selectCompetency = (state: State, id: CompetencyId) => {
    return state.competencies[id];
}

export const selectCompetencies = (state: State) => state.competencies;

export const selectCompetenciesForCategory = (state: State, category: Category) => {
    const { competencies } = state;
    const out = [];

    for (let key in competencies) {
        const comp = competencies[key];
        if (comp.category === category) {
            out.push(comp)
        }
    }

    return out;
}

export const selectCompetenciesForLevel = (state: State, level: Level) => {
    const { competencies } = state;
    const out = [];

    for (let key in competencies) {
        const comp = competencies[key];
        if (comp.levels.indexOf(level) !== -1) {
            out.push(comp)
        }
    }
    
    return out;
}

export const selectCompetenciesForLevelAndCategory = (state: State, level: Level, category: Category) => {
    const { competencies } = state;
    const out = [];

    for (let key in competencies) {
        const comp = competencies[key];
        if (comp.category === category) {
            if (comp.levels.indexOf(level) !== -1) {
                out.push(comp)
            }
        }
    }
    
    return out;
}