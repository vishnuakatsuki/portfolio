// ================= DARK MODE =================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    // Remove this after testing
    // alert("Button Clicked!");

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});


// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing-text");

const roles = [
    "Java Developer",
    "Spring Boot Developer",
    "Frontend Developer"
];

let index = 0;

setInterval(() => {

    typingText.textContent = roles[index];

    index++;

    if (index === roles.length) {
        index = 0;
    }

}, 2000);


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ================= SCROLL ANIMATION =================

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

});