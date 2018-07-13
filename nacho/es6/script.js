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
<<<<<<< HEAD
    nombreEmail.push({nombre:`${person.name.first} ${person.name.last}`,
                      email:`${person.email}`,
                      img:`${person.picture.medium}`,
                      gender: `${person.gender}`});
=======
    nombreEmail.push( new PersonCard(person.gender,
                                     person.location.city,
                                     person.dob.age,
                                     person.cell,
                                     person.picture.medium));
>>>>>>> 4e780759426e41cb22a3dc37cc6397f17c004ff0
  }
  return nombreEmail;
}

function innerHtml(nomEmails){
  for(let person of nomEmails){
<<<<<<< HEAD
    SECTION_CARDS.innerHTML += `
    <article class="cards__article ${person.gender}">
      <picture>
        <img class="cards__img" src="${person.img}" alt=" " media="(min-width:650px)"/>
        <source src="${person.img}" media="(max-width:650px)"/>
      </picture>
      <h1 class="article__name">
        ${person.nombre}
      </h1>
      <h1 class="article__email">
        ${person.email}
      </h1>
    </article>
    `;
=======
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
>>>>>>> 4e780759426e41cb22a3dc37cc6397f17c004ff0
  }
}
