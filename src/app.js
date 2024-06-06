/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function () {
  console.log('hello');
  newCard()
};

function newCard() {
  let suits = ['♦', '♥', '♠', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  document.querySelector('#top').innerHTML = suits[indexSuits]
  document.querySelector('#number').innerHTML = numbers[indexNumbers]
  document.querySelector('#end').innerHTML = suits[indexSuits]

  // Cuando suits sea '♦' o '♥' cambiar la clase de top y end a text-danger
  let colorSuit = false ? "text-danger" : "text-dark"
  document.querySelector('#top').className = colorSuit
  document.querySelector('#number').className = colorSuit
  document.querySelector('#end').className = colorSuit

  console.log('new card', indexSuits, indexNumbers)
}