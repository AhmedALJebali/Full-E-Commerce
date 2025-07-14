"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductsSwiper from "./ProductsSwiper";

const productsFeatured = [
  {
    id: 1,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.5,
    reviews: [
      {
        rating: 5,
        author: "Emily Davis",
        date: "1 WEEK AGO",
        text: "This company always goes above and beyond to satisfy their customers.",
      },
      {
        rating: 4,
        author: "Daniel Smith",
        date: "2 MONTHS AGO",
        text: "I can't believe how affordable and high-quality this item is!",
      },
    ],
    details: {
      description: "High-quality featured product with excellent durability.",
      features: ["Premium Quality", "Comfortable Fit", "Eco-Friendly", "Modern Design"],
    },
    colors: [
      { color: "#000000", image: "/cover.svg" },
      { color: "#FFFFFF", image: "/cover-2.svg" },
      { color: "#F87171", image: "/cover-3.svg" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tag: "featured",
    category: "T-Shirts",
  },
  {
    id: 2,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.2,
    reviews: [
      {
        rating: 4,
        author: "Alice Johnson",
        date: "3 WEEKS AGO",
        text: "Stylish and comfortable. Loved it!",
      },
    ],
    details: {
      description: "Comfortable and stylish, suitable for all occasions.",
      features: ["All-day Comfort", "Tailored Fit"],
    },
    colors: [
      { color: "#1E3A8A", image: "/cover.svg" },
      { color: "#D97706", image: "/cover-2.svg" },
    ],
    sizes: ["M", "L"],
    tag: "featured",
    category: "T-Shirts",
  },
  {
    id: 4,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.0,
    reviews: [],
    details: {
      description: "Lightweight and modern design for daily wear.",
      features: ["Light Fabric", "Great for Summer"],
    },
    colors: [
      { color: "#6B7280", image: "/cover.svg" },
    ],
    sizes: ["XS", "S", "M"],
    tag: "featured",
    category: "T-Shirts",
  },
];

const productsLatest = [
  {
    id: 6,
    title: "Product Latest",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 3.9,
    reviews: [],
    details: {
      description: "New arrival with modern features and style.",
      features: ["Trendy Look", "Slim Fit"],
    },
    colors: [
      { color: "#0F172A", image: "/cover.svg" },
      { color: "#38BDF8", image: "/cover-2.svg" },
    ],
    sizes: ["S", "M", "L"],
    tag: "latest",
    category: "T-Shirts",
  },
  {
    id: 7,
    title: "Product Latest",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.3,
    reviews: [],
    details: {
      description: "Perfect for daily use with comfortable fit.",
      features: ["Everyday Use", "Durable"],
    },
    colors: [
      { color: "#6EE7B7", image: "/cover.svg" },
      { color: "#A78BFA", image: "/cover-2.svg" },
    ],
    sizes: ["M", "L", "XL"],
    tag: "latest",
    category: "Pants",
  },
  {
    id: 9,
    title: "Product Latest",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 3.5,
    reviews: [],
    details: {
      description: "Simple and functional design for everyone.",
      features: ["Unisex", "Clean Look"],
    },
    colors: [
      { color: "#4B5563", image: "/cover.svg" },
    ],
    sizes: ["M", "L"],
    tag: "latest",
    category: "Accessories",
  },
  {
    id: 10,
    title: "Product Latest",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.4,
    reviews: [],
    details: {
      description: "Latest release with great customer feedback.",
      features: ["Top Feedback", "High Demand"],
    },
    colors: [
      { color: "#000000", image: "/cover.svg" },
      { color: "#FFFFFF", image: "/cover-2.svg" },
      { color: "#F87171", image: "/cover-3.svg" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tag: "latest",
    category: "Hoodies",
  },
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
