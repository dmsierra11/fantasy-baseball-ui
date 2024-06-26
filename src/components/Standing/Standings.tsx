const Standings = () => {
  return (
    <div className="card-wrapper p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">AL East</h3>
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
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://midfield.mlbstatic.com/v1/team/147/spots/72"
                      alt="New York Yankees"
                      className="w-6 h-6 mr-2"
                    />
                    <span>NYY</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">51</td>
                <td className="px-4 py-2 border-b">26</td>
                <td className="px-4 py-2 border-b">.662</td>
                <td className="px-4 py-2 border-b">-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://midfield.mlbstatic.com/v1/team/110/spots/72"
                      alt="Baltimore Orioles"
                      className="w-6 h-6 mr-2"
                    />
                    <span>BAL</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">49</td>
                <td className="px-4 py-2 border-b">25</td>
                <td className="px-4 py-2 border-b">.662</td>
                <td className="px-4 py-2 border-b">0.5</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://midfield.mlbstatic.com/v1/team/111/spots/72"
                      alt="Boston Red Sox"
                      className="w-6 h-6 mr-2"
                    />
                    <span>BOS</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">40</td>
                <td className="px-4 py-2 border-b">35</td>
                <td className="px-4 py-2 border-b">.533</td>
                <td className="px-4 py-2 border-b">10.0</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://midfield.mlbstatic.com/v1/team/139/spots/72"
                      alt="Tampa Bay Rays"
                      className="w-6 h-6 mr-2"
                    />
                    <span>TB</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">37</td>
                <td className="px-4 py-2 border-b">39</td>
                <td className="px-4 py-2 border-b">.487</td>
                <td className="px-4 py-2 border-b">13.5</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://midfield.mlbstatic.com/v1/team/141/spots/72"
                      alt="Toronto Blue Jays"
                      className="w-6 h-6 mr-2"
                    />
                    <span>TOR</span>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">35</td>
                <td className="px-4 py-2 border-b">39</td>
                <td className="px-4 py-2 border-b">.473</td>
                <td className="px-4 py-2 border-b">14.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { Standings };
