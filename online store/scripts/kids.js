import { searchFilter } from "./searchBarActivate.js";

import { searchBar } from "./searchBarActivate.js";

import { kids } from "../data/products.js";

import { addHTML } from "./add-html.js";

import { filterDiv } from "./searchBarActivate.js";

import { appearDisapprear } from "./searchBarActivate.js";

const container = document.getElementById("container-js");

const container2 = document.getElementById("container2-js");

const container3 = document.getElementById("container3-js");

  for(let i = 0; i < kids.length; i++){
  for(let j = 0; j < kids[i].length; j++){
    let product = kids[i][j];
    if(i === 0){
      addHTML(container,product);
    }
    else if (i === 1){
      addHTML(container2,product);
    }
    else if (i === 2){
      addHTML(container3,product);
    }
}
}

searchBar.addEventListener('keyup',()=>{
  searchFilter(kids);
  document.addEventListener('click',(event)=>{
    appearDisapprear(filterDiv,event);
  });
});