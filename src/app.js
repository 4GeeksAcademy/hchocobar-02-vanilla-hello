/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Write your code here
  let cohorte = 'Spain-72';  // Type: string
  console.log(cohorte);

  let excuse = document.querySelector('#excuse');
  excuse.innerHTML = cohorte;
};
