/*
Q2. Write a program that grades students based on their marks^
8 If grFatFr than 90 thFn A GradE
8 If bFtwFFn 70 and 90 thFn a B gradE
8 If bFtwFFn 50 and 70 thFn a C gradE
8 BFlow 50 thFn an F gradF
*/
let marks=100;
if(marks>=90) console.log(`grade : A`);
else if(marks>=70 && marks<90) console.log(`grade : B`);
else if(marks>=50 && marks<70) console.log(`grade :C`);
else console.log("grade : F");