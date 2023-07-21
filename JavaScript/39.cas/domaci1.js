// Domaci:
// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const suma = brojevi
  .filter((broj) => broj % 2 === 0)
  .map((broj) => broj * 2)
  .reduce((akumulator, trenutni) => akumulator + trenutni);

console.log(suma);

// 2. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function zamijeniSlova(str) {
  let noviString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      noviString += str[i].toLowerCase();
    } else {
      noviString += str[i].toUpperCase();
    }
  }
  return noviString;
}

console.log(zamijeniSlova("The Quick Brown Fox"));
