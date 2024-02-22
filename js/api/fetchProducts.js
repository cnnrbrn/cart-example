import { url } from "../constants.js";

export async function fetchProducts() {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message || "Failed to fetch products");
  }

  return data;
}
