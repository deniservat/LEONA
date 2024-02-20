// Function to shuffle an array (for most popular)
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const discount = () =>{
  for(product of products){
    
  }
}

// linkeo con el contenedor
let container = document.querySelector("#products-js");
let fragment = document.createDocumentFragment();

const renderNoProductsMessage = () => {
  const messageElement = document.createElement("div");
  messageElement.className = "no-product-container";
  messageElement.innerHTML = `<h5 class="no-product">Oops! Seems like we ran out of options for now.<br>Try clearing some filters.</h5>`;
  container.appendChild(messageElement);
};

//Updated renderProducts function
const renderProducts = (selectedArray) => {
  container.innerHTML = ""; // Clear previous products

  if (selectedArray.length === 0) {
    renderNoProductsMessage();
  } else {
    for (const product of selectedArray) {
      let card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="container-image">
          <div class="discount-container"></div>
          <a class="wrapper">
            <div class="parent d-center" onClick="seeSelectedProd(${product.id})">
              <div class="child" style="background-image: url(../img/img-prod-${product.id}.jpg);"></div>
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
      container.appendChild(card);

      // Get the discount container within the current product card
      let discountContainer = card.querySelector(".discount-container");

      // Add discount tag if applicable
      if (product.discount === 20) {
        discountContainer.innerHTML = `<img src="../icn/icn-discount-20.svg" alt="20% discount">`;
      } else if (product.discount === 10) {
        discountContainer.innerHTML = `<img src="../icn/icn-discount-10.svg" alt="10% discount">`;
      }
    }
  }
};

// Function to calculate discounted price
const calculateDiscountedPrice = (product) => {
  const discountPercentage = product.discount / 100;
  const discountedPrice = product.price * (1 - discountPercentage);
  return discountedPrice.toFixed(2);
};


// Initial render on page load
renderProducts(products);



//FILTERS
// Function to handle dropdown change in PRODUCTS
const handleDropdownChange = () => {
  let selectedArray;

  // Check which option is selected
  if (document.getElementById("id11").checked) {
    // Most popular
    selectedArray = shuffleArray(products);
  } else if (document.getElementById("id12").checked) {
    // Highest price
    selectedArray = [...products].sort((a, b) => b.price - a.price);
  } else if (document.getElementById("id13").checked) {
    // Lowest price
    selectedArray = [...products].sort((a, b) => a.price - b.price);
  } else {
    // Default: no option selected
    selectedArray = products;
  }

  // Render the selected array
  renderProducts(selectedArray);

  // Close the dropdown after a short delay
  setTimeout(() => {
    dropdown.classList.remove("open");
    list.style.maxHeight = null;
    list.style.boxShadow = null;
  }, 100);
};


const dropdownOptions = document.querySelectorAll(".radio");
dropdownOptions.forEach((option) => {
  option.addEventListener("change", handleDropdownChange);
});


renderBtnCart();

