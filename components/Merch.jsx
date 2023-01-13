import { Fragment, useState } from "react";

import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

import { getAllProducts, URL } from "../lib/shopify";

import Image from "next/image";

import bShirts from "../public/assets/merch/bleach_shirts.png";
import koozies from "../public/assets/merch/koozies.png";
import patches from "../public/assets/merch/patches.png";
import shirts from "../public/assets/merch/unbleached.png";

import ProductCard from "./ProductCard";

const sizes = [
  { name: "XXS", inStock: true },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "XXL", inStock: true },
  { name: "XXXL", inStock: false },
];

const product = [
  {
    id: 0,
    name: "Hand Bleached Shirt",
    href: "#",
    price: "$25",
    imageSrc: bShirts,
    imageAlt: "tie dye bleached hempire shirts",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 1,
    name: "Koozie",
    href: "#",
    price: "$10",
    imageSrc: koozies,
    imageAlt: "Orange and black hempire koozies",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "OS", inStock: true },
    ],

  },
  {
    id: 2,
    name: "Patch",
    href: "#",
    price: "$7",
    imageSrc: patches,
    imageAlt: "Sew on black and white patches",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "OS", inStock: true },
    ],

  },
  {
    id: 3,
    name: "T Shirt",
    href: "#",
    price: "$25",
    imageSrc: shirts,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Merch = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product[0].colors[0]);
  const [selectedSize, setSelectedSize] = useState(product[0].sizes[2]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    // console.log(event.target.value);
    const thisProductId = event.target.value;
    const thisProduct = product[thisProductId];
    setSelectedProduct(thisProduct);
  };

  // fetch(getAllProducts) 
  //   // .then((response) => response.json())
  //   .then((response) => {
  //     // console.log(response);
  //     const products = response;
  //     console.log(products)
  //     return { props: products }
  //   });

    // getAllProducts()
    //   .then((response) => {
    //     console.log(response);
    //   })  // const productTest = getAllProducts();
  // console.log(productTest);


  return (
    <div className="bg-primary mt-8" id="merch">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:h-[100vh] lg:grid lg:content-center">
        <h1 className="font-sans font-bold uppercase text-white text-8xl lg:text-8xl text-center">
          merch
        </h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {/* {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          } */}

<div className="grid gap-y-10 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8 pt-2">
{product.map((product) => (
  <a key={product.id} href={product.href} className="group">
    <div className="relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg group-hover:opacity-75 bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center group-hover:opacity-75"
        width={500}
        height={50}
      />
      </div>
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <div className="hidden group-hover:block">
          <button
            onClick={handleQuickView}
            className="btn btn-md"
            value={product.id}
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
    <h3 className="mt-4 text-5xl md:text-2xl md:mt-1 lg:text-2xl text-white font-sans">
      {product.name}
    </h3>
    <p className="mt-3 text-4xl md:text-xl md:mt-0 lg:text-xl lg:mt-0 font-medium text-secondary font-sans">
      {product.price}
    </p>
  </a>
))}
</div>
</div>

{/* QuickView */}
{selectedProduct === null ? (
true
) : (
<Transition.Root show={isOpen} as={Fragment}>
<Dialog as="div" className="relative z-10" onClose={handleQuickView}>
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
  </Transition.Child>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
        enterTo="opacity-100 translate-y-0 md:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 md:scale-100"
        leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
      >
        <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
          <div className="relative flex w-full items-center overflow-hidden bg-gray-900 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
              <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <Image
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="object-cover object-center"
                  width={500}
                  height={50}
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-white sm:pr-12">
                  {selectedProduct.name}
                </h2>

                <section
                  aria-labelledby="information-heading"
                  className="mt-2"
                >
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  <p className="text-2xl text-white">
                    {selectedProduct.price}
                  </p>

                  <form>
                    {/* Sizes */}
                    <div className="mt-10">
                      {/* Size Guide */}
                      {/* <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>

                           <p>{selectedProduct.sizes}</p> */}

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          {" "}
                          Choose a size{" "}
                        </RadioGroup.Label>
                        <div className="grid grid-cols-4 gap-4">
                        
                            {selectedProduct.sizes.map((size) => (
                              <RadioGroup.Option
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({ active }) =>
                                  classNames(
                                    size.inStock
                                      ? "bg-gray-600 shadow-sm text-white cursor-pointer"
                                      : "bg-gray-650 text-gray-200 cursor-not-allowed",
                                    active
                                      ? "ring-secondary"
                                      : "",
                                    "group relative border border-gray-600 rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-500 focus:outline-none sm:flex-1"
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label as="span">
                                      {size.name}
                                    </RadioGroup.Label>
                                    {size.inStock ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "border"
                                            : "border-2",
                                          checked
                                            ? "border-tertiary"
                                            : "border-transparent",
                                          "pointer-events-none absolute -inset-px rounded-md"
                                        )}
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                      >
                                        <svg
                                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                          viewBox="0 0 100 100"
                                          preserveAspectRatio="none"
                                          stroke="currentColor"
                                        >
                                          <line
                                            x1={0}
                                            y1={100}
                                            x2={100}
                                            y2={0}
                                            vectorEffect="non-scaling-stroke"
                                          />
                                        </svg>
                                      </span>
                                    )}
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                        
                        </div>
                      </RadioGroup>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Add to bag
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition.Root>
)}
</div>
    </div>
  );
};


// export async function getStaticProps() {
//   const products = await getAllProducts()

//   return {
//     props: { products }, // will be passed to the page component as props
//   }
// }

export default Merch;
