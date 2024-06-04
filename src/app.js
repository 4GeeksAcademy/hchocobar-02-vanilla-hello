/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // 1. Declarar el listado de tareas
  const todos = [
    {
      "name": "Jhon",
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "name": "George",
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "name": "George",
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 5,
      "title": "laboriosam mollitia et enim quasi",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 6,
      "title": "qui ullam ratione quibusdam",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "name": "George",
      "id": 10,
      "title": "illo est ratione doloremque quia",
      "completed": true
    },
  ]
  console.log(todos);

  // 2. Generar la lista de tareas tomando como base el array todos y lo almaceno en una varible tipo string
  let todosHTML = ''
  todos.map((item) => {
    todosHTML += `
      <li key=${item.id} class="list-group-item d-flex justify-content-between">
        <div>${item.name} <i class="fas fa-wine-glass-alt text-info"></i> ${item.title}</div>
        <div>
          ${item.completed ? `
            <span class="mx-1"><i class="far fa-check-circle text-success"></i></span>
          ` 
          : `
            <span class="mx-1"><i class="far fa-times-circle text-danger"></i></span>
          `}
          <span class="mx-1"><i class="fas fa-trash-alt text-danger"></i></span>
        </div>
      </li>
    `
  })

  // 3. Capturar la <ul> con id todos
  let tag = document.querySelector('#todos')
  console.log(tag.innerHTML)
  tag.innerHTML = todosHTML

};


// Operador Ternario
// condicion ? valor_x_verdadero : valor_x_falso
