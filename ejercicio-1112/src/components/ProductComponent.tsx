import Image from "next/image";
import { ProductType } from "@/types/productos";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard(product: ProductType) {
  const { addItem, removeItem } = useCart();

  return (
    <div className="p-4 bg-amber-50 rounded-2xl text-amber-950">
      <h1>{[product.title]}</h1>
      <Image src={product.image} width={100} height={100} alt={product.title} />
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <p>
        {product.rating?.rate} ({product.rating?.count} reviews)
      </p>
      <button
        onClick={() => addItem(product)}
        className=" flex items-center flex-row p-5 bg-amber-950 text-white rounded hover:scale-105 hover:cursor-pointer hover:shadow-amber-950/50 hover:shadow-2xl"
      >
        {" "}
        <ShoppingCart /> Agregar a Carrito
      </button>
    </div>
  );
}
