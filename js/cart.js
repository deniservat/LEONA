function getProductById(productId) {
    const foundProduct = productsCart.find(product => product.id === productId);
    return foundProduct;
}

/* const renderProdCart = () => { */
const renderProdCart = () => {
    product = loadSelectedProd();
    productsCart = loadProdCartLS();
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
            let backgroundColor = colorHexMap[product.color] || "#000000";
            output += `<div class="r-between line-top pt-4 pb-4">
                          <div class="col-md-1 r-start">
                              <img src="../img/img-prod-${product.id}.jpg" alt="${product.name}" width="120">
                          </div>
                          <div class="col-md-2 r-start">
                              <p class="cart-prod-bold m-0 me-5">${product.name}</p>
                          </div>
                          <div class="col-md-1 r-start">
                          <div id="cart-selected-color" class="me-2" style="background-color: ${backgroundColor}; height: 32px; width: 32px;"></div>
                          <p class="cart-prod-bold m-0">${product.color}</p>
                            </div>
                          <div id="select-amount" class="r-start">
                              <button id="btn-amount-rest-${product.id}" class="btn-amount" title="Rest Item"><img src="../icn/icn-minus.svg" alt="rest item" width="20"></button>
                              <h4 id="product-amount-${product.id}" class="m-0 box-amount">${product.amount}</h4>
                              <button id="btn-amount-add-${product.id}" class="btn-amount" title="Add Item"><img src="../icn/icn-plus.svg" alt="rest item" width="20"></button>
                          </div>
                          <div class="col-md-1 r-end">
                              <p class="cart-prod-reg m-0">${product.amount} X £${product.price}</p>
                          </div>
                          <div class="col-md-2 r-between">
                              <p class="cart-prod-bold m-0">£${(product.amount * product.price).toFixed(2)}</p>
                            <a class="d-center delete-product-cart" href="#" title="Delete product" data-product-id="${product.id}">
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
                    <div class="row pt-5 justify-content-between pe-0 m-0">
                    <a class="col-md-3 checkout" href="checkout.html" title="Checkout">
                    <button class="btn-checkout-back mt-4" id="btn-checkout">ADD MORE PRODUCTS</button>
                    </a>
                    <a class="col-md-3 checkout" href="checkout.html" title="Checkout">
                        <button class="btn-checkout mt-4" id="btn-checkout">GO TO CHECKOUT</button>
                    </a>
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


document.getElementById("selected-products").addEventListener("click", (e) => {
    e.preventDefault();
        const targetId = e.target.id;
        const clickedElement = e.target.closest(".delete-product-cart");
        const closestButton = e.target.closest("button");
        const buttonId = closestButton ? closestButton.id : null;

        const clickedCheckout = e.target.closest(".checkout");

        if(clickedCheckout){
            location.href = "checkout.html"
        }else if (clickedElement) {
            const productId = clickedElement.dataset.productId;
            deleteProd(productId);
        } else if (buttonId) {
            if (buttonId.startsWith("btn-amount-rest-")) {
                const productId = buttonId.replace("btn-amount-rest-", "");
                const productIndex = productsCart.findIndex(product => product.id === Number(productId));
    
                if (productIndex !== -1 && productsCart[productIndex].amount > 0) {
                    productsCart[productIndex].amount -= 1;
                    saveProdCartLS();
                    renderProdCart();
                    renderBtnCart();
                }
            } else if (buttonId.startsWith("btn-amount-add-")) {
                const productId = buttonId.replace("btn-amount-add-", "");
                const productIndex = productsCart.findIndex(product => product.id === Number(productId));
    
                if (productIndex !== -1) {
                    productsCart[productIndex].amount += 1;
                    saveProdCartLS();
                    renderProdCart();
                    renderBtnCart();
                }
            }
        }
    });    
     


