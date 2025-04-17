import React from 'react';
import CrowdPleasersSlider from '../CrowdPleasersSlider';
import narco from '../assets/Critically_Acclaimed/Narcos.png'
import Locke from '../assets/Critically_Acclaimed/loki.png';
import Umbrella from '../assets/Critically_Acclaimed/Umbrella.png';
import Viking from '../assets/Critically_Acclaimed/Viking.png';
import thelastking from '../assets/Critically_Acclaimed/thelastking.png';
import titans from '../assets/Critically_Acclaimed/titans.png';

const crowdPleasersData = [
  {   title: "Narcos",image: narco },
  {   title: "Locke & Key",image: Locke }, 
  {   title: "The Umbrella Academy",image: Umbrella },
  {   title: "Vikings: Valhalla",image: Viking },
  {   title: "The Last Kingdom",image: thelastking },
  {   title: "Titans",image: titans }
];

const CrowdPleasersSection = () => {
  return <CrowdPleasersSlider title="Crowd Pleasers" data={crowdPleasersData} />;
};

export default CrowdPleasersSection;
