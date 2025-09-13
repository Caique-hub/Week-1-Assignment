"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
printCharacterNames(users);
function printCharacterNames(characters) {
  characters.forEach((character) => {
    console.log(character.name);
    const listItem = document.createElement("li");
    listItem.textContent = character.name;
    document.getElementById("names-list").appendChild(listItem);
  });
}

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
printCharacterNames(users);
function printYoungCharacterNames(characters) {
  characters.forEach((character) => {
    if (character.age < 40) {
      console.log(character.name);
      const listItem = document.createElement("li");
      listItem.textContent = character.name;
      document.getElementById("young-characters-list").appendChild(listItem);
    }
  });
}

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
renderCharacterNames(users, "function-list");
function renderCharacterNames(characters, listId) {
  characters.forEach((character) => {
    console.log(character.name);
    const listItem = document.createElement("li");
    listItem.textContent = character.name;
    document.getElementById(listId).appendChild(listItem);
  });
}

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderYoungCharacters(characters, ageThreshold) {
  characters.forEach((character) => {
    if (character.age < ageThreshold) {
      console.log(character.name);
      const listItem = document.createElement("li");
      listItem.textContent = character.name;
      document.getElementById("age-filter-list").appendChild(listItem);
    }
  });
}

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

function printCharacterNames(characters) {
  characters.forEach((character) => {
    if (!character.name) {
      console.error("Character object is missing 'name' property:", character);
      const errorItem = document.createElement("div");
      errorItem.textContent = "Error: Character object is missing 'name' property.";
      document.getElementById("error-messages").appendChild(errorItem);
      return;
    }
    console.log(character.name);
    const listItem = document.createElement("li");
    listItem.textContent = character.name;
    document.getElementById("names-list").appendChild(listItem);
  });
}

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

const brokenUsers = [
  { id: 1, age: 23 },
  { id: 2, name: null, age: 45 },
  { id: 3, age: 30 },
  { id: 4, name: undefined, age: 57 },
  { id: 5, age: 900 }
];


document.getElementById("broken-array-errors").innerHTML = "";
function printBrokenCharacterNames(characters) {
  characters.forEach((character) => {
    if (!character.name) {
      console.error("Character object is missing 'name' property:", character);
      const errorItem = document.createElement("div");
      errorItem.textContent = "Error: Character object is missing 'name' property.";
      document.getElementById("broken-array-errors").appendChild(errorItem);
      return;
    }
    console.log(character.name);
    const listItem = document.createElement("li");
    listItem.textContent = character.name;
    document.getElementById("broken-array-errors").appendChild(listItem);
  });
}


printBrokenCharacterNames(brokenUsers);
