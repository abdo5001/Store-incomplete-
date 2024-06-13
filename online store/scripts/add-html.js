export function addHTML(container,product){
  container.innerHTML += `<div class="box">
  <img src=${product.image}>
  <p>${(product.priceInCents/100).toFixed(2)}$</p>
  <h3>${product.name}</h3>
  <a href=${product.productPage} class="button" id="addToCart">More Details</a>
  </div>`;
}