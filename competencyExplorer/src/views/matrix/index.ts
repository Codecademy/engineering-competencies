import { createElement, IChild } from "@toolkip/create-elements";
import { selectDisplay } from "../../selectors/filters";
import {
  selectCategoriesAndLevels,
  selectUnhiddenLevels,
  selectVisibleCompetencies,
} from "../../selectors/core";
import { renderCompetencies } from "./competencies";
import { isLevelHidden } from "../../helpers/filter";
import { renderLevelLabel } from "./levelLabel";

export const renderMatrix = () => {
  const clsSelector = selectDisplay().select((display) =>
    display === "matrix" ? "matrix" : "hidden"
  );

  const childSelector = selectCategoriesAndLevels().select((payload) => {
    let out: IChild[] = [{ cls: "blank" }];

    const { levels, categories } = payload;

    // add the categories
    for (let c of categories) {
      out.push({ cls: "category label", content: c });
    }

    // add the levels
    for (let l of levels) {
      out.push(renderLevelLabel(l));

      for (let c of categories) {
        out.push(renderCompetencies(l, c));
      }
    }
    return out;
  });

  const elem = createElement({
    cls: clsSelector,
    styles: {
      ".matrix": {
        fontFamily: "Zilla Slab",
        fontSize: "2em",
        display: "grid",
        gridTemplateColumns: "10rem repeat(5, 1fr)",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        gridRowGap: "2rem",

        nested: {
          ".label": {
            alignSelf: "center",
            height: "100%",
          },
        },
      },
    },
    children: childSelector,
  });

  return elem;
};
