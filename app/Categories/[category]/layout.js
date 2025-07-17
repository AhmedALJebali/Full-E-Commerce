import Footer, { NewsletterSection } from "@/app/_components/Footer";
import Breadcrumb from "@/app/_components/BreadCrump";
import { use } from "react";

export default function CategoryLayout({ children, params }) {
  const { category } = use(params);

  return (
    <>

      <div className="bg-neutral-100 py-4 pt-7 mb-7">
        <h1 className="mx-auto w-[95%] md:w-[80%] text-2xl md:text-3xl font-bold text-neutral-900 mb-[-12px]">
         {category}
        </h1>
        <Breadcrumb productTitle={category} className=" border-transparent " />
      </div>
      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
