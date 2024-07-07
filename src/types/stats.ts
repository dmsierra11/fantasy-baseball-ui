export interface PlayerStats {
  name: string;
  team: string;
  stats: {
    [key: string]: string | number;
  };
}
