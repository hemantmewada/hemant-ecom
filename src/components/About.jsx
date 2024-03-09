import React, { useEffect } from 'react'
import {HeroSection} from "./index";
const About = () => {
  const data = {
    name : "Ecommerce Store"
  }
  return (
    <>
      <HeroSection myData={data} />
    </>
  )
}

export default About
