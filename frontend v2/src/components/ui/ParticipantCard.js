// src/components/ui/ParticipantCard.js
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';

const ParticipantCard = ({ participant, players, onRelease }) => {
  return (
    <Card className="participant-card">
      <CardHeader>
        <CardTitle>{participant.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {players.length > 0 ? (
          players.map(player => (
            <div key={player.id} className="player-item">
              <span>{player.name} ({player.position})</span>
              <Button
                variant="outline"
                size="sm"
                className="release-button"
                onClick={() => onRelease(player.id, participant.id)}
              >
                Remove Pick
              </Button>
            </div>
          ))
        ) : (
          <div>No picks yet</div>
        )}
      </CardContent>
    </Card>
  );
};

export default ParticipantCard;
