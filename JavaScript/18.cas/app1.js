var b = 7;
let a = 4;
const c = 9;

// Cesto u literaturi cemo naici na tvrdnju da je JavaScript interpreterski jezik,ali to nije bas tako.
// U pozadini postoji JS masina koja vrsi pozadinsko kompaliranje pre izvrsavanja koda.
// Stoga nije pogresno reci da je JS kompajlirani jezik.

// Pojam hosting u JavaScriptu predstavlja izvlacenje svih deklaracija na vrhu skripte(fajla)

d = 11;

console.log(d);

// Kasnije deklariranje nek epromenljive je moguc epreko var keyword, dok preko let i const nije dozvoljeno.

var d;
// let d;
// const d;

// Ispitati da li u nekom string ima vise malih ili velikih slova.Slova koja se koriste u string pripadaju iskljucivo engleskoj abecedi.

function kojihJeVise(recenica) {
  let brojacVelikihSlova = 0;
  let brojacMalihSlova = 0;
  for (let i = 0; i < recenica.lenggth; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brojacMalihSlova++;
    } else if (recenica[i] >= "A" && recenica[i] <= "Z") {
      brojacVelikihSlova++;
    }
  }
  if (brojacVelikihSlova > brojacMalihSlova) {
    return `U datoj recenici ima vise velikih slova.Ima ih ${brojacVelikihSlova}, dok malih slova ima ${brojacMalihSlova}`;
  } else if (brojacMalihSlova > brojacVelikihSlova) {
    return `U datoj recenici ima vise malih slova.Ima ih ${brojacMalihSlova}, dok velikih slova ima ${brojacVelikihSlova}`;
  } else {
    return `Dati string ima jednak broj velikih i malih slova,${brojacMalihSlova}`;
  }
}

console.log(kojihJeVise("Treba imati VISE malih slova."));
console.log(kojihJeVise("TREBA IMATI VISE malih slova."));
console.log(kojihJeVise("mala i VELIKA s"));
