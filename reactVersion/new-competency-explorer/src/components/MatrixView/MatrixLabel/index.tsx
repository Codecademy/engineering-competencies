import { Category, Level } from '../../../models';
import React from 'react';

export type MatrixLabelProps = {
    label: Level | Category;
}
export const MatrixLabel = ({ label }: MatrixLabelProps) => {
    return <div className='label'>{label}</div>
}