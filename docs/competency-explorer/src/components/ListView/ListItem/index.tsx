import React from 'react';
import { Level, Competency } from '../../../models';
import './styles.scss';
import cx from 'classnames';

type ListItemProps = {
    level: Level;
    competency: Competency;
}

export const ListItem = ({ competency, level }: ListItemProps) => {
    const otherLevels = competency.levels.filter((l) => l !== level );

    return (
        <div className='competency'>
            <div className={cx('name', otherLevels.length === 0 && 'bold')}>
                {competency.name}
            </div>

            {otherLevels.length !== 0 && 
                <div className='levels'>
                    <div>Also in:</div>
                    <ul>
                        {otherLevels.map((l) => 
                            <li key={`${competency.id}-${l}`}>{l}</li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}
