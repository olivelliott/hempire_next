'use client';

import Image from "next/legacy/image";
import Head from 'next/head'

import { Oswald } from '@next/font/google'

import Hero from '../components/Hero';
import Instagram from '../components/Instagram'
import Instagram_Img from '../components/Instagram_Img';
import Contact from '../components/Contact'
import Slider from '../components/Slider'
import Show from '../components/Show'
import Merch from '../components/Merch'
import { SliderData } from '../components/SliderData'

export default function Home() {
  return (
    <div data-theme='mytheme'>
      <Head/>
      <div className='bg-primary'>
      <Hero message='A rock and roll band based out of Boone, NC.' button='Gallery'/>
      <iframe style={{ border: 0, width:'400px', height:'406px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3608607350/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="https://hempirerocks.bandcamp.com/album/high-country-hash-thrash">High Country Hash Thrash by Hempire</a></iframe>
      <Show />
      <Contact />
      <Merch />
      <Instagram />
      {/* <Slider slides={SliderData} /> */}
      </div>
    </div>
  )
}
