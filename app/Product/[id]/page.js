"use client";
import Breadcrumb from "@/app/_component/BreadCrump";
import ProductsSwiper from "@/app/_component/ProductsSwiper";
import Product from "./_components/Product";
import { useParams } from "next/navigation";

const products = [
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
      features: [
        "Premium Quality",
        "Comfortable Fit",
        "Eco-Friendly",
        "Modern Design",
      ],
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
    colors: [{ color: "#6B7280", image: "/cover.svg" }],
    sizes: ["XS", "S", "M"],
    tag: "featured",
    category: "T-Shirts",
  },
];

let productsByCategory = [
  {
    id: 1,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    images: ["/cover.svg", "/cover-2.svg", "/cover-3.svg"],
    reviews: 12,
    rating: 4.5,
    details: "High-quality featured product with excellent durability.",
    colors: ["#000000", "#FFFFFF", "#F87171"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    images: ["/cover.svg", "/cover-2.svg", "/cover-3.svg"],
    reviews: 8,
    rating: 4.2,
    details: "Comfortable and stylish, suitable for all occasions.",
    colors: ["#1E3A8A", "#D97706"],
    sizes: ["M", "L"],
  },
  {
    id: 3,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    images: ["/cover.svg", "/cover-2.svg", "/cover-3.svg"],
    reviews: 21,
    rating: 4.8,
    details: "Best-selling featured item with premium quality.",
    colors: ["#10B981", "#F59E0B", "#3B82F6"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 4,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    images: ["/cover.svg", "/cover-2.svg", "/cover-3.svg"],
    reviews: 5,
    rating: 4.0,
    details: "Lightweight and modern design for daily wear.",
    colors: ["#6B7280"],
    sizes: ["XS", "S", "M"],
  },
  {
    id: 5,
    title: "Product Featured",
    price: 35.0,
    status: "IN STOCK",
    image: "/cover.svg",
    images: ["/cover.svg", "/cover-2.svg", "/cover-3.svg"],
    reviews: 17,
    rating: 4.6,
    details: "Stylish featured product with top reviews.",
    colors: ["#F43F5E", "#8B5CF6"],
    sizes: ["M", "L", "XL"],
  },
];
export default function ProductsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const category = product.category;
  productsByCategory = products.filter(
    (product) => product.category === category
  );
  return (
    <>
      <Breadcrumb />
      <Product Product={product} />
      <Breadcrumb />
      <div className="w-[95%] md:w-[80%] mx-auto my-10">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
          You Might also Like
        </h1>
        <h3 className="text-xs md:text-sm text-neutral-400 tracking-normal uppercase mb-1">
          SIMILAR PRODUCTS
        </h3>
        <ProductsSwiper products={productsByCategory} />
      </div>
    </>
  );
}
