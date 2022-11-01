console.log(`Working with loops`);

console.log("Possible destinations: ");

const destinationsList = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log(destinationsList);

const ageBuyer = 18;
const legalGuardian = false;
let ticketBought = false;
const destination = "Salvador";
const canBuy = ((ageBuyer >= 18) || (legalGuardian == true));

let counter = 0;
let availableDestination = false;

/*while (counter < 3) {
    if (destinationsList[counter] == destination) {
        availableDestination = true;
        break;
    }
    counter += 1;
}*/

for (let i = 0; i < 3; i++) {
    if (destinationsList[i] == destination) {
        availableDestination = true;
    }
    counter += 1;
}

console.log("Destination available: ", availableDestination);

if (canBuy && availableDestination) {
    console.log("Have a nice trip!");
} else {
    console.log("Error.");
}