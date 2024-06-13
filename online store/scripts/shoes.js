import { searchFilter } from "./searchBarActivate.js";

import { searchBar } from "./searchBarActivate.js";

import {shoes } from "../data/products.js";

import { filterDiv } from "./searchBarActivate.js";

import { appearDisapprear } from "./searchBarActivate.js";

import { addHTML } from "./add-html.js";

const container = document.getElementById("container-js");

const container2 = document.getElementById("container2-js");

const container3 = document.getElementById("container3-js");

  for(let i = 0; i < shoes.length; i++){
  for(let j = 0; j < shoes[i].length; j++){
    let shoe = shoes[i][j];
    if(i === 0){
      addHTML(container,shoe);
    }
    else if (i === 1){
      addHTML(container2,shoe);
    }
    else if (i === 2){
      addHTML(container3,shoe);
    }
  }
  }

searchBar.addEventListener('keyup',()=>{
  searchFilter(shoes);
  document.addEventListener('click',(event)=>{
    appearDisapprear(filterDiv,event);
  });
});