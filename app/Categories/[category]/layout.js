import Footer, { NewsletterSection } from "@/app/_components/Footer";
import Breadcrumb from "@/app/_components/BreadCrump";

export default function CategoryLayout({ children,params }) {
  return (
    <>
      <div className="bg-neutral-100 py-4 mb-7">
        <Breadcrumb productTitle={params.category} className=" border-transparent " />
      </div>
      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
