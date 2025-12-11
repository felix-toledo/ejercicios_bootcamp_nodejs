"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductType } from "@/types/productos";
import ProductCard from "@/components/ProductComponent";

function Loader() {
  return <div>Cargando...</div>;
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [err, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Error al cargar productos");
        const data = await response.json();
        setProducts(data);
        console.log("data", data);
      } catch (err) {
        console.log(err);
        // setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      {isLoading ? <Loader /> : <ProductCard {...products[0]} />}
    </div>
  );
}
