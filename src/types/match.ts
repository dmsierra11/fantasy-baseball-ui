import type { TeamScoreType } from './team';

export type MatchStatus = 'started' | 'postponed' | 'delayed' | 'final';

export interface MatchType {
  id?: string;
  date: string;
  time?: string;
  name?: string;
  home_team: TeamScoreType;
  away_team: TeamScoreType;
  status?: MatchStatus | string;
  progress?: string | number;
  location?: string;
}
