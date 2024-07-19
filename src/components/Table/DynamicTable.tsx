import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { StatsType } from '../../types';
import { SectionCard } from '../SectionCard';

interface DynamicTableProps {
  players: StatsType[];
  sectionTitle?: string;
  limit?: number;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  players,
  sectionTitle,
  limit,
}) => {
  const fields = Object.keys(players[0]);
  const limitedPlayers = limit ? players.slice(0, limit) : players;
  return (
    <SectionCard sectionTitle={sectionTitle}>
      <TableContainer style={{ overflowX: 'auto' }}>
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              {fields.map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {limitedPlayers.map((player) => (
              <TableRow key={player.name} className="hover:bg-gray-50">
                {fields.map((field) => (
                  <TableCell key={field}>{player[field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionCard>
  );
};

export { DynamicTable };
