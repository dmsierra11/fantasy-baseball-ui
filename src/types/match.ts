import { TeamScore } from './team';

export type MatchStatus = 'started' | 'postponed' | 'delayed' | 'final';

export interface Match {
  date: string;
  homeTeam: TeamScore;
  awayTeam: TeamScore;
  status?: MatchStatus;
  progress?: string | number;
}
