console.log(`Working with lists`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Possible destinations: `);
//console.log(salvador, saoPaulo, rioDeJaneiro)

const destinationsList = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

destinationsList.push(`Curitiba`) // add an item on list
destinationsList.splice(1, 1)

console.log(destinationsList);
console.log(destinationsList[1])