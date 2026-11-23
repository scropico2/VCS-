// 1.1

console.log(7 > 3);
console.log(5 >= 5);
console.log(7 === "7");
console.log(7 == "7");
console.log(10 !== 10);
console.log("b" > "a");
console.log(0 === false);

// 1.2

/*
const age = Number(window.prompt(`Kiek tau metu?`));
console.log(age >= 18);
*/

// 1.3

const name = "Simas";
const otherName = "Ona";
const littleName = "ona";

console.log(name === otherName);
console.log(otherName === littleName);

console.log(`${otherName.toLocaleLowerCase(otherName) === littleName}`);

// 1.4
/*
const a = Number(prompt("Pirmas skaičius?"));
const b = Number(prompt("Antras skaičius?"));
console.log(a < b);
*/
// 2. 1
/*
let age = 18;
age = 17;
age = 20;
if (age >= 18) {
  console.log("Pilnametis");
} else {
  console.log("Nepilnametis");
}
  */

// 2.2
/*
const number = Number(prompt("Iveskite savo skaiciu!"));
if (number % 2 === 0) {
  console.log("Lyginis");
} else {
  console.log("Nelyginis");
*/

//2.3
/*
const password = prompt("Iveskite slaptazodi");

if (password === "js123") {
  console.log("Sveiki atvyke!");
} else {
  console.log("Neteisingas passwordas! ");
}
  */

// 2.4
/*
const a = Number(prompt("Pirmas skaicius"));
const b = Number(prompt("Antras skaicius"));
const c = "Nugalejo!";
if (a > b) {
  console.log(a + `${c}`);
} else {
  console.log(b + `${c}`);
}
  */

// 2.5

/*
let price = Number(prompt("Pirkinio suma:"));
if (price >= 100) {
  price = price * 0.9;
}

console.log(`Moketi ${price.toFixed(2)}`);
*/
// 3.1

/*
const score = Number(prompt("Place your score number"));
if (score >= 95) {
  console.log("Puiku");
} else if (score >= 70) {
  console.log("Gerai");
} else if (score >= 50) {
  console.log("patenkinamai");
} else {
  console.log("Nepavyko");
}
  */

// 3.2

/*
const dayTime = Number(prompt("Iveskite dabartini laika!"));
if (dayTime < 6) {
  console.log("It's night!");
} else if (dayTime < 12) {
  console.log("It's mornging");
} else if (dayTime < 18) {
  console.log("It's DAY TIME!!!!");
} else if (dayTime < 22) {
  console.log("Its evening");
} else {
  console.log("Pure night");
}
  */

// 3.3

/*
const color = prompt("Write your color down, be careful!");
if (color === "raudona") {
  console.log("stok");
} else if (color === "geltona") {
  console.log("palauk");
} else if (color === "zalia") {
  console.log("galima vaiuoti");
} else {
  console.log("nezinoma spalva, bandyk is naujo!");
}
*/

// 4.1
/*
const userAge = Number(prompt("Iveskite savo amziu"));

if (userAge >= 18 && userAge <= 65) {
  console.log("Darbingasis amzius");
} else {
  console.log("Ne darbingas amzius");
}
  */

// 4.2
/*
const newDay = prompt("Iveskite  savaites diena!").toLowerCase;

if (newDay === "sestadienis" || newDay === "sekmadienis") {
  console.log("Savaitgalis!!");
} else {
  console.log("darbo diena!!");
}

*/
// 4.3
/* previous version
const userName = "admin";
const password = "js123";
const logIn = prompt("Enter your name and password");
if (logIn === `${userName}` && `${password}`) {
  console.log("Successfuly connected!");
} else {
  console.log("need to re-enter password or user!");
} */

// 4.3 fixed version!

/*
const userName = "admin";
const password = "js123";

const enteredName = prompt("Enter the user name!");
const enterPassword = prompt("Enter your password aswell!");

if (enteredName === userName && enterPassword === password) {
  console.log("Successfuly connected!");
} else {
  console.log("Need to re-enter the information!");
}
  */

//4.4

