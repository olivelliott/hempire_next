"use client";

import Image from "next/legacy/image";
import Head from "next/head";

import { Oswald } from "@next/font/google";

import Hero from "../components/Hero";
import About from '../components/About'
import Show from "../components/Show";
import Contact from "../components/Contact";
import Merch from "../components/Merch";
import Instagram from "../components/Instagram";

export default function Home() {
  return (
    <div data-theme="mytheme">
      <Head />
      <div className="bg-primary">
        <Hero
          message="A rock and roll band based out of Boone, NC."
          button="Gallery"
        />
        <About />
        <Show />
        <Contact />
        <Merch />
        <Instagram />
        {/* <Slider slides={SliderData} /> */}
      </div>
    </div>
  );
}
