export interface TeamType {
  name: string;
  logo?: string;
  short_name?: string;
}
export interface TeamScoreType extends TeamType {
  record?: string;
  score?: number;
}
export interface TeamStandingsType extends TeamType {
  wins: number;
  losses: number;
  games_played?: number;
  win_percentage?: string;
  games_behind?: string;
}
