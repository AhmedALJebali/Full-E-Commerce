import Hero from "./_component/Hero";
import Features from "./_component/Features";
import Footer from "./_component/Footer";
import BestSelling from "./_component/BestSelling";
import FashionParadise from "./_component/FashionParadise";
import FeaturedorLatest from "./_component/FeaturedorLatest";
import { NewsletterSection } from "./_component/Footer";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <BestSelling />
      <FashionParadise />
      <FeaturedorLatest />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
