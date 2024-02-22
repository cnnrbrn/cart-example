import * as productLogic from "./logic/products/index.js";
import { renderItemCount } from "./ui/cart/renderItemCount.js";

productLogic.displayProductSkeletons(document.querySelector("#container"));
productLogic.displayProducts();
renderItemCount();
