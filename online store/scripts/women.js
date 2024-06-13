import { searchBar } from "./searchBarActivate.js";

import { searchFilter } from "./searchBarActivate.js";

import { women } from "../data/products.js";

import { addHTML } from "./add-html.js";

import { filterDiv } from "./searchBarActivate.js";

import { appearDisapprear } from "./searchBarActivate.js";

const container = document.getElementById("container-js");

const container2 = document.getElementById("container2-js");

const container3 = document.getElementById("container3-js");

  for(let i = 0; i < women.length; i++){
  for(let j = 0; j < women[i].length; j++){
    let product = women[i][j];
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
  searchFilter(women);
  document.addEventListener('click',(event)=>{
    appearDisapprear(filterDiv,event);
  });
});