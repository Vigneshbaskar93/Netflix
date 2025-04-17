import React from 'react';
import CrowdPleasersSlider from '../CrowdPleasersSlider';
import outer from '../assets/US_TVShows/outer.png';
import queen from '../assets/US_TVShows/queen.png';
import shadow from '../assets/US_TVShows/shadow.png';
import snow from '../assets/US_TVShows/snow.png';
import sweet from '../assets/US_TVShows/sweet.png';
import Witcher from '../assets/US_TVShows/the Witcher.png';


const USShows = [
  {   title: "The Witcher",image: Witcher },
  {   title: "Queen",image: queen },
  {   title: "Shadow",image: shadow },
  {   title: "Snow",image: snow },
  {   title: "Sweet",image: sweet },
  {   title: "Outer",image: outer }
]

const USTVShows = () => {
  return <CrowdPleasersSlider title="US TV Shows" data={USShows} />;
};

export default USTVShows;
