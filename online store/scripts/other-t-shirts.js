import { tShirts } from "../data/products.js";

import { addHTMLOtherP } from "./add-html-other-products.js";

const name = document.getElementById("name-js");

const othertShirts = document.getElementById("you-might-also-like-js");

for(let i = 0; i < 4; i++){
  for(let j = 0; j < 4; j++){
    let tShirt = tShirts[i][j];
    addHTMLOtherP(tShirt,name,othertShirts);
  }
}