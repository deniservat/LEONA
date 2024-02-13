function getProductById(productId) {
    const foundProduct = productsCart.find(product => product.id === productId);
    return foundProduct;
}

const goProducts = () =>{
    window.location.href = "products.html";
}

const renderProdCart = () => {
    product = loadSelectedProd();
    productsCart = loadProdCartLS();
    let output = "";
    if (totalItemsCart() > 0) {
        output = `<article class="container-fluid pt-5 ps-0 pe-0">
                    <div class="row r-end pb-4">
                        <a href="#" class="r-end-start cart-prod-reg m-0" onClick="emptyCart()">
                            <p class="cart-prod-reg m-0 pe-3">Empty cart</p>
                            <img src="../icn/icn-trash.svg" alt="empty cart" width="24"/>
                        </a>
                    </div>`;
        for (let product of productsCart) {
            let backgroundColor = []; // Array to store background colors
            
            if (product.color && product.color.length > 0) {
                const colors = product.color.slice(0, 3); // Get first three colors
                backgroundColor = colors.map(color => colorHexMap[color] || "#000000"); // Map colors to background colors or default to black
            }

            const optionsColor = product.color.map((color, index) => 
                `<li class="option"><div id="cart-selected-color" style="background-color: ${backgroundColor[index]}; height: 24px; width: 28px; margin-right: 1rem;"></div>${color}</li>`
            ).join('');

            output += `<div class="row-cart">
                            <div class="cart-col-1 pe-3">
                                <img class="cart-image" src="../img/img-prod-${product.id}.jpg" alt="${product.name}">
                            </div>

                            <div class="cart-col-2">

                                <div class="cart-name">
                                    <p class="cart-prod-bold m-0">${product.name}</p>
                                </div>

                                <div class="cart-color dropdownCart">
                                        <div class="input-box-cart">
                                            <div id="cart-selected-color" style="background-color: ${backgroundColor[0]}; height: 24px; width: 28px;"></div>
                                            <input class="input-color" type="text" placeholder="${product.color[0]}" readonly />      
                                        </div>
                                        <ul class="options">${optionsColor}</ul>
                                </div>

                                <div class="cart-amount" id="select-amount">
                                    <button id="btn-amount-rest-${product.id}" class="btn-amount" title="Rest Item"><img src="../icn/icn-minus.svg" alt="rest item" width="20"></button>
                                    <h4 id="product-amount-${product.id}" class="cart-prod-bold m-0 box-amount-cart">${product.amount}</h4>
                                    <button id="btn-amount-add-${product.id}" class="btn-amount" title="Add Item"><img src="../icn/icn-plus.svg" alt="rest item" width="20"></button>
                                </div>

                                <div class="cart-amountxprice">
                                    <p class="cart-prod-bold m-0">${product.amount}</p>
                                    <img src="../icn/icn-multiply.svg" alt="rest item" width="20">
                                    <p class="cart-prod-bold m-0">£${product.price}</p>
                                </div>

                                <div class="cart-price r-between">
                                    <p class="cart-prod-bold m-0 pe-5">£${(product.amount * product.price).toFixed(2)}</p>
                                    <a class="d-center delete-product-cart" href="#" title="Delete product" data-product-id="${product.id}">
                                    <img src="../icn/icn-trash.svg" alt="Delete product" width="20"/>
                                    </a> 
                                </div>
                            </div>
                        </div>`;
        }
        output += `<div class="row line-top pt-5">
                      <div class="col-6">
                          <p class="cart-prod-xbold m-0">Total</p>
                      </div>
                      <div class="col-6 r-end">
                          <p class="cart-prod-xbold m-0">£${(totalPriceCart()).toFixed(2)}</p>
                      </div>
                    </div>
                    <div class="row pt-5 justify-content-between pe-0 m-0">

                    <a href="" class="col-md-3 p-0">
                    <button class="btn-checkout-back mt-4" onClick="goProducts()">ADD MORE PRODUCTS</button>
                    </a>

                    <a class="col-md-3 checkout p-0" href="checkout.html" title="Checkout">
                        <button class="btn-checkout mt-4" id="btn-checkout">GO TO CHECKOUT</button>
                    </a>

                    </div>
                </article>`;
    } else {
        output = `<article class="container-fluid">
                      <div class="d-center">
                          <p class="cart-prod-reg m-0 pb-5 text-center">Your cart is empty,<br><br>  time to refresh with natural beauty essentials!</p>
                          <a href="">
                              <button class="btn-hero" onClick="goProducts()">SHOP NOW</button>
                          </a>
                      </div>
                  </article>`;
    }     
    document.getElementById("selected-products").innerHTML = output;
}

renderProdCart();
renderBtnCart();


//AMOUNT PICKER

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



//DROPDROWN COLOR PICKER

const dropdownCart = document.querySelector('.dropdownCart');
const input = dropdownCart.querySelector('.input-color');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;

// basic toggle (open/close) function
const toggleDropdownCart = (event) => {
  event.stopPropagation();
  dropdownCart.classList.toggle('opened');
};

// option selection from dropdownCart list
// used "event.currentTarget" to specify the selected option
// after option is chosen, its "textContent" value being copied to input's value

const selectOption = (event) => {
    const selectedColor = event.currentTarget.textContent;
    input.value = selectedColor;
    const selectedOption = event.currentTarget;
    const selectedBackgroundColor = selectedOption.querySelector('div').style.backgroundColor;
    const cartSelectedColor = dropdownCart.querySelector('#cart-selected-color');
    cartSelectedColor.style.backgroundColor = selectedBackgroundColor;
  };

// we want the dropdownCart list to close when clicked outside of it
// ex: no option was selected
// we do a simple check below
// if dropdownCart list is in opened state
// then remove the ".opened" class

const closeDropdownCartFromOutside = () => {
  if (dropdownCart.classList.contains('opened')) {
    dropdownCart.classList.remove('opened');
  }
};

// Event Listeners

// if we click anywhere on "body" and dropdownCart list opened
// the dropdownCart will be closed

body.addEventListener('click', closeDropdownCartFromOutside);

// options selection

listOfOptions.forEach((option) => {
  option.addEventListener('click', selectOption);
  console.log("option selected")
});

// dropdownCart toggle
dropdownCart.addEventListener('click', toggleDropdownCart);



{/* <li class="option"><div id="cart-selected-color" style="background-color: ${backgroundColor1}; height: 24px; width: 28px; margin-right: 1rem;"></div>${product.color[0]}</li>
<li class="option"><div id="cart-selected-color" style="background-color: ${backgroundColor2}; height: 24px; width: 28px; margin-right: 1rem;"></div>${product.color[1]}</li>
 */}