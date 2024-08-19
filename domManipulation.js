// DOM MANIPULATION

// Select and Manipulating Elements.

// Task 1: Select an HTML element by its ID and change its text content.

const head3 = document.getElementById("heading3");

head3.textContent = "Hi, Aftab";
// console.log(head3);

// Task 2: Select an HTML element by its class and change its background color.

const element = document.getElementsByClassName("container");

element[0].style.backgroundColor = "grey";

// Creating and appending Elements

// Task 3: Create a new div element with some text content and append it to the body

const newElement = document.createElement("h2");
newElement.textContent = "My name is Aftab";
element[0].append(newElement);
// console.log(newElement);

// Task 4: Create a new li element and add it to an existing ul list.
const ulElement = document.getElementById("itemList");
const newLi = document.createElement("li");
newLi.textContent = "I the most favorite list";
ulElement.appendChild(newLi);

// Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

const firstList = document.getElementsByTagName("li")[0];
ulElement.removeChild(firstList);

// Task 6: Remove the last child of a specific HTML element.

const lastLi = ulElement.lastChild;
ulElement.removeChild(lastLi);

// Modifying Attributes and classes

// Task 7: Select an HTML element and change one of it's attributes (e.g, 'src' of on 'img' tag).

const img = document.getElementsByClassName("nature-image")[0];
img.setAttribute(
  "src",
  "https://natureworldwide.in/wp-content/uploads/2023/06/Valley-of-Flowers-640x480-1.jpg"
);

// Task 8: Add and remove a CSS class to/from an HTML element.
const secondList = document.getElementsByTagName("li")[1];
secondList.setAttribute("class", "second-List");
secondList.removeAttribute("class");

// Event Handling

// Task 9: Add a click listener to a button that changes the text content of a paragraph.

const btn = document.getElementById("btn");
const para = document.getElementsByClassName("paragraph");
btn.addEventListener("click", () => {
  const content = para[0].textContent;
  para[0].textContent = content + ", " + "I am learning english as well.";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.

const handleMouseOver = (event) => {
  event.target.style.border = "2px solid red";
};

const handleMouseOut = (event) => {
  event.target.style.border = "1px solid grey";
};

btn.addEventListener("mouseover", handleMouseOver);

btn.addEventListener("mouseout", handleMouseOut);
