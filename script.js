console.log("hello")

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".hamburger-nav__menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("hej")
})