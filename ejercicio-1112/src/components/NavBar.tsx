"use client";

import { useCart } from "@/context/CartProvider";
import { ShoppingCart } from "lucide-react";

function NavBar() {
  const { toggleCart, items } = useCart();
  return (
    <div className="w-full fixed bg-black">
      <div className="flex w-full p-4 h-15 justify-end items-center">
        <button onClick={toggleCart} className="relative p-2">
          <ShoppingCart size={30} />
          {items.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
              {items.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
