"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function CartWidget() {
  const { items } = useCart();

  const totalItemsInCart = items.length;

  return (
    <div className="relative p-2 cursor-pointer">
      <ShoppingCart className="text-white w-6 h-6"/>
      {totalItemsInCart > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {totalItemsInCart}
        </span>
      )}
    </div>
  )
}
