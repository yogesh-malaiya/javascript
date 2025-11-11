//In this section we will handle all the events that occur in our application

/*
Element.addEventListener('EventName', function(){
    Element.your code here
})
    */


let h1 = document.querySelector("h1");
h1.addEventListener('click', function(){
    h1.textContent = "You clicked me!";
});

//another way of writing the same code using a named function
function handleMouseOver(){
    h1.textContent = "Mouse is over me!";
}

h1.addEventListener('mouseover', handleMouseOver);


//removing an event listener
h1.removeEventListener('mouseover', handleMouseOver);


//handling input events
let inputBox = document.querySelector("input");
inputBox.addEventListener('input', function(details){
    if(details.data !== null){
        const inputValue = this.textContent; // Access the input value
        console.log("Current input value:", inputValue);
    }
});


//Change event for select dropdown
let head = document.querySelector("#dvc-head");
let device = document.querySelector("#dvc");

device.addEventListener('change', function(dev){
    head.textContent = `${dev.target.value} selected`;
});


