import { useState } from "react";
import Details from "./Details";
import Reviews from "./Reviews";
function DetailsAndReviews({ product }) {
  const [isReview, setisReview] = useState(true);
  return (
    <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-6 my-10 min-h-[400px] gap-6">
      {/* Sidebar */}
      <div className="flex flex-row md:flex-col pt-4 lg:pt-20 items-start gap-4 lg:col-span-1 w-full">
        <button
          className={`w-full cursor-pointer flex gap-2 py-3 px-3 ${
            !isReview ? "bg-neutral-200 rounded" : ""
          }`}
          onClick={() => setisReview(false)}
        >
          {/* SVG ... */}
          Details
        </button>

        <button
          className={`w-full cursor-pointer flex gap-2 py-3 px-3 ${
            isReview ? "bg-neutral-200 rounded" : ""
          }`}
          onClick={() => setisReview(true)}
        >
          {/* SVG ... */}
          Reviews
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full lg:col-span-5 py-6 px-4 md:px-10">
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
