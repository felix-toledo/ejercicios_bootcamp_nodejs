"use client";

import { ProductoInterface } from "@/app/page";
import { Dispatch, SetStateAction } from "react";
import { ProductCard } from "./ProductCard";

interface Props {
  products: ProductoInterface[];
  setProducts: Dispatch<SetStateAction<ProductoInterface[]>>;
  isDeleting: boolean;
}

interface ButtonProps {
  products: ProductoInterface[];
  product: ProductoInterface;
  setProducts: Dispatch<SetStateAction<ProductoInterface[]>>;
  isDeleting: boolean;
}

function onClickButton(props: ButtonProps) {
  if (props.isDeleting) {
    const productABorrar = props.products.filter(
      (productABorrar) => productABorrar.id !== props.product.id
    );

    props.setProducts(productABorrar);
    // props.setProducts([...products, product]);
  }
}

export function ProductList(props: Props) {
  return (
    <div
      id="productos-container"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
"
    >
      PRODUCTOS
      {props.products.map((product) => {
        return (
          <ProductCard
            label="Agregar"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-700 active:bg-amber-800"
            key={product.id}
            product={product}
            onClick={() => onClickButton({ product, products })}
          />
        );
      })}
    </div>
  );
}
