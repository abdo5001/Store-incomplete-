import { accessories } from "../data/products.js";

import { addHTMLOtherP } from "./add-html-other-products.js";

const otherAccessories = document.getElementById("other-accessories-js");

const name = document.getElementById("name-js");

for(let i = 0; i < 4; i++){
  for(let j = 0; j < 4; j++){
    let accessorie = accessories[i][j];
    addHTMLOtherP(accessorie,name,otherAccessories);
  }
}