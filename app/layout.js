import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ProductsProvider } from "./_context/ProductsContext";
import { CartProvider } from "./_context/CartContext";
import { UserProvider } from "./_context/UserContext";
import { WishlistProvider } from "./_context/WishListContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Store",
  description: "Shop fashion, electronics, and more.",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ecommerce Store",
    description: "Shop fashion, electronics, and more.",
    url: "https://yourdomain.com",
    siteName: "Ecommerce",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <ProductsProvider>
          <UserProvider>
            <CartProvider>
              <WishlistProvider>
                <Header />
                {children}
              </WishlistProvider>
            </CartProvider>
          </UserProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
