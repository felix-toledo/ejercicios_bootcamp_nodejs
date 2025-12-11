"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductType } from "@/types/productos";

const producto: ProductType = {
  id: 1,
  title: "Play 5",
  price: 499,
  description: "la famosa pley 5",
  category: "consola",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  rating: {
    rate: 4.5,
    count: 120,
  },
};

function ProductCard(product: ProductType) {
  return (
    <div className="p-4 ">
      <h1>{[product.title]}</h1>
      <Image src={product.image} width={100} height={100} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
}

function Loader() {
  return <div>Cargando...</div>;
}

export default function Home() {
  function fetchProducts() {}

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
        setError(err.message);
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
