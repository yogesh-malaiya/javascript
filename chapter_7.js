//In this chapter we will cover arrays in JavaScript

// In javaScript , array intedxes start from 0

//Array declaration
console.log("Array declaration example");
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
//Accessing array elements
console.log("Accessing array elements:");
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//modifying array elements
console.log("Modifying array elements:");
fruits[1] = "Blueberry";
console.log(fruits);

//Array methods

//array push method
console.log('Array push method');
fruits.push("Orange"); //this will add data at the end of the array
console.log(fruits);

//array pop method
console.log('Array pop method');
fruits.pop(); //this will remove data from the end of the array
console.log(fruits);

//array unshift method
console.log('Array unshift method');
fruits.unshift("Mango"); //this will add data at the beginning of the array
console.log(fruits);

//array shift method
console.log('Array shift method');
fruits.shift(); //this will remove data from the beginning of the array
console.log(fruits);

//array splice method
console.log('Array splice method');
fruits.splice(1, 2, "Kiwi", "Pineapple"); //this will remove 2 elements from index 1 and add Kiwi and Pineapple
console.log(fruits); //splice will remove elements starting from index 1 and this will remove 2 elements and add Kiwi and Pineapple

//array slice method
console.log('Array slice method');
//slice not manupulate original array its create new array
let citrusFruits = fruits.slice(1, 3); //this will create a new array from index 1 to index 3 (excluding index 3)
console.log("Sliced array:");
console.log(citrusFruits);

//array reverse method
console.log('Array reverse method');
fruits.reverse(); //this will reverse the array
console.log(fruits);

//array sort method
console.log('Array sort method');
//sort alway need a function to sort properly 
// in that function  A - B means ascending order && B - A means decending order
let numbers = [5, 6, 2, 5, 9, 7, 10, 1, 4, 3];
numbers.sort(); //this will sort the array in ascending order
//sort decending order
let decending = numbers.sort((a, b) => b - a);
console.log(`Decending order using function: ${decending}`);
//sort ascending order
let assending = numbers.sort((a, b) => a - b);
console.log(`Assending order using function: ${assending}`);

// forEach method
console.log('forEach method');
numbers.forEach(function(numbers){
    console.log(`Number: ${numbers}`);
    console.log(`ADD 5 to ${numbers} number: ${numbers + 5}`);
})

//map method
console.log('map method');
let squaredNumbers = numbers.map(function(numbers){
    return numbers * numbers;
});
console.log(`Squared numbers: ${squaredNumbers}`);

//filter method
console.log('filter method');
let evenNumbers = numbers.filter(function(val){
    if (val % 2 ===0) return val;
});
console.log(`Even numbers: ${evenNumbers}`);


//reduce method
console.log('reduce method');
let sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(`Sum of numbers: ${sum}`);

//find method
console.log('find method');
let foundNumber = numbers.find(function(val){   //find method will return the first element that satisfies the condition
    return val > 5;   //this will find the first number greater than 5
});
console.log(`First number greater than 5: ${foundNumber}`);

//some method
console.log('some method');
let hasEvenNumber = numbers.some(function(val){  //some method will return true if at least one element satisfies the condition
    return val % 2 === 0;
});
console.log(`Array has even number: ${hasEvenNumber}`);


//every method
console.log('every method');
let allEvenNumbers = numbers.every(function(val){    //every method will return true only if all elements satisfy the condition
    return val % 2 === 0;
});
console.log(`All numbers are even: ${allEvenNumbers}`);