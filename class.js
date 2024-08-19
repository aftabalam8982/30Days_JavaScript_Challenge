// Class Definition

// Task 1: Define a class Person with properties 'name' and 'age', adn a method to return a greeting message. Create an instance of the class and log the greeting message.
/*
class Person {
  constructor() {
    this.name = "Aftab";
    this.age = 26;
  }
  greet = () => {
    console.log(this);
    return `Hello ${this.name}, I'm ${this.age} years old.`;
  };
  updateAge(num) {
    this.age = num;
  }
}
const aftab = new Person();
// console.log(aftab.greet());
// console.log(aftab);

// Task 2: Add a method to the person class that updates the age property and logs the updated age.
aftab.updateAge(29);
// console.log(aftab);
*/
// Class Inheritance

// Task 3: Define a class 'Student' that extends the 'Person' class. Add a property 'studentId' and a method to return the student ID. Create an instance of the 'Student' class and log the student ID.
/*
class Student extends Person {
  constructor() {
    super();
    this.studentId = "Aftab345653";
  }
  Id = () => {
    return this.studentId;
  };
}
const ID = new Student();
console.log(ID.Id());
*/
// Task 4: Override the greeting method in the 'Student' class to include the student ID in the message. Log the overridden greeting message.
/*
class Student extends Person {
  constructor() {
    super();
    this.studentId = "Aftab345653";
    this.greet = () => {
      return `Hello Aftab, this is your studentId: ${this.studentId}`;
    };
  }
  Id = () => {
    return this.studentId;
  };
}

const ID = new Student();
console.log(ID.greet());
*/
// Static Method and Properties

// Task 5: Add a static method to the person class that returns a generic greeting message. Call this static method without creating and instance of the class and log the message.
/*
Person.greet = () => {
  return `Hi there!, good morning`;
};

console.log(Person.greet());
*/
// Task 6: Add a static property to the 'Student' class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
/*
class Student extends Person {
  static Count = 0;
  constructor(studentName) {
    super();
    this.studentId = "Aftab345653";
    this.studentName = studentName;
    Student.Count++;
  }
  Id = () => {
    return this.studentId;
  };
  greet = () => {
    return `Hello ${this.studentName}, this is your studentId: ${this.studentId}`;
  };
}

const student1 = new Student("Aftab");
const student2 = new Student("Akhlakh");
const student3 = new Student("Adil");

console.log(Student.Count);
*/

// Getters and Setters

// Task 7: Add a getter method to the 'Person' class to return the full name (assume a 'firstName' and 'lastName' property). Create an instance and log the full name using the getter.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 26;
  }
  greet = () => {
    console.log(this);
    return `Hello ${this.name}, I'm ${this.age} years old.`;
  };
  updateAge(num) {
    this.age = num;
  }
  getter() {
    return `${this.firstName} ${this.lastName}`;
  }
  setter(fistName, lastName) {
    this.firstName = fistName;
    this.lastName = lastName;
  }
}

const person = new Person("Aftab", "Alam");
console.log(person.getter());

// Task 8: Add a setter method to the 'Person' class to update the name properties (fistName and 'lastName'). Update the name using the setter and log the updated full name.

person.setter("Akhlakh", "ahmad");
console.log(person.getter());

// Task 9: Define a class 'Account' with private fields for 'balance' and a method to deposit and withdraw money.Ensure that the balance can only be updated through these methods.

class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount) {
    if (this.#balance - amount < 0) {
      return `Insufficient balance in your account ${this.#balance}`;
    } else {
      this.#balance -= amount;
      return this.#balance;
    }
  }
}

const account = new Account();

console.log(account.deposit(3245));
console.log(account.withdraw(100));

// 10: Create an instance of the 'Account' class and test the deposit and withdraw methods, logging the balance after each operation.
