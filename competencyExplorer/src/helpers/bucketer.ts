import { ICompetency, Level } from "../models/competency";
import { STATE } from "../models/state";
import { getOriginLevel, getLevelIndex } from "./levelDirection";

export const bucketByOriginLevel = (competencies: ICompetency[]) => {
  const buckets: Record<string, CompetencyBucket> = {};

  for (let c of competencies) {
    const originLevel = getOriginLevel(c);
    const originIndex = getLevelIndex(originLevel);

    if (!buckets[originIndex]) {
      buckets[originIndex] = { competencies: [], originLevel };
    }

    buckets[originIndex].competencies.push(c);
  }

  // sort the buckets appropriately
  return sortByLevel(buckets);
};

const sortByLevel = (buckets: Record<number, CompetencyBucket>) => {
  const out = [];
  const levels = STATE.get("levels");
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

type CompetencyBucket = {
  competencies: ICompetency[];
  originLevel: Level;
};
