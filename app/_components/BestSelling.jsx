"use client"
import ProductsSwiper from "./ProductsSwiper";
import { useProducts } from "@/app/_context/Products";

function BestSelling() {
  const { products } = useProducts();
  const bestselling = products.filter((p) => p.tag === "bestselling");
  return (
    <section className="w-[95%] md:w-[80%] mx-auto flex flex-col items-center py-10">
      <div>
        <h3 className="text-xs md:text-sm text-neutral-300 tracking-normal uppercase mb-1">
          Shop Now
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5">
          Best Selling
        </h1>
      </div>
      <ProductsSwiper products={bestselling} />
    </section>
  );
}

export default BestSelling;
