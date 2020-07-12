import React from "react";
import { useSelector } from "react-redux";
import { selectLevels } from "../../selectors/levels";
import "./styles.scss";
import { selectDisplayMode } from "../../selectors/filters";
import { ListGroup } from "./ListGroup";

export const ListView: React.FC = () => {
  const levels = useSelector(selectLevels);
  const displayMode = useSelector(selectDisplayMode);

  console.log("levels: " + displayMode);
  if (displayMode !== "list") {
    return <></>;
  }

  return (
    <div className="list">
      {[...levels].map((l) => (
        <ListGroup key={l} level={l} />
      ))}
    </div>
  );
};
