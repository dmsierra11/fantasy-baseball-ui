export interface Team {
  logoUrl: string;
  name: string;
  shortName: string;
}

export type TeamScore = Team & {
  record: string;
  score?: number;
  runs?: number;
  hits?: number;
  errors?: number;
};

export type TeamStandings = Team & {
  wins: number;
  losses: number;
  gamesPlayed?: number;
  percentage?: string;
  gamesBehind?: string;
};
