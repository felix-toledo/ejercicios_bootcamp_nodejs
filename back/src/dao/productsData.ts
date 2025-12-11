import { ProductChallenge } from "../models/ProductChallenge.js";
import datos from "../../datos.json" with { type: "json" };
import { error } from "console";

const productos: Map<number, ProductChallenge> = new Map();

datos.items.forEach((prod)=> {
  productos.set(prod.id, prod);
});


export const getAllProductsDAO = (): Map<number, ProductChallenge> => {
  return productos;
}

export const getProductbyIdDAO = (id: number): ProductChallenge | null => {
  if (!productos.has(id)) {
    throw new Error("Product not found");
  }
  return productos.get(id) || null;
}

export const addProductDAO = (newProduct: ProductChallenge): void => {
  productos.set(newProduct.id, newProduct);
}

export const deleteProductDAO = (id: number): void => {
  if (!productos.has(id)) {
    throw new Error("Product not found");
  }
  productos.delete(id);
}

export const updateProductDAO = (id: number, updatedProduct: Partial<ProductChallenge>): void => {
  if (!productos.has(id)) {
    throw new Error("Product not found");
  }

  const existingProduct = productos.get(id);
  if (existingProduct) {
    const updated = { ...existingProduct, ...updatedProduct };
    productos.set(id, updated);
  }
}