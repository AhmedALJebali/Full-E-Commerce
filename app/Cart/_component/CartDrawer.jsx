"use client";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/_context/CartContext";

export default function CartDrawer({ onClose }) {
  const { cart, handleDeleteFromCart, handleUpdateCart } = useCart();

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantity = (item, type) => {
    const newQuantity =
      type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    handleUpdateCart({ ...item, quantity: newQuantity });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full sm:max-w-sm h-full bg-white shadow-lg flex flex-col border-l border-gray-200 transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-[15px] font-semibold text-black">
            Shopping Cart
          </h2>
          <button onClick={onClose}>
            <X className="w-4 h-4 text-gray-500 hover:text-black  cursor-pointer" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 text-sm">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 relative pb-5 border-b border-neutral-100"
              >
                {/* Image */}
                <div className="relative w-20 h-20 bg-neutral-100 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => handleDeleteFromCart(item)}
                    className="absolute top-0 right-0 p-1 bg-neutral-100  cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-row gap-4 items-center mb-4">
                    <p className="text-2xl font-semibold text-neutral-900">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full border"
                          style={{ backgroundColor: item.options.color }}
                        ></span>
                        {item.options.size}
                      </span>
                    </div>
                  </div>

                  {/* Quantity + Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded w-[85px] h-[32px] justify-between px-2">
                      <button
                        className="text-sm cursor-pointer"
                        onClick={() => handleQuantity(item, "decrease")}
                      >
                        −
                      </button>
                      <span className="text-sm cursor-pointer">
                        {item.quantity}
                      </span>
                      <button
                        className="text-sm cursor-pointer"
                        onClick={() => handleQuantity(item, "increase")}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-medium text-neutral-900">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-4 space-y-3">
          <div className="flex justify-between text-sm font-medium text-neutral-900">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <Link
            href="/Cart"
            onClick={onClose}
            className="block text-center w-full rounded bg-neutral-900 text-white py-2 text-sm font-medium hover:bg-neutral-800"
          >
            View Cart
          </Link>
          <Link href="/Checkout" onClick={onClose} className="block text-center w-full text-xs text-gray-500 underline cursor-pointer">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
