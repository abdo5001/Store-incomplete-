import { shoes } from "../data/products.js";

import { addHTMLOtherP } from "./add-html-other-products.js";

const name = document.getElementById("name-js");

const otherShoes = document.getElementById("other-shoes-js");

for(let i = 0; i < 4; i++){
  for(let j = 0; j < 4; j++){
    let shoe = shoes[i][j];
    addHTMLOtherP(shoe,name,otherShoes);
  }
}