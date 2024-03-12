// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    width: '100vw',
    height: '100vh',
  };

  const contentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div>
      {/* Blurred Background */}
      {isOpen && <div className="blurred-background"></div>}

      {/* Modal Content */}
      <div style={modalStyles}>
        <div className="modal-content" style={contentStyles}>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
