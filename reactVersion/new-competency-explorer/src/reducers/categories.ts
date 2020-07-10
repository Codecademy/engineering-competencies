import { Category } from '../models';
import type { Action } from 'redux';

export const ADD_CATEGORIES = 'ADD_LEVELS';

export type CategoryAction = { 
    categories: Set<Category>, 
    type: typeof ADD_CATEGORIES 
}

export const createCategoryAction = (categories: Set<Category>) => {
    return {
        type: ADD_CATEGORIES,
        categories
    }
}

export const categories = (state: Set<Category> = new Set(), action: Action<any>) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            const out = new Set(state);
            (action as CategoryAction).categories.forEach(out.add, out);
            return out;
        default:
            return state;
    }
}