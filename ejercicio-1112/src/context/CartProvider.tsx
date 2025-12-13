"use client";

import { createContext, useContext } from "react";
import { ProductType } from "@/types/productos";
import { ReactNode } from "react";
import { useState } from "react";
interface CartContextType {
  items: ProductType[];
  addItem: (item: ProductType) => void;
  removeItem: (id: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ProductType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item: ProductType) => {
    setItems((prevItems) => [...prevItems, item]);
    console.log(`Se agrego al carrito ${item.title}`);
    console.log("Estado del carrito:", [...items, item]);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, isCartOpen, toggleCart }}
    >
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
