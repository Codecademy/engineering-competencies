import React, { useCallback, useState } from 'react';
import { Category, Level, State } from '../../../models';
import cx from 'classnames';
import 'styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectLevelVisibility, selectCategoryVisibility } from '../../../selectors/visibility';
import { createLevelAction, createFilterAction } from '../../../reducers';

export type ListGroupProps = {
    category?: Category;
    level: Level;
}

export const ListGroup = ({ level, category }: ListGroupProps)  => {
    const [isExpanded, setIsExpanded] = useState(true);
    const isLevelHidden = useSelector((s: State) => selectLevelVisibility(s, level));
    const isCategoryHidden = useSelector((s: State) => selectCategoryVisibility(s, category || ''));
    const dispatch = useDispatch();

    const onExpandCollapse = useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded])

    const onDelete = useCallback((event) => {
        dispatch(createFilterAction(level, 'HIDE_LEVEL'))
        event.stopPropagation();
    }, [dispatch]);

    return (
        <div className={cx(
            'column', 
            (isLevelHidden || (category && isCategoryHidden)) && 'hidden'
        )}>

        {/** header */}
        
        {/** content */}
        (category ? 

        )
        </div>
    )
}

/**
 * 

};

export const renderGroup = (level: Level, category?: Category) => {
  const isGroupOfGroups = !category;
  const label = category || level;

  // get the appropriate selector
  let children;
  let elem;
  if (!category) {
    children = selectCategories().mapSelect((category) => {
      return renderGroup(level, category);
    });
  } else {
    children = selectCompetenciesForLevelAndCategory(level, category).mapSelect(
      (competency) => {
        const out = renderCompetency(competency, level);
        return out;
      }
    );
  }



  // listeners


  // generate the actual element
  elem = createElement({
    cls: clsSelector,
    styles,
    children: [
      {
        cls: "colName",
        eventListeners: { click: () => onExpandCollapse() },
        children: [
          { type: "img", attr: { src: "./res/down_caret.png" } },
          { content: label },
          {
            type: "img",
            attr: { src: "./res/ex.png" },
            cls: isGroupOfGroups ? "icon" : "hidden",
            eventListeners: { click: (e) => onDelete(e) },
          },
        ],
      },
      {
        cls: "groupChildren",
        children,
      },
    ],
  });

  return elem;
};
 */