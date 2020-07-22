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
      <div className="subtitle">Competency Explorer</div>
      <div className="title">Codecademy Engineering</div>
      <DisplayModeFilter />
      <LevelFilters />
      <CategoryFilters />
      <button className="collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
        <img src={EXPAND_COLLAPSE_ICON}></img>
      </button>
    </div>
  );
};
