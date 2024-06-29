interface Team {
  name: string;
  wins: number;
  losses: number;
  percentage: string;
  gamesBehind: string;
  logoUrl: string;
}

interface StandingsProps {
  division?: string;
  teams: Team[];
}

const Standings: React.FC<StandingsProps> = ({ division, teams }) => {
  return (
    <div className="card-wrapper">
      {division && <h3>{division}</h3>}
      <div className="table-container">
        <div className="table-scroller">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Team</th>
                <th>W</th>
                <th>L</th>
                <th>%</th>
                <th>GB</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.name} className="hover:bg-gray-50">
                  <td>
                    <div className="flex items-center">
                      <img
                        src={team.logoUrl}
                        alt={team.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span>{team.name}</span>
                    </div>
                  </td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                  <td>{team.percentage}</td>
                  <td>{team.gamesBehind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { Standings };

