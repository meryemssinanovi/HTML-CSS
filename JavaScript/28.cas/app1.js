// Niz (Array) u JavaScriptu predstavlja strukuturu podataka za skladistenje vise vrednosti.
// Dakle,unutar jedne promenljive (jednog niza) mozemo imati vise razlicitih(ili istih) vrednosti.
// Nizovi u JavaScriptu dozvoljava duplikate.
// Nizovi su heterogeni (unutar jednog niza mozemo imati elemente razlicitih tipova).

const niz = ["string", 23, true];
console.log(niz);

// Mozemo prvo kreirati niz a nakon toga mu dodeliti elemente.

const cars = [];
cars[0] = "audi";
cars[1] = "mercedes";
console.log(cars);

cars[3] = "audi";
console.log(cars[2]);
// array od nekog indexa sluzi za pristupanje elementu niza.
console.log(cars);

// length metoda nam vraca broj elemenata nekog niza.

console.log(cars.length);

// Promena vrednosti nekog elementa se moze vrsiti na isti nacin:

cars[2] = "BMW";
console.log(cars);

// Niz mozemo napraviti i preko:
const cars = new Array("Golf", "Skoda", "Volvo");
console.log(cars2);

// Primer zbog kojeg treba izbegavati new Array():
// Napraviti niz od jednog elementa tipa number
const points = [40];
console.log(points);

// Pravi se niz od 40 undefined elemenata.
const points2 = new Array(40);
console.log(points2);

// Zbog jednostavnosti,citanja i brzine izvrsavanja je bolje koristiti [] nacin nego new Array.

const arr = [[1, 2, 3], new Date(), false, function () {}];
console.log(arr);

// Postoje 2 nacina za proveru da li je neka promenljiva niz:

const num = 3;
const fruits = ["apple", "pineapple", "strawberry"];

// 1.Array.isArray(arr)
console.log(Array.isArray(fruits));
console.log(Array.isArray(num));

// 2. arr instanceof Array

console.log(fruits instanceof Array);
console.log(num instanceof Array);

fruits[fruits.length] = "banana";
console.log(fruits);
