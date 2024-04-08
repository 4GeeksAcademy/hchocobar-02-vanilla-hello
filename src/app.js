/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
  let suits = ['♦', '♥', '♠', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  // Mostrar los palos y los números
  document.querySelector('#top').innerHTML = suits[indexSuits];
  document.querySelector('#end').innerHTML = suits[indexSuits];
  document.querySelector('#number').innerHTML = numbers[indexNumbers];
  // Mostrar los colores adecuados
  let newColor = suits[indexSuits] == '♦' || suits[indexSuits] == '♥' ? 'text-danger' : 'text-dark';
  document.querySelector('#top').className = newColor;
  document.querySelector('#end').className = newColor;
  document.querySelector('#number').className = newColor;
  console.log('hola')
}

setInterval(() => newCard(), 5000)

document.querySelector('#newCard').addEventListener('click', () => newCard())

window.onload = function () {newCard();};
