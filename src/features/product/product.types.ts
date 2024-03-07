// 2. Susikurt "ProductType" tipą;
// 3. Product turi turėt automatiškai sugeneruota id, title, price, category;
export type ProductCategoryType =
  | "Milk and milk products"
  | "Eggs and egg products"
  | "Meat and meat products"
  | "Fish"
  | "Oils, fats"
  | "Grains"
  | "Legumes, seeds, nuts"
  | "Vegetables"
  | "Fruits"
  | "Sugar and sugar products"
  | "Drinks";

export type ProductType = {
  id: string;
  title: string;
  price: number;
  category: ProductCategoryType;
};

export type ProductCreateType = Omit<ProductType, "id">;

// 4. Sukurti InsertProductType; zr product.types.ts
export type InsertProductType = {
  id: string;
  title: string;
  price: number;
  category: ProductCategoryType;
};
