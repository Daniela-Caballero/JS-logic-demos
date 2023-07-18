// Initialise variables
let guestList = [];
let guests = ""
let addGuest = ""
let replaceGuest = ""
let guestToReplace = ""
let guestToReplaceWith = ""
let indexToReplace = ""

// Ask user to input guest names while the length of the array is less than 10.
do {
    guests = prompt("Please input the names you would like to invite to your dinner party.");
    if(guestList.length <= 9) {
        // Adding the names inputted to the guestList array
        guestList.push(guests) 
        /*If they try to add more to the list that has reached the limit of 10 guests, 
        ask user if they would like to replace a guest.*/
    } else {
        replaceGuest = prompt("You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? y/n?")
        if(replaceGuest = "y") {
            /* If the user says that they would like to replace a guest, print out the guest list so they can indicate 
            who they would like to replace. */
            console.log(guestList);
            // Ask who they would like to replace
            guestToReplace = prompt("Who would you like to replace?")
            // Check if the guest to replace is in the guest list.
            if(guestList.includes(guestToReplace)) {
                // Finding the index of guest to replace if it is in the list.
                indexToReplace = guestList.indexOf(guestToReplace)
                // Once the index of the guest to replace is found, it is replaced it.
                guestList[indexToReplace] = guests   
            } else {
                alert("That person is not on the list.")
            }
        }
    }
    // Ask user if they want to add more guests
    addGuest = prompt("Do you want to invite another person? y/n") 
    // loop back and repeat the process if user has said yes.
} while(addGuest == "y") 
console.log(guestList)