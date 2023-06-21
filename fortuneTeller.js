// Asks user to assign values to variables based on the following questions:
let motherFirstname = prompt("What's your mother's first name?"); 
let streetName = prompt("What's the name of the street you grew up on?");
let favouriteColour = prompt("What was your favourite colour as a child?"); 
let age = prompt("How old are you?"); 
let number = prompt("choose a number between 1 and 10"); 


// Used template literals to create mulit-line output using the user assigned variables, the output represents the user's fortune.
// Within the literal motherFirstname and streetName are concatenated to create the user's best friend's name. Math.round is used 
// to round the number of years until marriage to the nearest integer. The modulus function (%) is used to return the remainder 
// of age divided by number. This provides the output of the number of children the user will have. The number of years until the 
// user dyes their hair their favourite colour is calculated by subtracting number from age.
console.log(`In ${number} years you are going to meet your best friend named ${motherFirstname + " " + streetName}.
You will get married in ${Math.round(age / 5)} years and have ${age % number} children.
In ${age - number} years you are going to dye your hair ${favouriteColour}.`); 


// Source for usage of Math.round: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
