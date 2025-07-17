import React from "react";

function Details({ product }) {
  if (!product?.details) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
        Details
      </h1>

      <p className="text-base md:text-lg text-neutral-600 leading-relaxed whitespace-pre-line mb-12">
        {product.details.description}
      </p>

      {product.details.features?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-3">Features</h2>
          <ul className="list-disc list-inside text-neutral-600 space-y-1">
            {product.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Details;
