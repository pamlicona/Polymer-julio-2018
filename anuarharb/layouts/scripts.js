'use strict';

const sidenavButtons = document.querySelectorAll('.header__button');
const sidenav = document.querySelector('.sidenav');

for(let button of sidenavButtons) {
  button.addEventListener('click', showSidenav);
}

function showSidenav(event) {
  sidenav.classList.toggle('hidden');
}
