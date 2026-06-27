const themebutton = document.getElementById("theme-toggle");
themebutton.addEventListener("click", () => {
    alert("Button Clicked!");
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themebutton.textContent = "☀️";
    } else {
        themebutton.textContent = "🌙";
    }
});
const typingtext=document.getElementById("typing-text");
const roles=[
    "java Developer",
    "Spring boot Developer",
    "Frontend Developer"
];
let index=0;
setInterval(()=>{
    typingtext.textContent=roles[index];
    index++;
    if(index==roles.length){
        index=0;
    }
},2000);
const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
const hiddenElements =
document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach((element) => {

        const top =
        element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

});