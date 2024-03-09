import React from 'react';
import { FeaturedProduct, HeroSection, Services, Trusted } from "./index";

const Home = () => {
  const data = {
    name : "Ecommerce Website",
  }
  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  )
}
export default Home;
