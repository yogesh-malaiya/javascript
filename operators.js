// in this chapter we will explore javascript operators and their usage in expressions
/* Operators in JavaScript:
    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Logical Operators
    5. Bitwise Operators
    6. Ternary Operator
    7. Type Operators
*/

// Arithmetic Operators
//adition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), decrement (--)
let a = 10;
let b = 5;
let name = "Yogesh";
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0 modulus gives remainder after division
console.log("Increment:", ++a); // 11
console.log("Decrement:", --b); // 4


// Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log("c after += 5:", c); // 25
c -= 10; // c = c - 10
console.log("c after -= 10:", c); // 15

// Comparison Operators
console.log("Equal:", a == b);
console.log("Not Equal:", a != b);
console.log("Strict Equal:", a === b);
console.log("Strict Not Equal:", a !== b);
console.log("Greater Than:", a > b);
console.log("Less Than:", a < b);
console.log("Greater Than or Equal To:", a >= b);
console.log("Less Than or Equal To:", a <= b);
// their are !=== , === operators also
// == and != check only value but === and !=== check value and type also
console.log("10" == 10); // true 
console.log("10" === 10); // false


// Logical Operators
let isAdult = true;
let hasID = false;
console.log("Logical AND:", isAdult && hasID); // false
console.log("Logical OR:", isAdult || hasID); // true
console.log("Logical NOT:", !isAdult); // false
// Bitwise Operators
let x = 5; // 0101 in binary
let y = 3; // second operand for bitwise examples

// Bitwise AND (&): 1 where both bits are 1
console.log("5 & 3 =", x & y); // 0101 & 0011 = 0001 -> 1

// Bitwise OR (|): 1 where at least one bit is 1
console.log("5 | 3 =", x | y); // 0101 | 0011 = 0111 -> 7

// Bitwise XOR (^): 1 where bits are different
console.log("5 ^ 3 =", x ^ y); // 0101 ^ 0011 = 0110 -> 6

// Bitwise NOT (~): inverts all bits (results in two's complement negative for integers)
console.log("~5 =", ~x); // ~0101 = ...11111010 -> -6 (32-bit signed result)

// Left shift (<<): shift bits left, filling with zeros on right
console.log("5 << 1 =", x << 1); // 0101 << 1 = 1010 -> 10

// Signed right shift (>>): shift bits right, preserving sign bit
console.log("5 >> 1 =", x >> 1); // 0101 >> 1 = 0010 -> 2

// Zero-fill right shift (>>>): shift bits right, fill with zeros from left
console.log("5 >>> 1 =", x >>> 1); // 0101 >>> 1 = 0010 -> 2 (same as >> for positive numbers)


// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote); // Yes, can vote



// Type Operators
console.log("Type of a:", typeof a); // number
console.log("Type of name:", typeof name); // string
console.log("Type of isAdult:", typeof isAdult); // boolean
console.log("Type of user:", typeof user); // object
console.log("Is user an instance of Object?:", user instanceof Object); // true
console.log("this is Array")
let colors = ["Red", "Green", "Blue"];
console.log(typeofcolors);

// instanceof checks whether an object is an instance of a specific class or constructor function
// instanceof means kya {A} khun ya bansaj hai Array ka
//instanceof tell types of non-primitive data types(reference types) and typeof tell types of primitive data types
age instanceof Number; // false because age is a primitive number, not an object
colors instanceof Array; // true because colors is an array object  
