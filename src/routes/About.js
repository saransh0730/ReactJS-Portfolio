import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImg2 from '../components/MainImg2'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div>
    <Navbar/>
    <MainImg2 heading="ABOUT." text="A passionate React developer eager to craft engaging and interactive web experiences." />
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About