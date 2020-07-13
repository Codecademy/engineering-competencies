import { State, Category, Level, Competency } from "../models";
import { matchCategory, matchCompetency, matchLevel, isH2 } from "./matcher";

type ParseLineState = {
  levels: Set<Level>;
  categories: Set<Category>;
  competencies: Record<string, Competency>;
};

type ParseLineProps = {
  state: ParseLineState;

  lastLevel: string;
  lastCategory: string;
};

export const parseFile = (
  fileContents: string
): Omit<State, "hiddenLevels" | "displayMode"> => {
  const lines = getLinesInFile(fileContents);

  const props: ParseLineProps = {
    state: {
      competencies: {},
      levels: new Set(),
      categories: new Set(),
    },
    lastLevel: "",
    lastCategory: "",
  };

  for (let line of lines) {
    parseLine(line, props);
  }

  return props.state;
};

const getLinesInFile = (fileContents: string) => {
  return fileContents.split("\n");
};

/**
 * parseLine
 * ----------------------------------------------------------------------------
 * handle getting content out of a line
 */
const parseLine = (line: string, props: ParseLineProps) => {
  const { lastLevel } = props;

  // nothing to do if we aren't yet on the competencies
  const levelHeader = matchLevel(line);
  if (!lastLevel && !levelHeader) {
    return;
  }

  // reset if this is a header that doesn't meet criteria
  if (lastLevel && isH2(line) && !levelHeader) {
    props.lastLevel = "";
    return;
  }
  // if it is a level header
  if (levelHeader) {
    return parseLevel(props, levelHeader);
  }

  // if this is a category, set that value here
  const categoryHeader = matchCategory(line);
  if (categoryHeader) {
    return parseCategory(props, categoryHeader);
  }

  // if this is a competency, create it
  const competency = matchCompetency(line);
  if (competency) {
    return parseCompetency(competency, props);
  }
};

/**
 * parseCategory
 * ----------------------------------------------------------------------------
 * parse out the content of the competency category
 */
const parseCategory = (props: ParseLineProps, categoryHeader: string) => {
  const { state } = props;
  props.lastCategory = categoryHeader;

  if (!state.categories.has(categoryHeader)) {
    state.categories.add(categoryHeader);
  }

  return;
};

/**
 * parseLevel
 * ----------------------------------------------------------------------------
 * parse out the content of the competency level
 */
const parseLevel = (props: ParseLineProps, levelHeader: string) => {
  const { state } = props;
  props.lastLevel = levelHeader;

  if (!state.levels.has(levelHeader)) {
    state.levels.add(levelHeader);
  }

  return;
};

/**
 * parseCompetency
 * ----------------------------------------------------------------------------
 * parse the content of the competency itself
 */
const parseCompetency = (competency: string, props: ParseLineProps) => {
  const { state } = props;

  if (state.competencies[competency]) {
    state.competencies[competency].levels.push(props.lastLevel);
  } else {
    state.competencies[competency] = {
      id: competency,
      name: competency,
      levels: [props.lastLevel],
      category: props.lastCategory,
      originLevel: props.lastLevel
    };
  }
};
