import { ListGroupProps } from '..';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createFilterAction } from '../../../../reducers';
import './styles.scss';
import { EXPAND_COLLAPSE_ICON, EX_ICON } from '../../../../helpers/constants';

export type ListGroupHeaderProps = ListGroupProps & {
    onExpandCollapse: () => void;
  };
  
  export const ListGroupHeader = ({
    level,
    category,
    onExpandCollapse,
  }: ListGroupHeaderProps) => {
    
    const dispatch = useDispatch();
    const onDelete = useCallback(() => {
        dispatch(createFilterAction(level, "HIDE_LEVEL"));
    }, [dispatch, level]);

    const collapseIcon = (
        <img alt="collapse this level" src={EXPAND_COLLAPSE_ICON}></img>
    );

    if (category) {
      return (
        <span className="colName" onClick={onExpandCollapse}>
          {collapseIcon}
          <h3>{category}</h3>
        </span>
      );
    }
  
    return (
      <span className="colName" onClick={onExpandCollapse}>
        {collapseIcon}
        <h2>{level}</h2>
        <img
          alt="delete this level"
          src={EX_ICON}
          onClick={(e) => {
            onDelete();
            e.stopPropagation();
          }}
        ></img>
      </span>
    );
  };
  