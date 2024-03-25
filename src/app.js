/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Write your code here
  console.log('hola mundo')

  // Renderizar la lista de tareas en una ul en el div 'todos'

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

  // 2. Declarar la variable donde voy a armar el html entero
  let todosHTML = '<ul class="list-group">'
  // 2. Recorrer el array con un .map()
  todos.map((item, id) => { 

    todosHTML += item.completed ? '' : `
    <div class="alert alert-${item.completed ? 'success' : 'danger'}">
      <li class="list-group-item d-flex justify-content-between">
            <div>
              <span class="text-success">${item.name}</span>
              - ${item.title}
            </div>
            <div>
              ${!item.completed ? 
                '<span class="mx-1"><i class="far fa-check-circle text-success"></i></span>'
                : '<span class="mx-1"><i class="far fa-times-circle text-danger"></i></span>'}
              
            </div>
      </li>
    </div>
      `
    })
    todosHTML += '</ul>'
    console.log(todosHTML);



  // n. Capturar el elemento html en una variable
  const listado = document.querySelector('#todos')
  listado.innerHTML = todosHTML

  // document.getElementById('byId').innerHTML = todosHTML

};
