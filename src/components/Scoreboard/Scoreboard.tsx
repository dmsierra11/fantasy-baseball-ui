import { ThemeProvider, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
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
    <Stack
      key={shortName}
      direction={'row'}
      spacing={2}
      className="team-row-wrapper"
    >
      <Stack direction={'row'} spacing={2}>
        <Avatar src={logoUrl} alt={shortName} sx={{ width: 24, height: 24 }} />
        <Typography fontWeight="bold">{shortName}</Typography>
      </Stack>
      <Typography fontSize="small" color="textSecondary">
        {record}
      </Typography>
      {score && <Typography fontWeight="bold">{score}</Typography>}
    </Stack>
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
      <Card variant="outlined" className="scoreboard-card-wrapper">
        <CardContent>
          <Typography variant="overline" color="textSecondary" fontWeight="600">
            {gameStatus || date}
          </Typography>
          <TeamRow {...homeTeam} />
          <TeamRow {...awayTeam} />
        </CardContent>
      </Card>
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
