/* eslint-disable */
import "bootstrap";
import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

function newCard() {
    let suits = ['♦', '♥', '♠', '♣'];
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    // Generamos indíces aleatorios
    let indexSuits = Math.floor(Math.random() * suits.length);
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    // Capturar .top .number .end
    let top = document.querySelector('#top');
    let number = document.querySelector('#number');
    let end = document.querySelector('#end');
    // Asigno los valores a innerHTML
    top.innerHTML = suits[indexSuits];
    end.innerHTML = suits[indexSuits];
    number.innerHTML = numbers[indexNumbers];
    // Determinamos el color
    let currentClass = suits[indexSuits] == '♦' || suits[indexSuits] == '♥' ? ' text-danger' : 'text-dark';
    top.className = currentClass;
    end.className = currentClass;
    number.className = currentClass;
}


window.onload = function() {
  // Write your code here
  newCard()
  console.log("Hello Rigo from the console!");
};


setInterval(() => newCard(), 5000);


let btnNewCard = document.querySelector('#btnNewCard');
btnNewCard.addEventListener('click', () => {
  newCard();
});
