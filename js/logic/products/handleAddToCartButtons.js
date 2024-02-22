import * as storage from "../../helpers/storage/index.js";
import { renderItemCount } from "../../ui/cart/renderItemCount.js";

export function handleAddToCartButtons() {
  const buttons = document.querySelectorAll('[data-action="add-to-cart"]');

  buttons.forEach((button) =>
    button.addEventListener("click", handleCartClick)
  );
}

function handleCartClick(event) {
  const { id, title, price, image } = event.target.dataset;
  const item = { id, title, price, image };

  storage.addItemToCart(item);
  renderItemCount();

  // const cart = storage.getCart();
  // cart.push(item);
  // storage.saveCart(cart);
}
