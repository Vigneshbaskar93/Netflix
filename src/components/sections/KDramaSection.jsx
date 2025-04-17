import React from 'react';
import CrowdPleasersSlider from '../CrowdPleasersSlider';
import brea from '../assets/Get_In_ on_the_Action/brea.png';
import cage from '../assets/Get_In_ on_the_Action/cage.png';
import counter from '../assets/Get_In_ on_the_Action/counter.png';
import cursed from '../assets/Get_In_ on_the_Action/cursed.png';
import fauda from '../assets/Get_In_ on_the_Action/fauda.png';
import gentleman from '../assets/Get_In_ on_the_Action/gentleman.png';


const kDramaData = [
  {   title: "Cursed",image: cursed },
  {   title: "Brea",image: brea },
  {   title: "Cage",image: cage },
  {   title: "Counter",image: counter },
  {   title: "Fauda",image: fauda },
  {   title: "Gentleman",image: gentleman }
]

const KDramaSection = () => {
  return <CrowdPleasersSlider title="K-Dramas" data={kDramaData} />;
};

export default KDramaSection;
