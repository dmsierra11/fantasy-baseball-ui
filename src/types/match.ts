import type { TeamScoreType } from './team';

export type MatchStatus = 'started' | 'postponed' | 'delayed' | 'final';

export interface MatchType {
  date: string;
  homeTeam: TeamScoreType;
  awayTeam: TeamScoreType;
  status?: MatchStatus;
  progress?: string | number;
}
