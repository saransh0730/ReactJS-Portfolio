import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImg2 from '../components/MainImg2'
import Form from '../components/Form'
function Contact() {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="CONTACT." text="Let's have a chat! Looking forward to collaborate. 🚀"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact