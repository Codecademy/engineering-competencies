import React, { useCallback } from "react";
import { DisplayMode } from "../../../models";
import { useDispatch, useSelector } from "react-redux";
import { selectDisplayMode } from "../../../selectors/filters";
import { createDisplayModeAction } from "../../../reducers";
import cx from "classnames";
import "./styles.scss";

type DisplayModeSwitchProps = {
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

const DisplayModeSwitch: React.FC<DisplayModeSwitchProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      className={cx("displayMode", isSelected ? "selected" : "")}
      onKeyDown={(event) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
          onClick();
          event.preventDefault();
        }
      }}
    >
      {label}
    </div>
  );
};

export const DisplayModeFilter = () => {
  const currentMode = useSelector(selectDisplayMode);
  const dispatch = useDispatch();

  const selectMode = useCallback((mode: DisplayMode) => {
    dispatch(createDisplayModeAction(mode));
  }, []);

  return (
    <div className="displayModes">
      <span className="label">View As:</span>
      <DisplayModeSwitch
        label="Matrix"
        isSelected={currentMode === "matrix"}
        onClick={() => selectMode("matrix")}
      />
      <DisplayModeSwitch
        label="List"
        isSelected={currentMode === "list"}
        onClick={() => selectMode("list")}
      />
    </div>
  );
};
