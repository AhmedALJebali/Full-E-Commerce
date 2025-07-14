import Breadcrumb from "@/app/_component/BreadCrump";
import Footer, { NewsletterSection } from "../../_component/Footer";
import ProductsSwiper from "@/app/_component/ProductsSwiper";
const productsByCategory = [
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

export default function ProductsLayout({ children }) {
  return (
    <>
      {" "}
      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
