import React from 'react';
import CrowdPleasersSlider from '../CrowdPleasersSlider';
import Lostinspace from '../assets/TV_Sci-Fi_Fantasy/Lostinspace.png';
import MyName from '../assets/TV_Sci-Fi_Fantasy/MyName.png';
import gray from '../assets/TV_Sci-Fi_Fantasy/gray.png';
import lupin from '../assets/TV_Sci-Fi_Fantasy/lupin.png';
import narcos from '../assets/TV_Sci-Fi_Fantasy/narcos.png';
import piece from '../assets/TV_Sci-Fi_Fantasy/one piece.png';


const TVFantasy = [
  {   title: "Lost_in_space",image: Lostinspace },
  {   title: "MyName",image: MyName },
  {   title: "Gray",image: gray },
  {   title: "Lupin",image: lupin },
  {   title: "Narcos",image: narcos },
  {   title: "One piece",image: piece }
]

const TVSciFiFantasy = () => {
  return <CrowdPleasersSlider title="TV Sci-Fi & Fantasy" data={TVFantasy} />;
};

export default TVSciFiFantasy;
