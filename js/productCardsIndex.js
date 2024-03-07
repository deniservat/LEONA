// linkeo con el contenedor
let containerNewArrivals = document.querySelector("#products-new-arrivals");
let containerMostPopular = document.querySelector("#products-most-popular");

//Updated renderProducts function
const renderProducts = () => {
    containerNewArrivals.innerHTML = ""; // Clear previous products
    containerMostPopular.innerHTML = ""; // Clear previous products
    for (const product of products) {
        if(product.new === true){
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <div class="container-image">
            <div class="discount-container"></div>
            <a class="wrapper">
              <div class="parent d-center" onClick="seeSelectedProd(${product.id})">
                <div class="child" style="background-image: url(./img/img-prod-${product.id}.jpg);"></div>
              </div>
            </a>
            <a class="btn-add d-center" data-product-id="${product.id}" onClick="addCart(${product.id})">
              <svg width="53" height="45" viewBox="0 0 53 45" xmlns="http://www.w3.org/2000/svg">
                  <path class="btn-add-bg" d="M0 18C0 8.05887 8.05888 0 18 0H34.6829C44.6241 0 52.6829 8.05888 52.6829 18V45H0V18Z" fill="#CCFF00"/>
                  <path d="M26 16V34" stroke="#282828" stroke-width="2"/>
                  <path d="M17 25H35" stroke="#282828" stroke-width="2"/>
              </svg>
            </a>
          </div>
          <div class="product-details">
            <h2 class="product-title">${product.name}</h2>
            <div class="price-container r-start">
              ${product.discount ? `
                <h3 class="product-price" style="text-decoration: line-through; display: inline; margin-right: 1rem;">£${product.price.toFixed(2)}</h3>
                <h3 class="product-price">£${calculateDiscountedPrice(product)}</h3>
              ` : `<h3>£${product.price.toFixed(2)}</h3>`}
            </div>
          </div>`;
  
        // Append the card to the container
       containerNewArrivals.appendChild(card);

        // Get the discount container within the current product card
        let discountContainer = card.querySelector(".discount-container");
  
        // Add discount tag if applicable
        if (product.discount === 20) {
          discountContainer.innerHTML = `<img class="discount-tag" src="./icn/icn-discount-20.svg" alt="20% discount">`;
        } else if (product.discount === 10) {
          discountContainer.innerHTML = `<img class="discount-tag" src="./icn/icn-discount-10.svg" alt="10% discount">`;
        }
    }

    if(product.popular === true){
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <div class="container-image">
            <div class="discount-container"></div>
            <a class="wrapper">
              <div class="parent d-center" onClick="seeSelectedProd(${product.id})">
                <div class="child" style="background-image: url(./img/img-prod-${product.id}.jpg);"></div>
              </div>
            </a>
            <a class="btn-add d-center" data-product-id="${product.id}" onClick="addCart(${product.id})">
              <svg width="53" height="45" viewBox="0 0 53 45" xmlns="http://www.w3.org/2000/svg">
                  <path class="btn-add-bg" d="M0 18C0 8.05887 8.05888 0 18 0H34.6829C44.6241 0 52.6829 8.05888 52.6829 18V45H0V18Z" fill="#CCFF00"/>
                  <path d="M26 16V34" stroke="#282828" stroke-width="2"/>
                  <path d="M17 25H35" stroke="#282828" stroke-width="2"/>
              </svg>
            </a>
          </div>
          <div class="product-details">
            <h2 class="product-title">${product.name}</h2>
            <div class="price-container r-start">
              ${product.discount ? `
                <h3 class="product-price" style="text-decoration: line-through; display: inline; margin-right: 1rem;">£${product.price.toFixed(2)}</h3>
                <h3 class="product-price">£${calculateDiscountedPrice(product)}</h3>
              ` : `<h3>£${product.price.toFixed(2)}</h3>`}
            </div>
          </div>`;
  
        // Append the card to the container
       containerMostPopular.appendChild(card);

        // Get the discount container within the current product card
        let discountContainer = card.querySelector(".discount-container");
  
        // Add discount tag if applicable
        if (product.discount === 20) {
          discountContainer.innerHTML = `<img class="discount-tag" src="./icn/icn-discount-20.svg" alt="20% discount">`;
        } else if (product.discount === 10) {
          discountContainer.innerHTML = `<img class="discount-tag" src="./icn/icn-discount-10.svg" alt="10% discount">`;
        }
    }
      }
    }

  
  // Function to calculate discounted price
  const calculateDiscountedPrice = (product) => {
    const discountPercentage = product.discount / 100;
    const discountedPrice = product.price * (1 - discountPercentage);
    return discountedPrice.toFixed(2);
  };
  
  
  // Initial render on page load
  renderProducts();