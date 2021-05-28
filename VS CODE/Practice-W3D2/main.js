//GLOBAL variables
let sum = 0;

//LOCAL variables
function addition() {
  let book = 0;
}

// Variable Scope

// VAR ---- Function scope
// Initialize a global variables
var species = "human";
function transform() {
  //Initialize a local, function-scope variable
  varspecies = "werewolf";
  console.log("local:", species);
}

// Log the global variable
console.log(species);
transform();
console.log(species);

//LET --- Block scope
let fullMoon = true;

let species2 = "human";
if (fullMoon) {
  //Initialize a block-scoped variable
  let species2 = "werewolf";
  console.log(`It is a full moon, Lupin is currently a ${species2}`); //warewolf
}
console.log(`It is a full moon, Lupin is currently a ${species2}`); //human

//Hoisting -----------------------------------------
//Attempt to use a variable before declaring it
console.log(x);

//Variable assignment
var x = 100;

//How JavaScript Interpreted it
//Var x;
//console.log(x);
//x = 100;
//End of Hoisting -----------------------------------------

var z;
console.log("this z is unssigned:", z);

// FUNCTIONS
function addNums(num1, num2) {
  //console.log(num1 + num2);
  return num1 + num2;
}
// console.log(addNums(1, 2));
const sumResult = addNums(6, 10);
console.log(sumResult);

// Arrow function
function greet(greeting, name) {
  if (!name) {
    return greeting;
  } else {
    return `${greeting} ${name}`;
  }
}
console.log("Hi", " dan"); //Empty(" ") counts as NaN

// Arrow function
const greet1 = (greeting, name) => {
  return `${greeting} ${name}`;
};
console.log("Hi", " dan");

//OOP - Object Proented Programing
function Person(firstName, lastName, dob) {
  //Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = new Date(dob);
}

//Get Birth Year
Person.phototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

// Get full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//Instantiate an object from the class
const person1 = new Person("Steve", "Kim", "7-8-80");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

const person2 = new Person("John", "Doe", "9-2-90");
console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

// ES6 allow us to use 'Classes'
class PersonC {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  //Get birth Year   //inside of the class, no need to type 'function'
  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new PersonC("Jane", "Doe", "1-1-99");
console.log(person3);
console.log(person3.getBirthYear());
console.log(person3.getFullName());
