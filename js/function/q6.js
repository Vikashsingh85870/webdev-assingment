// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

function add_number(val,val2){
     return val+val2;
}
function curry(val,val1,func){
    
    return add_number(val,val1);

}

let result=curry(2,5,add_number);

console.log(result);

