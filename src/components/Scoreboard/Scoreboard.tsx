import { ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from '../../config/theme';
import type { Match, TeamScore } from '../../types';
import { formatDate } from '../../utils/date';
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

const getGameProgress = (progress?: number | string) => {
  if (typeof progress === 'string') {
    return progress;
  }
  if (progress && progress % 2 !== 0) {
    return `BOTTOM ${progress}`;
  }
  return `TOP ${progress || 1}`;
};

const ScoreboardContent: React.FC<ScoreboardProps> = ({
  date,
  homeTeam,
  awayTeam,
  status,
  progress,
}) => {
  const gameStatus = status === 'started' ? getGameProgress(progress) : status;
  return (
    <ThemeProvider theme={theme}>
      <div className="scoreboard-card-wrapper">
        <Typography
          variant="overline"
          color="textSecondary"
          className="game-status-label"
          fontWeight="600"
        >
          {gameStatus || date}
        </Typography>
        <TeamRow {...homeTeam} />
        <TeamRow {...awayTeam} />
      </div>
    </ThemeProvider>
  );
};

const ScoreboardComponent: React.FC<ScoreboardProps> = ({
  date,
  homeTeam,
  awayTeam,
  status,
  gameDetailsPath,
  progress,
}) => {
  const formattedDate = formatDate(date);
  if (gameDetailsPath) {
    return (
      <a href={gameDetailsPath}>
        <ScoreboardContent
          {...{ date: formattedDate, homeTeam, awayTeam, status, progress }}
        />
      </a>
    );
  }
  return (
    <ScoreboardContent
      {...{ date: formattedDate, homeTeam, awayTeam, status, progress }}
    />
  );
};

export { ScoreboardComponent };
