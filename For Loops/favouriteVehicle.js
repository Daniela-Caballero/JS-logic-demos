
// Iterating the vehicles array and printing out every element in the array.
//let vehicles = ["Ferrari", "Honda Civic","Mercedes-Benz", "Land Rover", "Porsche"];
let vehicles = ["Ferrari", "Honda Civic" , "Mercedes-Benz",  "Land Rover" , "Porsche"];
let favouriteVehicle = "Land Rover";

/* The counter variable 'i' will start at the first index '0' and move through 
each element of the array */
// It increments one index with each loop.
for(let i = 0; i < vehicles.length; i++) {
    // Check if current value in the array is equal to favouriteVehicle.
    if(vehicles[i] === favouriteVehicle) {
        console.log(vehicles[i] + " is my favourite vehicle.");
    } else {
        console.log( vehicles[i] + " is not my favourite vehicle.")
    }
}