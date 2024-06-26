import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ isOpen, data, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Data Point Details</h2>
        <p>Timestamp: {data.timestamp}</p>
        <p>Value: {data.value}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalComponent;
