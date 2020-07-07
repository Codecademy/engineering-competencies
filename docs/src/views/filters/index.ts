import { createElement } from '@toolkip/create-elements';
import { renderViews } from './views';
import { renderFilters } from './filters';

export const renderFilterBar = () => {

    return createElement({
        cls: 'filterBar',
        styles: {
            '.filterBar': {
                height: '100%',
                backgroundColor: '#333',
                fontFamily: 'Anonymous Pro',
                color: '#FFF',
                display: 'flex',
                flexDirection: 'column',
            },
            '.label': {
                fontSize: '0.8rem',
                opacity: '0.8',
                marginBottom: '0.25rem',
                fontFamily: 'Zilla Slab'
            },

            '.title': {
                fontSize: '1.2rem',
                margin: '1rem',
                marginBottom: '0.2rem'
            },

            '.subtitle': {
                fontSize: '0.7rem',
                marginLeft: '1rem',
                marginBottom: '1rem'
            }
        },
        children: [
            { cls: 'title', content: 'Competency Explorer'},
            { cls: 'subtitle', content: 'by kip price'},

            /** choice of views */
            renderViews(),

            /** show what levels are visible  */
            renderFilters()

        ]
    })
}