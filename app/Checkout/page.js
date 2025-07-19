"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../_context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[95%] md:w-[80%] mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Layout */}

      {/* Form Section */}
      <form className="space-y-4 lg:col-span-2">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="Enter your full name"
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Street Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
            rows={3}
            placeholder="Street, City, Country"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="Enter your city"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="Enter your state"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="Enter your Zip Code"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
              placeholder="Enter your Country"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
            placeholder="Enter your phone"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none text-left"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Card (Coming Soon)</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-xl hover:opacity-90 transition"
        >
          Confirm Order
        </button>
      </form>

      {/* Order Summary */}
      <div className="space-y-6">
        <div className="space-y-4 bg-white p-4 rounded-2xl ">
          <p className="text-xl font-semibold text-gray-900">Your Order</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {cart.map((item, index) => (
                <div key={index} className="bg-neutral-100 rounded-full p-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/Cart"
              className="bg-neutral-100 text-neutral-900 rounded px-4 py-2 hover:bg-neutral-200 transition"
            >
              Edit Cart
            </Link>
          </div>

          <div className="space-y-2">
            <dl className="flex justify-between">
              <dt className="text-base text-gray-500">Original price</dt>
              <dd className="text-base font-medium text-gray-900">
                ${total.toFixed(2)}
              </dd>
            </dl>
            <dl className="flex justify-between">
              <dt className="text-base text-gray-500">Savings</dt>
              <dd className="text-base font-medium text-green-600">-$0.00</dd>
            </dl>
            <dl className="flex justify-between">
              <dt className="text-base text-gray-500">Shipping</dt>
              <dd className="text-base font-medium text-gray-900">Free</dd>
            </dl>
            <dl className="flex justify-between">
              <dt className="text-base text-gray-500">Tax</dt>
              <dd className="text-base font-medium text-gray-900">$0.00</dd>
            </dl>
            <dl className="flex justify-between border-t pt-2 border-gray-200">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900">
                ${total.toFixed(2)}
              </dd>
            </dl>
          </div>

          <button className="w-full rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
