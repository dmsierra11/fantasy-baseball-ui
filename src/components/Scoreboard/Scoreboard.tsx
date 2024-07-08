import React from 'react';
import type { Match, TeamScore } from '../../types';
import { Typography } from '../Typography';
import './Scoreboard.css';

interface ScoreboardProps extends Match {
  gameDetailsPath?: string;
}

const TeamRow: React.FC<TeamScore> = ({
  shortName,
  logoUrl,
  record,
  score,
}) => {
  return (
    <div key={shortName} className="team-row-wrapper">
      <div className="team-logo-name-wrapper">
        <img src={logoUrl} alt={shortName} className="team-logo" />
        <Typography variant="h6" ml={2} mr={2}>
          {shortName}
        </Typography>
      </div>
      <Typography variant="body2" color="textSecondary" mr={2}>
        {record}
      </Typography>
      {score && <Typography variant="h6">{score}</Typography>}
    </div>
  );
};

const ScoreboardContent: React.FC<ScoreboardProps> = ({
  date,
  homeTeam,
  awayTeam,
  status,
}) => {
  return (
    <div className="scoreboard-card-wrapper">
      <Typography variant="overline" className="game-status-label">
        {status || date}
      </Typography>
      <TeamRow {...homeTeam} />
      <TeamRow {...awayTeam} />
    </div>
  );
};

const ScoreboardComponent: React.FC<ScoreboardProps> = ({
  date,
  homeTeam,
  awayTeam,
  status,
  gameDetailsPath,
}) => {
  if (gameDetailsPath) {
    return (
      <a href={gameDetailsPath}>
        <ScoreboardContent {...{ date, homeTeam, awayTeam, status }} />
      </a>
    );
  }
  return <ScoreboardContent {...{ date, homeTeam, awayTeam, status }} />;
};

export { ScoreboardComponent };
