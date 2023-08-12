/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Título
  let myTitle=document.querySelector('#title')  // 1. Capturo el elemento html y se lo asigno a una variable
  myTitle.innerHTML="Intro JavaScript"  // 2. Cambio la propiedad de la variable (innerHTML)
  // Párrafo de alert
  let myParagraph=document.querySelector('#paragraph')
  myParagraph.innerHTML="Desarrollo de un ejemplo para capturar elementos html y cambiar su contenido"

  // Defino los objetos person...
  let person1 = {
    name: "Joe",
    lastname: "Doe",
    age: 35,
    gender: 'male',
    sports: ["rugby","golf"],
  };
  let person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 30,
    gender: "female",
    sports: ["running", "tennis", "surf"],
  };
  let person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 8,
    gender: "male",
    sports: ["soccer", "paddle", "boxing"],
  };
  let person4 = {
    name: "Janeth",
    lastname: "Doe",
    age: 5,
    gender: "male",
    sports: ["clambing", "yoga"],
  };
  // Defino los arrays de conjuntos de persons
  let family = [person1, person2, person3, person4]
  let children = [person3, person4]
  let parents = [person1, person2]


  function allSports(people) {
    // let results = [];
    let results ="";
    for (const indexPeople in people) {
      const element = people[indexPeople];
      // console.log('person: ', i)
      for (const indexSports in element.sports) {
        const item = element.sports[indexSports];
        // console.log('sports:', j)
        // results.push(item)
        results += "<li class='list-group-item'>" + item + ' <i class="fas fa-heart text-danger"></i></li>'
        // console.log(results)
      }
    }
    return results;
  }

  // Muestro el resultado de mi array
  let myList = document.querySelector('#sports-list')
  myList.innerHTML = allSports(family)
  console.log("Hello Rigo from the console! escrito por Hector");
};
