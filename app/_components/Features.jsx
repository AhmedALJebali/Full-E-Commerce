import React from "react";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

function Features() {
  return (
    <section
      className="w-[95%] lg:w-[80%] mx-auto py-20"
      aria-labelledby="features-title"
    >
      <h2 id="features-title" className="sr-only">
        Features
      </h2>

      <div className="grid grid-cols-3  gap-8">
        {/* Feature 1 */}
        <article className="flex flex-col items-start text-left">
          <div className="bg-neutral-100 rounded-full mb-4 w-12 h-12 flex justify-center items-center text-neutral-900 text-xl">
            <FaShippingFast aria-hidden="true" />
          </div>
          <h3 className="text-neutral-900 text-xl font-semibold mb-2">
            Free Shipping
          </h3>
          <p className="text-neutral-600 text-sm">
            Upgrade your style today and get FREE shipping on all orders!
          </p>
        </article>

        {/* Feature 2 */}
        <article className="flex flex-col items-start text-left">
          <div className="bg-neutral-100 rounded-full mb-4 w-12 h-12 flex justify-center items-center text-neutral-900 text-xl">
            <FaLock aria-hidden="true" />
          </div>
          <h3 className="text-neutral-900 text-xl font-semibold mb-2">
            Secure Payment
          </h3>
          <p className="text-neutral-600 text-sm">
            Your payment information is processed securely. Shop with confidence!
          </p>
        </article>

        {/* Feature 3 */}
        <article className="flex flex-col items-start text-left">
          <div className="bg-neutral-100 rounded-full mb-4 w-12 h-12 flex justify-center items-center text-neutral-900 text-xl">
            <FaHeadset aria-hidden="true" />
          </div>
          <h3 className="text-neutral-900 text-xl font-semibold mb-2">
            Customer Support
          </h3>
          <p className="text-neutral-600 text-sm">
            Need help? Our friendly support team is available 24/7.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Features;
