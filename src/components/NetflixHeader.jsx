import React from 'react';
import './NetflixHeader.css';

const NetflixHeader = () => {
  return (
    <header className="netflix-header">
      <div className="logo-section">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
      </div>
      <div className="nav-section">
        <p className="nav-text">UNLIMITED TV SHOWS & MOVIES</p>
        <button className="join-btn">Join now</button>
        <button className="sign-btn">Sign In</button>
      </div>
    </header>
  );
};

export default NetflixHeader;
