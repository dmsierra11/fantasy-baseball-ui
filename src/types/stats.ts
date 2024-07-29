export interface PlayerStatsType {
  name: string;
  team: string;
  position?: string;
  categories: string[];
  stats: {
    [key: string]: string | number;
  };
}

export type StatsType = {
  [key: string]: string | number;
};
