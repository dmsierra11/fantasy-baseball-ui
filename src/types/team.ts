export interface Team {
  logoUrl: string;
  name: string;
  shortName: string;
}

export type TeamScore = Team & {
  score: number;
  record: string;
};

export type TeamStandings = Team & {
  wins: number;
  losses: number;
  gamesPlayed?: number;
  percentage?: string;
  gamesBehind?: string;
};
