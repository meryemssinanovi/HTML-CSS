const prom1 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda";

console.log("prom1");

const prom2 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda kada kucamo,\
   ali njen prikaz ce izgledati u jednom redu.\
   hjbknlm";

console.log("prom2");

// const prom3 =
//   "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda kada kucamo,
//    ali njen prikaz ce izgledati u jednom redu.
//    hjbknlm";

let br1 = 7;
let br2 = 13;
let zbir = br1 + br2;
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + zbir);

// Resenje preko back-ticks

console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// Zapisivanje navodnika  se vrsi bez ikakvih problema kroz back-ticks sintaksu.
// Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode.

let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse' ";

// replace() metoda menja specifican karakter (niz karaktera) nekim drugim (koji saljemo kroz argument)
// sve se to postize pravljenjem novog stringa
// console.log(recenica.replace("promenljiva", "lepse"));
let recenica2 = recenica.replace("promenjljivo", "lepse");
console.log(recenica);

let recenica3 =
  "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'.Sta ako se rec promenljivo nadje na jos nekom mestu. ";

let recenica4 = recenica3.replace("promenjljivo", "lepse");
console.log(recenica4);

// replace() metoda menja samo prvi pronadjeni argumet u datom stringu.
// Medjutim, koriscenjem takozvanih regular expression mozemo zameniti dati argumen gde god se nadje u stringu novim.

// Sintaksa:

// Regular Expression g (global) menja sve reci u stringu nekom novom

let recenica5 = recenica3.replace(/promenjljivo/g, "lepse");

console.log(recenica5);

// Regular Expression i (insensitive) menja rec drugom bez obzira na njen zapis (bilo ispisana velikim ili malim slovima.)

let recenica6 =
  "Zelimo zameniti rec 'PromenljivO' sa recju 'lepse'.Sta ako se rec promenljivo nadje na jos nekom mestu. ";

let recenica7 = recenica6.replace(/promenjljivo/gi, "lepse");
console.log(recenica7);

// toUpperCase() metoda pretvara ceo string u velika slova , bez obzira na to kako je prethodno ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana velikim slovima".toUpperCase());

// toLowerCase() metoda pretvara ceo string u mala  slova , bez obzira na to kako je prethodno ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana malim slovima".toLowerCase());

// concat() metoda spaja dva ili vise stringova iu jedna.
// Nismo ograniceni slanjem argumenata.
// Spajanje se se vrsiti onim redosledom kako budemo dodavali elemente.

let a = "Prvi deo ";
let b = "nase recenice";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

// Sve metode vezane  za stringove prave novi string, ne vrsi modifikaciju postojeceg.

// 1.

function myFunc(recenica) {
  const duzina = recenica.length;
  if (duzina > 9) {
    const novaRecenica = recenica.replace(/a/g, "B");
    return "Ovo je novo dobijena recenica ".concat(novaRecenica);
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje ";
  }
}
console.log(myFunc("Recenica za modifikaciju."));
console.log(myFunc("Nije dov"));
