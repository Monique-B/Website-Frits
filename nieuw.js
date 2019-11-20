/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

const button = document.querySelector("nav button");
const aside = document.querySelector("body > aside");

button.addEventListener("click", function(){
    aside.classList.toggle('is-shown');
});

/* Bijles Maikel Sleebos
