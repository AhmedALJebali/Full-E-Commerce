import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="bg-[#F6F6F6] w-full py-16 h-[450px]">
      <div className="w-[95%] lg:w-[80%] h-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-center  gap-10 ">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start  text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Fresh Arrivals Online
          </h1>
          <h3 className="text-lg md:text-xl font-normal text-neutral-600 mt-2 mb-5">
            Discover Our Newest Collection Today
          </h3>

          <button className="flex items-center gap-2 bg-neutral-900 text-white cursor-pointer px-6 py-3 rounded-md mt-6 hover:bg-neutral-800 transition">
            View Collection
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z"
                fill="#F6F6F6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z"
                fill="#F6F6F6"
              />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex w-full lg:w-[60%]   justify-end relative">
          <div className="absolute w-[300px] h-[430px] bottom-[-55px] right-0">
            <Image
              src="/Hero-Image.svg"
              alt="Hero"
              fill
              className="object-contain"
            />
          </div>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 18.9689C30.5464 19.6339 26.2639 20.2457 23.6348 22.2674C20.5449 24.6349 19.8131 28.9709 19 37.6429C18.1598 28.6517 17.4009 24.3423 14.0128 22.028C11.3837 20.2191 7.12839 19.6339 0 18.9955C7.42653 18.3304 11.7361 17.7186 14.3381 15.7235C17.4551 13.3294 18.1869 9.02002 19 0.321442C19.7589 8.32839 20.4365 12.6112 22.9572 15.0851C25.4779 17.559 29.8688 18.2506 38 18.9689Z"
              fill="#E6E7E8"
            />
          </svg>
          <svg
            width="340"
            height="340"
            viewBox="0 0 340 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.6" cx="170" cy="170" r="170" fill="#E9E9EB" />
          </svg>
        </div>
    
      </div>
    </section>
  );
}

export default Hero;
