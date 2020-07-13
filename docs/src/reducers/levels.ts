import { Level } from '../models';
import type { Action } from 'redux';

export const ADD_LEVELS = 'ADD_LEVELS';

export type LevelAction = { 
    levels: Set<Level>, 
    type: typeof ADD_LEVELS 
}

export const createLevelAction = (levels: Set<Level>) => {
    return {
        type: ADD_LEVELS,
        levels
    }
}

export const levels = (state: Set<Level> = new Set(), action: Action<any>) => {
    switch (action.type) {
        case ADD_LEVELS:
            const out = new Set(state);
            (action as LevelAction).levels.forEach(out.add, out);
            return out;
        default:
            return state;
    }
}