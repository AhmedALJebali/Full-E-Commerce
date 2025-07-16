import Footer from "@/app/_components/Footer";
import Breadcrumb from "../_components/BreadCrump";

export default function CartLayout({ children }) {
  return (
    <>
      <div className="bg-neutral-100 py-6 mb-7">
        <h1 className="mx-auto w-[95%] md:w-[80%] text-2xl md:text-3xl font-bold text-neutral-900 mb-[-15px]">
          Cart
        </h1>
        <Breadcrumb productTitle={"Cart"} className=" border-transparent " />
      </div>
      {children}
      <Footer isDark={true} />
    </>
  );
}
