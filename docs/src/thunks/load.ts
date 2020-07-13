import {
  loadEngCompetencies,
  loadManagerCompetencies,
} from "../helpers/loadFile";
import { parseFile } from "../helpers/parseFile";
import {
  createLevelAction,
  createCategoryAction,
  createCompetencyAction,
  createFilterAction,
} from "../reducers";
import type { Dispatch } from "react";


const parseFileIntoState = (fileContents: string, dispatch: Dispatch<any>, hideByDefault?: boolean) => {
  const parsed = parseFile(fileContents);

  dispatch(createLevelAction(parsed.levels));
  dispatch(createCategoryAction(parsed.categories));
  dispatch(createCompetencyAction(parsed.competencies));

  if (!hideByDefault) { return; }
  for (let l of parsed.levels) {
    dispatch(createFilterAction(l, 'HIDE_LEVEL'));
  }
}

export const loadFiles = () => {
  return async (dispatch: Dispatch<any>) => {
    
    const ic = await loadEngCompetencies();
    parseFileIntoState(ic, dispatch);

    const em = await loadManagerCompetencies();
    parseFileIntoState(em, dispatch, true);

  };
};
