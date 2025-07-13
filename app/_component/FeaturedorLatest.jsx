"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductsSwiper from "./ProductsSwiper";

const productsFeatured = [
  { id: 1, title: "Product Featured", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 2, title: "Product Featured", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 3, title: "Product Featured", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 4, title: "Product Featured", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 5, title: "Product Featured", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
];

const productsLatest = [
  { id: 1, title: "Product Latest", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 2, title: "Product Latest", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 3, title: "Product Latest", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 4, title: "Product Latest", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
  { id: 5, title: "Product Latest", price: 35.0, status: "IN STOCK", image: "/cover.svg" },
];

function BestSelling() {
  const [isFeatured, setFeatured] = useState(true);

  return (
    <section className="w-[95%] md:w-[80%] mx-auto flex flex-col items-center py-10">
      {/* Tabs */}
      <div className="w-full flex justify-center items-center gap-5 mb-6">
        <button
          onClick={() => setFeatured(true)}
          className={`h-10 px-6 rounded-md border transition cursor-pointer ${
            isFeatured
              ? "bg-neutral-900 text-white border-neutral-900"
              : "border-neutral-300 text-neutral-700"
          }`}
        >
          Featured
        </button>
        <button
          onClick={() => setFeatured(false)}
          className={`h-10 px-6 rounded-md border transition cursor-pointer ${
            !isFeatured
              ? "bg-neutral-900 text-white border-neutral-900"
              : "border-neutral-300 text-neutral-700"
          }`}
        >
          Latest
        </button>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isFeatured ? "featured" : "latest"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <ProductsSwiper
            products={isFeatured ? productsFeatured : productsLatest}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default BestSelling;
