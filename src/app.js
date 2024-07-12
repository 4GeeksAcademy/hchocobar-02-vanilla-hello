/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Write your code here
  let person1 = {
    name: 'Manuel',
    lastname: 'Ramirez',
    age: 41,
    gender: 'male',
    sports: ['futbol', 'beisball', 'basquet', 'tennis']
  }

  let person2 = {
    name: 'Mariana',
    lastname: 'Hueck',
    age: 36,
    gender: 'female',
    sports: ['spinning', 'musculación', 'funcional']
  }

  let person3 = {
    name: 'Kleiner',
    lastname: 'García',
    age: 22,
    gender: 'male',
    sports: ['hockey', 'rugby']
  }

  let person4 = {
    name: 'Hector',
    lastname: 'Chocobar',
    age: 42,
    gender: 'male',
    sports: ['rugby', 'golf', 'futbol']
  }

  let family = [person1, person2, person3, person4]

  
  let tag = document.querySelector('#mensaje');
  let listHTML = '';
 
  family.map((item) => {
    console.log(item);
    listHTML += '<li class="list-group-item text-primary">' + item.name + ' ' + item.lastname +  '</li>';
    console.log(listHTML);
  });

  tag.innerHTML = listHTML

  console.log(tag.innerHTML);

};
