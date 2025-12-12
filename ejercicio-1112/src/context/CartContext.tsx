"use client";

import { createContext, useContext } from "react";
import { ProductType } from "@/types/productos";
import { ReactNode } from "react";
import { useState } from "react";
interface CartContextType {
  items: ProductType[];
  addItem: (item: ProductType) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ProductType[]>([]);

  const addItem = (item: ProductType) => {
    console.log(item);
    setItems((prevItems) => [...prevItems, item]);
    console.log(items);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
