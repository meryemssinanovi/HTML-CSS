function isPolindrom(string) {
  let obrnutiString = "";
  for (let i = 0; i < string.length - 1; i--) {
    obrnutiString += string[i];
  }
  if (string === obrnutiString) {
    return true;
  } else {
    return false;
  }
}
console.log(isPolindrom("radar"));
console.log();

// Za ekstraktovanje (uzimanje jednog dela karaktera)mozemo iskoristiti jedan od nacina:

// charAt() metoda uzima jedan argument (argument predstavlja index)i vraca nam karakter koji zauzima tu poziciju.
// charCodeAt()metoda koja uzima jedan argument (argument predstavlja index) i vraca nam kod karaktera koji zauzima tu poziciju.
// string[index] nacin pristupa nekom karakteru iz stringa.

let recenica = "Recenica za uzimanje karaktera.";

console.log(recenica.charAt(4));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(recenica.charAt(100)); // rezultat karaktera koji ne postoji daje prazan string ""
console.log(recenica[100]); // rezultat karaktera koji ne postoji daje undefined

// Za ekstraktovanje (uzimanje nekoliko karaktera) nekoliko karaktera mozemo iskoristiti jednu od 3 metode:

// slice() metoda nam vraca deo stringa.Ona ima dva argumenta,prvi argument je pocetni index za uzimanje isecka,drugi argumenyt je index od kojeg idemo.
// Drugi argument se ne ukljucuje!
// Drugi argument nije obavezan.Ako ga izostavimo dobicemo string od prvog argumenta do kraja.
// sloice() metoda omogucava koriscenje negativnih indexa

console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1));

// substring()metoda nam vraca deo stringa.Ona ima dva argumenta,prvi argument je pocetni index za uzimanje isecka,drugi argumenyt je index od kojeg idemo.
// Ova metoda ne podrzava negativne indexe.

console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));

// substr()metoda nam vraca deo stringa.Ona ima dva argumenta,prvi argument je pocetni index za uzimanje isecka,drugi argument je duzina trog isecka.

console.log(recenica.substr(3, 10));

// split() metoda nam sluzi da neki string pretvorimo u niz od jednog ili vise elemenata.

// Ako split() metodu primenimo na neki string bez da joj posaljemo neki argument dobicemo niz od samo jednog elementa,(cela recenica je taj element).
console.log(recenica.split());

// Slanje nekog argumenta znaci da taj argument  predstavlja karakter gde ce se deliti elementi niza.

console.log(recenica.split(" ")); // svaka rec predstavlja jedan elelement niza

console.log(recenica.split("")); // svaki karakter prestavlja jedan element niza

console.log(recenica.split("*")); // dobili smo niz od jednog elementa (cela recenica)

// Zadatak: Izracunavanje duzine reci
// Napisati funkciju koja prima jedan string kao argument i vraca btoj karakter u najduzoj reci u tom stringu.Pretpostavi da su rec odvojene samo jednim razmakom.

function najduzaRec(string) {
  const nizReci = string.split(" ");
  let najduzaRec = nizReci[0];
  for (let i = 0; i < nizReci.length; i++) {
    if (nizReci[i].length > najduzaRec.length) {
      najduzaRec = nizReci[i];
    }
  }
  return najduzaRec.length;
}

console.log(najduzaRec(recenica));
