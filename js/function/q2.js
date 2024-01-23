// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
// personalized greeting message. Use this function to greet three different people.

function generateGreeting(name){
    return "good morning "+name;

}
let user=generateGreeting("vikash");
console.log(user);
 user=generateGreeting("rohit");
console.log(user);
 user=generateGreeting("subham");
console.log(user);


// another way
const array= ["vikas","rohit","subham"];
for (let index = 0; index < array.length; index++) {
   console.log(generateGreeting(array[index]));
    
}