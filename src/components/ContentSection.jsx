import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="content-container">
        <h2 className="content-title">There’s even more to watch.</h2>
        <p className="content-description">
          Netflix has an extensive library of feature films, documentaries, TV shows, 
          anime, award-winning Netflix originals and more. Watch as much as you want, 
          anytime you want.
        </p>
        <button className="join-button">Join now</button>
      </div>
    </section>
  );
};

export default ContentSection;