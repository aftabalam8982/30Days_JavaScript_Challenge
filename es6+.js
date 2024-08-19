// ES6+ Features

// Template Literals

// Task 1: Use template literals to create a string that includes for a person's name and age, and log the string to the console.
const name = "Aftab";
const age = 27;
// console.log(`Hi my name is ${name} and I'm ${age} year old`);

// Task 2: Create a multi-line string using template literals and log it to the console.

// console.log(`Hi my name is ${name}
//  and I'm ${age} year old`);

// Destructuring

// Task 3: Use array destructuring to extract the first and second elements from and array of numbers and log them to the console.

const [num1, num2, ...num] = [1, 2, 3, 4, 5, 6];

// console.log(num1, num2);

// Task 3: Use array destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "Rich Dad and Poor Dad",
  author: "Robert Kisyoski",
};

const { title, author } = book;

// console.log(title, author);

// Spread and Rest Operator

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array pus additional elements, and log the new array to the console.

const arr = [1, 2, 3, 4, 5];

const newArr = [...arr, 6, 7];
// console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.

function sum(...args) {
  return args.reduce((acc, current) => (acc += current), 0);
}

// console.log(sum(1, 2, 3, 2, 1));

// Default Parameters

// Task 7: write a function that takes two parameters and returns their product , with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.

function product(num1, num2 = 1) {
  return num1 * num2;
}

// console.log(product(5));
