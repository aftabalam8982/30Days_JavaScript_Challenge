// Arrays

// Array Creation and Access  ++++++++++++++++++++++++++++

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

function createArray(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) arr.push(i);
  return arr;
}

// console.log(createArray(5));

// Task 2: Access the first and last elements of the array log them to the console.

function accessFirstLast(arr) {
  return [arr.shift(), arr.pop()];
}

// console.log(accessFirstLast([1, 2, 3, 4, 5]));

// Array Methods ++++++++++++++++++++++++++++++++++++++++++

// Task 3 : Use the 'push' method to add a new number to the end of the array and log the updated array.

function pushInLastOfArr(arr) {
  arr.push(6);
  return arr;
}

// console.log(pushInLastOfArr([1, 2, 3, 4, 5]));

// Task 4: Use the 'pop' method to remove the last element from the array and log the updated array.

function popInLastOfArr(arr) {
  arr.pop(6);
  return arr;
}

// console.log(popInLastOfArr([1, 2, 3, 4, 5]));

// Task 5: Use the 'shift' method to remove the first element from the array and log the updated array.

function shiftInLastOfArr(arr) {
  arr.shift();
  return arr;
}

// console.log(shiftInLastOfArr([1, 2, 3, 4, 5]));

// Task 5: Use the 'unShift' method to add the first element from the array and log the updated array.

function unShiftInLastOfArr(arr) {
  arr.unshift(0);
  return arr;
}

// console.log(unShiftInLastOfArr([1, 2, 3, 4, 5]));

// Array Method (Intermediate) +++++++++++++++++++++++++++++++++++

// Task 7: Use the 'map' method to create a new array where each number is doubled and log the new array.

const doubledArr = (arr) => {
  return arr.map((ele) => ele * 2);
};

// console.log(doubledArr([1, 2, 3, 4, 5]));

// Task 8: Use the 'filter' method to create a new array with only even numbers and log the new array.

const findEvenNum = (arr) => {
  return arr.filter((ele) => ele % 2 === 0);
};

// console.log(findEvenNum([1, 2, 3, 4, 5]));

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const calSumOfArr = (arr) => {
  return arr.reduce((acc, current) => (acc += current), 0);
};

// console.log(calSumOfArr([1, 2, 3, 4, 5]));

// Array Iteration ++++++++++++++++++++++++++++++++++++++++++++++++

// Task 10: Use the 'for loop' to iterate over the array and log each element to the console.

const iterateArr = (arr) => {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
};

// console.log(iterateArr([1, 2, 3, 4, 5]));

// Task 11: Use the 'forEach' method to iterate over the array and log each element to the console.

const iteratedArr = (arr) => {
  arr.forEach((ele) => console.log(ele));
};

// console.log(iteratedArr([1, 2, 3, 4, 5]));

// Multi-dimensional Arrays +++++++++++++++++++++++++++++++++++++++

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix);

// Task 13: Access and log a specific element from the two dimensional array.

// console.log(matrix[0][2]);
