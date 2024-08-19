// Importing Entire Modules

// Task 5: Create a module that exports multiple constants and function. Import the entire module as an object in another script and use its properties.

export const PI = 3.14;
export const num1 = 6;
export const num2 = 5;

export const add = () => {
  return num1 + num2;
};

export const multiply = () => {
  return num1 * num2;
};
