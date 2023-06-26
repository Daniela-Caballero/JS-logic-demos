/* program to determine if a number input by user is divisible by 7
and 11, either 7 or 11, or neither. */ 

let number = Number(prompt("Please input a number")); // 

/* To find a number is divisible by another or not, use the modulus
operator and if remainder equals 0 then it is divisible and if not 
then it is not divisible. */
// First check if number is divisible by 7 and 11:
if(number % 7 === 0 && number % 11 === 0) { 
    console.log(number + " is divisible by both 7 and 11.");
// Check if it is divisible by 11 if not by 7 and 11:
} else if(number % 11 === 0) {
    console.log(number + " is divisible by 11.");
// Check if divisible by 7 if not 7 and 11:
} else if(number % 7 === 0) {
    console.log(number + " is divisible by 7.");
/* If not divisible by 7 and 11, 7 or 11 then the output will be it 
is divisible by neither. */
} else {
    console.log(number + " is divisible by neither 7 nor 11.");
}