// Define a variable to store selected filters
let selectedFilters = { category: [], color: [], minPrice: undefined, maxPrice: undefined };


// Function to render selected filters
const renderSelectedFilters = () => {
  let filterExists = document.getElementById("filter-exists");
  filterExists.innerHTML = ""; // Clear previous filters

  for (const category of selectedFilters.category) {
    appendFilter("Category", category);
  }

  for (const color of selectedFilters.color) {
    appendFilter("Color", color);
  }

  if (selectedFilters.minPrice !== undefined) {
    appendFilter("Min. Price", `£${selectedFilters.minPrice.toFixed(2)}`);
  }

  if (selectedFilters.maxPrice !== undefined) {
    appendFilter("Max. Price", `£${selectedFilters.maxPrice.toFixed(2)}`);
  }
};

// Function to append filter div
const appendFilter = (filterType, filterValue) => {
  let filterExists = document.getElementById("filter-exists");
  let filterLabel = document.createElement("div");
  filterLabel.className = "filter-selected";
  filterLabel.innerHTML = `<h5 class="filter-selected-name">${filterType}: ${filterValue}</h5>
      <img class="filter-delete" src="../icn/icn-close.svg" width="24">`;
  filterExists.appendChild(filterLabel);

  // Add event listener to delete the filter on click
  filterLabel.querySelector(".filter-delete").addEventListener("click", () => {
    // Remove the filter from selectedFilters
    removeFilter(filterType, filterValue);
    // Re-render the products based on updated filters
    renderProducts(getFilteredProducts());
    // Re-render selected filters
    renderSelectedFilters();
  });
};

// Updated removeFilter function
const removeFilter = (filterType, filterValue) => {
  let filterExists = document.getElementById("filter-exists");

  // Remove only price-related filters
  if (filterType === "Min. Price" || filterType === "Max. Price") {
    let priceFilters = filterExists.querySelectorAll('.filter-min-price, .filter-max-price');
    priceFilters.forEach((filter) => {
      filter.remove();
    });

    // Update selectedFilters object with minPrice and maxPrice
    selectedFilters.minPrice = undefined;
    selectedFilters.maxPrice = undefined;
  } else {
    // Remove other filters
    let filters = filterExists.querySelectorAll(`.filter-selected-name:contains("${filterValue}")`);
    filters.forEach((filter) => {
      filter.parentElement.remove();
    });

    // Update selectedFilters object for other filters
    if (filterType === "Category") {
      selectedFilters.category = selectedFilters.category.filter((cat) => cat !== filterValue);
    } else if (filterType === "Color") {
      selectedFilters.color = selectedFilters.color.filter((col) => col !== filterValue);
    }
  }

  // Render selected filters
  renderSelectedFilters();
  // Render products based on updated filters
  renderProducts(getFilteredProducts());
};




// Function to get filtered products based on selected filters
const getFilteredProducts = () => {
  let filteredProducts = [...products];

  // Apply category filters
  if (selectedFilters.category.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedFilters.category.includes(product.category)
    );
  }

  // Apply color filters
  if (selectedFilters.color.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedFilters.color.includes(product.color)
    );
  }

  // Apply price filters
  if (selectedFilters.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= selectedFilters.minPrice);
  }

  if (selectedFilters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= selectedFilters.maxPrice);
  }

  return filteredProducts;
};




// Event listener for category filter
document.getElementById("ul-category").addEventListener("click", (event) => {
  if (event.target.classList.contains("category-li")) {
    const selectedCategory = event.target.id;
    if (!selectedFilters.category.includes(selectedCategory)) {
      // Add the selected category to the filters
      selectedFilters.category.push(selectedCategory);
      // Render updated products based on filters
      renderProducts(getFilteredProducts());
      // Render selected filters
      renderSelectedFilters();
    }
  }
});
// Event listener for color filter
document.getElementById("ul-color").addEventListener("click", (event) => {
  if (event.target.classList.contains("color-li")) {
    const selectedColor = event.target.id;
    if (!selectedFilters.color.includes(selectedColor)) {
      // Add the selected color to the filters
      selectedFilters.color.push(selectedColor);
      // Render updated products based on filters
      renderProducts(getFilteredProducts());
      // Render selected filters
      renderSelectedFilters();
    }
  }
});

// Updated handlePriceFilter function
const handlePriceFilter = () => {
  // Get min and max price values
  const minPriceInput = parseFloat(document.getElementById("min-price").value);
  const maxPriceInput = parseFloat(document.getElementById("max-price").value);

  // Check if the opposite price filter is already present
  const oppositeFilterPresent = 
    (selectedFilters.minPrice !== undefined && selectedFilters.maxPrice !== undefined) ||
    (selectedFilters.maxPrice !== undefined && selectedFilters.minPrice !== undefined);

  // Update selectedFilters object with minPrice and maxPrice
  if (!oppositeFilterPresent) {
    selectedFilters.minPrice = isNaN(minPriceInput) ? undefined : minPriceInput;
    selectedFilters.maxPrice = isNaN(maxPriceInput) ? undefined : maxPriceInput;
  } else {
    // Only update the entered input without clearing the opposite one
    if (!isNaN(minPriceInput)) {
      selectedFilters.minPrice = minPriceInput;
    }
    if (!isNaN(maxPriceInput)) {
      selectedFilters.maxPrice = maxPriceInput;
    }
  }

  // Render products based on updated filters
  renderProducts(getFilteredProducts());
  // Render selected filters
  renderSelectedFilters();

  // Clear the min-price and max-price inputs back to default
  document.getElementById("min-price").value = "";
  document.getElementById("max-price").value = "";
};

// Event listener for clicking on #icn-price-go or pressing "Enter" in #min-price or #max-price
document.getElementById("icn-price-go").addEventListener("click", handlePriceFilter);
document.getElementById("min-price").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handlePriceFilter();
  }
});
document.getElementById("max-price").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handlePriceFilter();
  }
});


// Initial render on page load
renderProducts(products);

  



  //UPDATE COLOR AMOUNT AND CATEGORY AMOUNT
  
  
  // Function to update the amount of products for each color filter
  const updateColorAmount = () => {
    const colorElements = document.querySelectorAll("#color .filter-value");
  
    colorElements.forEach((element) => {
      const selectedColor = element.id;
      const matchingProductsColor = products.filter((product) => product.color === selectedColor);
      const amountElementColor = document.getElementById(`${selectedColor}-amount`);
      amountElementColor.textContent = matchingProductsColor.length;
    });
  };
  
  // Call the function initially and whenever the products array changes
  updateColorAmount();