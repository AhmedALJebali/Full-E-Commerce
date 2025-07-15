import Link from "next/link";
const Breadcrumb = ({ productTitle, className }) => {
  return (
    <nav
      className={
        "flex items-center mx-auto w-[95%] md:w-[80%] text-sm text-gray-500 pt-4 border-t border-neutral-200 mb-4 mt-1" +
        className
      }
    >
      <Link href="/" className="font-medium text-neutral-600 cursor-pointer">
        Ecommerce
      </Link>
      <svg
        className="w-4 h-4 text-gray-500 mx-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-neutral-900 font-bold">
        {productTitle ? productTitle : <>Product Title</>}
      </span>
    </nav>
  );
};

export default Breadcrumb;
