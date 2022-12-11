import React from "react";
import Image from "next/legacy/image";

// ! Image needs to be fixed
const Hero = ({ heading, message, button }) => {
  return (
    <div className="flex items-center justify-center h-[85vh] mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 z-[2]" />
      {/* <div className='p-5 text-secondary z-[2] mt-[-10rem] bg-black/50 text-center'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border border-grey'>{button}</button>
      </div> */}
    </div>
  );
};

export default Hero;
