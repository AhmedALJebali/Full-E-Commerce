"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const user = {
    Full_Name: "John Doe",
    Email: "johndoe@example.com",
    Phone: "555-555-5555",
    Gender: "Male",
    Addresses: [
      {
        Street_Address: "123 Main St",
        City: "New York",
        State: "New York",
        ZipCode: "10001",
        Country: "USA",
        isDefault: true,
      },  {
        Street_Address: "123 Main St",
        City: "New York",
        State: "New York",
        ZipCode: "10001",
        Country: "USA",
        isDefault: false,
      },
    ],
    ProfilePicture: "https://via.placeholder.com/150",
    PaymentMethods: [
      {
        name: "Visa",
        last4: "3456",
        expiryMonth: "08",
        expiryYear: "2026",
        type: "Credit",
        token: "tok_abc123xyz",
      },
      {
        name: "PayPal",
        email: "john.paypal@example.com",
      },
    ],
    Reviews: [
      {
        productId: "prod_abc123",
        rating: 5,
        title: "Great product!",
        content: "I love this product. It works perfectly.",
      },
      {
        productId: "prod_def456",
        rating: 4,
        title: "Good product",
        content: "This product is okay. It works most of the time.",
      },
    ],
    Cart: [
      {
        id: 1,
        user: "user1",
        product: 100,
        title: "Ultimate Customizable Hoodie",
        image: "/cover.svg",
        price: 80.0,
        quantity: 2,
        options: {
          color: "#000000",
          size: "XS",
        },
      },
    ],
    Wishlist: [
      {
        quantity: 1,
        id: 1,
        user: "user1",
        product: 100,
        title: "Ultimate Customizable Hoodie",
        image: "/cover.svg",
        price: 80.0,
        options: {
          color: "#000000",
          size: "XS",
        },
        Date: "27 May 2023",
      },
    ],
    Orders: [
      {
        id: 1,
        Puchare: 200,
        Date: "27 May 2023",
        Status: "Pending",
        Email: "johndoe@example.com",
        Street_Address: "123 Main St",
        Phone: "555-555-5555",
        State: "New York",
        ZipCode: "10001",
        Country: "USA",
        City: "New York",
        PaymentMethod: "Cash On Delivery",
        Cart: [
          {
            id: 1,
            user: "user1",
            product: 100,
            title: "Ultimate Customizable Hoodie",
            image: "/cover.svg",
            price: 80.0,
            options: {
              color: "#000000",
              size: "XS",
            },
          },
        ],
      },
      {
        id: 2,
        Puchare: 200,
        Date: "27 May 2023",
        Status: "Pending",
        Email: "johndoe@example.com",
        Street_Address: "123 Main St",
        Phone: "555-555-5555",
        State: "New York",
        ZipCode: "10001",
        Country: "USA",
        City: "New York",
        PaymentMethod: "Cash On Delivery",
        Cart: [
          {
            id: 1,
            user: "user1",
            product: 100,
            title: "Ultimate Customizable Hoodie",
            image: "/cover.svg",
            price: 80.0,
            options: {
              color: "#000000",
              size: "XS",
            },
          },
        ],
      },
    ],
  };
  return (
    <UserContext.Provider value={{ user, isLoggedIn, userId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
