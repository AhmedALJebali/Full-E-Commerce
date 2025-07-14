"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ProductsSwiper({ products }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        breakpoints={{
          640: {
            slidesPerView: Math.min(2, products.length),
          },
          768: {
            slidesPerView: Math.min(3, products.length),
          },
          1024: {
            slidesPerView: Math.min(4, products.length),
          },
        }}
        loop={true}
        className="w-full mt-10 flex"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard className="w-full" product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductsSwiper;
