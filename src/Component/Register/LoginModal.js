import React, { useState } from 'react';
import '../Navbar.css';
import './Modal.css';


const LoginModal = ({ showModal, setShowModal, handleLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For now, let's just set the username and close the modal
    handleLoggedIn(username);
    setShowModal(false);
  };

  return (
    showModal && (
      <div className='modal-container'>
        <div className='modal-content'>
          <h2>Login</h2>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p className='close-modal' onClick={() => setShowModal(false)}>
            Close
          </p>
        </div>
      </div>
    )
  );
};

export default LoginModal;
