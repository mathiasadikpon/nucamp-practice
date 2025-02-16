const pets = ["goldfish", "dog", "turtle", "tiger"];

// CHALLENGE 1: Uncomment line 4 then use that line for your challenge, and uncomment the console.log() in line 6 to test your challenge.
const petsShortNames = pets.filter((pet) => pet.trim().length <= 5);
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);

// CHALLENGE 2: Uncomment line 9 and line 11 when you've finished challenge 1
const petsTNames = pets.filter((pet) => pet.at(0) === "t");
// The below line should console.log: ["turtle", "tiger"]
console.log(petsTNames);

const numbers = [3, 7, 4, 5, 10];
//3 - uncomment line 15 and line 17
const numbersBiggerThanFour = numbers.filter((num) => num > 4);
// The below line should console.log: [7, 5, 10]
console.log(numbersBiggerThanFour);

//Bonus - uncomment line 20 and line 22
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// The below line should console.log: [4, 10]
console.log(evenNumbers);
