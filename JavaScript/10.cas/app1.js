// primer
// Svaki karakter neka se ispise jedan ispod drugog

const recenica =
  "U ponedeljak je neradni dan, to znaci da je sledeci cas u sredu.";

for (let i = 0; i < recenica.length; i++) {
  console.log(recenica[i]);
}

// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// Dok ako je neki karakter = "a", neka se ispise broj 5.
// A u slucaju da je karakter jednak "s", neka se ne ispise nista.

let recenica1 = prompt("Unesite neku recenicu:");

for (let i = 0; i < recenica1.length; i++) {
  if (recenica1[i] === "a") {
    console.log(5);
  } else if (recenica1[i] === "s") {
    continue;
  } else {
    console.log(recenica1[i]);
  }
}

//  Metoda toLowerCase () pretvara ceo string u mala slova:

console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA.".toLowerCase());

//  Metoda toUpperCase () pretvara ceo string u velika  slova:
console.log("neki string za pretvaranje u velika slova".toLocaleUpperCase());

const recenica0 =
  " Zelimo DatU reCEniCU PrikaZati MALIM , isto tako i velikim slovIMa.";

console.log(recenica0.toLowerCase());
console.log(recenica0.toUpperCase());

const recenica3 =
  "treba nam nova recenica gde svaka rec pocinje velikim slovom";
let recenica4 = "";
for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);

// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

const recenica5 =
  "treba nam nova recenica gde ce se svaka rec zavrsavati velikim slovom";
let recenica6 = "";
for (let i = 0; i < recenica5.length; i++) {
  if (i === recenica5.length - 1) {
    recenica6 += recenica5[i].toUpperCase();
  } else if (recenica5[i + 1] === " ") {
    recenica6 += recenica5[i].toUpperCase();
  } else {
    recenica6 += recenica5[i];
  }
}
console.log(recenica6);

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

const rec = "Mama ima momu";
let slovoM = 0;
