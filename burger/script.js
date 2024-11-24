
let menuIcon = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click",function (){
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
};