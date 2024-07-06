import React from 'react';
import '../styles/stylesModal.css'
import { InformacionUsuario } from './InformacionUsuario';


export const ModalInfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <div className="modal-content">
          <InformacionUsuario/>
        </div>
      </div>
    </div>
  );
};