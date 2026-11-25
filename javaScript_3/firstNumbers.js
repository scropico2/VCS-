const n = Number(prompt("Iveskite savo skaiciu, kad sis butu didesnis uz 1"));

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= i - 1; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
