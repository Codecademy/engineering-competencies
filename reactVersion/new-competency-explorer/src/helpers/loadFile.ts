const loadFile = async (filename: string) => {
  const response = await fetch(filename);
  return response.text();
};

export const loadEngCompetencies = async () => {
  const fileContents = await loadFile("README.md");
  return fileContents;
};

export const loadManagerCompetencies = async () => {
  const fileContents = await loadFile("managers.md");
  return fileContents;
};
