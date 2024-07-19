import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Avatar } from '@mui/material';
import { SectionCard } from '../SectionCard';

interface PlayerInfoProps {
  imgSrc: string;
  name: string;
  text1: string;
  text2?: string;
}

interface GameInfoProps {
  sectionTitle?: string;
  component?: 'div' | 'paper';
  players: PlayerInfoProps[];
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  imgSrc,
  name,
  text1,
  text2,
}) => {
  return (
    <Stack alignItems="center">
      <Avatar src={imgSrc} alt={name} sx={{ width: 100, height: 100, mb: 2 }} />
      <Typography variant="h6" fontWeight="700">
        {name}
      </Typography>
      <Typography variant="caption">{text1}</Typography>
      {text2 && <Typography fontWeight="700">{text2}</Typography>}
    </Stack>
  );
};

const GameInfo: React.FC<GameInfoProps> = ({
  sectionTitle,
  component = 'paper',
  players,
}) => {
  return (
    <SectionCard
      sectionTitle={sectionTitle}
      component={component}
      titleSize="h5"
    >
      <Stack direction="row" spacing={2} sx={{ overflowX: 'auto' }}>
        {players.map((player) => (
          <PlayerInfo key={player.name} {...player} />
        ))}
      </Stack>
    </SectionCard>
  );
};

export { GameInfo };
