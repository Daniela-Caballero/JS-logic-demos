
// Initial integer for the countdown
let i = 20 
while (i >= 0) {
    console.log(i);
    // Update statement, shorthand for i = i - 1
    i--
}
// Create space between next output
console.log("");

// Variable is set at two.
// evenNum will stop iterating when it reaches 22.
// An update statement increments i by 2 so that it becomes the next even integer.
for (let evenNum = 2; evenNum < 22; evenNum += 2) { 
    console.log(evenNum)
}
// Create space between next output
console.log("");

// Number of rows for stars is 5 
let numRow = 5;
// Initialise star '*' variable
let star = ""
// Loop numRow times. After each loop add * to star.
for(let i = 1; i <= numRow; i++) { 
    star += "*";
    console.log(star);
}