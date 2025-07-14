"use client";
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-[95%] md:w-[80%] mx-auto flex flex-wrap items-center justify-between py-4 gap-4">
      {/* Left Side: Logo + Nav Toggle */}
      <div className="flex items-center justify-between w-full lg:w-auto gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* ... SVG Logo */}
          <span className="text-neutral-900 text-lg font-bold">Ecommerce</span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden block text-neutral-700"
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
      >
        <ul className="cursor-pointer hover:text-black">Home</ul>
        <ul className="flex items-center gap-1 cursor-pointer text-[#5C5F6A] hover:text-black group">
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
        </ul>
        <ul className="cursor-pointer hover:text-black">About</ul>
        <ul className="cursor-pointer hover:text-black">Contact</ul>
      </nav>

      {/* Right Side: Search + Icons */}
      <div className="flex flex-row items-center w-full lg:w-[35%] gap-3 justify-between">
        {/* Search */}
        <div className="h-10 border w-full sm:w-[75%] border-neutral-100 px-4 rounded-md flex items-center gap-1">
          {/* Search Icon */}
          <input
            className="w-full bg-transparent outline-none text-sm"
            type="text"
            placeholder="Search products"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5  w-auto justify-center">
          {/* ... cart + user icons */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5H4.38321L5.58853 13.4769C5.63862 13.8071 5.80643 14.108 6.06102 14.3243C6.31561 14.5406 6.63984 14.6576 6.97395 14.6538H15.7021C16.0042 14.6696 16.3032 14.5861 16.5534 14.4161C16.8035 14.2461 16.9912 13.9989 17.0875 13.7123L18.9302 8.17385C18.999 7.96564 19.0173 7.74406 18.9836 7.52739C18.9498 7.31072 18.865 7.10517 18.7362 6.92769C18.6021 6.73894 18.4227 6.58681 18.2146 6.48522C18.0065 6.38362 17.7761 6.33581 17.5447 6.34615H4.8681"
              stroke="#5C5F6A"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4666 19.5C15.2829 19.5 15.1067 19.427 14.9768 19.2972C14.8469 19.1674 14.7739 18.9913 14.7739 18.8077C14.7739 18.6241 14.8469 18.448 14.9768 18.3181C15.1067 18.1883 15.2829 18.1154 15.4666 18.1154C15.6504 18.1154 15.8266 18.1883 15.9565 18.3181C16.0864 18.448 16.1594 18.6241 16.1594 18.8077C16.1594 18.9913 16.0864 19.1674 15.9565 19.2972C15.8266 19.427 15.6504 19.5 15.4666 19.5Z"
              fill="#5C5F6A"
              stroke="#5C5F6A"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.46127 19.5C6.27755 19.5 6.10135 19.427 5.97145 19.2972C5.84154 19.1674 5.76855 18.9913 5.76855 18.8077C5.76855 18.6241 5.84154 18.448 5.97145 18.3181C6.10135 18.1883 6.27755 18.1154 6.46127 18.1154C6.64499 18.1154 6.82118 18.1883 6.95109 18.3181C7.081 18.448 7.15398 18.6241 7.15398 18.8077C7.15398 18.9913 7.081 19.1674 6.95109 19.2972C6.82118 19.427 6.64499 19.5 6.46127 19.5Z"
              fill="#5C5F6A"
              stroke="#5C5F6A"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.56201 9.11536V11.8846"
              stroke="#5C5F6A"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7183 9.11536V11.8846"
              stroke="#5C5F6A"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.11604 4.58299C7.88092 3.81812 8.91831 3.38842 10 3.38842C11.0817 3.38842 12.1191 3.81812 12.884 4.58299C13.6488 5.34787 14.0785 6.38525 14.0785 7.46695C14.0785 8.54864 13.6488 9.58603 12.884 10.3509C12.1191 11.1158 11.0817 11.5455 10 11.5455C8.91831 11.5455 7.88092 11.1158 7.11604 10.3509C6.35117 9.58603 5.92147 8.54864 5.92147 7.46695C5.92147 6.38525 6.35117 5.34787 7.11604 4.58299ZM10 4.76864C9.28436 4.76864 8.59804 5.05292 8.09201 5.55895C7.58597 6.06498 7.30169 6.75131 7.30169 7.46695C7.30169 8.18258 7.58597 8.86891 8.09201 9.37494C8.59804 9.88097 9.28436 10.1653 10 10.1653C10.7156 10.1653 11.402 9.88097 11.908 9.37494C12.414 8.86891 12.6983 8.18258 12.6983 7.46695C12.6983 6.75131 12.414 6.06498 11.908 5.55895C11.402 5.05292 10.7156 4.76864 10 4.76864Z"
              fill="#5C5F6A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 13.5804C8.95587 13.5804 7.9293 13.849 7.01897 14.3603C6.10864 14.8717 5.34516 15.6087 4.80193 16.5003C4.60364 16.8258 4.17902 16.9289 3.85353 16.7307C3.52804 16.5324 3.42493 16.1077 3.62323 15.7823C4.28964 14.6884 5.22624 13.7843 6.343 13.157C7.45975 12.5297 8.71911 12.2002 10 12.2002C11.2809 12.2002 12.5402 12.5297 13.657 13.157C14.7738 13.7843 15.7104 14.6884 16.3768 15.7823C16.5751 16.1077 16.472 16.5324 16.1465 16.7307C15.821 16.9289 15.3964 16.8258 15.1981 16.5003C14.6548 15.6087 13.8914 14.8717 12.981 14.3603C12.0707 13.849 11.0441 13.5804 10 13.5804Z"
              fill="#5C5F6A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.28249 2.78249C5.06408 1.00089 7.48044 0 10 0C12.5196 0 14.9359 1.00089 16.7175 2.78249C18.4991 4.56408 19.5 6.98044 19.5 9.5C19.5 12.0196 18.4991 14.4359 16.7175 16.2175C14.9359 17.9991 12.5196 19 10 19C7.48044 19 5.06408 17.9991 3.28249 16.2175C1.50089 14.4359 0.5 12.0196 0.5 9.5C0.5 6.98044 1.50089 4.56408 3.28249 2.78249ZM10 1.38022C7.8465 1.38022 5.7812 2.23569 4.25845 3.75845C2.73569 5.2812 1.88022 7.3465 1.88022 9.5C1.88022 11.6535 2.73569 13.7188 4.25845 15.2416C5.7812 16.7643 7.8465 17.6198 10 17.6198C12.1535 17.6198 14.2188 16.7643 15.7416 15.2416C17.2643 13.7188 18.1198 11.6535 18.1198 9.5C18.1198 7.3465 17.2643 5.2812 15.7416 3.75845C14.2188 2.23569 12.1535 1.38022 10 1.38022Z"
              fill="#5C5F6A"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
