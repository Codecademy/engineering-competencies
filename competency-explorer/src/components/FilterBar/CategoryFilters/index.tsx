import React from "react";
import { useSelector } from "react-redux";
import { CategoryFilter } from "./CategoryFilter";
import "./styles.scss";
import { selectCategories } from "../../../selectors/categories";

export const CategoryFilters = () => {
  const categories = useSelector(selectCategories);

  return (
    <div className="filters">
      <span className="label">Visible Categories:</span>
      {[...categories].map((c) => (
        <CategoryFilter key={`categoryfilter-${c}`} category={c} />
      ))}
    </div>
  );
};
