// Create a map that can be used as a translator for a language of your choice. 
// Ask the user what word they would like to translate.
// When the user inputs a word that is one of the keys, it should output the corresponding value.

// Initialise variables
let translations = new Map();
let wordToTranslate = "";

// 10 key-value pairs, where the English word is the key, and the translated word is the value.
translations.set("hello", "hola");
translations.set("father", "padre");
translations.set("mother", "madre");
translations.set("dog", "perro");
translations.set("cat", "gato");
translations.set("toast", "tostada");
translations.set("water", "agua");
translations.set("night", "noche");
translations.set("day", "día");
translations.set("moon", "luna");
translations.set("sun", "sol");

// Print out the keys in the map (English words).
console.log(translations.keys());
// Ask user to choose a word from the list that they would like to translate to Spanish.
// Make the word they input to lower case to avoid errors.
wordToTranslate = prompt("Choose a word to translate to Spanish.").toLowerCase();
// This is to check that the word to translate is in the map 
// Use the key to get the corresponding value stored in the map.
if (translations.has(wordToTranslate)) {
    /* print the corresponding value stored in the map with the word the user requested to 
    translate from the list. */
    console.log(translations.get(wordToTranslate));
    // Else, alert the user that the word they have chosen to translate is not in the list.
} else {
    alert("Word is not included in the options")
}

