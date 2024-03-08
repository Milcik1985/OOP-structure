// 1. Sukurt "Product" klasę.
import {
  ProductType,
  ProductCategoryType,
  ProductCreateType,
} from "./product.types.ts";

import { generateId } from "../../utils/Id.ts";

export class Product {
  id: string;
  title: string;
  price: number;
  category: ProductCategoryType;

  constructor({ title, price, category }: ProductCreateType) {
    this.title = title;
    this.price = price;
    this.category = category;
    this.id = this.generateId();
  }
  // 3. Product turi turėt automatiškai sugeneruota id, title, price, category;

  private generateId() {
    return generateId();
  }

  // 5. Produktui pridėti metodą kuris sugražina visus produkto duomenis;
  getProductInfo(): ProductType {
    return {
      title: this.title,
      price: this.price,
      category: this.category,
      id: this.id,
    };
  }

  // 6. Product turi turė kainos setter'į ir getterį;
  getPrice() {
    return this.price;
  }

  setPrice(price: ProductType["price"]) {
    this.price = price;
  }

  // 7. Product turi tuėt getProduct metodą, kuri gražina ProductType objektą;
}
