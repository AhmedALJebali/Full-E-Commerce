"use client";
import ProductCardcart from "./_component/ProductCardCart";
import Link from "next/link";
import React from "react";
import { useCart } from "../_context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[95%] md:w-[80%] mx-auto px-4 md:px-8 my-10 flex flex-col lg:flex-row gap-6">
      {/* Cart Items */}
      <div className="w-full lg:w-2/3 space-y-6">
        {cart.map((item, index) => (
          <ProductCardcart key={index} item={item} />
        ))}
      </div>

      {/* Summary */}
      <div className="w-full lg:w-1/3 space-y-6">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-xl font-semibold text-gray-900">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base text-gray-500">Original price</dt>
                <dd className="text-base font-medium text-gray-900">
                  ${cartTotal.toFixed(2)}
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base text-gray-500">Savings</dt>
                <dd className="text-base font-medium text-green-600">-$0.00</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base text-gray-500">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900">$0.00</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base text-gray-500">Tax</dt>
                <dd className="text-base font-medium text-gray-900">$0.00</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900">
                ${cartTotal.toFixed(2)}
              </dd>
            </dl>
          </div>

          <button className="w-full rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800">
            Proceed to Checkout
          </button>

          <div className="flex justify-center gap-2">
            <span className="text-sm text-gray-500">or</span>
            <Link
              href="/Search"
              className="inline-flex items-center gap-2 text-sm font-medium underline"
            >
              Continue Shopping
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Discount Code */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="voucher"
                className="block text-sm font-medium text-gray-900"
              >
                Voucher or gift card
              </label>
              <input
                type="text"
                id="voucher"
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
                placeholder="Enter your code"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Apply Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
