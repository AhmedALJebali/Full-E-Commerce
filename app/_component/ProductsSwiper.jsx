"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ProductsSwiper({ products }) {
  const isSwiper = products.length > 4;
  return (
    <>
      {isSwiper ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          className="w-full mt-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard className="w-full" product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-between gap-5 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductsSwiper;
