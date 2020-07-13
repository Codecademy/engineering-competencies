//import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { State } from "../models";
import thunk from "redux-thunk";
import { competencies } from "../reducers/competencies";
import { hiddenLevels } from "../reducers/filters";
import { categories } from "../reducers/categories";
import { levels } from "../reducers/levels";
import { displayMode } from "../reducers/displayMode";

const rootReducer = combineReducers({
  categories,
  levels,
  competencies,
  hiddenLevels,
  displayMode,
});

export const store = createStore<State, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);
