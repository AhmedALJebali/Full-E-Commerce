"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@/app/_context/UserContext";

// const saveToWishlistOnServer = async (userId, item) => {
//   return []; // return updated wishlist
// };

// const removeFromWishlistOnServer = async (userId, item) => {
//   return []; // return updated wishlist
// };

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    console.log(user);
    if (user) {
      setWishlist(user.Wishlist);
      console.log(user);
    }
  }, [user]);

  //   const addToWishlist = (item) => {
  //     const wishlistItem = { ...item, quantity: 1, Date: "27 May 2023" };
  //     saveToWishlistOnServer(userId, wishlistItem).then((updated) =>
  //       setWishlist(updated)
  //     );
  //   };

  //   const removeFromWishlist = (item) => {
  //     removeFromWishlistOnServer(userId, item).then((updated) =>
  //       setWishlist(updated)
  //     );
  //   };

  const isItemInWishlist = (item) => {
    return wishlist.some(
      (wishItem) =>
        wishItem.product === item.product &&
        wishItem.options?.color === item.options?.color &&
        wishItem.options?.size === item.options?.size
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, isItemInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
