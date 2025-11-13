// In this chapter we will learn about Web Storage API in JavaScript.
// Web Storage API provides two types of storage options: localStorage and sessionStorage.

// localStorage: Data stored in localStorage has no expiration time. It remains even after the browser is closed and reopened.
// sessionStorage: Data stored in sessionStorage is cleared when the page session ends, i.e., when the browser or tab is closed.

localStorage.setItem('username', 'yogesh'); // Set a key-value pair in localStorage
console.log('Username from localStorage:', localStorage.getItem('username')); // Retrieve the value associated with the key 'username'
localStorage.setItem('username', 'kuchhbhi'); // Update the value
console.log('Updated Username from localStorage:', localStorage.getItem('username')); // Retrieve the updated value
localStorage.removeItem('username'); // Remove the key-value pair
console.log('Username after removal from localStorage:', localStorage.getItem('username')); // Should return null
localStorage.clear(); // Clear all data in localStorage

//sessionStorage all methods are same as localStorage but the data is cleared when the session ends.
sessionStorage.setItem('sessionName', 'sessionValue'); // Set a key-value pair in sessionStorage
console.log('Session Name from sessionStorage:', sessionStorage.getItem('sessionName')); // Retrieve the value associated with the key 'sessionName'
sessionStorage.removeItem('sessionName'); // Remove the key-value pair
console.log('Session Name after removal from sessionStorage:', sessionStorage.getItem('sessionName')); // Should return null   
// Note: To see the effect of sessionStorage, you can try closing and reopening the tab or browser.

// cookies
document.cookie = "user=John; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"; // Set a cookie
console.log('Cookies:', document.cookie); // Retrieve all cookies
// Note: Cookies have size limitations and are sent with every HTTP request, which can affect performance.


localStorage.clear(); // Clear all data in localStorage
sessionStorage.clear(); // Clear all data in sessionStorage

/* Into local storage we can only store string data. If we want to store objects or arrays, we need to convert them into a string format using JSON.stringify() before storing them. When retrieving the data, we can convert it back to its original format using JSON.parse().*/

// Example of storing and retrieving an object in localStorage

localStorage.setItam('user', JSON.stringify({name: "yogesh", age: 24})); // Storing an object
const user = JSON.parse(localStorage.getItem('user')); // Retrieving and parsing the object
console.log('User Object from localStorage:', user); // Output: {name: "yogesh", age: 24}
// Example of storing and retrieving an array in localStorage

localStorage.setItem('numbers', JSON.stringify([1, 2, 3, 4, 5])); // Storing an array
const numbers = JSON.parse(localStorage.getItem('numbers')); // Retrieving and parsing the array
console.log('Numbers Array from localStorage:', numbers); // Output: [1, 2, 3, 4, 5]  
