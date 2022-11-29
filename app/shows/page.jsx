import React from "react";
import Hero from '../../components/Hero'

const products = [
  {
    id: 1,
    name: '27 Club',
    location: 'Asheville, NC',
    time: '8:00pm',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60',
    imageAlt: 'Show Flyer',
    price: '12/12',
  },
]


export default function page() {
  return (
   
    <div className="bg-primary">
    <Hero message='View a list of our upcoming shows' button='Shows'/>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-1 bg-neutral">
                <h1 className="pt-3 text-3xl font-medium text-secondary text-center">{product.name}</h1>

                  <p className=" text-lg text-center text-gray-300">{product.location}</p>
                  <p className='mt-1 text-sm text-center text-gray-200'>{product.time}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-xl font-semibold text-grey-500">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Tickets<span className="sr-only">for {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

