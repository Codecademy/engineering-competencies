import { ICompetency, Category, Level } from '../models/competency';
import { STATE } from '../models/state';

export interface Bucket {
    key: Level | Category;
    type: 'level' | 'category';
    entries: ICompetency[];
}

export const selectByLevel = (competencies: ICompetency[]): Bucket[] => {
    console.log('selecting by level: ' + competencies.length);
    const out = {};
    for (let c of competencies) {
        if (!c) { continue; }
        for (let l of c.levels) {
            if (!out[l]) { out[l] = []; }
            out[l].push(c);
        }
    }
    return orderByLevel(out);
}

export const selectByCategory = (competencies: ICompetency[]): Bucket[] => {
    const out = {};
    for (let c of competencies) {
        if (!c) { continue; }
        const category = c.category;
        if(!out[category]) { out[category] = []; }
        out[category].push(c);
    }
    return orderByCategory(out);
}

export const orderByLevel = (byLevel: Record<Level, ICompetency[]>): Bucket[] => {
    const out: Bucket[] = [];
    const orderedLevels = STATE.get('levels');
    for (let level of orderedLevels) {
        out.push({
            key: level,
            type:'level',
            entries: byLevel[level]
        });
    }
    return out;
}

export const orderByCategory = (byCategory: Record<Category, ICompetency[]>): Bucket[] => {
    const out: Bucket[] = [];
    const orderedCategories = STATE.get('categories');
    for (let cat of orderedCategories) {
        out.push({
            key: cat,
            type: 'category',
            entries: byCategory[cat]
        });
    }
    return out;
}