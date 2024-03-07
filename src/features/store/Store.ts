// 8. Sukurt "Store" klasę, kuri turi:
// - insertProduct;
// - getAllProducts;
// - getProductById;

import { ProductType, InsertProductType } from "../product/product.types.ts";
import { StoreType } from "./store.type.ts";

export class Store implements StoreType {
  name: string;
  products: ProductType[];

  constructor(name: string) {
    this.name = name;
    this.products = [];
  }

  insertProduct(product: InsertProductType) {
    this.products.push(product);
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.filter((product) => product.id === id);
  }
}
