// JavaScript Document

// Menu-tevoorschijn
var hamburgerMenu = document.querySelector(".header-nav li:first-of-type");

hamburgerMenu.addEventListener("click", menuSlide); 

function menuSlide(){
    let menuVerstop = document.querySelector(".menu-hidden"); 

    menuVerstop.classList.add("menu-show"); 
    document.body.style.overflow = "hidden";
}

// Menu weer weg 

var sluitKruisje = document.querySelector(".menu-sluiten");

sluitKruisje.addEventListener("click", sluitHetMenu); 

function sluitHetMenu(){
    let menuSluit = document.querySelector(".menu-hidden"); 

    menuSluit.classList.remove("menu-show");
    document.body.style.overflow = "scroll"; 
}

// dark-mode // 


var darkModeButton = document.querySelector("footer button");

darkModeButton.addEventListener("click", MaakHetDonker); 

function MaakHetDonker(){
    let ditMoetDonker = document.querySelector("body"); 

    ditMoetDonker.classList.toggle("dark-mode"); 
}
