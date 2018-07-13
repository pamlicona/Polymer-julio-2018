'use strict';

const API_URL = 'https://randomuser.me/api/?results=10';

fetch(API_URL)
  .then(resp => resp.json())
  .then(resp => {
    createCards(resp.results)
  })

let createCards = resp => {
  const section = document.querySelector('.section')
  for(let item of resp) {
    section.innerHTML += `
    <article class="section__card">
      <div class="secction__image">
        <img src=${item.picture.medium}>
      </div>
      <div class="section__info">
        <p class="capital">${item.name.first} ${item.name.last}</p>
        <p>${item.email}</p>
      </div>
    </article>
    `
  }
}
