// 0. Kuriant projetą failus išdėstyti strukūrizuotai;
// 1. Sukurt "Product" klasę. zr. Product.ts
// 2. Susikurt "ProductType" tipą; zr. product.types.ts
// 3. Product turi turėt automatiškai sugeneruota id, title, price, category; zr. product.types.ts, Product.ts

// 4. Sukurti InsertProductType; zr product.types.ts
// 5. Produktui pridėti metodą kuris sugražina visus produkto duomenis; zr Product.ts
// 6. Product turi turė kainos setter'į ir getterį; zr Product.ts
// 7. Product turi tuėt getProduct metodą, kuri gražina ProductType objektą; zr. Product.ts
// 8. Sukurt "Store" klasę, kuri turi:
// - insertProduct;
// - getAllProducts;
// - getProductById; zr. Store.ts
// 7. "Store" turi priimti tik ProductType objektus;
// 8. Prasitestuot veikimą;
// 9. CAO TS 12 VIDEO;
import { Product } from "./features/product/Product.ts";
import { Store } from "./features/store/Store.ts";

const store = new Store("Maxima");

const milk = new Product({
  title: "Milk",
  price: 2.85,
  category: "Milk and milk products",
});

const bread = new Product({
  title: "Bread",
  price: 1.5,
  category: "Grains",
});

const eggs = new Product({
  title: "Eggs",
  price: 1.75,
  category: "Eggs and egg products",
});

const freshChicken = new Product({
  title: "Chicken",
  price: 3,
  category: "Meat and meat products",
});

const fish = new Product({
  title: "Salmon",
  price: 15.99,
  category: "Fish",
});

const banana = new Product({
  title: "Banana",
  price: 1.99,
  category: "Fruits",
});

const potatoes = new Product({
  title: "Potatoes",
  price: 0.99,
  category: "Vegetables",
});

console.log(store);
console.log(milk.getProductInfo());
console.log(potatoes.getProductInfo());
console.log(freshChicken.getPrice());
fish.setPrice(10.99);
console.log(fish.getProductInfo());
console.log(eggs.setPrice(1.25));

store.insertProduct(milk);
store.insertProduct(bread);
store.insertProduct(eggs);
store.insertProduct(freshChicken);
store.insertProduct(fish);
store.insertProduct(banana);
store.insertProduct(potatoes);
store.getAllProducts();

const products = store.getAllProducts();
console.log("products", products);
