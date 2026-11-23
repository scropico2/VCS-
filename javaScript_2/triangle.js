const a = Number(prompt("Pirma kraštinė:"));
const b = Number(prompt("Antra kraštinė:"));
const c = Number(prompt("Trečia kraštinė:"));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    console.log("Lygiakraštis");
  } else if (a === b || a === c || b === c) {
    console.log("Lygiašonis");
  } else {
    console.log("Įvairiakraštis");
  }
} else {
  console.log("Trikampio sudaryti negalima");
}
