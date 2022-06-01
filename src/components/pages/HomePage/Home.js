import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import NavbarInit from '../../NavbarInit';

function Home() {
  return (
    <>
      <NavbarInit/>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;