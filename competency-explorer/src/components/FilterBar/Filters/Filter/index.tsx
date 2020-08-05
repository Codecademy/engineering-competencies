import React from "react";
import cx from "classnames";

import "./styles.scss";

export type FilterProps = {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
};

export const Filter = ({ label, isSelected, onToggle }: FilterProps) => {
  return (
    <div
      tabIndex={0}
      className={cx("levelFilter", !isSelected && "hidden")}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
          onToggle();
          event.preventDefault();
        }
      }}
    >
      {label}
    </div>
  );
};
