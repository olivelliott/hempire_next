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
    <div>
      <p>Follow us on Instagram</p>
      <p>@hempirerocks</p>
      <div>
        <Instagram_Img socialImg={IgImg1}/>
      </div>
    </div>
  )
}

export default Instagram