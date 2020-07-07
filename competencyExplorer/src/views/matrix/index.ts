import {createElement} from '@toolkip/create-elements';
import { selectDisplay } from '../../selectors/filters';

export const renderMatrix = () => {
    const clsSelector = selectDisplay().select((display) => (display === 'matrix') ? 'matrix' : 'hidden' )
    return createElement({ 
        cls: clsSelector,
        styles: {
            '.matrix': {
                fontFamily: 'Zilla Slab',
                fontSize: '2em',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }
        },
        content: 'Sorry, not ready yet :<'
    })
}