function calculate(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (a || b / 0) {
        return "Dalint is 0 nepavyks:)";
      }
      return a / b;
    default:
      return "Neinoma operacija!";
  }
}
const a = Number(prompt("Irasykite savo pirmaji skaiciu, zmogau:"));
const b = Number(prompt("Irasykite savo antraji skaiciu, zmogau:"));
const operation = prompt("Jusu pasirinktas veiksmas( +, -, *, / ):");

console.log(`Rezultatas: ${calculate(a, b, operation)}`);
alert(`Rezultatas: ${calculate(a, b, operation)}`);
