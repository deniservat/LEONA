// Event listener for category filter from index
document.querySelectorAll(".btn-category").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-category")) {
        const selectedCategory = event.target.id;
        // Redirect to products.html with the category as a query parameter
        window.location.href = `pages/products.html?category=${selectedCategory}`;
      }
    });
  });
  