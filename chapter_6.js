//In this chapter we will cover functions in JavaScript
//function declaration
/*
function functionName(parameters) {
    // function body
}
*/
//function declaration example with parameters and return value
console.log("Function declaration example");
function add(A, B){
    console.log("Adding two numbers:");
    return A + B;
};
add(3, 7); //Calling the function with arguments

//Function expression
console.log("Function expression example");
let fnc = function(a, b){
    console.log("Function expression example");
    return a + b;
};
fnc(5, 10);

//Arrow function
console.log("Arrow function example");
let arrowfnc = (name) => {
    console.log(`Hello, ${name} from arrow function!`);
};
arrowfnc("John");

//function with default parameters
console.log("Function with default parameters example");
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet("Alice");
greet();

//Immediately Invoked Function Expression (IIFE)
console.log("IIFE example");
(function() {
    console.log("This is an IIFE");
})();   
//IIFE with parameters
(function(msg) {
    console.log(msg);
})("Hello from IIFE with parameters!");

//Function as first-class citizens  
console.log("Function as first-class citizens example");
function executeFunction(fn) {
    fn();
}
executeFunction(function() {
    console.log("This is a function passed as an argument");
}); 

//higher-order function
console.log("Higher-order function example");
function higherOrderFunction(callback) {
    console.log("Inside higher-order function");
    callback();
}
higherOrderFunction(function() {
    console.log("This is the callback function");
});

//Function returning another function
console.log("Function returning another function example");
function outerFunction() {
    return function innerFunction() {
        console.log("This is the inner function");
    };
}
const inner = outerFunction();
inner();

//function with rest parameters
console.log("Function with rest parameters example");   
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

//function with callback
console.log("Function with callback example");
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 1000);
}
fetchData(function(result) {
    console.log("Data received:", result);
});

//function with spread operator
console.log("Function with spread operator example");
function joinStrings(...strings) {
    return strings.join(" ");
}
console.log(joinStrings("Hello", "world", "!"));
