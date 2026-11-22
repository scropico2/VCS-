// Skaiciuokle ND

const price = Number(prompt(`This is the price without PVM! (Eur):`));
const pvmRate = 21;
const pvmAmount = (price * pvmRate) / 100;
const priceWithPvm = price + pvmAmount;

console.log(`This is the price without pvm: ${price.toFixed(2)} eur`);
console.log(`This is pvm's price!! ${pvmAmount.toFixed(2)} eur`);
console.log(`This is the price with PVM!!${priceWithPvm.toFixed(2)} eurr`);
