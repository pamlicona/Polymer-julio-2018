'use strict';

const API = 'https://randomuser.me/api/?results=10'

fetch(API)
    .then(
        response => {
            checkStatus(response);

            // Examine the text in the response
            response.json().then(function (data) {
                console.log(data);
                printCards(data.results);
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error', err);
    });

let checkStatus = (response) => {
    if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: response.status`);
        return;
    }
}

let printCards = (persons) => {
    let section_cards = document.querySelector('.cards');
    console.log(persons);

    for (const person of persons) {
        section_cards.innerHTML += `
        <div class="\card\">
            <div class="\person\">
                <div class="\image\">
                <img src="${person.picture.thumbnail}" alt ="\${person.name.first}\">
                </div>
                <div class="\data\">
                    <p class="\name\">${person.name.first} ${person.name.last}</p>
                    <p class="\email\">${person.email}</p>
                </div>
            </div>
        </div>
        `;
    }

    
}