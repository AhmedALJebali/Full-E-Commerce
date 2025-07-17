import Breadcrumb from "@/app/_components/BreadCrump";
import Footer from "../_components/Footer";

export default function CheckoutLayout({ children }) {
  return (
    <>
      <div className="bg-neutral-100 py-4 pt-7 mb-7">
        <h1 className="mx-auto w-[95%] md:w-[80%] text-2xl md:text-3xl font-bold text-neutral-900 mb-[-12px]">
          Checkout
        </h1>
        <Breadcrumb productTitle={"Checkout"} className=" border-transparent " />
      </div>

      {children}
      <Footer isDark={true} />
    </>
  );
}
