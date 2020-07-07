import { map } from "@toolkip/object-helpers";
import { Level, Category, ICompetency } from "./competency";
import {
  Model,
  createModelTransform,
  MSet,
  createModel,
  MManager,
  MObject,
} from "@toolkip/model";

export interface IState {
  categories: Category[];
  levels: Level[];
  competencies: ICompetency[];

  hiddenLevels?: Level[];
  display?: "list" | "matrix";
}

class _State extends MObject<IState> {}

export const STATE = new _State(
  {
    categories: [],
    levels: [],
    competencies: [],
    hiddenLevels: ["Engineering Manager", "Director", "VP"],
    display: "list",
  },
  {
    categories: createModelTransform(MSet) as any,
    levels: createModelTransform(MSet) as any,
    competencies: createModelTransform(MManager) as any,
    hiddenLevels: createModelTransform(MSet) as any,
  }
);

export const updateState = (state: IState) => {
  const curState = STATE.getData();

  curState.display = state.display || curState.display;

  // everything else is an array, so loop through it
  map(state, (value, key: keyof IState) => {
    for (let v of value) {
      const arr = curState[key] as Array<any>;
      if (arr.indexOf(v) !== -1) {
        continue;
      }
      arr.push(v);
    }
  });

  STATE.setData(curState);
};

export const hideOrUnhideLevel = (level: Level) => {
  const curHiddenLevels = STATE.get("hiddenLevels");
  const idx = curHiddenLevels.indexOf(level);

  if (idx === -1) {
    curHiddenLevels.push(level);
  } else {
    curHiddenLevels.splice(idx, 1);
  }

  STATE.set("hiddenLevels", curHiddenLevels);
};

(window as any).STATE = STATE;
