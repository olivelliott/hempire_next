import React from "react";
import Contact from "../components/Contact";
import Hero from '../components/Hero'

const booking = () => {
  return (
    <div className='bg-primary'>
      <Hero heading="Contact Us" button='Book'/>
      <Contact />
    </div>
  );
};

export default booking;
