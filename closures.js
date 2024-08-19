// CLOSURES

// Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
/*
function outer() {
  let name = "Aftab";
  return function () {
    console.log(name);
  };
}

const innerFunc = outer();
console.log(innerFunc());
*/
// Task 2: Create a closure that maintains a private counter. Implement function to increment and get the current value of the counter.
/*
function Counter() {
  let Count = 0;
  return function () {
    Count++;
    return Count;
  };
}

const counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
*/
// Practical Closures
/*
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateIDs() {
  let lastId = 0;
  return function () {
    lastId += 1;
    return lastId;
  };
}

const lastId = generateIDs();
console.log(lastId());
console.log(lastId());
console.log(lastId());
console.log(lastId());
*/
// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
/*
function GreetUser(name) {
  let userName = name;
  return function () {
    return `Hi ${userName}!, welcome to the javascript world`;
  };
}

const userGreet = GreetUser("Aftab");
console.log(userGreet());
*/
// Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
/*
function arrayFunc(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(
      (function (index) {
        return function () {
          console.log(index);
          return i;
        };
      })(i)
    );
  }
  return arr;
}

const func = arrayFunc(5);
const arrFunc = func.map((func) => func());
console.log(arrFunc);
*/
// Module Pattern

// Task 6: Use closures to create a simple for managing a collection of items. Implement methods to add, remove, and list items.
/*
const collectionOfItems = () => {
  const items = [
    {
      id: 1,
      product: "samsung",
      model: "samsung galaxy s21 fe",
      price: "30000",
    },
    {
      id: 2,
      product: "iphone",
      model: "iphone x",
      price: "40000",
    },
  ];

  return {
    add(item) {
      items.push(item);
      return items;
    },
    remove(id) {
      return items?.filter((item) => item.id !== id);
    },
  };
};

const module = collectionOfItems();

console.log(module.remove(2));

console.log(
  module.add({
    id: 3,
    product: "readme",
    model: "x6",
    price: "20000",
  })
);
*/

// Memoization

// Task 7: Write a function that memoization the results of another function. Use a closure to store the results of previous computations.
/*
const add = (a) => {
  return a + 2;
};

const memoized = (func) => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    } else {
      cache[num] = func(num);
      return cache[num];
    }
  };
};

const result = memoized(add);
console.log(result(5));
*/
// Task 8: Create a memoized version of a function that calculates the factorial of number.
/*
const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

const memoizedFact = (func) => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    } else {
      cache[num] = func(num);
      return cache[num];
    }
  };
};

const result1 = memoizedFact(factorial);
console.log(result1(5));
*/
