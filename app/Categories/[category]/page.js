import { use } from "react";
import ProductsView from "@/app/Search/_components/ProductsView";

export default function CategoryPage({ params }) {
  const { category } = use(params);
  return (
    <div className="w-[95%] md:w-[80%] mx-auto my-10">
      <ProductsView category={category} />{" "}
    </div>
  );
}
