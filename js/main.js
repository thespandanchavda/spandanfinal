console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
  My name is Spandan Chavda and my student number is 200524586.
  I am currently a student at Georgian College.
*/


// Step 2: Create a block scoped, immutable variable that stores an empty array
const emptyArray = [];


// Step 3: Add the 3 people's names to the array
// Create an empty array
let names = [];

// Add the names to the array
names.push('John');
names.push('Jane');
names.push('Bob');

// Print the array to the console
console.log(names);



// Step 4: Remove the second array item from the array
// Create an array with some items
let name = ['John', 'Jane', 'Bob'];

// Remove the second item from the array
name.splice(1, 1);

// Print the array to the console
console.log(name);



// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
// Create an array with some items
let sname = ['John', 'Jane', 'Bob'];

// Create a new variable to store the uppercase versions of the names
let uppercaseNames;

// Iterate over the names and make them uppercase
uppercaseNames = sname.map(name => name.toUpperCase());

// Print the array to the console
console.log(uppercaseNames);



// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";

let aside = document.querySelector('aside h2');
aside.addEventListener('click', function () {
  alert('Hello from Boo the World,s Cutest Dog!');
});

