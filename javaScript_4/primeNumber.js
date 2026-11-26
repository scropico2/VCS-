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
function printPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
function nextPrime(n) {
  let candidate = n + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
}
printPrimes(20);
console.log(nextPrime(13));
/*

console.log(nextPrime(90));
printPrimes(50);
*/
