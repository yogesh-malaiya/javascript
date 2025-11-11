// Selecting element by ID
let firstId = document.getElementById("first-Id");
console.log(firstId); // to see the element
console.dir(firstId); // to see all properties of the element

// Selecting element by Class Name
let firstClass = document.getElementsByClassName("first-class"); //This will select all elements with the class name and return an HTMLCollection
console.log(firstClass); // to see the HTMLCollection
console.dir(firstClass); // to see all properties of the HTMLCollection

// Accessing the first element from the HTMLCollection
let firstClassElement = firstClass[0];
console.log(firstClassElement);

// Selecting element by Tag Name
let divElements = document.getElementsByTagName("div"); //This will select all <div> elements and return an HTMLCollection
console.log(divElements);   // to see the HTMLCollection
console.dir(divElements);   // to see all properties of the HTMLCollection

//This is industrial method to select elements
let firstIdUsingQuery = document.querySelector("#first-Id"); // Selects the first element with the ID 'first-Id'
console.log(firstIdUsingQuery);
console.dir(firstIdUsingQuery);
let firstClassUsingQuery = document.querySelector(".first-class"); // Selects the first element with the class 'first-class'
console.log(firstClassUsingQuery);
console.dir(firstClassUsingQuery);

let allClassUsingQuery = document.querySelectorAll(".first-class"); // Selects all elements with the class 'first-class' and returns a NodeList
console.log(allClassUsingQuery);
console.dir(allClassUsingQuery);

let divUsingQuery = document.querySelectorAll("div"); // Selects all <div> elements and returns a NodeList
console.log(divUsingQuery);
console.dir(divUsingQuery);

if (firstId) { // Always good practice to check if the element exists
    firstId.textContent = "Hello, Dear John"; // Changes the text content
    console.log("textContent updated:", firstId);

    // Note: Applying these changes sequentially will overwrite the previous one.
    firstId.innerText = "Hello and Welcome to DOM manipulation"; // Changes the visible text
    console.log("innerText updated:", firstId);

    firstId.innerHTML = "<b>Hello, <i>whats your Name buddy?</i></b>"; // Changes the HTML structure
    console.log("innerHTML updated:", firstId);
}


// attribute manipulation

let a = document.querySelector('a'); // Selects the first <a> element
console.log("Before attribute change:", a);
a.href = "https://www.google.com"; // Changes the href attribute
a.target = "_blank"; // Sets the target attribute to open link in a new tab
console.log("After attribute change:", a);

a.setAttribute("href", "https://www.wikipedia.org"); // Another way to change the href attribute
console.log("After setAttribute change:", a);
a.setAttribute("target", "_self"); // Changes the target attribute to open link in the same tab
console.log("After setAttribute change:", a);   

let hrefValue = a.getAttribute("href"); // Retrieves the current href attribute value
console.log("Current href value:", hrefValue);

a.removeAttribute("target"); // Removes the target attribute
console.log("After removing target attribute:", a); 




//Dynamic DOM Manipulation
/* 1. Create the Element = document.createElement("tagName")
   2. Add Content to the Element = element.textContent = "your content"
   3. Append the Element to the Document = parentElement.appendChild(element)  
   4. Remove the Element from the Document = parentElement.removeChild(element)
*/


let h2 = document.createElement("h2"); // Step 1: Create the Element
h2.textContent = "This is a dynamically created heading"; // Step 2: Add Content to the Element
h2.textContent = "This is an updated dynamically created heading"; // Updating the content
document.querySelector(".dynamic").appendChild(h2); // Step 3: Append add the Element at the end
document.querySelector(".dynamic").prepend(h2); // prepend adds the element at the beginning


// To remove the element 
// h2.remove(); // Step 4: Remove the Element from the Document
// Alternatively, you can also remove it using the parent element
// document.querySelector(".dynamic").removeChild(h2);


// You can also create and append other elements like paragraphs, divs, etc.
let p = document.createElement("p");
p.textContent = "This is a dynamically created paragraph.";
document.querySelector(".dynamic").appendChild(p);


// changing styles via DOM
// document.querySelector("h2").style.color = "#e50b0bff";


//classList manipulation
h2.classList.add("demo"); // Adds the class dynamic to the h2 element
console.log("After adding class:", h2);
// h2.classList.remove("demo"); // Removes the class dynamic from the h2 element
// h2.classList.toggle("demo"); // Toggles the class dynamic on the h2 element this will remove if already present else add


