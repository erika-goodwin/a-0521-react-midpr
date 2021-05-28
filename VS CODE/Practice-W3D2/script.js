/* This is a comment */
/* alert(`hello hello`); */

console.log(`Hello, this is a console.log`);

// //Variables
// var oldVar;
// let age = 30;
// const numberOfFingers = 10;

// console.log(`Age:`, age);

// console.log(`# of finger:`, numberOfFingers);
// numberOfFingers = 8;
// console.log(`# of finger:`, numberOfFingers);

// Data Type
const name = "Eric";
const age = 50;
const rating = 5.5;
const isCool = false;
const x = null;
const y = undefined;
let z;

console.log("type of:", typeof age);

//string
// Concatenation
console.log("My name is " + name + " and I am" + age);
// Template literal
console.log(`My name is ${name} and I am ${age}`);
// String methods
const s = "hello world";
let val;
// Get length
val = s.length;

// change case
val = s.toUpperCase();
val = s.toLocaleLowerCase();

//Get substrings
val = s.substring(0, 5);

// Split into Array
val = s.split(" ");
console.log("Val:", val);

//Arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "oranges", "pears", "grapes"];

//Get one value
console.log(fruits);
// fruits.map((fruits) => {
//   console.log(fruits);
// });

//Adding a value
fruits[4] = "Blueberries";
console.log(fruits);

//Add value using push() -- adds to the end of the array
fruits.push("strawberries");
console.log(fruits);

//Add value using unshift() -- adds at the beginning of the array
fruits.unshift("kiwi");
console.log(fruits);

//Remove last value
fruits.pop();
console.log(fruits);

//Check if array
console.log(Array.isArray(fruits));

//Get index
console.log(fruits.indexOf("pears"));

//Object Literals
const person = {
  firstName: "John",
  age: 30,
  hobbies: ["music", "movies"],
  address: {
    street: "50 Main st",
    city: "Vancouver",
    province: "BC",
  },
};

//Get a single value
console.log(person.firstName);

//Get array Value
console.log(person.hobbies[1]);

//Get embedded object
console.log(person.address.city);

//Add a property
person.email = "johndoe@gmail.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    inComplete: false,
  },
  {
    id: 2,
    text: "Make dinner",
    inComplete: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    inComplete: false,
  },
];

//Gey specific object value
console.log(todos[1].text);

//Format as JSON (JAvaScript Object Notion)
console.log(JSON.stringify(todos));

//LOOPS

//For
// for (let i = 0; i <= 0; i++) {
//   console.log(`For loop mumber: ${i}`);
// }

//While
let i = 0;
while (i <= 10) {
  console.log(`While loo[ number: ${i}`);
  i++;
}

//Loop through arrays -- for loop
// for (let i = 1; 1 < todos.length; i++) {
//   //   console.log(`Todo ${i + 1}: ${todos[i].text}`);
// }

//For ... of loop
for (let todo of todos) {
  console.log(todos.text);
}

//Higher order array methods
// forEach() - loops through array
todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});
// console.log("ff:", forEach);

//maps() - Loops through and array and create new array
const todoTextArray = todos.map(function (todo) {
  return todo.text;
});
console.log("todoTextArray:", todoTextArray);

// filter() - Returns an array based on a condition
const todo1 = todos.filter(function (todo) {
  //return only todo where id is NOT 1
  return todo.id !== 1;
});

//Conditionals

//Simple IF/ELSE statement
const x1 = 30;

if (x1 === 10) {
  console.log("x1 is 10");
} else if (x1 > 10) {
  console.log("x1 is greater than 10");
} else {
  console.log("x1 is less than 10");
}

//Switch
color = "blue";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "black":
    console.log("color is black");
    break;
  default:
    console.log("color is not red, blue or black");
    break;
}

// Ternary Operator / shorthand for IF
if (color === "red") {
  console.log("red color");
} else {
  console.log("not red");
}
const isThisRed = color === "red" ? "YES" : "NO";
console.log(isThisRed);

//GROBAL variables
let sum = 0;

//LOCAL variables
function addition() {
  let book = 0;
}
