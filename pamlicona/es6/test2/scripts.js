'use strict';

const section = document.querySelector('.section');
const API_URL = 'https://randomuser.me/api/?results=10';

let getData = resp => {
  for(let item of resp.results) {
    let person = new People(item.gender, item.location.city, item.dob.age, item.phone, item.picture.large);
    person.createCards();
  }
}

fetch(API_URL)
  .then(resp => resp.json())
  .then(resp => {
    getData(resp)
  })

class People {
  constructor(gender, city, age, phone, image) {
    this.gender = gender;
    this.city = city;
    this.age = age;
    this.phone = phone;
    this.image = image;
  }

  createCards() {
    section.innerHTML += `
    <article class="section__card">
      <div class="secction__image">
        <img src=${this.image}>
      </div>
      <div class="section__info">
        <p class="capital">Gender: ${this.gender}</p>
        <p class="capital">City: ${this.city}</p>
        <p class="capital">Age: ${this.age}</p>
        <p class="capital">Phone: ${this.phone}</p>
      </div>
    </article>
    `
  }
}
