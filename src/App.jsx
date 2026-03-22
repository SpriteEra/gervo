import React from 'react';
import Navbar from './common/Nav';
import Hero from './components/Hero';
import About from './components/About';
import StatsSection from './common/StatsSection';
import Product from './components/OurProduct';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <StatsSection/>
      <Product/>
    </>
  );
}

export default App;
