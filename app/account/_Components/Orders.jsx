import React from "react";
import Image from "next/image";
import Link from "next/link";
function Order({ order }) {
  const product = order.Cart[0];
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 bg-white p-4 rounded-md border-b border-neutral-300 mb-4">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm sm:text-base font-medium text-neutral-900">
            {product.title}
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Ordered On: {order.Date}
          </p>
          <p className="text-sm text-neutral-800 font-semibold mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end sm:items-center gap-3 sm:gap-4 sm:flex-row sm:w-[280px] justify-end">
        <div className="text-sm font-medium text-neutral-700 border-b border-neutral-700 pb-0.5 capitalize">
          {order.Status}
        </div>
        <Link
          href={`/orders/${order.id}`}
          className=" px-6 py-4 text-sm font-medium border border-neutral-800 rounded-md hover:bg-neutral-100 transition"
        >
          View items
        </Link>
      </div>
    </div>
  );
}

function Orders({ orders }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-neutral-800 mb-6 border-b pb-2">
        Orders
      </h2>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-neutral-400 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7h18M6 7v13h12V7m-9 4h6"
            />
          </svg>

          <p className="text-neutral-600 text-sm mb-6">
            Your order history is waiting to be filled.
          </p>
          <Link
            href="/Search"
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md text-sm transition"
          >
            Start Shopping
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      ) : (
        <div className="mt-6">
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      )}
    </>
  );
}

export default Orders;
