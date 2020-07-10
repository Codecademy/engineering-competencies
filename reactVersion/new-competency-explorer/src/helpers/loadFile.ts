import ic from '../../../../README.md';
import em from '../../../../managers.md';

const loadFile = async ({ filename }: { filename: string }) => {
  // return new Promise<string>((resolve) => {
  //   const rawFile = new XMLHttpRequest();
  //   rawFile.open("GET", filename, false);
  //   rawFile.onreadystatechange = () => {
  //     if (rawFile.readyState === 4) {
  //       if (rawFile.status === 200 || rawFile.status === 0) {
  //         resolve(rawFile.responseText);
  //       }
  //     }
  //   };
  //   rawFile.send(null);
  // });
  const response = await fetch(ic);
  return response.text();
};

export const loadEngCompetencies = async () => {
  const fileContents = await loadFile({ filename: "../../../README.md" });
  return fileContents;
};

export const loadManagerCompetencies = async () => {
  const fileContents = await loadFile({ filename: "../../../managers.md" });
  return fileContents;
};
