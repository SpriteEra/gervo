import React from 'react';
import Navbar from './common/Nav';
import Hero from './components/Hero';
import About from './components/About';
import StatsSection from './common/StatsSection';
import OurProduct from './components/OurProduct';
import OurServices from './components/OurServices';
import ChooseUs from './components/ChooseUs';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <StatsSection/>
      <OurProduct/>
      <OurServices/>
      <ChooseUs/>
    </>
  );
}

export default App;
