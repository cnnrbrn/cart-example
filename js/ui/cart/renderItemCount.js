import * as storage from "../../helpers/storage/index.js";

export function renderItemCount() {
  const itemCount = storage.getItemCount();
  const container = document.querySelector("#cart-icon");

  const itemCountContainer = document.querySelector("#item-count");

  if (itemCount === 0) {
    if (itemCountContainer) {
      itemCountContainer.remove();
    }
    return;
  }

  if (itemCountContainer) {
    itemCountContainer.innerText = itemCount;
  } else {
    container.innerHTML += `<span id="item-count"
    class="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-2 -right-2"
    >${itemCount}</span>`;
  }
}
