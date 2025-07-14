import React from "react";
import ProductsSwiper from "./ProductsSwiper";
const productsBestSelling = [
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
    id: 3,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.8,
    reviews: [
      {
        rating: 5,
        author: "Benjamin Clark",
        date: "23 APRIL",
        text: "These guys know their stuff, and it shows in their products.",
      },
    ],
    details: {
      description: "Best-selling featured item with premium quality.",
      features: ["Durable", "High Performance", "Customer Favorite"],
    },
    colors: [
      { color: "#10B981", image: "/cover.svg" },
      { color: "#F59E0B", image: "/cover-2.svg" },
      { color: "#3B82F6", image: "/cover-3.svg" },
    ],
    sizes: ["S", "M", "L"],
    tag: "bestselling",
    category: "Hoodies",
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
  {
    id: 5,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.6,
    reviews: [
      {
        rating: 5,
        author: "Sara Lee",
        date: "5 DAYS AGO",
        text: "Top-notch product. Highly recommended!",
      },
    ],
    details: {
      description: "Stylish featured product with top reviews.",
      features: ["Best Style", "Good Reviews"],
    },
    colors: [
      { color: "#F43F5E", image: "/cover.svg" },
      { color: "#8B5CF6", image: "/cover-2.svg" },
    ],
    sizes: ["M", "L", "XL"],
    tag: "bestselling",
    category: "Accessories",
  },
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
    id: 8,
    title: "Product Latest",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    rating: 4.7,
    reviews: [],
    details: {
      description: "Minimalist design with durable materials.",
      features: ["Minimalist", "Long-lasting"],
    },
    colors: [
      { color: "#F87171", image: "/cover.svg" },
      { color: "#FACC15", image: "/cover-2.svg" },
    ],
    sizes: ["S", "M"],
    tag: "bestselling",
    category: "Shoes",
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
  return (
    <section className="w-[95%] md:w-[80%] mx-auto flex flex-col items-center py-10">
      <div>
        <h3 className="text-xs md:text-sm text-neutral-300 tracking-normal uppercase mb-1">
          Shop Now
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5">
          Best Selling
        </h1>
      </div>
      <ProductsSwiper products={productsBestSelling} />
    </section>
  );
}

export default BestSelling;
