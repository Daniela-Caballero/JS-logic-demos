separationString = (myString) => {
    // Place your code here
    // Split myString into an array of words separated by spaces.
    let splitString = myString.split(' ');
    // Iterate through each index of splitString
    for(let i in splitString) {
        // Add \n at the end of each word so the words are printed on separate lines.
        splitString[i] = splitString[i] + " \n"
    }
    // Join the array to get a single string
    myString = splitString.join('')
    // Output the string
    return myString
}

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9"
];

console.log("------------------------------------------------")

testStrings.forEach((sentence) => {
    let sep = separationString(sentence);
    console.log(sep);
    console.log("------------------------------------------------")

});
