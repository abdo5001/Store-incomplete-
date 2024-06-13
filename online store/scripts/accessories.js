import { searchFilter } from "./searchBarActivate.js";

import { searchBar } from "./searchBarActivate.js";

import { accessories } from "../data/products.js";

import { filterDiv } from "./searchBarActivate.js";

import { appearDisapprear } from "./searchBarActivate.js";

import { addHTML } from "./add-html.js";

const container = document.getElementById("container-js");

const container2 = document.getElementById("container2-js");

const container3 = document.getElementById("container3-js");

  for(let i = 0; i < accessories.length; i++){
  for(let j = 0; j < accessories[i].length; j++){
    let accessorie = accessories[i][j];
    if(i === 0){
      addHTML(container,accessorie);
    }
    else if (i === 1){
      addHTML(container2,accessorie);
    }
    else if (i === 2){
      addHTML(container3,accessorie);
    }
  }
  }

searchBar.addEventListener('keyup',()=>{
  searchFilter(accessories);
  document.addEventListener('click',(event)=>{
    appearDisapprear(filterDiv,event);
  });
});