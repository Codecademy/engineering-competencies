import { createElement } from '@toolkip/create-elements';
import { renderList } from '../list';
import { renderFilterBar } from '../filters';
import { renderMatrix } from '../matrix';

export const renderLayout = () => {
    return createElement({
        parent: document.body,
        cls: {
            name: 'layout',
            styles: {
                'html, body, .layout': {
                    width: '100%',
                    height: '100%',
                    margin: '0',
                    padding: '0',
                    fontFamily: 'Roboto'
                },
                '.layout': {
                    display: 'flex'
                }
            }
        },
        children: [
            renderFilterBar(),
            renderList(),
            renderMatrix()
        ]
    })
}   