/*
const year = Number(prompt("What year is right now?"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Keliamieji!");
} else {
  console.log("Nekeliamieji");
}
  */

// 4.5

/*
const field = prompt("Please fill your name in!");

if (field) {
  console.log(`Hello there, ${field}!`);
} else {
  console.log("No answer has been given!. Try again");
}
  */

// 5.1
/*
const color = prompt("Put your color here !");

switch (color) {
  case "geltona":
    console.log("Palauk");
    break;
  case "red":
    console.log("Stok!");
    break;
  case "green":
    console.log("Vaziuok");
    break;
  default:
    console.log("Spalva siuo atveju yra nezinoma!");
}


//5.2

const light = "raudona";
switch (light) {
  case "raudona":
    console.log("Stok");
    break;
  case "geltona":
    console.log("Palauk");
  case "žalia":
    console.log("Važiuok");
}


*/

// 5.3
/*
const a = Number(prompt("The first number you put:"));
const b = Number(prompt("The other number you put in:"));

const operation = prompt("Operation ( +, -, *, /:");

switch (operation) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Unknown field !");
}
  */

// 5.4

/*

let age = 14;

const status = age >= 18 ? "Pilnametis" : "Nepilnametis";
console.log(status);

*/

//5.5

/*

const a = Number(prompt("Pirmas skaicius"));
const b = Number(prompt("Antras skaicius"));
const c = "Nugalejo";

const bigger = a > b ? a : b;
console.log(bigger + c);

*/

// 6.1

/* if there's anything inside the string it makes it truthy, otherwise its flase !!

console.log("" ? "tiesa" : "netiesa");
console.log("0" ? "tiesa" : "netiesa");
console.log(0 ? "tiesa" : "netiesa");
console.log("false" ? "tiesa" : "netiesa");

*/

// 6.2

/* 

const n = 15;
if (n > 5) {
  console.log("A");
} else if (n > 10) {
  console.log("B");
}

if (n > 10) {
  console.log("C");
}

*/

//6.3
/*
const age = 20;
const hasTicket = false;

console.log(age >= 18 && hasTicket);
*/

//7.1
/*
const score = Number(prompt("Kiek taškų gavai?"));

if (score <= 50) {
  console.log("Patenkinamai");
} else if (score >= 70) {
  console.log("Gerai");
} else if (score >= 90) {
  console.log("Puikiai");
} else {
  console.log("Nepavyko");
}
  */

//7.2

/*

let password = prompt("Slaptažodis?");

if (password === "js123") {
  console.log("Sveiki atvykę!");
} else {
  console.log("Neteisingas slaptažodis");
}
*/

//7.3
/*
const age = Number(prompt("Kiek tau metų?"));

if (age >= 18) {
  console.log("Pilnametis");
} else {
  console.log("Nepilnametis");
}
  */

//7.4

/*
const day = prompt("Kokia šiandien diena?").toLowerCase();

if (day === "šeštadienis" || day === "sekmadienis") {
  console.log("Savaitgalis");
} else {
  console.log("Darbo diena");
}
  */

// 8.1 // 8.2 // 8.3 // 8.4 // 8.5

/*
const age = Number(prompt("How old are you?"));
const student = prompt("Are you a student as well?  (Yes or no?").toLowerCase();
const day = prompt("What day is it today ?").toLowerCase();
const quantity = Number(prompt("How many tickets are you buying?"));

if (isNaN(age) || age < 0 || isNaN(quantity) || quantity < 1) {
  console.log("Something is wrong");
} else {
  let price;
}

if (age < 7) {
  price = 0;
} else if (age < 18) {
  price = 5;
} else if (age < 65) {
  price = 10;
} else {
  price = 6;
}

if (student === "yes" && price > 7) {
  price = 7;
}

if (day === "tuesday") {
  price = price * 0.8;
}

let total = price * quantity;
if (quantity >= 4) {
  total = total * 0.9;
}
console.log(`The price for the ticket would be: ${price.toFixed(2)} eur`);
console.log(`The total is ${total.toFixed(2)} eur `);

*/
