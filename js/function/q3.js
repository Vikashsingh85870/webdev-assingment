// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
// immediately displays the result.

(function (){ 
    let Square= (val)=> {
        //   console.log(`sqaure of ${val} :${val*val}`);
           return val*val;
       };
         let val=6;
       
         console.log(`sqaure of ${val} :${Square(val)}`);
    })();