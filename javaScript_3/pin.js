const trueCode = "1234";
let balance = 500;
let loggedIn = false;
let operations = 0;

for (let attempt = 1; attempt <= 3; attempt++) {
  const pin = prompt("Iveskite savo pin koda!");

  if (pin === trueCode) {
    console.log(`Slaptazodis teisingas, sveikia atvyke! Balansas ${balance}`);
    alert(`Slaptazodis teisingas, sveikia atvyke! Balansas ${balance}`);
    loggedIn = true;
    break;
  } else {
    console.log("Neteisingas slaptazodis. Liko bandymu" + (3 - attempt));
    alert("Neteisingas PIN. Liko bandymų: " + (3 - attempt));
  }
}

if (loggedIn) {
  while (true) {
    const choice = prompt("1 Balansas, 2 Isinesti, 3 Isimti, 0 Iseiti");

    if (choice === "0") {
      console.log("Viso gero!");
      alert("Viso gero!");
      break;
    }
    switch (choice) {
      case "1":
        console.log(`Balansas: ${balance} eur`);
        alert(`Balansas : ${balance} eur`);
        break;
      case "2":
        const userMoney = Number(prompt("Kiek pinigu noresite isideti?"));
        if (userMoney > 0) {
          balance += userMoney;
          operations++;
          console.log(`Inesta ${userMoney} eur, Jusu balanse siuo metu: ${balance}`);
          alert(`Inesta ${userMoney} eur, Jusu balanse siuo metu: ${balance}`);
        } else {
          console.log("Neteisinga suma!");
          alert("Neteisinga suma!");
        }
        break;
      case "3":
        const takeOut = Number(prompt("Kiek pinigu noretumete issiimti?"));
        if (!(takeOut > 0)) {
          console.log("Neteisingai ivesta suma!");
          alert("Neteisingai ivesta suma!");
        } else if (takeOut > balance) {
          console.log("Nepakankamas lesu likutis");
          alert("Nepakankamas lesu likutis");
        } else {
          balance -= takeOut;
          operations++;
          console.log(`Isimta ${takeOut}, jusu balansas siuo metu: ${balance}`);
          alert(`Isimta ${takeOut}, jusu balansas siuo metu: ${balance}`);
        }

        break;

      default:
        console.log("Nezinomas pasirinkimas");
        alert("Nezinomas pasirinikmas");
    }
  }
  console.log(`Atliktu operaciju per sia sesija: ${operations} , jusu galutinis balansas: ${balance}`);
  alert(`Atliktu operaciju per sia sesija: ${operations} , jusu galutinis balansas: ${balance}`);
} else {
  console.log("Kortele uzblokuota!");
  alert(`Kortele uzblokuota!`);
}
