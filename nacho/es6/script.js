const API_USER = 'https://randomuser.me/api/?results=10';
const SECTION_CARDS = document.querySelector('.cards');

//var persons = [];

fetch(API_USER)
  .then(data => data.json())
  .then(persons => extracNombre(persons.results))
  .then(nomEmail => innerHtml(nomEmail));

function extracNombre(persons){
  let nombreEmail = [];
  for(let person of persons){
    nombreEmail.push( new PersonCard(person.gender,
                                     person.location.city,
                                     person.dob.age,
                                     person.cell,
                                     person.picture.medium));
  }
  return nombreEmail;
}

function innerHtml(nomEmails){
  for(let person of nomEmails){
    SECTION_CARDS.innerHTML += person.createFormatData();
  }
}

class PersonCard {
  constructor(gender,city,age,phone,img) {
    this.gender = gender;
    this.city = city;
    this.age = age;
    this.phone = phone;
    this.img = img;
  }
  createFormatData(){
    return `<article class="cards__article ${this.gender}">
              <img class="cards__img" src="${this.img}" alt=" " />
              <h1 class="article__gender">
                ${this.gender}
              </h1>
              <h1 class="article__city">
                ${this.city}
              </h1>
              <h1 class="article__age">
                ${this.age}
              </h1>
              <h1 class="article__phone">
                ${this.phone}
              </h1>
            </article>
            `;
  }
}
