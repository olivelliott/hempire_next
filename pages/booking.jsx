import React from "react";
import Contact from "../components/Contact";
import Hero from '../components/Hero'

const booking = () => {
  return (
    <div>
      <Hero heading="Contact Us" message="Get in touch to book with us!" />
      <Contact />
    </div>
  );
};

export default booking;
