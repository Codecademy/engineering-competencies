import { ICompetency } from "../../../models/competency";
import { createElement } from "@toolkip/create-elements";
import { filter } from "@toolkip/object-helpers";

const styles = {
  ".competency": {
    padding: "0.5rem",
    margin: "0.5rem",
    fontSize: "0.6em",
    borderTop: "1px solid #eee",
    fontFamily: "Anonymous Pro",
    position: "relative",

    nested: {
      ".name": {
        opacity: "0.5",
        cursor: "pointer",
      },

      ".name.bold": {
        opacity: "1",
      },

      ".category, .levels": {
        marginTop: "0.5rem",
        fontSize: "0.8rem",
        display: "none",
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "1px 1px 3px 2px rgba(0,0,0,.2)",
        padding: "0.5rem",
      },

      "&:hover": {
        nested: {
          ".levels": {
            display: "block",
            zIndex: "5",
          },
        },
      },
    },
  },
};

createElement({
  styles,
});

export const renderCompetency = (
  competency: ICompetency,
  levelGroup: string
) => {
  const otherLevels = filter(competency.levels, (l) => l !== levelGroup);

  const out = createElement({
    cls: "competency",
    children: [
      {
        content: competency.name,
        cls: ["name", otherLevels.length === 0 ? "bold" : ""],
      },
      otherLevels.length !== 0
        ? {
            cls: "levels",
            children: [
              { content: "Also in:" },
              {
                type: "ul",
                children: competency.levels.map((level) => {
                  if (levelGroup === level) {
                    return {};
                  }
                  return { type: "li", content: level };
                }),
              },
            ],
          }
        : {},
    ],
  });

  return out;
};
