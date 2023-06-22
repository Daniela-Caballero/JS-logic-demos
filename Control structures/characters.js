// This code will ask the user for an input and the output will change depending on the input

// Asks user to input an uppercase letter, a lowercase letter or a number. Note: default datatype from prompt is a string
let character = prompt("Input an uppercase letter, a lowercase letter or a number.");


/* check if the input is a number by casting the input from prompt to a Number, then use Number.isInteger() to 
return true if the number is an integer. To account for floats we use Math.round.to convert a float into an integer
so that Number.isInteger() will still return true if the input is a float. */
if(Number.isInteger(Math.round(Number(character)))) { 
    console.log(character + " is a number.");
/* This is to check if the user's input is a lowercase letter. If the user's input is lowercase, then if we apply
the .toLowerCase() function the user's input will not change. Thus, the user's input will be equal to the output
of .toLowerCase(). On the other hand, if we apply the .toUpperCase() function the character will change hence the 
user's input would not be equal to the output of .toUpperCase. This is additional check is included to avoid special 
characters being labelled as lower case because they do not change for either function. */ 
} else if(character === character.toLowerCase() && character != character.toUpperCase())  { 
    console.log(character + " is a lowercase letter."); 
// This is to check if the user's input is an uppercase letter. This follows the a similar logic as above. 
} else if(character === character.toUpperCase() && character != character.toLowerCase())  { 
    console.log(character + " is an uppercase letter.");
// If none of the above conditions are met, then the user has not given an input in the form that we have specified.
} else {
    console.log(character + " is not a letter or a number.");
}