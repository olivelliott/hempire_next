import React from 'react'
import Image from 'next/image';
import Instagram_Img from './Instagram_Img';

import IgImg1 from '../public/assets/social/ig_1.png';
import IgImg2 from '../public/assets/social/ig_2.png'
import IgImg3 from '../public/assets/social/ig_3.png'
import IgImg4 from '../public/assets/social/ig_4.png'
import IgImg5 from '../public/assets/social/ig_5.png'
import IgImg6 from '../public/assets/social/ig_6.png'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold text-secondary'>Follow us on Instagram</p>
      <p className='pb-4 text-grey'>@hempirerocks</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <Instagram_Img socialImg={IgImg1}/>
        <Instagram_Img socialImg={IgImg2}/>
        <Instagram_Img socialImg={IgImg3}/>
        <Instagram_Img socialImg={IgImg4}/>
        <Instagram_Img socialImg={IgImg5}/>
        <Instagram_Img socialImg={IgImg6}/>
      </div>
    </div>
  )
}

export default Instagram