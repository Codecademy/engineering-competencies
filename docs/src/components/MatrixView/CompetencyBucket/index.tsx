import React, { useCallback, useState } from 'react';
import { Competency, Level } from '../../../models';
import './styles.scss';
import cx from 'classnames';
import { EXPAND_COLLAPSE_ICON } from '../../../helpers/constants';

export type CompetencyBucketProps = {
    competencies: Competency[];
    level: Level;
    originLevel: Level;
    opacity: number;
};

export const CompetencyBucket: React.FC<CompetencyBucketProps> = ({ competencies, level, originLevel, opacity }) => {
    const header = level === originLevel ? '' : `${competencies.length} from ${originLevel}`;
    const [isExpanded, setIsExpanded] = useState(originLevel === level);

    const onClick = useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

    return(
        <div className={cx('competencyBucket', !isExpanded && 'collapsed')} style={{opacity}}>
            {header && <div className='header' onClick={onClick}>
                <img alt='expand or collapse bucket' src={EXPAND_COLLAPSE_ICON} />
                <span>{header}</span>
            </div>}
            <div className='hiddenCompetencies'>
                {competencies.map((c) => 
                    <li key={`mx-${originLevel}-${c.id}`} className='matrixCompetency'>{c.name}</li>
                )}
            </div>
        </div>
    );
};
