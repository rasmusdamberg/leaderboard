import React from 'react';

const Leaderboard = ({ players }) => {
  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Top 10 Players</h2>
      <ul>
        {players.slice(0, 10).map((player, index) => (
          <li key={index} className="mb-2">
            <div className="flex">
              <span>{index + 1}.</span>
              <img src={player.avatar} alt="Player Avatar" className='w-8 h-8 ml-3 mr-2' />
              <span className='pr-1 font-bold'>{player.username}</span>
              <span>({player.score} points)</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
