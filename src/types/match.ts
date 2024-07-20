import type { TeamScoreType } from './team';

export type MatchStatus = 'started' | 'postponed' | 'delayed' | 'final';

export interface MatchType {
  id?: string;
  date: string;
  time?: string;
  homeTeam: TeamScoreType;
  awayTeam: TeamScoreType;
  status?: MatchStatus;
  progress?: string | number;
  location?: string;
}
