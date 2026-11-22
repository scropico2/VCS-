// Dice ND
const firstGuess = Number(
  prompt(`The question for you human, what is going to be diced from the number (1-6)? Write your answer!`),
);
const secondGuess = Number(
  prompt(
    `This is the second dice question for you humanm, what is going to be diced from the number (1-6)? Write your answer`,
  ),
);

const firstDice = Math.floor(Math.random() * 6) + 1;
const secondDice = Math.floor(Math.random() * 6) + 1;

console.log(`This is the outcome of first dice: ${firstDice} (Your guess ${firstGuess})`);
console.log(`This is the outcome of second dice ${secondDice} (Your second guess ${secondDice})`);
console.log(`And this is the sum of both of them ${firstDice + secondDice}`);
