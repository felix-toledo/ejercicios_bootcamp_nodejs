"use client";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartWidget from "../components/CartWidget";
import CartModal from "@/components/CartModal";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <html lang="en">
      <body>
        {/* Simulación de navbar */}
        <CartProvider>
          <header className="bg-gray-800 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Mi Shopping</h1>
            <div onClick={openCart} className="cursor-pointer">
              <CartWidget />
            </div>
          </header>
          {children}
          <CartModal isOpen={isCartOpen} onClose={closeCart}/>
        </CartProvider>
      </body>
    </html>
  );
}
