
//PRODUCT

let product;
let productAmount = 0;
let isColorSelected = false;

// Function to save productsCart to sessionStorage
const saveProdCartSS = () => {
    sessionStorage.setItem("pre-cart", JSON.stringify(productsCart));
}

const loadProdCartSS = () => {
    const loadedData = JSON.parse(sessionStorage.getItem("pre-cart")) || [];
    return loadedData;
}

const renderProductAmount = (productsCart) => {
    const totalAmount = productsCart.reduce((total, item) => total + item.amount, 0);
    // Use productAmount instead of product.amount here
    document.getElementById("product-amount").innerText = productAmount;
    if (productAmount !== 0) {
        document.getElementById("product-amount").classList.add("amount-selected");
    } else {
        document.getElementById("product-amount").classList.remove("amount-selected");
    }
};

function changeImage(imageSrc) {
    document.getElementById('bigImage').src = imageSrc;
}

const renderProd = () => {
    product = loadSelectedProd();
   // Load producstsSSCart from sessionStorage
   productsCart = loadProdCartLS();
    
    // Only add the product if it doesn't exist in the cart
    if (!productsCart.some(item => item.id === product.id)) {
        productsCart.push(product);
    }

    let output = `<article class="col-xs-12 col-md-7 col-lg-8 p-0">
                    <div class="gallery-container">
                        <div class="small-images">
                            <img class="small-img" src="../img/img-prod-${product.id}.jpg" alt="Image 1" onclick="changeImage('../img/img-prod-${product.id}.jpg')">
                            <img class="small-img" src="../img/img-prod-${product.id}-1.jpg" alt="Image 2" onclick="changeImage('../img/img-prod-${product.id}-1.jpg')">
                            <img class="small-img" src="../img/img-prod-${product.id}-2.jpg" alt="Image 3" onclick="changeImage('../img/img-prod-${product.id}-2.jpg')">

                            <img class="small-img-last" src="../img/img-prod-${product.id}-4.jpg" alt="Image 4" onclick="changeImage('../img/img-prod-${product.id}-4.jpg')">
                        </div>
                        <div class="big-image">
                            <img src="../img/img-prod-${product.id}.jpg" alt="Big Image" id="bigImage">
                        </div>
                    </div>
                </article>
                <article class="col-xs-12 col-md-5 col-lg-4 p-0">
                    <h1 class="selected-product-title">${product.name}</h1>
                    <div class="container-fluid p-0 pb-5" id="reviews">
                        <div class="r-start">
                            <div class="r-start" id="average-rating"></div>
                            <span class="h4" id="total-reviews" onclick="scrollToReviews()">(0)</span>
                            <span class="h4 ps-2" style="text-decoration: underline; color: #398DF0; cursor: pointer" onclick="addReview()">Add a review</span>
                        </div>
                    </div>
                    <h2 class="selected-product-price">${getFormattedPrice(product)}</h2>
                    <p class="selected-product-description">${product.description}</p>

                    <div id="color-picker">
                        <p class="selected-product-adding">Pick a color:</p>
                        <div id="select-color"></div>
                    </div>

                    <div id="amount-picker" class="mb-1">
                        <p class="selected-product-adding pt-3">Pick an amount:</p>
                        <div id="select-amount" class="r-start">
                            <button id="btn-amount-rest" class="btn-amount" title="Rest Item"><img src="../icn/icn-minus.svg" alt="rest item" width="20"></button>
                            <h4 id="product-amount" class="m-0 box-amount">${productAmount}</h4>
                            <button id="btn-amount-add" class="btn-amount" title="Add Item"><img src="../icn/icn-plus.svg" alt="rest item" width="20"></button>
                        </div>
                    </div>

                    <a href="#" class="btn-product" title="Add to cart">
                        <button class="btn-product-added mt-4" id="btn-add-cart">ADD TO CART</button>
                    </a>
                    <div id="after-adding"></div>
                </article>`;
    document.getElementById("view-product").innerHTML = output;


    let selectColor = document.getElementById("select-color");
    let productColors = product.color.map(color => {
        const hexCode = colorHexMap[color] || "#000000";
        return `<div class="each-color d-center" data-color="${color}"><div style="background-color: ${hexCode}"></div><h4 class="pt-2">${color}</h4></div>`;
    }).join('');
    selectColor.innerHTML += productColors;

    let ingredients = document.getElementById("ingredients");
    const ingredientsListItems = product.ingredients.map(ingredient => `<li class="filter-value-label pb-2">- ${ingredient}</li>`).join('');
    ingredients.innerHTML = `<ul style="list-style: none; padding: 0; margin: 0; margin-top: 2rem; margin-bottom: 2rem">${ingredientsListItems}</ul>`;

    let benefits = document.getElementById("benefits");
    benefits.innerHTML = `<div style="margin-top: 2rem; margin-bottom: 2rem;"><p class="filter-value-label pb-2 pt-2">${product.benefits}</p></div>`;

     // Call renderProductAmount to update the product amount on the page
    renderProductAmount(productsCart);
    // Logic for rendering discounted prices
    renderDiscountedPrice(product);

     // Declare colorElements after the product is loaded
    const colorElements = document.querySelectorAll(".each-color");

    colorElements.forEach((colorElement) => {
        colorElement.addEventListener("click", (e) => {
            // Remove the "color-selected" class from all elements
            colorElements.forEach((element) => {
                element.classList.remove("color-selected");
            });
            // Add the "color-selected" class to the clicked color element
            colorElement.classList.add("color-selected");
            isColorSelected = true;

            // Update the color of the existing product in productsCart
            const selectedColor = colorElement.getAttribute("data-color");
            const existingProduct = productsCart.find(item => item.id === product.id);
    
            if (existingProduct) {
                /* existingProduct.color = [selectedColor]; */ // Update selected color
                existingProduct.color = [selectedColor].concat(existingProduct.color.filter(color => color !== selectedColor));
    
                // Save the updated cart to sessionStorage
                saveProdCartSS();
                // Render the updated product amount on the page
                renderProductAmount(productsCart);
                console.log("Selected Color:", selectedColor);
            }
        });
    });
}    

