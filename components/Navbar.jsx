'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GiGrimReaper } from 'react-icons/gi';

import IconLogo from '../public/assets/icons/hempire_logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#0E1111");
        setTextColor("#ff7400");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {/* <GiGrimReaper size={30}  /> */}
          {/* <Image src={IconLogo} alt='hempire icon' width={50} height={5}/> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden md:flex text-lg">
          <li className="p-4 font-sans">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 font-sans">
            <a href="#shows">Shows</a>
          </li>
          <li className="p-4 font-sans">
            <a href="#contact">Contact</a>
          </li>
          <li className="p-4 font-sans">
            <a href="#merch">Merch</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className='white' />
          ) : (
            <AiOutlineMenu size={20} className='black' />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        > 
          <ul>
            <li  onClick={handleNav} className="p-4 uppercase text-2xl hover:text-secondary font-sans">
              <a href="#home">Home</a>
            </li>
            <li onClick={handleNav} className="p-4 uppercase text-2xl hover:text-secondary font-sans">
              <a href="#shows">Shows</a>
            </li>

            <li onClick={handleNav} className="p-4 uppercase text-2xl hover:text-secondary font-sans">
              <a href="#contact">Contact</a>
            </li>
            <li onClick={handleNav} className="p-4 uppercase text-2xl hover:text-secondary font-sans">
              <a href="#merch">Merch</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// ! Nav located in APP
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Oswald } from '@next/font/google';

// const oswald = Oswald();


// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [color, setColor] = useState("transparent");
//   const [textColor, setTextColor] = useState("white");

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const changeColor = () => {
//       if (window.scrollY >= 90) {
//         setColor("#0E1111");
//         setTextColor("#ff7400");
//       } else {
//         setColor("transparent");
//         setTextColor("#0E1111");
//       }
//     };
//     window.addEventListener("scroll", changeColor);
//   }, []);

//   return (
//     <div
//       style={{ backgroundColor: `${color}` }}
//       className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
//     >
//       <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
//         <Link href="/">
//           <h1 style={{ color: `${textColor}` }} className={oswald} >
//             Hempire
//           </h1>
//         </Link>
//         <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
//           <li className="p-4">
//             <Link href="/#gallery">Gallery</Link>
//           </li>
//           <li className="p-4">
//             <Link href="/booking">Booking</Link>
//           </li>
//           <li className="p-4">
//             <Link href="/merch">Merch</Link>
//           </li>
//           <li className="p-4">
//             <Link href="/shows">Shows</Link>
//           </li>
//           <li className="p-4">
//             <Link href="/about">About</Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <div onClick={handleNav} className="block sm:hidden z-10">
//           {nav ? (
//             <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
//           ) : (
//             <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
//           )}
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={
//             nav
//               ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
//               : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
//           }
//         >
//           <ul>
//             <li  onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
//               <Link href="/#gallery">Gallery</Link>
//             </li>
//             <li  onClick={handleNav}className="p-4 text-4xl hover:text-gray-500">
//               <Link href="/booking">Booking</Link>
//             </li>
//             <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
//               <Link href="/merch">Merch</Link>
//             </li>
//             <li  onClick={handleNav}className="p-4 text-4xl hover:text-gray-500">
//               <Link href="/shows">Shows</Link>
//             </li>
//             <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
//               <Link href="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
