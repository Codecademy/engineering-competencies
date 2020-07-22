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
      className={cx("levelFilter", !isSelected && "hidden")}
      onClick={onToggle}
    >
      {label}
    </div>
  );
};
