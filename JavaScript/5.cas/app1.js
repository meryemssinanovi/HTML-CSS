// Za komunikacoju sa korisnikom koristimo promit metodu:
const ime = prompt("Unesite vase ime:");

console.log(ime);

const brojGodina = prompt("Unesite broj godina:");
console.log(brojGodina);
console.log(typeof brojGodina);

//Posto je vrednost dobijena preko promit metode uvek string,otuda potreba da pretvorimo taj string u number tip podatka.

// Promenicemo 2 naciina za prevodjenje stringau broj:

// 1.Number(string)
const brojGodina2 = Number(brojGodina);
console.log(brojGodina2);
console.log(typeof brojGodina);

// 2. +string => number
const brojGodina3 = +brojGodina;
console.log(brojGodina3);
console.log(typeof brojGodina3);

// Unesite vasu visinu:

// const vsiina = Number (prompt("Unesite vasu visinu:"))
const visina = +prompt("Unesite vasu visinu");
console.log(visina);
console.log(typeof visina);

// Na osnovu unetih godina ispisati u konzoli sledece:
//

//isNaN ispituje da li je vrednost nekog broja NaN.
console.log(isNaN("56"));
console.log(isNaN("567yehdsba"));

const brojGodina4 = +prompt("Unesite broj vasih godina:");

if (isNaN(brojGodina4)) {
  console.log("Niste uneli broj godina");
} else if (brojGodina4 > 0 && brojGodina4 < 12) {
  console.log("Vi ste zrela osoba");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina4 >= 40) {
  console.log("Vi ste zrela osoba");
} else {
  console.log("Broj godina ne moze biti negativan");
}

console.log(5 + "4");
console.log(5 - "4");
// prazam string => number = 0
console.log(Number(""));
