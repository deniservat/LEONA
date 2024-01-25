const renderProd = () => {
    const product = loadSelectedProd();
    let output = `<article class="col-xs-12 col-md-6 text-center">
    <img src="../img/img-prod-${product.id}.jpg" alt="${product.name}" class="img-fluid" title="${product.name}" />
</article>
<article class="col-xs-12 col-md-6">
    <h1 class="selected-product-title">${product.name}</h1>
    <p class="selected-product-description">${product.description}</p>
    <p class="selected-product-price">$${product.price}</p>
    <a href="#" class="mt-5 pt-5" onClick="addCart(${product.id})" title="Add to cart">
        <button class="btn-hero mt-4" id="btn-hero">ADD TO CART</button>
    </a>
</article>`;
    document.getElementById("view-product").innerHTML = output;
}

renderProd();
renderBtnCart();

