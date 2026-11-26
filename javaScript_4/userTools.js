function getInitials(firstName, lastName) {
  return (firstName[0] + lastName[0]).toUpperCase();
}

console.log(getInitials("simas", "cicenas"));
console.log(getInitials("frankas", "mozuraitis"));

function formatName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(formatName("SiMaS"));
console.log(formatName("JONAS"));

function isValidEmail(email) {
  const hasAt = email.includes("@");
  const hasDot = email.includes(".");
  const startsOk = email[0] !== "@";

  return hasAt && hasDot && startsOk;
}

console.log(isValidEmail("simas249@gmail.com"));
console.log(isValidEmail("ona.mail.lt"));
console.log(isValidEmail("ona@mail"));
console.log(isValidEmail("@mail.com"));
console.log(isValidEmail("jurate@one.lt"));

function buildUserLine(firstName, lastName, email) {
  const initials = getInitials(firstName, lastName);
  const fullName = formatName(firstName) + " " + formatName(lastName);
  return `${initials} | ${fullName} | ${email}`;
}

console.log(buildUserLine("aimas", "cicenas", "simas29@gmail.com"));
console.log(buildUserLine("Rimas", "kleiza", "simtasdu2@gmail.com"));
console.log(buildUserLine("Raimas", "kkkicenas", "Raiimas29@gmail.com"));

function registerUser(firstName, lastName, email) {
  if (!isValidEmail(email)) {
    return "Klaida, neteisingas el. pastas";
  }
  return `Sukurta naujai: ${buildUserLine(firstName, lastName, email)}`;
}

console.log(registerUser("ona", "kairyte", "ona@gmaik.com"));
console.log(registerUser("Linas", "linavicius", "linaslinavicius.lt"));

//
