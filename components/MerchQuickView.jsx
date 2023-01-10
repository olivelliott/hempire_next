import { Fragment } from 'react'

const MerchQuickView = (props) => {
    const { selectedProduct, isOpen  } = props;

  return (
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
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
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
                            src={product[selectedProduct].imageSrc}
                            alt={product[selectedProduct].imageAlt}
                            className="object-cover object-center"
                            width={500}
                            height={50}
                          />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                            {product[selectedProduct].name}
                          </h2>

                          <section
                            aria-labelledby="information-heading"
                            className="mt-2"
                          >
                            <h3 id="information-heading" className="sr-only">
                              Product information
                            </h3>

                            <p className="text-2xl text-gray-900">
                              {product[selectedProduct].price}
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
 */}
                                     {/* <p>{product[selectedProduct]}.sizes[0].name</p> */}

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
                                    {sizes.map((size) => (
                                      <RadioGroup.Option
                                        key={size.name}
                                        value={size.sizes}
                                        disabled={!size.inStock}
                                        className={({ active }) =>
                                          classNames(
                                            size.inStock
                                              ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                              : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                            active
                                              ? "ring-2 ring-indigo-500"
                                              : "",
                                            "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
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
                                                    ? "border-indigo-500"
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
                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
  )
}

export default MerchQuickView;