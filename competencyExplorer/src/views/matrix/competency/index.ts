import { ICompetency, Level } from "../../../models/competency";
import { selectHiddenLevels } from "../../../selectors/filters";
import { isFirstLevelWithCompetency } from "../../../helpers/levelDirection";
import { select, rawSelect, MPrimitive } from "@toolkip/model";
import { getLevelOpacity } from "../../../helpers/colors";
import { map } from "@toolkip/object-helpers";
import { IComparable } from "@toolkip/comparable";

const styles = {
  ".matrixCompetency": {
    fontSize: "0.8rem",
    border: "none",

    nested: {
      ".header": {
        marginBottom: "0.5rem",
        cursor: "pointer",
      },

      ".header:empty": {
        display: "none",
      },
      ".hiddenCompetencies": {
        margin: "0",
        padding: "0",
        marginBottom: "0.5rem",
      },

      "&.collapsed .hiddenCompetencies": {
        display: "none",
      },
    },
  },

  ".nonOrigin": {
    opacity: 0.5,
  },

  ".nestedCompetency": {
    margin: "0",
    padding: "0.25rem 0",
  },
};

export const renderMatrixCompetency = (
  competencies: ICompetency[],
  level: Level,
  originLevel?: Level
) => {
  const isExpanded = new MPrimitive(false);
  if (level === originLevel) {
    isExpanded.setData(true);
  }

  const clsSelector = select(isExpanded).select((expanded) => {
    const clsNames = ["matrixCompetency"];
    if (level !== originLevel) {
      clsNames.push("nonOrigin");
    }

    if (!expanded) {
      clsNames.push("collapsed");
    }
    return clsNames;
  });

  const header =
    originLevel === level ? "" : `${competencies.length} from ${originLevel}`;

  const onClick = () => {
    if (originLevel === level) {
      return;
    }
    isExpanded.setData(!isExpanded.getData());
  };

  return {
    cls: clsSelector,
    style: {
      opacity: getLevelOpacity(originLevel, level),
    },
    styles,
    eventListeners: { click: onClick },
    children: [
      { content: header, cls: "header" },
      {
        cls: "hiddenCompetencies",
        type: "ul",
        children: map(competencies, (c) => {
          return { type: "li", content: c.name, cls: "nestedCompetency" };
        }),
      },
    ],
  };
};
