// src/components/Draft.js
import React, { useState, useEffect } from 'react';
import TeamCard from "./ui/TeamCard";
import ParticipantCard from "./ui/ParticipantCard";
import ConfirmationModal from './ui/ConfirmationModal';
import { useFantasy } from '../context/FantasyContext';
import Select from 'react-select';
import './../styles/draft.scss';

const DraftScreen = () => {
  const { teams, players, participants, setParticipants } = useFantasy();
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    player: null,
    action: null,
  });

  useEffect(() => {
    // Set default participant if participants exist
    if (participants.length > 0) {
      setSelectedParticipant(participants[0].id);
    }
  }, [participants]);

  const handlePickConfirmation = (player, action) => {
    setConfirmationModal({ isOpen: true, player, action });
  };

  const handleConfirmPick = () => {
    if (confirmationModal.action === 'pick') {
      handlePick(confirmationModal.player.id);
    } else if (confirmationModal.action === 'unpick') {
      handleUnpick(confirmationModal.player.id);
    }
    // Close the confirmation modal after processing the action
    setConfirmationModal({ isOpen: false, player: null, action: null });
  };

  const handlePick = (playerId) => {
    if (!selectedParticipant) {
      console.error("No participant selected");
      return;
    }

    setParticipants(prev =>
      prev.map(participant =>
        participant.id === selectedParticipant
          ? {
              ...participant,
              picks: [...(participant.picks || []), { playerId, pickOrder: (participant.picks?.length || 0) + 1 }]
            }
          : participant
      )
    );
  };

  const handleUnpick = (playerId) => {
    if (!selectedParticipant) {
      console.error("No participant selected");
      return;
    }

    setParticipants(prev =>
      prev.map(participant =>
        participant.id === selectedParticipant
          ? {
              ...participant,
              picks: (participant.picks || []).filter(p => p.playerId !== playerId)
            }
          : participant
      )
    );
  };

  return (
    <div className="draft-screen">
      {/* Confirmation Modal */}
      {confirmationModal.isOpen && (
        <ConfirmationModal
          message={`¿Estás seguro de ${confirmationModal.action === 'pick' ? 'seleccionar' : 'eliminar'} el jugador ${confirmationModal.player?.name}?`}
          onConfirm={handleConfirmPick}
          onCancel={() => setConfirmationModal({ isOpen: false, player: null, action: null })}
        />
      )}

      {/* Participants Selection */}
      <div className="participants-container">
        <div className="participants-select-wrapper">
          <Select
            options={participants.map(participant => ({
              value: participant.id,
              label: participant.name
            }))}
            value={
              participants.find(p => p.id === selectedParticipant)
                ? {
                    value: selectedParticipant,
                    label: participants.find(p => p.id === selectedParticipant)?.name
                  }
                : null
            }
            onChange={(selectedOption) => setSelectedParticipant(selectedOption.value)}
            className="participant-select"
            placeholder="Selecciona un participante"
          />
        </div>

        <div className="participants-list">
          {participants.map(participant => (
            <ParticipantCard
              key={participant.id}
              participant={participant}
              players={players.filter(player => participant.picks?.some(p => p.playerId === player.id))}
              onUnpick={(playerId) => handlePickConfirmation({ id: playerId, name: players.find(p => p.id === playerId)?.name }, 'unpick')}
            />
          ))}
        </div>
      </div>

      {/* Teams and Players Display */}
      <div className="teams-container">
        <div className="teams-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {teams.map(team => (
            <TeamCard
              key={team.id}
              team={team}
              players={players.filter(player => player.team_id === team.id)}
              onPick={(player) => handlePickConfirmation(player, 'pick')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraftScreen;
