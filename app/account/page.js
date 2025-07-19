"use client";
import AccountNavigation from "./_Components/AccountNavigation";
import { useState } from "react";
import Orders from "./_Components/Orders";
import Wishlist from "./_Components/Wishlist";
import { useUser } from "@/app/_context/UserContext";
import { useWishlist } from "@/app/_context/WishListContext";
import AccountDetails from "./_Components/AccountDetails";
import Address from "./_Components/Address";
import PasswordForm from "./_Components/PasswordForm";

export default function AccoutPage() {
  const [Account, setAccount] = useState("details");
  const { user } = useUser();
  const { wishlist } = useWishlist();

  return (
    <main className="w-[95%] md:w-[80%] mx-auto my-10 flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full md:w-[25%]">
        <AccountNavigation setAccount={setAccount} Account={Account} />
      </div>

      {/* Content */}
      <div className="w-full md:w-[75%] border-t md:border-t-0 md:border-l border-neutral-300 pt-4 md:pt-0 md:pl-7">
        {Account === "details" && <AccountDetails user={user} />}
        {Account === "orders" && <Orders orders={user.Orders} />}
        {Account === "wishlist" && <Wishlist wishlist={wishlist} />}
        {Account === "address" && <Address user={user} />}
        {Account === "password" && <PasswordForm />}
      </div>
    </main>
  );
}
