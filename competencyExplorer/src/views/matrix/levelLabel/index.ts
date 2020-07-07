import { Level } from "../../../models/competency";
import { selectHiddenLevels } from "../../../selectors/filters";
import { isLevelHidden } from "../../../helpers/filter";

export const renderLevelLabel = (l: Level) => {
  const clsSelector = selectHiddenLevels().select(() => {
    const clsNames = ["level", "label"];
    if (isLevelHidden(l)) {
      clsNames.push("hidden");
    }
    return clsNames;
  });

  return {
    cls: clsSelector,
    content: l,
  };
};
