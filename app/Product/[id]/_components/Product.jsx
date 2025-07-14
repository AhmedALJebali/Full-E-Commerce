"use client";
import React from "react";
import Image from "next/image";
function Product({ Product }) {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto my-10 grid grid-cols-2">
      <div className="bg-neutral-400">
        {/* <Image src={Product.image} alt={Product.title} fill /> */}
      </div>
      <div className="">ssss</div>
    </div>
  );
}

export default Product;
