// 1.1

function sayHello() {
  console.log("Labas, pasauli!");
}
sayHello();

// 1.2

function greet(name) {
  console.log(`Labas, ${name}`);
}

greet("Jonai!");
greet("Simai!");
greet("Brazauskai!");

// 1.3
function printArea(width, height) {
  console.log(`Plotas: ${width * height}`);
}

printArea(3, 4);
printArea(10, 2);
printArea(7, 7);
printArea(5, 0);

// 1.4

function introduce(name, age) {
  console.log(`Jusu vardas butu: ${name}, o jusu amzius yra ${age}`);
}

introduce("Simas", 27);
introduce("Jonas", 40);
introduce(30, "Agne"); // turetu but atvirksciai siuo atveju, argumentai priskiriami pagal eile!

// 2.1

function twice(n) {
  return n * 2;
}
console.log(twice(5));
console.log(twice(0));
console.log(twice(-3));
console.log(twice(twice(5)));

// 2.2

function square(n) {
  return n * n;
}

function cube(n) {
  return n * square(n);
}

console.log(square(4));
console.log(cube(3));
console.log(cube(-2));
console.log(square(0.5));

// 2.3

function withVat(price) {
  return price * 1.21;
}
function printPrice(price) {
  return withVat(price);
}

console.log(`Kaina su PVM: ${printPrice(10).toFixed(2)}`);
console.log(`Kaina su PVM: ${printPrice(100).toFixed(2)}`);
console.log(`Kaina su PVM: ${printPrice(9.99).toFixed(2)}`);

// 2.4

function fullName(first, last) {
  return `${first} ${last}`;
}

const result = fullName("Ona", "Kazlauskaitė");
console.log(result.toUpperCase());

// 3.1

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(0));

// 3.1

function markName(mark) {
  if (mark >= 9) {
    return "Puikiai";
  } else if (mark >= 7) {
    return "Gerai";
  } else if (mark >= 5) {
    return "Patenkinamai";
  } else {
    return "nepatenkinamai";
  }
}

console.log(markName(10));
console.log(markName(8));
console.log(markName(6));
console.log(markName(4));
console.log(markName(9));

// 3.3

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
console.log(isEven(-3));

// 3.4

function triangleType(a, b, c) {
  if (a === b && b === c) {
    return "Lygiakrastis";
  } else if (a === b || b === c || a === c) {
    return "Lygiasonis";
  } else {
    return "Ivairiasonis";
  }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 3, 5));
console.log(triangleType(3, 4, 5));
console.log(triangleType(5, 3, 3));

// 4.1

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(5));
console.log(sumTo(10));
console.log(sumTo(100));
console.log(sumTo(0));

// 4.2

function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(10));

// 4.3

function countVowels(text) {
  let count = 0;
  for (const ch of text.toLowerCase()) {
    if ("aeiouy".includes(ch)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Vilnius"));
console.log(countVowels("rytas"));
console.log(countVowels("Kaunas"));
console.log("");

// 4.4

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(13));
console.log(isPrime(25));

// 5.1

let score = 10;

function addBonus() {
  let score = 100;
  score = score + 5;
  console.log(score);
}

console.log(score); // 10 globalus scopas
addBonus(); // 105 vidinis, addbonuso scopas
console.log(score); // 10 tas pats globalus scopas

// 5.2
function calcTotal(price, quantity) {
  return (total = price * quantity);
}

calcTotal(4, 5);
console.log(`Viso: ${total} €`);

// 5.3

function greet(name = "drauge", greetings = "Labas") {
  return `${greetings}  ${name}!`;
}

console.log(greet("Ona"));
console.log(greet());
console.log(greet("Ona", "Sveika"));
console.log(greet(undefined, "Ei"));

//6.1

const add = (a, b) => a + b;

const thisSquare = (n) => n * n;
const sayHi = (name) => `Labas ${name}!`;

console.log(add(2, 3));
console.log(thisSquare(4));
console.log(sayHi("Ona"));

// 6.2

const isTeen = (age) => age >= 13 && age <= 19;

console.log(isTeen(15));
console.log(isTeen(12));
console.log(isTeen(13));
console.log(isTeen(20));
console.log(isTeen(19));

// 6.3

const grade = (points) => (points >= 50 ? "Islaike" : "Neislaike");

console.log(grade(80));
console.log(grade(49));
console.log(grade(50));
console.log(grade(0));

// 6.4

function repeat(times, action) {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
}

repeat(4, (i) => console.log(`Ratas ${i * i}`)); // kvadratai

// 6.5

const addNew = (a, b) => {
  return a + b;
};

console.log(addNew(2, 3));

const addNewOne = (a, b) => a + b;

console.log(addNewOne(2, 3));

// 7.1

function area(width, height) {
  return width * height;
}

const totalArea = area(3, 4) + area(2, 5);
console.log(`Bendras plotas: ${totalArea}`);

// 7. 2

function discount(price, percent) {
  return price - (price * percent) / 100;
}

console.log(discount(100, 20));

// 7. 3
function countMultiples(limit, d) {
  let count = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % d === 0) {
      count++;
    }
  }
  return count;
}

console.log(countMultiples(20, 3));

// 7.4

function getPrice(price) {
  return price;
}

function printTotal(quantity) {
  const price = 5;
  console.log(`Viso: ${price * quantity} €`);
}

printTotal(3);

// 7.5

function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

console.log(`17 metų: ${isAdult(17)}`);
console.log(`25 metų: ${isAdult(25)}`);
