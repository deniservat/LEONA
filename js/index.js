//NEWSLETTER
/* $.ajax({
    url: "https://formsubmit.co/ajax/deniservat@gmail.com",
    method: "POST",
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    dataType: "json"
}); */

//MAKE BG DARK WHEN SCROLLING OVER LIGHT SECTION

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function updateNavbarBackground() {
        const sections = document.querySelectorAll(".section-light, .section-dark");

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 50 && rect.bottom >= 50) {
                if (section.classList.contains("section-light")) {
                    navbar.classList.add("navbar-scroll-light");
                    navbar.classList.remove("navbar-scroll-dark");
                } else if (section.classList.contains("section-dark")) {
                    navbar.classList.add("navbar-scroll-dark");
                    navbar.classList.remove("navbar-scroll-light");
                }
            }
        });
    }

    document.addEventListener("scroll", updateNavbarBackground);
});



