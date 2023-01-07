import React from 'react';
import bShirts from '../public/assets/merch/bleach_shirts.png';
import koozies from '../public/assets/merch/koozies.png';
import patches from '../public/assets/merch/patches.png';
import shirts from '../public/assets/merch/unbleached.png'



const products = [
  {
    id: 1,
    name: 'Hand Bleached Shirt',
    href: '#',
    price: '$25',
    imageSrc: bShirts,
    imageAlt: 'tie dye bleached hempire shirts',
  },
  {
    id: 2,
    name: 'Koozie',
    href: '#',
    price: '$10',
    imageSrc: koozies,
    imageAlt: 'Orange and black hempire koozies',
  },
  {
    id: 3,
    name: 'Patch',
    href: '#',
    price: '$7',
    imageSrc: patches,
    imageAlt: 'Sew on black and white patches',
  },
  {
    id: 4,
    name: 'T Shirt',
    href: '#',
    price: '$25',
    imageSrc: shirts,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

const merch = () => {
  return (
    <div className="bg-primary mt-8" id='merch'>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:h-[100vh] lg:grid lg:content-center">
        <h1 className="font-sans font-bold uppercase text-white text-4xl lg:text-6xl text-center">merch</h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-white font-sans">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-secondary font-sans">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}

export default merch;