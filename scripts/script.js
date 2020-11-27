// JavaScript Document
var hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", menuSlide); 

function menuSlide(){
    let menuVerstop = document.querySelector(".menu-hidden"); 

    menuVerstop.classList.toggle("menu-show"); 
}