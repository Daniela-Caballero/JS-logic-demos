let favouriteColours = ["blue", "green", "pink", "purple"];
// Compilation error; missing brackets around question.
let userColour = prompt "What's your favourite colour?"
let index = 0
/* Runtime error; the array initialised only has 4 elements, index from 0 to 3. 
An element at position 4 is attempted to be accessed in the array but it does not exist 
as it is out of range.*/
// Logical error; variable userLeastFavColour has not been declared.
if(userLeastFavColour === favouriteColours[4]) {
    // Compilation error; keyword with capital 'C'. Javascript is case sensitive.
    Console.log("That's my favourite colour too!")
}
