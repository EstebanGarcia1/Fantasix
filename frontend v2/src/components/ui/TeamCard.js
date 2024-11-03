// src/components/ui/TeamCard.js
import React from 'react';
import PlayerCard from "./PlayerCard";
import { Card, CardHeader, CardContent, CardTitle } from "./card";

const TeamCard = ({ team, players, onPick, onUnpick }) => {
  return (
    <Card className="team-card">
      <CardHeader className="team-header">
        <CardTitle>{team.name}</CardTitle>
      </CardHeader>
      <CardContent className="players-container">
        {players.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            onPick={onPick}
            onUnpick={onUnpick}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamCard;
