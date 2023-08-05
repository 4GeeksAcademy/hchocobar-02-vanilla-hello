/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Write your code here
  let person1 = {
    name: "Joe",
    lastname: "Doe",
    age: 35,
    gender: "male",
    sports: ["rugby", "golf"],
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

  let family = [person1, person2, person3, person4]
  // console.log(family[0].sports[0]);
  let children = [person3, person4]
  let parents = [person1, person2]
  console.log(parents)

  function allSports(people) {
    let results = [];

    for (const i in people) {
      const element = people[i];
      console.log('person: ', i)

      for (const j in element.sports) {
        const item = element.sports[j];
        console.log('sports:', j)
        results.push(item)
        // console.log(results)
      }
    }
    return results;
  }

  console.log(allSports(parents))

  console.log("Hello Rigo from the console! escrito por Hector");
};
