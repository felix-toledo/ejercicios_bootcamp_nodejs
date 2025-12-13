"use client";
import { useCart } from "@/context/CartProvider";
import { CircleX } from "lucide-react";
import Image from "next/image";

function CartModal() {
  const { isCartOpen, toggleCart, items, removeItem } = useCart();

  if (!isCartOpen) return null;

  const total = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center p-4">
      <div className="bg-white w-1/2 h-3/4 shadow-xl flex flex-col p-6 rounded-lg text-gray-700">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold">Tu Carrito ({items.length})</h2>
          <button onClick={toggleCart} className="hover:text-red-500">
            <CircleX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <p className="text-center mt-10">El carrito está vacío</p>
          ) : (
            items.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex gap-4 items-center border-b pb-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={10}
                  height={10}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
