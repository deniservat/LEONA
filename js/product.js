// Map of color names to hex codes
const colorHexMap = {
    sand: "#F9E5BF",
    blue: "#3753E6",
    black: "#292827" ,
    white: "#F5F4F3" ,
    yellow: "#FDFF90" ,
    red: "#FF3B3B" ,
    green : "#64C654" ,
    orange: "#FBBC42" ,
    purple: "#A474F1" ,
    grey: "#A4A3A1" ,
    // Add more color mappings as needed
  };

function changeImage(imageSrc) {
    document.getElementById('bigImage').src = imageSrc;
}

const renderProd = () => {
    const product = loadSelectedProd();
    let output = `<article class="col-xs-12 col-md-7 p-0">
                    <div class="gallery-container">
                        <div class="small-images">
                            <img class="small-img" src="../img/img-prod-${product.id}.jpg" alt="Image 1" onclick="changeImage('../img/img-prod-${product.id}.jpg')">
                            <img class="small-img" src="../img/img-prod-${product.id}-1.jpg" alt="Image 2" onclick="changeImage('../img/img-prod-${product.id}-1.jpg')">
                            <img class="small-img" src="../img/img-prod-${product.id}-2.jpg" alt="Image 3" onclick="changeImage('../img/img-prod-${product.id}-2.jpg')">
                            <img class="small-img" src="../img/img-prod-${product.id}-3.jpg" alt="Image 3" onclick="changeImage('../img/img-prod-${product.id}-3.jpg')">
                            <img class="small-img-last" src="../img/img-prod-${product.id}-4.jpg" alt="Image 4" onclick="changeImage('../img/img-prod-${product.id}-4.jpg')">
                        </div>
                        <div class="big-image">
                            <img src="../img/img-prod-${product.id}.jpg" alt="Big Image" id="bigImage">
                        </div>
                    </div>
                </article>
                <article class="col-xs-12 col-md-5">
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
                    <p class="selected-product-price">£${product.price}</p>
                    <p class="selected-product-description">${product.description}</p>
                    <div id="select-color"></div>
                    <a href="#" class="mt-5 pt-5" onClick="addCart(${product.id})" title="Add to cart">
                        <button class="btn-hero mt-4" id="btn-hero">ADD TO CART</button>
                    </a>
                </article>`;
    document.getElementById("view-product").innerHTML = output;

    let selectColor = document.getElementById("select-color");
    let productColors = product.color.map(color => {
        const hexCode = colorHexMap[color] || "#000000";
        return `<div class="d-center" data-color="${color}"><div style="background-color: ${hexCode}"></div><h4>${color}</h4></div>`;
    }).join('');
    selectColor.innerHTML += productColors;

    let ingredients = document.getElementById("ingredients");
    const ingredientsListItems = product.ingredients.map(ingredient => `<li class="filter-value-label pb-2">- ${ingredient}</li>`).join('');
    ingredients.innerHTML= `<ul style="list-style: none; padding: 0; margin: 0;">${ingredientsListItems}</ul>`;
    
    let benefits = document.getElementById("benefits");
    benefits.innerHTML= `<p class="filter-value-label pb-2 pt-2">${product.benefits}</p>`;


}
renderProd();



