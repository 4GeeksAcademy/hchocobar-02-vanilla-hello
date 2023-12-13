/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Start: domain name generator
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  // Start: Inicio textHTML con todos los elementos que quiero mostrar
  var textHTML = '<ul class="list-group">';
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let q = 0; q < noun.length; q++) {
        /* 
        const elementI = pronoun[i];
        const elementJ = adj[j];
        const elementQ = noun[q];
        let domainName = elementI + elementJ + elementQ + ".com";
         */
        let domainName = pronoun[i] + adj[j] + noun[q] + ".com";
        textHTML += '<li class="list-group-item">' + domainName + '</li>';
      }
    }
  }
  textHTML += "</ul>";
  // End: Finalizo el armado textHTML
  let element = document.querySelector('#domain');  // Capturo el elemento HTML #domain
  element.innerHTML = textHTML;  // Modifico la propiedad innerHTML del elemento
  // End: domain name generator
};
