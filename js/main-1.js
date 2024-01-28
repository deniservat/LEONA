//FILTERS
//CATEGORY
// Function to handle category filters

const filterProducts = (selectedArray) =>{
    //!AGREGAR un all.  
    //si click en una categoria => ACUMULAR div con evento close+remove filter y render newArray, sumado a los otros filtros existentes de categoria, precio y color, ademas del orden seleccionado.
    //si input min price es != a Nan, y max price = Nan,ACUMULAR div, y render new Array, sumado a los otros filtros existentes de categoria, precio y color, ademas del orden seleccionado.
    //si input min price es != a Nan, y max price != Nan, ACUMULAR div min+max price, y render new Array, sumado a los otros filtros existentes, ademas del orden seleccionado.
    //si input max price es != a NaN, y min price = Nan,  ACUMULAR div, y render new Array, sumado al filtro de categoria y precio existentes, ademas del orden seleccionado.
    //si input max price es != a NaN, y min price != Nan, ACUMULAR div min+max price, y render new Array, sumado al filtro de categoria y precio existentes, ademas del orden seleccionado.
    //si click en un color, ACUMULAR div y render newArray, sumado a los otros filtros existentes de categoria, precio y color, ademas del orden seleccionado.

//ADD FILTER DIV
const addFilterDiv = () =>{
    let filterExists = document.getElementById("filter-exists");
    filterExists.innerHTML += `<div class="filter-selected"> 
    <h5 class="filter-selected-name">${category}</h5>
    <img class="filter-delete" src="../icn/icn-close.svg" width="24">
    </div>`;    
    }
}

//REMOVE FILTER DIV

let btnDelete = document.querySelectorAll(".filter-delete");
btnDelete.addEventListener("click", (e) => {
    if (filterExists) {
        filterExists.innerHTML -= `<div class="filter-selected"> 
                                    <h5 class="filter-selected-name">${category}</h5>
                                    <img class="filter-delete" src="../icn/icn-close.svg" width="24">
                                    </div>`;
    handleDropdownChange();
    handlePriceFilter();
    handleCategoryFilter();
    handleColorFilter();
}});

    //CATEGORY
const handleCategoryFilter = () => {
    handleDropdownChange();
    handlePriceFilter();
    handleColorFilter();
    let categoryFilters = document.querySelectorAll(".ul-value li");
    for (let category of categoryFilters){
        category.addEventListener("click", () => {
            const categoryProducts  = selectedArray.filter((product) => product.category === category.id);
            renderProducts(categoryProducts);
            addFilterDiv();
        });
    }
}

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


}