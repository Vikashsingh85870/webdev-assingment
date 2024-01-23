// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function income_Tax_Calculator(salary) {
    if(salary<250000)return 0;
    else if(salary>=250000 && salary<500000) return (5*salary)/100;
    else if(salary>=500000 && salary<750000) return (10*salary)/100;
    else if(salary>=750000 && salary<100000) return (15*salary)/100;
    else if(salary>=1000000 && salary<1250000) return (20*salary)/100;
    else if(salary>=1250000 && salary<1500000) return (25*salary)/100;
    else{
        return (30*salary)/100;
    }

}

console.log(income_Tax_Calculator(500457450));