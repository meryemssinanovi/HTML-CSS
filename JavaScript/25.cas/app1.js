// Math methods//

// Sintaksa za bilo koju matmeticku metodu je sledeca:
// Math.method(number)

// Number to Integer//
// Postoje 4 razlicte metode za dobijanje celog broj slanjem broja sa decimalnim zapisom:

// Math.round(x) - vraca blizi ceo broj broju x.

console.log(Math.round(3.213456));

// Math.ceil(x) -vraca sledeci ceo broj broja x.

console.log(Math.ceil(3.213456));
console.log(Math.ceil(-3.213456));

// Math.floor(x) -vraca prethodni ceo broj broja x.
console.log(Math.floor(3.213456));
console.log(Math.floor(-3.213456));

// Math.trunc(x) - vraca ceo broj odstranjujuci decimalni ostatak.
console.log(Math.trunc(3.213456));
console.log(Math.trunc(-3.213456));

// Math.sign() -metoda vraca:
// 1 ako je x pozitivan broj
// 0 ako je x nula
// -1 ako je x negativan broj

console.log(Math.sign(34));
console.log(Math.sign(-34));
console.log(Math.sign(0));

// Math.pow(x,y) - vraca broj x stepenovan brojem y

console.log(Math.pow(2, 3));
console.log(Math.pow(6, 2));

// Math.sqrt(x) - vraca kvadratni koren broja x.

console.log(Math.sqrt(9));
console.log(Math.sqrt(25));

// Math.abs(x) - vraca nam apsolutnu vrednost broja x.

console.log(Mth.abs(124));
console.log(Mth.abs(-124));
console.log(Mth.abs(-124.456));

// Math.sin() -vraca sinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

console.log(Mth.sin(Math.PI / 2));

// Math.cos(c) - vraca kosinus  (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

console.log(Math.cos(Math.PI));

function nearestTo100(num1, num2) {
  let broj = Math.abs(num1 - 100);
  let broj2 = Math.abs(num2 - 100);
  if (broj === broj2) {
    return "Brojevi su na istoj udaljenosti od broja 100";
  } else if (broj > broj2) {
    return `${num2} je blizi broju 100 od broja ${num1}`;
  } else {
    return `${num1} je blizi broju 100 od broja ${num2} `;
  }
}
console.log(nearestTo100(95));
