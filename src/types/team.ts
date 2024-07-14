export interface TeamType {
  name: string;
  logoUrl?: string;
  shortName?: string;
}

export type TeamScoreType = TeamType & {
  record: string;
  score?: number;
  runs?: number;
  hits?: number;
  errors?: number;
};

export type TeamStandingsType = TeamType & {
  wins: number;
  losses: number;
  gamesPlayed?: number;
  percentage?: string;
  gamesBehind?: string;
};
