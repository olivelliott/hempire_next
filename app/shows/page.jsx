import React from "react";
import Hero from "../../components/Hero";

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
      "https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60",
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
      "https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60",
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
      "https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60",
    imageAlt: "Show Flyer",
    showDate: "5/17",
  },



];

export default function page() {
  return (
    <div className="">
      {/* <Hero message='View a list of our upcoming shows' button='Shows'/> */}

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {shows.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4 ">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-15"
                  >
                    <div className='mt-7 '>
                      <h1 className="relative uppercase pt-3 text-2xl font-bold text-white text-center hover:text-gray-200">
                        {product.name}
                      </h1>
                      <p className="relative text-md text-center  text-white text-center hover:text-gray-200">
                        {product.location}
                      </p>
                      <p className="relative text-sm font-semibold  text-center text-white hover:text-gray-200">
                        {product.showDate}
                      </p>
                      {/* <p className="relative mt-1 text-sm  text-white text-center hover:text-gray-200">
                        {product.time}
                      </p> */}
                      </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Tickets<span className="sr-only">for {product.name}</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
