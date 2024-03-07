// 8. Sukurt "Store" klasę, kuri turi:
// - insertProduct;
// - getAllProducts;
// - getProductById;

import { ProductType } from "../product/product.types";

export type StoreType = {
  name: string;
  products: ProductType[];
};
