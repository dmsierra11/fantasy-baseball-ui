import { Link, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import React from 'react';
import type { MatchType, TeamScoreType } from '../../types';
import { formatDate } from '../../utils/date';
import './Scoreboard.css';

interface ScoreboardProps extends MatchType {
  gameDetailsPath?: string;
}

const TeamRow: React.FC<TeamScoreType> = ({
  name,
  short_name,
  logo,
  record,
  score,
}) => {
  const teamName = short_name || name;
  return (
    <Stack
      key={short_name}
      direction={'row'}
      spacing={2}
      className="team-row-wrapper"
    >
      <Stack direction={'row'} spacing={2}>
        <Avatar src={logo} alt={short_name} sx={{ width: 24, height: 24 }} />
        <Typography fontWeight="bold">{teamName}</Typography>
      </Stack>
      {record && <Typography fontSize="small" color="textSecondary">
        {record}
      </Typography>
      }
      {score && <Typography variant="h5">{score}</Typography>}
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
  time,
  name,
  home_team,
  away_team,
  status,
  progress,
}) => {
  const gameStatus = status === 'started' ? getGameProgress(progress) : status;
  const formattedDate = formatDate(date);
  const formattedDateAndTime = `${formattedDate} - ${time}`;
  return (
    <Card variant="outlined" className="scoreboard-card-wrapper">
      <CardContent>
        <Typography variant="overline" color="textSecondary" fontWeight="600">
          {name || gameStatus || formattedDateAndTime}
        </Typography>
        <TeamRow {...home_team} />
        <TeamRow {...away_team} />
      </CardContent>
    </Card>
  );
};

const Scoreboard: React.FC<ScoreboardProps> = (props) => {
  const { date, gameDetailsPath, ...rest } = props;
  const formattedDate = formatDate(date);
  if (props.gameDetailsPath) {
    return (
      <Link
        href={gameDetailsPath}
        underline="none"
        sx={{ ':hover': { cursor: 'pointer' } }}
      >
        <ScoreboardContent {...{ date: formattedDate, ...rest }} />
      </Link>
    );
  }
  return <ScoreboardContent {...{ date: formattedDate, ...rest }} />;
};

export { Scoreboard };
