// JavaScript Array Iteration metode //

// Array Iterator metode prolaze kroz svaki element niza.

// forEach() metoda poziva callback funkciju( forEach() metode jednom za svaki element niza)

const brojevi = [2, 4, 6, 8, 10, 12];

brojevi.forEach((element, index, array) => {
  //   console.log(index, element, array);
  console.log(element);
});

// callback funkcija moze imati 3 argumenta:
// 1. vrednost elementa
// 2. index(pozicija)elementa
// 3. ceo niz na koji se primenjuje metoda

// preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza.

// let prvi_niz = [3, 6, 8, 9, 2];
// let drugi_niz = [];

// for (let i = 0; i < prvi_niz.length; i++) {
//   novi_niz.push([prvi_niz[i]]);
// }

// console.log(novi_niz);

const brojevi2 = [];
brojevi.forEach(() => {
  brojevi2.push(element);
});

console.log(brojevi2);
