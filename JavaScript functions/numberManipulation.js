/* Initialising variables for user input followed by variable 
to create an array of numbers inputted by the user. */
let numbers = ""
let listOfNumbers = [];

// As long as i is less than 10, the loop will run and increment by one.
for(let i = 0; i < 10; i++) {
    // The user will be asked to input a number 10 times.
    numbers = Number(prompt("Please input a number."))
    // After being asked each time, the number will be moved to the array listOfNumbers.
    listOfNumbers.push(numbers);
}
// print the array of 10 numbers
console.log(listOfNumbers)

// initialise variable 
let total = 0
// iterate through the values of listOfNumbers, in each iteration add the value to the total
for(number of listOfNumbers) {
    total += number
}
console.log(total)

// Need to use ... for Math.max to work with an array. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// To find the maximum number of the array
let maxIndex = listOfNumbers.indexOf(Math.max(...listOfNumbers))
// Print the maximum number 
console.log(maxIndex)
// Need to use ... for Math.min to work with an array. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// Find the minimum number in the array
let minIndex = listOfNumbers.indexOf(Math.min(...listOfNumbers)) 
console.log(minIndex)
// Find the average by dividing the total by the length of the array.
let average = total/listOfNumbers.length
// Round answer to two decimal places. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#:~:text=The%20toFixed()%20method%20returns,it%20has%20the%20specified%20length.
console.log(average.toFixed(2))

// initialise median variable
let median = 0
// create variable to sort the array in.
// sort() function sorts values in an array, but as strings. To fix this, use the compare function.
// Source: https://www.w3schools.com/js/js_array_sort.asp
let sortedList = listOfNumbers.sort(function (a, b){return a - b});
// Hard-coded median used. list is sorted, add values at index 4 and 5 and divide by 2 to find the median.
median = (sortedList[4]+sortedList[5])/2
// Print the median
console.log(median)
