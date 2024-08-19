// Event Handling

// Basic Event Handling +++++++++++++++++++++++++++++++++++++++++++++

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const btn = document.getElementById("btn");
const para = document.querySelector(".paragraph");
btn.addEventListener("click", () => {
  para.textContent = "Hi, I am learning english and javascript.";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.

const img = document.getElementById("nature-image");

img.addEventListener("dblclick", () => {
  img.style.width = "60%";
  img.style.height = "40%";
  img.style.overflow = "hidden";
});

// Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

const container = document.querySelector(".container");
container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "grey";
  container.style.padding = "5px";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.

container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "#fff";
});

// Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

// const input = document.getElementById("name");
// input.addEventListener("keydown", (event) => {
//   console.log(event.target.value);
// });

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

// input.addEventListener("keyup", (event) => {
//   const newValue = event.target.value;
//   para.textContent = newValue;
// });

// Form Events

// Task 7: Add a submit event listener to a from that prevents the default submission and logs the from data to the console.

const form = document.querySelector(".form");
const input = document.querySelectorAll("input");
let formData = {};
input.forEach((ele) => {
  ele.addEventListener("input", (event) => {
    formData[ele.id] = event.target.value;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formData);
  input.forEach((ele) => {
    ele.value = "";
  });
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const agePara = document.querySelector(".age-para");
const age = document.querySelector("#age");
age.addEventListener("change", (event) => {
  const ageValue = event.target.value;
  agePara.textContent = ageValue;
});

// Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const body = document.querySelector("body");
const ul = document.querySelector("#itemList");
const li1 = document.querySelector(".list1");
const li2 = document.querySelector(".list2");
const li3 = document.querySelector(".list3");
const li4 = document.querySelector(".list4");

// body.addEventListener("click", () => {
//   console.log("body is clicked");
// });

ul.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("ul is clicked");
});
li1.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("listt1");
});
li2.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("listt2");
});
li3.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("listt3");
});
li4.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("listt4");
});
// console.log(ul);
