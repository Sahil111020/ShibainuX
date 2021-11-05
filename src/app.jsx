import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Minter from './components/Minter';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FaqSection from './components/FaqSection';

export function App(props) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Minter />
      <Roadmap />
      <Team />
      <FaqSection />
    </div>
  )
}
