   
/* Making user input case insensitive and removing extra spaces. 
source: https://www.w3schools.com/jsref/jsref_trim_string.asp#:~:text=The%20trim()%20method%20removes%20whitespace%20from%20both%20sides%20of%20a%20string. */
let word = prompt("Please enter a word.").toLowerCase().trim();
// initialising variable for user input for 'word' but backwards.
let backWord = "" ; 
// going through each character of the word entered by the user.
let i = word.length-1 ; 

// As long as the word length is more than 0 we can test if it is a palindrome.
while (i >= 0) {
    /* Making the word that the user inputs backward by going through the letters 
    in the words backwards iteratively. */
    backWord = backWord + word[i]
    // Subtracts one to index to go through each letter of the word.
    i -= 1
}
/* if the word the user inputs is the same as the words backwards then the output
be that the word is a palindrome, otherwise the output will be that it is not a palindrome.*/
if (word === backWord) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}