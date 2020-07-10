//import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createStore, combineReducers } from 'redux';
import { State } from "../models";

import { competencies } from "../reducers/competencies";
import { hiddenLevels } from "../reducers/filters";
import { categories } from "../reducers/categories";
import { levels } from "../reducers/levels";
import { displayMode } from "../reducers/displayMode";

export const store = createStore<State, any, any, any>(combineReducers({
    categories,
    levels,
    competencies,
    hiddenLevels,
    displayMode,
  })
);