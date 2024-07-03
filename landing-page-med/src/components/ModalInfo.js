import React from 'react';
import '../styles/stylesModal.css'
import { InformacionUsuario } from './InformacionUsuario';


export const ModalInfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <InformacionUsuario/>
        </div>
      </div>
    </div>
  );
};