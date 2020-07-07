import { createElement } from "@toolkip/create-elements";
import { renderViews } from "./views";
import { renderFilters } from "./filters";

export const renderFilterBar = () => {
  return createElement({
    cls: "filterBar",
    styles: {
      ".filterBar": {
        height: "100%",
        backgroundColor: "#333",
        fontFamily: "Anonymous Pro",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
      },
      ".label": {
        fontSize: "0.8rem",
        opacity: "0.8",
        marginBottom: "0.25rem",
        fontFamily: "Zilla Slab",
      },

      ".title": {
        fontSize: "1.2rem",
        marginLeft: "1rem",
        marginBottom: "1rem",
      },

      ".subtitle": {
        fontSize: "0.7rem",
        marginLeft: "1rem",
        marginTop: "1rem",
        marginBottom: "0.2rem",
      },
    },
    children: [
      { cls: "subtitle", content: "Competency Explorer" },
      { cls: "title", content: "Codecademy Engineering" },

      /** choice of views */
      renderViews(),

      /** show what levels are visible  */
      renderFilters(),
    ],
  });
};
