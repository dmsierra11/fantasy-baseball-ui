import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { PlayerStatsType } from '../../types';
import { SectionCard } from '../SectionCard';

interface PlayerStatsProps {
  categories: string[];
  players: PlayerStatsType[];
  sectionTitle?: string;
  limit?: number;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({
  players,
  categories,
  sectionTitle,
  limit,
}) => {
  const limitedPlayers = limit ? players.slice(0, limit) : players;
  console.log('categories', categories);
  return (
    <SectionCard sectionTitle={sectionTitle}>
      <TableContainer style={{ overflowX: 'auto' }}>
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell>Team</TableCell>
              {categories.map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {limitedPlayers.map((player, index) => (
              <TableRow key={player.name} className="hover:bg-gray-50">
                <TableCell>
                  {index + 1}. {player.name}
                  {player.position ? ` (${player.position})` : ''}
                </TableCell>
                <TableCell>{player.team}</TableCell>
                {categories.map((field) => (
                  <TableCell key={field}>{player.stats[field] || 0}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionCard>
  );
};

export { PlayerStats };
