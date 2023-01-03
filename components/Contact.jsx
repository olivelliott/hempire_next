import React from "react";
import Image from "next/image";

import ContactBg from "../public/assets/contact/black_textured_bg.png";

import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaBandcamp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1240px] m-auto p-4 mb-0">
      <div className="relative">
        <Image
          className="max-h-[50vh]"
          alt="black design"
          src={ContactBg}
          width={0}
          height={0}
          layout="responsive"
        />

        <div className="absolute inset-0 p-4 text-center my-18 md:my-32 lg:my-20">
          <h1 className="sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center p-4 text-white uppercase">
            connect with us
          </h1>
          <div className="flex justify-around mt-4 pb-4">
            <AiOutlineInstagram
              size={33}
              className="relative ease-in duration-300 hover:-translate-y-1 hover:scale-110 text-secondary"
              width={35}
              height={35}
            />
            <FaFacebookSquare
              size={31}
              className="relative ease-in duration-300 hover:-translate-y-1 hover:scale-110 text-secondary"
              width={35}
              height={35}
            />
            <FaBandcamp
              size={30}
              className="relative ease-in duration-300 hover:-translate-y-1 hover:scale-110 text-secondary"
            />
          </div>
          <p className="text-xl lg:text-3xl mt-4 font-bold uppercase text-white">or</p>
          <a
            href="mailto:jkshaw13@gmail.com"
            className="btn btn-sm md:btn-md lg:btn-md border-none relative ease-in duration-300 mt-4 text-sm rounded bg-neutral active:bg-gray-800 text-white text-center active:text-gray-200"
          >
            send an email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <form className='max-w-[600px] m-auto border-t-2 pt-5'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='input input-accent w-full max-w-xs' type='text' placeholder='Name'/>
                <input className='input input-accent w-full max-w-xs' type='text' placeholder='Email'/>
            </div>
            <input className='input input-accent w-full my-2' type='text' placeholder='Subject'/>
            <textarea className='p-3 w-full textarea textarea-accent' cols='30' rows='10' placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 btn glass'>Submit</button>
        </form> */
}
