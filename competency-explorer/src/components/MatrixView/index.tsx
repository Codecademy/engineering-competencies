import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { selectDisplayMode } from "../../selectors/filters";
import { MatrixLabel } from "./MatrixLabel";
import {
  selectVisibleCategories,
  selectVisibleLevels,
} from "../../selectors/visibility";
import { MatrixCell } from "./MatrixCell";
import "./styles.scss";

export const MatrixView: React.FC = () => {
  const curDisplayMode = useSelector(selectDisplayMode);
  const categories = useSelector(selectVisibleCategories);
  const levels = useSelector(selectVisibleLevels);

  const children = [<span key="empty" className="empty" />];
  for (let cat of categories) {
    children.push(
      <MatrixLabel key={`matrixlabel-${cat}`} label={cat} className="top" />
    );
  }

  for (let l of levels) {
    children.push(
      <MatrixLabel key={`matrixlabel-${l}`} label={l} className="left" />
    );

    for (let c of categories) {
      children.push(
        <MatrixCell key={`matrixcell-${l}-${c}`} category={c} level={l} />
      );
    }
  }

  return (
    <div
      className={cx(curDisplayMode === "matrix" ? "matrix" : "hidden")}
      style={{
        gridTemplateColumns: `minmax(2rem, 10rem) repeat(${categories.length}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};
