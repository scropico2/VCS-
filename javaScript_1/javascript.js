console.log("Hello, Worlds!"); // comment // /* comment for more lines  */
// comment //
/* comment for more lines  */

let vardas = "Simas";
console.log(vardas);
const pavarde = "Cicenas";
console.log(pavarde);

let pilnasVardas = "Jonas";
console.log(pilnasVardas);

// Uzduotys

//1.2
let greetings = "Labas, JavaScript!";
console.log(greetings);

//1.3
const name = "Ona";
const city = "Kaunastico";
const gameName = "Šachmatai";

console.log(`${name} ${city} ${gameName}`);

//1.4

let answer = 2 + 3;
console.log(answer);

//1.5

// eilutes komentaras

/* this is for the exercise
console.log

*/
//1.6
// Console.log("Labas");
console.log("pataisyta, labas");

//2.1

const firstName = "Shimon";
const newCity = "Hamburg";
let age = 200;

console.log(`${firstName} lives ${newCity} and it is old ${age}`);

// 2.2
console.log(age++);
console.log(`${firstName} lives ${newCity} and it is old ${age + 1}`); // inline pridejimas

//2.3

// const newCity = "Kaunas"; netinka, nes const yra nekeiciamas kintamasis ir siuo atveju jau yra panaudotas anksciau salygoje

// 2.4

//2.5

let a = 5;
let b = 10;
let c = a;
a = b;
b = c;

console.log(a, b);

// 3.1

let string = "word";
let number = 100;
let boolean = false;
let underfined = undefined;
let Null = null;
let nothing; // undefined

console.log(typeof zodis);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof underfined);
console.log(typeof Null);
console.log(typeof nothing);

// 3.2

console.log(typeof 3.14);
console.log(typeof 7);
console.log(false);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof typeof 5);

// 3.3

console.log("10" + 5);
console.log("10" - 5);
console.log("3" * "4");
console.log("labas" / 2);

// 3.4

let price = "20";
price = 20;
let total = price + 5;
console.log(typeof price);
console.log(total);

// 4.1

const width = 8;
const height = 5;
const perimetras = 2 * (8 + 5);
console.log(perimetras);
const plotas = 5 * 8;
console.log(plotas);

// 4.2
console.log(9 % 3); // 0
console.log(14 % 3); // 2
console.log(8 % 5); // 3

// 4.3

const days = 100;

console.log(Math.floor(days / 7));
console.log(days % 7);

// 4.4

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(10 - 4 - 3);
console.log(2 ** 3 + 1);
console.log((7 % 3) + 1);
//4.5
let score = 10;

score += 5;
score *= 2;
score -= 4;
score++;
console.log(score);

//4.6
const celsius = 25;
let f = celsius;
f = (celsius * 9) / 5 + 32;
console.log(f);

// 5.1

const oldName = "Ona";
const newAge = 25;

console.log(`Labas, ${oldName} Tau jau ${newAge}`);

// 5.2

const jonasName = "Jonas";
const jonasLast = "Jonaitis";
const job = "programuotojas";

console.log(`${jonasName} ${jonasLast}`);
console.log(`Profesija: ${job}`);
console.log(`Vardo ilgis ${jonasName.length}`);

// 5. 3

const word = "JavaScript";

console.log(`${word.length}`);
console.log(`${word.toUpperCase(word)}`);
console.log(`${word.toLowerCase(word)}`);
console.log(`${word[0]}`);
console.log(`${word[9]}`);

// 5.4

const miestas = "Vilnius";
let year = 2026;
console.log("Miestas: " + miestas);
console.log("Metai: " + year);

let yearsLeft = 5;
yearsLeft = yearsLeft - 1;
console.log("Liko metų: " + yearsLeft);

// 6.1

let message = prompt(`Hello there fella! What is your name?`);
alert(`Welcome to the page ${message}`);
