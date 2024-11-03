// src/components/ui/ConfirmationModal.js

import React from 'react';
import { Button } from "./button";
import '../../styles/styles/modal.scss'; 

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  
  // Manejo de la confirmación
  const handleConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm();
    } else {
      console.error('onConfirm is not a function');
    }
  };

  // Manejo de la cancelación
  const handleCancel = () => {
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      console.error('onCancel is not a function');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmación</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <Button className="btn confirm-btn" onClick={handleConfirm}>
            Confirmar
          </Button>
          <Button className="btn cancel-btn" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
