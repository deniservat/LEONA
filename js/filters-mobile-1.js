//RENDER FILTERS ON PAGE

let filters = document.createElement("div");
filters.innerHTML = `<div class="container-icn-close-filters"><img class="icn-close-sideFilters" src="../icn/icn-close.svg"></div>
<div id="category" class="filter">
<h2 class="filter-name">CATEGORY</h2>
<ul id="ul-category" class="ul-value p-0">
  <li id="kits" class="filter-value category-li">Kits</li>
  <li id="skin" class="filter-value category-li">Skin</li>
  <li id="lips" class="filter-value category-li">Lips</li>
  <li id="eyes" class="filter-value category-li">Eyes</li>
</ul>
</div>

<div id="price" class="filter">
<h2 class="filter-name">PRICE</h2>
<div class="container-fluid m-0 p-0">
  <div class="row">
    <div class="col p-0 m-0 me-2">
      <h3 class="filter-value-label">Min.</h3>
      <input id="min-price" class="input-filter-value min-price" placeholder="£00.00" type="text">
    </div>
    <div class="col p-0 m-0">
      <h3 class="filter-value-label">Max.</h3>
      <input id="max-price" class="input-filter-value max-price" placeholder="£00.00" type="text">
    </div>
    <div class="col p-0 m-0 align-self-end">
      <img id="icn-price-go" class="p-0" src="../icn/icn-go.svg" alt="apply filter price" width="36">
    </div>
  </div>
</div>
</div>

<div id="color" class="filter">
<h2 class="filter-name">COLOR</h2>
<ul id="ul-color" class="ul-value p-0">
  <li id="black" class="filter-value color-li">Black (<span id="black-amount">0</span>)</li>
  <li id="white" class="filter-value color-li">White (<span id="white-amount">0</span>)</li>
  <li id="yellow" class="filter-value color-li">Yellow (<span id="yellow-amount">0</span>)</li>
  <li id="blue" class="filter-value color-li">Blue (<span id="blue-amount">0</span>)</li>
  <li id="red" class="filter-value color-li">Red (<span id="red-amount">0</span>)</li>
  <li id="green" class="filter-value color-li">Green (<span id="green-amount">0</span>)</li>
  <li id="orange" class="filter-value color-li">Orange (<span id="orange-amount">0</span>)</li>
  <li id="purple" class="filter-value color-li">Purple (<span id="purple-amount">0</span>)</li>
  <li id="sand" class="filter-value color-li">Sand (<span id="sand-amount">0</span>)</li>
  <li id="grey" class="filter-value color-li">Grey (<span id="grey-amount">0</span>)</li>
</ul>
</div>`

let containerFilters = document.querySelector("#filters-laptop");

const renderFilters = () => {
  containerFilters.innerHTML = ""; // Clear previous filters
  containerFilters.appendChild(filters);
  } 

// Initial render on page load
renderFilters();


//MOBILE SIDE FILTERS

let filterButton = document.getElementById("icn-filter");

let sideFilters = document.querySelector("#filters-mobile");

const renderSideFilters = () => {
  sideFilters.innerHTML = ""; // Clear previous filters
  sideFilters.className = "sideFilters p-5";
  sideFilters.appendChild(filters.cloneNode(true));
  }

renderSideFilters();

const openSideFilters = () => {
  sideFilters.className = "sideFilters p-5";

  document.body.appendChild(sideFilters);
  console.log("filters should open");

    // Use setTimeout to ensure the sliding effect works
    setTimeout(() => {
      // Add the 'sidebar-open' class to trigger the sliding animation
      sideFilters.classList.add("sideFilters-open");
  }, 0);
};


const closeSideFilters = () => {
  // Reset the menu button class
  filterButton.className = "icn-filter";
  
  // Add the 'sidebar-closing' class to trigger the sliding-out animation
  sideFilters.classList.add("sideFilters-closing");

  // Wait for the transition to complete before removing the element
  sideFilters.addEventListener("transitionend", () => {
      document.body.removeChild(sideFilters);
  }, { once: true });
};


document.addEventListener("DOMContentLoaded", function() {
  filterButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Filter icon clicked");
      openSideFilters();
      console.log("opened");
  });
});

document.addEventListener("click", (event) => {
    const closeButton = event.target.closest(".icn-close-sideFilters");
    if (closeButton) {
        event.preventDefault();
        console.log("Close button clicked");
        closeSideFilters();
    }
});

