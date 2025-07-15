import Footer, { NewsletterSection } from "@/app/_components/Footer";
import Breadcrumb from "../_components/BreadCrump";

export default function SearchLayout({ children }) {
  return (
    <>
      <div className="bg-neutral-100 py-4 mb-7">
      
        <Breadcrumb
          productTitle={"Search"}
          className=" border-transparent "
        />
      </div>

      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
