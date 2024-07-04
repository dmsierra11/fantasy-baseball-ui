import { TeamScore } from './team';

export interface Match {
  date: string;
  homeTeam: TeamScore;
  awayTeam: TeamScore;
  status?: string;
}
