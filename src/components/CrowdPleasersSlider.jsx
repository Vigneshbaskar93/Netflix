import React, { useState } from 'react';
import './CrowdPleasersSlider.css';

const CrowdPleasersSlider = ({ title, data = [] }) => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 4;

  const handlePrev = () => setIndex(prev => Math.max(prev - 1, 0));

  const handleNext = () => {
    if (index + itemsPerSlide < data.length) {
      setIndex(prev => prev + 1);
    }
  };

  const canGoPrev = index > 0;
  const canGoNext = index + itemsPerSlide < data.length;

  return (
    <div className="crowd-slider-container">
      <h2>{title}</h2>
      <div className="slider-wrapper">
        {canGoPrev && (
          <button className="arrow-button" onClick={handlePrev}>❮</button>
        )}
        
        <div className="slider-track">
          {data.slice(index, index + itemsPerSlide).map((item, i) => (
            <div className="slider-item" key={i}>
              <img src={item.image} alt={item.title} className="slider-image" />
              <p className="slider-title">{item.title}</p>
            </div>
          ))}
        </div>

        {canGoNext && (
          <button className="arrow-button" onClick={handleNext}>❯</button>
        )}
      </div>
    </div>
  );
};

export default CrowdPleasersSlider;


