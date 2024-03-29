
// Define a variable to store selected filters
let selectedFilters = { category: [], color: [], minPrice: undefined, maxPrice: undefined };

const renderSelectedFilters = () => {
  let filterExists = document.getElementById("filter-exists");
  filterExists.innerHTML = ""; // Clear previous filters

  for (const category of selectedFilters.category) {
    appendFilter("category", category);
  }

  for (const color of selectedFilters.color) {
    appendFilter("color", color);
  }

  if (selectedFilters.minPrice !== undefined) {
    appendFilter("min. price", `£${selectedFilters.minPrice.toFixed(2)}`);
  }

  if (selectedFilters.maxPrice !== undefined) {
    appendFilter("max. price", `£${selectedFilters.maxPrice.toFixed(2)}`);
  }

  // Append search input value if it exists
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  if (searchInput) {
    appendFilter("search", searchInput);
  }
};

// Function to append filter div
const appendFilter = (filterType, filterValue) => {
  let filterExists = document.getElementById("filter-exists");
  let filterLabel = document.createElement("div");
  filterLabel.className = "filter-selected";

  if (filterType === "min. price" || filterType === "max. price") {
    filterLabel.innerHTML = `<h5 class="filter-selected-name">${filterType}: ${filterValue}</h5>
        <img class="filter-delete" src="../icn/icn-close.svg" width="24">`;
  } else {
    filterLabel.innerHTML = `<h5 class="filter-selected-name">${filterValue}</h5>
        <img class="filter-delete" src="../icn/icn-close.svg" width="24">`;
  }

  filterExists.appendChild(filterLabel);

  // Add event listener to delete the filter on click
  filterLabel.querySelector(".filter-delete").addEventListener("click", () => {
    // Remove the filter from selectedFilters
    removeFilter(filterType, filterValue);
    // Re-render selected filters and products based on updated filters
    renderSelectedFilters();
  });
};

// Function to remove filter
const removeFilter = (filterType, filterValue) => {
  let filterExists = document.getElementById("filter-exists");

  // Remove filter from selectedFilters
  if (filterType === "search") {
    document.getElementById("search-bar").value = ""; // Clear search input
  } else if (filterType === "min. price" || filterType === "max. price") {
    selectedFilters.minPrice = undefined;
    selectedFilters.maxPrice = undefined;
  } else {
    if (filterType === "category") {
      selectedFilters.category = selectedFilters.category.filter((cat) => cat !== filterValue);
    } else if (filterType === "color") {
      selectedFilters.color = selectedFilters.color.filter((col) => col !== filterValue);
    }
  }

  // Re-render selected filters and products based on updated filters
  renderSelectedFilters();

  // Re-render products based on updated filters
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
    product.color.some((color) => selectedFilters.color.includes(color))
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
renderProducts(getFilteredProducts());



//UPDATE COLOR AMOUNT AND CATEGORY AMOUNT
  
// Function to update the amount of products for each color filter
const updateColorAmount = () => {
  const colorElements = document.querySelectorAll("#color .filter-value");

  colorElements.forEach((element) => {
    const selectedColor = element.id;
    const matchingProductsColor = products.filter((product) =>
      product.color.includes(selectedColor)
    );
    const amountElementColor = document.getElementById(`${selectedColor}-amount`);
    amountElementColor.textContent = matchingProductsColor.length;
  });
};

// Call the function initially and whenever the products array changes
updateColorAmount();


//BUTTON ACTION FROM INDEX
// Function to extract query parameters from the URL
const getQueryParam = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Extract category query parameter from the URL
const categoryFromQueryParam = getQueryParam("category");

// Filter products based on the category from the query parameter
if (categoryFromQueryParam) {
  selectedFilters.category.push(categoryFromQueryParam);
  renderProducts(getFilteredProducts());
  // Render selected filters after filtering products
  renderSelectedFilters();
}

//SEARCH BAR

// Function to handle search
function handleSearch() {
  // Get the search input value
  const searchInput = document.getElementById("search-bar").value.toLowerCase();

  // Filter products based on search input
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput);
    const descriptionMatch = product.description.toLowerCase().includes(searchInput);
    const categoryMatch = product.category.toLowerCase().includes(searchInput);
    const colorMatch = product.color.some((color) => color.toLowerCase().includes(searchInput));

    return nameMatch || descriptionMatch || categoryMatch || colorMatch;
  });

  // Render the filtered products
  renderProducts(filteredProducts);

  // Render selected filters including the search input
  renderSelectedFilters();
}


// Event listener for search button click
document.getElementById("btn-search").addEventListener("click", function (e) {
  e.preventDefault();
  handleSearch();
})

// Event listener for Enter key press on search input
document.getElementById("search-bar").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});





