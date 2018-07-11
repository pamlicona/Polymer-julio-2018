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
    nombreEmail.push({nombre:`${person.name.first} ${person.name.last}`,
                      email:`${person.email}`,
                      img:`${person.picture.medium}`,
                      gender: `${person.gender}`});
  }
  return nombreEmail;
}

function innerHtml(nomEmails){
  for(let person of nomEmails){
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
  }
}
