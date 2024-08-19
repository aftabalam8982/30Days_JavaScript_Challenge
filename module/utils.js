// 1. Create a module that exports a function to add two numbers. Import and use this module in another script.

export const add = (a, b) => {
  return a + b;
};

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
  name: "akhlakh",
  age: 26,
  walk: () => {
    return `please walk on the road`;
  },
};

export const obj = () => {
  return person;
};

// Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// Task 4: Create a module that exports a single function using default export.Import and use this function in another script.

export const factorial = (num1) => {
  const num = Number(num1);
  if (typeof num !== "number" || Number.isNaN(num))
    throw new Error(`please provide valid num ${num}`);
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
