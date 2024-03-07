// 1. Sukurt "Product" klasę.
import {
  ProductType,
  ProductCategoryType,
  ProductCreateType,
} from "./product.types.ts";

import { generateId } from "../../utils/Id.ts";

class Product implements ProductType {
  id: string;
  title: string;
  price: number;
  category: ProductCategoryType;

  constructor({ title, price, category }: ProductCreateType) {
    this.title = title;
    this.price = price;
    this.category = category;
    this.id = generateId();
  }
  // 3. Product turi turėt automatiškai sugeneruota id, title, price, category;

  private generateId() {
    return generateId();
  }
}
