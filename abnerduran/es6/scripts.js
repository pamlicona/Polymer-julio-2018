'use strict';

const API = 'https://randomuser.me/api/?results=10'
const SECTION_CARDS = document.querySelector('.cards');

(function() {
    fetch(API)
    .then(
        response => {
            checkStatus(response);
            // Examine the text in the response
            response.json().then(function (data) {
                printCards(data.results);
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error', err);
    });
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

class ContactCard {

    constructor(gender, city, age, phone) {
        this.gender = gender;
        this.city = city;
        this.age = age;
        this.phone = phone;
    }

    addCard() {
        SECTION_CARDS.innerHTML += `
        <div class="card">
            <div class="person">
                <ul>
                    <li><span>Gender:</span> ${this.gender}</li>
                    <li><span>City:</span> ${this.city}</li>
                    <li><span>Age:</span> ${this.age}</li>
                    <li><span>Phone:</span> ${this.phone}</li>
                </ul>
            </div>
        </div>`;
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