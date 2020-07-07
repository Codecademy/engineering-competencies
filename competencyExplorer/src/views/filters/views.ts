import { createElement } from '@toolkip/create-elements';
import { selectFilters } from '../../selectors/filters';
import { STATE } from '../../models/state';

export const renderViews = () => {
    const clsSelector = (display: 'list' | 'matrix') => selectFilters()
            .select(f => f.display)
            .select((mode) => (mode === display) ? 'selected displayMode' : 'displayMode');
            
    return createElement({
        cls: 'views',
        styles: {
            '.views': {
                margin: '1rem',
                display: 'flex',
                flexDirection: 'column',

                nested: {
                    '.displayMode': {
                        cursor: 'pointer',
                        width: 'auto',
                        borderRadius: '5px',
                        padding: '0.1rem 0.25rem',
                    },

                    '.displayMode:not(.selected)': {
                        opacity: '0.5'
                    },

                    '.selected': {
                        backgroundColor: '#fff',
                        color: '#333'
                    }
                }
            }
        },
        children: [
            { cls: 'label', content: 'View As: '},
            { children: [
                { content: 'List', cls: clsSelector('list'), eventListeners: { click: () => STATE.set('display', 'list') } },
                { content: 'Matrix', cls: clsSelector('matrix'), eventListeners: { click: () => STATE.set('display', 'matrix') } }
            ]}
        ]
    })
}