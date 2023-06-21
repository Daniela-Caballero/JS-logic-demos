// Create manually assigned variables to be used for later functions.
let myFirstNumber = 15;  
let mySecondNumber = 2;
let myFirstString = "Chocolate";
let mySecondString = "99 flake";
let myBoolean = true;

// Output of multiplying the two numerical variables.
console.log(myFirstNumber * mySecondNumber);
// Output of joining the two strings together.
console.log(myFirstString + " " +  mySecondString);

// Output of a multiline string using template literals. 
console.log(`The boolean is: ${myBoolean}
The first number is: ${myFirstNumber}
The second number is: ${mySecondNumber}
${myFirstNumber} x ${mySecondNumber} = ${myFirstNumber * mySecondNumber}
The first string is: ${myFirstString}
The second string is: ${mySecondString}
These two together make: ${myFirstString + " " + mySecondString}`);