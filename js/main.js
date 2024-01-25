// linkeo con el contenedor
let container = document.querySelector("#products-js");
let fragment = document.createDocumentFragment();

  // MAIN.js (va a lo último)
const renderProducts = () =>{
    for (const product of products) {
        let card = document.createElement("div");
        card.className = "col-xs-12 col-md-4 p-0 m-0";
        card.innerHTML = `<div class="product-card">
        <div class="container-image">
          <a class="wrapper">
            <div class="parent d-center" onClick="seeSelectedProd(${product.id})">
              <div class="child" style="background-image: url(../img/img-prod-${product.id}.jpg);"></div>
            </div>
          </a>
          <a class="btn-add d-center" onClick="addCart(${product.id})">
            <svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18C0 8.05887 8.05888 0 18 0H34.6829C44.6241 0 52.6829 8.05888 52.6829 18V45H0V18Z" fill="#CCFF00"/>
            <path d="M26 16V34" stroke="#282828" stroke-width="2"/>
            <path d="M17 25H35" stroke="#282828" stroke-width="2"/>
            </svg>
          </a> 
        </div>
        <div class="product-details">
          <h2 class="product-title">${product.name}</h2>
          <h3 class="product-price">£${product.price}</h3>
        </div>
      </div>`;
      
        fragment.appendChild(card);
      }
      container.appendChild(fragment);
}

renderProducts();
renderBtnCart();
  
  



