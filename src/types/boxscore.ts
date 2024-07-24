import { PlayerStatsType } from './stats';
import { TeamType } from './team';

interface TeamScore {
  runs?: number;
  hits?: number;
  errors?: number;
}

interface LineScoreTeam {
  teamScore: TeamScore[];
  totalRuns?: number;
  totalHits?: number;
  totalErrors?: number;
}

export interface BoxScoreDetailsType extends TeamType {
  lineScore: LineScoreTeam;
  battingStats?: PlayerStatsType;
  pitchingStats?: PlayerStatsType;
}

export interface BoxscoreType {
  awayTeam: BoxScoreDetailsType;
  homeTeam: BoxScoreDetailsType;
}
