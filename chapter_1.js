/* In this chapter we have learned about
    Javascriot variables let, const, and var
    and Scopes,  Hoisting, and Declarations, initialization, and assignment of variables */

// declaration of variables
var age;
let name;
const country = "India"; // in the case of const, initialization is mandatory during declaration

// assigning values to variables or initialization
age = 25;
name = "Yogesh";

// printing values to the console
console.log("Name: " + name);
console.log();
console.log("Age: " + age);
console.log();
console.log("Country: " + country);
console.log();


console.log("Reassigning values to variables...");
console.log();
//reassigning values to variables
age = 26;
name = "Amit"; 
// country = "USA"; // This will throw an error because 'country' is a constant

// printing updated values to the console
console.log("Updated Name: " + name);
console.log();
console.log();
console.log("Updated Age: " + age);
console.log();
console.log("Reassingment of const in not allowed");
console.log();

console.log("Function and block scope...");
console.log();
function testScope(){
  var name = "Rohit"; // function scoped
  let age = 30; // block scoped
  if(true){
    var city = "Bhopal"; // function scoped
    console.log("Var city is function scoped is not respeat {}  Block. its can be accessed outside block: " + city);
    console.log();
    let state = "Madhya Pradesh"; // block scoped
    console.log("Let state is block scoped and can be accessed inside block: " + state);
    console.log();
  }
  console.log("Accessing var name inside function: " + name);
  console.log();
  console.log("Accessing let age inside function: " + age);
  console.log();
  console.log("Accessing var city inside function: " + city);
  console.log();
  // console.log("Accessing let state outside block will throw error: " + state); // This will throw an error
  console.log ("Accessing let state outside block will throw error. because is block scoped");
  console.log();
}