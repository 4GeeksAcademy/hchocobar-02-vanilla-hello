  var person = {
    name: "John",                // String
    lastname: "Doe",
    age: 35,                     // Number
    gender: "male",
    lucky_numbers: [7, 11, 13, 17], // Array
    significant_other: person2  // Object, yes the same variable/object defined after
  };

  var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [2, 4, 6, 8],
    significant_other: person
  };

  var person3 = {
    name: 'Jimmy',
    lastname: 'Doe',
    age: 13,
    gender: "male",
    lucky_numbers: [1, 2, 3, 4],
    significant_other: null
  };

  var family = {
    lastname: "Doe",
    members: [person, person2, person3]  // Array of objects, don't forget to add Jimmy
  };


  function addAllFamilyLuckyNumbers(anArray) {
    let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    for (let i = 0; i < anArray.length; i++) {
      for (let x = 0; x < anArray[i].lucky_numbers.length; x++) {
        sumOfAllLuckyNumbers += anArray[i].lucky_numbers[x];
        // Muestro un console.log en cada iteración
        console.log('i:', i, 'x:', x, anArray[i], anArray[i].lucky_numbers[x], sumOfAllLuckyNumbers )
      }
    }
    // To-Do: loop and add; consider nested loops
    // Hint: use the anArray variable to get all of the lucky numbers

    return sumOfAllLuckyNumbers;
  }
  // Enter all your code here:
  
  // Do not make changes below:
  console.log(addAllFamilyLuckyNumbers(family.members));


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