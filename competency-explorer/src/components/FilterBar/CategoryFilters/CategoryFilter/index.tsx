import React, { useCallback } from "react";
import { Category, State } from "../../../../models";
import { useSelector, useDispatch } from "react-redux";
import { createFilterAction } from "../../../../reducers";
import { selectCategoryVisibility } from "../../../../selectors/visibility";
import { Filter } from "../../Filter";

export type CategoryFilterProps = {
  category: Category;
};

export const CategoryFilter = ({ category }: CategoryFilterProps) => {
  const isVisible = useSelector((s: State) =>
    selectCategoryVisibility(s, category, true)
  );
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(createFilterAction(category, "TOGGLE_CATEGORY"));
  }, [isVisible]);

  return <Filter label={category} onToggle={onClick} isSelected={isVisible} />;
};
