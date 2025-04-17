import React from 'react';
import NetflixOriginals from './components/NetflixOriginals';
import NetflixHeader from './components/NetflixHeader';
import CrowdPleasersSlider from './components/CrowdPleasersSlider';
import CrowdPleasersSliderBlurAll from './components/Blurall/CrowdPleasersSliderBlurAll';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import CrowdPleasersSection from './components/sections/CrowdPleasersSection';
import KDramaSection from './components/sections/KDramaSection';
import BingeworthyShows from './components/sections/BingeworthyShows';
import InternationalTvDramas from './components/sections/International_Tv_Dramas';
import TVSciFiFantasy from './components/sections/TV_Sci-Fi_Fantasy';
import USTVShows from './components/sections/US_TVShows';


function App() {
  return (
    <div className="App">
      <NetflixHeader/>
      <NetflixOriginals />
      <CrowdPleasersSection />
      <KDramaSection />
      <InternationalTvDramas/>
      <USTVShows/>
      <TVSciFiFantasy/>
      <BingeworthyShows/>
      <CrowdPleasersSlider/>
      <CrowdPleasersSliderBlurAll />
      <CrowdPleasersSliderBlurAll />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;
