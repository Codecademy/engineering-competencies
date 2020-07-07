import { select } from '@toolkip/model';
import { STATE } from '../models/state';
import { filter } from '@toolkip/object-helpers';

export const selectCompetencies = () => select(STATE, s => s.competencies );
export const selectLevels = () => select(STATE, (s) => s.levels);

export const selectUnhiddenLevels = () => select(STATE, (s) => {
    
    return filter(s.levels, (l) => {
        const idx = s.hiddenLevels.indexOf(l)
        if (idx !== -1) { 
            return false; 
        }
        return true;
    })
})

export const selectCategories = () => select(STATE, (s) => s.categories);
export const selectCompetency = (competencyId: string) => selectCompetencies().select((competencies) => {
    for (let c of competencies) {
        if (c.id === competencyId) { return c; }
    }
    return null;
});
