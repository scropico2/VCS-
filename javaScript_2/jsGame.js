const player = prompt("Pasirink: akmuo, popierius arba žirklės").toLowerCase();

const random = Math.floor(Math.random() * 3);

let computer;

switch (random) {
  case 0:
    computer = "akmuo";
    break;
  case 1:
    computer = "popierius";
    break;
  default:
    computer = "žirklės";
}

console.log(`Tu: ${player}`);
console.log(`Kompiuteris: ${computer}`);

if (player === computer) {
  console.log("Lygiosios");
} else if (
  (player === "akmuo" && computer === "žirklės") ||
  (player === "žirklės" && computer === "popierius") ||
  (player === "popierius" && computer === "akmuo")
) {
  console.log("Laimėjai!");
} else {
  console.log("Pralaimėjai.");
}
