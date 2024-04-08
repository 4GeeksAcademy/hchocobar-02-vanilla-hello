/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import jobs from "./assets/js-vanilla/jobs.json";


window.onload = function () {
  let view = false;
  let formHTML = '';
  formHTML += `
    <form class="row row-cols-lg-auto g-3 align-items-center">
      <div class="col-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">Password</label>
        <div class="input-group">
          <input type=${view ? 'text' : 'password'}
            class="form-control" id="inlineFormInputGroupUsername" placeholder="Password"
          >
          <div class="input-group-text text-light ${view ? 'bg-success' : 'bg-danger'}">
            ${view ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>'}
          </div>
        </div>
      </div>
    </form>
  `;
  document.querySelector('#login').innerHTML = formHTML;

  // Ejemplo 1: Una lista de string
  let day = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  let dayHTML = '<p class="alert alert-danger">Days</p><ul class="list-group">';  // Header
  day.map((item, id) => {
        dayHTML += `<li key=${id} class="list-group-item">${item}</li>`  // Body
  });
  dayHTML += '</ul>'  // Footer
  document.querySelector('#days').innerHTML = dayHTML;


  // Ejemplo 2: Una lista de objetos renderizada en list-group
  let places = [
    {
      'city' : "Madrid",
      "zipcode" : "28004"
    },
    {
     "city": "Barcelona", 
     "zipcode" : "11006"
    },
    {
     "city": "Cadiz", 
     "zipcode" : "28004"
    },
    {
    "city": "Gerona", 
     "zipcode" : "28004"
    }
  ]
  let citiesHTML = '<p class="alert alert-warning">Cities</p><ul class="list-group text-start">';  // Header
  places.map((item, id) => {
    citiesHTML += `
      <li key=${id} class="list-group-item">
        Ciudad: ${item.city}, zipcode: ${item.zipcode}
      </li>`  // Body
  });
  citiesHTML += '</ul>'  // Footer
  document.querySelector('#cities').innerHTML = citiesHTML;


  // Ejemplo 3: Una lista de objetos renderizada en cards
  let jobsHTML = `
    <div class="container">
      <p class="alert alert-info">Jobs</p>`;
      jobs.map((item, id) => {
        jobsHTML += `
          <div key=${id} class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${item.company}</h6>
              <p class="card-text">${item.insight}</p>
              <a href="#" class="card-link">${item.time}</a>
              <a href="#" class="card-link">${item.applyMethod}</a>
            </div>
          </div>`  // body
      });
  jobsHTML += '</div>'  // footer
  document.querySelector('#jobs').innerHTML = jobsHTML;
  console.log(jobs)
};
