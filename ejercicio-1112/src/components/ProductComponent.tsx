// components/ProductComponent.tsx

import Image from "next/image";
import { ProductType } from "@/types/productos";
import { ShoppingCart, XCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: ProductType }) {
  const { items, addItem, removeItem } = useCart();
  const isInCart = items.some((item) => item.id === product.id);

  const handleCartAction = () => {
    if (isInCart) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-xl flex flex-col h-full border border-gray-700 hover:border-blue-500 transition duration-300">
      <div className="h-48 flex items-center justify-center mb-4">
        <Image
          src={product.image}
          width={150}
          height={150}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      <h2 className="text-lg font-semibold mb-2 truncate" title={product.title}>
        {product.title}
      </h2>

      <p className="text-sm text-gray-400 mb-4 overflow-hidden flex-grow">
        {product.description}
      </p>

      <div className="flex justify-between items-center mb-4 mt-auto">
        <p className="text-xl font-bold text-green-400">
          $ {product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-400">
          ⭐ {product.rating?.rate.toFixed(1)} ({product.rating?.count} reviews)
        </p>
      </div>

      <button
        onClick={handleCartAction}
        className={`w-full flex items-center justify-center p-3 font-semibold rounded-lg transition duration-300 shadow-md cursor-pointer ${
          isInCart
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {isInCart ? (
          <>
            <XCircle className="w-5 h-5 mr-2" />
            Quitar del carrito
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Agregar a Carrito
          </>
        )}
      </button>
    </div>
  );
}
