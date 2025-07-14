import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Product({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [selectedSize, setSelectedSize] = useState("");
  const swiperRef = useRef(null);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleColorClick = (color, index) => {
    setSelectedColor(color);
    swiperRef.current?.slideToLoop(index); 
  };

  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    const color = product.colors[index]?.color;
    if (color) setSelectedColor(color);
  };
  return (
    <div className="w-[95%] md:w-[80%] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* product Image */}
      <div className="bg-neutral-200 h-[300px] sm:h-[300px] md:h-[600px] relative rounded-lg overflow-hidden shadow-md cursor-pointer">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="
            w-full h-full
            [&_.swiper-pagination-bullet]:!bg-neutral-500
            [&_.swiper-pagination-bullet]:!w-4
            [&_.swiper-pagination-bullet]:!h-4
            [&_.swiper-pagination-bullet-active]:!bg-neutral-900
          "
        >
          {product.colors.map(({ image }, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`${product.title} ${index}`}
                fill
                className="object-contain p-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* product Info */}
      <div className="col-span-1 space-y-6 w-[95%] mx-auto  md:w-[80%] pt-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {product.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-2">
          {/* Rating */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl border border-neutral-300 bg-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="#5C5F6A"
                d="m8 .5 2.472 4.937L16 6.233l-4 3.841.944 5.426L8 12.937 3.056 15.5 4 10.074l-4-3.84 5.528-.797z"
              ></path>
            </svg>
            <span className="text-sm text-neutral-600 tracking-widest">
              {product.rating} — {product.reviews.length} Reviews
            </span>
          </div>

          {/* Stock Status */}
          <button className="text-sm text-neutral-800 border border-neutral-300 px-4 py-1 rounded-xl tracking-widest">
            {product.status}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
        </div>

        {/* Colors */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 mb-3">
            AVAILABLE COLORS
          </h3>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map(({ color }, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={`w-6 h-6 rounded-full cursor-pointer ring-2 ring-offset-2 ${
                  selectedColor === color
                    ? "ring-neutral-800 ring-offset-neutral-100"
                    : "ring-transparent border-transparent"
                }`}
                onClick={() => handleColorClick(color, index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 mb-2">
            SELECT SIZE
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`rounded border px-4 py-2 text-sm sm:text-base items-center border-neutral-300 cursor-pointer ${
                  selectedSize === size ? "border-neutral-900" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 mb-2">
            QUANTITY
          </h3>
          <div className="w-[150px] sm:w-[170px] h-[38px] sm:h-[40px] flex justify-between rounded border px-3 sm:px-4 py-1 sm:py-6 items-center border-neutral-300">
            <button
              onClick={decreaseQuantity}
              className="cursor-pointer text-xl"
            >
              —
            </button>
            <div className="w-12 flex items-center justify-center text-xl">
              {quantity}
            </div>
            <button
              onClick={increaseQuantity}
              className="cursor-pointer text-3xl"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex flex-row items-center gap-3 w-full">
          <button
            disabled={!selectedSize}
            className={`w-full sm:w-[80%] py-2 text-sm sm:text-base font-semibold rounded-md ${
              selectedSize
                ? "bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer transition-all"
                : "bg-neutral-300 text-gray-600 cursor-context-menu"
            }`}
          >
            {!selectedSize ? "Select a size" : "Add to Cart"}
          </button>
          <div className="w-[42px] h-[42px] rounded-[3.5px] border flex items-center border-neutral-300 group cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              fill="none"
              viewBox="0 0 43 43"
              className="group-hover:fill-neutral-700"
            >
              <path
                stroke="#5C5F6A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.429"
                d="m21.505 28.5-7.214-6.449c-3.92-3.868 1.842-11.298 7.214-5.287 5.371-6.01 11.11 1.443 7.215 5.287z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Free Shipping Message */}
        <p className="text-sm text-neutral-900 mt-[-10px] tracking-widest">
          — Free shipping on orders $100+
        </p>
      </div>
    </div>
  );
}

export default Product;
