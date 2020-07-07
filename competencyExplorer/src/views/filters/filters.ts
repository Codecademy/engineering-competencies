import { selectFilters } from "../../selectors/filters";
import { createElement, IElemDefinition } from "@toolkip/create-elements";
import { Level } from "../../models/competency";
import { selectLevels } from "../../selectors/core";
import { hideOrUnhideLevel } from "../../models/state";

export const renderFilters = () => {
  const clsSelector = (level: Level) => {
    return selectFilters()
      .select((f) => f.hiddenLevels)
      .select((levels) =>
        levels.indexOf(level) !== -1 ? "hidden level" : "level"
      );
  };

  const childSelector = selectLevels().mapSelect(
    (l): IElemDefinition => {
      return {
        cls: clsSelector(l),
        content: l,
        eventListeners: {
          click: () => {
            console.log("hiding");
            hideOrUnhideLevel(l);
          },
        },
      };
    }
  );

  return createElement({
    cls: "filters",
    styles: {
      ".filters": {
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      },
    },
    children: [
      { cls: "label", content: "Visible Levels:" },
      {
        cls: "levels",
        styles: {
          ".levels": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          },

          ".level": {
            padding: "0.1rem 0.25rem",
            cursor: "pointer",
            marginBottom: "0.5rem",
            width: "auto",
            borderRadius: "5px",
          },

          ".level:not(.hidden)": {
            backgroundColor: "#FFF",
            color: "#333",
          },

          ".filters .hidden.level": {
            display: "block",
            textDecoration: "line-through",
            opacity: "0.5",
          },
        },
        children: childSelector as any,
      },
    ],
  });
};
