import React, { useState } from 'react';
import './CrowdPleasersSliderBlurAll.css';
import cursed from '../assets/Get_In_ on_the_Action/cursed.png';
import Umbrella from '../assets/Critically_Acclaimed/Umbrella.png';
import piece from '../assets/TV_Sci-Fi_Fantasy/one piece.png';
import airbender from '../assets/International TV Dramas/airbender.png';
import dhoom_dhaam from '../assets/Bingeworthy/dhoom_dhaam.png';
import gentleman from '../assets/Get_In_ on_the_Action/gentleman.png';

const crowdPleasers = [
  {  image: cursed },
    { image: Umbrella },
    {  image: piece },
    { image: airbender },
    {  image: dhoom_dhaam },
    {  image: gentleman }
];

const CrowdPleasersSliderBlurAll = () => {
  const [index] = useState(0);

  return (
    <div className="crowd-slider-BlurAllcontainer">
      <h2 className='crowd-slider-BlurAllcontainer blur-active'>Crowd Pleasers</h2>
      <div className="slider-BlurAllwrapper">
        <div className="slider-BlurAlltrack blur-active">  {/* blur here */}
          {crowdPleasers.slice(index, index + 4).map((item, i) => (
            <div className="slider-itemBlurAll" key={i}>
              <img src={item.image} alt={item.title} className="slider-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrowdPleasersSliderBlurAll;
