import React from "react";
import Image from 'next/image';

import TwentySeven from '../public/assets/shows/27club.png';
import Lilys from '../public/assets/shows/lilys.png';
import Monstercade from '../public/assets/shows/monstercade.png';
import Omalleys from '../public/assets/shows/omalleys.png';

const shows = [
  {
    id: 1,
    name: "27 Club",
    location: "Asheville, NC",
    time: "8:00pm",
    href: "https://27clubasheville.business.site/",
    imageSrc:
      TwentySeven,
    imageAlt: "Show Flyer",
    showDate: "12/12",
  },
  {
    id: 2,
    name: "Monstercade",
    location: "Winston Salem, NC",
    time: "8:00pm",
    href: "https://www.facebook.com/monstercadebar",
    imageSrc:
      Monstercade,
    imageAlt: "Show Flyer",
    showDate: "1/25",
  },
  {
    id: 3,
    name: "O'Malleys",
    location: "Sylva, NC",
    time: "8:00pm",
    href: "https://www.facebook.com/omalleyspubandgrillsylvanc/",
    imageSrc:
      Omalleys,
    imageAlt: "Show Flyer",
    showDate: "4/20",
  },
  {
    id: 4,
    name: "Lilys Snack Bar",
    location: "Boone, NC",
    time: "8:00pm",
    href: "https://lilyssnackbar.com/",
    imageSrc:
      Lilys,
    imageAlt: "Show Flyer",
    showDate: "5/17",
  },
];

export default function Show() {
  return (
    <div className="mx-auto mt-6 max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:h-[100vh] lg:grid lg:content-center" id="shows">
      <h1 className="text-center text-white font-bold text-4xl lg:text-6xl uppercase font-sans">
        upcoming shows
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {shows.map((show) => (
          <div key={show.id}>
            <a href={show.href} target='_blank' rel="noreferrer">
              <div className="relative ease-in duration-300 hover:-translate-y-1 hover:scale-101 ">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    src={show.imageSrc}
                    alt={show.imageAlt}
                    width={500}
                    height={50}
                    className="object-cover opacity-50 w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4 ">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-15"
                  >
                    <div className="mt-7">
                      <h1 className="relative uppercase drop-shadow-xl text-secondary  pt-3 text-2xl font-bold font-sans text-white text-center">
                        {show.name}
                      </h1>
                      <p className="relative text-md text-center font-sans text-white text-center hover:text-gray-200">
                        {show.location}
                      </p>
                      <p className="relative text-sm font-semibold font-sans text-center text-white hover:text-gray-200">
                        {show.showDate}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <button className="relative ease-in duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mt-1 text-sm btn text-white text-center hover:text-gray-200">
                    {show.time}
                  </button> */}
              </div>
            </a>

            {/* <div className="mt-6">
          <a
            href={show.href}
            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Tickets<span className="sr-only">for {show.name}</span>
          </a>
        </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
