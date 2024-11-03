// src/components/ui/PlayerCard.js
import React, { useState } from 'react';
import '../../styles/styles/PlayerCard.scss';

const PlayerCard = ({ player, onPick, onUnpick }) => {
  const [isPicked, setIsPicked] = useState(player.selected || false);

  const handlePick = () => {
    if (!isPicked) {
      const confirmPick = window.confirm("Are you sure you want to pick this player?");
      if (confirmPick) {
        onPick(player.id);
        setIsPicked(true);
      }
    } else {
      const confirmUnpick = window.confirm("Are you sure you want to remove this pick?");
      if (confirmUnpick) {
        onUnpick(player.id);
        setIsPicked(false);
      }
    }
  };

  return (
    <div className={`player-card ${isPicked ? 'picked' : ''}`} onClick={handlePick}>
      <h3>{player.name}</h3>
      <p>{player.position}</p>
    </div>
  );
};

export default PlayerCard;
