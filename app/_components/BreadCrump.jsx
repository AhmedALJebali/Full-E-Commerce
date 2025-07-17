import Link from "next/link";
import { ChevronRight } from "lucide-react"; 

const Breadcrumb = ({ productTitle, className = "" }) => {
  return (
    <nav
      className={
        "flex items-center mx-auto w-[95%] md:w-[80%] text-sm text-gray-500 pt-4 border-t border-neutral-200 mb-4 mt-1 " +
        className
      }
      aria-label="Breadcrumb" 
    >
      <Link
        href="/"
        className="font-medium text-neutral-600 cursor-pointer hover:underline"
      >
        Ecommerce
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-500 mx-2" aria-hidden="true" />

      <span className="text-neutral-900 font-bold" aria-current="page">
        {productTitle || "Product Title"}
      </span>
    </nav>
  );
};

export default Breadcrumb;
