// doomaci

let broj1 = +prompt("Unesite prvi broj");
let broj2 = +prompt("Unesite prvi drugi");

if (isNaN(broj1) || isNaN(broj2)) {
  console.log("niste uneli korektne vrednosti");
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj2 < broj1) {
  while (broj2 <= broj1) {
    console.log(broj2);
    broj2++;
  }
} else {
  console.log("Uneli ste iste brojeve");
}

// Zadatak:Fudbalski teren
// Fudbalski teren dimenzija dxs treba ograditi pravougaonom ogradom tako da je rastojanje stranica ograde
// od linije tereena r. Napisi program koji odredjuje duzinu ograde.
// ulaz u tri reda stanadardnog ulaza nalaze se tri cela broja
//  d - duzina terena u metrima*(90 <= d <=120)
// s - sirirna terena u metrima ( 45 >=s <= 90)
//  r - rastojanje ograde od terena u metrima (2 <= r <= 10)

const d = +prompt("Unesite duzinu terena:");
const s = +prompt("Unesite sirinu  terena:");
const r = +prompt("Unesite rastojanje terena:");

const duzinaOgrade = 2 * d + 2 * s + 8 * r;
console.log("Treba nam" + duzinaOgrade + "metara za ogradjivanje");

let(90 <= d && d <= 120);

// Osnove o stringovima:
const recenica = "Necemo matematicke zadatke!";
console.log(recenica);
// Pristupanje nekom karakteru ide preko indeksa!
// Indeksiranje ide od 0
// Poslednji karakter u stringu ima index (cela duzina stringa -1)!
console.log(recenica[0]);
console.log(recenica[7]);
// Za izracunavanje duzine stringa koristi se lenght metoda:
const duzina = recenica.length;
console.log(duzina);

// Ispisivanje poslednje karaktera datog stringa:
console.log(recenica[duzina - 1]);
console.log(recenica[duzina - 5]);

// Domaci zadaci:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena;

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

let i = +prompt("Unesite broj");
if (isNaN(i)) {
  console.log("Niste uneli ispravan broj");
} else if (i >= 12 && i <= 16) {
  for (i; i >= 1; i--) {
    console.log(i * i - 25);
  }
} else {
  console.log("Broj nije u odredjenom intervalu");
}

const broj = +prompt("Unesite neki  broj :");

if (isNaN(broj) || broj < 12 || broj) {
  console.log("Niste uneli konkretan broj");
}

for (let i = broj; i >= 1; i--) {
  console.log(i, i ** 2, i - 25);
  // console.log(i);
  // console.log(i ** 2);
  // console.log(i - 25);
}
