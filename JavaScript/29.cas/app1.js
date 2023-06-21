// JavaScript Array methods //

// toString() i join() metode konvertuju niz u string.

const arr = [1, 2, 3, 4, 5];
console.log(arr.toString());

console.log(arr.join());
// join() prihvata argument koji predstavlja karater (niz karaktera) koji ce se naci izmedju elementa u novodijenom stanju.
console.log(arr.join("*"));

// push() metoda dodaje novi element (vise elemenata) na kraju niza.
const fruits = ["jagoda", "jabuka", "pomorandza"];

fruits.push("kruska");
console.log(fruits);

fruits.push("kruska", "mango", "lubenica"); // push predstavlja duzinu niza sa novim elementima.
console.log(fruits);

// pop() metoda brise poslednji element niza.

fruits.pop();
console.log(fruits);
console.log(fruits.pop());

// shift() metoda brise orvi element niza,svi ostali elementi se v racaju za jedno mesto.

console.log(fruits.shift()); // predstavlja vrednost izbrisanog elementa.
console.log(fruits);

// unshift() metoda dodaje element(vise elemenata) na pocetku niza.

console.log(fruits.unshift("breskva", "watermeolon"));
console.log(fruits);

// delete metoda brise odredjeni element niza.
// Koriscenjem delete metode mozemo izbrisati zeljeni element ali nije preporuka koristiti tu metodu vec pop() ili shift().
// delete metoda ostavlja prazna (undefined) polja.Ne brise se element u potpunosti.
delete fruits[fruits.length - 1];
delete fruits[3];
console.log(fruits);
