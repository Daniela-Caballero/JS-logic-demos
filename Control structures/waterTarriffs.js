// The code calculates the user's water bill based on the user's input of litres used. The cost is calculated
// using the level 3 water tarriff for the City of Cape Town (2018/19). Based on the user's number of litres 
// used, different water tarriffs will apply based on the level 3 water tarriff table.

// Ask the user for the number of litres of water used. Cast input into datatype number.
let litresOfWater = Number(prompt("What number of litres of water have you used?"))
// Initialise variables to be used for calculations later.
let difference = 0
let cost = 0 

// If the user has used between 0 and 6000l, they pay 15.73 for each kl used. 
if(litresOfWater == 0 || litresOfWater <= 6000){ 
    cost = 15.73 * litresOfWater / 1000 // litresOfWater is divided by 1000 to convert to kl.
    console.log(`You will be charged R${cost.toFixed(2)}`) // .toFixed(2) is used to return the cost to two decimal places.
// If the user used between 6000l and 10500l, they pay 22.38 for each kl used above 6kl. 
}else if(litresOfWater <= 10500) {
    difference = (litresOfWater / 1000) - 6 // Calculate the number of kl of water used above 6kl.
    cost = 15.73 * 6 + 22.38 * difference // calcuate the cost of water used at the previous rate plus the water used at the new rate.
    console.log(`You will be charged R${cost.toFixed(2)}`) 
// If the user used between 10500l and 35000l, they pay 31.77 for each kl used above 10.5kl.
}else if(litresOfWater <= 35000) {
    difference = (litresOfWater / 1000) - 10.5 // Calculate the number of kl of water used above 10.5kl.
    cost = 15.73 * 6 + 22.38 * 4.5 + 31.77 * difference // calcuate the cost of water used at the previous rates plus the water used at the new rate.
    console.log(`You will be charged R${cost.toFixed(2)}`)
// If the user uses more than 35000, they pay 69.76 for each kl used above 35kl.
}else {
    difference = (litresOfWater / 1000) - 35 // Calculate the number of kl of water used above 35kl.
    cost = 15.73 * 6 + 22.38 * 4.5 + 31.77 * 24.5 + 69.76 * difference // calcuate the cost of water used at the previous rates plus the water used at the new rate.
    console.log(`You will be charged R${cost.toFixed(2)}`)
}

// Source for .toFixed(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed