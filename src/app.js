/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Declaramos la Función (definimos)
  function allSports(aFamily) {
    /* 
    // let result = [];    for (const i in aFamily) {
          const element = aFamily[i];
          // console.log('valor de i: ', i);
          // console.log(aFamily[i].sports);
          result += `<div class="card">
                        <img src=${element.image} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${element.name} ${element.lastname}</h5>
                          <p class="card-text">age ${element.age}</p>
                          <p class="card-text">gender ${element.gender}</p>
                          <ul class="list-group">`;
          for (const j in aFamily[i].sports) {
              const item = aFamily[i].sports[j];
              result += `<li class="list-group-item">${item}</li>`;
            }

          result += `</ul>
          <a href="#" class="btn btn-success">Ver detalles</a>
                  </div>
                </div>`
        } */
    let result = '';
    aFamily.map((element, id) => {
      result += `<div class="card key=${id}">
                    <img src=${element.image} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${element.name} ${element.lastname}</h5>
                      <p class="card-text">age ${element.age}</p>
                      <p class="card-text">gender ${element.gender}</p>
                      <a href="#" class="btn btn-success">Ver detalles</a>
                    </div>
                  </div>`

    })
    console.log(result);
    return result;
  }
  
  let person1 = {
    name: 'Jhon',
    image: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?size=626&ext=jpg',
    age: 35,
    lastname: 'Doe',
    gender: 'male',
    sports: ['badgminton', 'tennis', 'swimming']
  };
  let person2 = {
    name: 'Jane',
    image: 'https://img.freepik.com/foto-gratis/mujer-bastante-joven-feliz-que-presenta-camara-parque-ciudad_1262-19158.jpg',
    age: 30,
    lastname: 'Doe',
    gender: 'female',
    sports: ['basketball', 'skate',]
  };
  let person3 = {
    name: 'Jimmy',
    image: 'https://img.freepik.com/vector-gratis/lindo-nino-sonriente-feliz-aislado-blanco_1308-32243.jpg?size=626&ext=jpg&ga=GA1.1.1406716074.1697051293&semt=sph',
    age: 10,
    lastname: 'Doe',
    gender: 'male',
    sports: ['soccer', 'baseball', 'rugby']
  };
  let family = {
    lastname: 'Doe',
    members: [person1, person2, person3]
  };

  // Invocar la Función (llamarla, ejecutarla)
  // console.log(allSports(family.members))

  // Capturar un elemento HTML - tag, .class, #id
  let myTag = document.querySelector('#sports');
  myTag.innerHTML += allSports(family.members);

  console.log("Hello JavaScript from the console!");
};
