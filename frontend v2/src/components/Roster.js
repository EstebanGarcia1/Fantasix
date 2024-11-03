// src/components/Roster.js
import React from 'react';
import { useFantasy } from '../context/FantasyContext';

const RosterScreen = () => {
  const { participants, players, loading } = useFantasy();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!participants || participants.length === 0) {
    return <div>No participants available.</div>;
  }

  return (
    <div className="roster-screen">
      {participants.map((participant) => (
        <div key={participant.id} className="participant-roster">
          <h2>{participant.name}'s Roster</h2>
          <ul>
            {players
              .filter((player) => participant.picks?.some((pick) => pick.playerId === player.id))
              .map((player) => (
                <li key={player.id}>
                  {player.name} - {player.position}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RosterScreen;
