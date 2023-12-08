/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const person1 = {
    name: 'Joe',
    age: 35,
    sports: ['Hockey', 'Soccer', 'Baseball'],
    image: ''
  }
  const person2 = {
    name: 'Jane',
    age: 30,
    sports: ['Tennis', 'Basketball', 'Voleyball', 'Bike'],
    image: ''
  }
  const person3 = {
    name: 'Jimmy',
    age: 5,
    sports: ['Jugar', 'Correr'],
    image: ''
  }
  let family = {
    lastName: 'Doe',
    member: [person1, person2, person3]
  }
  
  const tag = document.querySelector('#app')  // document.getElementById('app')
  /* 
  console.log('Result');
  console.log(family.member[0].name)
  console.log(family.member[1].name)
  console.log(family.member[2].name)
  console.log(family.member[0].sports[1])
  console.log(family.member[2].sports[0])
  console.log(family.member)
  */
  family.member.map((item) => {
    // Utilizando concatenación
    tag.innerHTML += '<h2 class="text-start mt-4">' + item.name + ', ' + item.age + ' years old' + '</h2>'
    tag.innerHTML += '<ul class="list-group">'
    /* console.log(item.name) */
    item.sports.map((element) => {
      // Utilizando string literal
      tag.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
          <div>${element}</div>
          <div>
            <span class="mx-1"><i class="far fa-eye"></i></span>
            <span class="mx-1"><i class="far fa-edit"></i></span>
            <span class="mx-1"><i class="fas fa-trash-alt text-danger"></i></span>
          </div>
        </li>`
      /* console.log('-', element) */
    })
    tag.innerHTML += '</ul>'
  })
  /* console.log(tag.innerHTML); */
  // tag.innerHTML = '<ul><li>Hockey</li><li>Soccer</li><li>Baseball</li></ul>'
};
