'use strict';

const API = 'https://randomuser.me/api/?results=10'
const SECTION_CARDS = document.querySelector('.cards');

(function() {
    fetch(API)
    .then( response => response.json() )
    .then( response => printCards(response.results) )
    .catch( err => console.log('Fetch Error', err) )
})();


let checkStatus = (response) => {
    if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
    }
}

let printCards = (persons) => {
    for (const person of persons) {
        const persona = new ContactCard(person.gender, person.location.city, person.registered.age, person.phone);
        persona.addCard();
    }
}

// let printCards = (persons) => {
//     let section_cards = document.querySelector('.cards');
//     console.log(persons);

//     for (const person of persons) {
//         section_cards.innerHTML += `
//         <div class="\card\">
//             <div class="\person\">
//                 <div class="\image\">
//                 <img src="${person.picture.thumbnail}" alt ="\${person.name.first}\">
//                 </div>
//                 <div class="\data\">
//                     <p class="\name\">${person.name.first} ${person.name.last}</p>
//                     <p class="\email\">${person.email}</p>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
// }