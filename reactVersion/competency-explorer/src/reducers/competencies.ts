import { Competency, CompetencyId } from '../models';
import type { Action } from '@reduxjs/toolkit';

export const ADD_COMPETENCIES = 'ADD_COMPETENCIES';

export type CompetenciesAction = {
    type: typeof ADD_COMPETENCIES;
    competencies: Record<CompetencyId, Competency>;
}

export const createCompetencyAction = (competencies: Record<CompetencyId, Competency>) => {
    return {
        type: ADD_COMPETENCIES,
        competencies
    }
}

export const competencies = (competencies: Record<CompetencyId, Competency> = {}, action: Action<any>) => {
    switch (action.type) {
        case ADD_COMPETENCIES:
            const compAction = action as CompetenciesAction;
            return {
                    ...competencies,
                    ...compAction.competencies
                }
        default:
            return competencies;
    }
}