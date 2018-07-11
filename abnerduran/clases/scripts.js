// 'use strict';

// let dog = {
//     sound: "woof",
//     talk: function () {
//         console.log(this.sound);
//     }
// }

// let cat = {
//     sound: "miau"
// }

// dog.talk();

// let talkFunction = dog.talk;

// // talkFunction();

// let bindFunction = talkFunction.bind(dog);
// let bindFunctionCat = talkFunction.bind(cat);

// bindFunction();
// bindFunctionCat();

// let sayayin = {
//     raza: "Sayayin",
//     goSuper: () => console.log(this.name, 'Ahh! Super sayayin')
// }

// let goku = {
//     name: "Goku",
//     sound: "Te mataré Freezer"
// }

// Object.setPrototypeOf(goku, sayayin);

// goku.goSuper();


// class Sayayin {
//     constructor(name) {
//         this.name = name;
//     }
//     static goSuper() {
//         console.log(this.name);
//     }
// }
            
function Sayayin(name) { // Constructor
    this.name = name;
}

Sayayin.prototype.goSuper = function() {
    console.log(this.name);
}

let vegeta = new Sayayin('Vegeta');
vegeta.goSuper();

console.log(vegeta);
