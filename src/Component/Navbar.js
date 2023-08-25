import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import LoginModal from './Register/LoginModal';
import LogoutModal from './Register/LogoutModal';
import RegistrationModal from './Register/RegistrationModal';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleRegistration = () => {
    setShowRegistrationModal(true);
  };

  const handleUserClick = () => {
    if (loggedIn) {
      handleLogout();
    } else {
      handleLogin();
    }
  };

  const handleLoggedIn = (name) => {
    setUsername(name);
    setLoggedIn(true);
  };

  const handleLoggedOut = () => {
    setUsername('');
    setLoggedIn(false);
  };

  return (
    <div className='mainNavbar'>
      <div className='LogoContainer'>
        <p>TerraConn</p>
      </div>
      <div>
        <div className='searchInputContainer'>
          <FaSearch className='searchIcons' />
          <input
            type='text'
            className='searchInput'
            name=''
            id=''
            placeholder='Search Your Friends'
          />
        </div>
      </div>
      <div className='IconsContainer'>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={handleUserClick}
        >
          <FaUserCircle className='ProfileImage' />
          <p style={{ marginLeft: '5px' }}>{loggedIn ? username : 'Login'}</p>
        </div>
      </div>
      <LoginModal
        showModal={showLoginModal}
        setShowModal={setShowLoginModal}
        handleLoggedIn={handleLoggedIn}
      />
      {loggedIn ? (
        <LogoutModal
          showModal={showLogoutModal}
          setShowModal={setShowLogoutModal}
          handleLoggedOut={handleLoggedOut}
        />
      ) : (
        <RegistrationModal
          showModal={showRegistrationModal}
          setShowModal={setShowRegistrationModal}
        />
      )}
    </div>
  );
}
