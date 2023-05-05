// 2.

//const recenica = prompt("Unesite neku recenicu:");
//let recenica2 = "";
//for (let i = 0; i < recenica.length; i++) {
//  recenica2 += "t";
//} if (recenica[i] === "a" && recenica[i + 1] === "n") {
//  recenica2 += "d";
//} else {
//    if (recenica[i] === "a") {
// recenica2 += recenica[i];
//}
//}
//console.log(recenica2);

// traziti unos korisnickog imena sve dok korisnik ne unese ipravno korisnicko ime
// (npr. duzina korisnickog imena mora biti najmanje 6 karaktera. )

// let username = "";
// while (username.length < 6) {
//   username = prompt("Unesite ispravan username:");
//   console.log(username, username.length); //proverava
// }

// DRY

// Funkcije predstavljajuj deo koda koji ce se izvrsiti samo u skucaju njihovog pozivanja.Koristimo ih da bi nas kod bio reusable (isti kod resava vise problema slicnog tip.)

// Funkciju mozemo napraviti na dva nacina:
// 1.Preko function keyword;
// 2.Arrow function.

// 1.

function myFunc() {
  // kod unutar funkcije
}

// 2.
const myFunc2 = () => {
  // kod unutar funkcije
};

// funkcija koja ispisuje zdravo
function greeting(parametar1, parametar2) {
  console.log("Zdravo");
}

greeting();

// Prilikom dedinisanje=a funkcije mozemo joj proslediti parametre koji su neophodni za izvrsavanje koda date funkcije.
// Dok prilikom pozivanja funkcije to sto saljemo funkciji se zove argument.

function greeting2(ime) {
  console.log("Zdravo" + ime);
}

greeting2("Meryem");

// Napraviti funkciju koja nam vraca zbir 3 i 5.
function zbirTriIPet() {
  const prom1 = 3;
  const prom2 = 5;
  //   kada se izvrsi cela logika funkcije,krajnji rezultat treba vratiti return keyword(rezervisanoj reci)
  return prom1 + prom2;
  //   console.log("nesto")kod koji se nadje nakon return u function scope se nece primeniti
}

// Napraviti funkciju koja vraca zbir dva broja:

function zbirDvaBroja(br1, br2) {
  return br1 + br2;
}
console.log(zbirDvaBroja(10, 5));

//  dodeljivanje defaultne vrednosti se moze izvrsiti na dva nacina:

// 1.

function zbirDvaBroja2(br1, br2) {
  if (br2 === undefined) {
    return br1;
  } else {
    return br1 + br2;
  }
}
console.log(zbirDvaBroja2(34));

// 2.
function zbirDvaBroja3(br1, br2 = 0) {
  return br1 + br2;
}
console.log(zbirDvaBroja3(15));
console.log(zbirDvaBroja3(15, 12));
