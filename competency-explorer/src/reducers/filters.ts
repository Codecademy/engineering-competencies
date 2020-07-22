import { Level, Category } from "../models";
import type { Action } from "redux";

export const HIDE_LEVEL = "HIDE_LEVEL";
export const SHOW_LEVEL = "SHOW_LEVEL";
export const TOGGLE_LEVEL = "TOGGLE_LEVEL";

export const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";

export type LevelFilterAction = {
  type:
    | typeof HIDE_LEVEL
    | typeof SHOW_LEVEL
    | typeof TOGGLE_LEVEL
    | typeof TOGGLE_CATEGORY;
  level: Level;
};

export type CategoryFilterAction = {
  type: typeof TOGGLE_CATEGORY;
  category: Category;
};

export const createFilterAction = (
  levelOrCategory: Level | Category,
  type:
    | typeof HIDE_LEVEL
    | typeof SHOW_LEVEL
    | typeof TOGGLE_LEVEL
    | typeof TOGGLE_CATEGORY
) => {
  if (type === "TOGGLE_CATEGORY") {
    return {
      type,
      category: levelOrCategory,
    };
  } else {
    return {
      type,
      level: levelOrCategory,
    };
  }
};

export const hiddenLevels = (
  hiddenLevels: Set<Level> = new Set(),
  action: Action<any>
) => {
  switch (action.type) {
    case HIDE_LEVEL:
      return hideLevel(hiddenLevels, (action as LevelFilterAction).level);
    case SHOW_LEVEL:
      return showLevel(hiddenLevels, (action as LevelFilterAction).level);
    case TOGGLE_LEVEL:
      return toggleLevel(hiddenLevels, (action as LevelFilterAction).level);
    default:
      return hiddenLevels;
  }
};

export const hiddenCategories = (
  hiddenCategories: Set<Category> = new Set(),
  action: Action<any>
) => {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return toggleCategory(
        hiddenCategories,
        (action as CategoryFilterAction).category
      );
    default:
      return hiddenCategories;
  }
};

const hideLevel = (hiddenLevels: Set<Level>, level: Level) => {
  const out = new Set(hiddenLevels);
  out.add(level);
  return out;
};

const showLevel = (hiddenLevels: Set<Level>, level: Level) => {
  const out = new Set(hiddenLevels);
  out.delete(level);
  return out;
};

const toggleLevel = (hiddenLevels: Set<Level>, level: Level) => {
  if (hiddenLevels.has(level)) {
    return showLevel(hiddenLevels, level);
  } else {
    return hideLevel(hiddenLevels, level);
  }
};

const toggleCategory = (
  hiddenCategories: Set<Category>,
  category: Category
) => {
  const out = new Set(hiddenCategories);
  if (hiddenCategories.has(category)) {
    out.delete(category);
  } else {
    out.add(category);
  }
  return out;
};
