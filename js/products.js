//SEARCHBAR

var input = document.querySelector(".input-box");
input.onclick = function () {
    this.classList.toggle("open");
    let list = this.nextElementSibling;
    if (list.style.maxHeight) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
    } else {
         list.style.maxHeight = list.scrollHeight + "px";
        list.style.boxShadow =
        "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
        }
};

var rad = document.querySelectorAll(".radio");
rad.forEach((item) => {
item.addEventListener("change", () => {
input.innerHTML = item.nextElementSibling.innerHTML;
input.click();
});
});

// PRODUCTOS.js

const products = [
    { id: 1, name: "Radiant Glow Kit", price: 24.99, category: "kits", amount: 0, description: "Illuminate your skin with this all-natural kit for a radiant and healthy complexion. Perfect for everyday use." },
    { id: 2, name: "Revitalizing Serum", price: 16.99, category: "skin", amount: 0, description: "Nourish and rejuvenate your skin with our revitalizing serum. Experience a natural glow and hydration every day." },
    { id: 3, name: "Enchanting Eyes Palette", price: 19.99, category: "eyes", amount: 0, description: "Create mesmerizing eye looks with our enchanting eyes palette. Natural shades for stunning and long-lasting beauty." },
    { id: 4, name: "Luscious Lips Balm", price: 8.69, category: "lips", amount: 0, description: "Achieve soft and luscious lips with our natural lip balm. Hydrate and enhance your smile effortlessly." },
    { id: 5, name: "Hydrating Skin Elixir", price: 22.99, category: "skin", amount: 0, description: "Experience the ultimate hydration with our skin elixir. Lock in moisture for a supple and healthy complexion." },
    { id: 6, name: "Natural Beauty Essentials Kit", price: 29.99, category: "kits", amount: 0, description: "Discover the essentials for a natural beauty routine. Achieve a flawless look with our curated beauty kit." },
    { id: 7, name: "Vibrant Eyes Liner", price: 12.99, category: "eyes", amount: 0, description: "Define and highlight your eyes with our vibrant eyes liner. Achieve a bold and natural look effortlessly." },
    { id: 8, name: "Organic Lip Tint", price: 5.99, category: "lips", amount: 0, description: "Add a touch of color with our organic lip tint. Nourish your lips while enhancing your natural beauty." },
    { id: 9, name: "Glowing Skin Mask", price: 15.99, category: "skin", amount: 0, description: "Treat your skin to a spa day with our glowing skin mask. Rejuvenate and reveal a radiant complexion." },
  ];
  

  
  // creo local storage para alojar los productos
  
  // función para guardar
  const saveProdLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  // función para cargar del localStorage
  const loadProdLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
    // si no existe que me tire un array vacío
  };
  
  // ni bien cargue la página, que ejecute la localStorage de productos
  
  saveProdLS(products);
  
  // ahora aparecen en consola, en almacenamiento, pero todavía no están renderizados
  
  // MAIN.js (va a lo último)
  
  // linkeo con el contenedor
  let container = document.querySelector("#products-js");
  let fragment = document.createDocumentFragment();
  
  for (const product of products) {
    let card = document.createElement("div");
    card.className = "col-xs-12 col-md-4 p-0 m-0";
    card.innerHTML = `<div class="product-card">
    <div class="container-image">
      <a class="wrapper" onClick="seeProduct(${product.id})">
        <div class="parent d-center">
          <div class="child" style="background-image: url(../img/img-prod-${product.id}.jpg);"></div>
        </div>
      </a>
      <a class="btn-add d-center" onClick="addCart(${product.id})">
        <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="btn-add-bg" d="M0 18C0 8.05887 8.05887 0 18 0H30C39.9411 0 48 8.05887 48 18V41H0V18Z"/>
          <path d="M24 14V32" stroke="#282828" stroke-width="2"/>
          <path d="M15 23H33" stroke="#282828" stroke-width="2"/>
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


  
  // FUNCIONES.js
  
  // agregar productos al carrito: creo otra LS de los prod q el usuario agrega
  
const productsCart = [];

  // funcion para guardar
  const saveProdCartLS = (productsCart) => {
    localStorage.setItem("cart", JSON.stringify(productsCart));
  }
  
  // funcion para cargar del json
  const loadProdCartLS = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
    // si no existe que me tire un array vacío
  }
  
const seeProduct = (id) => {
    const product = searchProduct(id);
    localStorage.setItem("product", JSON.stringify(product));
    location.href = "product.html";
}

// Agrego carrito en la navbar
  
  // creo funcion que devuelva la cantidad de items
  
  const totalItemsCart = () => {
    //reduce el array a un unico valor (para obtener un resultado total. PARAMETROS: acumulador, valor inicial del acumulador)
    const productsCart = loadProdCartLS();
    return productsCart.reduce((total, item) => total + item.amount, 0);
  }
  
  const totalPriceCart = () => {
    const productsCart = loadProdCartLS();
    return productsCart.reduce((total, item) => total + item.price, 0);
  }

const renderBtnCart = () => {
  let output =  `<button type="button" class="btn btn-warning position-relative">
  <img class="btn-cart" src="../icn/icn-cart-dark.svg"> 
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalItemsCart()}</span>
</button>`;
  document.getElementById("btn-cart").innerHTML = output;
}

//ATENCION! necesito antes poner el totalItemsCart
renderBtnCart();

  // funcion con parametro id del producto, para que busque en el array y devuelva para agregarlo al array
  
  const addCart = (id) => {
    // recupero el array del carrito
    const products = loadProdLS();
    const productsCart = loadProdCartLS();
  
    //ATENCION! tengo q haber cargado la fn inCart()
    if (inCart(id)) {
      //obtener el indice de un elemento del array. Parametro: el elemento q queremos buscar. miArray.indexOf('objeto de mi array')
        let pos = productsCart.findIndex(item => item.id === id);
        productsCart[pos].amount += 1;
    } else {
        // agrego el prod id
        const product = products.find(item => item.id === id);
        product.amount = 1;
        productsCart.push(product);
    }
  
    saveProdCartLS(productsCart);
    // agregar
    renderBtnCart();
  }

 












  