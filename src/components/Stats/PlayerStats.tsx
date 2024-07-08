import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { PlayerStats } from '../../types';

interface PlayerStatsProps {
  players: PlayerStats[];
  sectionTitle?: string;
}

const PlayerStatsComponent: React.FC<PlayerStatsProps> = ({
  players,
  sectionTitle,
}) => {
  const fields = Object.keys(players[0].stats);
  return (
    <Paper className="p-4">
      {sectionTitle && (
        <Typography variant="h6" className="mb-4">
          {sectionTitle}
        </Typography>
      )}
      <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell>Team</TableCell>
              {fields.map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.name} className="hover:bg-gray-50">
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.team}</TableCell>
                {fields.map((field) => (
                  <TableCell key={field}>{player.stats[field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export { PlayerStatsComponent };
