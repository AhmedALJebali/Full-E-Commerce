"use client";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import CartDropdown from "@/app/Cart/_component/CartDrawer";
import { ShoppingCart, UserCircle, Search, X } from "lucide-react";
import { useProducts } from "@/app/_context/ProductsContext";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const { categories } = useProducts();
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Ecommerce Store | Buy Fashion & Accessories Online</title>
        <meta
          name="description"
          content="Shop the latest fashion trends, clothes, shoes, and accessories online with fast delivery and great prices."
        />
        <meta
          name="keywords"
          content="Ecommerce, online store, clothes, fashion, buy jeans, t-shirts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.example.com/" />
        <meta
          property="og:title"
          content="Ecommerce Store | Fashion & Accessories"
        />
        <meta
          property="og:description"
          content="Shop top-quality fashion products with the best deals online."
        />
        <meta property="og:image" content="/cover.svg" />
        <meta property="og:type" content="website" />
      </Head>

      <header
        className="w-[95%] md:w-[80%] mx-auto flex flex-wrap items-center justify-between py-4 gap-4"
        role="banner"
      >
        {/*  Logo as H1 for Homepage */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="40" height="40" rx="20" fill="#0E1422" />
              <path
                d="M24.4769 11.8485L18.204 8.05509C17.6119 7.69292 16.9388 7.5015 16.2532 7.50031C14.2094 7.50031 12.3348 9.21225 12.3348 11.605V25.8073L24.4769 18.4669C26.9083 16.9947 26.9083 13.32 24.4769 11.8485ZM15.8484 18.948V11.3679L22.1163 15.1567L15.8484 18.948Z"
                fill="white"
              />
              <path
                d="M27.8489 33.4844C27.8489 33.5273 15.9908 33.466 15.9908 33.466L14.9434 33.3425C13.2467 33.144 11.9443 31.6233 12.002 29.8346C12.002 29.7917 12.0057 29.7519 12.0081 29.7103C12.0547 28.9365 12.3261 28.1961 12.7858 27.5885C12.9725 27.3461 13.2009 27.1425 13.4592 26.9882L22.4782 21.5725C24.3414 20.4535 25.8931 20.062 26.6999 18.0341C26.9974 17.2757 27.126 16.4562 27.0757 15.6379L27.0446 15.0865L27.9651 20.4204C28.083 21.3264 27.9013 22.2537 27.4211 23.0169C27.1326 23.4785 26.7475 23.8653 26.2951 24.1479L15.8295 29.3943C15.8191 29.4006 15.809 29.4074 15.7993 29.4149C15.5127 29.6293 15.6896 30.1069 16.0403 30.0867L24.7515 30.1403C26.4433 30.0417 27.8526 31.7112 27.8489 33.4844Z"
                fill="white"
              />
            </svg>
            <h1 className="text-neutral-900 text-lg font-bold">Ecommerce</h1>
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden block text-neutral-700"
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center gap-4 text-sm text-neutral-500 w-full lg:w-auto`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <Link href="/" className="hover:text-black" title="Go to Home">
            Home
          </Link>
          <button
            onClick={() => setShowCategories(true)}
            className="hover:text-black flex items-center gap-1 cursor-pointer text-neutral-500 group"
            title="Browse categories"
          >
            <span>Categories</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5327 15.3117C12.2557 15.561 11.8042 15.563 11.5243 15.3163L6 10.4486L7.00331 9.54604L12.0207 13.9672L16.9863 9.5L18 10.3932L12.5327 15.3117Z"
              />
            </svg>
          </button>
          <Link
            href="/Search"
            className="hover:text-black"
            title="Learn about us"
          >
            Search
          </Link>
          <Link href="/Contact" className="hover:text-black" title="Contact us">
            Contact
          </Link>
        </nav>

        {/* Right Side: Search + Icons */}
        <div className="flex flex-row items-center w-full lg:w-[35%] gap-3 justify-between">
          {/* Search */}
          <div className="h-12 border w-full sm:w-[75%] border-neutral-100 px-4 rounded-md flex items-center gap-3">
            <Search size={30} className="text-neutral-500" />
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="text"
              placeholder="Search products"
              aria-label="Search products"
            />
          </div>

          {/* Cart + User */}
          <div className="flex items-center gap-5">
            <button
              className="cursor-pointer"
              onClick={() => setShowDropdown(true)}
              aria-label="View cart"
            >
              <ShoppingCart size={30} className="text-neutral-600 text-bold" />
            </button>
            <Link href="/account" aria-label="User Account">
              <UserCircle size={30} className="text-neutral-600 text-bold" />
            </Link>
          </div>
        </div>
      </header>
      {/* BackDrop for Categories */}
      {/* Backdrop (Cover Screen when Menu is open) */}
      {showCategories && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowCategories(false)}
        />
      )}

      {/* Categories Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          showCategories ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button className="cursor-pointer" onClick={() => setShowCategories(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="p-4 space-y-4 text-neutral-700 text-base">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/Categories/${category}`}
                className="hover:text-black transition"
                onClick={() => setShowCategories(false)}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart Dropdown */}
      {showDropdown && <CartDropdown onClose={() => setShowDropdown(false)} />}
    </>
  );
}

export default Header;
