// Function Declaration ++++++++++++++

function isNumber(num) {
  const number = Number(num);
  if (typeof number !== "number" || Number.isNaN(number))
    throw new Error(`please provide valid number ${num}`);
  return number;
}

function isString(str) {
  if (typeof str != "string") {
    throw new Error(`please provide the valid string ${str}`);
  }
  return str;
}

// Task 1:  write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num) {
  return isNumber(num) % 2 === 0 ? "even" : "odd";
}

// console.log(checkEvenOdd("8"));

const arr = [1, 3, 4, 6, 8];

function findMissingNum(arr) {
  let missingEle = [];
  let maxNum = Math.max(...arr);
  console.log(maxNum);
  for (let i = 1; i <= maxNum; i++) {
    if (!arr.includes(i)) {
      missingEle.push(i);
    }
  }
  return missingEle;
}

// console.log(findMissingNum(arr));

// Task 2: write a function to calculate the square of a number and return the result.

function calSquare(num) {
  const number = isNumber(num);
  return number ** 2;
}

// console.log(calSquare("2"));

// Function Expression   +++++++++++++++++++++++++++++

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (num1, num2) {
  const number1 = isNumber(num1);
  const number2 = isNumber(num2);
  return Math.max(number1, number2);
};

// console.log(findMax(3, "4r"));

// Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStr = function (str1, str2) {
  return `${isString(str1)} ${isString(str2)}`;
};

// console.log(concatenateStr("aftab", 6));

// Arrow Functions  +++++++++++++++++++++++++++++++++

// Task 5: write an arrow function to calculate the sum of two numbers and return the result.

const calSumOfTwoNum = (num1, num2) => {
  const number1 = isNumber(num1);
  const number2 = isNumber(num2);
  return number1 + number2;
};

// console.log(calSumOfTwoNum("5", 8));

// Task 6: write a arrow function to check if a string contains a specific character and return a boolean value.

const checkSpecificCharInStr = (str, char) => {
  const specificStr = isString(str);
  return specificStr.includes(char);
};

// console.log(checkSpecificCharInStr("Hello Aftab", "k"));

// Function Parameters and default Values

// Task 7: write a function that takes two parameters and return their product. Provided a default value for the second parameter.

const productOfTwoNum = (num1, num2 = 5) => {
  const number1 = isNumber(num1);
  const number2 = isNumber(num2);
  return number1 * number2;
};

// console.log(productOfTwoNum("5"));

// Task 8 : write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (name, age = 20) => {
  const nameStr = isString(name);
  const ageNum = isNumber(age);
  return `Hello ${name}, I am ${age} years old.`;
};

// console.log(greet("Aftab", 26));

// Higher Order Function

// Task 9: write a higher order function that takes a function and a number, and calls the function that many times.

function hoc(fun, num) {
  fun(num);
  fun(num);
  fun(num);
}

const logFun = (num) => console.log(num);

// console.log(hoc(logFun, 8));

// Task 10: write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.

function hoc1(product, fun2, val) {
  return fun2(product(val));
}

const product = (val) => {
  const value = isNumber(val);
  return value * 2;
};
const fun2 = (productVal) => {
  console.log(productVal);
};

// console.log(hoc1(product, fun2, 5));
