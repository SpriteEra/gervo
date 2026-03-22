import React from 'react';
import Navbar from './common/Nav';
import Hero from './components/Hero';
import About from './components/About';
import StatsSection from './common/StatsSection';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <StatsSection/>
    </>
  );
}

export default App;
