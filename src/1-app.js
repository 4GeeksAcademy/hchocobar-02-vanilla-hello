/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Write your code here
  let cohorte = 'Spain-72';  // Type: string
  let age = 35;  // Type: nubmer

  let person1 = {
    name: 'Joe',
    age: 35,
    lastname: 'Doe',
    sports: ['futbol', 'running', 'atletismo']
  };
  let person2 = {
    name: 'Jane',
    age: 27,
    lastname: 'Alvarez',
    sports: ['tennis', 'baloncesto', 'voleyball', 'natación']
  };
  let person3 = {
    name: 'Jimmy',
    age: 10,
    lastname: 'Arias',
    sports: ['rugby', 'besisball']
  };
  let person4 = {
    name: 'Betty',
    age: 8,
    lastname: 'Arevalo',
    sports: ['hockey', 'voleyball']
  };

  let family = [person1, person2, person3, person4]
  //let lista = family.map((item) => tag.innerHTML -= '<li class="list-group-item">' + item.lastname + '</li>')
  
  // Generando una variable tipo string vacía - personas
  let personas = ''
  // Recorro el array family (utilizando el método map) y agrego en cada iteración un <li> a la variable personas
  family.map((item, index) => {
    personas += '<li class="list-group-item" key="' + index + '">' + item.name + ' ' + item.age + ' ' +  item.sports[0] + '</li>'
  })
  console.log(personas)
  
  // capturo el <ul> del archivo index.html
  let tag = document.querySelector('#persons')
  // agrego el contenido de personas al innerHTML de la ul
  tag.innerHTML = personas
  // console.log(tag.innerHTML)
};