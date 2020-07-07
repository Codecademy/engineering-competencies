import { createElement } from "@toolkip/create-elements";
import { renderCompetency } from "../competency";
import { ICompetency, Category, Level } from "../../../models/competency";
import {
  addOrRemoveClass,
  addClass,
  removeClass,
} from "@toolkip/style-helpers";
import { STATE } from "../../../models/state";
import {
  selectCompetencies,
  selectCategories,
  selectVisibleCompetencies,
} from "../../../selectors/core";
import { selectHiddenLevels } from "../../../selectors/filters";
import {
  selectCompetenciesForLevelAndCategory,
  filterRelevantCompetencies,
} from "../../../selectors/byLevelOrCategory";
import { select } from "@toolkip/model";
import { isLevelHidden } from "../../../helpers/filter";

const styles = {
  ".hidden": {
    display: "none",
  },

  ".column": {
    fontSize: "0.9em",
    width: "50vw",
    marginBottom: "1em",

    nested: {
      "&.collapsed .colName img": {
        transform: "rotate(0deg)",
      },

      "&.collapsed .groupChildren": {
        display: "none",
      },
    },
  },
  ".colName": {
    margin: "1rem",
    fontFamily: "Zilla Slab",
    fontSize: "0.9em",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    marginLeft: "-1.2em",

    nested: {
      img: {
        width: "1.5em",
        height: "1.5em",
        transform: "rotate(180deg)",
        transformOrigin: "50% 50%",
      },
    },
  },
};

export const renderGroup = (level: Level, category?: Category) => {
  const isGroupOfGroups = !category;
  const label = category || level;

  // get the appropriate selector
  let children;
  let elem;
  if (!category) {
    children = selectCategories().mapSelect((category) => {
      return renderGroup(level, category);
    });
  } else {
    children = selectCompetenciesForLevelAndCategory(level, category).mapSelect(
      (competency) => {
        const out = renderCompetency(competency, level);
        return out;
      }
    );
  }

  const clsSelector = select(STATE, ({ hiddenLevels, competencies }) => {
    const clsNames = ["column"];

    const relevantCompetencies = filterRelevantCompetencies(
      competencies,
      level,
      category
    );

    if (
      isLevelHidden(level) ||
      (category && relevantCompetencies.length === 0)
    ) {
      clsNames.push("hidden");
    }

    return clsNames;
  });

  // listeners
  let isCollapsed = false;
  const onExpandCollapse = () => {
    isCollapsed = !isCollapsed;
    addOrRemoveClass(elem, "collapsed", isCollapsed);
  };

  const onDelete = (e: Event) => {
    STATE.set("hiddenLevels", [...STATE.get("hiddenLevels"), label]);
    e.stopPropagation();
  };

  // generate the actual element
  elem = createElement({
    cls: clsSelector,
    styles,
    children: [
      {
        cls: "colName",
        eventListeners: { click: () => onExpandCollapse() },
        children: [
          { type: "img", attr: { src: "./res/down_caret.png" } },
          { content: label },
          {
            type: "img",
            attr: { src: "./res/ex.png" },
            cls: isGroupOfGroups ? "icon" : "hidden",
            eventListeners: { click: (e) => onDelete(e) },
          },
        ],
      },
      {
        cls: "groupChildren",
        children,
      },
    ],
  });

  return elem;
};
