import { IState, STATE } from '../models/state';
import { ICompetency, Category, Level } from '../models/competency';
import { matchCategory, matchCompetency, matchLevel, isH2 } from './matcher';
import { map } from '@toolkip/object-helpers';

type ParseLineState = {
    levels: Record<Level, number>;
    categories: Record<Category, number>;
    competencies: Record<string, ICompetency>;
}

type ParseLineProps = {
    line: string;
    state: ParseLineState;
    lastLevel: string;
    lastCategory: string;
    levelOrder: string[],
    categoryOrder: string[]
}

export const parseFile = (fileContents: string): IState => {

    const lines = getLinesInFile(fileContents);

    const props: ParseLineProps = {
        line: '',
        state: {
            competencies: {},
            levels: {},
            categories: {}
        }, 
        lastLevel: null, 
        lastCategory: null,
        levelOrder: [],
        categoryOrder: []
    }

    for (let line of lines) {
        props.line = line;
        parseLine(props)
    }
    //console.log(competencies);
    const out = {
        levels: props.levelOrder,
        categories: props.categoryOrder,
        competencies: map(props.state.competencies, (c) => c)
    }
    
    return out;
}

const getLinesInFile = (fileContents: string) => {
    return fileContents.split('\n');
}

/**
 * parseLine
 * ----------------------------------------------------------------------------
 * handle getting content out of a line
 */
const parseLine = (props: ParseLineProps) => {
    const { line, state } = props

    // nothing to do if we aren't yet on the competencies
    const levelHeader = matchLevel(line);
    if (!props.lastLevel && !levelHeader) { return; }

    // reset if this is a header that doesn't meet criteria
    if (props.lastLevel && isH2(line) && !levelHeader) { 
        props.lastLevel = null;
        return;
    }

    if (levelHeader) { return parseLevel(props, levelHeader); }

    // if this is a category, set that value here
    const categoryHeader = matchCategory(line);
    if (categoryHeader) { return parseCategory(props, categoryHeader, levelHeader); }

    // if this is a competency, create it
    const competency = matchCompetency(line);
    if (competency) { return parseCompetency(competency, props); }
}

const parseCategory = (props: ParseLineProps, categoryHeader: string, levelHeader: string) => {
    const { state } = props;
    props.lastCategory = categoryHeader;

    if (!state.categories[categoryHeader]) {
        state.categories[categoryHeader] = 0;
        props.categoryOrder.push(categoryHeader);
    }
    state.categories[categoryHeader] += 1;
    return;
}

const parseLevel = (props: ParseLineProps, levelHeader: string) => {
    const { state } = props;
    props.lastLevel = levelHeader;

    if (!state.levels[levelHeader]) {
        state.levels[levelHeader] = 0;
        props.levelOrder.push(levelHeader);
    }
    state.levels[levelHeader] += 1;

    return;
}

const parseCompetency = (competency: string, props: ParseLineProps) => {
    const { state } = props;

    if (state.competencies[competency]) {
        state.competencies[competency].levels.push(props.lastLevel);
    }
    else {
        state.competencies[competency] = {
            id: competency,
            name: competency,
            levels: [props.lastLevel],
            category: props.lastCategory
        };
    }
}

