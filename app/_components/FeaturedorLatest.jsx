"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductsSwiper from "./ProductsSwiper";
import { useProducts } from "../_context/Products";

function BestSelling() {
  const { products } = useProducts();
  const featured = products.filter((p) => p.tag === "featured");
  const latest = products.filter((p) => p.tag === "latest");
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
            products={isFeatured ? featured : latest}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default BestSelling;
