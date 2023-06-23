// slice() metoda vraca deo niza (onoliko elemenatta koliko smo trazili slanjem argumenata-indexa).
let niz = celaGrupa;
niz =
  celaGrupa[
    ("Emir",
    "Selver",
    "Merjem",
    "Asija",
    "Dzana",
    "Ajsa",
    "Anastasija",
    "Nedim")
  ];

console.log(celaGrupa.slice(0, 2));
console.log(celaGrupa.slice(-4, -1));
console.log(celaGrupa.slice(3));

// splice() metoda se moze koristiti za dodavanje nocih elemenata u nizu,brisanje i sve mozemo vrsiti na zeljenim
// pozicijama unutar niza.

console.log(celaGrupa);

celaGrupa.splice(2, 0, "Meryem");
console.log(celaGrupa);

// Prvi argument metoda predstavlja poziciju u nizu odakle zelimo promene.

// Drugi argument metoda predstavlja broj elemenata koji treba da se izbrisu,krenuvsi od pozicije (prvog argumenta)

// Svi sledeci argumenti potencijalno predstavljuju nove elemente u nizu (vrednosti koje zelimo dodati na vec definisanoj poziciji).

// Primenom splice metode izbrisati sve devojke,zatim ih dodati na pocteku niza.

// splice() metoda vraca niz sa izbrisanim elementima
const devojke2 = celaGrupa.splice(2, 5);
console.log(celaGrupa);
const novaGrupa = devojke2.concat(celaGrupa);
console.log(novaGrupa);
novaGrupa.splice(5, 0, "Ajla");
console.log(novaGrupa);

novaGrupa.splice(5, 2, "Dzevdet", "Tarik", "Marija", "Alem");
console.log(novaGrupa);

novaGrupa.splice(-3, 1, "Melida");

// sort() metoda vrsi sirtiranje niza (abecedno)

novaGrupa.sort();
console.log(novaGrupa);

// revrse() metoda sortira niz od poslednjeg ka prvom elementu.

// Za sortiranje niza od Z do A prvo treba iskoristiti sort() metodu,pa onda reverse():
novaGrupa.sort();
novaGrupa.reverse();
console.log(novaGrupa);

const brojevi = [3, 4, 99, -99, 23, 32];
// sortiranje niza brojeva samo po sebi se ne vrsi kako bismo mi hteli:
brojevi.sort();
console.log(brojevi);

//Potrebno je poslati funkciju koja vrsi poredjenje dva broja kakko bismo sortirali niz od najmanjeg ka najvecem elementu:
brojevi.sort(function (a, b) {
  return a - b;
});
console.log(brojevi);
//Potrebno je poslati funkciju koja vrsi poredjenje dva broja kakko bismo sortirali niz od najmanjeg ka najvecem elementu(obrnuto poredjenje):
brojevi.sort(function (a, b) {
  return b - a;
});
console.log(brojevi);

brojevi.sort((a, b) => b - a);
console.log(brojevi);

// Sortiranje niza u random redosledu:
brojevi.sort(function () {
  return 0.5 - Math.random();
});
console.log(brojevi);
