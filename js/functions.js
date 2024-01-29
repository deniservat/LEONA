
  // FUNCIONES.js
  
  // agregar products al carrito: creo otra LS de los prod q el usuario agrega
  
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

  const deleteProd = (id) => {
    const productsCart = loadProdCartLS();
    const products = productsCart.filter(item => item.id !== id);
    saveProdCartLS(products);
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
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalItemsCart()}</span>
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

//eliminar producto del carrito

const deleteItemProd= (id) => {
  //q me devuelva un nuevo array con todos los elementos q sean distintos al id
  const addItemProd = (id) => {
    const productsCart = loadProdCartLS();
    let pos = productsCart.findIndex(item => item.id === id);
    productsCart[pos].amount += 1;
    saveProdCartLS(productsCart);
    renderProdCart();
    renderBtnCart();
  }
  const productsCart = loadProdCartLS();
  let pos = productsCart.findIndex(item => item.id === id);
  productsCart[pos].amount -= 1;

  if (productsCart[pos].amount == 0) {
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
