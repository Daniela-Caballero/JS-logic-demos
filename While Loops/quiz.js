/* Program asking the user a multpile question. The program ends when the user 
guesses correctly or do not want to guess again.*/

// initialise the variables 
let tryAgain = "n"
let multipleChoice = ""

// Ask the user to enter an answer to the multiple choice question.
do {
    multipleChoice = prompt(`How many countries are there in Africa?
    a. 48
    b. 54
    c. 62
    d. 45`)
    // If the user enters 'b' then the output will be that they are correct
    if(multipleChoice == "b") {
        alert("You're correct!")
        // immediate exit from the loop if the first statement is true.
        break
    /* If the user enters an answer that isn't 'b' then the output will be that 
    they are incorrect */
    } else {
        alert("You're incorrect.")
        /* the user will have the option to try again. If the user selects 'n' 
        then the program exits.*/
        tryAgain = prompt("Do you want to try again? (y/n)")
    }
//The program will repeat as long as the user selects 'y'.
}while(tryAgain == "y");