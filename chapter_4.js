// In this chapter we going to cover control flow statements 
let a = 100;
let b = 50;


//IF statement
if(a >=b){
    console.log("A is greater than B");
}


//If Else statement
if(a<=b){
    console.log("A is less than B");
}else {
    console.log("A is greater than B");
}


//if else if statement
if(a===b){
    console.log("A is Equeal to B");
}else if(a>=b) {
    console.log("A is greater than B");
}else if (a<=b){
    console.log("A is less than B");
}else {
    console.log("A is not greater and less and equal than B");
}

let light = "On";

//Switch statement
switch (light){
    case "On":
        console.log("light is On");
        break;
    case "Off":
        console.log("light is Off");
        break;
    default:
        console.log("button is not pressed")
}

//easy return using ternary operator
function check(age, license){
    if(age>=18 && license===true) return "You can drive";
    else if (age>=18 && license===false) return "You need a license to drive";
    else return "You are not eligible to drive";
}
check(20, true);