//This keyword is used to refer to the current object in which the code is being executed.

//scope of this keyword in different contexts

//1. Global Context
console.log(this); // In a browser, this refers to the global window object 

//2. Function Context
function showThis() {
    console.log(this); // In non-strict mode, this refers to the global object (window in browsers)
}
showThis();

//3. Object Method Context
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(this.name); // Here, this refers to the obj object
    }
};
obj.greet(); // Output: Alice   

//4. Constructor Function Context
function Person(name) {
    this.name = name; // Here, this refers to the newly created object
}
const person1 = new Person('Bob');
console.log(person1.name); // Output: Bob

// this in event handlers
document.querySelector('h1').addEventListener('click', function() {
    console.log(this.style.color = "red"); // Here, this refers to the element that received the event (the h1 element)
});

//5. Arrow Function Context
const arrowFunc = () => {
    console.log(this); // In arrow functions, this retains the value of the enclosing lexical context
};
arrowFunc(); // Output: window object (or undefined in strict mode)

//Note: The value of this can be explicitly set using call(), apply(), or bind() methods.   
const person2 = {
    name: 'Charlie'
};
function greet() {
    console.log(this.name);
}   
greet.call(person2); // Output: Charlie
greet.apply(person2); // Output: Charlie
const boundGreet = greet.bind(person2);
boundGreet(); // Output: Charlie


//class context
class Car {
    constructor(brand) {
        this.brand = brand; // Here, this refers to the instance of the Car class
    }
    showBrand() {
        console.log(this.brand);
    }
}

const myCar = new Car('Toyota');
myCar.showBrand(); // Output: Toyota
