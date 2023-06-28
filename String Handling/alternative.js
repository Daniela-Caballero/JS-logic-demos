alternativeString = (myString) => {
//     // Place your code here
// Convert myString into an array of characters so that we can index it.
let stringSplit = myString.split('');

    // Iterate through each index of stringSplit
    for(let i in stringSplit) {
        // If i is even, convert the character to at index i to uppercase.
        if (i % 2 == 0) {
            stringSplit[i] = stringSplit[i].toUpperCase()
        // else if i is odd convert character to lowercase.
        } else {
            stringSplit[i] = stringSplit[i].toLowerCase()
        }
    }
    // Join the array to get a single string again
    myString = stringSplit.join('');
    // output the string.
    return myString 
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}