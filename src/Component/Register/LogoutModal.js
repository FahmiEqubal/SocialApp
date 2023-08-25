import React from 'react';
import '../Navbar.css';
import './Modal.css';


const LogoutModal = ({ showModal, setShowModal, handleLoggedOut }) => {
  const handleLogout = () => {
    // Perform logout logic here
    // For now, let's just log out the user and close the modal
    handleLoggedOut();
    setShowModal(false);
  };

  return (
    showModal && (
      <div className='modal-container'>
        <div className='modal-content'>
          <h2>Logout</h2>
          <p>Are you sure you want to log out?</p>
          <button onClick={handleLogout}>Logout</button>
          <p className='close-modal' onClick={() => setShowModal(false)}>
            Cancel
          </p>
        </div>
      </div>
    )
  );
};

export default LogoutModal;
