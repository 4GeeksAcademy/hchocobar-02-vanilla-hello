/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Write your code here
  let cohorte = 'Spain-72';  // Type: string
  // Muestro las excucas en html
  let excuse = document.querySelector('#excuse');
  excuse.innerHTML = myExcuse();
  // Muestro los dominios en html
  let domain = document.querySelector('#domains');
  domain.innerHTML = domainGenerator();
};


function myExcuse(params) {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  // Genero los indices aleatorios
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let WhatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  // console.log(whoIndex, actionIndex, WhatIndex, whenIndex)
  // let text = `${who[whoIndex]} ${action[actionIndex]} ${what[WhatIndex]} ${when[whenIndex]}`
  // return text ;
  return `${who[whoIndex]} ${action[actionIndex]} ${what[WhatIndex]} ${when[whenIndex]}`
};


function domainGenerator(params) {
  let pronoun = ['the', 'our', 'my'];
  let adjective = ['great', 'big', 'small'];
  let noun = ['jogger', 'racoon'];
  /* Generando con for loop */
  let textLoop = '';
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        textLoop += `<li class="list-group-item">${pronoun[i]} ${adjective[j]} ${noun[k]}</li>`
        // console.log(pronoun[i], adjective[j], noun[k]);
        // console.log(text);
      }
    }
  }
  /* Generando con for of */
  let textOf = '';
  for (const iterator of pronoun) {
    for (const item of adjective) {
      for (const element of noun) {
        textOf += `<li class="list-group-item">${iterator} ${item} ${element}</li>`
        // console.log(iterator, item, element);
      }
    }
  }
  /* Generando con .map() */
  let textMap = '';
  pronoun.map((iterator) => {
    adjective.map((item) => {
      noun.map((element) => {
        textMap += `<li class="list-group-item">${iterator} ${item} ${element}</li>`
        // console.log(iterator, item, element);
      })
    })
  })
  return textMap
}