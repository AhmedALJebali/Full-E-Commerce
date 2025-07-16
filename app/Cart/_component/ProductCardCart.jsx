"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useCart } from "@/app/_context/CartContext";

function ProductCardcart({ item }) {
  const { handleUpdateCart, handleDeleteFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (type) => {
    let newQuantity = quantity;

    if (type === "increase") {
      newQuantity = quantity + 1;
    } else if (type === "decrease" && quantity > 1) {
      newQuantity = quantity - 1;
    }

    setQuantity(newQuantity);
    const updatedItem = { ...item, quantity: newQuantity };
    handleUpdateCart(updatedItem);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-md shadow-sm">
      {/* Left Section: Image & Details */}
      <div className="flex flex-1 items-center gap-4">
        {/* Product Image */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-sm sm:text-base font-medium text-neutral-900  line-clamp-1">
            {item.title}
          </p>
          <p className="text-xs text-gray-500  flex items-center gap-2 mt-1">
            Color:
            <span
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: item.options.color }}
            ></span>
            | Size: {item.options.size}
          </p>
        </div>
      </div>

      {/* Right Section: Quantity, Price, Remove */}
      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between sm:justify-end sm:w-[300px]">
        {" "}
        {/* Price */}
        <div className="text-base font-bold text-neutral-900">
          ${item.price}
        </div>
        {/* Quantity Controls */}
        <div className="flex items-center justify-between border border-neutral-300 rounded px-2 h-[40px] w-[120px]">
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="text-xl text-neutral-700 hover:text-neutral-900 cursor-pointer"
          >
            −
          </button>
          <span className="text-base">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="text-xl text-neutral-700 hover:text-neutral-900 cursor-pointer"
          >
            +
          </button>
        </div>
        {/* Delete Button */}
        <button
          onClick={() => handleDeleteFromCart(item)}
          className="p-2 border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductCardcart;
