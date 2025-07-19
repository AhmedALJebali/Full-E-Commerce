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

// Product {
//   id: number
//   title: string
//   image: string
//   price: number
//   colors: string[]         // ex: [{color:"#000000",image: "/cover.svg"}]
//   sizes: string[]          // ex: ["XS", "S", "M", "L", "XL"]
//   reviews: Review[]
// }

// Reviews [{
//   id: number
//   user: User
//   product: Product
//   rating: number
//   comment: string
//   createdAt: Date
// }
// ]

// CartItem {
//   id: number
//   user: User
//   product: Product
//   title: string            // optional redundancy
//   image: string            // optional redundancy
//   price: number
//   quantity: number
//   options: {
//     color: string          // HEX code
//     size: string           // enum
//   }
// }

// Order {
//   id: number
//   user: User
//   items: CartItem[]
//   totalAmount: number
//   status: "pending" | "shipped" | "delivered"
//   createdAt: Date
// }

// User {
//   id: 1,
//   username: "john_doe",         // Default Strapi field
//   email: "john@example.com",    // Default Strapi field
//   provider: "local",            // Auth provider
//   confirmed: true,              // Email confirmed
//   blocked: false,
//   createdAt: "2025-07-17T10:00:00Z",
//   updatedAt: "2025-07-17T10:00:00Z",
//   Full_Name: "John Doe",
//   Phone: "+1-555-555-5555",
//   Gender: "Male",               // Enum: Male / Female / Other
//   ProfilePicture: "https://via.placeholder.com/150",
//   Street_Address: "123 Main St",
//   City: "New York",
//   Country: "USA",
//   State: "NY",
//   ZipCode: "10001",
//   Country: "USA",
//   Wishlist: [WishlistItem],      // One-to-Many: User → WishlistItem[]
//   Cart: [CartItem],              // One-to-Many: User → CartItem[]
//   Orders: [Order]                // One-to-Many: User → Order[]
// }
