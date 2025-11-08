// In this chapter we will going to learn about javascript object and its methods

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    address: {                          //this is multi level nested object
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
        pincode: 12345,
        location: {
            lat: 40.7128,
            lon: 74.0060
        }
    }
}
console.log(person.fullName());

person?.address?.city; //optional chaining to access nested object properties safely to avoid errors if any property is undefined or null

//their are two ways to access object properties
//1. Dot Notation
console.log(person.firstName); // John

//2. Bracket Notation
console.log(person["lastName"]); // Doe

//accessing nested object properties
console.log(person.address.city); // Anytown

//another way to access nested object properties
let {lat, lon}= person.address.location; //this is called destructuring and help to access nested object properties easily for multiple times
console.log(lat, lon); // 40.7128 74.0060

//this will create variables postalCode and assign the value of pincode property of address object to it
let {pincode: postalCode} = person.address; //this is called renaming while destructuring
console.log(postalCode); // 12345


let role = "admin";

let contacts = {
    Name: "Alice",
    phone: 1234455666,
    email: "alice@example.com",
    [role]: "admin" //computed property name this will create a property with the name of the value of role variable
}

//accessing object properties using for...in loop
for (let key in contacts){                         //this loop not work for nested objects
    console.log(key + " : " + contacts[key])
}

//accessing object keys using Object.keys() method    this method return an array of object keys
console.log(Object.keys(contacts)); // [ 'Name', 'phone', 'email' ]

//accessing object values using Object.values() method  this method return an array of object values
console.log(Object.values(contacts)); // [ 'Alice', 1234455666, 'alice@example.com' ]

//accessing object entries using Object.entries() method  this method return an array of object key-value pairs
console.log(Object.entries(contacts)); 
/* [ [ 'Name', 'Alice' ],
   [ 'phone', 1234455666 ],
   [ 'email', 'alice@example.com' ] ] */

//copy the object using spread operator
let contactsCopy = {...contacts};       //this will not work for nested objects its refer to the same nested object
console.log(contactsCopy); // { Name: 'Alice', phone: 1234455666, email: 'alice@example.com' }

//copy the object using Object.assign() method
let contactsCopy2 = Object.assign({}, contacts);
console.log(contactsCopy2); // { Name: 'Alice', phone: 1234455666, email: 'alice@example.com' }

//note: both spread operator and Object.assign() create shallow copy not deep copy for nested objects
//to create deep copy we can use JSON methods
let deepCopy = JSON.parse(JSON.stringify(person));
console.log(deepCopy); // this will create a deep copy of person object

deepCopy.address.city = "New york"; //this will not affect the original person object
console.log(person.address.city); // Anytown
console.log(deepCopy.address.city); // New york



