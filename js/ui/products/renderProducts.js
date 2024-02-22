export function renderProducts(products, container) {
  container.innerHTML = "";
  const productHtml = products.map((product) => createProduct(product));
  container.append(...productHtml);
}

function createProduct(product) {
  const { id, title, price, image, description } = product;

  const productContainer = document.createElement("div");
  productContainer.classList.add(
    "product",
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "p-4"
  );

  const imageElement = document.createElement("div");
  imageElement.classList.add("product-images");
  imageElement.style.backgroundImage = `url(${image})`;
  imageElement.style.backgroundSize = "contain";
  imageElement.style.backgroundPosition = "center";
  imageElement.style.backgroundRepeat = "no-repeat";
  imageElement.style.height = "200px";

  const titleElement = document.createElement("h4");
  titleElement.classList.add("text-xl", "font-semibold", "mb-2");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("text-gray-600");
  descriptionElement.textContent = description;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add(
    "add-cta",
    "bg-blue-500",
    "text-white",
    "py-2",
    "px-4",
    "rounded",
    "mt-4"
  );
  addToCartButton.dataset.id = id;
  addToCartButton.dataset.title = title;
  addToCartButton.dataset.price = price;
  addToCartButton.dataset.image = image;
  addToCartButton.dataset.action = "add-to-cart";
  addToCartButton.textContent = "Add to cart";

  productContainer.appendChild(imageElement);
  productContainer.appendChild(titleElement);
  productContainer.appendChild(descriptionElement);
  productContainer.appendChild(addToCartButton);

  return productContainer;
}
