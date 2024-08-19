// RECURSION

// Basic Recursion

// Task 1: Write a recursive function to calculation the factorial of a number. Log the result for a few test cases.

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(5));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. log the result for a few test cases

// const Fibonacci = (num) => {
//   const fibonacciSequence = [0, 1];
//   let next = 1;
//   for (let i = 0; i < num; i++) {
//     if (next) {
//       fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[next]);
//       next += 1;
//     }
//   }
//   return fibonacciSequence;
// };

const Fibonacci = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
};

// console.log(Fibonacci(6));

// Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const arrOfNum = [1, 2, 3, 4, 5, 5];
let sum = 0;
const sumOfArr = (arr) => {
  console.log(arr);
  if (arr.length === 1) return arr[0];
  return sum + sumOfArr(arr.slice(0, arr.length - 1));
};

console.log(sumOfArr(arrOfNum));

console.log(window.crypto);
