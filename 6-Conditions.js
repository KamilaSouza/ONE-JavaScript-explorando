console.log(`Working with conditions`);

console.log(`Possible destinations: `);

const destinationsList = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log(destinationsList);

const ageBuyer = 12;
const legalGuardian = true;
const showTicket = true;

if ((ageBuyer >= 18) || (legalGuardian)) {
    console.log("Have a nice trip!")
    destinationsList.splice(1, 1); // remove item
}
else {
    console.log("Not enought age to buy");
}

console.log("Boarding: \n");
if (showTicket && (ageBuyer >= 18)) {
    console.log("Have a nice trip!")
}
else {
    console.log("You can not board")
}

console.log(destinationsList);
