import React from "react";
import { useSelector } from "react-redux";
import { selectLevels } from "../../../selectors/levels";
import "./styles.scss";
import { LevelFilter } from "./LevelFilter";

export const LevelFilters = () => {
  const levels = useSelector(selectLevels);

  return (
    <div className="filters">
      <span className="label">Visible Levels:</span>
      {[...levels].map((l) => (
        <LevelFilter key={`levelfilter-${l}`} level={l} />
      ))}
    </div>
  );
};
