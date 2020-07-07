import { MIdentifiable } from '@toolkip/model';

export type Level = string;
export type Category = string;

export interface ICompetency {
    id: string;
    name: string;
    category: Category;
    levels: Level[];
}