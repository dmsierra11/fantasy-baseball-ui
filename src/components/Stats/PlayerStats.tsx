import { PlayerStats } from '../../types';

interface PlayerStatsProps {
  players: PlayerStats[];
}

const PlayerStatsComponent: React.FC<PlayerStatsProps> = ({ players }) => {
  const fields = Object.keys(players[0].stats);
  return (
    <div className="card-wrapper">
      <div className="table-container">
        <div className="table-scroller">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Players</th>
                <th>Team</th>
                {fields.map((field) => (
                  <th key={field}>{field}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.name} className="hover:bg-gray-50">
                  <td>{player.name}</td>
                  <td>{player.team}</td>
                  {fields.map((field) => (
                    <td key={field}>{player.stats[field]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { PlayerStatsComponent };
