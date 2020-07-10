import React from 'react';
import './styles.scss';
import { DisplayMode } from './DisplayMode';
import { LevelFilters } from './LevelFilters';

export const FilterBar: React.FC = () => {
    return (
        <div className='filterBar'>
            <div className='subtitle'>Competency Explorer</div>
            <div className='title'>Codecademy Engineering</div>
            <DisplayMode />
            <LevelFilters />
        </div>
    );
}

