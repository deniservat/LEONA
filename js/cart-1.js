//CART



const renderProdCart = () => {
    const productsCart = loadProdCartLS();
    let output = "";
    if (totalItemsCart() > 0) {
        output = `<article class="container-fluid">
                      <div class="row r-end pb-4">
                          <a href="#" class="r-end-start cart-prod-reg m-0" onClick="emptyCart()">
                              <p class="cart-prod-reg m-0 pe-3">Empty cart</p>
                              <img src="../icn/icn-trash.svg" alt="empty cart" width="24"/>
                          </a>
                      </div>`;
        for (let product of productsCart) {
            let backgroundColor = colorHexMap[product.color] || "#000000"; // Get the background color from colorHexMap
            output += `<div class="r-between line-top pt-4 pb-4">
                          <div class="col-md-1 r-start">
                              <img src="../img/img-prod-${product.id}.jpg" alt="${product.name}" width="120">
                          </div>
                          <div class="col-md-3 r-start">
                              <p class="cart-prod-bold m-0 me-5">${product.name}</p>
                              <div id="cart-selected-color" class="me-2" style="background-color: ${backgroundColor}; height: 32px; width: 32px;"></div>
                              <p class="cart-prod-bold m-0">${product.color}</p>
                          </div>
                          <div id="select-amount" class="r-start">
                          <button id="btn-amount-rest" class="btn-amount" title="Rest Item"><img src="../icn/icn-minus.svg" alt="rest item" width="20"></button>
                          <h4 id="product-amount" class="m-0 box-amount">${product.amount}</h4>
                          <button id="btn-amount-add" class="btn-amount" title="Add Item"><img src="../icn/icn-plus.svg" alt="rest item" width="20"></button>
                            </div>
                          <div class="col-md-1 r-end">
                              <p class="cart-prod-reg m-0">${product.amount} X £${product.price}</p>
                          </div>
                          <div class="col-md-2 r-between">
                              <p class="cart-prod-bold m-0">£${(product.amount * product.price).toFixed(2)}</p>
                              <a class="d-center" href="#" class="delete-product-cart" title="Delete product" onClick="deleteProd(${product.id})">
                                  <img src="../icn/icn-trash.svg" alt="Delete product" width="20"/>
                              </a>    
                          </div>
                      </div>`;
        }
        output += `<div class="row line-top pt-5">
                      <div class="col-md-6">
                          <p class="cart-prod-xbold m-0">Total</p>
                      </div>
                      <div class="col-md-6 r-end">
                          <p class="cart-prod-xbold m-0">£${(totalPriceCart()).toFixed(2)}</p>
                      </div>
                    </div>
                </article>`;


    } else {
        output = `<article class="container-fluid">
                      <div class="d-center">
                          <p class="cart-prod-reg m-0 pb-5 text-center">Your cart is empty,<br><br>  time to refresh with natural beauty essentials!</p>
                          <a href="products.html">
                              <button class="btn-hero" id="btn-hero">SHOP NOW</button>
                          </a>
                      </div>
                  </article>`;
    }

    document.getElementById("selected-products").innerHTML = output;
}

renderProdCart();
renderBtnCart();

