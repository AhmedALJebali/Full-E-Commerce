import Footer, { NewsletterSection } from "@/app/_components/Footer";
import Breadcrumb from "../_components/BreadCrump";
// ✅ SEO Metadata
export const metadata = {
  title: "Search Products | YourStore",
  description:
    "Browse and filter products by category, color, size, and price. Find exactly what you're looking for at YourStore.",
};

export default function SearchLayout({ children }) {
  return (
    <>
      <div className="bg-neutral-100 py-4 mb-7">
        <Breadcrumb productTitle={"Search"} className=" border-transparent " />
      </div>

      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
