import Breadcrumb from "@/app/_components/BreadCrump";
import Footer from "@/app/_components/Footer";

export default function AccountLayout({ children }) {
  return (
    <>
      <div className="bg-neutral-100 pt-9 pb-7 mb-7 ">
        <h1 className="mx-auto w-[95%] md:w-[80%] text-2xl md:text-3xl font-bold text-neutral-900 mb-[-15px]">
          My Account
        </h1>
        <Breadcrumb
          productTitle={"My Account"}
          className=" border-transparent "
        />
      </div>
      {children}
      <Footer isDark={true} />
    </>
  );
}
