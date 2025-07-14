"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Reviews({ product }) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(product.reviews.length, 3)
  );

  const reviewsRef = useRef(); // ✅ مرجع لمنطقة التعليقات

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    reviewsRef.current?.scrollIntoView({ behavior: "smooth" }); // ✅ تمرير ناعم لأعلى
  };

  const visibleReviews = product.reviews.slice(0, visibleCount);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
      <h1
        ref={reviewsRef}
        className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
      >
        Reviews
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl font-semibold text-neutral-800">
          {product.rating}
        </span>
        <span className="text-sm md:text-base text-neutral-500">
          — {product.reviews.length} Reviews
        </span>
      </div>

      <button className="py-3 px-6 text-sm font-semibold rounded-md border border-neutral-900 text-neutral-900 hover:text-white hover:bg-neutral-900 transition-all mb-10">
        Write a review
      </button>

      <hr className="border-t border-gray-300 mb-10" />

      <AnimatePresence>
        {visibleReviews.map((review, index) => {
          const initials = review.author
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);

          return (
            <motion.div
              key={review.author + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full grid grid-cols-10 gap-4 items-start mb-10"
            >
              <div>
                <div className="rounded-full h-[70px] w-[70px] bg-amber-200 flex items-center justify-center font-bold text-2xl text-neutral-900">
                  {initials}
                </div>
              </div>

              <div className="col-span-9">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-semibold">{review.author}</h3>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => {
                      const filled = i < review.rating;
                      return (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill={filled ? "#5C5F6A" : "none"}
                          viewBox="0 0 24 25"
                          stroke={filled ? "#5C5F6A" : "#E5E7EB"}
                          strokeWidth="1.4"
                        >
                          <path d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69z" />
                        </svg>
                      );
                    })}
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mb-2">{review.date}</p>
                <p className="text-base text-neutral-600">{review.text}</p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <div className="flex flex-row justify-between w-full md:w-[70%] mx-auto items-center gap-4 mt-8 flex-wrap">
        {visibleCount > 3 && (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 rounded border cursor-pointer border-neutral-400 text-neutral-700 hover:bg-neutral-200 transition-all text-sm font-semibold flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            Show less
          </button>
        )}

        {visibleCount < product.reviews.length && (
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 cursor-pointer rounded border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all text-sm font-semibold"
          >
            View more
          </button>
        )}
      </div>
    </div>
  );
}

export default Reviews;
