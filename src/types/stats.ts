export interface PlayerStatsType {
  name: string;
  team: string;
  stats: {
    [key: string]: string | number;
  };
}
