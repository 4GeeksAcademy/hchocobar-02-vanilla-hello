/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Write your code here
  console.log('hola mundo')

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  // Using for length
  let textFor = '<ul class="list-group">'
  textFor += '<li class="list-group-item bg-success text-light">Using for length</li>'
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        textFor += '<li class="list-group-item">' + i + '-' + pronoun[i] + j + '-' + adj[j] + k + '-' + noun[k] + '</li>'
      }
    }
  }
  textFor += '</ul>'
  document.querySelector('#for').innerHTML = textFor;


  // Using for of
  let textOf =  '<ul class="list-group">'
  textOf += '<li class="list-group-item bg-success text-light">Using for of</li>'

  for (const iterator of pronoun) {
    for (const item of adj) {
      for (const element of noun) {
        textOf += `
          <li class="list-group-item">
            ${iterator}${item}${element}.com
          </li>`
      }
    }
  }
  textOf += '</ul>'
  document.querySelector('#of').innerHTML = textOf;


  // Using method .map()
  let textMap = '<ul class="list-group">'
  textMap += '<li class="list-group-item bg-success text-light">Using .map()</li>'

  pronoun.map((iterator) => {
    adj.map((item) => {
      noun.map((element) => {
        textMap += `
          <li class="list-group-item">
            ${iterator}${item}${element}.com
          </li>
        `
      })
    })
  })

  textMap += '</ul>';
  document.querySelector('#map').innerHTML = textMap;


};
