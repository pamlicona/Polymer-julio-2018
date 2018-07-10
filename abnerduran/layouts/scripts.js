'use strict';

const hamburguerMenu = document.querySelectorAll('.header__nav__menu_icon');
const sidenav = document.querySelector('.header__nav_content');

for(let button of hamburguerMenu) {
  button.addEventListener('click', showSidenav);
}

function showSidenav(event) {
  sidenav.classList.toggle('hidden');
}