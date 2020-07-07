import { loadFile as load } from '@toolkip/server';

export const loadEngCompetencies = async () => {
    const fileContents = await load({ filename: '../README.md' });
    return fileContents;
}

export const loadManagerCompetencies = async () => {
    const fileContents = await load({ filename: '../managers.md' });
    return fileContents;
}

