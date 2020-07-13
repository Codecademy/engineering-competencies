const EXCLUDE_HEADERS = ["FAQ"];
const LEVEL_REGEX = /^\s*?##\s*?([\w &/]+)\s*?$/;
const CATEGORY_REGEX = /^\s*?###\s*?(.+)$/;
const COMPETENCY_REGEX = /^\s*?[*-]\s*?(.+)$/;

export const matchLevel = (line: string) => _match(LEVEL_REGEX, line);
export const matchCategory = (line: string) => _match(CATEGORY_REGEX, line);
export const matchCompetency = (line: string) => _match(COMPETENCY_REGEX, line);

const _match = (regex: RegExp, line: string) => {
  const match = regex.exec(line);
  if (!match) {
    return "";
  }
  const out = match[1].trim();

  /**
   * this is janky, but because there are some H2s that aren't levels
   * and GH doesn't allow custom IDs on headers, it's otherwise pretty
   * tricky to get at which headers are relevant; open to better
   * suggestions here
   */
  for (let excluded of EXCLUDE_HEADERS) {
    if (out === excluded) {
      return "";
    }
  }

  return out;
};

/**
 * isRelevantHeader
 * ----------------------------------------------------------------------------
 * check if the specified line is a header that indicates a potential level
 */
export const isH2 = (line: string) => {
  const strippedLine = line.replace(/^\s+/, "");
  if (strippedLine.substring(0, 2) === "##" && strippedLine[2] !== "#") {
    return true;
  }
  return false;
};
