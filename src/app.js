/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
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

  // Muestro el resultado de mi array
  let myList = document.querySelector('#sports-list')
  myList.innerHTML = allSports(parents)

  let name = ["Carlos", "Elisa", "Gonzalo", "Guillermo", "Héctor", "Joel", "Luis", "Mathew", "Romina"]
  let street = ["Caballero de Gracia", "Álvarez Gato", "Cervantes", "Echegaray", "la Berenjena", "las Huertas", "Lope de Vega", "Moratín", "San Sebastián"]
  let number = ["879", "6845", "1458", "8547", "357", "4489", "135", "1107", "1752"]
  let city = ["Madrid", "Barcelona", "Cadiz", "Gerona", "Bilbao", "Cordoba", "Sevilla", "Valencia", "Badajoz", 'Ripol']
  let zipcode = ["28004", "08003", "11006", "17002", "48014", "14009", "41001", "46002", "06004"]

  // cuando todos los arrays tienen el mismo largo
  let listAddress = '<h1 class="text-primary">Lista de Direcciones</h1>'
  // inicio la card
  for (const index in name) {
    // let address = name[index] + ' vive en la calle ' + street[index] + ' ' + number[index] + '</br> en la ciudad ' + city[index]+ ', cp: ' + zipcode[index];
    listAddress += '<div class="card mt-2" style="width: 18rem;">';
    listAddress += '<div class="card-body">';
    listAddress += `<h5 class="card-title">${name[index]}</h5>`;
    listAddress += `<h6 class="card-subtitle mb-2 text-body-secondary">${city[index]}</h6>`
    listAddress += `<p class="card-text">${street[index]} vive en ${number[index]}</p>`
    listAddress += `<a href="#" class="card-link">${zipcode[index]}</a>`
    listAddress += '<a href="#" class="card-link">Another link</a>'
    listAddress += '</div>'
    listAddress += '</div>'
  }
  // fin de card

  // capturamos el div #address
  let htmlListAddress = document.querySelector('#address')
  htmlListAddress.innerHTML = listAddress
  console.log(listAddress);
  
  // preguntas: donde vive?
  let firstname = ["Carlos", "Elisa", "Gonzalo", "Guillermo", "Héctor", "Joel", "Luis", "Mathew", "Romina"]
  let region = ["Madrid", "Barcelona", "Cadiz", "Gerona", "Bilbao", "Cordoba", "Sevilla", "Valencia", "Badajoz", 'Ripol']
  let age = ["28", "8", "11", "17", "48", "14", "41", "46", "6"]

  let counter = 0;
  let htmlOptions = '<h1 class="text-primary">Lista de Opciones</h1><ul class="list-group">';
  for (const i in firstname) {
    for (const j in region) {
      const element = firstname[i];
      const item = region[j];
      counter ++;
      htmlOptions += '<li class="list-group-item">Opción: ' + counter + ' ' + element + ' vive en '+ item + '?' +  '</li>'
      console.log('Opción: ' + counter + ' ' + element + ' vive en '+ item +'?');
        
      }
    }
  htmlOptions += '</ul>'
  // capturar un elemento html para mostrar
  let myOptions = document.querySelector('#options');
  myOptions.innerHTML = htmlOptions;


  console.log("Hello Rigo from the console! escrito por Hector");
};
