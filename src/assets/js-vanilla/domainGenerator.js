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


  var textHTML = '<ul class="list-group">';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let q = 0; q < noun.length; q++) {
        const element_i = pronoun[i];
        const element_j = adj[j];
        const element_q = noun[q];

        let domainName = element_i + element_j + element_q + ".com";
        textHTML += '<li class="list-group-item">' + domainName + '</li>';
      }
    }
  }
  textHTML += "</ul>";
  
  let element = document.querySelector('#domain');
  element.innerHTML = textHTML;

  // End: domain name generator
};