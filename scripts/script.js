// JavaScript Document
var menuButton = document.querySelector(".nav-menu");

menuButton.addEventListener('click', menuSlide); 

function menuSlide(){
    let hetMenu = document.querySelector(".toggle"); 
    hetMenu.classList.toggle(".toonMenu");
}