// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Asegúrate de que esta URL sea correcta y el servidor esté corriendo en este puerto.

const api = {
  fetchTeams: () => axios.get(`${API_URL}/teams`),
  fetchPlayers: () => axios.get(`${API_URL}/players`),
  fetchParticipants: () => axios.get(`${API_URL}/participants`),
  fetchPicks: () => axios.get(`${API_URL}/picks`), // Asegúrate de que esta línea exista

  pickPlayer: (participantId, playerId, pickOrder) => {
    return axios.post(`${API_URL}/picks`, {
      participantId,
      playerId,
      pickOrder
    });
  },  

  releasePick: (participantId, playerId) => {
    return axios.delete(`${API_URL}/picks/${participantId}/${playerId}`);
  },

  resetPicks: () => axios.delete(`${API_URL}/picks/reset`)
};

export default api;
