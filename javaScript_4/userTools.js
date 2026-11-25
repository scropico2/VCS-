function getInitials(firstName, lastName) {
  return (firstName[0] + lastName[0]).toUpperCase();
}

console.log(getInitials("simas", "cicenas"));
console.log(getInitials("frankas", "mozuraitis"));

//

function formatName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(formatName("SiMaS"));
console.log(formatName("JONAS"));
