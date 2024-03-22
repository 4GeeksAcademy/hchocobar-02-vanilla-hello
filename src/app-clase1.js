/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Tab } from "bootstrap";


window.onload = function () {
  // Write your code here
  let cohort = 'Spain 65'  // string
  let age = 35  // int

  let person1 = {
    name: 'Joe',
    age: 35,
    sports: ['futbol', 'tennis', 'hockey'],
    gender: 'male'
  };
  let person2 = {
    name: 'Jane',
    age: 30,
    sports: ['paddle', 'ping pong', 'boxeo', 'balon cesto', 'golf'],
    gender: 'female'
  };
  let person3 = {
    name: 'Jimmy',
    age: 8,
    sports: ['jugar', 'rugby', 'running'],
    gender: 'male'

  };

  let family = [person1, person2, person3, person1]  // Array de Objetos

  // Mostar todos los deportes de cada integrante de la familia
  family.map((item) => {
    console.log(item.name)
    item.sports.map((element) => {
      // console.log('-' + element)
    })
  })


  // family.map((item) => { console.log(item.sports[1]) })

  // Capturo el parrrafo con id 'list' y lo almaceno en la variable tag
  // para poder gestionarlo / manipularlo
  const tag = document.querySelector('#list')
  tag.className = 'text-primary alert-danger p-4'   // cambiamos las clases del parrafo

  let text = ''
  family.map((item) => {
    // ejemplo 1: concatenación
    // text += '<h2 class="text-danger">' + item.name + ' ' + item.age + '</h2>'

    // ejemplo 2: template literal (planillas literales)
    text += `<h2 class="text-danger">${item.name}, ${item.age}: ${item.gender}</h2>`
    text += '<ul class="list-group">'
    item.sports.map((element) => {
      // text += '<li class="list-group-item">' + element + '</li>'
      text += `<li class="list-group-item">${element}</li>`
    })
    text += '</ul>'
  })

  tag.innerHTML = text
  console.log(tag.innerHTML)

  const myCard = document.querySelector('#card')
  console.log(myCard)

  let textHTML = ''
  family.map((item, id) => {
    textHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${item.gender}</h6>
      <p class="card-text">Edad: ${item.age}</p>
      <p class="card-text">Deportes: ${item.sports}</p>
    </div>
  </div>
    `

  })
  myCard.innerHTML = textHTML
};


// Como acceder a distitos tipos de datos: Objeto, Array