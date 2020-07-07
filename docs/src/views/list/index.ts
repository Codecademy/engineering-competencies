import { createElement } from '@toolkip/create-elements';
import { renderGroup } from './group';
import { selectUnhiddenLevels, selectLevels } from '../../selectors/core';
import { selectDisplay } from '../../selectors/filters';

export const renderList = () => {

    const clsSelector = selectDisplay().select((display) => (display === 'list') ? 'list' : 'hidden' )

    const selector = selectLevels()
        .mapSelect((level) => {
            return renderGroup(level)
        })

    return createElement({
        cls: clsSelector,
        styles: {
            '.list': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gridTemplateColumns: '1fr',
                fontSize: '2em',
                width: '100%',
                overflowY: 'auto'
            }
        },
        children: selector
    });
}