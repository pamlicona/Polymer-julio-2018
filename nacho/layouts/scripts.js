'use strict';

//const sidenavButtons = document.querySelectorAll('.header__button');
const sidenav = document.querySelector('.sidenav');
/*
for(let button of sidenavButtons) {
  button.addEventListener('click', showSidenav);
}
*/
function showSidenav(event) {
  sidenav.classList.add('sidenav__mobil__open');
}


function openNav(){
  sidenav.classList.remove('sidenav__mobil__close');
  sidenav.classList.add('sidenav__mobil__open');
}

function closeNav() {
    sidenav.classList.remove('sidenav__mobil__open');
    sidenav.classList.add('sidenav__mobil__close');
}
