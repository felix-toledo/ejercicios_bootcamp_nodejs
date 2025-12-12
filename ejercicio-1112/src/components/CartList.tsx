"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types/productos";
import Image from "next/image";
import { XCircle, RotateCw, CheckCircle } from "lucide-react";

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
  const { items, clearCart } = useCart();

  const [purchaseStatus, setPurchaseStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const cartTotal = items.reduce((sum, item) => sum + item.price, 0);

  const handleFinalizePurchase = async () => {
    if (purchaseStatus !== "idle") return;

    setPurchaseStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      clearCart();
      setPurchaseStatus("success");

      setTimeout(() => {
        setPurchaseStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Falló la compra", error);
      setPurchaseStatus("idle");
    }
  };

  if (items.length === 0 && purchaseStatus !== "success") {
    return (
      <div className="text-center">
        <p className="text-lg text-gray-500">Tu carrito esta vacío 😔</p>
      </div>
    );
  }

  if (purchaseStatus === "success") {
    return (
      <div className="text-center flex flex-col items-center p-6">
        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
        <p className="text-xl font-bold text-green-600">¡Compra realizada!</p>
        <p className="text-sm text-green-600 mt-2">Gracias por tu compra</p>
      </div>
    );
  }

  return (
    <div className="w-full">
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
      <button
        onClick={handleFinalizePurchase}
        disabled={purchaseStatus === "loading"}
        className={`mt-6 w-full p-3 font-bold rounded-lg transition
        ${
          purchaseStatus === "loading"
            ? "bg-blue-400 cursor-not-allowed flex items-center justify-center"
            : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        {purchaseStatus === "loading" ? (
          <>
            <RotateCw className="w-5 h-5 mr-2 animate-spin" />
          </>
        ) : (
          "Finalizar Compra"
        )}
      </button>
    </div>
  );
}
