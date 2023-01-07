import React from "react";

const shows = [
  {
    id: 1,
    name: "27 Club",
    location: "Asheville, NC",
    time: "8:00pm",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60",
    imageAlt: "Show Flyer",
    showDate: "12/12",
  },
  {
    id: 2,
    name: "Monstercade",
    location: "Winston Salem, NC",
    time: "8:00pm",
    href: "#",
    imageSrc:
      "https://bloximages.newyork1.vip.townnews.com/yesweekly.com/content/tncms/assets/v3/editorial/b/59/b59390af-ce48-5ae6-8060-95449db641d8/5e791309b5d80.image.jpg?resize=750%2C500",
    imageAlt: "Show Flyer",
    showDate: "1/25",
  },
  {
    id: 3,
    name: "O'Malleys",
    location: "Sylva, NC",
    time: "8:00pm",
    href: "#",
    imageSrc:
      "data:image/jpeg;base64,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",
    imageAlt: "Show Flyer",
    showDate: "4/20",
  },
  {
    id: 4,
    name: "Lilys Snack Bar",
    location: "Boone, NC",
    time: "8:00pm",
    href: "#",
    imageSrc:
      "https://s3-media0.fl.yelpcdn.com/bphoto/KvfTtPdQlPXsfkhRPvJEgw/348s.jpg",
    imageAlt: "Show Flyer",
    showDate: "5/17",
  },
];

export default function Show() {
  return (
    <div className="mx-auto mt-6 max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:h-[100vh] lg:grid lg:content-center" id="shows">
      <h1 className="text-center text-white font-bold text-5xl lg:text-6xl uppercase font-sans">
        upcoming shows
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {shows.map((show) => (
          <div key={show.id}>
            <div className="relative ease-in duration-300 hover:-translate-y-1 hover:scale-101 ">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={show.imageSrc}
                  alt={show.imageAlt}
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
