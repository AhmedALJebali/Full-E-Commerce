import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link href={`/Product/${product.id}`} key={product.id} className="w-full block" aria-label={`View product ${product.title}`}>
      <div className="w-full h-[280px] relative bg-[#F6F6F6] flex justify-center items-center overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain"
        />
      </div>

      <h2 className="text-sm md:text-base text-neutral-900 font-bold mt-3">
        {product.title}
      </h2>

      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
        <button className="w-fit text-xs md:text-sm text-neutral-900 bg-neutral-50 border border-neutral-400 px-3 py-1 rounded-xl">
          {product.status}
        </button>
        <span className="text-sm md:text-base text-neutral-600">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;
