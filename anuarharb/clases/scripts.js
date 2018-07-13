'use strict';

// let dog = {
//   sound: "woof",
//   talk: function() {
//     console.log(this.sound);
//   }
// }
// let cat = {
//     sound: "miau"
// }
// dog.talk();
// let talkFunction = dog.talk;
// let bindFunction = talkFunction.bind(cat);
// bindFunction();
//
// let talk = function() {
//   console.log(this.name, this.sound);
// }
//
// let krilin = {
//   name: "krilin",
//   sound: "Gokuuuuu!",
//   talk: talk
// }
//
// let goku = {
//   name: "goku",
//   sound: "te mataré Frizer!",
//   talk
// }
//
// // talk();
// krilin.talk();
// goku.talk();
// goku.talk.bind(krilin)();
//
//
//

// let sayayin = {
//   raza: "Sayayin",
//   goSuper: function() {
//     console.log(this.name, 'ahhhh! Super Sayayin');
//   }
// }
//
// let goku = {
//   name: "Goku",
//   sound: "Te mataré Frizer!"
// }
//
// Object.setPrototypeOf(goku, sayayin);
//
// goku.goSuper();


// function Sayayin(name) { // constructor
//   this.name = name;
// }
// //
// Sayayin.prototype.goSuper = function() {
//   console.log(this.name, 'super Sayayin!')
// }
// //
// let vegeta = new Sayayin('Vegeta');
// //
// console.log(vegeta);
//
//
// // new
// function spawn(constructor) {
//   let obj = {};
//   Object.setPrototypeOf(obj, constructor);
//   return constructor.apply(obj, arguments);
// }

//
//
//
// let dog = { raza: "labrador" }
// let myDog = { name: " Croqueta" }
//
// Object.setPrototypeOf(myDog, dog);


//
(function es5Class() {

  function Persona(name) {
    this.name = name;
  }
  Persona.prototype.sayName = function() {
    console.log(this.name);
  }
  var person = new Persona('Dave');
  persona.sayName();
})



  class Persona {
    constructor(name) {
      this.name = name;
    }

    sayName() {
      console.log(this.name);
    }
  }
  const person = new Persona('Diego');
  person.sayName();
