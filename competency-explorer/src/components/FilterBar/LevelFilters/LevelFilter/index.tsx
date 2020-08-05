import React, { useCallback } from "react";
import { Level, State } from "../../../../models";
import { useSelector, useDispatch } from "react-redux";
import { createFilterAction } from "../../../../reducers";
import { selectLevelVisibility } from "../../../../selectors/visibility";
import { Filter } from "../../Filters/Filter";

export type LevelFilterProps = {
  level: Level;
};

export const LevelFilter = ({ level }: LevelFilterProps) => {
  const isVisible = useSelector((s: State) => selectLevelVisibility(s, level));
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(createFilterAction(level, "TOGGLE_LEVEL"));
  }, [isVisible]);

  return <Filter label={level} onToggle={onClick} isSelected={isVisible} />;
};
