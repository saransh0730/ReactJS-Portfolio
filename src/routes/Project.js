import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImg2 from '../components/MainImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

function Project() {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;