"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  updateCartItemInLocalStorage,
  deleteCartItemFromLocalStorage,
  clearCartFromLocalStorage,
} from "@/_utils/CartGuestMode";

// 🧪 Mock API functions (to be replaced with real calls)
const fetchCartFromServer = async (userId) => {
  return [];
};
const saveCartToServer = async (userId, item) => {
  return [];
};
const updateCartOnServer = async (userId, item) => {
  return [];
};
const deleteCartFromServer = async (userId, item) => {
  return [];
};

const CartContext = createContext();

export const CartProvider = ({
  children,
  isLoggedIn = false,
  userId = null,
}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCartFromServer(userId).then((serverCart) => setCart(serverCart));
    } else {
      const localCart = getCartFromLocalStorage();
      setCart(localCart);
    }
  }, [isLoggedIn, userId]);

  const handleAddToCart = (item) => {
    if (isLoggedIn) {
      saveCartToServer(userId, item).then((updated) => setCart(updated));
    } else {
      saveCartToLocalStorage(item);
      setCart(getCartFromLocalStorage());
    }
  };

  const handleUpdateCart = (item) => {
    if (isLoggedIn) {
      updateCartOnServer(userId, item).then((updated) => setCart(updated));
    } else {
      updateCartItemInLocalStorage(item);
      setCart(getCartFromLocalStorage());
    }
  };

  const handleDeleteFromCart = (item) => {
    if (isLoggedIn) {
      deleteCartFromServer(userId, item).then((updated) => setCart(updated));
    } else {
      deleteCartItemFromLocalStorage(item);
      setCart(getCartFromLocalStorage());
    }
  };

  const handleClearCart = () => {
    if (isLoggedIn) {
      setCart([]);
    } else {
      clearCartFromLocalStorage();
      setCart([]);
    }
  };
  const isItemInCart = (item) => {
    return cart.some(
      (cartItem) =>
        cartItem.product === item.product &&
        cartItem.options?.color === item.options?.color &&
        cartItem.options?.size === item.options?.size
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleUpdateCart,
        handleDeleteFromCart,
        handleClearCart,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// const item = {
//   product: 123,
//   options: {
//     color: "#000000",
//     size: "XS",
//   },
//   quantity: 2,
//     title: "Ultimate Customizable Hoodie",
//     image: "/cover.svg",
//     price: 80.0,
// };

// const cart = [
//   {
//     id: 1,
//     user: "user1",
//     product: 100,
//     title: "Ultimate Customizable Hoodie",
//     image: "/cover.svg",
//     price: 80.0,
//     quantity: 2,
//     options: {
//       color: "#000000",
//       size: "XS",
//     },
//   },
// ];
