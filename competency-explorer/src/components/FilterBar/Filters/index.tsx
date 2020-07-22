import React from "react";
import "./styles.scss";
import { Filter } from "./Filter";

export type FiltersProps = {
  label: string;
  childLabels: string[];
  isCurrentlySelected: (label: string) => boolean;
  onShow: (label: string) => void;
  onHide: (label: string) => void;
  onToggle: (label: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  label,
  childLabels,
  isCurrentlySelected,
  onShow,
  onHide,
  onToggle,
}) => {
  return (
    <div className="filters">
      <span className="label">{label}</span>
      <span>
        <a
          href="#"
          onClick={() => {
            for (let l of childLabels) {
              onShow(l);
            }
          }}
        >
          Show All
        </a>
        <a
          href="#"
          onClick={() => {
            for (let l of childLabels) {
              onHide(l);
            }
          }}
        >
          Hide All
        </a>
      </span>

      {/*  render all of the labels */}
      {[...childLabels].map((l) => (
        <Filter
          key={`${label}-${l}`}
          label={l}
          onToggle={() => onToggle(l)}
          isSelected={isCurrentlySelected(l)}
        />
      ))}
    </div>
  );
};
