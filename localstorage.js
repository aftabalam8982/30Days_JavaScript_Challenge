// LOCAL STORAGE AND SESSION STORAGE

// Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
/*
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
  console.log(localStorage.name);
};

setLocalStorage("name", "Aftab");
*/
// Task 2: Write a script to save an object to localStorage by converting it to a json string. Retrieve and parse the object, then log it.
/*
const setAndGetLocalStorage = (obj) => {
  const obj1 = JSON.stringify(obj);
  localStorage.setItem("person", obj1);
  const getOBJ = localStorage.getItem("person");
  console.log(JSON.parse(getOBJ));
};

setAndGetLocalStorage({ name: "aftab", age: 27 });

*/
// Using LocalStorage

// Task 3: Create a simple form that saves user input (eg, name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
// Task 4: Write a script to remove an item from localStorage. log the localStorage content before and after removal.
/*
const inp = document.getElementsByTagName("input");
const sub = document.getElementById("form");

let inputData = {};
const handleChange = (ele) => {
  ele.addEventListener("input", (event) => {
    const { name, value } = event.target;
    inputData[name] = value;
  });
};

Array.from(inp).forEach((ele) => {
  handleChange(ele);
});

sub.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("data", JSON.stringify(inputData));
  console.log(localStorage);
  localStorage.clear();
  console.log(localStorage.getItem('data'));
});
*/
// Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
// sessionStorage.setItem("name", "aftab");
// console.log(sessionStorage);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const data = {
  name: "aftab",
  age: 38,
  address: "Delhi",
};

const setDataToSessionStorage = (data) => {
  sessionStorage.setItem("personData", JSON.stringify(data));
  const getStorage = sessionStorage.getItem("personData");
  console.log(JSON.parse(getStorage));
};

// setDataToSessionStorage(data);

// Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g, name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

const inp = document.getElementsByTagName("input");
const sub = document.getElementById("form");

let inputData = {};
const handleInputChange = (ele) => {
  ele.addEventListener("input", (event) => {
    const { name, value } = event.target;
    inputData[name] = value;
  });
};

Array.from(inp).forEach((ele) => {
  handleInputChange(ele);
});

sub.addEventListener("submit", (event) => {
  event.preventDefault();
  sessionStorage.setItem("data", JSON.stringify(inputData));
  console.log(sessionStorage);
  sessionStorage.clear();
  console.log(sessionStorage);
});
