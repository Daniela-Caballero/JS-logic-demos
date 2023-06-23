/* testing if the quadrilateral is a square, rectangle, rhombus 
or parallelogram.*/
// Using diagram on T2 in T5 as a guide for which side the variables refer to.

// Ask user for the length of each side, there are four sides so create a variable for each side.
let lengthOfSide1 = Number(prompt("What is the length of side 1?"));
let lengthOfSide2 = Number(prompt("What is the length of side 2?"));
let lengthOfSide3 = Number(prompt("What is the length of side 3?"));
let lengthOfSide4 = Number(prompt("What is the length of side 4?"));

// Ask user for the measurement of each angle, there are four angles, so four variables will be created for each angle.
let corner1 = Number(prompt("What is the measurement of angle 1?"));
let corner2 = Number(prompt("What is the measurement of angle 2?"));
let corner3 = Number(prompt("What is the measurement of angle 3?"));
let corner4 = Number(prompt("What is the measurement of angle 4?"));


// First check that we can test if the shape the user inputs is a quadrilateral by testing if the lengths of the sides > 0 and the four angles sum up to 360. 
if((lengthOfSide1 > 0) && (lengthOfSide2 > 0) && (lengthOfSide3 > 0) && (lengthOfSide4 > 0) && (corner1 + corner2 + corner3 + corner4 == 360)) {
    // Check for a square, i.e. all lengths the same and all angles = 90
    // logic: a = b, b = c, c = d
    if((lengthOfSide1 == lengthOfSide2 && lengthOfSide2 == lengthOfSide3 && lengthOfSide3 == lengthOfSide4) && (corner1 == 90 && corner2 == 90 && corner3 == 90 && corner4 == 90)) {
        console.log("Your shape is a square!");
    // Testing for rectangle:
    // opposite sides equal: a = c, b = d
    // all corners must == 90
    // Check for a rectangle
    } else if((lengthOfSide1 == lengthOfSide3 && lengthOfSide2 == lengthOfSide4) && (corner1 == 90 && corner2 == 90 && corner3 == 90 && corner4 == 90)) {
        console.log("Your shape is a rectangle!");
    // Testing for rhombus:
    // All side equals: a = b, b = c, c = d
    // opposite angles equal. Two opposite angles <90, the other two >90.
    // (corner1 and corner2 > 90) and (corner2 and corner4 < 90) OR (corner1 and corner 3 < 90) and (corner2 and corner 4 > 90)
    } else if((lengthOfSide1 == lengthOfSide2 && lengthOfSide2 == lengthOfSide3 && lengthOfSide3 == lengthOfSide4) && (corner1 == corner3) && (corner2 == corner4)) {
        if(((corner1 > 90 && corner3 > 90) && (corner2 < 90 && corner4 < 90)) || ((corner1 < 90 && corner3 < 90) && (corner2 > 90 && corner4 > 90))) {
            console.log("Your shape is a rhombus!");
        }
    // Testing for parallelogram:
    // Opposite side equal: a = c, b = d
    // Opposite angles equal. Two opposite angles < 90, the other two > 90.
    // (corner1 and corner2 > 90) and (corner2 and corner4 < 90) OR (corner1 and corner 3 < 90) and (corner2 and corner 4 > 90)
    } else if((lengthOfSide1 == lengthOfSide3 && lengthOfSide2 == lengthOfSide4) && (corner1 == corner3) && (corner2 == corner4)) {
        if(((corner1 > 90 && corner3 > 90) && (corner2 < 90 && corner4 < 90)) || ((corner1 < 90 && corner3 < 90) && (corner2 > 90 && corner4 > 90))) {
            console.log("Your shape is a parallelogram!");
        }
    }
// If none of these conditions are true, then the properties the user input indicate the shape is neither a square, rectangle, rhombus or parallelogram.
} else {
    alert("Your shape is neither a square, rectangle, rhombus or parallelogram.");
}