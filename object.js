// Objects

// Object Creation and Access +++++++++++++++++++++++++++++++++++++++

// Task 1: Create an object representing a book with properties like title,author, and year, and log the object to the console.

// const book = {
//   title: "Rich Dad and Poor Dad",
//   author: "Robert kiyoski",
//   year: "05/11/2003",
// };

// console.log(book);

// Task 2: Access and log the title and author properties of the book object.

// console.log(book.author);

// Object Methods

// Task 3: Add a method to the book object that returns a staring with the books title and author,and log the result of calling this method.

const book = {
  title: "Rich Dad and Poor Dad",
  author: "Robert kiyoski",
  year: "05/11/2003",
  titleAndAuthor: function () {
    return `${this.author} has written ${this.title} novel.`;
  },
};

// console.log(book.titleAndAuthor());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const book1 = {
  title: "Rich Dad and Poor Dad",
  author: "Robert kiyoski",
  year: "05/11/2003",
  titleAndAuthor: function (year) {
    this.year = year;
  },
};

// book1.titleAndAuthor("10/12/2005");

// Nested Objects ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "center library",
  address: "Mumbai",
  books: [
    { name: "Robert kiyoski", title: "Rich Dad and Poor Dad" },
    { name: "Paulo Coelho", title: "Alchemist" },
  ],
};

// Task 6: Access and log the name of the library and the titles of all the books in the library.

// console.log(library.name);
// library.books.map((book) => console.log(book.title));

//  The 'this' keyword

// Task 6: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.

const book2 = {
  title: "Rich Dad and Poor Dad",
  author: "Robert kiyoski",
  year: "05/11/2003",
  titleAndAuthor: function () {
    return `${this.title} has published at ${this.year}`;
  },
};

// book2.titleAndAuthor();

// Object Iteration ++++++++++++++++++++++++++++++++++++++++++++++++

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const book3 = {
  title: "Rich Dad and Poor Dad",
  author: "Robert kiyoski",
  year: "05/11/2003",
  titleAndAuthor: function () {
    return `${this.author} has written ${this.title} novel.`;
  },
};

// for (let key in book3) {
//   console.log(`${key}:${book3[key]}`);
// }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

const book4 = {
  title: "Rich Dad and Poor Dad",
  author: "Robert kiyoski",
  year: "05/11/2003",
  titleAndAuthor: function () {
    return `${this.author} has written ${this.title} novel.`;
  },
};

console.log(Object.keys(book4));
console.log(Object.values(book4));
