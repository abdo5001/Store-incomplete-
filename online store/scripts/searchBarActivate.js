// vars

const searchSectionContainer = document.getElementById("ssc-js");
const searchButton = document.getElementById("search-button-js");

const searchSection = document.createElement("div");

const searchBarContainer = document.createElement("div");
export const searchBar = document.createElement("input");
const searchButton2 = document.createElement("button");
const categories = document.createElement("ul");
const link1 = document.createElement("a");
const link2 = document.createElement("a");
link2.setAttribute("id","women");
const link3 = document.createElement("a");
const men = document.createElement("li");
const women = document.createElement("li");
women.setAttribute("id","woman");
const kids = document.createElement("li");
const inputDiv = document.createElement("div");
export const filterDiv = document.createElement("div");

searchSection.style.color = "white";
searchSection.style.backgroundColor = "black";

// append search bar

searchBar.setAttribute("class", "search-bar");
searchSection.setAttribute("class", "search-section");
searchBar.setAttribute("type", "text");

searchBar.setAttribute("placeholder"," Search in products / categories")
categories.setAttribute("class", "categories-container");

searchBarContainer.setAttribute("class", "searchBarContainer");
searchBarContainer.appendChild(inputDiv);
inputDiv.appendChild(searchBar);

//append search button

inputDiv.setAttribute("class","searchBarDiv");
searchBarContainer.appendChild(searchButton2);

const btnDiv = document.createElement("div");

btnDiv.setAttribute("class","sBarButtonDiv");

const btnode = document.createTextNode("Search");

searchBarContainer.appendChild(btnDiv)

btnDiv.appendChild(searchButton2);

searchButton2.appendChild(btnode);

searchButton2.setAttribute("class","searchBarButton");

// append categories

searchSection.appendChild(searchBarContainer);
searchSection.appendChild(categories);

men.appendChild(document.createTextNode("Men"));
women.appendChild(document.createTextNode("Women"));
kids.appendChild(document.createTextNode("Kids"));

link1.appendChild(men);
link2.appendChild(women);
link3.appendChild(kids);

link1.setAttribute("href","men-page.html");
link2.setAttribute("href","women.html");
link3.setAttribute("href","kids.html");

link1.style.color = "white";
link2.style.color = "white";
link3.style.color = "white";

categories.appendChild(link1);
categories.appendChild(link2);
categories.appendChild(link3);

// append shearch section

let isClicked = false;
searchButton.addEventListener('click', () => {
  if (!isClicked) {
    searchSectionContainer.appendChild(searchSection);
  } else {
    searchSectionContainer.removeChild(searchSection);
  }
  isClicked = !isClicked;
});

// append search filter

function displayFilter(filter){
  let html = "";
  for(let i = 0; i < filter.length; i++){
    html += `<div class="filter-container"><a  class = "filterdNames"href="${filter[i].productPage}"> <img width ="10%" src="${filter[i].image}"><div class = "text"> ${filter[i].name} </div></a></div>`;
  }
  searchSection.appendChild(filterDiv);
  filterDiv.setAttribute("class","filter-div-css")
  filterDiv.innerHTML = html ;
}

//create search filter

export function searchFilter(products){
  const value = searchBar.value.toLowerCase();
  const filteredProducts = [];

  for(let i = 0; i < products.length; i++){
    let productQuarter = products[i];
    for(let j = 0; j < productQuarter.length; j++){
      let product = productQuarter[j];
        if (product.name.toLowerCase().includes(value)){
          filteredProducts.push(product);
        }
    }
  }
  displayFilter(filteredProducts);
  console.log(filteredProducts);
}

export function appearDisapprear(filterDiv,event){
  if (!filterDiv.contains(event.target) && event.target !== searchBar) {
    filterDiv.style.display = 'none';
  } else {
      filterDiv.style.display = 'block';
  }
}