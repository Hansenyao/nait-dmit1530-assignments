document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("hamburger-menu-links");

    /* Show/Hide hamburger menu navigation */
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
