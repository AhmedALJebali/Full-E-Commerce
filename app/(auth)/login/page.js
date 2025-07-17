import Breadcrumb from "@/app/_components/BreadCrump";

import Footer from "@/app/_components/Footer";
import AuthForm from "../_component/AuthForm";

export default function signUpPage() {
  return (
    <>
      {" "}
      <div className="bg-neutral-100 pt-9 pb-7 mb-7 ">
        <h1 className="mx-auto w-[95%] md:w-[80%] text-2xl md:text-3xl font-bold text-neutral-900 mb-[-15px]">
          Login
        </h1>
        <Breadcrumb productTitle={"Login"} className=" border-transparent " />
      </div>
      <AuthForm type="login" />
      <Footer isDark={true} />
    </>
  );
}
