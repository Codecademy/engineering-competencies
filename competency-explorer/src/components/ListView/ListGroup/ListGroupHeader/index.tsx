import { ListGroupProps } from "..";
import React, { useCallback, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { createFilterAction } from "../../../../reducers";
import "./styles.scss";
import { EXPAND_COLLAPSE_ICON, EX_ICON } from "../../../../helpers/constants";

export type ListGroupHeaderProps = ListGroupProps & {
  onExpandCollapse: () => void;
};

export const ListGroupHeader = ({
  level,
  category,
  onExpandCollapse,
}: ListGroupHeaderProps) => {
  const dispatch = useDispatch();
  const onDelete = useCallback(() => {
    dispatch(createFilterAction(level, "HIDE_LEVEL"));
  }, [dispatch, level]);

  const onKeyDown = (event: KeyboardEvent<any>) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onExpandCollapse();
      event.preventDefault();
    }
  };

  const collapseIcon = (
    <img
      className="caret"
      alt="collapse this level"
      src={EXPAND_COLLAPSE_ICON}
    ></img>
  );

  if (category) {
    return (
      <span
        tabIndex={0}
        className="colName"
        onClick={onExpandCollapse}
        onKeyDown={onKeyDown}
      >
        {collapseIcon}
        <h3>{category}</h3>
      </span>
    );
  }

  return (
    <span
      tabIndex={0}
      className="colName"
      onClick={onExpandCollapse}
      onKeyDown={onKeyDown}
    >
      {collapseIcon}
      <h2>{level}</h2>
      <img
        className="ex"
        alt="delete this level"
        src={EX_ICON}
        onClick={(e) => {
          onDelete();
          e.stopPropagation();
        }}
      ></img>
    </span>
  );
};
