const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav");
const icon = document.querySelector(".menu-icon i");

// click
menuIcon.addEventListener("click", () => {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
        navMenu.classList.add("active");
    } else {    
        icon.classList.replace("fa-xmark", "fa-bars");
        navMenu.classList.remove("active");
    }
});