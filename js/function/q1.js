// Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
// the arrow function to calculate the square of a given number and display the result.

let Square= (val)=> {
 //   console.log(`sqaure of ${val} :${val*val}`);
    return val*val;
};
  let val=6;

  console.log(`sqaure of ${val} :${Square(val)}`);