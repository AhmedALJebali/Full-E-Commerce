import React, { useState } from "react";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  LogOutIcon,
  KeyIcon,
} from "lucide-react";

const AccountNavigation = ({ setAccount, Account }) => {
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  const navItems = [
    {
      label: "Account Detail",
      icon: <UserCircleIcon className="w-5 h-5 text-neutral-700" />,
      key: "details",
    },
    {
      label: "Orders",
      icon: <ShoppingCartIcon className="h-5 w-5 text-neutral-700" />,
      key: "orders",
    },
    {
      label: "Wishlist",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      key: "wishlist",
    },
    {
      label: "Address",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      key: "address",
    },
    {
      label: "Password",
      icon: <KeyIcon className="h-5 w-5 text-neutral-700" />,
      key: "password",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("guest_cart");

    window.location.href = "/login";
  };

  return (
    <div className="bg-white rounded w-full  px-4 py-3">
      <ul className="space-y-2 flex flex-wrap md:flex-col gap-2 text-sm sm:text-base">
        {navItems.map(({ label, icon, key }) => (
          <li
            key={key}
            onClick={() => setAccount(key)}
            className={`flex items-center space-x-3 rounded px-3 py-2 cursor-pointer transition 
              ${
                Account === key
                  ? "bg-neutral-100 font-semibold text-black"
                  : "hover:bg-neutral-100"
              }
            `}
          >
            {icon}
            <span className="text-gray-700">{label}</span>
          </li>
        ))}

        <li
          onClick={() => setShowConfirmLogout(true)}
          className="bg-red-600 flex items-center gap-2 rounded px-3 py-2.5 cursor-pointer transition hover:bg-red-500"
        >
          <LogOutIcon className="h-5 w-5 text-white" />
          <span className="text-white font-medium">Logout</span>
        </li>
      </ul>

      {showConfirmLogout && (
        <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded p-4 text-sm text-yellow-800">
          <p className="mb-2 font-medium">Are you sure you want to logout?</p>
          <div className="flex gap-2">
            <button
              onClick={handleLogout}
              className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowConfirmLogout(false)}
              className="cursor-pointer border border-neutral-400 px-3 py-1 rounded hover:bg-neutral-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountNavigation;
