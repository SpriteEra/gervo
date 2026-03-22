import React from 'react';
import Navbar from './common/Nav';
import Hero from './components/Hero';
import About from './components/About';
import StatsSection from './common/StatsSection';
import OurProduct from './components/OurProduct';
import OurServices from './components/OurServices';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <StatsSection/>
      <OurProduct/>
      <OurServices/>
    </>
  );
}

export default App;
