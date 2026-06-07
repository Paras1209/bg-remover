/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Steps from '../components/Steps'
import Hero from '../components/Hero'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default LandingPage
