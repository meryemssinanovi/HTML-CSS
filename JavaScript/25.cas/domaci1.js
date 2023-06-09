// Domaci zadaci:
// 1. Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

function zamenaCifara(broj) {
  let prvaCifra = Math.floor(broj / 1000);
  let drugaCrifa = Math.floor((broj % 1000) / 100);
  let trecaCifra = Math.floor((broj % 100) / 10);
  let cetvrtaCifra = broj % 10;
}
// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const nearestTo100 = (num1, num2) => {
  let secondCounter = 0;
  let firstCounter = 0;
  if (num1 < 100) {
    for (let i = 0; i < 100; i++) {
      firstCounter++;
    }
  } else {
    for (let i = num1; i > 100; i--) {
      firstCounter++;
    }
  }

  if (num2 < 100) {
    for (let i = num2; i < 100; i++) {
      secondCounter++;
    }
  } else {
    for (let i = num2; i > 100; i--) {
      secondCounter++;
    }
  }
  if (firstCounter < secondCounter) {
    return `${num1} is nearest to 100 than ${num2}`;
  } else if (firstCounter > secondCounter) {
    return `${num2} is nearest to 100 than ${num1}`;
  } else {
    return `They are on equal distance to number 100.`;
  }
};
console.log(nearestTo100(100, 9));
console.log(nearestTo100(98, 99));
console.log(nearestTo100(105, 105));
console.log(nearestTo100(105, 95));

function nearestTo100(a, b) {
  const a = Math.abs(a - 100);
  const b = Math.abs(b - 100);
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return `Both number are equidistan from 100`;
  }
}
console.log(nearestTo100(90, 120));
