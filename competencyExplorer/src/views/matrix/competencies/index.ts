import { createElement } from "@toolkip/create-elements";
import { Level, Category, ICompetency } from "../../../models/competency";
import { selectCompetenciesForLevelAndCategory } from "../../../selectors/byLevelOrCategory";
import { renderMatrixCompetency } from "../competency";
import { selectHiddenLevels } from "../../../selectors/filters";
import { isLevelHidden } from "../../../helpers/filter";
import { getOriginLevel, getLevelIndex } from "../../../helpers/levelDirection";
import { map } from "@toolkip/object-helpers";
import { STATE } from "../../../models/state";
import { bucketByOriginLevel } from "../../../helpers/bucketer";

export const renderCompetencies = (level: Level, category: Category) => {
  const childSelector = selectCompetenciesForLevelAndCategory(level, category)
    .select((competencies) => {
      return bucketByOriginLevel(competencies);
    })
    .mapSelect((b) => {
      return renderMatrixCompetency(b.competencies, level, b.originLevel);
    });

  const clsSelector = selectHiddenLevels().select((hl) => {
    const clsNames = ["competencies"];

    if (isLevelHidden(level)) {
      clsNames.push("hidden");
    }

    return clsNames;
  });

  return createElement({
    cls: clsSelector,
    styles: {
      ".competencies": {
        fontFamily: "Anonymous Pro",
        margin: "0",
        padding: "0",
        paddingRight: "1rem",
      },
    },
    children: childSelector as any,
  });
};
