import { Product, RealProduct } from "../interfaces/Product.js";

export class InventoryManager {
  private products: Map<number, Product>;
  constructor() {
    this.products = new Map<number, Product>();
  }

  addProduct(product: RealProduct): void {
    let newId = this.products.size + 1;
    while (this.products.has(newId)) {
      newId = newId + 1;
    }
    this.products.set(newId, { id: newId, ...product });
  }

  searchProductById(id: number): Product | null {
    return this.products.get(id) || null;
  }

  getAllProducts(): Product[] {
    return Array.from(this.products.values());
  }
}
