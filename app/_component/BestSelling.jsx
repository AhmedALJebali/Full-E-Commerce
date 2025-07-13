
import React from "react";
import ProductsSwiper from "./ProductsSwiper";
const products = [
  {
    id: 1,
    title: "Product Title",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
  },
  {
    id: 2,
    title: "Product Title",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
  },
  {
    id: 3,
    title: "Product Title",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
  },
  {
    id: 4,
    title: "Product Title",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
  },
  {
    id: 5,
    title: "Product Title",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
  },
];

function BestSelling() {
  return (
    <section className="w-[95%] md:w-[80%] mx-auto flex flex-col items-center py-10">
      <div >
        <h3 className="text-xs md:text-sm text-neutral-300 tracking-normal uppercase mb-1">
          Shop Now
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5">
          Best Selling
        </h1>
      </div>
      <ProductsSwiper products={products} />
    </section>
  );
}

export default BestSelling;
