// Function to shuffle an array (for most popular)
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// linkeo con el contenedor
let container = document.querySelector("#products-js");
let fragment = document.createDocumentFragment();

//Updated renderProducts function
const renderProducts = (selectedArray) => {
  container.innerHTML = ""; // Clear previous products

  for (const product of selectedArray) {
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
};

// Initial render on page load
renderProducts(products);


// Function to handle dropdown change
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
};

const dropdownOptions = document.querySelectorAll(".radio");
dropdownOptions.forEach((option) => {
  option.addEventListener("change", handleDropdownChange);
});

renderBtnCart();





//FILTERS
//CATEGORY
// Function to handle category filters
const handleCategoryFilter = (category) => {
  const categoryProducts = products.filter((product) => product.category === category);
  handleDropdownChange();
  renderProducts(categoryProducts);

  let filterExists = document.getElementById("filter-exists");
  filterExists.innerHTML = `<div class="filter-selected"> 
    <h5 class="filter-selected-name">${category}</h5>
    <img class="filter-delete" src="../icn/icn-close.svg" width="24">
  </div>`;
};

// Event listeners for category filters
const categoryElements = document.querySelectorAll(".ul-value li");
categoryElements.forEach((element) => {
  element.addEventListener("click", () => {
    categoryElements.forEach((el) => el.classList.remove("selected"));
    element.classList.add("selected");
    handlePriceFilter();
    handleCategoryFilter(element.id);
  });
});

// Event listener for filter deletion
document.addEventListener("click", (event) => {
  if (event.target && event.target.className === "filter-delete") {
    event.target.closest(".filter-selected").remove();
    handlePriceFilter();
    handleCategoryFilter(getSelectedCategory());
  }
});

// Function to handle price filter
const handlePriceFilter = () => {
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");

  const minPriceValue = parseFloat(minPriceInput.value);
  const maxPriceValue = parseFloat(maxPriceInput.value);

  let filteredProducts = products; // Declare filteredProducts at the beginning

  // Apply category filter
  const selectedCategory = getSelectedCategory();
  if (selectedCategory) {
    filteredProducts = products.filter((product) => product.category === selectedCategory);
  }

  // Apply minimum price filter
  if (!isNaN(minPriceValue)) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPriceValue);
  }

  // Apply maximum price filter
  if (!isNaN(maxPriceValue)) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPriceValue);
  }

/*   if (min !== "") {
    let filterExists = document.getElementById("filter-exists");
    filterExists.innerHTML = `<div class="filter-selected"> 
      <h5 class="filter-selected-name">${filterText}</h5>
      <img class="filter-delete" src="../icn/icn-close.svg" width="24">
    </div>`;
  } */

  // Apply dropdown sorting
  handleDropdownChange();


  // Render the filtered products
  renderProducts(filteredProducts);
};

// Helper function to get the selected category
const getSelectedCategory = () => {
  const categoryElements = document.querySelectorAll(".ul-value li");
  for (const categoryElement of categoryElements) {
    if (categoryElement.classList.contains("selected")) {
      return categoryElement.id;
    }
  }
  return null;
};

// Event listeners for price inputs
document.getElementById("min-price").addEventListener("input", handlePriceFilter);
document.getElementById("max-price").addEventListener("input", handlePriceFilter);

// Updated event listeners for category filters
categoryElements.forEach((element) => {
  element.addEventListener("click", () => {
    categoryElements.forEach((el) => el.classList.remove("selected"));
    element.classList.add("selected");
    handlePriceFilter();
  });
});

// Initial render on page load
handlePriceFilter();

//COLOR
// Event listeners for color filters
const colorElements = document.querySelectorAll("#color .filter-value");
colorElements.forEach((element) => {
  element.addEventListener("click", () => {
    const selectedColor = element.id;
    const matchingProducts = products.filter((product) => product.color === selectedColor);

    if (matchingProducts.length > 0) {
      // Show matching products
      handleDropdownChange(); // Apply dropdown sorting
      renderProducts(matchingProducts);

      // Apply price and category filters
      handlePriceFilter();
      const selectedCategory = getSelectedCategory();
      if (selectedCategory) {
        const filteredProducts = matchingProducts.filter((product) => product.category === selectedCategory);
        renderProducts(filteredProducts);
      }
    } else {
      // No matching products, display a message
      container.innerHTML = ""; // Clear previous products

      const notFoundMessage = document.createElement("div");
      notFoundMessage.className = "container-not-found";
      notFoundMessage.innerHTML = `<h5 class="filter-value align-center">Ooops! Looks like we don't have any <strong>${selectedColor}</strong> products available at the moment.</h5>`;

      container.appendChild(notFoundMessage);
    }
  });
});

// Function to update the amount of products for each color filter
const updateColorAmount = () => {
  const colorElements = document.querySelectorAll("#color .filter-value");

  colorElements.forEach((element) => {
    const selectedColor = element.id;
    const matchingProducts = products.filter((product) => product.color === selectedColor);
    const amountElement = document.getElementById(`${selectedColor}-amount`);
    amountElement.textContent = matchingProducts.length;
  });
};

// Call the function initially and whenever the products array changes
updateColorAmount();
