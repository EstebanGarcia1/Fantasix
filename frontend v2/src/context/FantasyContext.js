// src/context/FantasyContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

// Crear el contexto
const FantasyContext = createContext();

export const FantasyProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [participantsData, playersData, teamsData] = await Promise.all([
          api.fetchParticipants(),
          api.fetchPlayers(),
          api.fetchTeams(),
        ]);

        setParticipants(participantsData.data.map(participant => ({
          ...participant,
          picks: participant.picks || [] // Asegúrate de que `picks` siempre sea un array.
        })));
        setPlayers(playersData.data);
        setTeams(teamsData.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <FantasyContext.Provider
      value={{
        participants,
        players,
        teams,
        loading,
        setParticipants,
        setPlayers,
        setTeams,
      }}
    >
      {children}
    </FantasyContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useFantasy = () => {
  return useContext(FantasyContext);
};
