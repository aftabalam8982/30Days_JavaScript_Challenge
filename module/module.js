// MODULE

import { add, obj, factorial } from "./utils.js";
import * as objUtils from "./utilsObj.js";

// Creating and Exporting Modules

// 1. Create a module that exports a function to add two numbers. Import and use this module in another script.

console.log(add(4, 5));

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = obj();
console.log(person.walk());

// Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// Task 4: Create a module that exports a single function using default export.Import and use this function in another script.

console.log(factorial(5));

// Importing Entire Modules

// Task 5: Create a module that exports multiple constants and function. Import the entire module as an object in another script and use its properties.

console.log(objUtils);
console.log(objUtils.multiply());

// Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
var _ = require("lodash");

console.log(_.arr);

//
