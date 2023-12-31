disappearString = (myString, toErase) => {
    // Place your code here
    // Convert myString and toErase into arrays of characters so that we can index through the strings.
    let stringSplit = myString.split('');
    let eraseSplit = toErase.split('');

    // Loop through the letters in toErase
    for(let letterToErase of eraseSplit) {
        // Loop through letters in myString for each letter in toErase
        for(let i in stringSplit) {
            /* If the current letter in myString is equal to the letterToErase, erase that letter
            from myString by converting the corresponding letter in the array to an empty string.*/
            if(stringSplit[i] === letterToErase) {
                stringSplit[i] = ""
                /* We only want to remove the first instance of the letter to erase and hence break 
                once a match has been found. */
                break
            }
        }
    }
    // Rejoin the array to give string with erased letters
    myString = stringSplit.join('')
    // Output the string.
    return myString
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]

let stringToDisappear = "aeiou"

let correctStrings = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = disappearString(test, stringToDisappear);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
