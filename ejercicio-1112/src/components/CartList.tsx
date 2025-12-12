"use client";

import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types/productos";
import Image from "next/image";
import { XCircle } from "lucide-react";

function CartItemRow({ item }: { item: ProductType }) {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <Image
          src={item.image}
          alt={item.title}
          width={50}
          height={50}
          className="object-contain"
        />
        <span className="text-sm font-semibold text-gray-100">
          {item.title}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-400">x 1</span>
        <span className="text-md font-bold text-green-400">
          {item.price.toFixed(2)}
        </span>

        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 transition"
          title="Eliminar producto"
        >
          <XCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function CartList() {
  const { items } = useCart();

  const cartTotal = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="p-6 bg-gray-900 rounded-lg shadow-xl text-center">
        <p className="text-lg text-gray-400">Tu carrito esta vacío 😔</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-2xl w-full max-w-xl mx-auto border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-white">
        Tu carrito de Compras ({items.length} productos)
      </h2>

      <div className="max-h-96 overflow-y-auto">
        {items.map((item, index) => (
          <CartItemRow key={`${item.id}-${index}`} item={item} />
        ))}
      </div>

      <div className="mt-6 pt-4 border-t-2 border-blue-500 flex justify-between items-center">
        <span className="text-xl font-bold text-white">Total: </span>
        <span className="text-2xl font-extrabold text-green-400">
          ${cartTotal.toFixed(2)}
        </span>
      </div>
      <button className="mt-6 w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
        Finalizar Compra
      </button>
    </div>
  );
}
