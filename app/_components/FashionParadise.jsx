import React from "react";
import Image from "next/image";
import Link from "next/link";
function FashionParadise() {
  return (
    <div className="mt-20 bg-[linear-gradient(to_right,_#f6f6f6_30%,_#ffffff_70%)]">
      <div className="mx-auto w-[95%] md:w-[80%] flex flex-row items-center justify-between py-10 gap-6 sm:gap-10">
        {/* النصوص */}
        <div className="flex flex-col items-start text-left w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Fresh Arrivals Online
          </h1>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-neutral-600 mt-2 mb-5">
            Discover Our Newest Collection Today
          </h3>

          <Link href="/Search" className="flex items-center gap-2 bg-neutral-900 text-white cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-md mt-4 sm:mt-6 hover:bg-neutral-800 transition text-sm sm:text-base">
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
          </Link>
        </div>

        {/* الصورة */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <Image
            src="/Category Image.svg"
            alt="Fashion Paradise"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default FashionParadise;
