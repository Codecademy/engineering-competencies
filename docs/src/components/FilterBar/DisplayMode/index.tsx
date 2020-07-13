import React, { useCallback } from 'react';
import { DisplayMode } from '../../../models';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayMode } from '../../../selectors/filters';
import { createDisplayModeAction } from '../../../reducers';
import cx from 'classnames';
import './styles.scss';

export const DisplayModeFilter = () => {

    const currentMode = useSelector(selectDisplayMode);
    const dispatch = useDispatch();

    const selectMode = useCallback((mode: DisplayMode) => {
        dispatch(createDisplayModeAction(mode))
    }, [])

    return (
        <div className='displayModes'>
            <span className='label'>View As:</span>
            <div className={cx('displayMode', currentMode === 'matrix' ? 'selected': '')} onClick={() => selectMode('matrix')}>Matrix</div>
            <div className={cx('displayMode', currentMode === 'list' ? 'selected': '')} onClick={() => selectMode('list')}>List</div>
        </div>
    )
}