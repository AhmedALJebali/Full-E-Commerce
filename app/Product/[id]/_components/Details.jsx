import React from "react";

function Details({ product }) {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-8">
        Details
      </h1>

      <p className="text-base md:text-lg text-neutral-600 leading-relaxed whitespace-pre-line mb-13">
        {product.details.description}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Features</h2>
      <ul className="list-disc list-inside text-neutral-600 space-y-1">
        {product.details.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </>
  );
}

export default Details;
