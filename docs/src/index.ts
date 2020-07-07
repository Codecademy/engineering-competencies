import { loadEngCompetencies, loadManagerCompetencies } from './helpers/loadFile';
import { parseFile } from './helpers/parseFile';
import { renderList } from './views/list';
import { updateState } from './models/state';
import { renderLayout } from './views/layout';

const _init = async () => {
    // render competencies
    renderLayout();

    // load competencies
    const ic = await loadEngCompetencies();
    //const em = await loadManagerCompetencies();
    const parsed = parseFile(ic);
    updateState(parsed);

    
}

window.addEventListener('load', _init);