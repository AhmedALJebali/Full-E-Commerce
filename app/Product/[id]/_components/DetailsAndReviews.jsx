import { useState } from "react";
import Details from "./Details";
import Reviews from "./Reviews";
function DetailsAndReviews({ product }) {
  const [isReview, setisReview] = useState(true);
  return (
    <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-6  my-30 min-h-[400px]">
      <div className="flex flex-col pt-20 items-start gap-4">
        <button
          className={` w-full cursor-pointer items-center flex gap-2 py-3 px-3 ${
            !isReview ? "bg-neutral-200  rounded" : ""
          } `}
          onClick={() => setisReview(false)}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.14289 13.0714C5.8273 13.0714 5.57146 12.8156 5.57146 12.5C5.57146 12.1844 5.8273 11.9286 6.14289 11.9286"
              stroke="#0E1422"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.14289 13.0714C6.45847 13.0714 6.71431 12.8156 6.71431 12.5C6.71431 12.1844 6.45847 11.9286 6.14289 11.9286"
              stroke="#0E1422"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13.0714C11.6844 13.0714 11.4286 12.8156 11.4286 12.5C11.4286 12.1844 11.6844 11.9286 12 11.9286"
              stroke="#0E1422"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13.0714C12.3156 13.0714 12.5715 12.8156 12.5715 12.5C12.5715 12.1844 12.3156 11.9286 12 11.9286"
              stroke="#0E1422"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8571 13.0714C17.5415 13.0714 17.2857 12.8156 17.2857 12.5C17.2857 12.1844 17.5415 11.9286 17.8571 11.9286"
              stroke="#0E1422"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8571 13.0714C18.1728 13.0714 18.4285 12.8156 18.4285 12.5C18.4285 12.1844 18.1728 11.9286 17.8571 11.9286"
              stroke="#0E1422"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Details
        </button>
        <button
          className={` w-full cursor-pointer items-center flex gap-2 py-3 px-3 ${
            isReview ? "bg-neutral-200 rounded" : ""
          } `}
          onClick={() => setisReview(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              stroke="#5C5F6A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
              d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69z"
            ></path>
          </svg>
          Reviews
        </button>
      </div>
      <div className="col-span-5 py-10 px-10">
        {isReview ? (
          <Reviews product={product} />
        ) : (
          <Details product={product} />
        )}
      </div>
    </div>
  );
}

export default DetailsAndReviews;
