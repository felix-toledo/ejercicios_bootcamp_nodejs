"use client";

import { useEffect, useState } from "react";
import { ProductType } from "@/types/productos";
import ProductCard from "@/components/ProductComponent";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-20 h-20 border-4 border-t-blue-400 rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Error al cargar productos");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pt-20 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
