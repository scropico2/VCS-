const secret = 9;

let attempts = 0;

while (true) {
  const guess = Number(prompt("Spek skaiciu nuo 1 iki 20, jei 0 - pasiduodi"));
  if (guess === 0) {
    console.log(`Pasidavei. Skaicius buvo ${secret}`);
    break;
  }
  attempts++;
  if (guess === secret) {
    console.log(`Atspejai! Is viso bandymo: ${attempts}`);
  } else if (guess < secret) {
    console.log(`Per mazas!`);
  } else {
    console.log("Per didelis!");
  }
}
