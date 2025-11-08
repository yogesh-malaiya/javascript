var Age = 5;
let age 20;
const name=ohn";
let drive;

function greet(){
    console.log(`heres the age of ${name} is ${age}`);
}

let checkDrive = ()=>{
    if (age >= 18){
        drive = true;
        console.log(`Hi! ${name} you can drive now.`)
    }else {
        drive =false;
        console.log(`Hi! ${name} you cannot drive. \n Wait for ${18 - age} years.`);
    }
}

greet();
checkDrive();

let array = [1, 2, 3, 4, 5];
console.log(`Array: ${array}`);

let obj = {
    Name : `${name}`,
    age : `${age}`,
}