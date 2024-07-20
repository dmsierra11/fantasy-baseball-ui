import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import type { MatchType, TeamScoreType } from '../../types';

interface GameCardProps extends MatchType {
  sectionTitle?: string;
}

interface GameSideProps extends TeamScoreType {
  additionalText?: string;
  isHome?: boolean;
}

const GameTeam: React.FC<GameSideProps> = ({
  name,
  logoUrl,
  record,
  score,
  additionalText,
  isHome,
}) => {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      {isHome && <Typography variant="h4">{score}</Typography>}
      <Stack>
        <Typography fontWeight="700">{name}</Typography>
        {record && (
          <Typography variant="caption" fontWeight="300">
            {record}
          </Typography>
        )}
        {additionalText && (
          <Typography variant="subtitle2">{additionalText}</Typography>
        )}
      </Stack>
      <Avatar src={logoUrl} alt={name} sx={{ width: 50, height: 50 }} />
      {!isHome && <Typography variant="h4">{score}</Typography>}
    </Stack>
  );
};

const GameCard: React.FC<GameCardProps> = ({
  date,
  awayTeam,
  homeTeam,
  time,
  location,
}) => {
  return (
    <Card sx={{ ':hover': { cursor: 'pointer' } }}>
      <CardContent>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <GameTeam {...awayTeam} />
          <Stack flex={1} alignItems="center">
            <Typography fontWeight="700">{date}</Typography>
            <Typography fontWeight="700">{time ?? 'TBD'}</Typography>
          </Stack>
          <GameTeam {...homeTeam} isHome />
        </Stack>
        {location && (
          <Stack>
            <Divider sx={{ my: 2 }} />
            <Stack alignItems="center">
              <Typography variant="caption">{location}</Typography>
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export { GameCard };
