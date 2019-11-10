/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

const header = document.querySelector('body > header');
const li = document.querySelector('header > li');

li.addEventListener('click', function() {
  header.classList.toggle('show');
});
