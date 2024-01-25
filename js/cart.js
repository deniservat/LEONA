//creo tabla con products seleccionados q va a ir en la pagina del carrito

const renderProdCart = () =>{
    const productsCart = loadProdCartLS();
    //validacion en caso de q no encuentre products tirar un cartel
    let output = "";
    if(totalItemsCart()>0){
      output = `<article class="container-fluid">
                  <div class="row r-end pb-4">
                      <a href="#" class="r-end-start cart-product-reg" onClick="emptyCart()">
                          <p class="cart-product-reg pr-2">Empty cart</p>
                          <img src="../icn/icn-trash.svg" alt="empty cart" width="24"/>
                      </a>
                  </div>`
      for (let product of productsCart){
        output += `<div class="r-between line-top pt-4 pb-4">
                      <div class="col-md-2 r-start">
                          <img src="../img/img-prod-${product.id}.jpg" alt="${product.name}" width="120">
                      </div>
                      <div class="col-md-2 r-start">
                          <p class="cart-product-bold">${product.name}</p>
                      </div>
                      <div class="col-md-2 r-end">
                          <button class="btn btn-warning cart-product-reg" title="Delete Item" onClick="deleteItemProd(${product.id});"> - </button>
                          <p class="cart-product-reg">${product.amount}</p>
                          <button class="btn btn-warning" title="Add Item" onClick="addItemProd(${product.id});"> + </button>
                      </div>
                      <div class="col-md-2 r-end">
                          <p class="cart-product-reg">${product.amount} X £${product.price}</p>
                      </div>
                      <div class="col-md-2 r-between">
                        <p class="cart-product-bold">£${product.amount * product.price}</p>
                        <a class="d-center" href="#" title="Delete product" onClick="deleteProd(${product.id})">
                          <img src="../icn/icn-trash.svg" alt="Delete product" width="20"/>
                        </a>    
                      </div>
                  </div>`     
      }
      output += `<div class="row line-top pt-5">
                  <div class="col-md-6">
                      <p class="cart-product-xbold">Total</p>
                  </div>
                  <div class="col-md-6 r-end">
                      <p class="cart-product-xbold">£${totalPriceCart()}</p>
                  </div>
                </div>
              </article>`;
      }else{
        output = `<article class="container-fluid">
                    <div class="d-center">
                        <p class="cart-product-reg pb-5 text-center">Your cart is empty,<br><br>  time to refresh with natural beauty essentials!</p>
                        <a href="products.html">
                            <button class="btn-hero" id="btn-hero">SHOP NOW</button>
                        </a>
                    </div>
                </article>`
      }
  
    document.getElementById("selected-products").innerHTML = output;
  }
  
  renderProdCart();
  renderBtnCart();
