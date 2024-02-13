// FUNCIONES.js

// Declare productsCart in a broader scope
let productsCart = [];

// Function to save productsCart to localStorage
const saveProdCartLS = () => {
    localStorage.setItem("cart", JSON.stringify(productsCart));
}

const loadProdCartLS = () => {
  const loadedData = JSON.parse(localStorage.getItem("cart")) || [];
  return loadedData;
}


const seeSelectedProd = (id) => {
  const product = searchSelectedProd(id);
  localStorage.setItem("product", JSON.stringify(product));
  location.href = "product.html";
}

// funcion para cargar del json
const loadSelectedProd = () => {
  return JSON.parse(localStorage.getItem("product"));
  // si no existe que me tire un array vacío
}

//si esta el item en el carrito sumar 1 a cantidad, sino, q lo agregue x primera vez

const inCart = (id) => {
  const productsCart = loadProdCartLS();
  //el some es como el find pero devuelve T o F array.some(item.name => item.name == "Juan")
  return productsCart.some(item => item.id === id);
}


//ATENCION! necesito antes poner el inCart
  // funcion con parametro id del product, para que busque en el array y devuelva para agregarlo al array
  
  const addCart = (id) => {
    // Retrieve the array of products from local storage
    const products = loadProdLS();
    productsCart = loadProdCartLS(); // Retrieve the cart from local storage

    console.log("Products from LS:", products);
    console.log("Cart from LS before adding:", productsCart);

    // Check if the product is already in the cart
    const existingProduct = productsCart.find(item => item.id === id);

    if (existingProduct) {
        // If the product is already in the cart, increment its amount
        existingProduct.amount += 1;
    } else {
        // If the product is not in the cart, find it in the products array
        const productToAdd = products.find(item => item.id === id);
        // Set its amount to 1
        productToAdd.amount = 1;
        // Add it to the cart
        productsCart.push(productToAdd);
    }

    console.log("Cart after adding:", productsCart);

    // Save the updated cart back to local storage
    saveProdCartLS(productsCart);

    // Update the UI to reflect the changes
    renderBtnCart();
}

const deleteProd = (id) => {
  const updatedProductsCart = productsCart.filter(item => {
      const match = item.id === Number(id);
      return !match;
  });
  productsCart = updatedProductsCart;
  saveProdCartLS();
  renderProdCart();
  renderBtnCart();
}

  const emptyCart = () => {
    //al clickear deberia llamar al metodo renderProdCart y actualizar el carrito
      localStorage.removeItem("cart");
      renderProdCart();
      renderBtnCart();
    //al vaciar puede mostrar cartel q diga q no se encontraron products: hay q validar renderProdCart
    }


// Agrego carrito en la navbar
  
  // creo funcion que devuelva la amount de items
  
  const totalItemsCart = () => {
    //reduce el array a un unico valor (para obtener un resultado total. PARAMETROS: acumulador, valor inicial del acumulador)
    const productsCart = loadProdCartLS();
    //pongo += para q reconozca cdo tenes mas de 1 de algun item
    return productsCart.reduce((total, item) => total += item.amount, 0);
  }
  
  const totalPriceCart = () => {
    const productsCart = loadProdCartLS();
    return productsCart.reduce((total, item) => total += item.amount * item.price, 0);
  }

const renderBtnCart = () => {
  let output =  `<button type="button" class="btn position-relative">
                  <img class="btn-cart" src="../icn/icn-cart-dark.svg"> 
                  <span class="position-absolute badge bg-danger">${totalItemsCart()}</span>
                </button>`;
  document.getElementById("btn-cart").innerHTML = output;
}

renderBtnCart();

//agregar item del producto al carrito
const addItemProd = (id) => {
  const productsCart = loadProdCartLS();
  let pos = productsCart.findIndex(item => item.id === id);
  productsCart[pos].amount += 1;
  saveProdCartLS(productsCart);
  renderProdCart();
  renderBtnCart();
}

const deleteItemProd = (id) => {
  const productsCart = loadProdCartLS();
  let pos = productsCart.findIndex(item => item.id === id);
  productsCart[pos].amount -= 1;

  if (productsCart[pos].amount === 0) {
    deleteProd(id);
  } else {
    saveProdCartLS(productsCart);
    renderProdCart();
    renderBtnCart();
  }
}

const searchSelectedProd = (id) => {
  const products = loadProdLS();
  return products.find(item => item.id === id);
}


