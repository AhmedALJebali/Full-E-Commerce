import Footer, { NewsletterSection } from "@/app/_components/Footer";
import Breadcrumb from "@/app/_components/BreadCrump";
import { use } from "react";

export default function CategoryLayout({ children, params }) {
  const { category } = use(params); 

  return (
    <>
      <div className="bg-neutral-100 py-4 mb-7">
        <Breadcrumb productTitle={category} className=" border-transparent " />
      </div>
      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
