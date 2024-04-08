/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
    let suits = ['♦', '♥', '♠', '♣'];
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    // Generamos indíces aleatorios
    let indexSuits = Math.floor(Math.random() * suits.length);
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    // Mostramos el número y el basto
    document.querySelector('#top').innerHTML = suits[indexSuits]
    document.querySelector('#end').innerHTML = suits[indexSuits]
    document.querySelector('#number').innerHTML = numbers[indexNumbers]
    // Determinamos el color
    let currentClass = suits[indexSuits] == '♦' || suits[indexSuits] == '♥' ? ' text-danger' : 'text-dark';
    document.querySelector('#top').className = currentClass
    document.querySelector('#end').className = currentClass
    document.querySelector('#number').className = currentClass
}


window.onload = function() { newCard()};

setInterval(() => newCard(), 5000);

document.querySelector('#new-card').addEventListener('click', () => {newCard();});
