"use client";
import db from "../db/db.json";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";

export interface ProductoInterface {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export default function Home() {
  console.log(db);

  const [products, setProducts] = useState<ProductoInterface[]>(db.products);
  const [carrito, setCarritos] = useState<ProductoInterface[]>([]);

  function onClickProductsButton(product: ProductoInterface) {
    console.log(carrito);

    setCarritos([...carrito, product]);

    setProducts(
      products.filter(
        (productDeProductsXD) => productDeProductsXD.id !== product.id
      )
    );
  }

  function onClickDeleteCarrito(product: ProductoInterface) {
    const productABorrar = carrito.filter(
      (productDeCarrito) => productDeCarrito.id !== product.id
    );

    setCarritos(productABorrar);
    setProducts([...products, product].sort((a, b) => a.id - b.id));
    // setProducts([...products, product]);
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
"
    >
      <div
        id="productos-container"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
"
      >
        PRODUCTOS
        {products.map((product) => {
          return (
            <ProductCard
              label="Agregar"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700 active:bg-amber-800"
              key={product.id}
              product={product}
              onClick={() => onClickProductsButton(product)}
            />
          );
        })}
      </div>
      <div id="carrito-container" className="bg-amber-700">
        CARRITO
        {carrito.map((productoDeCarrito) => {
          return (
            <ProductCard
              label="Eliminar"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700 active:bg-amber-800"
              key={productoDeCarrito.id}
              product={productoDeCarrito}
              onClick={() => onClickDeleteCarrito(productoDeCarrito)}
            />
          );
        })}
      </div>
    </div>
  );
}
