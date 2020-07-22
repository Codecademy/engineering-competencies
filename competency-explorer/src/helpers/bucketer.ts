import { Competency, Level } from "../models";
import { getLevelIndex } from "./levelDirection";

type CompetencyBucket = {
  competencies: Competency[];
  originLevel: Level;
};

export const bucketByOriginLevel = (
  competencies: Competency[],
  levels: Level[]
): CompetencyBucket[] => {
  const buckets: Record<string, CompetencyBucket> = {};

  for (let c of competencies) {
    const originLevel = c.originLevel;
    const originIndex = getLevelIndex(originLevel, levels);

    if (!buckets[originIndex]) {
      buckets[originIndex] = { competencies: [], originLevel };
    }

    buckets[originIndex].competencies.push(c);
  }

  // sort the buckets appropriately
  return sortByLevel(buckets, levels);
};

const sortByLevel = (
  buckets: Record<number, CompetencyBucket>,
  levels: Level[]
) => {
  const out = [];
  for (let i = 0; i < levels.length; i += 1) {
    if (!buckets[i]) {
      continue;
    }
    if (buckets[i].competencies.length <= 0) {
      continue;
    }
    out.push(buckets[i]);
  }
  return out;
};

export const bucketBySpecificLevel = (
  competencies: Competency[],
  level: Level
): CompetencyBucket[] => {
  const buckets: Record<string, CompetencyBucket> = {};

  for (let c of competencies) {
    const originLevel = c.originLevel;
    const originKey = originLevel === level ? originLevel : "other";

    if (!buckets[originKey]) {
      buckets[originKey] = { competencies: [], originLevel: originKey };
    }

    buckets[originKey].competencies.push(c);
  }

  // sort the buckets appropriately
  return [buckets["other"], buckets[level]];
};
