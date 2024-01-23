// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function factorial(number) {
    if(number==1)return 1;
    return number *factorial(number-1);

}

console.log(factorial(52));