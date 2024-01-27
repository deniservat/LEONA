let menuButton = document.getElementById("menu");
let sidebar;

const openSidebar = () => {
    sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.innerHTML = `<img class="icn-close" src="./icn/icn-close.svg">
    <ul class="sidebar-ul">
        <a href="./index.html"><li class="sidebar-li">Home</li></a>
        <a href="./pages/products.html"><li class="sidebar-li">Shop</li></a>
        <a href="#about"><li class="sidebar-li">About us</li></a>
        <a href="./pages/products.html"><li class="sidebar-li">Our partner stores</li></a>
        <a href="./index.html"><li class="sidebar-li">FAQ</li></a>
        <a href="./index.html"><li class="sidebar-li">Contact</li></a>
    </ul>
    <div class="sidebar-social">
        <a href=""><img class="sidebar-social-icn" src="./icn/icn-ig.svg" alt="instagram icon"></a>
        <a href=""><img class="sidebar-social-icn" src="./icn/icn-tw.svg" alt="twitter icon"></a>
        <a href=""><img class="sidebar-social-icn" src="./icn/icn-linkedin.svg" alt="linkedin icon"></a>       
    </div>`;

    document.body.appendChild(sidebar);

    // Add a click event listener to the close button
    const closeButton = sidebar.querySelector(".icn-close");
    closeButton.addEventListener("click", closeSidebar);

    // Use setTimeout to ensure the sliding effect works
    setTimeout(() => {
        // Add the 'sidebar-open' class to trigger the sliding animation
        sidebar.classList.add("sidebar-open");
    }, 0);
};

const closeSidebar = () => {
    // Reset the menu button class and remove the sidebar element
    menuButton.className = "icn-burger";
    sidebar.classList.remove("sidebar-open");
    
    // Wait for the transition to complete before removing the element
    sidebar.addEventListener("transitionend", () => {
        document.body.removeChild(sidebar);
    }, { once: true });
};

document.addEventListener("DOMContentLoaded", function() {
    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Burger icon clicked");
        openSidebar();
    });
});