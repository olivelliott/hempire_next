import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

// import IgImg1 from '../public/ig_1.png'
// import IgImg2 from '../public/assets/social/ig_2.png'
// import IgImg3 from '../public/assets/social/ig_3.png'
// import IgImg4 from '../public/assets/social/ig_4.png'
// import IgImg5 from '../public/assets/social/ig_5.png'
// import IgImg6 from '../public/assets/social/ig_6.png'


const Instagram_Img = ({socialImg}) => {
  return (
    <div className='relative'>
      <Image src={socialImg} alt='/' className='w-full h-full' width={0} height={0} layout='responsive' />
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 hover:black/50'/>
      <p><FaInstagram size={30} /></p>
    </div>
  )
}

export default Instagram_Img