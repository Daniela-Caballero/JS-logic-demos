// Syntax error; missing quotation marks.
let animal = "Lion"
// Syntax error; variables should be aligned.
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = "4";

// variable names do not need to be made into a string.
// Logical error; template literals require `$() instead of double quotation marks.
// Syntax error; variable names have been changed.
let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth.`
/* Runtime error; Double equals should be used for loose comparisons and the single equal sign is used to assign a value to a variable or to 
initialise a variable. Loose comparison is needed because numberOfLegas and 3 are not of teh same datatype.*/
if (numberOfLegs == 3) {
    // Syntax error; missing brackets.
    console.log(fullSpec);
}
