
//PRODUCT

let product; // Declare product variable in a broader scope

// Function to render the product amount on the page
const renderProductAmount = (productsCart) => {
    const totalAmount = productsCart.reduce((total, item) => total + item.amount, 0);
    document.getElementById("product-amount").innerText = totalAmount;
    if (totalAmount !== 0) {
        document.getElementById("product-amount").classList.add("amount-selected");
    } else {
        document.getElementById("product-amount").classList.remove("amount-selected");
    }

    console.log(productsCart);
};

function changeImage(imageSrc) {
    document.getElementById('bigImage').src = imageSrc;
}

const renderProd = () => {
    product = loadSelectedProd();
    // Load productsCart from localStorage
    productsCart = loadProdCartLS();
    
    // Only add the product if it doesn't exist in the cart
    if (!productsCart.some(item => item.id === product.id)) {
        productsCart.push(product);
    }

    let output = `<article class="col-xs-12 col-md-8 p-0">
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
                <article class="col-xs-12 col-md-4">
                    <h1 class="selected-product-title">${product.name}</h1>
                    <div class="container-fluid p-0 pb-5" id="reviews">
                        <div class="r-start">
                            <div class="r-start" id="average-rating"></div>
                            <span class="h4" id="total-reviews" onclick="scrollToReviews()">(0)</span>
                        </div>

                        <div class="add-review">
                            <div class="r-start">
                                <h3>Add Review</h3>
                                <img class="m-1" src="../icn/icn-plus.svg" alt="add" width="16"/>
                            </div>

                            <form id="review-form">
                                <label for="username">Username:</label>
                                <input type="text" id="username" required><br>

                                <label for="rating">Rating:</label>
                                <div class="r-start" id="rating-stars" onclick="handleStarClick(event)"></div>
                                <input type="hidden" id="rating" name="rating">

                                <label for="comment">Review:</label>
                                <textarea id="comment" required></textarea><br>

                                <button type="button" onclick="submitReview()">Submit Review</button>
                            </form>
                        </div>
                    </div>
                    <h2 class="selected-product-price">£${product.price}</h2>
                    <p class="selected-product-description">${product.description}</p>

                    <div id="color-picker">
                        <p class="selected-product-adding">Pick a color:</p>
                        <div id="select-color"></div>
                    </div>

                    <div id="amount-picker" class="mb-1">
                        <p class="selected-product-adding pt-3">Pick an amount:</p>
                        <div id="select-amount" class="r-start">
                            <button id="btn-amount-rest" class="btn-amount" title="Rest Item"><img src="../icn/icn-minus.svg" alt="rest item" width="20"></button>
                            <h4 id="product-amount" class="m-0 box-amount">${product.amount}</h4>
                            <button id="btn-amount-add" class="btn-amount" title="Add Item"><img src="../icn/icn-plus.svg" alt="rest item" width="20"></button>
                        </div>
                    </div>

                    <a href="#" class="btn-product" onClick="addCart(${product.id})" title="Add to cart">
                        <button class="btn-product-add mt-4" id="btn-add-cart">ADD TO CART</button>
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

            // Update the color of the existing product in productsCart
            const selectedColor = colorElement.getAttribute("data-color");
            const existingProduct = productsCart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.color = selectedColor;

                // Save the updated cart to localStorage
                saveProdCartLS(productsCart);

                // Render the updated product amount on the page
                renderProductAmount(productsCart);
            }
        });
    });

}

renderProd();


document.getElementById("btn-amount-rest").addEventListener("click", (e) => {
    if (product) {
        // Check if the product amount is greater than 0 before decrementing
        if (product.amount > 0) {
            // Decrement the product amount
            product.amount -= 1;

            // Save the updated cart to localStorage
            saveProdCartLS();

            // Render the updated product amount on the page
            renderProductAmount(productsCart);
        }
    }
});

document.getElementById("btn-amount-add").addEventListener("click", (e) => {
    if (product) {
        // Increment the product amount
        product.amount += 1;

        // Save the updated cart to localStorage
        saveProdCartLS();

        // Render the updated product amount on the page
        renderProductAmount(productsCart);
    }
});

document.getElementById("btn-add-cart").addEventListener("click", () => {
    const btnAddCart = document.getElementById("btn-add-cart");
    btnAddCart.classList.remove("btn-product-add");
    btnAddCart.classList.add("btn-product-added");
    const afterAdding = document.getElementById("after-adding");
    afterAdding.innerHTML =`<a href="products.html" class="btn-after" title="Continue shopping">
                                <button class="btn-after-add-1">Continue shopping</button>
                            </a>
                            <a href="cart.html" class="btn-after" title="Go to cart">
                                <button class="btn-after-add-2">Go to cart</button>
                            </a>`;
   /*  renderCart(); */ // Render the cart when #btn-hero is clicked
    renderBtnCart();
});