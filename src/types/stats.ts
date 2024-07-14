export interface PlayerStatsType {
  name: string;
  team: string;
  position?: string;
  stats: {
    [key: string]: string | number;
  };
}
