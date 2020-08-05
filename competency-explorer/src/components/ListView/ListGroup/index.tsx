import React, { useCallback, useState } from "react";
import { Category, Level, State } from "../../../models";
import cx from "classnames";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLevelVisibility,
  selectCategoryAndLevelVisibility,
} from "../../../selectors/visibility";
import { selectCategories } from "../../../selectors/categories";
import { selectCompetenciesForLevelAndCategory } from "../../../selectors/competencies";
import { ListItem } from "../ListItem";
import { ListGroupHeader } from "./ListGroupHeader";

export type ListGroupProps = {
  category?: Category;
  level: Level;
};

export const ListGroup = ({ level, category }: ListGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isLevelVisible = useSelector((s: State) =>
    selectLevelVisibility(s, level)
  );
  const isCategoryVisible = useSelector((s: State) =>
    selectCategoryAndLevelVisibility(s, level, category || "")
  );
  const categories = useSelector(selectCategories);
  const competencies = useSelector((s: State) =>
    selectCompetenciesForLevelAndCategory(s, level, category || "")
  );

  const onExpandCollapse = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={cx(
        "column",
        (!isLevelVisible || (category && !isCategoryVisible)) && "hidden",
        !isExpanded && "collapsed"
      )}
    >
      {/** header */}
      <ListGroupHeader
        category={category}
        level={level}
        onExpandCollapse={onExpandCollapse}
      />

      {/** content */}
      <span className="groupChildren">
        {category
          ? competencies.map((comp) => (
              <ListItem
                key={`listitem-${comp.id}`}
                level={level}
                competency={comp}
              />
            ))
          : [...categories].map((cat) => (
              <ListGroup
                key={`listgroup-${level}-${cat}`}
                level={level}
                category={cat}
              />
            ))}
      </span>
    </div>
  );
};
