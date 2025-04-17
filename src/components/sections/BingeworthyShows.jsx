import React from "react";
import CrowdPleasersSlider from "../CrowdPleasersSlider";
import dabbaCartel from "../assets/Bingeworthy/dabbaCartel.png";
import raw from "../assets/Bingeworthy/Raw.png";
import dhoomDhaam from "../assets/Bingeworthy/dhoom_dhaam.png";
import moneyHeist from "../assets/Bingeworthy/money_heist.png";
import strangerThings from "../assets/Bingeworthy/stranger_things.png";

const BingeworthyData = [
  { image: dabbaCartel },
  { image: raw },
  { image: dhoomDhaam },
  { image: moneyHeist },
  { image: strangerThings },
  { image: strangerThings },
];

const BingeworthyShows = () => {
  return (
    <CrowdPleasersSlider title="Bingeworthy TV Shows" data={BingeworthyData} />
  );
};

export default BingeworthyShows;
