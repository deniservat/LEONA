let menuButton = document.getElementById("menu");
let sidebar;

const openSidebar = () => {
    sidebar = document.createElement("div");
    sidebar.className = "sidebarPages";
    sidebar.innerHTML = `<div class="container-icn-close"><img class="icn-close-sidebar" src="../icn/icn-close.svg"></div>
    <ul class="sidebar-ul">
        <a href="../index.html"><li class="sidebar-li">Home</li></a>
        <a href="./products.html"><li class="sidebar-li">Shop</li></a>
        <a href="../index.html"><li class="sidebar-li">About us</li></a>
        <a href="./products.html"><li class="sidebar-li">Our partner stores</li></a>
        <a href="./faq.html"><li class="sidebar-li">FAQ</li></a>
        <a href="./contact.html"><li class="sidebar-li">Contact</li></a>
        <div class="sidebar-social">
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-ig.svg" alt="instagram icon"></a>
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-tw.svg" alt="twitter icon"></a>
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-linkedin.svg" alt="linkedin icon"></a>       
        </div>
    </ul>`;

    document.body.appendChild(sidebar);

    // Use setTimeout to ensure the sliding effect works
    setTimeout(() => {
        // Add the 'sidebar-open' class to trigger the sliding animation
        sidebar.classList.add("sidebar-open");
    }, 0);
};

const closeSidebar = () => {
    // Reset the menu button class
    menuButton.className = "icn-burger";
    
    // Add the 'sidebar-closing' class to trigger the sliding-out animation
    sidebar.classList.add("sidebar-closing");

    // Wait for the transition to complete before removing the element
    sidebar.addEventListener("transitionend", () => {
        document.body.removeChild(sidebar);
    }, { once: true });
};

document.addEventListener("click", (event) => {
    const closeButton = event.target.closest(".icn-close-sidebar");
    if (closeButton) {
        event.preventDefault();
        console.log("Close button clicked");
        closeSidebar();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Burger icon clicked");
        openSidebar();
    });
});