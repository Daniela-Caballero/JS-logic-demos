/* This program always asks the user to keep entering a number. When the user inputs -1, the program 
will stop requesting the user to input a number then will calculate the average of the numbers that were
input, excluding -1. */

let number = Number(prompt("Please enter a number. Type in -1 to stop."));
let listNumbers = [];
let sumListNumbers = 0

// So long as the user enters a number that isn't -1, they will keep being asked to enter a number
while (number != -1) { 
    /* Adding new entered numbers by user in the array variable 'listNumbers'. Source: T8, T9 lecture 
    - While loops and for loops, 13/12/2022. */
    listNumbers.push(number);
    // Asks user to enter number whilst previous number isn't -1
    number = Number(prompt("Please enter a number. Type in -1 to stop."))
}
// Initialise variable 'index' for the first index in the array.
let index = 0
// We use the function listNumbers.length to find the number of elements in the listNumbers array.
// The while loop will stop once the the index is not the length of the listNumbers array.
while (index != listNumbers.length) {
    // Extract the value at the given index from the array
    listNumbers[index]
    // Sum the numbers in the array iteratively. 
    sumListNumbers = sumListNumbers + listNumbers[index]
    // Adds one to index to go through each element of the array.
    index++
}
/* To work out the average of the numbers in the array, sumListNumbers divided by the the number 
of elements in the array. */
console.log("The average of the numbers entered is " + sumListNumbers/ listNumbers.length);
