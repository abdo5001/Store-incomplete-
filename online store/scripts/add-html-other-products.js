export function addHTMLOtherP(product,name,container){
  if(product.name !== name.innerHTML){
    container.innerHTML += `<div>
    <img src = ${product.image}>
      <p>${(product.priceInCents/100).toFixed(2)}$</p>
      <h3>${product.name}</h3>
    <a href="${product.productPage}" class = "button">More Details</a>
    </div>`;
  }
}