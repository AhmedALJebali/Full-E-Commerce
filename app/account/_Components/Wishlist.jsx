import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/_context/CartContext";
function WishlistItem({ item }) {
  const { handleAddToCart, isItemInCart } = useCart();
  if (isItemInCart(item)) {
    return null;
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 bg-white p-4 rounded-md border-b border-neutral-300 mb-4">
      {/* Left: Image + Info */}
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm sm:text-base font-medium text-neutral-900">
            {item.title}
          </p>
          <div className="flex items-center gap-4">
            {" "}
            <p className="text-sm text-neutral-600 mt-1">
              Size: {item.options.size}
            </p>
            <p className="text-sm text-neutral-600 mt-1 flex items-center gap-2">
              Color:{" "}
              <span
                className="inline-block w-4 h-4 rounded-full border"
                style={{ backgroundColor: item.options.color }}
              />
            </p>
          </div>
          <button className="cursor-pointer  text-sm mt-3 text-left text-bold text-neutral-900 ">
            Remove Items
          </button>
        </div>
      </div>
      <p className="text-2xl  font-semibold mt-1">${item.price.toFixed(2)}</p>
      {/* Right: Button */}
      <div className="flex items-center justify-end sm:w-[140px]">
        <button
          onClick={() => handleAddToCart(item)}
          className="cursor-pointer  px-7 py-4 text-sm font-medium border border-neutral-800 rounded-md hover:bg-neutral-100 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Wishlist({ wishlist }) {
  return (
    <>
    <h2 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">Wishlist</h2>
      <div className="mt-6">
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Wishlist;
