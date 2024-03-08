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
import { ProductCategoryType } from "./features/product/product.types.ts";
import { Store } from "./features/store/Store.ts";
import { addProductsToScreen } from "./utils/dom.ts";

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

const cola = new Product({
  title: "Cola",
  price: 1.89,
  category: "Drinks",
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
store.insertProduct(milk);
store.insertProduct(cola);

const products = store.getAllProducts();
console.log("products", products);

// 9. Padaryt apsaugą, kad produktas su tokiu pačiu title negalėtu būt pridedamas į Store; // vietoj pridėjimo į ekraną turi būt atvaizduotas console log su informacine žinute; zr. Store.ts

// 1. Savo Produktų aplikacijai pridėti produkto pridėjimo iš ekrano funkcionalmą;

const title = document.getElementById("title");
const price = document.getElementById("price");
const category = document.getElementById("category");
const addProductButton = document.getElementById(
  "add-product-btn"
) as HTMLButtonElement;

addProductButton.addEventListener("click", () => {
  const product = new Product({
    title: title.value,
    price: Number(price.value),
    category: category.value as ProductCategoryType,
  });

  console.log(product.getProductInfo());

  // 2. Pridėtas produktas iš ekrano turi atsirasti Store klasės products property'je;
  store.insertProduct(product.getProductInfo());

  addProductsToScreen(store.getAllProducts());
});

// 3. Pridėtas produktas turi iškart atsidurt ekrane (Reiks pasinaudoti vienu iš klasės "Store" metudu). // užtikrinkit, kad po produkto pridėjimo ekrane neatsiranda daugiau produktų negu turėtu būt (išclearint wrapperį prieš į jį kažką dedant);
const logProductsButton = document.getElementById(
  "log-products-btn"
) as HTMLButtonElement;

logProductsButton.addEventListener("click", () => {
  const products = store.getAllProducts();
  console.log(products);
});

// 4. Visad pridedant naują produktą ekranas prieš tai turi but ištrinamas nuo senų produktų; ZR DOM.TS
// 5. Paspaudus ant pirkinio turi būt išloginta informacija apie pirkinį. // Pirkinio informacija turi būt atvaizduojama per "Store" klasės metodą; zr dom.ts
// 6. Į ekraną pridėti buttun'ą kurį paspaudus būtu iškviečiama fn getAllProducts bei tie produktai turi būt atvaizduojami consolėj; zr dom.ts
// 7. Sukurti papildomą klasę "Cart". Klasė turi turėti property Products.
// 8. Produktas į Cart turi būt patalpintas kai ant produkto yra paspaudžiama. // tas pats produktas prodžioje gali būt patalpintas daugiau nei vieną kartą;
// 9. Padaryt apsaugą, kad tas pats produktas negalėtu būt patalpintas daugiau nei vieną kartą;
// 10. Puslapio apačioje turi būt atvaizduota galutinė krepšelio kainą;
