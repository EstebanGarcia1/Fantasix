// src/components/Clasificacion.js

import React, { useState, useEffect } from 'react';
import { useFantasy } from '../context/FantasyContext';
import './../styles/clasificacion.scss'; // Añadir estilos para la clasificación

const ClasificacionScreen = () => {
  const { participants } = useFantasy();

  if (!participants || participants.length === 0) {
    return <div>No hay participantes disponibles</div>;
  }

  const getTotalPoints = (picks) => {
    if (!Array.isArray(picks)) {
      return 0; // Retorna 0 si `picks` no es un array válido
    }
    return picks.reduce((total, pick) => total + (pick.score || 0), 0);
  };

  // Ordenar participantes por puntos totales
  const sortedParticipants = [...participants].sort((a, b) => {
    const pointsA = getTotalPoints(a.picks);
    const pointsB = getTotalPoints(b.picks);
    return pointsB - pointsA; // Orden descendente
  });

  return (
    <div className="clasificacion-screen">
      <h2>Clasificación</h2>
      <div className="participants-list">
        {sortedParticipants.map((participant) => (
          <div key={participant.id} className="participant-item">
            <span>{participant.name}</span>
            <span>Puntos Totales: {getTotalPoints(participant.picks)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClasificacionScreen;
