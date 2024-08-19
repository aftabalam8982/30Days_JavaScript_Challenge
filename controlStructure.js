// CONTROL STRUCTURE //

// If Else statement

// Task1

function checkPositiveNegative(num) {
  if (num > 0) {
    console.log("this is a positive number");
  } else if (num === 0) {
    console.log("this is a zero number");
  } else {
    console.log("this is a negative number");
  }
}

// Task2

function eligible(age) {
  if (age >= 18) {
    console.log("this person is eligible for vote");
  } else {
    console.log("this person is not eligible for vote");
  }
}

// eligible(15);

// Nested if-else statements

// Task3

// function findLargestNum(num1,num2,num3) {
//     if(num1>num2){
//         if(num2>num3){
//             return num1
//         }else{
//             return
//         }
//     }
// }

// console.log(findLargestNum(4, 5, 3));

// SWITCH CASE

// Task 4

function determineDay(day) {
  switch (day) {
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "this is not the week day";
  }
}

// console.log(determineDay(8));

// Task 5
// grade: A, B, C, D, F

function findTheGrade(score) {
  switch (score) {
    case score >= 80:
      console.log(score);
      return "A grade";
    case score >= 60:
      return "B grade";
    case score >= 40:
      return "C grade";
    case score >= 30:
      return "D grade";
    default:
      return "F fail";
  }
}

console.log(findTheGrade(55));

// Conditional Ternary Operator

// Task 6

function checkOddEven(num) {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}

// console.log(checkOddEven(8));

// Combining Condition

// Task 7

function checkLeapYear(year) {
  //   if (year % 4 === 0) {
  //     if (year % 100 === 0) {
  //       if (year % 400 === 0) {
  //         return true;
  //       }
  //     } else {
  //       return true;
  //     }
  //   } else {
  //     return false;
  //   }
  return year % 4 === 0 || (year % 100 === 0 && year % 400) ? true : false;
}

console.log(checkLeapYear(2028));
