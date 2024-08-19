// Variable and datatypes

// ACTIVITY Variable Declear

//Task 1. Declear a variable using var, assign it number, and log the value.

// var num;
// num = 5;
// console.log(num);

// Task 2. Declear a variable using let, assign it a string, and log the value of string.

let str;
str = "hello world";
// console.log(str);

// ACTIVITY Constant Declaration

// Task 3. Declear a variable using const, assign it a boolean value, and log the value to the console.

const isTrue = true; // we can't assign a value in constant.
// console.log(isTrue);

// ACTIVITY Data Types

//Task 4.  Create a different dataTypes (number, boolean, string, object, array) and log each variable types using the 'typeof' operator.
const num = 7;
const boo = false;
const stre = "hello word";
const obj = {
  name: "aftab",
  age: 27,
};
const arr = [1, 2, "three"];

// console.log(typeof num);
// console.log(typeof boo);
// console.log(typeof stre);
// console.log(typeof obj);
// console.log(typeof arr);

// Reassigning variable

// Task 5. Declear a variable using let, assign it an initial value, reassign a new value, and log both value to the console.

let add = 5; // we can't reassign a new value cause it's block scope.
// let add = 7;

// Activity Understanding 'Const'

//task 6. Try the reassigning a variable declared with const and observe the error.

// const city = "delhi";
// city = "bhopal";
// console.log(city);

// Feature request:

// Variable  log request : write a script that declear variable of different data types and log the both value and types of each variable to the console.

const logValueAndTypesOfVariable = (arg) => {
  console.log(arg);
  console.log(`type:${typeof arg}, value:${JSON.stringify(arg)}`); // this should be focused on.
};

// logValueAndTypesOfVariable({ name: "aftab", age: 26 });

// create a script to demonstrate the difference in behavior between 'let' and 'const' when it comes to reassignment.

let state = "delhi";

state = "Bihar";
// In case of let it'll not give the error.

const city = "delhi";

// try {
//   city = "bhopal";
// } catch (error) {
//   throw new Error("can not assignable to constant variable");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// EVENT DELEGATION

//

// Select the parent element
const itemList = document.getElementById("itemList");

// Attach the event listener to the parent element
itemList.addEventListener("click", function (event) {
  // Check if the clicked element is an <li>
  if (event.target && event.target.nodeName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});

// Function to add a new list item
function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
}

// Attach event listener to the button
document.getElementById("addItemButton").addEventListener("click", addItem);
