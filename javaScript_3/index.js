// 1.1
/*
let count = 1;

while (count <= 5) {
  console.log(`Skaicius ${count}`);
  count++;
}
  */

// 1.2
/*

for (let n = 5; n >= 1; n--) {
  console.log(n);
}
console.log("Startas!");

*/

//1.3

/*

let x = 2;

while (x < 20) {
  x = x * 2;
  console.log(x);
}
  */

// 1.4

/*
const times = Number(prompt("Kiek kartu noretum pasisveikinti?"));
for (let i = 1; i <= times; i++) {
  console.log(`Labas! (${i})`);
}
  */

// 2.1
/*

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
  */

// 2.2

/*

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

*/

// 2.3
/*

const n = Number(prompt("Iveskite savo skaiciu"));

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

*/

// 2.4

/*
const number = Number(prompt("Irasykite skaiciu, ir isves jums mazejancia tvarka"));

for (let i = number; i >= 1; i--) {
  console.log(i);
}

*/

// 2.5
/*

for (let c = 0; c <= 100; c += 5) {
  const f = (c * 9) / 5 + 32;
  console.log(`${c} celcius = ${f} fahrenheit`);
}

*/

// 3.1

/*

const n = Number(prompt("Iveskite savo skaiciu"));

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

*/

// 3.2

/*

const n = Number(prompt("Iveskite skaiciu n:"));

let result = 1;

for (let i = 1; i <= n; i++) {
  result *= i;
}

console.log(result);

*/

// 3.3

/*

const n = Number(prompt("Iki kokio skaiciaus(n)?"));
const d = Number(prompt("Is kokio skaiciaus dalinti (d)?"));

let count = 0;

for (let i = 1; i <= n; i++) {
  if (i % d === 0) {
    count++;
  }
}

console.log(count);

*/

// 3.4
/*

const n = Number(prompt("Iveskite skaiciu n:"));

let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    sum += i++;
  }
}
console.log(sum);

*/

// 3.5
/*

const count = Number(prompt("Kiek is viso bus pazymiu?"));

let sum = 0;

for (let i = 1; i <= count; i++) {
  const mark = Number(prompt(`Pazimys ${i}:`));
  sum += mark;
}

console.log(`Vidurkis: ${(sum / count).toFixed(2)}`);

*/

// 4.1

/*

let max = 0;

while (true) {
  const n = Number(prompt("Ivesk teigiama skaiciu 0 - xx"));

  if (n === 0) {
    break;
  }
  if (n > max) {
    max = n;
  }
}
console.log(`Max is ${max}`);

*/

// 4.2
/*

let sum = 0;

while (true) {
  const n = Number(prompt("Iveskite bet koki skaiciu 0 - xx"));
  if (n === 0) {
    break;
  }
  if (n < 0) {
    continue;
  }

  sum += n;
}

console.log(`Suma: ${sum}`);

*/

//4.3
/*

let age;
do {
  age = Number(prompt("Iveskite amziu 140"));
} while (isNaN(age) || age < 0 || age > 140);

console.log(`Tau ${age} m.`);

*/

// 4.4
/*

for (let i = 101; i <= 1000; i++) {
  if (i % 7 === 0 && i % 9 === 0) {
    console.log(i);
    break;
  }
}
*/

// 4.5

/*
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
  */

// 5. 1
/*

const A = 4;
const B = 9;
for (let i = 1; i <= A; i++) {
  for (let j = 1; j <= B; j++) {
    console.log(`${i}-${j}`);
  }
}
  */

// 5.2
/*
let n = 10;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
  */

// 5.3
/*
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += i * j + " ";
  }
  console.log(row);
}
  */
// 5.4

/*

let n = 8;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if ((i + j) % 2 === 0) {
      row += "#";
    } else {
      row += ".";
    }
  }
  console.log(row);
}
  */

//6.1
//first one is without index
/*
const city = prompt("Fill in the answer so it shows seperetly the letters");

for (const ch of city) {
  console.log(ch);
}
  */
//second is with index
/*
const city = prompt(" Ivesk pavadinima miesto ");

for (let i = 0; i < city.length; i++) {
  console.log(i, city[i]);
}
*/

//6.2
/*

const word = prompt("Iveskite savo zodi su raide A ir suskaiciuos kiek kartu a buvo panaudota!!").toLowerCase();
let count = 0;
for (const ch of word) {
  if (ch === "a") {
    count++;
  }
}

console.log("Rasta raidziu a: " + count);
*/

//6.3
/*
const word = prompt("Iveskite zodi ir ji grazinsime apversta :)");

let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

console.log(reversed);
*/
// 6.4
/*
const turned = prompt("Enter any word that you think its readable backwards").toLowerCase();

let reveresedTwo = "";

for (let i = turned.length - 1; i >= 0; i--) {
  reveresedTwo += turned[i];
}

if (reveresedTwo == turned) {
  console.log("Palindromas");
} else {
  console.log("ne palindromas");
}
  */