//DISCOUNTS
// Function to get formatted price with discount if applicable
const getFormattedPrice = (product) => {
    if (product.discount) {
        const discountedPrice = calculateDiscountedPrice(product);
        return `
            <span class="original-price" style="text-decoration: line-through;">£${product.price.toFixed(2)}</span>
            <span class="discounted-price">£${discountedPrice}</span>
        `;
    } else {
        return `£${product.price.toFixed(2)}`;
    }
};

// Function to calculate discounted price
const calculateDiscountedPrice = (product) => {
    const discountPercentage = product.discount / 100;
    const discountedPrice = product.price * (1 - discountPercentage);
    return discountedPrice.toFixed(2);
};

// Function to render discounted price if applicable
const renderDiscountedPrice = (product) => {
    if (product.discount) {
        const priceElement = document.querySelector('.selected-product-price');
        priceElement.innerHTML = getFormattedPrice(product);
    }
};

renderProd();



//BUTTON ADD TO CART
const btnAddCart = document.getElementById("btn-add-cart");

const disableBtnAdd = () =>{
    if(productAmount > 0 && isColorSelected === true ){
        btnAddCart.classList.remove("btn-product-added");
        btnAddCart.classList.add("btn-product-add");
        btnAddCart.disabled = false;
    }else{
        btnAddCart.classList.remove("btn-product-add");
        btnAddCart.classList.add("btn-product-added");
        btnAddCart.disabled = true;
    }
}

//AMOUNT PICKER
document.getElementById("btn-amount-rest").addEventListener("click", (e) => {
    if (product) {
        if (productAmount > 0) {
            productAmount -= 1;
            updateCart(productAmount);
            disableBtnAdd();
        }
    }
});

document.getElementById("btn-amount-add").addEventListener("click", (e) => {
    if (product) {
        productAmount += 1;
        updateCart(productAmount);
        disableBtnAdd();
    }
});

function updateCart(amount) {
    if (product) {
        product.amount = amount;
        // Save the updated cart to sessionStorage
        saveProdCartSS();
        // Render the updated product amount on the page
        renderProductAmount(productsCart);
    }
}

// Function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}



const updateCartFromSessionStorage = () => {
    const preCartData = loadProdCartSS();
    renderProductAmount(productsCart);

    preCartData.forEach((matchingProductInPreCart) => {
        const existingProduct = productsCart.find(item => item.id === matchingProductInPreCart.id);

        if (existingProduct) {
            console.log("Existing Product Found:", existingProduct);
            console.log("Matching Product in Pre Cart:", matchingProductInPreCart);
            
            if (existingProduct.color[0] !== matchingProductInPreCart.color[0]) {
                console.log("Different colors detected. Adding new product to cart...");
                // If the colors don't match, add a new object to the cart
                productsCart.push({
                    id: matchingProductInPreCart.id,
                    name: matchingProductInPreCart.name,
                    price: matchingProductInPreCart.price,
                    category: matchingProductInPreCart.category,
                    amount: matchingProductInPreCart.amount,
                    color: matchingProductInPreCart.color
                });
            } else {
                console.log("Matching colors. Adding amount to existing product...");
                // If the colors match, update the amount in the existing cart item
                existingProduct.amount = matchingProductInPreCart.amount;
            }
        } else {
            console.log("No existing product found. Adding new product to cart...");
            // If no matching product exists, add it to the cart
            productsCart.push(matchingProductInPreCart);
        }
    });

    // Update the productAmount based on the first item in productsCart
    if (productsCart.length > 0) {
        productAmount = productsCart[0].amount;
    }

    // Save the updated cart to localStorage
    saveProdCartLS();
    console.log("Updated product amount:", productAmount);
};


btnAddCart.addEventListener("click", () => {
    // Load productsCart from sessionStorage
    productsCart = loadProdCartSS();

    // Call the function to update the cart from sessionStorage
    updateCartFromSessionStorage();

    // Reset color and amount to default as when first loading the page
    product.color = product.defaultColor;
    product.amount = 0;

    // Clear the color selection on the page
    const colorElements = document.querySelectorAll(".each-color");
    colorElements.forEach((colorElement) => {
        colorElement.classList.remove("color-selected");
    });

    // Set the product amount on the page to 0
    document.getElementById("product-amount").innerText = 0;

    btnAddCart.classList.remove("btn-product-add");
    btnAddCart.classList.add("btn-product-added");

    const afterAdding = document.getElementById("after-adding");
    afterAdding.innerHTML = `<a href="products.html" class="btn-after" title="Continue shopping">
                                <button class="btn-after-add-1">Continue shopping</button>
                            </a>
                            <a href="cart.html" class="btn-after" title="Go to cart">
                                <button class="btn-after-add-2">Go to cart</button>
                            </a>`;
    // Call the renderBtnCart function to update the cart UI
    renderBtnCart();
});









