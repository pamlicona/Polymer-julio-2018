'use strict';

const API = 'https://randomuser.me/api/?results=10';

fetch(API)
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .then(results => showResults(results))
    .catch(error => console.log("No hay internet"))

let showResults = function(results){
    console.log(results);
    
    //let htmlResults = ``;
    let personNumber = 1;
    for(let person of results){
//        htmlResults += `
//            <div class="person_item">
//                <picture>
//                    <source media="(min-width: 650px)" srcset="${person.picture.large}">
//                    <source media="(min-width: 465px)" srcset="${person.picture.medium}">
//                    <img src="${person.picture.thumbnail}" alt="Flowers" style="width:auto;">
//                </picture>
//                <div class="person_name">${person.name.title} ${person.name.first} ${person.name.last}</div>
//                <div class="person_email">${person.email}</div>
//            </div>
//        `;
        let card = new ContactCard(person, document.querySelector(`#person_item_${personNumber}`));
        card.showInfo();
        
        personNumber++;
    }
    
    //document.querySelector(".people_grid").innerHTML = htmlResults;
}