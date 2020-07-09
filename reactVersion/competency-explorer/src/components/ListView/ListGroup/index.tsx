import React, { useCallback, useState } from "react";
import { Category, Level, State } from "../../../models";
import cx from "classnames";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLevelVisibility,
  selectCategoryVisibility,
} from "../../../selectors/visibility";
import { createFilterAction } from "../../../reducers";
import { selectCategories } from "../../../selectors/categories";
import { selectCompetenciesForLevelAndCategory } from "../../../selectors/competencies";
import { ListItem } from "../ListItem";

export type ListGroupProps = {
  category?: Category;
  level: Level;
};

export const ListGroup = ({ level, category }: ListGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isLevelHidden = useSelector((s: State) =>
    selectLevelVisibility(s, level)
  );
  const isCategoryHidden = useSelector((s: State) =>
    selectCategoryVisibility(s, category || "")
  );
  const categories = useSelector(selectCategories);
  const competencies = useSelector((s: State) =>
    selectCompetenciesForLevelAndCategory(s, level, category || "")
  );

  const dispatch = useDispatch();

  const onExpandCollapse = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const onDelete = useCallback(() => {
    dispatch(createFilterAction(level, "HIDE_LEVEL"));
  }, [dispatch, level]);

  return (
    <div
      className={cx(
        "column",
        (isLevelHidden || (category && isCategoryHidden)) && "hidden"
      )}
    >
      {/** header */}
      <ListGroupHeader
        category={category}
        level={level}
        onDelete={onDelete}
        onExpandCollapse={onExpandCollapse}
      />

      {/** content */}
      <span className="groupChildren">
        {category
          ? competencies.map((comp) => (
              <ListItem level={level} competency={comp} />
            ))
          : [...categories].map((cat) => (
              <ListGroup level={level} category={cat} />
            ))}
      </span>
    </div>
  );
};

export type ListGroupHeaderProps = ListGroupProps & {
  onDelete: () => void;
  onExpandCollapse: () => void;
};

export const ListGroupHeader = ({
  level,
  category,
  onDelete,
  onExpandCollapse,
}: ListGroupHeaderProps) => {
  const collapseIcon = (
    <img alt="collapse this level" src="./res/down_caret.png"></img>
  );
  if (category) {
    return (
      <span className="colName" onClick={onExpandCollapse}>
        {collapseIcon}
        <h3>{category}</h3>
      </span>
    );
  }

  return (
    <span className="colName">
      {collapseIcon}
      <h2>{level}</h2>
      <img
        alt="delete this level"
        src="./res/ex.png"
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      ></img>
    </span>
  );
};
