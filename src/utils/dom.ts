import { ProductType } from "../features/product/product.types.ts";
import { Product } from "../features/product/Product.ts";
import { Store } from "../features/store/Store.ts";

const productsWrapper = document.getElementById(
  "products-wrapper"
) as HTMLDivElement;

export const addProductsToScreen = (products: ProductType[]) => {
  // 4. Visad pridedant naują produktą ekranas prieš tai turi but ištrinamas nuo senų produktų;
  productsWrapper.innerHTML = "";
  products.forEach((product) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("product-wrapper");
    const title = document.createElement("h1");
    const price = document.createElement("h2");
    const category = document.createElement("h2");

    title.textContent = `Product: ${product.title}`;
    price.textContent = `Price: ${product.price.toString()}`;
    category.textContent = `Category: ${product.category}`;

    wrapper.append(title, price, category);
    productsWrapper.append(wrapper);

    // 5. Paspaudus ant pirkinio turi būt išloginta informacija apie pirkinį. // Pirkinio informacija turi būt atvaizduojama per "Store" klasės metodą;
    wrapper.addEventListener("click", () => {
      const productInfo = new Product(product);
      console.log(productInfo.getProductInfo());
    });
  });
};
// 6. Į ekraną pridėti buttun'ą kurį paspaudus būtu iškviečiama fn getAllProducts bei tie produktai turi būt atvaizduojami consolėj;
const showAllProducts = document.getElementById(
  "show-all-products"
) as HTMLButtonElement;

showAllProducts.addEventListener("click", () => {
  const allProducts = Store.getAllProducts();
  console.log(allProducts);
});
