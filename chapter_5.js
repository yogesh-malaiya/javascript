//chapter 5: This chapter covers loops in JavaScript
//for loop

/*
for (start; condition/End; increment/decrement){
    //code block to be executed
}
*/
console.log("For loop example");
let j=2;
for (let i=1; i<=10; i++){
    console.log(i*j);
}

/*while loop
starting point
while(condition/End){
    //code block to be executed
    increment/decrement
}
*/
console.log("While loop example");
let k = 1;
while(k<=100){
    console.log(k);
    k++;
}

//do while loop
/*
starting point
do{
    //code block to be executed
    increment/decrement
}while(condition/End);
*/
console.log("Do while loop example");
let l = 1;
do{
    console.log(l);
    l++;
}while(l<20){
    console.log(l);
}

//break and continue statement
console.log("Break statement example");
for(let m=1; m<=20; m++){
    console.log(m);
    if(m===15){
        break;
    }
}

//continue statement
console.log("Continue statement example");
for(let p=1; p<=30; p++){
    if(p===20){
        continue; //this will skip the number 20 not print it
    }
    console.log(p);
}

//Q.1 print Numbers from 1 to 10 using for loop
//Q.2 print numbers from 10 to 1 using while loop
//Q.3 print even numbers from 1 to 20 using do while loop
//Q.4 print odd numbers from 1 to 20 using for loop but skip number 13 using continue statement
//Q.5 print numbers from 1 to 50 using for loop but stop the loop when number reaches 25 using break statement
//Q.6 print even numbers from 1 to 20 using for loop and break the loop when number reaches 16 using break statement
//Q.7 print multiplication table of 7 using for loop
//Q.8 find sum of numbers from 1 to 100 using loop
//Q.9 print all the numbers from 1 to 50 that are divisible by 3 using for loop