import Image from "next/image";
import Header from "./_component/Header";
import Hero from "./_component/Hero";
import Features from "./_component/Features";
import Footer from "./_component/Footer";
import BestSelling from "./_component/BestSelling";
import FashionParadise from "./_component/FashionParadise";
import FeaturedorLatest from "./_component/FeaturedorLatest";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Features />
      <BestSelling />
      <FashionParadise />
      <FeaturedorLatest />
      <Footer />
    </div>
  );
}
