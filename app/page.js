import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import BestSelling from "./_components/BestSelling";
import FashionParadise from "./_components/FashionParadise";
import FeaturedorLatest from "./_components/FeaturedorLatest";
import { NewsletterSection } from "./_components/Footer";
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
