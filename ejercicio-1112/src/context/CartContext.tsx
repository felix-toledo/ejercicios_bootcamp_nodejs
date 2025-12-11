"use client";

import { createContext, useContext } from "react";
import { ProductType } from "@/types/productos";
import { ReactNode } from "react";
import { useState } from "react";
interface CartContextType {
  items: ProductType[];
  addItem: (item: ProductType) => void;
  removeItem: (id: number) => void;
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

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  // Control de errores clave: si se usa fuera del Provider
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
