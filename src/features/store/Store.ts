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

  // 9. Padaryt apsaugą, kad produktas su tokiu pačiu title negalėtu būt pridedamas į Store; // vietoj pridėjimo į ekraną turi būt atvaizduotas console log su informacine žinute;
  insertProduct(product: InsertProductType) {
    const doesProductExist = this.products.some((p) => product.id === p.id);

    if (doesProductExist) {
      console.log("Product already exists");
    } else {
      console.log("Product was added");
    }
    this.products.push(product);
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.filter((product) => product.id === id);
  }
}
