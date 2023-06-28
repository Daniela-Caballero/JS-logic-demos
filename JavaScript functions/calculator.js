// Defining functions to carry out calculations for later in the code

// Input two numbers 
function addition(num1, num2) {
    // calulation for addition of two numbers
    let addition = num1 + num2
    // output the sum of the two numbers
    return addition
}
// Input two numbers 
function subtraction(num1, num2) {
    // calulation for difference of two numbers
    let subtraction = num1 - num2
    // output the difference of the two numbers
    return subtraction
}
// Input two numbers
function multiplication(num1, num2) {
    // calulation for the product of two numbers
    let multiplication = num1 * num2
    // output the product of the two numbers
    return multiplication
}
// Input two numbers
function division(num1, num2) {
    // calulation for division of two numbers
    let division = num1/ num2
    // output the division of the two numbers
    return division
}

// Ask user for the first number
let firstNum = Number(prompt("Please enter a number"))
// Ask user for the second number
let secondNum = Number(prompt("Please enter a second number"))
// Ask user what caluculation they would like to do on the numbers
let calculation = prompt(`What calculation would you like to perform on the numbers?
a. addition
b. subtraction
c. multiplication
d. division
`)
// Initialise the variable for calculations
let myTotal= 0

/* Depending on which calculation the user has chosen they would like to do,
one of the following cases will be executed: */
switch(calculation) {
     /* In the case that the user enters 'a', the sum of the numbers will be 
     calculated. */
    case "a":
        /* Calculate the sum of the two numbers the user has entered 
        using the addition function.*/
        myTotal = addition(firstNum, secondNum)
        // Print the calculation and answer.
        console.log(`${firstNum} + ${secondNum} = ${myTotal}`)
        break;
    /* In the case that the user enters 'b', the difference between the numbers 
    will be calculated */
    case "b":
        /* Calculate the difference of the two numbers the user has entered 
        using the subtraction function.*/
        myTotal = subtraction(firstNum, secondNum)
          // Print the calculation and answer.
        console.log(`${firstNum} - ${secondNum} = ${myTotal}`)
        break;
    /* In the case that the user enters 'c', the multiplication between the numbers 
    will be calculated */
    case "c":
        /* Calculate the product of the two numbers the user has entered 
        using the multiplication function.*/
        myTotal = multiplication(firstNum, secondNum)
          // Print the calculation and answer.
        console.log(`${firstNum} * ${secondNum} = ${myTotal}`)
        break;
    /* In the case that the user enters 'd', the division between the numbers 
    will be calculated */
    case "d":
        /* Calculation for the division of the two numbers the user has entered 
        using the division function.*/
        myTotal = division(firstNum, secondNum)
          // Print the calculation and answer.
        console.log(`${firstNum} / ${secondNum} = ${myTotal} `)
}