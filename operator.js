// Day2 OPERATOR //

// Activity1: Athematic Operator

// Task1:

const add = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 + num2;
};

// Task2:

const subtract = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 - num2;
};

// Task3:

const multiply = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 * num2;
};

// Task4:

const divide = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 / num2;
};

// Task5:

const remainder = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 % num2;
};

// console.log(remainder(25, 5));

// Activity: Assignment Operator

//Task6:

const addVariable = () => {
  let count = 0;
  return (count += 1);
};

// Task7:

const subtractVariable = () => {
  let count = 5;
  return (count -= 1);
};

// console.log(subtractVariable());
// console.log(subtractVariable());

// Activity: Comparison Operator

// Task8:

const lesThanGreaterThan = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 > num2;
};

// Task9:

const lesThanAndGreaterThanEqualTo = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "please provide a valid number";
  return num1 >= num2;
};

// Task10:

const comparisonOfTwoNum = (num1, num2) => {
  //   if (typeof num1 !== "number" || typeof num2 !== "number")
  //     return "please provide a valid number";
  return num1 === num2;
};

// console.log(lesThanGreaterThan(4, 3));
// console.log(lesThanAndGreaterThanEqualTo(1, 2));
// console.log(comparisonOfTwoNum(3, "3"));

// Activity6: Ternary Operator

//Task11

const checkPositiveOrNegative = (num1, num2) => {
  return num1 > num2 ? `${num1} is positive` : `${num1} is negative`;
};

// console.log(checkPositiveOrNegative(4, 3));

// Activity7: Feature Request

// Task12:  Arithmetic operation

const arithmeticOperation = (num1, num2) => {
  const arithmetic = {
    addition: num1 + num2,
    subtraction: num1 - num2,
    multiplication: num1 * num2,
    division: num1 / num2,
    remainders: num1 % num2,
  };

  for (key in arithmetic) {
    console.log(`${key} of calculation ${arithmetic[key]}`);
  }
};

arithmeticOperation(4, 2);

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
console.log("object1");
const fetchData = async () => {
  console.log("object2");
  const response = await fetch("https://jsonplaceholde.typicode.com/posts");
  console.log("object3");
  const data = await response.json();
  console.log("object4");
  console.log(data);
};
console.log("object5");
fetchData()
  .then(() => {
    console.log("object6");
  })
  .catch(() => {
    console.log("object7");
  });

object1
object2
object3
object4
object5
object6

const curring = (a) => {
  let add = a + 5;
  return (b) => {
    add - b;
    return (c) => {
      return add + b + c;
    };
  };
};

const curring1 = curring(1)(2)(4);

console.log(curring1);

function foo() {
  let name = "aftab";
  let num = 5;

  return function blockScope() {
    console.log(num);
    console.log(name); //undefined
    var name = "akhlakh";
    console.log(name); // akhlakh
  };
  //   name = "adil";

  //   console.log(name); // adil
}

foo()();
*/
