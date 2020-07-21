import { MANAGER_COMPETENCIES, IC_COMPETENCIES } from './constants';
import { loadFile as lf } from '@toolkip/server';

const loadFile = async (filename: string) => {
  return await lf({ filename });
};

export const loadEngCompetencies = async () => {
  const fileContents = await loadFile(IC_COMPETENCIES);
  return fileContents;
};

export const loadManagerCompetencies = async () => {
  const fileContents = await loadFile(MANAGER_COMPETENCIES);
  return fileContents;
};
