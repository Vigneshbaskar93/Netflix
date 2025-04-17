import React from 'react';
import CrowdPleasersSlider from '../CrowdPleasersSlider';
import Arcane from '../assets/International TV Dramas/Arcane.png';
import airbender from '../assets/International TV Dramas/airbender.png';
import alter from '../assets/International TV Dramas/alter.png';
import berlin from '../assets/International TV Dramas/berlin.png';
import blood from '../assets/International TV Dramas/blood.png';
import bloodbard from '../assets/International TV Dramas/bloodbard.png';


const Dramas = [
  {   title: "Arcane",image: Arcane },
  {   title: "AirBender",image: airbender },
  {   title: "Altered",image: alter },
  {   title: "Berlin",image: berlin },
  {   title: "Blood",image: blood },
  {   title: "Bloodbard",image: bloodbard }
]

const InternationalTvDramas = () => {
  return <CrowdPleasersSlider title="International TV Dramas" data={Dramas} />;
};

export default InternationalTvDramas;
