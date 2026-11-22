// time converter ND

const totalSeconds = Number(prompt("This is a number for the seconds"));
const hours = Math.floor(totalSeconds / 3600);

console.log(`${hours.toFixed(2)} pm`);

const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(`${totalSeconds} sekundes = ${hours} val. ${minutes} min ${seconds}s`);
