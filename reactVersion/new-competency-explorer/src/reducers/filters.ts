import { Level } from '../models';
import type {Action} from 'redux';
export const HIDE_LEVEL = 'HIDE_LEVEL';
export const SHOW_LEVEL = 'SHOW_LEVEL';
export const TOGGLE_LEVEL = 'TOGGLE_LEVEL';

export type FilterAction = {
    type: typeof HIDE_LEVEL | typeof SHOW_LEVEL | typeof TOGGLE_LEVEL;
    level: Level;
}

export const createFilterAction = (
    level: Level, 
    type: typeof HIDE_LEVEL | typeof SHOW_LEVEL | typeof TOGGLE_LEVEL
) => {
    return {
        type,
        level
    }
}

export const hiddenLevels = (hiddenLevels: Set<Level> = new Set(), action: Action<any>) => {
    switch (action.type) {
        case HIDE_LEVEL:
            return hideLevel(hiddenLevels, (action as FilterAction).level);
        case SHOW_LEVEL:
            return showLevel(hiddenLevels, (action as FilterAction).level);
        case TOGGLE_LEVEL:
            return toggleLevel(hiddenLevels, (action as FilterAction).level);
        default:
            return hiddenLevels;
    }
}

const hideLevel = (hiddenLevels: Set<Level>, level: Level) => {
    const out = new Set(hiddenLevels);
    out.add(level);
    return out;
}

const showLevel = (hiddenLevels: Set<Level>, level: Level) => {
    const out = new Set(hiddenLevels);
    out.delete(level);
    return out;
}

const toggleLevel = (hiddenLevels: Set<Level>, level: Level) => {
    if (hiddenLevels.has(level)) {
        return hideLevel(hiddenLevels, level);
    } else {
        return showLevel(hiddenLevels, level);
    }
}