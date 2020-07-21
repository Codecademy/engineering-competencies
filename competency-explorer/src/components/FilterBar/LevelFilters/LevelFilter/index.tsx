import React, { useCallback } from 'react';
import cx from 'classnames';
import { Level } from '../../../../models';
import { useSelector, useDispatch } from 'react-redux';
import { createFilterAction } from '../../../../reducers';
import './styles.scss';
import { selectLevelVisibility } from '../../../../selectors/visibility';

export type LevelFilterProps = {
    level: Level
}

export const LevelFilter = ({ level }: LevelFilterProps) => {
    const isVisible = useSelector((s) => selectLevelVisibility(s, level))
    const dispatch = useDispatch();
    
    const onClick = useCallback(() => {
        dispatch(createFilterAction(level, 'TOGGLE_LEVEL'))
    }, [isVisible])

    return (
        <div className={cx('levelFilter', !isVisible && 'hidden')} onClick={onClick}>{level}</div>
    )
}