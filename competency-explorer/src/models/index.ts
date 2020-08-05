export type Level = string;

export type Category = string;

export type DisplayMode = "list" | "matrix";

export type CompetencyId = string;

export type Competency = {
  id: CompetencyId;
  name: string;
  category: Category;
  levels: Level[];
  originLevel: Level;
};

export type State = {
  categories: Set<Category>;
  levels: Set<Level>;
  competencies: Record<CompetencyId, Competency>;

  hiddenLevels: Set<Level>;
  hiddenCategories: Set<Category>;
  displayMode: DisplayMode;
};
