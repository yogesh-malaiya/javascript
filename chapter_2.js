console.log("Chapter 2: Data Types in JavaScript");

/* In this chapter we have Learned about 
   Data Types in JavaScript: Primitive and Non-Primitive Types */

/* primitive Data Types:
  1. Number
  2. String
  3. Boolean
  4. Undefined
  5. Null
  6. Symbol
  7. BigInt
*/
/* Defination of Primitive Data Types:
  Primitive data types are the most basic data types in JavaScript. They represent single values and are immutable, meaning their values cannot be changed once created. When you perform operations on primitive data types, you create new values rather than modifying the existing ones.
*/

let age = 30; // Number
let name = "Yogesh"; // String we can use '' or "" or `` backtick
let isStudent = false; // Boolean
let address; // Undefined that means variable is declared but not initialized 
let phoneNumber = null; // Null that means we want to use variable but we dont have any value so we assign null we can assign value later(future)
// let uniqueId = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt  we allways use 'n' at the end of the number

console.log("this is Number:", age);
console.log("this is String:", name);
console.log("this is Boolean:", isStudent);
console.log("this is Undefined:", address);
console.log("this is Null:", phoneNumber);
console.log("this is BigInt:", bigNumber);
//symbols(uniqueId) are used to create unique identifiers for object properties. They are often used to avoid property name collisions in objects, especially when working with libraries or frameworks.








/* Non-Primitive Data Types:
  1. Object{}
  2. Array[]
  3. Function()
*/

/* Defination of Non-Primitive Data Types:
  Non-primitive data types, also known as reference types, are more complex data structures that can hold multiple values or properties. They are mutable, meaning their contents can be changed without creating a new value. When you work with non-primitive data types, you are dealing with references to the actual data stored in memory.
*/
console.log("this is Object");
let user = {
  name: "Yogesh",
  age: 30,
  email: "test@example.com"
}

console.log(user)

console.log("this is Arrary")
let colors = ["red", "green", "blue"];
console.log(colors);

function greet() {
  console.log("hello, good morning")
  console.log("This is Function");
}

greet();