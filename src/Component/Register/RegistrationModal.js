import React from 'react';
import './Modal.css';

const RegistrationModal = ({ showModal, setShowModal }) => {
  const handleRegister = () => {
    // Perform registration logic here
    // For now, let's just close the modal
    setShowModal(false);
  };

  return (
    showModal && (
      <div className='modal-container'>
        <div className='modal-content'>
          <h2>Registration</h2>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
          <button onClick={handleRegister}>Register</button>
          <p className='close-modal' onClick={() => setShowModal(false)}>
            Close
          </p>
        </div>
      </div>
    )
  );
};

export default RegistrationModal;
