import { select } from '@toolkip/model';
import { STATE, IState } from '../models/state';


export const selectFilters = () => select(STATE, (s: IState) => { 
    return { 
        levels: s.levels,
        display: s.display, 
        hiddenLevels: s.hiddenLevels 
    } 
})

export const selectDisplay = () => select(STATE, s => s.display);
export const selectHiddenLevels = () => select(STATE, s => s.hiddenLevels);