// Define a variable to store selected filters
let selectedFilters = { category: [], color: [] };

// Function to render selected filters
const renderSelectedFilters = () => {
  let filterExists = document.getElementById("filter-exists");
  filterExists.innerHTML = ""; // Clear previous filters

  for (const category of selectedFilters.category) {
    let filterLabelCategory = document.createElement("div");
    filterLabelCategory.className = "filter-selected filter.category";
    filterLabelCategory.innerHTML += `<h5 class="filter-selected-name">${category}</h5>
      <img class="filter-delete" src="../icn/icn-close.svg" width="24">`;
    filterExists.appendChild(filterLabelCategory);

    // Add event listener to delete the filter on click
    filterLabelCategory.querySelector(".filter-delete").addEventListener("click", () => {
      // Remove the category filter from selectedFilters
      selectedFilters.category = selectedFilters.category.filter((cat) => cat !== category);
      // Re-render the products based on updated filters
      renderProducts(getFilteredProducts());
      // Re-render selected filters
      renderSelectedFilters();
    });
  }
  for (const color of selectedFilters.color) {
    let filterLabelColor = document.createElement("div");
    filterLabelColor.className = "filter-selected filter.category";
    filterLabelColor.innerHTML += `<h5 class="filter-selected-name">${color}</h5>
      <img class="filter-delete" src="../icn/icn-close.svg" width="24">`;
    filterExists.appendChild(filterLabelColor);

    // Add event listener to delete the filter on click
    filterLabelColor.querySelector(".filter-delete").addEventListener("click", () => {
      // Remove the category filter from selectedFilters
      selectedFilters.color = selectedFilters.color.filter((cat) => cat !== color);
      // Re-render the products based on updated filters
      renderProducts(getFilteredProducts());
      // Re-render selected filters
      renderSelectedFilters();
    });
  }
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

  // Apply other filters if needed (price, color, etc.)

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
  