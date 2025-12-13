"use client";

import Image from "next/image";
import { ProductType } from "@/types/productos";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartProvider";

export default function ProductCard({ product }: { product: ProductType }) {
  const { addItem } = useCart();

  return (
    <div
      key={product.id}
      className="border p-4 rounded-md shadow hover:shadow-lg transition"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="h-40 w-full object-contain mb-2"
      />
      <h3 className="font-bold truncate">{product.title}</h3>
      <p className="truncate">{product.description}</p>
      <p className="text-green-600 font-bold">
        {product.price.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => addItem(product)}
          className="flex items-center flex-row p-5 bg-amber-950 text-white rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-amber-950/50 hover:shadow-2xl"
        >
          {" "}
          <ShoppingCart /> Agregar a Carrito
        </button>
      </div>
    </div>
  );
}
