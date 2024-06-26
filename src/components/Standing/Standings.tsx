interface Team {
  name: string;
  wins: number;
  losses: number;
  percentage: string;
  gamesBehind: string;
  logoUrl: string;
}

interface StandingsProps {
  division: string;
  teams: Team[];
}

const Standings: React.FC<StandingsProps> = ({ division, teams }) => {
  return (
    <div className="card-wrapper p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">{division}</h3>
      <div className="table-container overflow-x-auto">
        <div className="table-scroller">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-300">Team</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">W</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">L</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">%</th>
                <th className="px-4 py-2 border-b-2 border-gray-300">GB</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.name} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">
                    <div className="flex items-center">
                      <img
                        src={team.logoUrl}
                        alt={team.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span>{team.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">{team.wins}</td>
                  <td className="px-4 py-2 border-b">{team.losses}</td>
                  <td className="px-4 py-2 border-b">{team.percentage}</td>
                  <td className="px-4 py-2 border-b">{team.gamesBehind}</td>
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
