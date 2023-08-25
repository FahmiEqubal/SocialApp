import React from 'react';
import './leftbar.css';
import image from '../Images/Profile.png';

const LeftBar = () => {
  return (
    <div className='left-bar'>
      <div className='profile-box'>
        <div className='profile-image'>
          <img src={image} alt='Profile' />
        </div>
        <div className='profile-details'>
          <div>
            <h2>Equbal Fahmi</h2>
            <p>@username</p>
          </div>
          <div>
            <p>Following <span>123</span></p>
            <p>Followers <span>1M</span></p>
          </div>
          <div>
            <p>Find New People</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
