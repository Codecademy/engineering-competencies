import { DisplayMode } from "../models";
import type { Action } from "redux";

export const SET_DISPLAY_MODE = "SET_DISPLAY_MODE";

export type DisplayModeAction = {
  displayMode: DisplayMode;
  type: typeof SET_DISPLAY_MODE;
};

export const createDisplayModeAction = (displayMode: DisplayMode) => {
  return {
    type: SET_DISPLAY_MODE,
    displayMode
  }
}

export const displayMode = (
  state: DisplayMode = "matrix",
  action: Action<any>
) => {
  switch (action.type) {
    case SET_DISPLAY_MODE:
      return (action as DisplayModeAction).displayMode;
    default:
      return state;
  }
};
