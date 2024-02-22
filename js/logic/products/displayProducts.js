import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProducts } from "../../api/fetchProducts.js";
import { renderProducts } from "../../ui/products/renderProducts.js";

export async function displayProducts() {
  const container = document.querySelector("#container");
  try {
    const products = await fetchProducts();
    renderProducts(products, container);
  } catch (error) {
    console.error(error);
    displayMessage(container, error.message, "error");
  }
}
