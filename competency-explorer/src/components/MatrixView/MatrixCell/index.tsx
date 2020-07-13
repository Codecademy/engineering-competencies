import React from 'react';
import { Category, Level } from '../../../models';
import { selectCompetenciesForLevelAndCategory } from '../../../selectors/competencies';
import { useSelector } from 'react-redux';
import { selectLevels } from '../../../selectors/levels';
import { bucketByOriginLevel } from '../../../helpers/bucketer';
import { CompetencyBucket } from '../CompetencyBucket';
import './styles.scss';
import { getLevelOpacity } from '../../../helpers/colors';

export type MatrixCellProps = {
    category: Category;
    level: Level;
};

export const MatrixCell: React.FC<MatrixCellProps> = ({ category, level }) => {
    const competencies = useSelector((s) => selectCompetenciesForLevelAndCategory(s, level, category));
    const levels = useSelector(selectLevels);

    const buckets = bucketByOriginLevel(competencies, [...levels]);
    
    return(
        <div className='matrixCompetencies'>
            {buckets.map((b) => {
                const opacity = getLevelOpacity(b.originLevel, level, [...levels]);
                return (
                    <CompetencyBucket 
                        {...b}
                        key={`bucket-${category}-${level}-${b.originLevel}`} 
                        level={level} 
                        opacity={opacity} 
                    />
                )
            })}
        </div>
    );
};