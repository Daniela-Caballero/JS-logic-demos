// Variable created to ask user for a word.
let wordInput = prompt("Give me a word.")
// Split the word into an array to be able to iterate through each letter.
let wordArray = wordInput.split('')
// Initialise variable for making the word backwards
let backWord = ""
// Set j to last index of wordInput.
let j = wordInput.length-1;
// Split the word into an array to be able to iterate through each letter.
let wordUpper = wordInput.split('')
// Split the word into an array to be able to iterate through each letter.
let asciiArray = wordInput.split('')

// Change every second character to '!'
for(let i = 1; i < wordInput.length; i += 2) {
   wordArray[i] = "!"
}
// Rejoin array values into a string
wordArray = wordArray.join('')
console.log(wordArray)

// reverse word
while(j >= 0) {
   // The index of j is set to the last index of the wordInput
   /* the value of j decreases in each iteration until it becomes 0. This 
   way it works through wordInput from its last index to 0. */
   backWord = backWord + wordInput[j]
   j -= 1
}
console.log(backWord)


if(wordInput.length >= 6) {
   // Iterate through loop, every 6th letter becomes an uppercase using .UpperCase()
   for(let i = 5; i < wordInput.length; i += 6) {
      wordUpper[i] = wordUpper[i].toUpperCase()
   }
}
// Rejoin array values into a string and output the string.
wordUpper = wordUpper.join('')
console.log(wordUpper)
   
// An array of the ascii values for each character in the word
// for in loop used to iterate through the array of characters.
for(let i in asciiArray) {
   // Iterating through each value in the array and transforming it to its ascii value.
   asciiArray[i] = asciiArray[i].charCodeAt(0)
}
// Output the ascii array.
console.log(asciiArray)