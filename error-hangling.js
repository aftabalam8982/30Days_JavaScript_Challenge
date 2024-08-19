// ERROR HANDLING

// Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

// try {
//   let name = "Aftab";
//   if (name !== "akhlakh") throw new TypeError("this name is not correct");
// } catch (error) {
//   console.log(error);
// }

// Task 2: Crate a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

// try {
//   if (5 / 0 == Infinity)
//     throw new Error("please provide the valid denominator");
// } catch (error) {
//   console.log(error);
// }

// Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. log messages in the try, catch, and finally blocks to observer the execution flow.

// try {
//   console.log("I am try block");
//   throw "I am the error block";
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("I am finally block");
// }

// Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class customError extends Error {
  constructor(message) {
    super(message);
  }
}
// try {
//   throw new customError("there is an error in code!");
// } catch (error) {
//   console.log(error);
// }

// Task 5: Write a function that validates user input (e.g, checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

const validateInput = () => {
  try {
    if (nameInput.value === "") throw new customError("name input is required");
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", () => {
  validateInput();
});

// Error Handling in Promise

// Task 6: Create a promise that randomly resolves or rejects. Use '.catch()' to handle the rejection and log an appropriate message to the console.

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("The promise has been rejected.");
//   }, 1000);
// }).catch((error) => {
//   console.log(error);
// });

// rejectPromise().catch((error) => {
//   console.log(error);
// });

// Task 7:  Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("The promise has been rejected.");
    }, 1000);
  });
};

const promised = async () => {
  try {
    const res = await promise1();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// promised();

// Graceful Error Handling in fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using '.catch()' log an appropriate error message to the console.

const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL)
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP Error, status: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 9. Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. log an appropriate error message.

const fetchUser = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`Http error, status:${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// fetchUser(URL);
