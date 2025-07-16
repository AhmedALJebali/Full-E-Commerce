"use client";
import Breadcrumb from "@/app/_components/BreadCrump";
import ProductsSwiper from "@/app/_components/ProductsSwiper";
import Product from "./_components/Product";
import { useParams } from "next/navigation";
import { useProducts } from "@/app/_context/ProductsContext";
import DetailsAndReviews from "./_components/DetailsAndReviews";

export default function ProductsPage() {
  const { products } = useProducts();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  const category = product.category;
  const productsByCategory = products.filter(
    (product) => product.category === category && product.id !== Number(id)
  );
  return (
    <>
      <Breadcrumb productTitle={product.title} />
      <Product product={product} />
      <DetailsAndReviews product={product} />
      <div className="w-[95%] md:w-[80%] mx-auto my-10">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
          You Might also Like
        </h1>
        <h3 className="text-xs md:text-sm text-neutral-400 tracking-normal uppercase mb-1">
          SIMILAR PRODUCTS
        </h3>
        <ProductsSwiper products={productsByCategory} />
      </div>
    </>
  );
}
