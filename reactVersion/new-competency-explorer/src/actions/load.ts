import {
  loadEngCompetencies,
  loadManagerCompetencies,
} from "../helpers/loadFile";
import { parseFile } from "../helpers/parseFile";
import {
  createLevelAction,
  createCategoryAction,
  createCompetencyAction,
} from "../reducers";
import type { Dispatch } from "react";

export const loadFiles = () => {
  return async (dispatch: Dispatch<any>) => {
    const ic = await loadEngCompetencies();
    const em = await loadManagerCompetencies();
    const parsed = parseFile(ic + em);

    console.log(parsed);
    // dispatch(createLevelAction(parsed.levels));
    // dispatch(createCategoryAction(parsed.categories));
    // dispatch(createCompetencyAction(parsed.competencies));
  };
};
