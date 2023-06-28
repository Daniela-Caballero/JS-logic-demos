

// Syntax error; incorrect indentation, all lines should be in line.

// Syntax error; missing brackets after console.log
console.log("Welcome to the error program"); 
// Sytax error; missing brackets.
console.log("\n"); 
// Syntax error; Missing brackets.
/* Runtime error; ageStr "24 years old" is a valid string however it cannot be casted 
as a number. */
// Integer is not a casting function.
let ageStr = "24"
// Compilation error; Integer not a known function. use Number() instead.
// Better practice to declare variable
age = Number(ageStr)
console.log("I'm "+age+" years old."); 
/* Logical error; trying to add the string three to the number age. We need 
to cast three to a number before adding it. */
let three = Number("3");
let answerYears = age + three;
// Sytax error; Missing brackets
console.log("The total number of years: " + answerYears);
// Logical error; incomplete calculation, need to add 6 at the end. 
let answerMonths = answerYears*12+6
// Syntax error; missing brackets.
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old");


