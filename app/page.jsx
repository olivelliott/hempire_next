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
import { SliderData } from '../components/SliderData'

export default function Home() {
  return (
    <div data-theme='mytheme'>
      <Head/>
      <div className='bg-primary'>
      <Hero message='A rock and roll band based out of Boone, NC.' button='Gallery'/>
      {/* <p className={`${oswald.variable}`}>@hempirerocks</p> */}
      <Show />
      <Contact />
      <Instagram />
      {/* <Slider slides={SliderData} /> */}
      </div>
    </div>
  )
}
