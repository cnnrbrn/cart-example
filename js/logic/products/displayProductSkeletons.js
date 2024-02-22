import productSkeleton from "../../ui/products/productSkeleton.js";

export function displayProductSkeletons(container) {
  document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 12; i++) {
      container.innerHTML += productSkeleton();
    }
  });
}
