import { State, Category } from '../models';

export const selectCategories = (state: State) => state.categories;

export const selectCategoryIndex = (state: State, category: Category) => {
    const { categories } = state;
    const cIdx = [...categories].indexOf(category);
    return cIdx;
}
