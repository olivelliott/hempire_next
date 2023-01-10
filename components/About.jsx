import React from "react";

import Image from "next/image";

import Joey from '../public/assets/about/joey_2.png';
import Jon from '../public/assets/about/jon_2.png';
import Jason from '../public/assets/about/jason_2.png'

const members = [
  {
    name: "Joey Shaw",
    role: "Guitarist | Vocalist",
    imageUrl:
      Joey,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jon Andre",
    role: "Drummer",
    imageUrl:
      Jon,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jason Watson",
    role: "Bassist",
    imageUrl:
      Jason,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

const About = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            {/* <h2 className="lg:text-8xl font-bold text-8xl uppercase font-sans text-white">
              the band
            </h2> */}
            <p className="text-6xl lg:text-5xl text-white font-sans">
              Meet your high country riff lords from Boone, NC.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-3 xl:grid-cols-3"
          >
            {members.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 pt-2">
                  <Image
                    className="mx-auto h-34 w-34 rounded-full lg:h-56 lg:w-56 aspect-auto"
                    src={person.imageUrl}
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="space-y-2">
                    <div className="font-medium font-sans lg:text-sm">
                      <h3 className="text-[2.75rem] lg:text-3xl">{person.name}</h3>
                      <p className="text-secondary text-3xl lg:text-2xl pt-1">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <div className='visible lg:invisible mt-4'>
                <iframe
                style={{ border: 0, width: "400px", height: "400px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3608607350/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
                seamless
                >
                <a href="https://hempirerocks.bandcamp.com/album/high-country-hash-thrash">
                    High Country Hash Thrash by Hempire
                </a>
                </iframe>
            </div>
            <div className='invisible lg:visible mt-4'>
              <iframe
                style={{ border: 0, width: "400px", height: "406px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3608607350/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://hempirerocks.bandcamp.com/album/high-country-hash-thrash">
                  High Country Hash Thrash by Hempire
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
