let menuButton = document.getElementById("menu");

const openSidebarPages = () => {
    let sidebarPages = document.createElement("div"); // Declare sidebarPages locally
    sidebarPages.className = "sidebarPages";
    sidebarPages.innerHTML = `<img class="icn-close" src="../icn/icn-close.svg">
    <ul class="sidebar-ul">
        <a href="../index.html"><li class="sidebar-li">Home</li></a>
        <a href="./products.html"><li class="sidebar-li">Shop</li></a>
        <a href="../index.html"><li class="sidebar-li">About us</li></a>
        <a href="./products.html"><li class="sidebar-li">Our partner stores</li></a>
        <a href="./faq.html"><li class="sidebar-li">FAQ</li></a>
        <a href="./contact.html"><li class="sidebar-li">Contact</li></a>
    </ul>
    <div class="sidebar-social">
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-ig.svg" alt="instagram icon"></a>
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-tw.svg" alt="twitter icon"></a>
        <a href=""><img class="sidebar-social-icn" src="../icn/icn-linkedin.svg" alt="linkedin icon"></a>       
    </div>`;

    document.body.appendChild(sidebarPages);

    // Add a click event listener to the close button
    const closeButton = sidebarPages.querySelector(".icn-close");
    closeButton.addEventListener("click", () => {
        closeSidebarPages(sidebarPages);
    });

    // Use setTimeout to ensure the sliding effect works
    setTimeout(() => {
        // Add the 'sidebar-open' class to trigger the sliding animation
        sidebarPages.classList.add("sidebarPages-open");
    }, 0);
};

const closeSidebarPages = (sidebar) => {
    // Reset the menu button class and remove the sidebar element
    menuButton.className = "icn-burger-dark";
    sidebar.classList.remove("sidebarPages-open");
    
    // Wait for the transition to complete before removing the element
    sidebar.addEventListener("transitionend", () => {
        document.body.removeChild(sidebar);
    }, { once: true });
};

document.addEventListener("DOMContentLoaded", function() {
    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Burger icon clicked");
        openSidebarPages();
    });
});
