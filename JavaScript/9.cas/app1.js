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
