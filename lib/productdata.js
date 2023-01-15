import bShirts from "../public/assets/merch/bleach_shirts.png";
import koozies from "../public/assets/merch/koozies.png";
import patches from "../public/assets/merch/patches.png";
import shirts from "../public/assets/merch/unbleached.png";


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
    sizes: [{ name: "OS", inStock: true }],
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
    sizes: [{ name: "OS", inStock: true }],
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


export default product;