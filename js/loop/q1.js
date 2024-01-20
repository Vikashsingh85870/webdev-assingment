// What are conditional statements? Explain conditional statements with syntax and examples.
/*

Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions.
 If the condition meets then a particular block of action will be executed otherwise it will execute another
  block of action that satisfies that particular condition.

There are several methods that can be used to perform Conditional Statements in JavaScript.

if Statement
if-else Statement
else if Statement
switch Statement
Ternary Operator
*/
// if statement=>  when condition are statisfiend then if scope are executed otherwise skip
let val=10;
if(val>10){
    console.log(`if statement condition are satisfied`);
}

let val2=11;
if(val2>10){
    console.log(`if statement condition are satisfied`);
}

// if-else statement -> when condition are statisfiend then if scope are executed otherwise else will be executed
let val3=10;
if(val3>10){
    console.log(`if statement condition are satisfied`);
}
else{
    console.log(`if statement condition are not  satisfied`); 
}

// else if ->it is braches of condition when  condition are not satisfied than check next condition than ..satisfied than executed 

const salary = 50000;
if(salary >0 && salary<20000){
    console.log(`salary is ${salary}`);
}
else if(salary>=20000 && salary<30000){
    console.log(`salary is ${salary}`);

}
else if(salary >=30000 && salary <=50000){
    console.log(`salary is ${salary}`);
}
else{
    console.log(`salary is greater than 50000`);
}

// switch case 
let  a=5;
switch (a) {
    case 1: console.log("sunday");
        
        break;
        case 2: console.log("monday");
        
        break;
        case 3: console.log("tuesday");
        
        break;
        case 4: console.log("wednesday");
        
        break;
        case 5: console.log("thrusday");
        
        break;
        case 6: console.log("friday");
        
        break;

    default: console.log("saturday");
        break;
}

// ternary case


let age = 21; 
  
const result = 
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote."; 
  
console.log(result);