function handleSearch() {

    // Set dropdown to default
    document.querySelector(".input-box").value = "default";
  
    // Reset filters to default
    selectedFilters = { category: [], color: [], minPrice: undefined, maxPrice: undefined };
    renderSelectedFilters();
  
    // Get the search input value
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    // Check if the search input is not empty
    if (searchInput) {
        // Redirect to the product page with the search query
        window.location.href = `pages/products.html?search=${encodeURIComponent(searchInput)}`;
      }
  
    // Filter products based on search input
    const filteredProducts = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchInput);
      const descriptionMatch = product.description.toLowerCase().includes(searchInput);
      const categoryMatch = product.category.toLowerCase().includes(searchInput);
      const colorMatch = product.color.toLowerCase().includes(searchInput);
  
      return nameMatch || descriptionMatch || categoryMatch || colorMatch;
    });
  
    // Render the filtered products
    renderProducts(filteredProducts);
  }

