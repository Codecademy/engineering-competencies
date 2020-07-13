import { MANAGER_COMPETENCIES, IC_COMPETENCIES } from './constants';

const loadFile = async (filename: string) => {
  const response = await fetch(filename);
  return response.text();
};

export const loadEngCompetencies = async () => {
  const fileContents = await loadFile(IC_COMPETENCIES);
  return fileContents;
};

export const loadManagerCompetencies = async () => {
  const fileContents = await loadFile(MANAGER_COMPETENCIES);
  return fileContents;
};
