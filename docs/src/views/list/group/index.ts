import { createElement } from '@toolkip/create-elements';
import { map, filter } from '@toolkip/object-helpers';
import { renderCompetency } from '../competency';
import { ICompetency, Category, Level } from '../../../models/competency';
import { addOrRemoveClass } from '@toolkip/style-helpers';
import { STATE } from '../../../models/state';
import { selectCompetencies, selectCategories } from '../../../selectors/core';
import { selectHiddenLevels } from '../../../selectors/filters';

const styles = {
    '.hidden': {
        display: 'none'
    },

    '.column': {
        fontSize: '0.9em',
        width: '50vw',
        marginBottom: '1em',

        nested: {
            '&.collapsed .colName img': {
                transform: 'rotate(0deg)'
            },

            '&.collapsed .groupChildren': {
                display: 'none'
            }
        }
    },
    '.colName': {
        margin: '1rem',
        fontFamily: 'Zilla Slab',
        fontSize: '0.9em',
        fontWeight: '500',
        cursor: 'pointer',
        display: 'flex',
        marginLeft: '-1.2em',

        nested: {
            'img': {
                width: '1.5em',
                height: '1.5em',
                transform: 'rotate(180deg)',
                transformOrigin: '50% 50%'
            },
        }
    }
};

export const renderGroup = (level: Level, category?: Category) => {

    const isGroupOfGroups = !category;
    const label = category || level;

    // get the appropriate selector
    let children;
    if (!category) {
        children = selectCategories()
            .mapSelect((category) => {
                return renderGroup(level, category)
            });
    } else {
        children = selectCompetencies()
            .select((competencies) => {
                const out = filter(competencies, (competency: ICompetency) => {
                    if (competency.category !== category) { return false; }
                    if (competency.levels.indexOf(level) === -1) { return false; }
                    return true;
                })
                
                return out;
            }).mapSelect((competency) => {
                const out = renderCompetency(competency, level);
                return out;
            })
    }

    const clsSelector = selectHiddenLevels().select((levels) => {
        if (levels.indexOf(level) !== -1) { return 'column hidden' }
        return 'column';
    })

    // listeners
    let isCollapsed = false;
    const onExpandCollapse = () => {
        isCollapsed = !isCollapsed;
        addOrRemoveClass(out, 'collapsed', isCollapsed);
    }

    const onDelete = (e: Event) => {
        STATE.set('hiddenLevels', [ ...STATE.get('hiddenLevels'), label ])
        e.stopPropagation();
    }

    // generate the actual element
    const out = createElement({
        cls: clsSelector,
        styles,
        children: [
            { cls: 'colName', eventListeners: { click: () => onExpandCollapse() }, children: [
                { type: 'img', attr: { src: './res/down_caret.png' } },
                { content: label },
                { 
                    type: 'img', 
                    attr: { src: './res/ex.png' }, 
                    cls: isGroupOfGroups ? 'icon' : 'hidden',
                    eventListeners: { click: (e) => onDelete(e) }
                },
            ] },
            {
                cls: 'groupChildren',
                children
            }
        ]
    })

    return out;
}
