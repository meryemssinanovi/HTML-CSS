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

// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet.

function first() {
  const recenica = prompt("Unesite neku recenicu ");
  const recenica1 = recenica.toUpperCase();
  const recenica2 = recenica.toLowerCase();

  const duzinaRecenice = recenica.length;
  let recenica3 = "";
  for (let i = 0; i < duzinaRecenice; i++) {
    if (i <= duzinaRecenice / 2) {
      recenica3 += recenica[i].toUpperCase();
    } else {
      recenica3 += recenica[i].toLowerCase();
    }
  }
  const recenica4 = recenica.replace(/skola/gi, "fakultet");
  return `${recenica1} \n
  ${recenica2}\n
  ${recenica3} \n
  ${recenica4} `;
}
console.log(first());

// Zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti. Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string. Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string.
// Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

// Zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore. Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore.
// Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.
