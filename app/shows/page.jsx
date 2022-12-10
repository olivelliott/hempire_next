import React from "react";
import Hero from "../../components/Hero";
import Show from '../../components/Show'


export default function page() {

  return (
    <div className="bg-primary">
      {/* <Hero message='View a list of our upcoming shows' button='Shows'/> */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-center text-2xl uppercase">shows</h1>
        <Show/>
      </div>
    </div>
  );
}
