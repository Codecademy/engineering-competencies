import React, { useState } from "react";
import "./styles.scss";
import { DisplayModeFilter } from "./DisplayMode";
import { LevelFilters } from "./LevelFilters";
import { EXPAND_COLLAPSE_ICON } from "../../helpers/constants";
import cx from "classnames";
import { CategoryFilters } from "./CategoryFilters";

export const FilterBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={cx("filterBar", isCollapsed && "collapsed")}>
      <h2 className="subtitle">Competency Explorer</h2>
      <h1 className="title">Codecademy Engineering</h1>
      <DisplayModeFilter />
      <LevelFilters />
      <CategoryFilters />
      <button
        title="collapse the sidebar"
        className="collapse"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img aria-hidden="true" src={EXPAND_COLLAPSE_ICON}></img>
      </button>
    </div>
  );
};
