let menuButton = document.querySelector(".icn-burger");
let menuButtonMobile = document.querySelector(".col-nav-menu-mobile");
let sidebarPages;

const openSidebarPages = () => {
    console.log("should be opening");
    sidebarPages = document.createElement("div");
    sidebarPages.className = "sidebarPages";
    sidebarPages.innerHTML = `<div class="container-icn-close"><img class="icn-close-sidebar" src="../icn/icn-close.svg"></div>
    <ul class="sidebar-ul">
        <a href="./index.html"><li class="sidebar-li">Home</li></a>
        <a href="./pages/products.html"><li class="sidebar-li">Shop</li></a>
        <a href="#about"><li class="sidebar-li">About us</li></a>
        <a href="./pages/products.html"><li class="sidebar-li">Our partner stores</li></a>
        <a href="./index.html"><li class="sidebar-li">FAQ</li></a>
        <a href="./index.html"><li class="sidebar-li">Contact</li></a>
        <div class="sidebar-social">
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-ig.svg" alt="instagram icon"></a>
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-tw.svg" alt="twitter icon"></a>
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-linkedin.svg" alt="linkedin icon"></a>       
    </div>
    </ul>`;

    document.body.appendChild(sidebarPages);

    sidebarPages.classList.add("sidebar-open");
};

const closeSidebarPages = () => {
    // Reset the menu button class
    menuButton.className = "icn-burger";
    menuButtonMobile.className = "icn-burger";
    
    // Add the 'sidebar-closing' class to trigger the sliding-out animation
    sidebarPages.classList.add("sidebar-closing");

    // Use animationend event instead of transitionend
    sidebarPages.addEventListener("animationend", () => {
        document.body.removeChild(sidebarPages);
    }, { once: true });
};

document.addEventListener("click", (event) => {
    const closeButton = event.target.closest(".icn-close-sidebar");
    if (closeButton) {
        event.preventDefault();
        console.log("Close button clicked");
        closeSidebarPages();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Burger icon clicked");
        openSidebarPages();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    menuButtonMobile.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Burger icon clicked");
        openSidebarPages();
    });
});