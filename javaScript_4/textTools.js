function reverseText(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

function isPalindrome(text) {
  const lower = text.toLowerCase();
  return lower === reverseText(lower);
}

function countLetter(text, letter) {
  const lowerText = text.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerText.length; i++) {
    if (lowerText[i] === lowerLetter) {
      count++;
    }
  }
  return count;
}

console.log(reverseText("Vilnius"));
console.log(isPalindrome("Anna"));
console.log(countLetter("Bannaaaa", "a"));
